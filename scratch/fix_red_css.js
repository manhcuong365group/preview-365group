const fs = require('fs');
const file = 'auto365/bong-led/index.html';
let html = fs.readFileSync(file, 'utf8');

html = html.replace(/#he-thong-auto365\s*\.headline\s*\.red\s*\{[\s\S]*?\}/, '#he-thong-auto365 .headline .red {\n  color: #ef2326;\n}');
html = html.replace(/#he-thong-auto365\s*\.headline-line\s*\{[\s\S]*?\}/, '');

fs.writeFileSync(file, '\ufeff' + (html.charCodeAt(0) === 0xFEFF ? html.slice(1) : html), 'utf8');
