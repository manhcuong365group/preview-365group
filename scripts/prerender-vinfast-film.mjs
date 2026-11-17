// Prerender nội dung widget (xe, gói, bộ tính giá, sơ đồ) vào HTML tĩnh cho /phim-cach-nhiet-o-to/vinfast/.
// Cần server local: node scripts/serve-preview.mjs (cổng 8767). JS trang vẫn render lại khi chạy.
import fs from 'fs';import puppeteer from 'puppeteer';
const F='auto365/phim-cach-nhiet-o-to/vinfast/index.html',IDS=['vf-models','vf-pk','vf-lc-rows','vf-dia'];
let h=fs.readFileSync(F,'utf8');
for(const id of IDS)h=h.replace(new RegExp('(id="'+id+'"[^>]*>)<!--pre-->[\s\S]*?<!--/pre-->'),'$1');
fs.writeFileSync(F,h);
const b=await puppeteer.launch();const p=await b.newPage();await p.setViewport({width:1280,height:900});
await p.goto('http://localhost:8767/phim-cach-nhiet-o-to/vinfast/',{waitUntil:'networkidle0'});
const out=await p.evaluate(ids=>ids.map(id=>{const e=document.getElementById(id).cloneNode(true);e.querySelectorAll('[hidden]').forEach(x=>x.removeAttribute('hidden'));return e.innerHTML}),IDS);
await b.close();
IDS.forEach((id,i)=>{const re=new RegExp('(id="'+id+'"[^>]*>)');if(!re.test(h))throw id;h=h.replace(re,'$1<!--pre-->'+out[i].replace(/\$/g,'$$$$')+'<!--/pre-->')});
fs.writeFileSync(F,h);console.log('ok',out.map(x=>x.length));
