const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const regex = /<p[^>]*>So sánh theo chân bóng, nhiệt màu và ngân sách\. Hãy xác nhận cấu hình đèn trên xe trước khi chọn mã; T10 được tách riêng cho nhu cầu đèn phụ\.<\/p>/s;
if (html.match(regex)) {
    html = html.replace(regex, '');
    fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
    console.log("Removed the paragraph.");
} else {
    console.log("Paragraph not found with exact match, searching loosely...");
}
