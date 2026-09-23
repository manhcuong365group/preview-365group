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

// 5. Title & Badge & Buttons
html = html.replace('<h2 class="headline"><span class="headline-line">Auto365.vn</span><span class="red">Tr? S? Chính</span></h2>', '<h2 class="headline">Auto365.vn <span class="red">- Tr? s? chính</span></h2>');
html = html.replace('<span class="map-badge">Auto365 Tr? S? Chính</span>', '');
html = html.replace(/\.headline-line\s*\{\s*display:\s*block;\s*\}/g, '');
html = html.replace(/\.headline\s*\.red\s*\{\s*display:\s*block;\s*color:\s*#ef2326;\s*\}/g, '.headline .red { color: #ef2326; }');
html = html.replace(/\.btn-zalo\s*\{[\s\S]*?\}/, '.btn-zalo {\n  color: #176bc9 !important;\n  border: 1px solid #dce4ea !important;\n  background: #fff !important;\n}');
html = html.replace(/\.btn-map\s*\{[\s\S]*?\}/, '.btn-map {\n  color: #ef2326 !important;\n  border: 1px solid #dce4ea !important;\n  background: #fff !important;\n}');
html = html.replace(/border:\s*0;/g, 'border: 1px solid transparent;'); 

// 6. Hide shop-count
html = html.replace('<span class="shop-count" id="shop-count" role="status" aria-live="polite">27 c?u hình s?n ph?m</span>', '<span class="shop-count" id="shop-count" role="status" aria-live="polite" style="display: none !important;">27 c?u hình s?n ph?m</span>');

// 7. Move sort select to mini-filter-row
const selRegex = /<select aria-label="S?p x?p s?n ph?m" class="shop-sort" id="shop-sort">[\s\S]*?<\/select>/;
const selectMatch = html.match(selRegex);
if(selectMatch) {
    const selectHtml = selectMatch[0];
    // Remove it from current pos
    html = html.replace(selRegex, '');
    
    // Put it inside mini-filter-row
    const miniRegex = /<div class="mini-filter-row"[^>]*>([\s\S]*?)<\/div>/;
    html = html.replace(miniRegex, function(m, inner) {
        return '<div class="mini-filter-row" aria-label="B? công c? s?n ph?m" style="justify-content: space-between;">' + 
               '<div style="display: flex; gap: 8px; flex-wrap: wrap;">' + inner.trim() + '</div>' + 
               selectHtml + '</div>';
    });
}

// 8. Fix .shop-toolbar display if we want to remove the empty div
// It's just an empty <div class="shop-toolbar"><div>...</div></div> now.
html = html.replace(/<div class="shop-toolbar">[\s\S]*?<\/div>/, '');

fs.writeFileSync(file, html);
console.log('Fixed correctly. Length: ' + html.length);
