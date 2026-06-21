/* ============================================================
   ML SINAV KAMPI — Motor (app.js)
   Vanilla JS, bağımlılıksız, file:// üzerinde çalışır.
   Pedagoji: aktif hatırlama + aralıklı tekrar + araya serpiştirme
             + anlat-bakalım (Feynman) + oyunlaştırma.
   ============================================================ */
(function(){
"use strict";

/* ---------------- Birimler & 3 Günlük Plan ---------------- */
const UNITS = [
  {key:"temeller",  title:"ML Temelleri",            icon:"🧠", color:"#58cc02", day:1, desc:"Makine öğrenmesinin ABC'si"},
  {key:"metrikler", title:"Performans Metrikleri",   icon:"🎯", color:"#1cb0f6", day:1, desc:"Confusion matrix, accuracy, ROC, AUC"},
  {key:"veri",      title:"Veri Hazırlama",          icon:"🧹", color:"#12d7c4", day:1, desc:"EDA, normalizasyon, çapraz doğrulama"},
  {key:"regresyon", title:"Regresyon",               icon:"📈", color:"#a560ff", day:2, desc:"Doğrusal & lojistik regresyon"},
  {key:"dt",        title:"Karar Ağaçları",          icon:"🌳", color:"#2bb673", day:2, desc:"Kök · düğüm · yaprak"},
  {key:"knn",       title:"K-En Yakın Komşu",        icon:"📍", color:"#ff9600", day:2, desc:"Uzaklıklar · k seçimi · hesaplar"},
  {key:"svm",       title:"Destek Vektör Makineleri",icon:"⚔️", color:"#ff4b8b", day:3, desc:"Hiperdüzlem · marjin · kernel"},
  {key:"denetimsiz",title:"Denetimsiz Öğrenme",      icon:"🔍", color:"#ffc800", day:3, desc:"K-Means · hiyerarşik · Apriori"},
];
const UNIT = {}; UNITS.forEach(u=>UNIT[u.key]=u);
const DAY_INFO = {
  1:{name:"1. Gün — Temel & Ölçme", emoji:"🌅", units:["temeller","metrikler","veri"]},
  2:{name:"2. Gün — Algoritmalar",  emoji:"⚙️", units:["regresyon","dt","knn"]},
  3:{name:"3. Gün — İleri & Sınav", emoji:"🏆", units:["svm","denetimsiz"]},
};
const LESSON_SIZE = 7;
const HEART_MAX = 5;
const HEART_REGEN_MIN = 15;
const DAILY_GOAL = 80; // günlük XP hedefi

/* ---------------- Rozetler ---------------- */
const BADGES = [
  {id:"first",   ic:"👶", name:"İlk Adım",        cond:s=>s.totalAnswered>=1},
  {id:"perfect", ic:"💎", name:"Mükemmeliyetçi",  cond:s=>s.flags.perfectLesson},
  {id:"combo10", ic:"🔥", name:"Seri Katili",     cond:s=>s.maxCombo>=10},
  {id:"marathon",ic:"🏃", name:"Maratoncu",       cond:s=>s.flags.day50},
  {id:"knn",     ic:"📍", name:"KNN Ustası",      cond:s=>mastery("knn")>=0.9},
  {id:"svm",     ic:"⚔️", name:"SVM Şövalyesi",   cond:s=>mastery("svm")>=0.9},
  {id:"metric",  ic:"🎯", name:"Metrik Avcısı",   cond:s=>mastery("metrikler")>=0.9},
  {id:"exam85",  ic:"🎖️", name:"Sınav Kahramanı", cond:s=>s.bestExam>=85},
  {id:"exam100", ic:"👑", name:"TAM PUAN",        cond:s=>s.bestExam>=100},
  {id:"mistake", ic:"🧹", name:"Hata Avcısı",     cond:s=>s.flags.clearedMistakes},
  {id:"sage",    ic:"🦉", name:"Bilge (Feynman)", cond:s=>s.feynmanDone>=5},
  {id:"streak3", ic:"📅", name:"3 Gün Serisi",    cond:s=>s.streak>=3},
];

/* ---------------- Durum (localStorage) ---------------- */
const SKEY="mlkamp_v1";
const DEF={
  xp:0, dailyXP:0, dailyDate:"", streak:0, lastActive:"",
  hearts:HEART_MAX, heartTs:0,
  solved:{},            // id -> true (en az bir kez doğru)
  srs:{},               // id -> {box, due}
  mistakes:{},          // id -> count
  lessons:{},           // "unit:idx" -> stars(1-3)
  badges:{},            // id -> true
  totalAnswered:0, totalCorrect:0, maxCombo:0,
  bestExam:0, examHistory:[], feynmanDone:0,
  feynmanSeen:{}, checkpoints:{},
  flags:{}, settings:{sound:true},
};
let S = load();
function load(){
  try{ const r=JSON.parse(localStorage.getItem(SKEY)); if(r) return Object.assign({},DEF,r,{flags:Object.assign({},DEF.flags,r.flags),settings:Object.assign({},DEF.settings,r.settings)}); }catch(e){}
  return JSON.parse(JSON.stringify(DEF));
}
function save(){ try{localStorage.setItem(SKEY,JSON.stringify(S));}catch(e){} }

/* ---------------- Veri indeksleme ---------------- */
let ALLQ=[], QBYID={}, QBYUNIT={}, CBYUNIT={}, ALLC=[];
function indexData(){
  ALLQ=[];QBYID={};QBYUNIT={};CBYUNIT={};ALLC=[];
  UNITS.forEach(u=>{QBYUNIT[u.key]=[];CBYUNIT[u.key]=[];});
  const bank = window.QBANK||{};
  Object.keys(bank).forEach(dk=>{
    const d=bank[dk];
    (d.questions||[]).forEach((q,i)=>{
      if(!q.id) q.id = dk+"-q"+i;
      if(!q.unit) q.unit = (dk==="ryz"?"temeller":dk);
      if(!QBYUNIT[q.unit]) QBYUNIT[q.unit]=[];
      QBYUNIT[q.unit].push(q); QBYID[q.id]=q; ALLQ.push(q);
    });
    (d.concepts||[]).forEach(c=>{
      if(!c.unit) c.unit=(dk==="ryz"?"temeller":dk);
      if(!CBYUNIT[c.unit]) CBYUNIT[c.unit]=[];
      CBYUNIT[c.unit].push(c); ALLC.push(c);
    });
  });
}

/* ---------------- Yardımcılar ---------------- */
const $ = (s,r)=> (r||document).querySelector(s);
const $$ = (s,r)=> Array.from((r||document).querySelectorAll(s));
function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));}
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function todayStr(){const d=new Date();return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();}
function pick(arr,n){return shuffle(arr).slice(0,n);}
function norm(s){return String(s||"").toLocaleLowerCase("tr").replace(/[\s.,;:!?'"’`()]+/g," ").replace(/\s+/g," ").trim();}
function slidesOf(src){const m=String(src||"").match(/Slayt\s+([\d ,]+)/i);if(!m)return [];return (m[1].match(/\d+/g)||[]).map(Number);}

/* Birim -> bölümler (konu anlatımı + o bölüme ait sorular).
   Anlatım, soruları kaynak slayt numarasına göre eşleştirir; eşleşmeyenler
   "Karma" bölümüne düşer -> hiçbir soru kaybolmaz (eksiksizlik). */
let CHAPTERS={};
function buildChapters(){
  CHAPTERS={};
  UNITS.forEach(u=>{
    const uk=u.key, qs=QBYUNIT[uk]||[], syl=(window.SYLLABUS||{})[uk];
    const used=new Set(); let chs=[];
    if(syl&&syl.chapters&&syl.chapters.length){
      chs=syl.chapters.map((c,i)=>{
        const slset=new Set(c.slides||[]);
        const cq=qs.filter(q=>slidesOf(q.source).some(s=>slset.has(s)));
        cq.forEach(q=>used.add(q.id));
        return {id:c.id||uk+"-ch"+i,title:c.title,slides:c.slides||[],teach:c.teach||[],qs:cq};
      });
    }
    const left=qs.filter(q=>!used.has(q.id));
    if(left.length){
      if(!chs.length){
        for(let i=0;i<left.length;i+=LESSON_SIZE)
          chs.push({id:uk+"-auto"+i,title:"Bölüm "+(i/LESSON_SIZE+1),slides:[],teach:[],qs:left.slice(i,i+LESSON_SIZE)});
      } else {
        chs.push({id:uk+"-karma",title:"Karma Alıştırma",slides:[],teach:[],qs:left});
      }
    }
    CHAPTERS[uk]=chs;
  });
}
function unitIntro(uk){const s=(window.SYLLABUS||{})[uk];return s&&s.intro?s.intro:"";}
function shortTitle(t,i){t=t||("Konu "+(i+1));return t.length>18?t.slice(0,17)+"…":t;}

/* ---------------- Ses (WebAudio) ---------------- */
let actx=null;
function tone(freqs,dur,type){
  if(!S.settings.sound) return;
  try{
    actx=actx||new (window.AudioContext||window.webkitAudioContext)();
    const t0=actx.currentTime;
    freqs.forEach((f,i)=>{
      const o=actx.createOscillator(),g=actx.createGain();
      o.type=type||"sine";o.frequency.value=f;
      const st=t0+i*0.08;
      g.gain.setValueAtTime(0,st);g.gain.linearRampToValueAtTime(.18,st+.02);
      g.gain.exponentialRampToValueAtTime(.0001,st+(dur||.18));
      o.connect(g).connect(actx.destination);o.start(st);o.stop(st+(dur||.18)+.02);
    });
  }catch(e){}
}
const sfx={
  good:()=>tone([660,880],.16,"triangle"),
  bad:()=>tone([180,120],.25,"sawtooth"),
  level:()=>tone([523,659,784,1046],.18,"triangle"),
  win:()=>tone([523,659,784,1046,1318],.16,"triangle"),
  click:()=>tone([440],.05,"sine"),
};

/* ---------------- Toast & Combo & Konfeti ---------------- */
let toastT;
function toast(msg,ic){
  const t=$("#toast");t.innerHTML=(ic?`<span class="ic">${ic}</span>`:"")+`<span>${esc(msg)}</span>`;
  t.classList.add("show");clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove("show"),2200);
}
function comboPop(n){
  const c=$("#combo");c.textContent="🔥 "+n+"x KOMBO!";c.classList.remove("show");void c.offsetWidth;c.classList.add("show");
}
function confetti(){
  const cv=$("#confetti");const ctx=cv.getContext("2d");
  cv.width=innerWidth;cv.height=innerHeight;
  const cols=["#58cc02","#1cb0f6","#ffc800","#ff4b8b","#a560ff","#12d7c4"];
  const P=[];for(let i=0;i<140;i++)P.push({x:innerWidth/2,y:innerHeight*0.35,vx:(Math.random()-.5)*14,vy:Math.random()*-14-4,g:.4+Math.random()*.3,s:6+Math.random()*8,c:cols[i%cols.length],r:Math.random()*6,vr:(Math.random()-.5)*.4});
  let f=0;
  (function loop(){
    ctx.clearRect(0,0,cv.width,cv.height);f++;
    P.forEach(p=>{p.vy+=p.g;p.x+=p.vx;p.y+=p.vy;p.r+=p.vr;ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.r);ctx.fillStyle=p.c;ctx.fillRect(-p.s/2,-p.s/2,p.s,p.s*.6);ctx.restore();});
    if(f<120)requestAnimationFrame(loop);else ctx.clearRect(0,0,cv.width,cv.height);
  })();
}

/* ---------------- Oyunlaştırma ---------------- */
function levelOf(xp){return Math.floor(xp/120)+1;}
function levelProg(xp){return (xp%120)/120;}
function mastery(uk){
  const qs=QBYUNIT[uk]||[];if(!qs.length)return 0;
  let c=0;qs.forEach(q=>{if(S.solved[q.id])c++;});return c/qs.length;
}
function overallMastery(){let t=0,c=0;UNITS.forEach(u=>{const qs=QBYUNIT[u.key]||[];t+=qs.length;qs.forEach(q=>{if(S.solved[q.id])c++;});});return t?c/t:0;}
function regenHearts(){
  if(S.hearts>=HEART_MAX){S.heartTs=Date.now();return;}
  if(!S.heartTs)S.heartTs=Date.now();
  const gained=Math.floor((Date.now()-S.heartTs)/(HEART_REGEN_MIN*60000));
  if(gained>0){S.hearts=Math.min(HEART_MAX,S.hearts+gained);S.heartTs=Date.now();}
}
function touchDay(){
  const t=todayStr();
  if(S.dailyDate!==t){S.dailyDate=t;S.dailyXP=0;}
  if(S.lastActive!==t){
    const y=new Date();y.setDate(y.getDate()-1);
    const ys=y.getFullYear()+"-"+(y.getMonth()+1)+"-"+y.getDate();
    S.streak = (S.lastActive===ys)? S.streak+1 : 1;
    S.lastActive=t;
  }
}
function addXP(n){
  const before=levelOf(S.xp);
  S.xp+=n;S.dailyXP+=n;
  const after=levelOf(S.xp);
  if(after>before){sfx.level();toast("Seviye "+after+"! 🚀","⭐");}
  renderTop();
}
function checkBadges(){
  let newOnes=[];
  BADGES.forEach(b=>{if(!S.badges[b.id] && b.cond(S)){S.badges[b.id]=true;newOnes.push(b);}});
  if(newOnes.length){save();newOnes.forEach(b=>toast("Rozet: "+b.name,b.ic));}
}

/* ---------------- SRS (Leitner) ---------------- */
const SRS_H=[0,4,24,48,96,168];
function srsUpdate(id,correct){
  let r=S.srs[id]||{box:0,due:0};
  r.box = correct? Math.min(5,r.box+1) : Math.max(0,r.box-1);
  r.due = Date.now()+SRS_H[r.box]*3600*1000;
  S.srs[id]=r;
}
function dueCards(){
  const now=Date.now();
  return ALLQ.filter(q=>S.srs[q.id] && S.srs[q.id].due<=now);
}

/* ============================================================
   ÜST BAR + ALT NAV
   ============================================================ */
function renderTop(){
  regenHearts();
  $("#statsMini").innerHTML=`
    <div class="chip fire" title="Günlük seri"><span class="ic">🔥</span>${S.streak}</div>
    <div class="chip gold" title="XP"><span class="ic">⭐</span>${S.xp}</div>
    <div class="chip heart" title="Can"><span class="ic">❤️</span>${S.hearts}</div>`;
}
const NAV=[
  {v:"home",ic:"🗺️",t:"Harita"},
  {v:"review",ic:"🔁",t:"Tekrar"},
  {v:"lab",ic:"🧪",t:"Lab"},
  {v:"cards",ic:"🃏",t:"Kartlar"},
  {v:"profile",ic:"📊",t:"Profil"},
];
function renderNav(active){
  $("#bottomnav").innerHTML=NAV.map(n=>{
    let pill="";
    if(n.v==="review"){const d=dueCards().length;if(d)pill=`<span style="position:absolute;top:2px;right:14px;background:var(--red);color:#fff;border-radius:999px;font-size:9px;padding:1px 5px">${d}</span>`;}
    return `<button data-nav="${n.v}" class="${active===n.v?'active':''}" style="position:relative"><span class="ic">${n.ic}</span>${n.t}${pill}</button>`;
  }).join("");
  $$("#bottomnav button").forEach(b=>b.onclick=()=>{sfx.click();go(b.dataset.nav);});
}

/* ============================================================
   ROUTER
   ============================================================ */
let CURRENT="home";
function go(v,arg){
  CURRENT=v;window.scrollTo(0,0);
  killExamTimer();
  const view=$("#view");
  $("#topbar").classList.remove("hidden");$("#bottomnav").classList.remove("hidden");
  if(v==="home")viewHome(view);
  else if(v==="review")viewReview(view);
  else if(v==="lab")viewLab(view);
  else if(v==="cards")viewCards(view,arg);
  else if(v==="profile")viewProfile(view);
  else if(v==="unit")viewUnit(view,arg);
  else if(v==="feynman")viewFeynman(view,arg);
  renderTop();renderNav(["home","review","lab","cards","profile"].includes(v)?v:null);
  save();
}

/* ============================================================
   ANA EKRAN — Harita + 3 gün + günlük hedef
   ============================================================ */
let activeDay=1;
function viewHome(view){
  touchDay();save();
  const om=Math.round(overallMastery()*100);
  const goalPct=Math.min(1,S.dailyXP/DAILY_GOAL);
  const ringC=2*Math.PI*42;
  view.innerHTML=`
  <section class="hero">
    <span class="big-emoji">🎓</span>
    <h1>3 Günde Tam Puana Hazırlan</h1>
    <p>Okumak yerine <b>çöz, hatırla, anlat</b>. Bilimsel olarak en kalıcı yöntemlerle, oyun gibi. Genel hakimiyetin <b>%${om}</b>.</p>
    <div class="goal-ring">
      <div class="ring">
        <svg width="96" height="96"><circle cx="48" cy="48" r="42" stroke="#22304f" stroke-width="9" fill="none"/>
        <circle cx="48" cy="48" r="42" stroke="#ffc800" stroke-width="9" fill="none" stroke-linecap="round"
          stroke-dasharray="${ringC}" stroke-dashoffset="${ringC*(1-goalPct)}"/></svg>
        <div class="lbl"><b>${S.dailyXP}</b><span>/${DAILY_GOAL} XP</span></div>
      </div>
      <div style="text-align:left">
        <div style="font-weight:900;font-size:16px">Günün Hedefi ${goalPct>=1?'✅':''}</div>
        <div class="muted tiny">Seviye ${levelOf(S.xp)} · ${S.xp} XP · 🔥 ${S.streak} gün</div>
        <div class="btn-row" style="margin-top:10px">
          <button class="btn primary sm" id="quickStart">⚡ Hızlı Başla</button>
          <button class="btn blue sm" id="quickExam">📝 Deneme</button>
        </div>
      </div>
    </div>
  </section>

  <div class="day-tabs" id="dayTabs">
    ${[1,2,3].map(d=>`<div class="day-tab ${d===activeDay?'active':''}" data-day="${d}">
      <b>${DAY_INFO[d].emoji} ${d}. Gün</b><small>${DAY_INFO[d].name.split('— ')[1]}</small></div>`).join("")}
  </div>

  <div class="quick-grid">
    <button class="qa" data-nav="review"><span class="qic">🔁</span>${dueCards().length?`<span class="pill">${dueCards().length}</span>`:""}<b>Aralıklı Tekrar</b><small>Unutmadan pekiştir</small></button>
    <button class="qa" id="qaMistake"><span class="qic">🧯</span>${Object.keys(S.mistakes).length?`<span class="pill">${Object.keys(S.mistakes).length}</span>`:""}<b>Hata Defteri</b><small>Zayıf noktalar</small></button>
    <button class="qa" data-nav="cards"><span class="qic">🃏</span><b>Kavram Kartları</b><small>Hızlı öğren</small></button>
    <button class="qa" data-nav="lab"><span class="qic">🧪</span><b>Simülasyon Lab</b><small>Yaparak öğren</small></button>
  </div>

  <div class="section-title">🗺️ ${DAY_INFO[activeDay].name}</div>
  <div class="path" id="path"></div>
  <div id="checkpointHost"></div>

  <div style="height:20px"></div>
  <div class="card center">
    <div style="font-size:30px">🏁</div>
    <h3 style="font-weight:900;margin:6px 0">Büyük Deneme Sınavı</h3>
    <p class="muted tiny" style="margin-bottom:12px">Tüm konulardan, süreli, 30 soruluk gerçek sınav simülasyonu. En iyi: <b>%${S.bestExam}</b></p>
    <button class="btn danger lg" id="bigExam">📝 Deneme Sınavına Gir</button>
  </div>`;

  // gün sekmeleri
  $$("#dayTabs .day-tab").forEach(t=>t.onclick=()=>{activeDay=+t.dataset.day;sfx.click();viewHome(view);renderTop();});
  // path + kontrol noktası
  renderPath($("#path"),activeDay);
  renderCheckpoint(activeDay);
  // quick actions
  $$("[data-nav]",view).forEach(b=>b.onclick=()=>{sfx.click();go(b.dataset.nav);});
  $("#qaMistake").onclick=()=>startMistake();
  $("#quickStart").onclick=()=>quickStart();
  $("#quickExam").onclick=()=>startExam();
  $("#bigExam").onclick=()=>startExam();
}
function renderPath(host,day){
  const units=DAY_INFO[day].units;
  host.innerHTML=units.map(uk=>{
    const u=UNIT[uk];const chs=CHAPTERS[uk]||[];
    let nodes="";let prevDone=true;
    chs.forEach((ch,i)=>{
      const lk=uk+":"+i;const stars=S.lessons[lk]||0;
      const done=stars>0;const current=!done&&prevDone;const locked=!done&&!prevDone;
      const cls=done?"done":current?"current":"locked";
      const hasTeach=ch.teach&&ch.teach.length;
      const icon=done?"✓":(hasTeach?"📖":(i+1));
      const crown=stars>=3?'<span class="crown">👑</span>':'';
      nodes+=`<div class="node ${cls}" data-les="${lk}"><button class="bubble">${icon}${crown}</button>
        <div class="stars">${"⭐".repeat(stars)}</div><div class="cap">${esc(shortTitle(ch.title,i))}</div></div>`;
      prevDone=done;
    });
    const m=Math.round(mastery(uk)*100);
    return `<div class="unit-block">
      <div class="unit-head" style="background:linear-gradient(160deg,${u.color},${shade(u.color,-25)})">
        <span class="uic">${u.icon}</span>
        <div class="meta"><h3>${u.title}</h3><p>${chs.length} konu · ${(QBYUNIT[uk]||[]).length} soru</p></div>
        <span class="ubadge">%${m}</span>
      </div>
      <div class="nodes">${nodes||'<p class="muted tiny">Bu konu yükleniyor…</p>'}</div>
    </div>`;
  }).join("");
  $$(".node",host).forEach(n=>{
    n.querySelector(".bubble").onclick=()=>{
      if(n.classList.contains("locked")){toast("Önce önceki konuyu bitir","🔒");return;}
      const [uk,idx]=n.dataset.les.split(":");startChapter(uk,+idx);
    };
  });
}
function renderCheckpoint(day){
  const host=$("#checkpointHost");if(!host)return;
  const units=DAY_INFO[day].units;
  let totalCh=0,doneCh=0;
  units.forEach(uk=>(CHAPTERS[uk]||[]).forEach((c,i)=>{totalCh++;if(S.lessons[uk+":"+i])doneCh++;}));
  const ready=totalCh>0 && doneCh>=Math.ceil(totalCh*0.6);
  const passed=S.checkpoints&&S.checkpoints[day];
  host.innerHTML=`<div class="checkpoint ${ready?'':'locked'}">
    <div class="cp-ic">${passed?'🏅':'🎯'}</div>
    <h3 style="font-weight:900;margin:6px 0">${day}. Gün Kontrol Noktası ${passed?'✓':''}</h3>
    <p class="muted tiny" style="margin-bottom:12px">Bu günün + önceki günlerin konularından <b>kümülatif</b> test — geçmişi pekiştirir. ${ready?'Hazırsın! Hedef %80+':'Bu günün derslerinin çoğunu bitirince açılır ('+doneCh+'/'+totalCh+').'}</p>
    <button class="btn violet lg" id="cpBtn" ${ready?'':'disabled'}>🎯 Kontrol Noktasına Gir</button>
  </div>`;
  if(ready)$("#cpBtn").onclick=()=>startCheckpoint(day);
}

/* ---- Bölüm akışı: ÖĞREN -> PRATİK (ustalık) ---- */
function startChapter(uk,idx){
  const ch=(CHAPTERS[uk]||[])[idx];if(!ch){toast("Bölüm bulunamadı","⚠️");return;}
  if(ch.teach&&ch.teach.length) viewTeach(uk,ch,idx,()=>startChapterPractice(uk,idx));
  else startChapterPractice(uk,idx);
}
function startChapterPractice(uk,idx){
  const chs=CHAPTERS[uk];const ch=chs[idx];
  let qs=shuffle((ch.qs||[]).slice());
  // kümülatif serpiştirme: önceki bölümlerden 1-2 hatırlatma sorusu
  if(idx>0){
    const prev=[];for(let i=0;i<idx;i++)prev.push(...(chs[i].qs||[]));
    const pool=prev.filter(q=>S.solved[q.id]); const src=pool.length?pool:prev;
    pick(src,Math.min(2,src.length)).forEach(q=>{qs.splice(Math.floor(Math.random()*(qs.length+1)),0,q);});
  }
  if(!qs.length){toast("Bu bölümde soru yok","ℹ️");return;}
  runSession({title:UNIT[uk].title+" · "+shortTitle(ch.title,idx),questions:qs,mode:"lesson",hearts:false,masteryMode:true,lessonKey:uk+":"+idx});
}
function startCheckpoint(day){
  let pool=[];for(let d=1;d<=day;d++)DAY_INFO[d].units.forEach(uk=>pool.push(...(QBYUNIT[uk]||[])));
  if(pool.length<5){toast("Yeterli soru yok","ℹ️");return;}
  const qs=shuffle(pool).slice(0,Math.min(14,pool.length));
  runSession({title:day+". Gün Kontrol Noktası",questions:qs,mode:"checkpoint",hearts:true,checkpointDay:day});
}

/* ---- Konu anlatımı ekranı ---- */
function viewTeach(uk,ch,idx,onDone){
  $("#topbar").classList.add("hidden");$("#bottomnav").classList.add("hidden");
  const view=$("#view");
  view.innerHTML=`
    <div class="quiz-top"><button class="x-close" id="tClose">✕</button><div class="progress"><i style="width:100%"></i></div><div style="font-size:20px">📖</div></div>
    <div class="teach-wrap">
      <div class="teach-hero">
        <div class="ch-kicker">${esc(UNIT[uk].title)} · Konu ${idx+1}/${(CHAPTERS[uk]||[]).length}</div>
        <h1>${esc(ch.title)}</h1>
        ${(unitIntro(uk)&&idx===0)?`<p>${esc(unitIntro(uk))}</p>`:""}
      </div>
      <div id="teachBody"></div>
    </div>
    <div class="teach-cta"><div class="inner"><button class="btn primary lg" id="toPractice">✍️ Anladım, Pratiğe Geç →</button></div></div>`;
  const body=$("#teachBody");
  (ch.teach||[]).forEach(b=>{const el=renderTeachBlock(b);if(el)body.appendChild(el);});
  $("#tClose").onclick=()=>go("home");
  $("#toPractice").onclick=onDone;
  window.scrollTo(0,0);
}
function renderTeachBlock(b){
  const d=document.createElement("div");d.className="tb";
  switch(b.kind){
    case "text": d.innerHTML=`<div class="tb-text">${b.html||""}</div>`;break;
    case "analogy": d.innerHTML=`<div class="tb-analogy"><span class="ic">🔗</span><div class="body">${b.html||""}</div></div>`;break;
    case "formula": d.innerHTML=`<div class="tb-formula"><div class="f">${esc(b.text||"")}</div>${b.caption?`<div class="cap">${esc(b.caption)}</div>`:""}</div>`;break;
    case "example": d.innerHTML=`<div class="tb-example"><h4>📝 ${esc(b.title||"Çözümlü Örnek")}</h4><ol>${(b.steps||[]).map(s=>`<li>${esc(s)}</li>`).join("")}</ol></div>`;break;
    case "key": d.innerHTML=`<div class="tb-key"><span class="ic">⭐</span><div class="body">${b.html||""}</div></div>`;break;
    case "terms": d.innerHTML=`<div class="tb-terms">${(b.terms||[]).map(t=>`<div class="tb-term"><div class="t">${esc(t.term)}</div><div class="d">${esc(t.def)}</div></div>`).join("")}</div>`;break;
    case "compare": d.innerHTML=`<div class="tb-compare"><table>${b.title?`<caption>${esc(b.title)}</caption>`:""}<tr><th></th><th>${esc(b.colA||"")}</th><th>${esc(b.colB||"")}</th></tr>${(b.rows||[]).map(r=>`<tr><td>${esc(r.label)}</td><td>${esc(r.a)}</td><td>${esc(r.b)}</td></tr>`).join("")}</table></div>`;break;
    case "visual":{
      d.className="tb tb-visual";const host=document.createElement("div");d.appendChild(host);
      if(window.VIS&&b.component)VIS.render(b.component,host,b);
      // flow caption'ı adımlara dönüştüğünde altta tekrar gösterme
      const hideCap=b.component==="flow"&&!(Array.isArray(b.steps)&&b.steps.length);
      if(b.caption&&!hideCap){const c=document.createElement("div");c.className="cap";c.textContent=b.caption;d.appendChild(c);}
      break;
    }
    default: return null;
  }
  return d;
}
function shade(hex,p){
  const n=parseInt(hex.slice(1),16);let r=(n>>16)+p,g=((n>>8)&255)+p,b=(n&255)+p;
  r=Math.max(0,Math.min(255,r));g=Math.max(0,Math.min(255,g));b=Math.max(0,Math.min(255,b));
  return "#"+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1);
}

/* ============================================================
   DERS / OTURUM MOTORU
   ============================================================ */
let SES=null;
function startLesson(uk,idx){
  const qs=QBYUNIT[uk]||[];if(!qs.length){toast("Bu konu henüz hazır değil","⏳");return;}
  const start=idx*LESSON_SIZE;
  let chunk=qs.slice(start,start+LESSON_SIZE);
  if(!chunk.length)chunk=pick(qs,Math.min(LESSON_SIZE,qs.length));
  chunk=shuffle(chunk);
  runSession({title:UNIT[uk].title+" · Ders "+(idx+1),questions:chunk,mode:"lesson",hearts:true,lessonKey:uk+":"+idx});
}
function quickStart(){
  // En zayıf birimden veya hiç çözülmemişlerden hızlı 8 soru (araya serpiştirme)
  let pool=ALLQ.filter(q=>!S.solved[q.id]);
  if(pool.length<8)pool=ALLQ;
  const qs=shuffle(pool).slice(0,8);
  runSession({title:"⚡ Hızlı Antrenman",questions:qs,mode:"lesson",hearts:true});
}
function startMistake(){
  const ids=Object.keys(S.mistakes);
  if(!ids.length){toast("Harika! Hata defterin boş 🎉","✨");return;}
  const qs=ids.map(id=>QBYID[id]).filter(Boolean);
  runSession({title:"🧯 Hata Defteri",questions:shuffle(qs).slice(0,12),mode:"mistake",hearts:false});
}
function startReviewSession(){
  let qs=dueCards();
  if(!qs.length)qs=shuffle(ALLQ.filter(q=>S.srs[q.id])).slice(0,10);
  if(!qs.length)qs=shuffle(ALLQ).slice(0,10);
  runSession({title:"🔁 Aralıklı Tekrar",questions:shuffle(qs).slice(0,15),mode:"review",hearts:false});
}

function runSession(opts){
  SES={...opts,idx:0,correct:0,combo:0,results:[],firstTry:{},startT:Date.now()};
  $("#topbar").classList.add("hidden");$("#bottomnav").classList.add("hidden");
  if(opts.timed){examTimerStart(opts.timed);}
  renderQ();
}
function renderQ(){
  const view=$("#view");
  if(SES.idx>=SES.questions.length){return finishSession();}
  const q=SES.questions[SES.idx];
  const pct=(SES.idx/SES.questions.length)*100;
  const heartsHtml = SES.hearts? `<div class="quiz-hearts">${"❤️".repeat(S.hearts)}${"🖤".repeat(HEART_MAX-S.hearts)}</div>`:"";
  const exam = SES.mode==="exam";
  view.innerHTML=`
    <div class="quiz-top">
      <button class="x-close" id="qClose">✕</button>
      <div class="progress"><i style="width:${pct}%"></i></div>
      ${exam?`<div class="exam-timer" id="examTimer">--:--</div>`:heartsHtml}
    </div>
    <div class="q-wrap" id="qWrap"></div>
    <div class="check-bar" id="checkBar"><div class="inner"></div></div>`;
  $("#qClose").onclick=()=>{ if(confirm("Çıkmak istediğine emin misin? İlerleme kaydedilmeyecek."))go("home"); };
  if(exam) syncExamTimer();
  const wrap=$("#qWrap");
  const kicker = exam? `SORU ${SES.idx+1}/${SES.questions.length}` : (SES.title||"").toUpperCase();
  let typeLbl={mcq:"Çoktan seçmeli",truefalse:"Doğru / Yanlış",fill:"Boşluk doldur",order:"Sırala",categorize:"Grupla",match:"Eşleştir",calc:"Hesapla"}[q.type]||"";
  wrap.innerHTML=`<div class="q-kicker"><span>${esc(kicker)}</span>·<span>${typeLbl}</span><span class="src">${esc(q.source||"")}</span></div>
    <div class="q-text" id="qText">${formatQ(q)}</div>
    <div id="qBody"></div>
    ${(!exam && (CBYUNIT[q.unit]||[]).length)?`<div style="margin-top:14px"><button class="btn ghost sm" id="learnBtn">💡 İpucu / Öğren</button><div id="learnBox"></div></div>`:""}`;
  const handler=makeHandler(q,$("#qBody"));
  buildCheckBar(q,handler);
  if($("#learnBtn"))$("#learnBtn").onclick=()=>showLearn(q);
  // klavye
  document.onkeydown=(e)=>handleKey(e,q,handler);
}
function formatQ(q){
  let t=esc(q.q||"");
  if(q.type==="truefalse")t='“'+t+'”';
  return t;
}
function showLearn(q){
  const box=$("#learnBox");if(!box)return;
  if(box.dataset.open){box.innerHTML="";box.dataset.open="";return;}
  box.dataset.open="1";
  const cs=(CBYUNIT[q.unit]||[]);
  // ilgili kavramı kaynak/etikete göre seç, yoksa ilkini
  let c=cs.find(x=>q.tags&&x.title&&q.tags.some(t=>x.title.toLocaleLowerCase("tr").includes(String(t).toLocaleLowerCase("tr"))))||cs[Math.floor(Math.random()*cs.length)];
  box.innerHTML=`<div class="note" style="margin-top:10px"><b>${esc(c.title)}</b><ul style="margin:8px 0 0 18px">${(c.body||[]).map(b=>`<li>${esc(b)}</li>`).join("")}</ul>${c.formula?`<div class="kbd" style="margin-top:8px;display:inline-block">${esc(c.formula)}</div>`:""}</div>`;
}

/* ---- Soru tipi işleyicileri ---- */
function makeHandler(q,host){
  if(q.type==="mcq")return hMCQ(q,host);
  if(q.type==="truefalse")return hTF(q,host);
  if(q.type==="fill")return hFill(q,host);
  if(q.type==="calc")return hCalc(q,host);
  if(q.type==="order")return hOrder(q,host);
  if(q.type==="categorize")return hCat(q,host);
  if(q.type==="match")return hMatch(q,host);
  host.innerHTML="<p class='muted'>Desteklenmeyen soru tipi.</p>";
  return {isReady:()=>true,evaluate:()=>({correct:true,correctText:""})};
}
function hMCQ(q,host){
  const opts=q.options.map((o,i)=>({o,i}));
  const order=shuffle(opts);
  host.innerHTML=`<div class="choices">${order.map((it,k)=>`<button class="choice" data-i="${it.i}"><span class="key">${String.fromCharCode(65+k)}</span><span>${esc(it.o)}</span></button>`).join("")}</div>`;
  let sel=null;
  $$(".choice",host).forEach(c=>c.onclick=()=>{if(host.dataset.locked)return;sel=+c.dataset.i;$$(".choice",host).forEach(x=>x.classList.remove("selected"));c.classList.add("selected");sfx.click();notifyReady();});
  return{
    isReady:()=>sel!==null,
    evaluate:()=>{
      host.dataset.locked="1";
      const correct=sel===q.answer;
      $$(".choice",host).forEach(c=>{const i=+c.dataset.i;c.classList.add("disabled");if(i===q.answer)c.classList.add("correct");else if(i===sel)c.classList.add("wrong");});
      return{correct,correctText:q.options[q.answer]};
    }
  };
}
function hTF(q,host){
  host.innerHTML=`<div class="tf-row">
    <button class="tf" data-v="true"><span class="em">✓</span>DOĞRU</button>
    <button class="tf" data-v="false"><span class="em">✗</span>YANLIŞ</button></div>`;
  let sel=null;
  $$(".tf",host).forEach(b=>b.onclick=()=>{if(host.dataset.locked)return;sel=b.dataset.v==="true";$$(".tf",host).forEach(x=>x.classList.remove("selected"));b.classList.add("selected");sfx.click();notifyReady();});
  return{
    isReady:()=>sel!==null,
    evaluate:()=>{
      host.dataset.locked="1";
      const correct=sel===q.answer;
      $$(".tf",host).forEach(b=>{const v=b.dataset.v==="true";if(v===q.answer)b.classList.add("correct");else if(v===sel)b.classList.add("wrong");});
      return{correct,correctText:q.answer?"DOĞRU":"YANLIŞ"};
    }
  };
}
function hFill(q,host){
  host.innerHTML=`<input class="fill-input" id="fillIn" placeholder="Cevabını yaz…" autocomplete="off">`;
  const inp=$("#fillIn",host);inp.oninput=notifyReady;
  setTimeout(()=>inp.focus(),100);
  const accept=(q.answer||[]).map(norm);
  return{
    isReady:()=>inp.value.trim().length>0,
    evaluate:()=>{
      host.dataset.locked="1";inp.disabled=true;
      const v=norm(inp.value);
      const correct=accept.some(a=>a===v || (a.length>3&&v.length>3&&(a.includes(v)||v.includes(a))));
      inp.style.borderColor=correct?"var(--green)":"var(--red)";
      return{correct,correctText:(q.answer||[])[0]||""};
    }
  };
}
function hCalc(q,host){
  host.innerHTML=`<div style="display:flex;gap:10px;align-items:center"><input class="fill-input" id="calcIn" inputmode="decimal" placeholder="Sayısal cevap…" autocomplete="off" style="max-width:220px">${q.suffix?`<b>${esc(q.suffix)}</b>`:""}</div><p class="muted tiny" style="margin-top:8px">İpucu: ondalık için virgül veya nokta kullanabilirsin.</p>`;
  const inp=$("#calcIn",host);inp.oninput=notifyReady;setTimeout(()=>inp.focus(),100);
  const tol=q.tolerance||0.01;
  return{
    isReady:()=>inp.value.trim().length>0,
    evaluate:()=>{
      host.dataset.locked="1";inp.disabled=true;
      const v=parseFloat(String(inp.value).replace(",","."));
      const correct=isFinite(v)&&Math.abs(v-q.answer)<=tol;
      inp.style.borderColor=correct?"var(--green)":"var(--red)";
      return{correct,correctText:String(q.answer).replace(".",",")+(q.suffix?" "+q.suffix:"")};
    }
  };
}
function hOrder(q,host){
  let order=shuffle(q.items.map((t,i)=>({t,i})));
  function draw(){
    host.innerHTML=`<p class="muted tiny" style="margin-bottom:8px">Yukarı/aşağı ile doğru sıraya diz:</p><div class="order-pool">${order.map((it,k)=>`<div class="order-item" data-k="${k}"><span class="num">${k+1}</span><span class="grow">${esc(it.t)}</span><span class="ctrl"><button data-up="${k}">▲</button><button data-dn="${k}">▼</button></span></div>`).join("")}</div>`;
    $$("[data-up]",host).forEach(b=>b.onclick=()=>{const k=+b.dataset.up;if(k>0){[order[k-1],order[k]]=[order[k],order[k-1]];draw();}});
    $$("[data-dn]",host).forEach(b=>b.onclick=()=>{const k=+b.dataset.dn;if(k<order.length-1){[order[k+1],order[k]]=[order[k],order[k+1]];draw();}});
  }
  draw();
  return{
    isReady:()=>true,
    evaluate:()=>{
      host.dataset.locked="1";
      const correct=order.every((it,k)=>it.i===k);
      $$(".order-item",host).forEach((el,k)=>{el.style.borderColor=order[k].i===k?"var(--green)":"var(--red)";});
      return{correct,correctText:q.items.map((t,i)=>(i+1)+". "+t).join("  ·  ")};
    }
  };
}
function hCat(q,host){
  const cats=q.categories;
  const items=shuffle(q.items.map((it,i)=>({...it,i})));
  let placed={}; // i -> cat
  let selTok=null;
  function draw(){
    const bank=items.filter(it=>!placed[it.i]);
    host.innerHTML=`<div class="cat-board">
      <div class="cat-bank" id="catBank">${bank.length?bank.map(it=>`<span class="token" data-i="${it.i}">${esc(it.text)}</span>`).join(""):'<span class="muted tiny">Hepsi yerleşti — kontrol et!</span>'}</div>
      <div class="cat-cols">${cats.map(c=>`<div class="cat-col" data-cat="${esc(c)}"><h4>${esc(c)}</h4><div class="drop">${items.filter(it=>placed[it.i]===c).map(it=>`<span class="token placed" data-i="${it.i}">${esc(it.text)}</span>`).join("")}</div></div>`).join("")}</div>
    </div><p class="muted tiny" style="margin-top:8px">Önce kelimeye, sonra kutuya dokun. Yerleşeni geri almak için üstüne dokun.</p>`;
    $$("#catBank .token",host).forEach(t=>t.onclick=()=>{selTok=+t.dataset.i;$$(".token",host).forEach(x=>x.style.outline="");t.style.outline="3px solid var(--blue)";sfx.click();});
    $$(".cat-col",host).forEach(col=>col.onclick=()=>{if(host.dataset.locked)return;if(selTok!=null){placed[selTok]=col.dataset.cat;selTok=null;draw();notifyReady();}});
    $$(".cat-col .token",host).forEach(t=>t.onclick=(e)=>{e.stopPropagation();if(host.dataset.locked)return;delete placed[+t.dataset.i];draw();notifyReady();});
  }
  draw();
  return{
    isReady:()=>items.every(it=>placed[it.i]),
    evaluate:()=>{
      host.dataset.locked="1";
      let correct=true;
      items.forEach(it=>{if(placed[it.i]!==it.cat)correct=false;});
      $$(".cat-col .token",host).forEach(t=>{const i=+t.dataset.i;const it=items.find(x=>x.i===i);t.classList.add(placed[i]===it.cat?"ok":"no");});
      const ct=cats.map(c=>c+": "+q.items.filter(x=>x.cat===c).map(x=>x.text).join(", ")).join("  |  ");
      return{correct,correctText:ct};
    }
  };
}
function hMatch(q,host){
  // tap-pair: doğru çift yeşil olur kaybolur; yanlış kırmızı titrer
  const left=shuffle(q.pairs.map((p,i)=>({txt:p[0],i})));
  const right=shuffle(q.pairs.map((p,i)=>({txt:p[1],i})));
  let selL=null,selR=null,matched=0,errored=false;
  host.innerHTML=`<div class="match-grid">
    <div class="match-col">${left.map(l=>`<button class="match-cell" data-side="L" data-i="${l.i}">${esc(l.txt)}</button>`).join("")}</div>
    <div class="match-col">${right.map(r=>`<button class="match-cell" data-side="R" data-i="${r.i}">${esc(r.txt)}</button>`).join("")}</div>
  </div><p class="muted tiny" style="margin-top:8px">Soldan ve sağdan eşleşenleri seç.</p>`;
  function clearSel(){selL=null;selR=null;$$(".match-cell",host).forEach(c=>c.classList.remove("sel"));}
  function tryMatch(){
    if(selL==null||selR==null)return;
    const lc=$(`.match-cell[data-side="L"][data-i="${selL}"]`,host);
    const rc=$(`.match-cell[data-side="R"][data-i="${selR}"]`,host);
    if(selL===selR){lc.classList.add("ok");rc.classList.add("ok");matched++;sfx.good();clearSel();
      if(matched===q.pairs.length){ resolveAuto(!errored); }
    } else {errored=true;lc.classList.add("bad");rc.classList.add("bad");sfx.bad();setTimeout(()=>{lc.classList.remove("bad","sel");rc.classList.remove("bad","sel");selL=null;selR=null;},350);}
  }
  $$(".match-cell",host).forEach(c=>c.onclick=()=>{
    if(host.dataset.locked||c.classList.contains("ok"))return;
    const side=c.dataset.side,i=+c.dataset.i;
    if(side==="L"){selL=i;$$('.match-cell[data-side="L"]',host).forEach(x=>x.classList.remove("sel"));c.classList.add("sel");}
    else{selR=i;$$('.match-cell[data-side="R"]',host).forEach(x=>x.classList.remove("sel"));c.classList.add("sel");}
    tryMatch();
  });
  let resolveAuto=()=>{};
  return{
    auto:true,
    onResolve:(cb)=>{resolveAuto=(ok)=>{host.dataset.locked="1";cb({correct:ok,correctText:q.pairs.map(p=>p[0]+" ↔ "+p[1]).join(" · ")});};},
    isReady:()=>false,
    evaluate:()=>({correct:!errored,correctText:""})
  };
}

/* ---- Kontrol çubuğu & ilerleme ---- */
let READYCB=null;
function notifyReady(){if(READYCB)READYCB();}
function buildCheckBar(q,handler){
  const bar=$("#checkBar .inner");
  if(handler.auto){
    // match: otomatik çözülür
    bar.innerHTML=`<button class="btn ghost lg" id="skipBtn">Bilemedim / Atla</button>`;
    $("#skipBtn").onclick=()=>process(q,{correct:false,correctText:(q.pairs||[]).map(p=>p[0]+" ↔ "+p[1]).join(" · ")});
    handler.onResolve((res)=>process(q,res));
    return;
  }
  bar.innerHTML=`<button class="btn primary lg" id="checkBtn" disabled>KONTROL ET</button>`;
  const btn=$("#checkBtn");
  READYCB=()=>{btn.disabled=!handler.isReady();};
  btn.onclick=()=>{
    if(!handler.isReady())return;
    const res=handler.evaluate();
    READYCB=null;
    process(q,res);
  };
}
function process(q,res){
  // istatistik
  S.totalAnswered++;
  if(!(q.id in SES.firstTry))SES.firstTry[q.id]=res.correct; // ilk deneme (yıldız için)
  if(SES.mode!=="exam") regenHearts();
  if(res.correct){
    S.totalCorrect++;S.solved[q.id]=true;SES.correct++;SES.combo++;
    if(SES.combo>S.maxCombo)S.maxCombo=SES.combo;
    if([3,5,8,10,15,20].includes(SES.combo))comboPop(SES.combo);
    // hata defterinden düş
    if(S.mistakes[q.id]){S.mistakes[q.id]--;if(S.mistakes[q.id]<=0)delete S.mistakes[q.id];}
    if(SES.mode!=="exam"){let gain=Math.round((8+ (q.difficulty||1)*4)*comboMult(SES.combo));addXP(gain);res._xp=gain;}
  }else{
    SES.combo=0;
    S.mistakes[q.id]=(S.mistakes[q.id]||0)+1;
    if(SES.hearts&&S.hearts>0){S.hearts=Math.max(0,S.hearts-1);S.heartTs=S.heartTs||Date.now();}
    // ustalık modu: yanlış soru, doğru yapılana kadar tekrar sıraya girer
    if(SES.masteryMode)SES.questions.push(q);
  }
  srsUpdate(q.id,res.correct);
  SES.results.push({q,correct:res.correct});
  save();checkBadges();
  if(SES.mode==="exam"){ SES.idx++; setTimeout(renderQ,180); return; }
  showFeedback(q,res);
}
function comboMult(c){return c>=8?2:c>=5?1.5:c>=3?1.25:1;}
function showFeedback(q,res){
  // mevcut bir feedback varsa kaldır
  const old=$("#fb");if(old)old.remove();
  const fb=document.createElement("div");fb.id="fb";
  fb.className="feedback "+(res.correct?"good":"bad");
  fb.innerHTML=`<div class="inner">
    <div class="fb-ic">${res.correct?"🎉":"💡"}</div>
    <div class="grow">
      <h4>${res.correct?(["Harika!","Mükemmel!","Süpersin!","Tam isabet!","Doğru!"][Math.floor(Math.random()*5)] + (res._xp?` +${res._xp} XP`:"")):"Cevap: "+esc(res.correctText)}</h4>
      <p>${esc(q.explanation||"")}</p>
      ${q.source?`<div class="src-tag">📄 ${esc(q.source)}</div>`:""}
    </div>
    <button class="btn ${res.correct?'primary':'danger'}" id="contBtn">DEVAM</button>
  </div>`;
  document.body.appendChild(fb);
  requestAnimationFrame(()=>fb.classList.add("show"));
  res.correct?sfx.good():sfx.bad();
  const cont=()=>{fb.classList.remove("show");setTimeout(()=>fb.remove(),250);SES.idx++;renderQ();};
  $("#contBtn",fb).onclick=cont;
  document.onkeydown=(e)=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();cont();}};
}
function handleKey(e,q,handler){
  if($("#fb"))return; // feedback açıkken contBtn dinler
  if(q.type==="mcq"&&/^[1-4]$/.test(e.key)){const cs=$$(".choice");if(cs[+e.key-1])cs[+e.key-1].click();}
  if(q.type==="truefalse"){if(e.key.toLowerCase()==="d")$$(".tf")[0].click();if(e.key.toLowerCase()==="y")$$(".tf")[1].click();}
  if(e.key==="Enter"){const b=$("#checkBtn");if(b&&!b.disabled)b.click();}
}

/* ---- Oturum sonu ---- */
function finishSession(){
  killExamTimer();
  if(SES.mode==="exam")return finishExam();
  // istatistik: ilk-deneme doğruluğu (ustalık modunda tekrarlar yıldızı düşürmesin)
  const ids=Object.keys(SES.firstTry);
  const total=ids.length||SES.questions.length;
  const correct=ids.filter(id=>SES.firstTry[id]).length;
  const acc=total?Math.round(correct/total*100):0;
  // ders yıldızları
  if(SES.lessonKey){
    const stars=acc>=90?3:acc>=70?2:1;
    S.lessons[SES.lessonKey]=Math.max(S.lessons[SES.lessonKey]||0,stars);
  }
  if(SES.mode==="checkpoint"&&acc>=80){S.checkpoints[SES.checkpointDay]=true;}
  if(acc===100)S.flags.perfectLesson=true;
  if(SES.mode==="mistake"&&Object.keys(S.mistakes).length===0)S.flags.clearedMistakes=true;
  if(S.dailyXP>=200)S.flags.day50=true;
  if(SES.mode==="review"||SES.mode==="checkpoint")S.hearts=HEART_MAX; // canları yeniler
  save();checkBadges();
  const bonus=SES.mode==="lesson"?20:(SES.mode==="checkpoint"?30:10);addXP(bonus);
  confetti();sfx.win();
  $("#topbar").classList.remove("hidden");$("#bottomnav").classList.remove("hidden");
  const view=$("#view");
  view.innerHTML=`<section class="complete">
    <div class="trophy">${acc>=90?"🏆":acc>=70?"🎉":"💪"}</div>
    <h1 style="font-weight:1000;font-size:26px;margin:8px 0">${acc>=90?"Mükemmel iş!":acc>=70?"Güzel gidiyorsun!":"Pratik kazandırır!"}</h1>
    <p class="muted">${esc(SES.title)} tamamlandı</p>
    <div class="stat-cards">
      <div class="stat-card acc"><b>%${acc}</b><small>İlk denemede</small></div>
      <div class="stat-card xp"><b>${correct}/${total}</b><small>Doğru</small></div>
      <div class="stat-card combo"><b>${S.maxCombo}x</b><small>En iyi kombo</small></div>
    </div>
    ${(SES.mode==="review"||SES.mode==="checkpoint")?'<p class="note" style="max-width:420px;margin:0 auto 16px">❤️ Canların yenilendi!</p>':''}
    ${SES.masteryMode&&total>correct?'<p class="muted tiny" style="max-width:440px;margin:0 auto 14px">💪 Yanlışları doğru yapana kadar tekrar çözdün — artık bu konuyu biliyorsun!</p>':''}
    <div class="btn-row" style="justify-content:center;max-width:420px;margin:0 auto">
      <button class="btn primary" id="cHome">🗺️ Haritaya Dön</button>
      ${(total>correct)?'<button class="btn danger" id="cRetry">🧯 Zorlananları Tekrar Et</button>':''}
    </div>
  </section>`;
  $("#cHome").onclick=()=>go("home");
  if($("#cRetry"))$("#cRetry").onclick=()=>{const wrong=ids.filter(id=>!SES.firstTry[id]).map(id=>QBYID[id]).filter(Boolean);runSession({title:"🧯 Zorlandıkların",questions:shuffle(wrong),mode:"mistake",hearts:false});};
  document.onkeydown=null;
}

/* ============================================================
   DENEME SINAVI (süreli, geri bildirimsiz)
   ============================================================ */
function buildExam(n){
  n=n||30;
  const avail=UNITS.filter(u=>(QBYUNIT[u.key]||[]).length);
  const per=Math.max(1,Math.floor(n/avail.length));
  let qs=[];
  avail.forEach(u=>{qs=qs.concat(pick(QBYUNIT[u.key],Math.min(per,QBYUNIT[u.key].length)));});
  // doldur
  let rest=shuffle(ALLQ.filter(q=>!qs.includes(q)));
  while(qs.length<n&&rest.length)qs.push(rest.pop());
  return shuffle(qs).slice(0,n);
}
function startExam(){
  const qs=buildExam(30);
  if(qs.length<5){toast("Sınav için yeterli soru yok","⏳");return;}
  if(!confirm("Deneme Sınavı: "+qs.length+" soru · ~"+Math.ceil(qs.length*0.8)+" dk · süreli ve ipuçsuz. Hazır mısın?"))return;
  runSession({title:"📝 Deneme Sınavı",questions:qs,mode:"exam",hearts:false,timed:Math.ceil(qs.length*48)});
}
let examTimer=null,examLeft=0;
function examTimerStart(sec){examLeft=sec;}
function syncExamTimer(){
  const el=$("#examTimer");if(!el)return;
  function fmt(){const m=Math.floor(examLeft/60),s=examLeft%60;el.textContent=(m<10?"0":"")+m+":"+(s<10?"0":"")+s;el.classList.toggle("warn",examLeft<=60);}
  fmt();
  clearInterval(examTimer);
  examTimer=setInterval(()=>{examLeft--;fmt();if(examLeft<=0){clearInterval(examTimer);toast("Süre doldu!","⏰");finishExam();}},1000);
}
function killExamTimer(){if(examTimer){clearInterval(examTimer);examTimer=null;}}
function finishExam(){
  killExamTimer();document.onkeydown=null;
  const total=SES.questions.length;const correct=SES.results.filter(r=>r.correct).length;
  const score=Math.round(correct/total*100);
  S.bestExam=Math.max(S.bestExam,score);
  S.examHistory.push({d:todayStr(),score});
  // yanlışları hata defterine ekle
  SES.results.filter(r=>!r.correct).forEach(r=>{S.mistakes[r.q.id]=(S.mistakes[r.q.id]||0)+1;});
  addXP(correct*5);
  save();checkBadges();
  if(score>=85){confetti();sfx.win();}
  // birim kırılımı
  const byU={};SES.results.forEach(r=>{const u=r.q.unit;(byU[u]=byU[u]||{t:0,c:0}).t++;if(r.correct)byU[u].c++;});
  $("#topbar").classList.remove("hidden");$("#bottomnav").classList.remove("hidden");
  const pass=score>=85;
  const view=$("#view");
  view.innerHTML=`<section class="complete">
    <div class="trophy">${score>=100?"👑":pass?"🎖️":"📚"}</div>
    <h1 style="font-weight:1000;font-size:28px;margin:8px 0">%${score}</h1>
    <p class="muted">${score>=100?"TAM PUAN! Efsanesin! 👑":pass?"Sınava hazırsın! 🎉":"Biraz daha pratik, sonra tekrar dene."}</p>
    <div class="stat-cards">
      <div class="stat-card acc"><b>${correct}/${total}</b><small>Doğru</small></div>
      <div class="stat-card xp"><b>+${correct*5}</b><small>XP</small></div>
      <div class="stat-card combo"><b>%${S.bestExam}</b><small>En iyi</small></div>
    </div>
    <div class="card" style="text-align:left;max-width:520px;margin:0 auto 16px">
      <b style="font-size:15px">📊 Konu Bazında</b>
      ${Object.keys(byU).map(u=>{const o=byU[u];const p=Math.round(o.c/o.t*100);return `<div class="mastery-row" style="margin-top:10px"><span class="uic">${UNIT[u]?UNIT[u].icon:"•"}</span><div class="bar"><i style="width:${p}%;background:${p>=70?'var(--green)':p>=40?'var(--amber)':'var(--red)'}"></i></div><span class="pct">%${p}</span></div>`;}).join("")}
    </div>
    <div class="btn-row" style="justify-content:center;max-width:460px;margin:0 auto">
      <button class="btn primary" id="eReview">📖 Yanlışları İncele</button>
      <button class="btn blue" id="eHome">🗺️ Harita</button>
    </div>
  </section>`;
  $("#eHome").onclick=()=>go("home");
  $("#eReview").onclick=()=>examReview();
}
function examReview(){
  const wrong=SES.results.filter(r=>!r.correct);
  const view=$("#view");
  $("#topbar").classList.remove("hidden");$("#bottomnav").classList.remove("hidden");
  if(!wrong.length){view.innerHTML='<div class="card center" style="margin-top:20px"><div style="font-size:40px">✨</div><h2>Hiç yanlışın yok!</h2><button class="btn primary" id="bk" style="margin-top:14px">Haritaya Dön</button></div>';$("#bk").onclick=()=>go("home");return;}
  view.innerHTML=`<div class="section-title">📖 Yanlış Çözülenler (${wrong.length})</div>
    ${wrong.map(r=>`<div class="card" style="margin-bottom:12px">
      <div class="q-kicker"><span>${esc((UNIT[r.q.unit]||{}).title||"")}</span><span class="src">${esc(r.q.source||"")}</span></div>
      <div style="font-weight:800;margin:6px 0">${esc(r.q.q)}</div>
      <div style="color:var(--green);font-weight:800">✓ ${esc(answerText(r.q))}</div>
      <p class="muted tiny" style="margin-top:6px">${esc(r.q.explanation||"")}</p>
    </div>`).join("")}
    <button class="btn danger lg" id="solveWrong">🧯 Bu Yanlışları Şimdi Çöz</button>
    <div style="height:10px"></div>
    <button class="btn ghost lg" id="bk2">Haritaya Dön</button>`;
  $("#solveWrong").onclick=()=>runSession({title:"🧯 Sınav Hataları",questions:shuffle(wrong.map(r=>r.q)),mode:"mistake",hearts:false});
  $("#bk2").onclick=()=>go("home");
}
function answerText(q){
  if(q.type==="mcq")return q.options[q.answer];
  if(q.type==="truefalse")return q.answer?"DOĞRU":"YANLIŞ";
  if(q.type==="fill"||q.type==="calc")return (q.answer&&q.answer.length?q.answer[0]:q.answer);
  if(q.type==="order")return q.items.join(" → ");
  if(q.type==="categorize")return q.categories.map(c=>c+": "+q.items.filter(x=>x.cat===c).map(x=>x.text).join(", ")).join(" | ");
  if(q.type==="match")return q.pairs.map(p=>p[0]+" ↔ "+p[1]).join(" · ");
  return "";
}

/* ============================================================
   TEKRAR EKRANI
   ============================================================ */
function viewReview(view){
  const due=dueCards();const seen=ALLQ.filter(q=>S.srs[q.id]);
  view.innerHTML=`
  <div class="section-title">🔁 Aralıklı Tekrar</div>
  <div class="card center">
    <div style="font-size:40px">🧠</div>
    <h3 style="font-weight:900;margin:8px 0 4px">${due.length?due.length+" kart tekrar zamanı geldi":"Şimdilik tekrar yok 👍"}</h3>
    <p class="muted tiny" style="margin-bottom:14px">Aralıklı tekrar, unutma eğrisini kırar — bilgiyi kalıcı yapmanın en kanıtlı yolu. Toplam ${seen.length} kart takipte.</p>
    <button class="btn primary lg" id="startRev" ${due.length?'':'style="opacity:.6"'}>${due.length?'🚀 Tekrara Başla':'🔄 Yine de Çöz (10 kart)'}</button>
  </div>
  <div class="quick-grid" style="margin-top:14px">
    <button class="qa" id="rMistake"><span class="qic">🧯</span>${Object.keys(S.mistakes).length?`<span class="pill">${Object.keys(S.mistakes).length}</span>`:""}<b>Hata Defteri</b><small>Yanlışları çöz</small></button>
    <button class="qa" id="rFeyn"><span class="qic">🗣️</span><b>Anlat Bakalım</b><small>Feynman tekniği</small></button>
    <button class="qa" id="rExam"><span class="qic">📝</span><b>Deneme Sınavı</b><small>Kendini ölç</small></button>
    <button class="qa" id="rCards"><span class="qic">🃏</span><b>Kavram Kartları</b><small>Çevir & öğren</small></button>
  </div>`;
  $("#startRev").onclick=()=>startReviewSession();
  $("#rMistake").onclick=()=>startMistake();
  $("#rFeyn").onclick=()=>go("feynman");
  $("#rExam").onclick=()=>startExam();
  $("#rCards").onclick=()=>go("cards");
}

/* ============================================================
   KAVRAM KARTLARI (Flashcards)
   ============================================================ */
let cardUnit="all",cardIdx=0;
function viewCards(view,arg){
  if(arg&&arg.unit)cardUnit=arg.unit;
  const list = cardUnit==="all"?ALLC:(CBYUNIT[cardUnit]||[]);
  view.innerHTML=`
  <div class="section-title">🃏 Kavram Kartları</div>
  <div style="display:flex;gap:8px;overflow-x:auto;padding-bottom:8px">
    <button class="btn sm ${cardUnit==='all'?'primary':'ghost'}" data-cu="all">Tümü</button>
    ${UNITS.filter(u=>(CBYUNIT[u.key]||[]).length).map(u=>`<button class="btn sm ${cardUnit===u.key?'primary':'ghost'}" data-cu="${u.key}">${u.icon} ${u.title.split(' ')[0]}</button>`).join("")}
  </div>
  <div id="flashHost"></div>`;
  $$("[data-cu]",view).forEach(b=>b.onclick=()=>{cardUnit=b.dataset.cu;cardIdx=0;viewCards(view);});
  drawFlash(list);
}
function drawFlash(list){
  const host=$("#flashHost");
  if(!list.length){host.innerHTML='<div class="card center muted">Bu konu için kart yok.</div>';return;}
  if(cardIdx>=list.length)cardIdx=0;if(cardIdx<0)cardIdx=list.length-1;
  const c=list[cardIdx];
  host.innerHTML=`
    <div class="flash" id="flash">
      <div class="flash-inner">
        <div class="flash-face flash-front">
          <div class="q-kicker"><span>${esc((UNIT[c.unit]||{}).title||"")}</span><span class="src">${esc(c.source||"")}</span></div>
          <h3>${esc(c.title)}</h3>
          <p class="muted tiny">Cevabı görmek için karta dokun 👆</p>
        </div>
        <div class="flash-face flash-back">
          <ul>${(c.body||[]).map(b=>`<li>${esc(b)}</li>`).join("")}</ul>
          ${c.formula?`<div class="formula">${esc(c.formula)}</div>`:""}
        </div>
      </div>
    </div>
    <div class="flash-nav">
      <button class="btn ghost" id="prevC">← Önceki</button>
      <span class="muted">${cardIdx+1} / ${list.length}</span>
      <button class="btn ghost" id="nextC">Sonraki →</button>
    </div>`;
  $("#flash").onclick=()=>{$("#flash").classList.toggle("flipped");sfx.click();};
  $("#prevC").onclick=(e)=>{e.stopPropagation();cardIdx--;drawFlash(list);};
  $("#nextC").onclick=(e)=>{e.stopPropagation();cardIdx++;drawFlash(list);};
}

/* ============================================================
   ANLAT BAKALIM (Feynman)
   ============================================================ */
function viewFeynman(view){
  $("#topbar").classList.remove("hidden");$("#bottomnav").classList.add("hidden");
  const c=ALLC[Math.floor(Math.random()*ALLC.length)];
  view.innerHTML=`
  <div class="quiz-top"><button class="x-close" id="fClose">✕</button><div class="progress"><i style="width:100%"></i></div></div>
  <div class="q-wrap feyn">
    <div class="q-kicker"><span>ANLAT BAKALIM (FEYNMAN)</span><span class="src">${esc(c.source||"")}</span></div>
    <div class="q-text">“${esc(c.title)}” konusunu, <span class="hl">hiç bilmeyen bir arkadaşına</span> anlatır gibi kendi cümlelerinle yaz.</div>
    <p class="muted tiny" style="margin-bottom:10px">Bir kavramı kendi sözlerinle anlatmak (öğretmek), öğrenme piramidinin en tepesidir — %90 kalıcılık.</p>
    <textarea id="feynTxt" placeholder="Örneğin: Bu kavram şu işe yarar… çünkü… örneğin…"></textarea>
    <div class="btn-row" style="margin-top:12px"><button class="btn primary" id="feynReveal">🔎 Model Cevabı Gör & Karşılaştır</button></div>
    <div id="feynModel"></div>
  </div>`;
  $("#fClose").onclick=()=>go("review");
  $("#feynReveal").onclick=()=>{
    const txt=$("#feynTxt").value.trim();
    $("#feynModel").innerHTML=`
      <div class="model-answer">
        <b style="color:#9be86a">📘 Model Cevap — ${esc(c.title)}</b>
        <ul style="margin:10px 0 0 18px;color:var(--text-soft)">${(c.body||[]).map(b=>`<li>${esc(b)}</li>`).join("")}</ul>
        ${c.formula?`<div class="formula">${esc(c.formula)}</div>`:""}
      </div>
      <p class="muted tiny" style="margin-top:10px">Kendi anlatımını model cevapla karşılaştır. Eksik kalan noktaları gördün mü?</p>
      <div class="btn-row" style="margin-top:10px">
        <button class="btn primary" id="feynGood">✅ İyi anlattım (+15 XP)</button>
        <button class="btn ghost" id="feynNext">🔁 Başka Kavram</button>
      </div>`;
    $("#feynGood").onclick=()=>{S.feynmanDone++;addXP(15);save();checkBadges();toast("Öğreterek öğrendin! +15 XP","🦉");go("feynman");};
    $("#feynNext").onclick=()=>go("feynman");
  };
}

/* ============================================================
   LAB — Etkileşimli Simülasyonlar
   ============================================================ */
function viewLab(view){
  view.innerHTML=`
  <div class="section-title">🧪 Simülasyon Lab</div>
  <p class="muted tiny" style="margin:-8px 2px 12px">Yaparak öğren — öğrenme piramidinde %75 kalıcılık. Dokun, kaydır, dene.</p>
  <div class="lab-grid">
    <div class="sim" id="simKNN"></div>
    <div class="sim" id="simCM"></div>
    <div class="sim" id="simSVM"></div>
    <div class="sim" id="simDist"></div>
  </div>`;
  simKNN($("#simKNN"));
  simCM($("#simCM"));
  simSVM($("#simSVM"));
  simDist($("#simDist"));
}

/* --- KNN görselleştirici --- */
function simKNN(host){
  host.innerHTML=`<h3>📍 KNN Görselleştirici</h3><p class="hint">Boşluğa dokun → yeni nokta. k değerini değiştir, sınıfın nasıl değiştiğini gör.</p>
  <canvas id="knnCv" width="600" height="360"></canvas>
  <div class="sim-controls">
    <label>k = <input type="range" id="knnK" min="1" max="9" step="2" value="3"><b id="knnKv">3</b></label>
    <button class="btn sm ghost" id="knnReset">🔀 Yeni Veri</button>
    <span class="readout" id="knnOut"></span>
  </div>`;
  const cv=$("#knnCv",host),ctx=cv.getContext("2d");
  let pts=[],query=null;
  function gen(){pts=[];for(let i=0;i<10;i++)pts.push({x:60+Math.random()*200,y:60+Math.random()*240,c:0});for(let i=0;i<10;i++)pts.push({x:340+Math.random()*200,y:60+Math.random()*240,c:1});query={x:300,y:180};draw();}
  function draw(){
    const W=cv.width,H=cv.height;ctx.clearRect(0,0,W,H);
    const cols=["#1cb0f6","#ff4b8b"];
    let k=+$("#knnK",host).value;
    if(query){
      const ds=pts.map(p=>({p,d:Math.hypot(p.x-query.x,p.y-query.y)})).sort((a,b)=>a.d-b.d).slice(0,k);
      let v=[0,0];ds.forEach(o=>v[o.p.c]++);const cls=v[0]>=v[1]?0:1;
      // halka
      const rad=ds[ds.length-1].d;
      ctx.beginPath();ctx.arc(query.x,query.y,rad,0,7);ctx.strokeStyle="rgba(255,200,0,.5)";ctx.lineWidth=2;ctx.stroke();
      ds.forEach(o=>{ctx.beginPath();ctx.moveTo(query.x,query.y);ctx.lineTo(o.p.x,o.p.y);ctx.strokeStyle="rgba(255,255,255,.25)";ctx.lineWidth=1;ctx.stroke();});
      $("#knnOut",host).innerHTML=`Tahmin: <span style="color:${cols[cls]}">${cls?'Sınıf B 🔴':'Sınıf A 🔵'}</span> (${v[0]}–${v[1]})`;
    }
    pts.forEach(p=>{ctx.beginPath();ctx.arc(p.x,p.y,8,0,7);ctx.fillStyle=cols[p.c];ctx.fill();});
    if(query){ctx.beginPath();ctx.arc(query.x,query.y,11,0,7);ctx.fillStyle="#ffc800";ctx.strokeStyle="#000";ctx.lineWidth=2;ctx.fill();ctx.stroke();
      ctx.fillStyle="#000";ctx.font="bold 13px Nunito";ctx.textAlign="center";ctx.fillText("?",query.x,query.y+4);}
  }
  cv.onclick=(e)=>{const r=cv.getBoundingClientRect();query={x:(e.clientX-r.left)*cv.width/r.width,y:(e.clientY-r.top)*cv.height/r.height};draw();};
  $("#knnK",host).oninput=()=>{$("#knnKv",host).textContent=$("#knnK",host).value;draw();};
  $("#knnReset",host).onclick=gen;
  gen();
}

/* --- Confusion Matrix oyun alanı --- */
function simCM(host){
  host.innerHTML=`<h3>🎯 Confusion Matrix Oyun Alanı</h3><p class="hint">TP/TN/FP/FN değerlerini değiştir, tüm metrikler anında hesaplansın. (Ders örneği yüklü)</p>
  <div class="cm-grid">
    <div class="cm-cell tp"><b>TP (Doğru-Pozitif)</b><input id="cmTP" type="number" value="200"></div>
    <div class="cm-cell fn"><b>FN (Yanlış-Negatif)</b><input id="cmFN" type="number" value="10"></div>
    <div class="cm-cell fp"><b>FP (Yanlış-Pozitif)</b><input id="cmFP" type="number" value="20"></div>
    <div class="cm-cell tn"><b>TN (Doğru-Negatif)</b><input id="cmTN" type="number" value="100"></div>
  </div>
  <table class="metric-table" id="cmTable"></table>`;
  function calc(){
    const TP=+$("#cmTP",host).value||0,TN=+$("#cmTN",host).value||0,FP=+$("#cmFP",host).value||0,FN=+$("#cmFN",host).value||0;
    const tot=TP+TN+FP+FN||1;
    const acc=(TP+TN)/tot, err=(FP+FN)/tot;
    const rec=TP/(TP+FN||1), spec=TN/(TN+FP||1), fpr=FP/(TN+FP||1), prec=TP/(TP+FP||1);
    const f1=2*prec*rec/((prec+rec)||1);
    const f=(x)=>x.toFixed(2).replace(".",",");
    $("#cmTable",host).innerHTML=`
      <tr><td>Doğruluk (Accuracy) = (TP+TN)/Toplam</td><td>${f(acc)}</td></tr>
      <tr><td>Hata Oranı = (FP+FN)/Toplam</td><td>${f(err)}</td></tr>
      <tr><td>Hassasiyet/Duyarlılık (Recall) = TP/(TP+FN)</td><td>${f(rec)}</td></tr>
      <tr><td>Seçicilik (Specificity) = TN/(TN+FP)</td><td>${f(spec)}</td></tr>
      <tr><td>Yanlış Pozitif Oranı (FPR) = FP/(TN+FP)</td><td>${f(fpr)}</td></tr>
      <tr><td>Kesinlik (Precision) = TP/(TP+FP)</td><td>${f(prec)}</td></tr>
      <tr><td>F1 Skoru = 2·P·R/(P+R)</td><td>${f(f1)}</td></tr>`;
  }
  $$("input",host).forEach(i=>i.oninput=calc);calc();
}

/* --- SVM marjin / C --- */
function simSVM(host){
  host.innerHTML=`<h3>⚔️ SVM Marjin & C</h3><p class="hint">C arttıkça marjin daralır (overfit riski ↑). C azaldıkça marjin genişler. Kaydırarak gör.</p>
  <canvas id="svmCv" width="600" height="320"></canvas>
  <div class="sim-controls">
    <label>C = <input type="range" id="svmC" min="0" max="100" value="30"><b id="svmCv2">orta</b></label>
    <span class="readout" id="svmOut"></span>
  </div>`;
  const cv=$("#svmCv",host),ctx=cv.getContext("2d");
  function draw(){
    const W=cv.width,H=cv.height;ctx.clearRect(0,0,W,H);
    const C=+$("#svmC",host).value;
    const margin=70-(C/100)*55; // büyük C => küçük marjin
    const cx=W/2;
    // marjin şeritleri
    ctx.fillStyle="rgba(255,200,0,.08)";ctx.fillRect(cx-margin,0,margin*2,H);
    // hiperdüzlem
    ctx.beginPath();ctx.moveTo(cx,0);ctx.lineTo(cx,H);ctx.strokeStyle="#ffc800";ctx.lineWidth=3;ctx.stroke();
    // marjin sınırları
    [-margin,margin].forEach(m=>{ctx.beginPath();ctx.moveTo(cx+m,0);ctx.lineTo(cx+m,H);ctx.strokeStyle="rgba(255,255,255,.4)";ctx.setLineDash([6,6]);ctx.lineWidth=1.5;ctx.stroke();ctx.setLineDash([]);});
    // noktalar
    const blue=[[120,80],[90,160],[150,240],[180,120],[110,260]];
    const pink=[[480,90],[510,180],[450,250],[420,140],[490,270]];
    blue.forEach(p=>dot(p[0],p[1],"#1cb0f6"));
    pink.forEach(p=>dot(p[0],p[1],"#ff4b8b"));
    // destek vektörleri (marjine en yakın)
    dot(cx-margin+4,130,"#1cb0f6",true);dot(cx+margin-4,160,"#ff4b8b",true);
    function dot(x,y,c,sv){ctx.beginPath();ctx.arc(x,y,8,0,7);ctx.fillStyle=c;ctx.fill();if(sv){ctx.strokeStyle="#fff";ctx.lineWidth=3;ctx.stroke();}}
    const lvl=C>66?"büyük (dar marjin, overfit↑)":C>33?"orta":"küçük (geniş marjin, esnek)";
    $("#svmCv2",host).textContent=C;
    $("#svmOut",host).innerHTML=`Marjin: <b style="color:var(--amber)">${lvl}</b>`;
  }
  $("#svmC",host).oninput=draw;draw();
}

/* --- Uzaklık hesaplayıcı --- */
function simDist(host){
  host.innerHTML=`<h3>📐 Uzaklık Hesaplayıcı</h3><p class="hint">İki nokta gir; Öklid, Manhattan ve Chebyshev uzaklıklarını karşılaştır.</p>
  <div class="sim-controls">
    <label>P1: x<input type="number" id="d_x1" value="20"> y<input type="number" id="d_y1" value="35"></label>
  </div>
  <div class="sim-controls">
    <label>P2: x<input type="number" id="d_x2" value="40"> y<input type="number" id="d_y2" value="20"></label>
  </div>
  <table class="metric-table" id="distTbl"></table>`;
  function calc(){
    const x1=+$("#d_x1",host).value,y1=+$("#d_y1",host).value,x2=+$("#d_x2",host).value,y2=+$("#d_y2",host).value;
    const dx=Math.abs(x1-x2),dy=Math.abs(y1-y2);
    const euc=Math.hypot(dx,dy),man=dx+dy,che=Math.max(dx,dy);
    const f=(x)=>x.toFixed(2).replace(".",",");
    $("#distTbl",host).innerHTML=`
      <tr><td>Öklid = √((Δx)²+(Δy)²) = √(${dx*dx}+${dy*dy})</td><td>${f(euc)}</td></tr>
      <tr><td>Manhattan = |Δx|+|Δy| = ${dx}+${dy}</td><td>${f(man)}</td></tr>
      <tr><td>Chebyshev = max(|Δx|,|Δy|)</td><td>${f(che)}</td></tr>`;
  }
  $$("input",host).forEach(i=>i.oninput=calc);calc();
}

/* ============================================================
   PROFİL / İSTATİSTİK
   ============================================================ */
function viewProfile(view){
  const lv=levelOf(S.xp),prog=Math.round(levelProg(S.xp)*100);
  const acc=S.totalAnswered?Math.round(S.totalCorrect/S.totalAnswered*100):0;
  view.innerHTML=`
  <div class="section-title">📊 Profilin</div>
  <div class="card">
    <div style="display:flex;align-items:center;gap:16px">
      <div style="font-size:46px">🎓</div>
      <div class="grow">
        <div style="font-weight:1000;font-size:20px">Seviye ${lv}</div>
        <div class="progress" style="margin-top:6px"><i style="width:${prog}%"></i></div>
        <div class="muted tiny" style="margin-top:4px">${S.xp} XP · sonraki seviyeye %${prog}</div>
      </div>
    </div>
    <div class="stat-cards" style="margin:18px 0 0">
      <div class="stat-card"><b>🔥 ${S.streak}</b><small>Gün serisi</small></div>
      <div class="stat-card acc"><b>%${acc}</b><small>Genel doğruluk</small></div>
      <div class="stat-card combo"><b>${S.maxCombo}x</b><small>En iyi kombo</small></div>
      <div class="stat-card xp"><b>%${S.bestExam}</b><small>En iyi sınav</small></div>
    </div>
  </div>

  <div class="section-title">🧭 Konu Hakimiyeti</div>
  <div class="card">
    ${UNITS.map(u=>{const m=Math.round(mastery(u.key)*100);return `<div class="mastery-row"><span class="uic">${u.icon}</span>
      <div style="flex:1"><div style="font-weight:800;font-size:13px;margin-bottom:3px">${u.title}</div>
      <div class="bar"><i style="width:${m}%;background:${u.color}"></i></div></div>
      <span class="pct">%${m}</span></div>`;}).join("")}
  </div>

  <div class="section-title">🏅 Rozetler (${Object.keys(S.badges).length}/${BADGES.length})</div>
  <div class="badges-grid">
    ${BADGES.map(b=>`<div class="badge ${S.badges[b.id]?'earned':''}"><div class="b-ic">${b.ic}</div><small>${b.name}</small></div>`).join("")}
  </div>

  <div class="section-title">⚙️ Ayarlar</div>
  <div class="card">
    <label style="display:flex;align-items:center;gap:10px;font-weight:800"><input type="checkbox" id="setSound" ${S.settings.sound?'checked':''}> 🔊 Ses efektleri</label>
    <div class="spacer"></div>
    <button class="btn ghost sm" id="resetBtn">🗑️ İlerlemeyi Sıfırla</button>
  </div>
  <div style="height:20px"></div>`;
  $("#setSound").onchange=(e)=>{S.settings.sound=e.target.checked;save();};
  $("#resetBtn").onclick=()=>{if(confirm("Tüm ilerleme silinecek. Emin misin?")){localStorage.removeItem(SKEY);S=load();toast("Sıfırlandı","🗑️");go("home");}};
}

/* ============================================================
   BAŞLAT
   ============================================================ */
function boot(){
  indexData();
  buildChapters();
  const totalQ=ALLQ.length;
  if(!totalQ){
    $("#view").innerHTML='<div class="card center" style="margin-top:30px"><div style="font-size:40px">⏳</div><h2>Soru bankası yükleniyor…</h2><p class="muted">Veri dosyaları bulunamadı. data_*.js dosyalarının yüklendiğinden emin ol.</p></div>';
    return;
  }
  touchDay();save();
  go("home");
  console.log("ML Sınav Kampı hazır:",totalQ,"soru,",ALLC.length,"kavram kartı");
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot);else boot();

})();
