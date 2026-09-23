const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const s2 = html.indexOf('Bóng LED ô tô là gì?');
const s3 = html.indexOf('Khi nào nên cân nhắc thay bóng LED?');

const start = html.lastIndexOf('<section', s2);
const end = html.indexOf('</section>', s3) + 10;
console.log(html.substring(start, end));
