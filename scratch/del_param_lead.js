const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const targetStr = '<p class="param-lead">Khi chọn bóng LED ô tô, không nên nhìn một con số riêng lẻ. Mỗi thông số trả lời một câu hỏi khác nhau: điện tiêu thụ bao nhiêu, nguồn sáng phát ra bao nhiêu, mặt đường nhận được bao nhiêu ánh sáng, màu sáng ra sao và xe có tương thích điện hay không.</p>';

if (html.includes(targetStr)) {
    html = html.replace(targetStr, '');
    fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
    console.log("Removed param-lead sentence.");
} else {
    console.log("String not found.");
}
