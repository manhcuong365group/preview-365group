const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const start = html.indexOf('09 · Lợi ích nâng cấp thực tế');
const end = html.indexOf('</article>', start);
console.log(html.substring(start, end));
