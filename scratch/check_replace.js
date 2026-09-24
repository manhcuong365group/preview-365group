const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const s1 = html.indexOf('function runSearch() {');
const e1 = html.indexOf('function generateCards', s1);
console.log("s1:", s1, "e1:", e1);
let oldRunSearch = html.substring(s1, e1);
console.log("Length of oldRunSearch:", oldRunSearch.length);
console.log("Index of oldRunSearch in html:", html.indexOf(oldRunSearch));
