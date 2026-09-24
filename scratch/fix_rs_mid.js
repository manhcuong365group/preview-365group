const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const s1 = html.indexOf("resultBox.innerHTML = '';");
const newS = "resultBox.innerHTML = '<div style=\"margin-bottom: 12px; font-size: 14px; color: #0f172a; font-weight: 500;\">Sản phẩm để đối chiếu — cần kiểm tra cụm đèn, khoảng hở và hệ điều khiển trước khi xác nhận lắp.</div>';";

if (s1 !== -1) {
    html = html.replace("resultBox.innerHTML = '';", newS);
    fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
    console.log("Updated resultBox heading successfully.");
} else {
    console.log("Not found.");
}
