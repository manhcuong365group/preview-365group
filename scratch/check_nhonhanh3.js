const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const start = html.indexOf('<!-- Bottom summary bar: Nhớ nhanh trong 10 giây -->');
if (start > -1) {
    const end = html.indexOf('</div>', html.indexOf('<div class="param-pills">')) + 12; 
    // actually, let's just use string replace.
    const block = html.substring(start, html.indexOf('</style>', start)); // Wait, there's a style block?
    console.log(html.substring(start, start + 800));
}
