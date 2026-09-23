const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const regex = /<section[^>]*id="([^"]+)"/g;
let match;
while ((match = regex.exec(html)) !== null) {
    if (['san-pham', 'so-sanh', 'chan-bong', 'cum-den', 'vi-sao-auto365', 'he-thong-auto365', 'thuong-hieu', 'quy-trinh', 'case-thuc-te', 'loi-thuong-gap', 'bang-gia', 'faq', 'co-so', 'lien-he', 'tu-van-mien-phi'].includes(match[1])) {
        console.log(match[1]);
    }
}
