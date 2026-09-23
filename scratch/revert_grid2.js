const fs = require('fs');
const file = 'auto365/bong-led/index.html';
let html = fs.readFileSync(file, 'utf8');

const cssRegex = /\.shop-grid\s*\{[\s\S]*?scroll-snap-align:\s*start;\s*\}/;
html = html.replace(cssRegex, '');

const resetCSS = ".shop-grid { display: grid !important; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)) !important; gap: 16px !important; overflow: visible !important; flex-wrap: wrap !important; } .shop-grid .shop-card { max-width: 100% !important; min-width: 0 !important; flex: auto !important; }";

html = html.replace('</head>', '<style>' + resetCSS + '</style></head>');

fs.writeFileSync(file, html);
console.log('Reverted to multi-row grid.');
