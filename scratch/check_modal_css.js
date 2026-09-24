const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const s1 = html.indexOf('.qs-modal');
if (s1 === -1) {
  const s2 = html.indexOf('.qs-reco');
  if (s2 !== -1) console.log(html.substring(s2, s2 + 1000));
} else {
  console.log(html.substring(s1, s1 + 1000));
}
