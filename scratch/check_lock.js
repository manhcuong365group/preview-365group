const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const start = html.lastIndexOf('<section', html.indexOf('09 · Lợi ích nâng cấp thực tế'));
console.log(html.substring(start, start + 150));
