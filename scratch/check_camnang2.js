const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const s1 = html.indexOf('Bước sóng ánh sáng vàng ít bị khúc xạ');
console.log(html.substring(s1 - 200, s1 + 1000));
