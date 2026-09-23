const fs = require('fs');
const file = 'auto365/bong-led/index.html';
let html = fs.readFileSync(file, 'utf8');

// 1. Put Auto365.vn and Tr? S? Chính on 1 line
html = html.replace(
    /<h2 class="headline"><span class="headline-line">Auto365\.vn<\/span><span class="red">Tr? S? Chính<\/span><\/h2>/,
    '<h2 class="headline">Auto365.vn <span class="red">– Tr? S? Chính</span></h2>'
);

// 2. Fix the CSS for .headline and borders to match "d?ng b?" (consistent thin lines)
// We remove display: block from .headline .red and .headline-line
html = html.replace(/\.headline-line\s*\{\s*display:\s*block;\s*\}/g, '');
html = html.replace(/\.headline\s*\.red\s*\{\s*display:\s*block;\s*color:\s*#ef2326;\s*\}/g, '.headline .red { color: #ef2326; }');

// Make the Zalo and Map buttons have consistent thin borders with the right side
html = html.replace(/\.btn-zalo\s*\{[\s\S]*?\}/, '.btn-zalo {\n  color: #176bc9 !important;\n  border: 1px solid #dce4ea !important;\n  background: #fff !important;\n}');
html = html.replace(/\.btn-map\s*\{[\s\S]*?\}/, '.btn-map {\n  color: #ef2326 !important;\n  border: 1px solid #dce4ea !important;\n  background: #fff !important;\n}');

// Also fix the .btn so that border: 1px solid #dce4ea applies if set
html = html.replace(/border:\s*0;/g, 'border: 1px solid transparent;'); 

fs.writeFileSync(file, html);
console.log('Fixed headline and buttons borders.');
