const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const secStart = html.indexOf('<section id="bang-gia"');
const secEnd = html.indexOf('</section>', secStart) + 10;
const secHTML = html.substring(secStart, secEnd);
console.log(secHTML);
