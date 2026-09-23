const fs = require('fs');
const file = 'auto365/bong-led/index.html';
let html = fs.readFileSync(file, 'utf8');

// The boss explicitly said: "S?a mâu thu?n H11/H7 c?a ví d? VF5 Plus"
html = html.replace(/VF5 Plus \u00B7 H7/g, 'VF5 Plus');
html = html.replace(/h? so VF5 Plus dùng phiên b?n H7 d? tham kh?o/g, 'h? so thi công VF5 Plus th?c t? d? tham kh?o');
html = html.replace(/h? so VF5 Plus H7/g, 'h? so VF5 Plus');

// Extract base64 images
let match;
let count = 0;
const b64regex = /<img([^>]+)src="data:image\/[^;]+;base64,([^"]+)"([^>]*)>/g;
html = html.replace(b64regex, function(m, p1, p2, p3) {
    count++;
    // We just replace it with a placeholder URL, since we don't have the original image file handy.
    // Or, we can save the base64 to a file in _src-media and link it!
    const ext = m.match(/data:image\/([^;]+);/)[1];
    const filename = 'extracted_image_' + count + '.' + ext;
    const filepath = '_src-media/' + filename;
    fs.writeFileSync(filepath, Buffer.from(p2, 'base64'));
    return '<img' + p1 + 'src="../_src-media/' + filename + '"' + p3 + '>';
});

fs.writeFileSync(file, html);
console.log('Fixed VF5 texts and extracted ' + count + ' base64 images.');
