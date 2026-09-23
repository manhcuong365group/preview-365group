const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const oldD1 = `Bóng LED chuyển đổi cắm trực tiếp vào giắc Ballast zin, không cần cắt dây hay can thiệp điện cao áp.`;
const newD1 = `[CẦN REVIEW KỸ THUẬT] Việc thay thế bóng LED cho hệ thống Xenon nguyên bản cần kiểm tra tình trạng cụm đèn, Ballast và nguồn điện để đảm bảo an toàn. Không tự ý can thiệp nguồn điện.`;
html = html.replace(oldD1, newD1);

const oldD2 = `Cần đo kiểm điện áp ngõ ra của Ballast zin để đảm bảo LED khởi động tức thì, không báo lỗi taplo.`;
const newD2 = `[CẦN REVIEW KỸ THUẬT] Việc lắp đặt cần thực hiện bởi kỹ thuật viên chuyên môn để xác nhận khả năng tương thích và không làm ảnh hưởng hệ thống điện.`;
html = html.replace(oldD2, newD2);

fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
console.log("Fixed D-series socket warnings.");
