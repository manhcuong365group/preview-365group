const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

html = html.replace(
    'Toàn bộ sản phẩm bóng LED phân phối tại Auto365 đều có tem bảo hành điện tử chính hãng 24 tháng 1 đổi 1.',
    'Các sản phẩm bóng LED chính (S-Series) phân phối tại Auto365 áp dụng tem bảo hành điện tử chính hãng 24 tháng 1 đổi 1 (dòng bóng phụ T10 bảo hành 12 tháng).'
);

html = html.replace(
    'Giá niêm yết chính hãng đồng nhất trên toàn quốc, có tem bảo hành điện tử chính hãng 24 tháng 1 đổi 1.',
    'Giá niêm yết chính hãng đồng nhất trên toàn quốc, có tem bảo hành điện tử chính hãng (từ 12 - 24 tháng tùy mã sản phẩm).'
);

// Remove "Hỗ trợ trọn đời" badge which is an extreme claim in the locked section
html = html.replace('<span class="badge dark">Hỗ trợ trọn đời</span>', '<span class="badge dark">Hỗ trợ kỹ thuật</span>');

fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
