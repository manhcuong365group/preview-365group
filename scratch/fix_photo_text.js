const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const oldText = 'Chuẩn bị ảnh mặt trước đèn, nhãn/chân bóng và phía sau nắp chụp nếu có thể chụp an toàn. Không tự tháo cụm đèn hoặc chạm bộ phận đang nóng.';
const newText = 'Chỉ cần gửi một tấm ảnh chụp mặt trước cụm đèn xe của bạn. Chuyên viên Auto365 sẽ dựa vào đó để đối chiếu hồ sơ kỹ thuật, xác định chính xác loại chân bóng và khoảng hở nắp chụp mà không cần bạn phải tự tháo đèn.';

if (html.includes(oldText)) {
    html = html.replace(oldText, newText);
    fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
    console.log("Updated the consultation photo text.");
} else {
    console.log("Could not find the old text.");
}
