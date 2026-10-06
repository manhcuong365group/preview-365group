const fs = require('fs');
const path = 'auto365/bi-gam/vinfast-vf3/index.html';
let content = fs.readFileSync(path, 'utf8');

const oldRegex = /<section data-reveal class="vf3lp-band">\s*<div class="vf3lp-in">\s*<div class="vf3lp-head">\s*<h2 class="vf3lp-h2">Tất cả bài viết về bi gầm VinFast VF3<\/h2>[\s\S]*?<\/section>/;

const newBlock = `<style>
.vf3lp-knowledge-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr)); gap: 24px; margin-top: 24px; }
.vf3lp-knowledge-card { border-top: 2px solid #dc2626; padding: 16px 0; }
.vf3lp-knowledge-card small { font-size: 11px; font-weight: 700; color: #dc2626; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 8px; }
.vf3lp-knowledge-card h3 { font-size: 1.125rem; margin: 0; color: #0f172a; font-weight: 600; line-height: 1.4; }
.vf3lp-knowledge-card p { font-size: 14px; line-height: 1.6; color: #64748b; margin-top: 8px; }
.vf3lp-knowledge-card a { display: inline-block; margin-top: 12px; font-size: 14px; font-weight: 600; color: #2563eb; text-decoration: none; }
.vf3lp-knowledge-card a:hover { text-decoration: underline; }
</style>

<section data-reveal class="vf3lp-band">
<div class="vf3lp-in">
  <div class="vf3lp-head">
    <div style="font-size: 12px; font-weight: 700; color: #dc2626; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Cẩm nang</div>
    <h2 class="vf3lp-h2" style="margin-top: 0;">Cẩm nang nâng cấp bi gầm VF3</h2>
    <p style="color: #64748b; margin-top: 8px; font-size: 1rem; max-width: 800px;">Tổng hợp kinh nghiệm, bảng giá và các lưu ý quan trọng để bạn tự tin khi quyết định nâng cấp ánh sáng cho VinFast VF3.</p>
  </div>
  <div class="vf3lp-knowledge-grid">
    <article class="vf3lp-knowledge-card">
      <small>HƯỚNG DẪN CHI TIẾT</small>
      <h3>Kinh nghiệm nâng cấp ánh sáng VinFast VF3</h3>
      <p>Tổng hợp các lưu ý quan trọng khi độ đèn cho VF3, từ việc chọn cấu hình bi gầm, bi LED, giá bán tham khảo đến các lưu ý về đăng kiểm.</p>
      <a href="https://v2.auto365.vn/tin-tuc">Đọc chi tiết →</a>
    </article>
    <article class="vf3lp-knowledge-card">
      <small>BẢNG GIÁ</small>
      <h3>Bảng giá độ đèn ô tô mới nhất tại Auto365</h3>
      <p>Tham khảo bảng giá và thông số kỹ thuật các dòng bi gầm, bi LED phổ biến trên thị trường được Auto365 phân phối chính hãng.</p>
      <a href="https://v2.auto365.vn/bang-gia-do-den-o-to">Xem bảng giá →</a>
    </article>
    <article class="vf3lp-knowledge-card">
      <small>CHUYÊN MỤC</small>
      <h3>Các bài viết về nâng cấp VinFast VF3</h3>
      <p>Khám phá bộ sưu tập tin tức, bài viết đánh giá và kinh nghiệm thực tế về nâng cấp phụ kiện cho dòng xe điện mini VinFast VF3.</p>
      <a href="https://v2.auto365.vn/tin-tuc?q=VinFast+VF3">Xem tất cả →</a>
    </article>
  </div>
</div>
</section>`;

if (content.match(oldRegex)) {
    content = content.replace(oldRegex, newBlock);
    fs.writeFileSync(path, content, 'utf8');
    console.log("Replaced knowledge block");
} else {
    console.log("Old block not found!");
}
