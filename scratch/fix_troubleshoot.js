const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const oldPWM = `ECU trên xe (Ford, Mazda, Kia, BMW...) dùng xung PWM giám sát dòng điện; bóng LED 35–45W ăn dòng thấp hơn bóng Halogen 55W khiến xe báo lỗi đứt bóng.`;
const newPWM = `Nhấp nháy/báo lỗi có thể liên quan nguồn cấp, cơ chế điều khiển đèn hoặc tương thích tải.`;
html = html.replace(oldPWM, newPWM);

const oldAdapter = `Lắp thêm <strong>bộ giải mã CANbus Adapter (Load Resistor/Decoder)</strong> chuyên dụng để điều hòa dòng tín hiệu chuẩn về hệ thống điều khiển.`;
const newAdapter = `Cần kiểm tra trên đúng xe; không mặc định thêm điện trở/decoder.`;
html = html.replace(oldAdapter, newAdapter);

const oldThrottle = `Đuôi quạt làm mát bị nắp chụp ép sát, nhiệt không thoát được ra ngoài khiến mạch điều khiển tự động giảm công suất (thermal throttling) để bảo vệ chip.`;
const newThrottle = `Giảm sáng khi hoạt động lâu cần kiểm tra nguồn cấp, nhiệt độ, hệ tản nhiệt và khoảng hở. Không kết luận nguyên nhân chỉ từ thời gian xuất hiện.`;
html = html.replace(oldThrottle, newThrottle);

fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
console.log("Fixed troubleshooting claims.");
