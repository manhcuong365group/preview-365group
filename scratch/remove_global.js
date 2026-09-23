const fs = require('fs');
const file = 'auto365/bong-led/index.html';
let html = fs.readFileSync(file, 'utf8');

const regex = /\/\* GLOBAL OVERRIDE FOR HORIZONTAL SCROLL \*\/[\s\S]*?\.shop-grid::-webkit-scrollbar-thumb \{ background: #cfd5df; border-radius: 999px; \}/;
html = html.replace(regex, '');

fs.writeFileSync(file, html);
console.log('Removed GLOBAL OVERRIDE FOR HORIZONTAL SCROLL.');
