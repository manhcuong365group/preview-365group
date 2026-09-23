const fs = require('fs');
const file = 'auto365/bong-led/index.html';
let html = fs.readFileSync(file, 'utf8');

const regex = /<div class="shop-toolbar">[\s\S]*?<\/select><\/div>\r?\n?<div class="mini-filter-row"[^>]*>([\s\S]*?)<\/div>/;

html = html.replace(regex, function(match, innerButtons) {
    return '<div style="display: none;"><span class="shop-count" id="shop-count" role="status" aria-live="polite">27 c?u hình s?n ph?m</span></div>' +
'<div class="mini-filter-row" aria-label="B? công c? s?n ph?m" style="justify-content: space-between;">' +
'  <div style="display: flex; gap: 8px; flex-wrap: wrap;">' +
'    ' + innerButtons.trim() +
'  </div>' +
'  <select aria-label="S?p x?p s?n ph?m" class="shop-sort" id="shop-sort">' +
'    <option value="default">Theo danh m?c</option>' +
'    <option value="asc">Giá th?p d?n cao</option>' +
'    <option value="desc">Giá cao d?n th?p</option>' +
'    <option value="name">Tên A–Z</option>' +
'  </select>' +
'</div>';
});

fs.writeFileSync(file, html);
console.log('Restructured toolbar into one row.');
