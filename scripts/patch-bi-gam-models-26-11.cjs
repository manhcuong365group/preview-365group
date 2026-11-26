// Bổ sung dòng xe còn thiếu cho 8 hub bi gầm mới (đối chiếu dòng đã/đang bán tại Việt Nam) — 26/11/2026
const fs=require('fs');
const ADD={mercedes:[['GLK','suv'],['ML','suv'],['GL','suv'],['EQB','suv'],['EQE SUV','suv'],['EQS SUV','suv'],['Maybach GLS','suv'],['B-Class','sedan'],['CLS','sedan'],['AMG GT','sedan'],['SL','sedan'],['SLK','sedan'],['Vito','mpv']],
 audi:[['A1','sedan'],['A3','sedan'],['Q8 e-tron','suv'],['e-tron GT','sport'],['R8','sport']],
 isuzu:[['mu-7','suv'],['Q-Series (QKR)','truck'],['N-Series (NMR/NPR/NQR)','truck'],['F-Series (FRR/FVR)','truck']],
 mg:[['MG3','sedan'],['MG6','sedan'],['Cyberster','sedan']],
 byd:[],geely:[],
 volvo:[['V90 Cross Country','sedan']],
 volkswagen:[['Jetta','sedan'],['Arteon','sedan'],['Sharan','mpv']]};
for(const [s,A] of Object.entries(ADD)){if(!A.length)continue;const f=`auto365/bi-gam/${s}/content-src.html`;let c=fs.readFileSync(f,'utf8');
 const m=c.match(/var M=\[([\s\S]*?)\]\];/);const have=[...m[1].matchAll(/\['([^']+)'/g)].map(x=>x[1]);const add=A.filter(a=>!have.includes(a[0]));
 c=c.replace(/var M=\[([\s\S]*?)\]\];/,(x,b)=>'var M=['+b+'],\n'+add.map(a=>`['${a[0]}','${a[1]}','','']`).join(',\n')+'];');
 c=c.replace(/var NEW=\[([^\]]*)\]/,(x,b)=>'var NEW=['+b+','+add.map(a=>`'${a[0]}'`).join(',')+']');
 if(s==='isuzu'&&!c.includes("['truck'"))c=c.replace(/var T=\[([^;]*)\];/,(x,b)=>"var T=["+b+",['truck','Xe tải']];");
 const n=have.length+add.length;c=c.replace(/danh sách \d+ dòng xe/,'danh sách '+n+' dòng xe');
 fs.writeFileSync(f,c);console.log(s,have.length,'->',n,add.map(a=>a[0]).join(', '))}
