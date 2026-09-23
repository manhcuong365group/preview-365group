const fs = require('fs');
const file = 'auto365/bong-led/index.html';
let html = fs.readFileSync(file, 'utf8');

// 1. VF5
html = html.replace(/VF5 Plus \u00B7 H7/g, 'VF5 Plus');
html = html.replace(/h? so VF5 Plus dùng phiên b?n H7 d? tham kh?o/g, 'h? so thi công VF5 Plus th?c t? d? tham kh?o');
html = html.replace(/h? so VF5 Plus H7/g, 'h? so VF5 Plus');

// 2. Extract Base64
let count = 0;
const b64regex = /<img([^>]+)src="data:image\/[^;]+;base64,([^"]+)"([^>]*)>/g;
html = html.replace(b64regex, function(m, p1, p2, p3) {
    count++;
    const ext = m.match(/data:image\/([^;]+);/)[1];
    const filename = 'extracted_image_' + count + '.' + ext;
    return '<img' + p1 + 'src="../_src-media/' + filename + '"' + p3 + '>';
});

// 3. CTA
html = html.replace(/#hero-sales-form/g, '#mid-sales-form');

// 4. Remove 'Giá gi?a các c?u hình...'
html = html.replace(/Giá gi?a các c?u hình có th? khác nhau\./g, '');
html = html.replace(/<p class="small"><\/p>/g, '');

// 5. Title & Badge & Buttons
html = html.replace('<h2 class="headline"><span class="headline-line">Auto365.vn</span><span class="red">Tr? S? Chính</span></h2>', '<h2 class="headline">Auto365.vn <span class="red">- Tr? s? chính</span></h2>');
html = html.replace('<span class="map-badge">Auto365 Tr? S? Chính</span>', '');
html = html.replace(/\.headline-line\s*\{\s*display:\s*block;\s*\}/g, '');
html = html.replace(/\.headline\s*\.red\s*\{\s*display:\s*block;\s*color:\s*#ef2326;\s*\}/g, '.headline .red { color: #ef2326; }');
html = html.replace(/\.btn-zalo\s*\{[\s\S]*?\}/, '.btn-zalo {\n  color: #176bc9 !important;\n  border: 1px solid #dce4ea !important;\n  background: #fff !important;\n}');
html = html.replace(/\.btn-map\s*\{[\s\S]*?\}/, '.btn-map {\n  color: #ef2326 !important;\n  border: 1px solid #dce4ea !important;\n  background: #fff !important;\n}');

// 6. Shop-count and mini-filter-row
// Let's do this carefully!
html = html.replace('<span class="shop-count" id="shop-count" role="status" aria-live="polite">27 c?u hình s?n ph?m</span>', '<span class="shop-count" id="shop-count" role="status" aria-live="polite" style="display: none !important;">27 c?u hình s?n ph?m</span>');

// We want to put the shop-sort dropdown into the mini-filter-row.
// Original:
// <select aria-label="S?p x?p s?n ph?m" class="shop-sort" id="shop-sort">... Tên A–Z</option></select>
// We can just find the <div class="mini-filter-row" ...> and change it to <div class="mini-filter-row" style="justify-content:space-between;"><div>...buttons...</div><select...>...</div>
// Let's just use DOM manipulation in node to be absolutely safe:
