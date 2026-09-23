const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const s1 = html.indexOf('<section class="section" id="faq"');
const e1 = html.indexOf('</section>', s1) + 10;
console.log(html.substring(s1, e1));
