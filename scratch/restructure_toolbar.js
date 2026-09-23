const fs = require('fs');
const file = 'auto365/bong-led/index.html';
let html = fs.readFileSync(file, 'utf8');

// The block to replace:
// <div class="shop-toolbar"><div><span class="shop-count" id="shop-count" role="status" aria-live="polite">27 c?u hình s?n ph?m</span></div><select aria-label="S?p x?p s?n ph?m" class="shop-sort" id="shop-sort"><option value="default">Theo danh m?c</option><option value="asc">Giá th?p d?n cao</option><option value="desc">Giá cao d?n th?p</option><option value="name">Tên A–Z</option></select></div>
// <div class="mini-filter-row" aria-label="Ch?n nhanh chân bóng"><button type="button" class="mini-pill active" data-quick="all" aria-pressed="true">T?t c?</button><button type="button" class="mini-pill" data-quick="h4" aria-pressed="false">H4</button><button type="button" class="mini-pill" data-quick="h7" aria-pressed="false">H7</button><button type="button" class="mini-pill" data-quick="h11" aria-pressed="false">H11</button><a class="mini-pill" href="#bang-gia">B?ng giá &amp; chi phí</a></div>

html = html.replace(/<div class="shop-toolbar">[\s\S]*?<\/select><\/div>\r?\n?<div class="mini-filter-row"[^>]*>([\s\S]*?)<\/div>/, function(match, innerButtons) {
    return <div style="display: none;"><span class="shop-count" id="shop-count" role="status" aria-live="polite">27 c?u hình s?n ph?m</span></div>
<div class="mini-filter-row" aria-label="B? công c? s?n ph?m" style="justify-content: space-between;">
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
     + innerButtons.trim() + 
  </div>
  <select aria-label="S?p x?p s?n ph?m" class="shop-sort" id="shop-sort">
    <option value="default">Theo danh m?c</option>
    <option value="asc">Giá th?p d?n cao</option>
    <option value="desc">Giá cao d?n th?p</option>
    <option value="name">Tên A–Z</option>
  </select>
</div>;
});

fs.writeFileSync(file, html);
console.log('Restructured toolbar into one row.');
