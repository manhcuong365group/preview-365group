const fs = require('fs');
const file = 'auto365/bong-led/index.html';
let html = fs.readFileSync(file, 'utf8');

let count = 0;
const b64regex = /<img([^>]+)src="data:image\/[^;]+;base64,([^"]+)"([^>]*)>/g;
html = html.replace(b64regex, function(m, p1, p2, p3) {
    count++;
    const ext = m.match(/data:image\/([^;]+);/)[1];
    const filename = 'extracted_image_' + count + '.' + ext;
    return '<img' + p1 + 'src="../_src-media/' + filename + '"' + p3 + '>';
});

fs.writeFileSync(file, html);
console.log('Extracted ' + count + ' base64 images.');
