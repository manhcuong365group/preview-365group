const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const oldT10 = `Kích thước nhỏ gọn, công suất 3W - 5W. Nguồn sáng phụ trợ định vị, biển số và nội thất xe.`;
const newT10 = `Kích thước nhỏ gọn, ứng dụng làm nguồn sáng phụ trợ định vị, soi biển số và nội thất xe. Công suất thực tế tùy thuộc từng mã bóng.`;
html = html.replace(oldT10, newT10);

fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
console.log("Fixed T10 wattage.");
