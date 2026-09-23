const fs = require('fs');
const html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const s4_start = html.indexOf('<h2 id="so-sanh-title"');
const s4_end = html.indexOf('<section', s4_start);
console.log("=== SEC 4 ===");
console.log(html.substring(s4_start, s4_end).trim());

const s6_start = html.indexOf('<h2 id="khi-nao-thay-title"');
const s6_end = html.indexOf('<section', s6_start);
console.log("=== SEC 6 ===");
console.log(html.substring(s6_start, s6_end).trim());
