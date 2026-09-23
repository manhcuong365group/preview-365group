const fs = require('fs');
const file = 'auto365/bong-led/index.html';
let html = fs.readFileSync(file, 'utf8');

html = html.replace('<p class="small">Giá gi?a các c?u hình có th? khác nhau.</p>', '');

fs.writeFileSync(file, html);
console.log('Fixed text manually.');
