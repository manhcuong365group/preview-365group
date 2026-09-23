const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

html = html.replace(
    'Tính theo bộ (2 bóng) hoặc theo cặp. Giá niêm yết chính hãng đồng nhất trên toàn quốc, áp dụng chính sách bảo hành điện tử theo tiêu chuẩn của hãng.',
    'Mức giá được áp dụng đồng nhất trên toàn hệ thống (tính theo bộ hoặc cặp), đi kèm chế độ bảo hành điện tử chính hãng.'
);

fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
