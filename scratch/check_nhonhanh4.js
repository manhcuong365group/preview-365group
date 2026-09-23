const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const start = html.indexOf('<div class="param-summary-box">');
console.log(html.substring(start, start + 600));
