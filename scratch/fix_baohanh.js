const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

html = html.replace(
    'Các sản phẩm bóng LED chính (S-Series) phân phối tại Auto365 áp dụng tem bảo hành điện tử chính hãng 24 tháng 1 đổi 1 (dòng bóng phụ T10 bảo hành 12 tháng).',
    'Các sản phẩm bóng LED phân phối tại Auto365 áp dụng chính sách bảo hành điện tử theo tiêu chuẩn của hãng.'
);

html = html.replace(
    'có tem bảo hành điện tử chính hãng (từ 12 - 24 tháng tùy mã sản phẩm).',
    'áp dụng chính sách bảo hành điện tử theo tiêu chuẩn của hãng.'
);

fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
