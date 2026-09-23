const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const s1 = html.indexOf('Khi nào thay bóng LED là giải pháp phù hợp?');
const s2 = html.indexOf('Bóng LED ô tô là gì?');
const s3 = html.indexOf('Khi nào nên cân nhắc thay bóng LED?');

console.log("Position 1:", s1);
console.log("Position 2:", s2);
console.log("Position 3:", s3);

// Let's see what section wraps them
const start = html.lastIndexOf('<section', s1);
const end = html.indexOf('</section>', s3) + 10;
console.log(html.substring(start, start + 300));
