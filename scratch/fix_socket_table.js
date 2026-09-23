const fs = require('fs');
const file = 'auto365/bong-led/index.html';
let html = fs.readFileSync(file, 'utf8');

html = html.replace(
  /Bảng tra cứu chuẩn chân bóng LED &amp; Các dòng xe tương thích phổ biến tại Việt Nam/,
  'Bảng tra cứu chuẩn chân bóng LED &amp; Nguồn tham khảo cần đối chiếu'
);

html = html.replace(
  /<th scope="col" style="width:42%;">Dòng xe tương thích phổ biến tại Việt Nam<\/th>/,
  '<th scope="col" style="width:42%;">Dòng xe tham khảo (cần đối chiếu)</th>'
);

fs.writeFileSync(file, '\ufeff' + (html.charCodeAt(0) === 0xFEFF ? html.slice(1) : html), 'utf8');
console.log('Fixed socket table text.');
