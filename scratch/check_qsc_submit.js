const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const s1 = html.indexOf('var qscSubmit');
if(s1 === -1) {
  const s2 = html.indexOf('qsc-submit');
  console.log(html.substring(s2 - 500, s2 + 1000));
}
