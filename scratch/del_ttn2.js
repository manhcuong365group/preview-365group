const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const ttnTitle = html.indexOf('<h2 id="thong-tin-nhanh-title"');
const sectionStart = html.lastIndexOf('<section', ttnTitle);
const sectionEnd = html.indexOf('</section>', sectionStart) + 10;

html = html.substring(0, sectionStart) + html.substring(sectionEnd);
fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
console.log("Deleted Thông tin nhanh section successfully.");
