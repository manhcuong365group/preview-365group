const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const start = html.indexOf('Giá bóng LED và tổng chi phí hoàn thiện');
const end = html.indexOf('</section>', start) + 5;
console.log(html.substring(start - 200, end));
