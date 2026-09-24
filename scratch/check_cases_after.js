const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const s1 = html.indexOf('id="case-thuc-te"');
const s2 = html.indexOf('</section>', s1);
console.log(html.substring(s1, s2 + 10));
