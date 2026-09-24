const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const s1 = html.indexOf('<select id="qs-socket"');
const s2 = html.indexOf('</select>', s1);
console.log(html.substring(s1, s2));
