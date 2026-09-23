const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

html = html.replace('ĐỈNH CAO ÁNH SÁNG', 'THAY ĐỔI HỆ QUANG HỌC');
html = html.replace('siêu nhỏ gọn', 'nhỏ gọn');
html = html.replace('vượt trội', 'tối ưu');
html = html.replace('Thương hiệu tăng sáng hàng đầu thị trường.', 'Thương hiệu tăng sáng phổ biến.');
html = html.replace('chuyên bám mưa, phá sương', 'hỗ trợ đi mưa, sương');
html = html.replace('siêu mỏng', 'mỏng');
html = html.replace('đường cắt siêu nét', 'đường cắt rõ nét');
html = html.replace('Cao cấp đỉnh cao', 'Phân khúc cao cấp');
html = html.replace('Bóng LED đỉnh cao,', 'Dòng bóng LED cao cấp,');
// We leave 'Khuyến nghị hàng đầu' as is because it's just a badge text for the best match. But I'll change it to 'Khuyến nghị ưu tiên' to be safe.
html = html.replace(/Khuyến nghị hàng đầu/g, 'Khuyến nghị ưu tiên');

fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
