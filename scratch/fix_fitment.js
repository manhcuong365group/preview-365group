const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const oldText1 = `Kinh nghiệm thực tế thi công tại Auto365: Đuôi quạt tản nhiệt của bóng LED dài hơn bóng halogen 2–3cm. Nếu nắp chụp đèn quá sát (dưới 1.5cm), luồng gió bị bít kín khiến bóng bị quá nhiệt và sụt sáng sau 15 phút.`;
const newText1 = `Cần kiểm tra khoảng hở cho thân bóng, quạt/tản nhiệt, dây và nắp chụp. Nếu nắp không thể đóng đúng hoặc hệ tản nhiệt bị cản, cần đánh giá lại cấu hình thay vì áp dụng một khoảng hở cố định cho mọi cụm đèn.`;
html = html.replace(oldText1, newText1);

const oldText2 = `<strong>Giải pháp:</strong> Sử dụng nắp chụp cao su mở rộng (Flexible Extended Dust Cap) chuyên dụng vừa chống nước bụi chuẩn IP65, vừa đảm bảo buồng khí đối lưu làm mát quạt.`;
const newText2 = `<strong>Lưu ý:</strong> Việc thay đổi nắp chụp hoặc chế thêm tản nhiệt ngoài cần được cân nhắc kỹ dựa trên yêu cầu chống nước và tản nhiệt của từng xe.`;
html = html.replace(oldText2, newText2);

fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
console.log("Fixed fitment numbers.");
