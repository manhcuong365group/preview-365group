const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

// Fix QCVN
html = html.replace('QCVN 35:2017/BGTVT', 'QCVN 35:2024/BGTVT');

// Fix FAQ about Đăng kiểm (in HTML)
const oldDangKiemHtml = `Phương án thay bóng phụ thuộc cấu hình cụm đèn, chân giắc, ngàm, nắp chụp và hệ điện. Auto365 cần kiểm tra xe trước khi xác nhận phụ kiện, mức can thiệp và chi phí lắp.`;
const newDangKiemHtml = `Việc đáp ứng yêu cầu kiểm định không thể xác nhận chỉ từ loại bóng hoặc nhiệt màu. Cấu hình sau lắp cần được đối chiếu với yêu cầu kiểm định và quy chuẩn kỹ thuật hiện hành đối với hệ thống chiếu sáng. Kết quả cuối cùng thuộc quá trình kiểm tra của cơ sở kiểm định.`;
html = html.replace(oldDangKiemHtml, newDangKiemHtml);

// Fix FAQ about 55W-65W (in HTML)
const oldPowerHtml = `Không. Công suất 55W-65W của bóng LED X-Light thực chất chỉ bằng hoặc thậm chí thấp hơn bóng Halogen nguyên bản (thường là 55W/60W). Do đó, máy phát và bình ắc-quy của xe có thể tải ổn định mà không cần độ chế thêm rơ-le.`;
const newPowerHtml = `Không thể đánh giá nguy cơ quá tải chỉ từ công suất danh nghĩa. Cần đối chiếu công suất thực, điện áp, hệ điều khiển đèn và phương án đấu nối trên đúng xe. Việc có cần relay hoặc phụ kiện điện hay không được xác định theo cấu hình lắp.`;
html = html.replace(oldPowerHtml, newPowerHtml);

// Fix FAQ about Halogen zin (in HTML)
const oldZinHtml = `Có thể thực hiện. Quá trình nâng cấp tại Auto365 sử dụng giắc cắm zin (Lắp đặt cắm giắc) và không cắt chế chóa đèn. Nếu sau này cần bán xe hoặc về zin, kỹ thuật viên có thể dễ dàng tháo bóng LED và lắp lại Halogen nguyên bản mà không làm hỏng kết cấu.`;
const newZinHtml = `Khả năng hoàn nguyên phụ thuộc phương án lắp trên từng xe. Cần đối chiếu pát/ngàm, giắc, dây và mức can thiệp thực tế của ca lắp.`;
html = html.replace(oldZinHtml, newZinHtml);

// Fix the same in JSON-LD
html = html.replace(JSON.stringify(oldDangKiemHtml), JSON.stringify(newDangKiemHtml));
html = html.replace(JSON.stringify(oldPowerHtml), JSON.stringify(newPowerHtml));
html = html.replace(JSON.stringify(oldZinHtml), JSON.stringify(newZinHtml));

fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
console.log("Fixed FAQs and QCVN.");
