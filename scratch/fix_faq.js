const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const oldFaq = 'Bảo hành áp dụng theo từng mã và điều kiện của sản phẩm. S3 Pro V2 và S6 Pro V2 công bố 24 tháng; T10 công bố 12 tháng. Khi đặt mua, xác nhận chứng từ, phạm vi và điểm tiếp nhận của đúng sản phẩm.';
const newFaq = 'Tuổi thọ 30.000 giờ là thời gian hoạt động tối đa theo lý thuyết của chip LED trong môi trường thử nghiệm tiêu chuẩn. Bảo hành 24 tháng (hoặc 12 tháng tùy mã như T10) là cam kết sửa chữa/thay thế của hãng nếu phát sinh lỗi kỹ thuật trong điều kiện sử dụng thực tế. Khi đặt mua, vui lòng xác nhận chứng từ và phạm vi bảo hành của đúng sản phẩm.';

html = html.replace(new RegExp(oldFaq.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newFaq);

fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
console.log("FAQ updated for R04.");
