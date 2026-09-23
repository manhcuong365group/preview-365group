const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const s1 = html.indexOf('Lắp vừa chưa phải là đủ');
const start = html.lastIndexOf('<section', s1);
const end = html.indexOf('</section>', start) + 10;

console.log(html.substring(start, start + 300));
console.log("...");
console.log(html.substring(end - 300, end));
