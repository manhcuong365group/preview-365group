const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const s1 = html.indexOf('.grid-2 {');
if (s1 !== -1) {
  console.log(html.substring(s1, s1 + 300));
} else {
  console.log("No .grid-2 found");
}

const s2 = html.indexOf('.grid-3 {');
if (s2 !== -1) {
  console.log(html.substring(s2, s2 + 300));
} else {
  console.log("No .grid-3 found");
}
