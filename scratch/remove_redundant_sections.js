const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const s1 = html.indexOf('<section class="section" id="kien-thuc"');
const s2 = html.indexOf('</section>', s1) + 10;
html = html.substring(0, s1) + html.substring(s2);

const s3 = html.indexOf('<section class="section" id="khi-nao-thay"');
const s4 = html.indexOf('</section>', s3) + 10;
html = html.substring(0, s3) + html.substring(s4);

fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
console.log("Removed kien-thuc and khi-nao-thay sections.");
