const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const s1 = html.indexOf('<div class="grid grid-2"><article class="case-card">');
const s2 = html.indexOf('</figure></div></section>', s1);
if (s1 !== -1) {
    console.log(html.substring(s1, s2 + 9));
}
