const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const s1 = html.indexOf('function runSearch() {');
const s2 = html.indexOf('  var btnSubmit = document.getElementById', s1);
console.log("s1:", s1, "s2:", s2);
console.log("End of runSearch block:\\n" + html.substring(s2 - 200, s2 + 100));
