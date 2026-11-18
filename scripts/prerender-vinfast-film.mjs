// Prerender nội dung widget (xe, gói, bộ tính giá, sơ đồ) vào HTML tĩnh cho /phim-cach-nhiet-o-to/vinfast/.
// Cần server local: node scripts/serve-preview.mjs (cổng 8767). JS trang vẫn render lại khi chạy.
// Chạy lại nhiều lần vẫn chỉ giữ 1 bộ (xoá khối <!--pre--> cũ theo cặp mở/đóng).
import fs from 'fs';import puppeteer from 'puppeteer';
const F='auto365/phim-cach-nhiet-o-to/vinfast/index.html',IDS=['vf-models','vf-pk','vf-lc-rows','vf-dia'];
function strip(h,id){const m=new RegExp('id="'+id+'"[^>]*>').exec(h);if(!m)throw id;let s=m.index+m[0].length;
 if(!h.startsWith('<!--pre-->',s))return h;let i=s,d=0;
 do{const a=h.indexOf('<!--pre-->',i),b=h.indexOf('<!--/pre-->',i);if(b<0)throw 'unbalanced '+id;
  if(a>-1&&a<b){d++;i=a+10}else{d--;i=b+11}}while(d>0||h.startsWith('<!--pre-->',i));
 return h.slice(0,s)+h.slice(i)}
let h=fs.readFileSync(F,'utf8');for(const id of IDS)h=strip(h,id);fs.writeFileSync(F,h);
const b=await puppeteer.launch();const p=await b.newPage();await p.setViewport({width:1280,height:900});
await p.goto('http://localhost:8767/phim-cach-nhiet-o-to/vinfast/?nocache='+Date.now(),{waitUntil:'networkidle0'});
const out=await p.evaluate(ids=>ids.map(id=>{const e=document.getElementById(id).cloneNode(true);e.querySelectorAll('[hidden]').forEach(x=>x.removeAttribute('hidden'));
 const w=document.createTreeWalker(e,NodeFilter.SHOW_COMMENT),c=[];while(w.nextNode())c.push(w.currentNode);c.forEach(n=>n.remove());return e.innerHTML}),IDS);
await b.close();
IDS.forEach((id,i)=>{const re=new RegExp('(id="'+id+'"[^>]*>)');h=h.replace(re,(m,a)=>a+'<!--pre-->'+out[i]+'<!--/pre-->')});
fs.writeFileSync(F,h);console.log('ok',out.map(x=>x.length));
