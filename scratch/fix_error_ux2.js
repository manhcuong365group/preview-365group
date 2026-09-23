const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const oldError = '<div style="padding: 24px; text-align: center; background: #fff; border: 1px solid #dce4ea; border-radius: 8px;"><p style="margin:0; color:#ef2326; font-weight:600; font-size:16px;">Chưa có cấu hình đã xác minh phù hợp với thông tin này.</p><p style="margin:8px 0 16px; font-size:14px; color:#657487; line-height:1.5;">Gửi thông tin xe để chuyên gia kỹ thuật Auto365 kiểm tra chân bóng và điện áp tương thích.</p><button type="button" onclick="showConsultStepGlobal({id:\'\', name:\'Gửi thông tin nhờ kiểm tra xe\', priceText:\'Chờ báo giá\', img:\'\'}, {isPick:false})" style="background:#e31b2d; color:#fff; border:0; padding:10px 20px; border-radius:8px; font-weight:600; cursor:pointer;">Điền thông tin xe</button></div>';

const newError = '<div style="padding: 24px; text-align: center; background: #fff; border: 1px solid #dce4ea; border-radius: 8px;"><p style="margin:0; color:#ef2326; font-weight:600; font-size:16px;">Chưa có cấu hình đã xác minh phù hợp với thông tin này.</p><p style="margin:8px 0 16px; font-size:14px; color:#657487; line-height:1.5;">Gửi thông tin xe để chuyên gia kỹ thuật Auto365 kiểm tra chân bóng và điện áp tương thích.</p><button type="button" onclick="showConsultStepGlobal({id:\'\', name:\'Gửi thông tin nhờ kiểm tra xe\', priceText:\'Chờ báo giá\', img:\'https://auto365.vn/uploads/images/product_12052026/xlight-t10-1.jpg.webp\'}, {isPick:false, customBadge:\'Hỗ trợ kỹ thuật\', customTitle:\'Gửi thông tin xe cần kiểm tra\', isDirectBooking:true})" style="background:#e31b2d; color:#fff; border:0; padding:10px 20px; border-radius:8px; font-weight:600; cursor:pointer;">Điền thông tin xe</button></div>';

if (html.includes(oldError)) {
    html = html.replace(oldError, newError);
    fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
    console.log("Updated error block button arguments.");
} else {
    console.log("Could not find the previous error block.");
}
