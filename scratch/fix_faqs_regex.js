const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

// Triệt tiêu chói lóa
const oldTrietTieu = /<li><em>Lưu ý kỹ thuật Auto365:<\/em>\s*Khi lắp bóng 6000K trên chóa phản xạ Halogen zin, bắt buộc phải cân chỉnh góc nghiêng luồng sáng trên bảng đo chuẩn để triệt tiêu chói lóa xe ngược chiều\.<\/li>/g;
const newTrietTieu = `<li><em>Lưu ý kỹ thuật Auto365:</em> Khi lắp bóng trên chóa phản xạ Halogen, cần cân chỉnh góc chiếu trên bảng đo chuẩn để kiểm soát vùng sáng và hạn chế gây chói mắt.</li>`;
html = html.replace(oldTrietTieu, newTrietTieu);

// Zin FAQ
const oldZinFAQ = /<p>Có thể thực hiện\. Quá trình nâng cấp tại Auto365 sử dụng giắc cắm zin \(Lắp đặt cắm giắc\) và không cắt chế chóa đèn\. Nếu sau này cần bán xe hoặc về zin, kỹ thuật viên có thể dễ dàng tháo bóng LED và lắp lại Halogen nguyên bản mà không làm hỏng kết cấu\.<\/p>/g;
const newZinFAQ = `<p>Khả năng hoàn nguyên phụ thuộc phương án lắp trên từng xe. Cần đối chiếu pát/ngàm, giắc, dây và mức can thiệp thực tế của ca lắp.</p>`;
html = html.replace(oldZinFAQ, newZinFAQ);

// Power FAQ
const oldPowerFAQ = /<p>Không\. Công suất 55W-65W của bóng LED X-Light thực chất chỉ bằng hoặc thậm chí thấp hơn bóng Halogen nguyên bản \(thường là 55W\/60W\)\. Do đó, máy phát và bình ắc-quy của xe có thể tải ổn định mà không cần độ chế thêm rơ-le\.<\/p>/g;
const newPowerFAQ = `<p>Không thể đánh giá nguy cơ quá tải chỉ từ công suất danh nghĩa. Cần đối chiếu công suất thực, điện áp, hệ điều khiển đèn và phương án đấu nối trên đúng xe. Việc có cần relay hoặc phụ kiện điện hay không được xác định theo cấu hình lắp.</p>`;
html = html.replace(oldPowerFAQ, newPowerFAQ);

// Dang kiem FAQ
const oldDangKiemFAQ = /<p>Phương án thay bóng phụ thuộc cấu hình cụm đèn, chân giắc, ngàm, nắp chụp và hệ điện\. Auto365 cần kiểm tra xe trước khi xác nhận phụ kiện, mức can thiệp và chi phí lắp\.<\/p>/g;
const newDangKiemFAQ = `<p>Việc đáp ứng yêu cầu kiểm định không thể xác nhận chỉ từ loại bóng hoặc nhiệt màu. Cấu hình sau lắp cần được đối chiếu với yêu cầu kiểm định và quy chuẩn kỹ thuật hiện hành đối với hệ thống chiếu sáng. Kết quả cuối cùng thuộc quá trình kiểm tra của cơ sở kiểm định.</p>`;
html = html.replace(oldDangKiemFAQ, newDangKiemFAQ);


fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
console.log("Fixed FAQs with regex.");
