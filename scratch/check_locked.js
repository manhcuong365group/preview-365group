const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const start = html.indexOf('id="vi-sao-auto365-title"');
const end = html.indexOf('</section>', start);
console.log(html.substring(start, end));
