const fs = require('fs');
const html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const h2_4_start = html.indexOf('<h2 class="section-title">Đèn yếu: Thay bóng');
const h2_5_start = html.indexOf('<h2 class="section-title">Bóng LED ô tô là gì?');
const h2_6_start = html.indexOf('<h2 class="section-title">Khi nào nên cân nhắc');
const h2_7_start = html.indexOf('<h2 class="section-title">Watt, lumen, lux');

console.log("Section 4 length:", h2_5_start - h2_4_start);
console.log("Section 6 length:", h2_7_start - h2_6_start);
