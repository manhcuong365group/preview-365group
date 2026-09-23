const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const start = html.lastIndexOf('<article', html.indexOf('08 · Tiêu chuẩn Đăng kiểm an toàn'));
const end = html.indexOf('</article>', html.indexOf('09 · Lợi ích nâng cấp thực tế')) + 10;
console.log(html.substring(start, end));
