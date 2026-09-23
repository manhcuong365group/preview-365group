const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const targetHtml = `<!-- Top 4 Brand Partners -->
  <div class="grid grid-4" style="margin-bottom: 16px;">
    <article class="soft-card" style="padding:16px 18px; border-radius:12px; background:#fff; border:1px solid #e2e8f0; box-shadow:0 2px 8px rgba(15,23,42,0.02);">
      <h3 style="font-size:15px; margin:0 0 6px; font-weight:600; color: #333333;">X-Light</h3>
      <p style="font-size:12.5px; line-height:1.55; color:#64748b; margin:0;">
        Dòng phổ thông &amp; cao cấp, có nhiều mẫu nhất trong danh mục Auto365, gồm cả bóng LED và Bi LED.
      </p>
    </article>
    <article class="soft-card" style="padding:16px 18px; border-radius:12px; background:#fff; border:1px solid #e2e8f0; box-shadow:0 2px 8px rgba(15,23,42,0.02);">
      <h3 style="font-size:15px; margin:0 0 6px; font-weight:600; color: #333333;">NaoEvo</h3>
      <p style="font-size:12.5px; line-height:1.55; color:#64748b; margin:0;">
        Đa dạng cấu hình chân cắm, thiết kế hướng tới lắp đặt thuận tiện, hỗ trợ đi mưa và sương mù.
      </p>
    </article>
    <article class="soft-card" style="padding:16px 18px; border-radius:12px; background:#fff; border:1px solid #e2e8f0; box-shadow:0 2px 8px rgba(15,23,42,0.02);">
      <h3 style="font-size:15px; margin:0 0 6px; font-weight:600; color: #333333;">Titan</h3>
      <p style="font-size:12.5px; line-height:1.55; color:#64748b; margin:0;">
        Thương hiệu tăng sáng quốc dân; tối ưu công suất, độ bền bỉ cao và kiểm soát nhiệt tối ưu.
      </p>
    </article>
    <article class="soft-card" style="padding:16px 18px; border-radius:12px; background:#fff; border:1px solid #e2e8f0; box-shadow:0 2px 8px rgba(15,23,42,0.02);">
      <h3 style="font-size:15px; margin:0 0 6px; font-weight:600; color: #333333;">GTR</h3>
      <p style="font-size:12.5px; line-height:1.55; color:#64748b; margin:0;">
        Một trong những thương hiệu tăng sáng có mặt sớm nhất tại thị trường Việt Nam với chất lượng quang học chuẩn mực.
      </p>
    </article>
  </div>`;

const newHtml = `<!-- Top Brand Partners -->
  <div class="grid grid-2" style="margin-bottom: 16px;">
    <article class="soft-card" style="padding:16px 18px; border-radius:12px; background:#fff; border:1px solid #e2e8f0; box-shadow:0 2px 8px rgba(15,23,42,0.02);">
      <h3 style="font-size:15px; margin:0 0 6px; font-weight:600; color: #333333;">X-Light</h3>
      <p style="font-size:12.5px; line-height:1.55; color:#64748b; margin:0;">
        Dòng phổ thông &amp; cao cấp, có nhiều mẫu nhất trong danh mục Auto365, gồm cả bóng LED và Bi LED.
      </p>
    </article>
    <article class="soft-card" style="padding:16px 18px; border-radius:12px; background:#fff; border:1px solid #e2e8f0; box-shadow:0 2px 8px rgba(15,23,42,0.02);">
      <h3 style="font-size:15px; margin:0 0 6px; font-weight:600; color: #333333;">NaoEvo</h3>
      <p style="font-size:12.5px; line-height:1.55; color:#64748b; margin:0;">
        Đa dạng cấu hình chân cắm, thiết kế hướng tới lắp đặt thuận tiện, hỗ trợ đi mưa và sương mù.
      </p>
    </article>
  </div>`;

if (html.includes(targetHtml)) {
    html = html.replace(targetHtml, newHtml);
    fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
    console.log("Replaced grid successfully.");
} else {
    console.log("Did not find exact HTML string.");
}
