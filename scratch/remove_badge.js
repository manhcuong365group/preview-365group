const fs = require('fs');
const file = 'auto365/bong-led/index.html';
let html = fs.readFileSync(file, 'utf8');

html = html.replace('<a class="mini-pill" href="#bang-gia">Bảng giá &amp; chi phí</a>', '');

fs.writeFileSync(file, '\ufeff' + (html.charCodeAt(0) === 0xFEFF ? html.slice(1) : html), 'utf8');
console.log('Removed Bảng giá & chi phí badge.');
