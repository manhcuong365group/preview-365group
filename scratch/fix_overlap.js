const fs = require('fs');
const file = 'auto365/bong-led/index.html';
let html = fs.readFileSync(file, 'utf8');

// Replace Title
html = html.replace(
    '<h2 class="headline"><span class="headline-line">Auto365.vn</span><span class="red">Tr? S? Chính</span></h2>',
    '<h2 class="headline">Auto365.vn <span class="red">- Tr? s? chính</span></h2>'
);

// Remove map-badge to fix overlap
html = html.replace('<span class="map-badge">Auto365 Tr? S? Chính</span>', '');

fs.writeFileSync(file, html);
console.log('Fixed title and removed overlapping badge.');
