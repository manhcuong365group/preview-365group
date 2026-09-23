const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const targetStr = '<a class="text-link" href="https://auto365.vn/nang-cap-bong-led-x-light-s6-pro-v2-cho-vinfast-vf5">Xem hồ sơ VF5 Plus dùng S6 Pro V2 H7 →</a>';

if (html.includes(targetStr)) {
    html = html.replace(targetStr, '');
    fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
    console.log("Removed the VF5 link.");
} else {
    console.log("Could not find the link.");
}
