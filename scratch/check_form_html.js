const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const s1 = html.indexOf('Nhận tư vấn miễn phí');
const start = html.lastIndexOf('<form', s1);
const end = html.indexOf('</form>', start) + 10;
console.log(html.substring(start, start + 800));
