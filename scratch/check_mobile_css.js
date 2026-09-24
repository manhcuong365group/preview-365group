const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const s1 = html.indexOf('@media (max-width');
console.log(html.substring(s1, s1 + 1500));
