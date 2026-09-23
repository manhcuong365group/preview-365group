const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

function getSection(id) {
    const r = new RegExp(`<section[^>]*id="${id}"`);
    const m = r.exec(html);
    if (!m) return '';
    const s = m.index;
    const e = html.indexOf('</section>', s) + 10;
    return html.substring(s, e);
}

const caseSec = getSection('case-thuc-te');
const visaoSec = getSection('vi-sao-auto365');
const quytrinhSec = getSection('quy-trinh');
const hethongSec = getSection('he-thong-auto365');
const thuonghieuSec = getSection('thuong-hieu');

// Remove them from HTML
html = html.replace(caseSec, '');
html = html.replace(visaoSec, '');
html = html.replace(quytrinhSec, '');
html = html.replace(hethongSec, '');
html = html.replace(thuonghieuSec, '');

// Place them after tu-van-mien-phi
const formStart = html.indexOf('<section class="consult-section" id="tu-van-mien-phi"');
const insertPoint = html.indexOf('</section>', formStart) + 10;

html = html.substring(0, insertPoint) + 
       caseSec + visaoSec + quytrinhSec + hethongSec + thuonghieuSec + 
       html.substring(insertPoint);

fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
console.log("Moved the 5 sections up.");
