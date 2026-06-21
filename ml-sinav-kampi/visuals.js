/* ============================================================
   visuals.js — Konu anlatımı için hazır, güvenilir görsel bileşenler
   Hepsi canvas ile çizilir; tutarlı, akılda kalıcı, etiketli.
   Kullanım: VIS.render("knnScatter", hostEl, block)
   ============================================================ */
(function(){
"use strict";
const C={blue:"#1cb0f6",pink:"#ff4b8b",green:"#58cc02",amber:"#ffc800",violet:"#a560ff",
  teal:"#12d7c4",text:"#eef2ff",dim:"#9fb0d0",line:"#3a4d72",grid:"#1b2942",bg:"#0a1226",
  red:"#ff4b4b",orange:"#ff9600"};

function mk(host,w,h){
  const cv=document.createElement("canvas");
  const dpr=Math.min(2,window.devicePixelRatio||1);
  cv.width=w*dpr;cv.height=h*dpr;cv.style.width="100%";cv.style.maxWidth=w+"px";cv.style.height="auto";
  cv.style.background=C.bg;cv.style.borderRadius="12px";cv.style.border="2px solid "+C.line;cv.style.display="block";cv.style.margin="0 auto";
  host.appendChild(cv);
  const x=cv.getContext("2d");x.scale(dpr,dpr);x.textBaseline="middle";x.textAlign="left";
  x.font="13px Nunito, system-ui, sans-serif";
  return x;
}
function rr(x,a,b,w,h,r){x.beginPath();x.moveTo(a+r,b);x.arcTo(a+w,b,a+w,b+h,r);x.arcTo(a+w,b+h,a,b+h,r);x.arcTo(a,b+h,a,b,r);x.arcTo(a,b,a+w,b,r);x.closePath();}
function box(x,a,b,w,h,fill,label,tcol,font){rr(x,a,b,w,h,10);x.fillStyle=fill;x.fill();x.fillStyle=tcol||"#06121f";x.font=(font||"bold 13px")+" Nunito, sans-serif";x.textAlign="center";x.fillText(label,a+w/2,b+h/2);x.textAlign="left";}
function dot(x,a,b,col,r,ring){x.beginPath();x.arc(a,b,r||6,0,7);x.fillStyle=col;x.fill();if(ring){x.lineWidth=3;x.strokeStyle="#fff";x.stroke();}}
function line(x,a,b,c,d,col,w,dash){x.beginPath();x.setLineDash(dash||[]);x.moveTo(a,b);x.lineTo(c,d);x.strokeStyle=col;x.lineWidth=w||2;x.stroke();x.setLineDash([]);}
function arrow(x,a,b,c,d,col){line(x,a,b,c,d,col,2);const ang=Math.atan2(d-b,c-a);x.beginPath();x.moveTo(c,d);x.lineTo(c-10*Math.cos(ang-0.4),d-10*Math.sin(ang-0.4));x.lineTo(c-10*Math.cos(ang+0.4),d-10*Math.sin(ang+0.4));x.closePath();x.fillStyle=col;x.fill();}
function txt(x,s,a,b,col,font,al){x.fillStyle=col||C.text;x.font=(font||"13px")+" Nunito, sans-serif";x.textAlign=al||"left";x.fillText(s,a,b);x.textAlign="left";}
function title(x,s,w){txt(x,s,w/2,18,C.amber,"bold 15px","center");}

// flow bileşeni için adımları çöz: steps dizisi yoksa caption'dan ("Başlık: a → b → c") ayrıştır
function flowSteps(b){
  if(b&&Array.isArray(b.steps)&&b.steps.length)return {title:"Süreç Adımları",steps:b.steps.slice(0,7)};
  let cap=(b&&b.caption)||"",ttl="Süreç Adımları";const ci=cap.indexOf(":");
  if(ci>0&&ci<46){ttl=cap.slice(0,ci).trim();cap=cap.slice(ci+1);}
  let steps=cap.split(/→|->|;/).map(s=>s.trim()).filter(Boolean);
  if(steps.length<2)steps=["Adım 1","Adım 2","Adım 3","Adım 4"];
  return {title:ttl,steps:steps.slice(0,7)};
}

const D={};

D.mlmap=(x,W,H)=>{title(x,"Makine Öğrenmesi Türleri",W);
  box(x,W/2-90,34,180,34,C.amber,"Makine Öğrenmesi");
  const kids=[["Denetimli",C.green,["Sınıflandırma","Regresyon"]],["Denetimsiz",C.blue,["Kümeleme","İlişkilendirme"]],["Pekiştirmeli",C.violet,["Ödül/Ceza","Q-Learning"]]];
  const xs=[W*0.18,W*0.5,W*0.82];
  kids.forEach((k,i)=>{const cx=xs[i];line(x,W/2,68,cx,108,C.line,2);box(x,cx-78,108,156,32,k[1],k[0]);
    k[2].forEach((leaf,j)=>{const ly=156+j*30;line(x,cx,140,cx-40,ly+13,C.grid,1.5);box(x,cx-40,ly,150,24,"#16213a",leaf,C.text,"12px");});});
};

D.confusion=(x,W,H)=>{title(x,"Karmaşıklık (Hata) Matrisi",W);
  const ax=70,ay=46,s=78;
  txt(x,"Tahmin →",ax+s,38,C.dim,"11px","center");
  txt(x,"Pozitif",ax+s*0.5,52,C.dim,"11px","center");txt(x,"Negatif",ax+s*1.5,52,C.dim,"11px","center");
  txt(x,"Gerçek",30,ay+s,C.dim,"11px","center");
  box(x,ax,ay+8,s,s,"#16320c","TP",C.green,"bold 22px");box(x,ax+s,ay+8,s,s,"#2a1a0d","FN",C.orange,"bold 22px");
  box(x,ax,ay+s+12,s,s,"#3a1212","FP",C.red,"bold 22px");box(x,ax+s,ay+s+12,s,s,"#0e2c3f","TN",C.blue,"bold 22px");
  const fx=ax+2*s+26;let fy=58;
  [["Doğruluk","(TP+TN)/Toplam"],["Kesinlik","TP/(TP+FP)"],["Duyarlılık","TP/(TP+FN)"],["Seçicilik","TN/(TN+FP)"],["F1","2·P·R/(P+R)"]].forEach(m=>{
    txt(x,m[0],fx,fy,C.teal,"bold 13px");txt(x,m[1],fx,fy+15,C.dim,"11px");fy+=38;});
};

D.rocCurve=(x,W,H)=>{title(x,"ROC Eğrisi ve AUC",W);
  const ox=70,oy=H-44,ax=W-60,ay=44;
  line(x,ox,oy,ax,oy,C.line,2);line(x,ox,oy,ox,ay,C.line,2);
  txt(x,"FPR →",(ox+ax)/2,oy+22,C.dim,"11px","center");
  x.save();x.translate(30,(oy+ay)/2);x.rotate(-Math.PI/2);txt(x,"TPR →",0,0,C.dim,"11px","center");x.restore();
  line(x,ox,oy,ax,ay,C.dim,1.5,[5,5]);txt(x,"rastgele (0.5)",ax-70,oy-90,C.dim,"10px");
  x.beginPath();x.moveTo(ox,oy);x.bezierCurveTo(ox+10,ay+20,ox+40,ay,ax,ay);x.lineTo(ax,oy);x.closePath();x.fillStyle="rgba(88,204,2,.18)";x.fill();
  x.beginPath();x.moveTo(ox,oy);x.bezierCurveTo(ox+10,ay+20,ox+40,ay,ax,ay);x.strokeStyle=C.green;x.lineWidth=3;x.stroke();
  txt(x,"AUC = altta kalan alan",ox+50,oy-40,C.green,"bold 12px");
  txt(x,"En iyi 1,0 · En kötü 0,5",ox+50,oy-22,C.amber,"11px");
};

D.barscale=(x,W,H,b)=>{title(x,(b&&b.caption)||"Ölçek (0 – 1)",W);
  const ox=60,w=W-120,y=H/2+6;
  const g=x.createLinearGradient(ox,0,ox+w,0);g.addColorStop(0,C.red);g.addColorStop(.5,C.amber);g.addColorStop(1,C.green);
  rr(x,ox,y-12,w,24,12);x.fillStyle=g;x.fill();
  for(let i=0;i<=10;i++){const px=ox+w*i/10;line(x,px,y+14,px,y+20,C.dim,1);txt(x,(i/10).toFixed(1).replace(".",","),px,y+30,C.dim,"10px","center");}
  txt(x,"kötü",ox,y-26,C.red,"bold 12px");txt(x,"iyi",ox+w,y-26,C.green,"bold 12px","right");
};

D.linreg=(x,W,H)=>{title(x,"Doğrusal Regresyon",W);
  const ox=60,oy=H-44,ax=W-50,ay=46;line(x,ox,oy,ax,oy,C.line,2);line(x,ox,oy,ox,ay,C.line,2);
  txt(x,"x (bağımsız)",(ox+ax)/2,oy+22,C.dim,"11px","center");
  const pts=[[.1,.25],[.22,.32],[.35,.3],[.45,.5],[.55,.52],[.68,.62],[.8,.78],[.9,.82]];
  line(x,ox+10,oy-20,ax-10,ay+30,C.amber,3);
  pts.forEach(p=>{const px=ox+(ax-ox)*p[0],py=oy-(oy-ay)*p[1];dot(px,py,C.blue,5);});
  txt(x,"ŷ = b + w·x",ax-110,ay+12,C.amber,"bold 13px");
  txt(x,"amaç: hata karelerini en aza indir",ox+8,oy-12,C.dim,"11px");
};

D.sigmoid=(x,W,H)=>{title(x,"Sigmoid (Lojistik) Fonksiyonu",W);
  const ox=60,oy=H-44,ax=W-50,ay=46,mid=(oy+ay)/2;line(x,ox,oy,ax,oy,C.line,2);line(x,ox,oy,ox,ay,C.line,2);
  line(x,ox,ay,ax,ay,C.grid,1,[4,4]);txt(x,"1",ox-14,ay,C.dim,"11px","center");
  line(x,ox,mid,ax,mid,C.grid,1,[4,4]);txt(x,"0,5",ox-16,mid,C.dim,"10px","center");
  txt(x,"0",ox-14,oy,C.dim,"11px","center");
  x.beginPath();for(let i=0;i<=100;i++){const t=i/100;const px=ox+(ax-ox)*t;const v=1/(1+Math.exp(-(t*12-6)));const py=oy-(oy-ay)*v;i?x.lineTo(px,py):x.moveTo(px,py);}x.strokeStyle=C.violet;x.lineWidth=3;x.stroke();
  txt(x,"çıktı 0–1 arasına sıkışır → sınıflandırma",ox+20,ay+14,C.violet,"bold 12px");
};

D.kfold=(x,W,H)=>{title(x,"K-Katlı Çapraz Doğrulama (K-fold)",W);
  const k=5,ox=70,w=W-140,bh=26,gap=10,oy=44,cw=w/k;
  for(let r=0;r<k;r++){const y=oy+r*(bh+gap);txt(x,"Tur "+(r+1),34,y+bh/2,C.dim,"10px","center");
    for(let c=0;c<k;c++){const test=c===r;box(x,ox+c*cw+2,y,cw-4,bh,test?C.amber:"#16320c",test?"Test":"Eğitim",test?"#3a2c00":C.green,"11px");}}
};

D.cvSplit=(x,W,H)=>{title(x,"Eğitim / Test Bölünmesi",W);
  const ox=60,w=W-120,y=H/2-4,h=40;const tw=w*0.8;
  box(x,ox,y,tw,h,C.green,"Eğitim Kümesi (%80)","#06210a","bold 14px");
  box(x,ox+tw,y,w-tw,h,C.amber,"Test (%20)","#3a2c00","bold 12px");
  txt(x,"Model eğitim ile öğrenir, test ile ölçülür (hiç görmediği veri).",ox,y+h+24,C.dim,"12px");
};

D.normalize=(x,W,H)=>{title(x,"Normalizasyon vs Standardizasyon",W);
  const ox=70,w=W-140;
  txt(x,"Normalizasyon → [0, 1]",ox,46,C.teal,"bold 12px");
  line(x,ox,66,ox+w,66,C.line,2);[0,.2,.45,.7,1].forEach(v=>dot(x,ox+w*v,66,C.blue,6));txt(x,"0",ox,80,C.dim,"10px","center");txt(x,"1",ox+w,80,C.dim,"10px","center");
  txt(x,"Standardizasyon → ortalama 0, std 1",ox,118,C.violet,"bold 12px");
  const mid=ox+w/2;line(x,ox,138,ox+w,138,C.line,2);line(x,mid,130,mid,146,C.amber,2);txt(x,"0",mid,154,C.amber,"10px","center");
  [-2,-1,0,1,2].forEach(v=>dot(x,mid+(w/5)*v,138,C.violet,6));
  txt(x,"Amaç: özellikleri aynı ölçeğe getirmek.",ox,180,C.dim,"12px");
};

D.tree=(x,W,H)=>{title(x,"Karar Ağacı Yapısı",W);
  box(x,W/2-60,40,120,32,C.green,"Kök Düğüm");
  line(x,W/2-20,72,W*0.25,108,C.line,2);line(x,W/2+20,72,W*0.75,108,C.line,2);
  txt(x,"Evet",W*0.36,90,C.dim,"10px","center");txt(x,"Hayır",W*0.64,90,C.dim,"10px","center");
  box(x,W*0.25-55,108,110,30,C.blue,"İç Düğüm","#04293c");box(x,W*0.75-55,108,110,30,C.blue,"İç Düğüm","#04293c");
  [[0.13],[0.37],[0.63],[0.87]].forEach((p,i)=>{const px=W*p[0];const parent=i<2?W*0.25:W*0.75;line(x,parent,138,px,176,C.grid,1.5);box(x,px-46,176,92,28,C.amber,"Yaprak","#3a2c00","12px");});
  txt(x,"İç düğüm = özellik testi · Yaprak = nihai karar/tahmin",W/2,H-14,C.dim,"11px","center");
};

D.knnScatter=(x,W,H)=>{title(x,"KNN — En Yakın k Komşu (k=3)",W);
  const A=[[120,90],[90,150],[160,120],[110,210],[200,170]],Bp=[[330,110],[420,90],[380,180],[300,200],[440,160]];
  const q=[250,150];
  A.forEach(p=>dot(x,p[0],p[1],C.blue,7));Bp.forEach(p=>dot(x,p[0],p[1],C.pink,7));
  const all=A.map(p=>({p,c:"A"})).concat(Bp.map(p=>({p,c:"B"})));
  all.sort((m,n)=>Math.hypot(m.p[0]-q[0],m.p[1]-q[1])-Math.hypot(n.p[0]-q[0],n.p[1]-q[1]));
  const k=all.slice(0,3);const rad=Math.hypot(k[2].p[0]-q[0],k[2].p[1]-q[1]);
  x.beginPath();x.arc(q[0],q[1],rad,0,7);x.strokeStyle="rgba(255,200,0,.6)";x.lineWidth=2;x.stroke();
  k.forEach(o=>line(x,q[0],q[1],o.p[0],o.p[1],"rgba(255,255,255,.3)",1));
  dot(x,q[0],q[1],C.amber,10,true);txt(x,"?",q[0],q[1]+1,"#000","bold 12px","center");
  txt(x,"● Sınıf A",520,80,C.blue,"bold 12px");txt(x,"● Sınıf B",520,100,C.pink,"bold 12px");
  txt(x,"En yakın 3 komşuya bak,",380,230,C.dim,"11px");txt(x,"çoğunluk hangi sınıfsa o.",380,246,C.dim,"11px");
};

D.distanceGrid=(x,W,H)=>{title(x,"Uzaklık Ölçütleri",W);
  const ox=60,oy=H-50,g=34,p1=[ox,oy],p2=[ox+g*5,oy-g*3];
  for(let i=0;i<=6;i++){line(x,ox+i*g,oy-g*4,ox+i*g,oy,C.grid,1);}
  for(let j=0;j<=4;j++){line(x,ox,oy-j*g,ox+g*6,oy-j*g,C.grid,1);}
  // Manhattan (merdiven)
  line(x,p1[0],p1[1],p2[0],p1[1],C.green,3);line(x,p2[0],p1[1],p2[0],p2[1],C.green,3);
  // Öklid (köşegen)
  line(x,p1[0],p1[1],p2[0],p2[1],C.amber,3);
  dot(x,p1[0],p1[1],C.blue,7);dot(x,p2[0],p2[1],C.pink,7);
  txt(x,"P1",p1[0]-16,p1[1],C.blue,"bold 12px");txt(x,"P2",p2[0]+8,p2[1],C.pink,"bold 12px");
  const lx=ox+g*6+24;
  txt(x,"Öklid = √(Δx²+Δy²)",lx,oy-g*3,C.amber,"bold 12px");
  txt(x,"Manhattan = |Δx|+|Δy|",lx,oy-g*3+22,C.green,"bold 12px");
  txt(x,"Chebyshev = max(|Δx|,|Δy|)",lx,oy-g*3+44,C.teal,"bold 12px");
};

D.weightedVote=(x,W,H)=>{title(x,"Ağırlıklı Oylama (1/uzaklık)",W);
  const q=[W/2,H/2];dot(x,q[0],q[1],C.amber,11,true);txt(x,"?",q[0],q[1]+1,"#000","bold 12px","center");
  const ns=[[-130,-60,C.blue,"d=2"],[120,-70,C.pink,"d=5"],[-110,70,C.blue,"d=3"],[140,60,C.pink,"d=8"],[40,-110,C.blue,"d=4"]];
  ns.forEach(n=>{const a=q[0]+n[0],b=q[1]+n[1];line(x,q[0],q[1],a,b,"rgba(255,255,255,.25)",1);dot(x,a,b,n[2],7);txt(x,n[3],a+8,b,C.dim,"11px");});
  txt(x,"Yakın komşunun oyu daha ağır (ağırlık = 1/uzaklık).",W/2,H-16,C.dim,"11px","center");
};

D.margin=(x,W,H)=>{title(x,"SVM — Hiperdüzlem & Marjin",W);
  const cx=W/2,m=58;
  x.fillStyle="rgba(255,200,0,.10)";x.fillRect(cx-m,40,2*m,H-70);
  line(x,cx,40,cx,H-30,C.amber,3);txt(x,"hiperdüzlem",cx+6,52,C.amber,"11px");
  line(x,cx-m,40,cx-m,H-30,"rgba(255,255,255,.5)",1.5,[6,6]);line(x,cx+m,40,cx+m,H-30,"rgba(255,255,255,.5)",1.5,[6,6]);
  arrow(x,cx-m,H-50,cx+m,H-50,C.text);txt(x,"marjin",cx,H-62,C.text,"bold 11px","center");
  [[80,90],[120,160],[60,210],[150,120]].forEach(p=>dot(x,p[0],p[1],C.blue,7));
  [[W-80,100],[W-130,170],[W-60,220],[W-150,130]].forEach(p=>dot(x,p[0],p[1],C.pink,7));
  dot(x,cx-m+3,150,C.blue,8,true);dot(x,cx+m-3,140,C.pink,8,true);
  txt(x,"○ = destek vektörü (marjini belirler)",70,H-14,C.dim,"11px");
};

D.kernelLift=(x,W,H)=>{title(x,"Kernel Trick (boyut yükseltme)",W);
  const ly=H/2;line(x,40,ly,W*0.42,ly,C.line,2);
  [60,120,200].forEach(px=>dot(x,px,ly,C.blue,7));[90,160,230].forEach(px=>dot(x,px,ly,C.pink,7));
  txt(x,"1B: tek çizgiyle ayrılamaz",40,ly+30,C.dim,"11px");
  arrow(x,W*0.45,ly,W*0.55,ly,C.amber);
  const ox=W*0.6,oy=H-46,ax=W-40,ay=50;line(x,ox,oy,ax,oy,C.line,2);line(x,ox,oy,ox,ay,C.line,2);
  // mavi alta, pembe yukarı parabol
  [0.15,0.45,0.8].forEach(t=>{const px=ox+(ax-ox)*t;dot(x,px,oy-20,C.blue,6);});
  [0.3,0.62].forEach(t=>{const px=ox+(ax-ox)*t;dot(x,px,ay+30,C.pink,6);});
  line(x,ox+6,oy-60,ax-6,oy-60,C.amber,2,[5,5]);
  txt(x,"2B: artık bir çizgiyle ayrılır",ox,ay+10,C.amber,"bold 11px");
};

D.kmeans=(x,W,H)=>{title(x,"K-Means Kümeleme",W);
  const cl=[[150,120,C.blue],[350,100,C.pink],[260,210,C.green]];
  cl.forEach(c=>{for(let i=0;i<7;i++){dot(x,c[0]+(Math.cos(i*1.7)*32),c[1]+(Math.sin(i*2.1)*30),c[2],6);}
    x.fillStyle=C.amber;x.font="bold 18px Nunito";x.textAlign="center";x.fillText("✕",c[0],c[1]);x.textAlign="left";});
  txt(x,"✕ = küme merkezi (centroid)",W-220,H-20,C.amber,"bold 12px");
  txt(x,"Her nokta en yakın merkeze atanır, merkezler güncellenir.",70,H-20,C.dim,"11px");
};

D.elbow=(x,W,H)=>{title(x,"Elbow (Dirsek) Yöntemi",W);
  const ox=60,oy=H-44,ax=W-50,ay=46;line(x,ox,oy,ax,oy,C.line,2);line(x,ox,oy,ox,ay,C.line,2);
  txt(x,"k (küme sayısı) →",(ox+ax)/2,oy+22,C.dim,"11px","center");
  const pts=[[0,.95],[.15,.62],[.3,.4],[.45,.3],[.6,.26],[.75,.23],[.9,.21]];
  x.beginPath();pts.forEach((p,i)=>{const px=ox+(ax-ox)*p[0],py=ay+(oy-ay)*(1-p[1]);i?x.lineTo(px,py):x.moveTo(px,py);});x.strokeStyle=C.green;x.lineWidth=3;x.stroke();
  const ep=pts[2];const ex=ox+(ax-ox)*ep[0],ey=ay+(oy-ay)*(1-ep[1]);x.beginPath();x.arc(ex,ey,12,0,7);x.strokeStyle=C.amber;x.lineWidth=3;x.stroke();
  txt(x,"dirsek = en uygun k",ex+16,ey-6,C.amber,"bold 12px");
  x.save();x.translate(28,(oy+ay)/2);x.rotate(-Math.PI/2);txt(x,"hata (SSE)",0,0,C.dim,"11px","center");x.restore();
};

D.dendrogram=(x,W,H)=>{title(x,"Hiyerarşik Kümeleme (Dendrogram)",W);
  const base=H-44,xs=[80,150,220,290,360,430];
  xs.forEach((px,i)=>{txt(x,String.fromCharCode(65+i),px,base+14,C.dim,"12px","center");line(x,px,base,px,base-30,C.blue,2);});
  function merge(a,b,h){line(x,a,base-h,b,base-h,C.amber,2);line(x,a,base-h+ (h>30?0:0),a,base-h,C.amber,2);return (a+b)/2;}
  const m1=merge(xs[0],xs[1],50);const m2=merge(xs[3],xs[4],50);
  line(x,m1,base-50,m1,base-90,C.amber,2);line(x,xs[2],base-30,xs[2],base-90,C.amber,2);const m3=merge(m1,xs[2],90);
  line(x,m2,base-50,m2,base-80,C.amber,2);line(x,xs[5],base-30,xs[5],base-80,C.amber,2);const m4=merge(m2,xs[5],80);
  line(x,m3,base-90,m3,base-140,C.amber,2);line(x,m4,base-80,m4,base-140,C.amber,2);merge(m3,m4,140);
  txt(x,"Benzerler birleşir → ağaç oluşur (k baştan gerekmez).",70,28+0,C.dim,"11px");
};

D.apriori=(x,W,H)=>{title(x,"Apriori — Birliktelik / Pazar Sepeti",W);
  box(x,50,70,150,80,"#16213a","","",""); txt(x,"🛒 Sepet",125,90,C.text,"bold 13px","center");
  txt(x,"🍞 Ekmek",125,116,C.text,"13px","center");txt(x,"🥛 Süt",125,138,C.text,"13px","center");
  arrow(x,210,110,300,110,C.amber);txt(x,"kural",255,96,C.amber,"11px","center");
  box(x,310,70,170,80,"#16320c","","",""); txt(x,"Öneri",395,90,C.green,"bold 13px","center");
  txt(x,"🧈 Tereyağı",395,116,C.text,"13px","center");txt(x,"alanlar bunu da alır",395,138,C.dim,"11px","center");
  txt(x,'"X alan Y\'yi de alır" desenlerini bulur.',70,H-18,C.dim,"11px");
};

D.flow=(x,W,H,b)=>{const fs=flowSteps(b);title(x,fs.title,W);
  const steps=fs.steps,oy=50,bh=Math.min(40,Math.max(28,(H-60)/steps.length-8));
  steps.forEach((s,i)=>{const y=oy+i*(bh+8);
    x.beginPath();x.arc(64,y+bh/2,13,0,7);x.fillStyle=C.violet;x.fill();txt(x,String(i+1),64,y+bh/2+1,"#240a44","bold 13px","center");
    rr(x,86,y,W-126,bh,10);x.fillStyle="#16213a";x.fill();
    let label=s;x.font="13px Nunito, sans-serif";const maxw=W-150;
    while(x.measureText(label).width>maxw&&label.length>5)label=label.slice(0,-2);
    if(label!==s)label=label.trim()+"…";
    txt(x,label,100,y+bh/2,C.text,"13px","left");
    if(i<steps.length-1)arrow(x,64,y+bh,64,y+bh+8,C.line);});
};

D.iconRow=(x,W,H,b)=>{title(x,(b&&b.caption)||"Kavramlar",W);
  const items=(b&&b.terms&&b.terms.length)?b.terms.slice(0,4).map(t=>[t.term,t.def]):[["A","açıklama"],["B","açıklama"],["C","açıklama"]];
  const n=items.length,cw=(W-40)/n;
  items.forEach((it,i)=>{const cx=20+cw*i+cw/2;x.beginPath();x.arc(cx,70,22,0,7);x.fillStyle=["#16320c","#0e2c3f","#2a1a0d","#241640"][i%4];x.fill();
    txt(x,String(i+1),cx,70,C.amber,"bold 16px","center");
    txt(x,it[0],cx,108,C.text,"bold 12px","center");
    const words=String(it[1]||"").split(" ");let lineS="",ly=126;words.forEach(w=>{if((lineS+w).length>16){txt(x,lineS,cx,ly,C.dim,"10px","center");ly+=13;lineS=w+" ";}else lineS+=w+" ";});txt(x,lineS,cx,ly,C.dim,"10px","center");});
};

const HEIGHTS={confusion:230,rocCurve:230,roc:230,linreg:230,sigmoid:220,kfold:230,normalize:210,tree:240,
  knnScatter:280,distanceGrid:240,weightedVote:240,margin:280,kernelLift:240,kmeans:260,elbow:230,
  dendrogram:220,apriori:200,mlmap:300,flow:0,iconRow:170,barscale:140,cvSplit:160};

window.VIS={
  has:(id)=>!!D[id],
  render:(id,host,block)=>{
    const fn=D[id]||D[ {weighted:"weightedVote", roc:"rocCurve", knn:"knnScatter"}[id] ]||null;
    let h=HEIGHTS[id]||220;
    if(id==="flow"){const n=flowSteps(block).steps.length;h=60+n*46;}
    const x=mk(host,640,h);
    try{(fn||((xx,W,H)=>{title(xx,(block&&block.caption)||"Görsel",W);txt(xx,(block&&block.caption)||"",W/2,H/2,C.dim,"12px","center");}))(x,640,h,block);}
    catch(e){txt(x,"görsel hatası",20,20,C.red,"12px");}
  }
};
})();
