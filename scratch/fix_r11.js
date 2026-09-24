const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

html = html.replace('<a href="#kien-thuc">Kiến thức</a>', '<a href="#cam-nang">Kiến thức</a>');
fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
console.log("R11 anchor fixed.");
