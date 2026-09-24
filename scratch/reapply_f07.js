const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

// F07 part 1
html = html.replace(
    'Chỉ cần xoay 45 độ là khóa ngàm. Đạt chuẩn kháng nước IP68 an toàn cơ bản cho vị trí gầm thấp.',
    'Cần đối chiếu mã chân, ngàm, giắc và gioăng trên đúng cụm đèn. Khả năng chống bụi/nước phụ thuộc sản phẩm và trạng thái lắp hoàn thiện; không xác định cấp bảo vệ chỉ từ tên chân H11.'
);

html = html.replace(
    /<tr>\s*<td><strong>D1, D2, D3, D4<\/strong>[\s\S]*?<\/tr>/i,
    `<tr>
            <td><strong>D1, D2, D3, D4</strong><br><span class="badge dark">Xenon</span></td>
            <td>D1, D2, D3 và D4 là các nhóm chân thuộc hệ đèn xenon. Cần nhận diện đúng bóng, ballast và cụm đèn đang có trên xe trước khi xem xét phương án thay thế.</td>
            <td>
              <div class="note-desc">Không dùng bảng này để xác nhận một bóng LED có thể cắm trực tiếp vào ballast xenon. Hãy gửi mã bóng hoặc mang xe đến điểm kỹ thuật để kiểm tra cấu hình và phương án đấu nối.</div>
            </td>
          </tr>`
);

html = html.replace(
    /Khuyến nghị khoảng hở tối thiểu 2cm từ quạt tản nhiệt đến nắp chụp bụi[\s\S]*?giảm công suất để bảo vệ chip LED\./i,
    'Kiểm tra điện áp cấp, vị trí driver, hệ tản nhiệt và khả năng đóng nắp chụp. Khoảng hở cần đối chiếu hướng dẫn của đúng bóng và kết cấu cụm đèn; không áp dụng một con số chung cho mọi xe. Nếu nắp không đóng đúng hoặc quạt bị cản, cần điều chỉnh phương án lắp trước khi tiếp tục sử dụng.'
);

// R04 extra fixes
html = html.replace(
    'hiệu suất gấp 3-4 lần, tiết kiệm điện rất nhiều, và bảo vệ chóa khỏi rạn/ố vàng',
    'cải thiện hiệu suất so với nguyên bản, tối ưu điện năng tiêu thụ và giảm sinh nhiệt'
);

// F07 part 2 (Cam nang 4300K/6000K, Pricing, cbIntro, legal)
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
html = html.replace(oldCamNang, newCamNang);

html = html.replace(
    'Chỉ áp dụng với một số dòng xe đặc thù cần Adapter giữ ngàm (khoảng 50.000đ - 100.000đ/cặp) hoặc Canbus giải mã lỗi taplo. Kỹ thuật viên báo rõ trước khi thi công.',
    'Adapter, nắp chụp, giắc hoặc giải pháp xử lý tương thích điện chỉ được đưa vào báo giá sau khi xác định nhu cầu trên xe. Không mặc định mọi xe đều cần thêm bộ giải mã hoặc điện trở.'
);

const cbRegex = /(<h2 id="chan-bong-title">Tra cứu mã chân bóng đèn xe ô tô phổ biến<\/h2>\s*<\/div>\s*<\/div>\s*<p class="note" style="margin-bottom:20px;">)(.*?)(<\/p>)/;
const newCbIntro = "Tên dòng xe chưa đủ để xác nhận chân bóng. Hãy đối chiếu năm sản xuất, phiên bản, thị trường, vị trí đèn và cụm đèn thực tế. Bảng này hỗ trợ tìm thông tin; cấu hình lắp cần được kiểm tra trước khi đặt sản phẩm.";
html = html.replace(cbRegex, `$1${newCbIntro}$3`);

const targetStr = `      <li><strong>Quy chuẩn kỹ thuật quốc gia QCVN 35:2024/BGTVT</strong> về đặc tính quang học đèn chiếu sáng ô tô</li>
      <li><strong>Thông tư 08/2023/TT-BGTVT</strong> quy định về kiểm định an toàn kỹ thuật và bảo vệ môi trường</li>`;
const newText = `      <li><span style="color:#e31b2d;">Lưu ý về kiểm định:</span> Việc đáp ứng yêu cầu kiểm định không thể xác nhận chỉ từ loại bóng hoặc nhiệt màu. Cấu hình sau lắp cần được đối chiếu với yêu cầu hiện hành đối với hệ thống chiếu sáng; kết quả thuộc quá trình kiểm tra của cơ sở kiểm định.</li>`;
html = html.replace(targetStr, newText);

fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
console.log("R04/F07 content re-applied successfully.");
