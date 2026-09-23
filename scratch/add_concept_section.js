const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

// 1. Remove the FAQ item I just added
const faqTarget = `
    <details class="faq-item">
      <summary><span>Bóng LED ô tô là gì? Có tốt hơn Halogen nguyên bản không?</span><svg class="icon faq-icon"><use href="#icon-chevron-down"></use></svg></summary>
      <p>Bóng LED (Light Emitting Diode) là công nghệ chiếu sáng hiện đại sử dụng chip phát quang. Khác với Halogen đốt nóng dây tóc, bóng LED mang lại hiệu suất sáng cao hơn, tiết kiệm điện, tỏa nhiệt ở chóa ít hơn và có tuổi thọ bền bỉ. Mặc dù vậy, để phát huy tối đa hiệu quả, việc độ bóng LED cần sự tương thích tuyệt đối về chuẩn chân cắm (H4, H7, 9005...), điện áp và cấu hình chóa phản xạ của xe.</p>
    </details>`;
if (html.includes(faqTarget)) {
    html = html.replace(faqTarget, '');
}

// 2. Add the concept block right before so-sanh
const conceptBlock = `
<section class="section" id="khai-niem" aria-labelledby="khai-niem-title">
  <div class="wrap">
    <div class="section-title">
      <div>
        <h2 id="khai-niem-title">Bóng LED ô tô là gì? Ưu điểm so với Halogen nguyên bản</h2>
      </div>
    </div>
    <div class="grid grid-2">
      <article class="soft-card">
        <h3 style="font-size: 16px; margin: 0 0 8px; font-weight: 600; color: #20242b;">Khái niệm cơ bản</h3>
        <p style="font-size: 14.5px; line-height: 1.6; color: #475261; margin: 0;">
          Bóng LED (Light Emitting Diode) là công nghệ chiếu sáng ô tô hiện đại sử dụng các chip phát quang nhỏ. Khác với bóng Halogen truyền thống phát sáng bằng cách đốt nóng dây tóc, bóng LED phát sáng nhờ sự chuyển dịch electron bên trong chip, cung cấp nguồn sáng cường độ cao và phản hồi ngay lập tức (không có độ trễ).
        </p>
      </article>
      <article class="soft-card">
        <h3 style="font-size: 16px; margin: 0 0 8px; font-weight: 600; color: #20242b;">Ưu điểm vượt trội</h3>
        <p style="font-size: 14.5px; line-height: 1.6; color: #475261; margin: 0;">
          Hiệu suất ánh sáng của bóng LED cao gấp 3-4 lần so với Halogen zin nhưng lại tiết kiệm điện năng hơn rất nhiều. Ánh sáng cho ra (4300K - 6000K) giúp tăng cường tầm nhìn ban đêm rõ rệt. Ngoài ra, nhiệt lượng ở mặt kính đèn rất thấp, giúp bảo vệ chóa đèn không bị rạn nứt hay ố vàng theo thời gian.
        </p>
      </article>
    </div>
  </div>
</section>
`;

const insertTarget = '<section class="section" id="so-sanh" aria-labelledby="so-sanh-title">';
if (html.includes(insertTarget)) {
    html = html.replace(insertTarget, conceptBlock + insertTarget);
    fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
    console.log("Added Concept section successfully.");
} else {
    console.log("Could not find so-sanh section.");
}
