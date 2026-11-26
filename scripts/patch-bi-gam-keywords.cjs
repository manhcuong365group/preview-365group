// Bổ sung cụm từ khoá bi gầm (độ bi gầm, đèn gầm/đèn sương mù, bi gầm 3 màu, giá) cho 8 hub mới — 26/11/2026
const fs=require('fs');const H={mercedes:'Mercedes',audi:'Audi',isuzu:'Isuzu',mg:'MG',byd:'BYD',geely:'Geely',volvo:'Volvo',volkswagen:'Volkswagen'};
for(const [s,B] of Object.entries(H)){const f=`auto365/bi-gam/${s}/content-src.html`;let c=fs.readFileSync(f,'utf8');
if(c.includes('kw-26-11')){console.log('skip',s);continue}
const add=`  <details data-kw="kw-26-11"><summary>Độ bi gầm ${B} khác gì đèn gầm (đèn sương mù) zin?</summary><p>Đèn gầm zin, còn gọi là đèn sương mù, trên nhiều xe ${B} chiếu tán rộng và không có đường cắt rõ. Bi gầm là đèn gầm có thấu kính (lens), gom sáng xuống mặt đường và hai bên lề với đường cắt cos rõ hơn. Độ bi gầm ${B} là lắp bi gầm vào hốc đèn gầm của xe; xe không có hốc đèn gầm phù hợp thì kỹ thuật viên đánh giá phương án đèn gầm dạng rời.</p></details>
  <details><summary>Bi gầm ${B} nên chọn loại 1 màu hay bi gầm 3 màu?</summary><p>Bi gầm 1 màu có một nhiệt màu cố định; bi gầm 3 màu (3 nhiệt màu) chuyển được giữa ánh sáng trắng, vàng và trung tính để chủ xe đổi theo điều kiện đi mưa, đi đêm. Nhiệt màu không tự quyết định khả năng nhìn; hiệu quả còn phụ thuộc mẫu bi gầm LED, góc chiếu và căn chỉnh sau khi lắp.</p></details>
`;
const a=c.indexOf('  <details><summary>Một dòng '+B+' có nhiều đời');if(a<0)throw s;
c=c.slice(0,a)+add+c.slice(a);
c=c.replace('<summary>Giá lắp bi gầm '+B+' gồm những khoản nào?</summary>','<summary>Giá độ bi gầm '+B+' bao nhiêu, gồm những khoản nào?</summary>');
fs.writeFileSync(f,c);
const bf=`scripts/build-bi-gam-${s}.mjs`;let b=fs.readFileSync(bf,'utf8');
b=b.replace(/const title = '[^']*';/,`const title = 'Bi gầm ${B}: độ đèn gầm theo dòng xe, giá và xe đã làm | Auto365';`)
 .replace(/const desc = '[^']*';/,`const desc = 'Độ bi gầm ${B} theo đời xe: chọn bi gầm 2.0/3.0 inch, 1 màu hay 3 màu thay đèn gầm (đèn sương mù) zin; xem xe ${B} đã làm tại Auto365 và nhận báo giá.';`);
fs.writeFileSync(bf,b);console.log('ok',s)}
