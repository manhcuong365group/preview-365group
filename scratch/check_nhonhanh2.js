const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const start = html.indexOf('<div class="param-summary-box">');
const end = html.indexOf('</div>', html.lastIndexOf('</span>', start + 1000)) + 6;
console.log(html.substring(start, end));
