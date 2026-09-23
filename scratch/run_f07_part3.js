const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const targetStr = `      <li><strong>Quy chuẩn kỹ thuật quốc gia QCVN 35:2024/BGTVT</strong> về đặc tính quang học đèn chiếu sáng ô tô</li>
      <li><strong>Thông tư 08/2023/TT-BGTVT</strong> quy định về kiểm định an toàn kỹ thuật và bảo vệ môi trường</li>`;

const newText = `      <li><span style="color:#e31b2d;">Lưu ý về kiểm định:</span> Việc đáp ứng yêu cầu kiểm định không thể xác nhận chỉ từ loại bóng hoặc nhiệt màu. Cấu hình sau lắp cần được đối chiếu với yêu cầu hiện hành đối với hệ thống chiếu sáng; kết quả thuộc quá trình kiểm tra của cơ sở kiểm định.</li>`;

if (html.includes(targetStr)) {
  html = html.replace(targetStr, newText);
  fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
  console.log("co-so replaced");
} else {
  console.log("not found co-so");
}
