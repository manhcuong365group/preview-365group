const fs = require('fs');
const file = 'auto365/bong-led/index.html';
let html = fs.readFileSync(file, 'utf8');

// Update select options
html = html.replace('<option value="H4">Chân H4 (Pha/Cos chung)</option>', '<option value="H4">Chân H4 — cần xác nhận đúng vị trí và cụm đèn</option>');
html = html.replace('<option value="H7">Chân H7 (VinFast VF3, Kia, Hyundai...)</option>', '<option value="H7">Chân H7 — theo mã bóng và tài liệu đúng cấu hình</option>');
html = html.replace('<option value="H11">Chân H11 (VinFast VF5 Plus, Mazda, Toyota...)</option>', '<option value="H11">Chân H11 — theo mã bóng và tài liệu đúng cấu hình</option>');

// "Gỡ khẳng định T10 có trên 99% xe nếu không có căn cứ."
html = html.replace('Chân T10 (Demi, soi biển, trần xe) - Lắp vừa 99% xe', 'Chân T10 (Demi, soi biển, trần xe)');

fs.writeFileSync(file, '\ufeff' + (html.charCodeAt(0) === 0xFEFF ? html.slice(1) : html), 'utf8');
console.log('Fixed dropdown options.');
