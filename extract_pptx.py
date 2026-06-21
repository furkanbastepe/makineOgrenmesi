#!/usr/bin/env python3
"""Complete, lossless-as-possible text extractor for .pptx files using only the
Python standard library. Walks the slide XML in document order, preserving
paragraph structure, indentation level, tables, grouped shapes and speaker notes.
"""
import sys
import re
import zipfile
import xml.etree.ElementTree as ET

A = "http://schemas.openxmlformats.org/drawingml/2006/main"
P = "http://schemas.openxmlformats.org/presentationml/2006/main"
R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships"
RELNS = "http://schemas.openxmlformats.org/package/2006/relationships"
DGM = "http://schemas.openxmlformats.org/drawingml/2006/diagram"


FIELD_PLACEHOLDERS = {
    "<number>", "<date>", "<time>", "<footer>", "<header>",
    "<slide-number>", "<page>", "<datetime>",
}


def is_field_placeholder(s):
    return s.strip().lower() in FIELD_PLACEHOLDERS


def q(ns, tag):
    return f"{{{ns}}}{tag}"


def local(tag):
    return tag.split("}", 1)[-1] if "}" in tag else tag


def para_text(p):
    """Join all text runs/breaks inside a single <a:p> paragraph."""
    parts = []
    for node in p.iter():
        lt = local(node.tag)
        if lt == "t":
            parts.append(node.text or "")
        elif lt == "br":
            parts.append("\n")
    return "".join(parts)


def para_level(p):
    pr = p.find(q(A, "pPr"))
    if pr is not None and pr.get("lvl"):
        try:
            return int(pr.get("lvl"))
        except ValueError:
            return 0
    return 0


def ph_type(sp):
    """Return placeholder type of a shape, or None."""
    nv = sp.find(f"{q(P,'nvSpPr')}/{q(P,'nvPr')}/{q(P,'ph')}")
    if nv is not None:
        return nv.get("type")
    return None


# placeholders that only carry auto-generated chrome (skip them entirely)
SKIP_PH = {"sldNum", "ftr", "dt", "hdr"}


def is_title_shape(sp):
    """Detect title/ctrTitle placeholder."""
    return ph_type(sp) in ("title", "ctrTitle")


def extract_table(tbl):
    rows_out = []
    for tr in tbl.findall(q(A, "tr")):
        cells = []
        for tc in tr.findall(q(A, "tc")):
            cell_lines = []
            txbody = tc.find(q(A, "txBody"))
            if txbody is not None:
                for p in txbody.findall(q(A, "p")):
                    txt = para_text(p).strip()
                    if txt:
                        cell_lines.append(txt)
            cells.append(" / ".join(cell_lines))
        rows_out.append(cells)
    return rows_out


def extract_diagram(z, data_part):
    """Extract text from a SmartArt diagram data part (ppt/diagrams/dataN.xml)."""
    try:
        root = ET.fromstring(z.read(data_part))
    except KeyError:
        return []
    lines = []
    seen = set()
    # Each model point <dgm:pt> holds a text body with paragraphs.
    for pt in root.iter(q(DGM, "pt")):
        txbody = pt.find(q(DGM, "t"))
        if txbody is None:
            continue
        pt_lines = []
        for p in txbody.findall(q(A, "p")):
            txt = para_text(p).strip()
            if txt:
                pt_lines.append(txt)
        joined = "\n".join(pt_lines).strip()
        if joined and joined not in seen:
            seen.add(joined)
            lines.append(joined)
    return lines


def walk(node, out, depth=0, z=None, slide_rels=None):
    """Recursively walk a shape-tree node, emitting structured lines."""
    lt = local(node.tag)

    if lt == "sp":  # shape (may have text body)
        if ph_type(node) in SKIP_PH:  # slide number / footer / date / header
            return
        title = is_title_shape(node)
        txbody = node.find(q(P, "txBody"))
        if txbody is not None:
            paras = txbody.findall(q(A, "p"))
            collected = []
            for p in paras:
                txt = para_text(p)
                lvl = para_level(p)
                collected.append((txt, lvl))
            # Drop fully-empty shapes
            if any(t.strip() for t, _ in collected):
                if title:
                    titletxt = " ".join(t.strip() for t, _ in collected if t.strip())
                    out.append(("title", titletxt, 0))
                else:
                    for t, lvl in collected:
                        if t.strip():
                            out.append(("bullet", t.strip(), lvl))
                        else:
                            out.append(("blank", "", lvl))
        return

    if lt == "graphicFrame":
        tbl = node.find(f"{q(A,'graphic')}/{q(A,'graphicData')}/{q(A,'tbl')}")
        if tbl is not None:
            rows = extract_table(tbl)
            # keep only tables that actually carry text (skip empty layout grids)
            if rows and any(c.strip() for r in rows for c in r):
                out.append(("table", rows, 0))
            return
        # SmartArt diagram -> resolve data part via slide rels
        relids = None
        for el in node.iter(q(DGM, "relIds")):
            relids = el
            break
        if relids is not None and z is not None and slide_rels is not None:
            dm = relids.get(q(R, "dm"))
            target = slide_rels.get(dm)
            if target:
                target = target.replace("../", "")
                if not target.startswith("ppt/"):
                    target = "ppt/" + target
                dlines = extract_diagram(z, target)
                if dlines:
                    out.append(("diagram", dlines, 0))
                    return
        # any other graphic (chart, ole) - recurse to catch stray text
        for child in node:
            walk(child, out, depth + 1, z, slide_rels)
        return

    if lt == "grpSp":  # group: recurse into children in document order
        for child in node:
            walk(child, out, depth + 1, z, slide_rels)
        return

    # default: recurse into children to catch nested text
    for child in node:
        walk(child, out, depth + 1, z, slide_rels)


def slide_rels_map(z, slide_part):
    base = slide_part.split("/")[-1]
    rels_name = f"ppt/slides/_rels/{base}.rels"
    m = {}
    try:
        rels = ET.fromstring(z.read(rels_name))
    except KeyError:
        return m
    for rel in rels.findall(q(RELNS, "Relationship")):
        m[rel.get("Id")] = rel.get("Target")
    return m


def extract_slide(xml_bytes, z=None, slide_rels=None):
    root = ET.fromstring(xml_bytes)
    sptree = root.find(f"{q(P,'cSld')}/{q(P,'spTree')}")
    out = []
    if sptree is not None:
        for child in sptree:
            walk(child, out, 0, z, slide_rels)
    return out


def extract_notes(xml_bytes):
    root = ET.fromstring(xml_bytes)
    lines = []
    for p in root.iter(q(A, "p")):
        txt = para_text(p).strip()
        if txt:
            lines.append(txt)
    # Filter out the trailing slide-number placeholder if it's just a digit
    return lines


def get_slide_order(z):
    """Return ordered list of slide part names using presentation.xml + rels."""
    try:
        pres = ET.fromstring(z.read("ppt/presentation.xml"))
    except KeyError:
        return None
    rels_xml = z.read("ppt/_rels/presentation.xml.rels")
    rels = ET.fromstring(rels_xml)
    rid_to_target = {}
    for rel in rels.findall(q(RELNS, "Relationship")):
        rid_to_target[rel.get("Id")] = rel.get("Target")
    order = []
    sldidlst = pres.find(q(P, "sldIdLst"))
    if sldidlst is None:
        return None
    for sldid in sldidlst.findall(q(P, "sldId")):
        rid = sldid.get(q(R, "id"))
        target = rid_to_target.get(rid)
        if target:
            target = target.lstrip("/")
            if not target.startswith("ppt/"):
                target = "ppt/" + target
            order.append(target)
    return order


def slide_notes_part(z, slide_part):
    """Find the notes slide part for a given slide part, if any."""
    base = slide_part.split("/")[-1]
    rels_name = f"ppt/slides/_rels/{base}.rels"
    try:
        rels = ET.fromstring(z.read(rels_name))
    except KeyError:
        return None
    for rel in rels.findall(q(RELNS, "Relationship")):
        if rel.get("Type", "").endswith("/notesSlide"):
            t = rel.get("Target").replace("../", "")
            if not t.startswith("ppt/"):
                t = "ppt/" + t
            return t
    return None


def flat(s):
    """Collapse soft line-breaks/whitespace inside a single paragraph line."""
    return re.sub(r"\s*\n\s*", " ", s).strip()


def render_md(path, title):
    z = zipfile.ZipFile(path)
    order = get_slide_order(z)
    if not order:
        # fallback: numeric sort of slide files
        names = [n for n in z.namelist() if re.match(r"ppt/slides/slide\d+\.xml$", n)]
        order = sorted(names, key=lambda n: int(re.search(r"(\d+)", n).group(1)))

    md = []
    md.append(f"# {title}\n")
    md.append(f"> Bu belge **{title}** sunumunun eksiksiz metin dökümüdür. Toplam {len(order)} slayt.\n")

    for idx, part in enumerate(order, 1):
        try:
            data = z.read(part)
        except KeyError:
            md.append(f"\n## Slayt {idx}\n\n*(okunamadı: {part})*\n")
            continue
        srels = slide_rels_map(z, part)
        items = extract_slide(data, z, srels)
        # drop auto-field placeholders (slide number, date, footer, ...)
        items = [it for it in items
                 if not (it[0] in ("bullet", "title") and is_field_placeholder(it[1]))]
        md.append(f"\n---\n\n## Slayt {idx}\n")

        has_text = any(k in ("title", "bullet", "table", "diagram") for k, _, _ in items)
        if not has_text:
            md.append("\n*(Bu slayt yalnızca görsel/şema içeriyor; çıkarılabilir metin yok.)*\n")

        # find a title to use as subheading
        title_used = False
        for kind, payload, lvl in items:
            if kind == "title" and not title_used:
                md.append(f"\n### {flat(payload)}\n")
                title_used = True
                continue
            if kind == "title":
                md.append(f"\n**{flat(payload)}**\n")
                continue
            if kind == "bullet":
                indent = "  " * lvl
                md.append(f"{indent}- {flat(payload)}")
                continue
            if kind == "blank":
                continue
            if kind == "diagram":
                md.append("\n**[Şema / SmartArt]**\n")
                for dl in payload:
                    sub = dl.split("\n")
                    md.append(f"- {sub[0]}")
                    for extra in sub[1:]:
                        md.append(f"  - {extra}")
                md.append("")
                continue
            if kind == "table":
                md.append("")
                rows = payload
                if rows:
                    ncol = max(len(r) for r in rows)
                    header = rows[0] + [""] * (ncol - len(rows[0]))
                    md.append("| " + " | ".join(c.replace("\n", " ") for c in header) + " |")
                    md.append("| " + " | ".join(["---"] * ncol) + " |")
                    for r in rows[1:]:
                        r = r + [""] * (ncol - len(r))
                        md.append("| " + " | ".join(c.replace("\n", " ") for c in r) + " |")
                md.append("")
                continue

        # speaker notes
        notes_part = slide_notes_part(z, part)
        if notes_part:
            try:
                notes = extract_notes(z.read(notes_part))
            except KeyError:
                notes = []
            # remove a lone trailing page number
            notes = [n for n in notes if not re.fullmatch(r"\d+", n)]
            if notes:
                md.append("\n> **Konuşmacı Notları:**\n")
                for n in notes:
                    md.append(f"> {n}")

    return "\n".join(md) + "\n"


if __name__ == "__main__":
    src = sys.argv[1]
    title = sys.argv[2]
    out = sys.argv[3]
    text = render_md(src, title)
    with open(out, "w", encoding="utf-8") as f:
        f.write(text)
    # quick coverage stat
    z = zipfile.ZipFile(src)
    total_t = 0
    for n in z.namelist():
        if re.match(r"ppt/slides/slide\d+\.xml$", n):
            total_t += z.read(n).count(b"<a:t>")
    print(f"Wrote {out}: {len(text)} chars; raw <a:t> in slides: {total_t}")
