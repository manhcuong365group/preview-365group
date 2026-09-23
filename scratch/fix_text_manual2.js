const fs = require('fs');
const file = 'auto365/bong-led/index.html';
let html = fs.readFileSync(file, 'utf8');

html = html.replace(/Giá gi?a các c?u hình có th? khác nhau\./g, '');

fs.writeFileSync(file, html);
console.log('Fixed text regex.');
