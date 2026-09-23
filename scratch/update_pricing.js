const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const p1Regex = /<h3[^>]*>1\. Giá bóng niêm yết<\/h3>\s*<p[^>]*>.*?<\/p>/s;
const p1New = `<h3 style="font-size:14.5px; margin:0 0 8px; font-weight:500; color:#333333;">1. Giá bóng niêm yết</h3>
      <p style="font-size:13.5px; line-height:1.55; color:#475569; margin:0;">
        Giá sản phẩm được ghi theo đúng đơn vị trên từng mã. Khi nhận báo giá, cần xác nhận số lượng bóng trong bộ/cặp, VAT, thời hạn bảo hành và tình trạng hàng. Giá sản phẩm không tự bao gồm công lắp hoặc phụ kiện nếu chưa được ghi rõ.
      </p>`;
html = html.replace(p1Regex, p1New);

const p2Regex = /<h3[^>]*>2\. Công lắp &amp; Căn chỉnh<\/h3>\s*<p[^>]*>.*?<\/p>/s;
const p2New = `<h3 style="font-size:14.5px; margin:0 0 8px; font-weight:500; color:#333333;">2. Công lắp &amp; Căn chỉnh</h3>
      <p style="font-size:13.5px; line-height:1.55; color:#475569; margin:0;">
        Công lắp và căn chỉnh phụ thuộc cấu hình đèn và tình trạng xe. Điểm tiếp nhận cần báo rõ phần việc, mức phí và phạm vi hỗ trợ trước khi thi công.
      </p>`;
html = html.replace(p2Regex, p2New);

const p3Regex = /<h3[^>]*>3\. Phụ kiện &amp; Xử lý lỗi \(Nếu có\)<\/h3>\s*<p[^>]*>.*?<\/p>/s;
const p3New = `<h3 style="font-size:14.5px; margin:0 0 8px; font-weight:500; color:#333333;">3. Phụ kiện &amp; Xử lý lỗi (Nếu có)</h3>
      <p style="font-size:13.5px; line-height:1.55; color:#475569; margin:0;">
        Adapter, nắp chụp, giắc hoặc giải pháp xử lý tương thích điện chỉ được đưa vào báo giá sau khi xác định nhu cầu trên xe. Không mặc định mọi xe đều cần thêm bộ giải mã hoặc điện trở.
      </p>`;
html = html.replace(p3Regex, p3New);

fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
console.log("Updated pricing blocks.");
