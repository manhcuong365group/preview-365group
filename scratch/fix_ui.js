const fs = require('fs');
const file = 'auto365/bong-led/index.html';
let html = fs.readFileSync(file, 'utf8');

// 1. Remove instructions
html = html.replace(/<p>So sánh theo chân bóng, nhi?t màu và ngân sách.*?<\/p>/, '');
html = html.replace(/<p class="source-summary">Giá d?i chi?u.*?<\/p>/, '');
html = html.replace(/<p class="small">Giá gi?a các c?u hình có th? khác nhau\.<\/p>/, '');

// 2. Override shop-grid layout to horizontal scroll on all devices
const styleOverride = '\n/* GLOBAL OVERRIDE FOR HORIZONTAL SCROLL */\n' +
'.shop-grid { display: flex !important; flex-direction: row !important; flex-wrap: nowrap !important; overflow-x: auto !important; scroll-snap-type: x mandatory !important; padding-bottom: 16px !important; scrollbar-width: thin; }\n' +
'.shop-grid .shop-card { flex: 0 0 260px !important; width: 260px !important; scroll-snap-align: start !important; }\n' +
'.shop-grid::-webkit-scrollbar { height: 6px; }\n' +
'.shop-grid::-webkit-scrollbar-track { background: #f1f3f7; border-radius: 999px; }\n' +
'.shop-grid::-webkit-scrollbar-thumb { background: #cfd5df; border-radius: 999px; }\n';

if (!html.includes('/* GLOBAL OVERRIDE FOR HORIZONTAL SCROLL */')) {
    html = html.replace('</style>', styleOverride + '</style>');
}

fs.writeFileSync(file, html);
console.log('UI updates applied successfully.');
