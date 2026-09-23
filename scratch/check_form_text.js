const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const s1 = html.indexOf('Nhận tư vấn miễn phí');
console.log(html.substring(s1 - 200, s1 + 800));
