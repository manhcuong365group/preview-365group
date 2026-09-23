const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const start = html.indexOf('<section class="section" id="bang-gia"');
const end = html.indexOf('</section>', start) + 10;
console.log(html.substring(start, start + 800));
