const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const start = html.indexOf('<section class="section" id="so-sanh" aria-labelledby="so-sanh-title">');
const end = html.indexOf('</section>', start) + 10;

const newSection = `<section class="section" id="so-sanh" aria-labelledby="so-sanh-title">
<div class="wrap">
  <div class="section-title">
    <div>
      <h2 id="so-sanh-title">Khi nào thay bóng LED là giải pháp phù hợp?</h2>
    </div>
  </div>
  <div class="grid grid-3">
    <article class="soft-card" style="padding: 24px; border-radius: 12px; background: #fff; border: 1px solid #e2e8f0;">
      <h3 style="font-size: 15px; margin: 0 0 8px; font-weight: 600; color: #333333;">1. Nguồn sáng yếu nhưng cụm đèn còn tốt</h3>
      <p style="font-size: 13.5px; line-height: 1.6; color: #475569; margin: 0;">Nếu cụm đèn tương thích và vấn đề chỉ nằm ở bóng cũ yếu/cháy: có thể cân nhắc thay bóng LED đúng chân cắm.</p>
    </article>
    <article class="soft-card" style="padding: 24px; border-radius: 12px; background: #fff; border: 1px solid #e2e8f0;">
      <h3 style="font-size: 15px; margin: 0 0 8px; font-weight: 600; color: #333333;">2. Cụm đèn/chóa bị lỗi hoặc xuống cấp</h3>
      <p style="font-size: 13.5px; line-height: 1.6; color: #475569; margin: 0;">Nếu mặt kính mờ ố, chóa phản xạ bong tróc hoặc cụm đèn nứt vỡ: cần kiểm tra và xử lý nguyên nhân trước khi thay bóng.</p>
    </article>
    <article class="soft-card" style="padding: 24px; border-radius: 12px; background: #fff; border: 1px solid #e2e8f0;">
      <h3 style="font-size: 15px; margin: 0 0 8px; font-weight: 600; color: #333333;">3. Nhu cầu thay đổi cả hệ quang học</h3>
      <p style="font-size: 13.5px; line-height: 1.6; color: #475569; margin: 0;">Nếu nhu cầu là thiết lập lại luồng sáng với đường cắt sắc nét bằng thấu kính (Projector), cần xem xét các giải pháp nâng cấp ánh sáng khác (như Bi LED/Bi Laser).</p>
    </article>
  </div>
</div>
</section>`;

html = html.substring(0, start) + newSection + html.substring(end);
fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
console.log("Rewrote Bi-LED vs LED block.");
