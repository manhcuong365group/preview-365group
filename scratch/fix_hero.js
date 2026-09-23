const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const oldHeroLead = `thay vì chọn chỉ theo công suất, nên đối chiếu cấu hình xe, cấu tạo chóa đèn và khoảng hở nắp chụp tản nhiệt để xác định dòng bóng LED phù hợp, gom sáng chuẩn và không làm chói mắt.`;
const newHeroLead = `Việc lựa chọn cần dựa trên chân bóng, điện áp, cụm quang học, khoảng hở và cấu hình thực tế của xe. Sau khi lắp cần kiểm tra hoạt động và vùng sáng trên đúng xe.`;

if (html.includes(oldHeroLead)) {
    html = html.replace(oldHeroLead, newHeroLead);
    fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
    console.log("Fixed hero lead.");
} else {
    console.log("Hero lead string not found.");
}
