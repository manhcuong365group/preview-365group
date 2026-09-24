const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

// Fix R09
html = html.replace('Chưa rõ (ưu tiên mẫu 12V)', 'Chưa rõ — cần kiểm tra');

// Fix R01
const oldUpdateShop = "if(group==='socket')return p.sockets.includes(v);";
const newUpdateShop = "if(group==='socket') { const sock = String(v).trim().toUpperCase(); return Array.isArray(p.sockets) && p.sockets.some(s => String(s).trim().toUpperCase() === sock); }";
if(html.includes(oldUpdateShop)) {
    html = html.replace(oldUpdateShop, newUpdateShop);
    console.log("R01 fixed.");
} else {
    console.log("oldUpdateShop not found!");
}

// Fix R02 (item.img -> (item.image || item.img))
// In runSearch
const rsImgOld = "var img = el('img', { src: item.img, alt: item.name, loading: 'lazy' });";
const rsImgNew = "var img = el('img', { src: (item.image || item.img), alt: item.name, loading: 'lazy' });";
if(html.includes(rsImgOld)) {
    html = html.replace(rsImgOld, rsImgNew);
    console.log("R02 runSearch fixed.");
} else {
    console.log("rsImgOld not found!");
}

// In showConsultStep
const csImgOld = "if (selImg) { selImg.src = item.img; selImg.alt = item.name; }";
const csImgNew = "if (selImg) { selImg.src = (item.image || item.img); selImg.alt = item.name; }";
if(html.includes(csImgOld)) {
    html = html.replace(csImgOld, csImgNew);
    console.log("R02 showConsultStep fixed.");
} else {
    console.log("csImgOld not found!");
}

fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
