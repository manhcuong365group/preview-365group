const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const oldAdp = `Nhiều xe (VF3, VF5, Ford, Kia) dùng ngàm khóa nhựa; Auto365 trang bị adapter cắm giắc zin.`;
const newAdp = `Nhiều xe (VF3, VF5, Ford, Kia) dùng ngàm khóa nhựa; kỹ thuật viên sẽ sử dụng adapter chuyên dụng phù hợp với xe.`;
html = html.replace(oldAdp, newAdp);
fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
console.log("Fixed adapter note.");
