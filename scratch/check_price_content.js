const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const target1 = `Giá sản phẩm được ghi theo đúng đơn vị trên từng mã. Khi nhận báo giá, cần xác nhận số lượng bóng trong bộ/cặp, VAT, thời hạn bảo hành và tình trạng hàng. Giá sản phẩm không tự bao gồm công lắp hoặc phụ kiện nếu chưa được ghi rõ.`;
const target2 = `Công lắp và căn chỉnh phụ thuộc cấu hình đèn và tình trạng xe. Điểm tiếp nhận cần báo rõ phần việc, mức phí và phạm vi hỗ trợ trước khi thi công.`;
const target3 = `Adapter, nắp chụp, giắc hoặc giải pháp xử lý tương thích điện chỉ được đưa vào báo giá sau khi xác định nhu cầu trên xe. Không mặc định mọi xe đều cần thêm bộ giải mã hoặc điện trở.`;

if (html.includes(target1)) console.log("Target 1 found");
if (html.includes(target2)) console.log("Target 2 found");
if (html.includes(target3)) console.log("Target 3 found");
