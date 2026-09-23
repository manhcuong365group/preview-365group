const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

// 1. Fixing Cam nang (4300K vs 6000K)
const oldCamNang = `<div style="background:#fffbeb; border:1px solid #fef3c7; border-radius:10px; padding:16px;">
        <strong style="color:#b45309; font-size:15px; display:flex; align-items:center; gap:6px;">
          <span>🟡</span> Khi nào nên chọn 4300K (Vàng ấm)?
        </strong>
        <ul style="margin:8px 0 0; padding-left:18px; font-size:13.5px; color:#451a03; line-height:1.6;">
          <li>Xe thường xuyên di chuyển cung đường đèo núi (Tây Bắc, Tây Nguyên), vùng mưa nhiều hoặc sương mù dày.</li>
          <li>Bước sóng ánh sáng vàng ít bị khúc xạ và tán xạ ngược bởi hạt nước lơ lửng, giúp người lái không bị mỏi mắt.</li>
          <li><em>Lưu ý kỹ thuật Auto365:</em> Không chọn vì lời quảng cáo "hỗ trợ quan sát thần thánh". Độ bám đường thực tế phụ thuộc nhiều vào chất lượng chóa đèn và luồng cắt sáng cos.</li>
        </ul>
      </div>

      <div style="background:#f0f9ff; border:1px solid #e0f2fe; border-radius:10px; padding:16px;">
        <strong style="color:#0369a1; font-size:15px; display:flex; align-items:center; gap:6px;">
          <span>⚪</span> Khi nào nên chọn 6000K (Trắng sáng thời trang)?
        </strong>
        <ul style="margin:8px 0 0; padding-left:18px; font-size:13.5px; color:#0c4a6e; line-height:1.6;">
          <li>Xe chủ yếu di chuyển trong đô thị, đường quốc lộ và đường cao tốc có đèn đường hỗ trợ.</li>
          <li>Ánh sáng trắng mang lại thẩm mỹ hiện đại, phản xạ rất nhạy với biển báo giao thông và vạch kẻ đường ban đêm.</li>
          <li><em>Lưu ý kỹ thuật Auto365:</em> Khi lắp bóng trên chóa phản xạ Halogen, cần cân chỉnh góc chiếu trên bảng đo chuẩn để kiểm soát vùng sáng và hạn chế gây chói mắt.</li>
        </ul>
      </div>
    </div>
    <div style="margin-top:14px; padding-top:12px; border-top:1px solid #f1f5f9; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
      <p style="margin:0; font-size:13px; color:#64748b;">Khách hàng có thể trải nghiệm trực tiếp 2 nhiệt màu thực tế tại xưởng Auto365 trước khi quyết định thi công.</p>
      <a href="#tu-van-mien-phi" id="btn-direct-light-test" class="btn-direct-light-test" style="font-size:13px; font-weight:700; color:#e31b2d; cursor:pointer;">Đặt lịch thử ánh sáng trực tiếp →</a>
    </div>`;

const newCamNang = `<div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; padding:16px;">
        <strong style="color:#0f172a; font-size:15px; display:flex; align-items:center; gap:6px;">
          So sánh nhiệt màu 4300K và 6000K
        </strong>
        <p style="margin:8px 0 0; font-size:13.5px; color:#334155; line-height:1.6;">
          4300K có sắc ánh sáng ấm hơn 6000K. Nhiệt màu giúp mô tả màu ánh sáng, nhưng không đủ để kết luận bóng nào quan sát tốt hơn trong mưa hoặc sương mù. Khi so sánh, cần xem cùng cụm đèn, cách phân bố vùng sáng, điều kiện mặt đường và cách chụp hoặc đo. Nếu chưa có dữ liệu cùng điều kiện, Auto365 chỉ dùng nhiệt màu như một tiêu chí tham khảo khi tư vấn.
        </p>
      </div>
    </div>
    <div style="margin-top:14px; padding-top:12px; border-top:1px solid #f1f5f9; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
      <p style="margin:0; font-size:13px; color:#64748b;">Gửi thông tin xe và điều kiện thường di chuyển để được tư vấn cấu hình cần kiểm tra.</p>
      <a href="#tu-van-mien-phi" id="btn-direct-light-test" class="btn-direct-light-test" style="font-size:13px; font-weight:700; color:#e31b2d; cursor:pointer;">Đặt lịch thử ánh sáng trực tiếp →</a>
    </div>`;
if(html.includes(oldCamNang)) {
  html = html.replace(oldCamNang, newCamNang);
  console.log("Cam nang 4300K replaced.");
} else {
  console.log("oldCamNang not found!");
}

// 2. Pricing - phu kien dac thu
const oldPrice3 = 'Chỉ áp dụng với một số dòng xe đặc thù cần Adapter giữ ngàm (khoảng 50.000đ - 100.000đ/cặp) hoặc Canbus giải mã lỗi taplo. Kỹ thuật viên báo rõ trước khi thi công.';
const newPrice3 = 'Adapter, nắp chụp, giắc hoặc giải pháp xử lý tương thích điện chỉ được đưa vào báo giá sau khi xác định nhu cầu trên xe. Không mặc định mọi xe đều cần thêm bộ giải mã hoặc điện trở.';
if(html.includes(oldPrice3)) {
  html = html.replace(oldPrice3, newPrice3);
  console.log("Pricing phu kien replaced.");
}

// 3. #chan-bong intro
// Find the p tag inside #chan-bong
const cbRegex = /(<h2 id="chan-bong-title">Tra cứu mã chân bóng đèn xe ô tô phổ biến<\/h2>\s*<\/div>\s*<\/div>\s*<p class="note" style="margin-bottom:20px;">)(.*?)(<\/p>)/;
const newCbIntro = "Tên dòng xe chưa đủ để xác nhận chân bóng. Hãy đối chiếu năm sản xuất, phiên bản, thị trường, vị trí đèn và cụm đèn thực tế. Bảng này hỗ trợ tìm thông tin; cấu hình lắp cần được kiểm tra trước khi đặt sản phẩm.";
html = html.replace(cbRegex, `$1${newCbIntro}$3`);
console.log("chan-bong intro replaced.");

// 4. #co-so legal
const oldLegal = 'Việc lắp bóng LED cần đảm bảo không thay đổi kết cấu chóa, không thay thế toàn bộ cụm đèn chiếu sáng phía trước và ánh sáng có đường cắt rõ ràng, gom tụ tốt, không gây chói mắt người đối diện (Theo quy định tại Thông tư 43/2023/TT-BGTVT và TCVN 6978:2001). Auto365 cam kết cân chỉnh góc chiếu trên mặt phẳng đo tiêu chuẩn, hỗ trợ xe đạt chuẩn đăng kiểm theo quy định hiện hành.';
const newLegal = 'Việc đáp ứng yêu cầu kiểm định không thể xác nhận chỉ từ loại bóng hoặc nhiệt màu. Cấu hình sau lắp cần được đối chiếu với yêu cầu hiện hành đối với hệ thống chiếu sáng; kết quả thuộc quá trình kiểm tra của cơ sở kiểm định.';
if (html.includes(oldLegal)) {
  html = html.replace(oldLegal, newLegal);
  console.log("co-so legal replaced.");
}

fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
