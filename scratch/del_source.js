const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const targetStr = '<p class="source-summary">Giá đối chiếu <time datetime="2026-09-18">18/09/2026</time>. Đơn vị bộ/cặp theo từng trang nguồn; thành phần bộ, VAT, công lắp, phụ kiện và tình trạng hàng cần xác nhận khi báo giá.</p>';
const targetStrNoTime = '<p class="source-summary">'; // in case the precise string doesn't match

const pStart = html.indexOf('<p class="source-summary">');
if (pStart > -1) {
    const pEnd = html.indexOf('</p>', pStart) + 4;
    html = html.substring(0, pStart) + html.substring(pEnd);
    fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
    console.log("Deleted source-summary block.");
} else {
    console.log("Could not find the block.");
}
