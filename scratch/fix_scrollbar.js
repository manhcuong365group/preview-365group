const fs = require('fs');
const file = 'auto365/bong-led/index.html';
let html = fs.readFileSync(file, 'utf8');

html = html.replace(/<p class="small">Giá gi?a các c?u hình có th? khác nhau\.<\/p>/g, '');

const oldCSSRegex = /\.shop-grid\s*\{[\s\S]*?max-width:\s*280px\s*!important;\s*\}/;
const newCSS = ".shop-grid {\n" +
"    display: flex !important;\n" +
"    flex-wrap: nowrap !important;\n" +
"    overflow-x: auto !important;\n" +
"    overflow-y: hidden !important;\n" +
"    gap: 16px !important;\n" +
"    padding-bottom: 8px !important;\n" +
"    scroll-snap-type: x mandatory;\n" +
"    scroll-behavior: smooth;\n" +
"    -ms-overflow-style: none;\n" +
"    scrollbar-width: none;\n" +
"}\n" +
".shop-grid::-webkit-scrollbar {\n" +
"    display: none;\n" +
"}\n" +
".shop-grid .shop-card {\n" +
"    flex: 0 0 280px !important;\n" +
"    max-width: 280px !important;\n" +
"    scroll-snap-align: start;\n" +
"}";
html = html.replace(oldCSSRegex, newCSS);

fs.writeFileSync(file, html);
console.log('Fixed scrollbar and removed leftover text.');
