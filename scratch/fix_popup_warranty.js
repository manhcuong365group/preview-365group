const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const oldHtmlBadge = `<span>Bảo hành: 24 tháng (Chính hãng)</span>`;
const newHtmlBadge = `<span id="qs-sel-warranty">Bảo hành: 24 tháng (Chính hãng)</span>`;
html = html.replace(oldHtmlBadge, newHtmlBadge);

const oldCode = `if (selPrice) selPrice.textContent = item.priceText;`;
const newCode = `if (selPrice) selPrice.textContent = item.priceText;
    var selWarranty = document.getElementById('qs-sel-warranty');
    if (selWarranty) {
      selWarranty.textContent = 'Bảo hành: ' + (item.warranty || 'Theo quy định hãng');
    }`;
html = html.replace(oldCode, newCode);

fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
console.log("Updated popup warranty display.");
