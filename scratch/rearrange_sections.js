const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

function getSection(id) {
    const start = html.indexOf(`<section class="section" id="${id}"`);
    if (start === -1) {
        // Some sections have different classes, like `<section class="section compact" ...` or similar. Let's just use regex.
        const r = new RegExp(`<section[^>]*id="${id}"`);
        const m = r.exec(html);
        if (!m) return '';
        const s = m.index;
        const e = html.indexOf('</section>', s) + 10;
        return html.substring(s, e);
    }
    const end = html.indexOf('</section>', start) + 10;
    return html.substring(start, end);
}

const caseSec = getSection('case-thuc-te');
const visaoSec = getSection('vi-sao-auto365');
const quytrinhSec = getSection('quy-trinh');
const hethongSec = getSection('he-thong-auto365');

// Remove them from HTML
html = html.replace(caseSec, '');
html = html.replace(visaoSec, '');
html = html.replace(quytrinhSec, '');
html = html.replace(hethongSec, '');

// Place them after cum-den
const insertPoint = html.indexOf('</section>', html.indexOf('<section class="section" id="cum-den"')) + 10;

html = html.substring(0, insertPoint) + 
       caseSec + visaoSec + quytrinhSec + hethongSec + 
       html.substring(insertPoint);

fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
console.log("Rearranged sections.");
