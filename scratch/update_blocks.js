const fs = require('fs');
const path = 'auto365/bi-gam/vinfast-vf3/index.html';

let content = fs.readFileSync(path, 'utf8');

const faqRegex = /<section data-reveal class="vf3lp-band vf3lp-band--soft">\s*<div class="vf3lp-in">\s*<div class="vf3lp-head">\s*<h2 id="vf3lp-faq"[\s\S]*?<\/section>/;
const faqMatch = content.match(faqRegex);
if (!faqMatch) {
    console.error("FAQ block not found!");
    process.exit(1);
}
const faqBlock = faqMatch[0];

// Remove FAQ
content = content.replace(faqRegex, "");

const advBlock = `<section data-reveal class="vf3lp-band vf3lp-band--soft">
  <div class="vf3lp-in">
    <div class="vf3lp-head">
      <h2 class="vf3lp-h2">Vì sao nên độ bi gầm tại Auto365?</h2>
    </div>
    <div class="vf3lp-grid">
      <article class="vf3lp-card">
        <div class="vf3lp-body">
          <h3>100+ Chi nhánh toàn quốc</h3>
          <p>Hệ thống Auto365 phủ sóng khắp 3 miền, dễ dàng hỗ trợ lắp ráp, bảo hành nhanh chóng ở bất kỳ đâu trên toàn quốc.</p>
        </div>
      </article>
      <article class="vf3lp-card">
        <div class="vf3lp-body">
          <h3>Sản phẩm chính hãng</h3>
          <p>Cam kết 100% các dòng bi gầm X-Light, GTR... chính hãng, đầy đủ tem mác, mã QR, được kích hoạt bảo hành điện tử chính hãng.</p>
        </div>
      </article>
      <article class="vf3lp-card">
        <div class="vf3lp-body">
          <h3>Kỹ thuật chuẩn chỉ</h3>
          <p>Lắp đặt qua pát chuyên dụng. Căn chỉnh đèn bằng máy laser chuẩn tâm, ánh sáng gom cắt đẹp, không gây chói mắt người đối diện.</p>
        </div>
      </article>
    </div>
  </div>
</section>`;

const warrantyRegex = /<section data-reveal class="vf3lp-band vf3lp-band--soft">\s*<div class="vf3lp-in">\s*<div class="vf3lp-head">\s*<h2 id="vf3lp-bh" class="vf3lp-h2">Bảo hành thiết bị và thi công[\s\S]*?<\/section>/;
if (!content.match(warrantyRegex)) {
    console.error("Warranty block not found!");
} else {
    content = content.replace(warrantyRegex, advBlock);
}

const footerNoteStart = '<section data-reveal class="vf3lp-band vf3lp-band--soft"><div class="vf3lp-in"><p class="vf3lp-note">Rà soát kỹ thuật:';
content = content.replace(footerNoteStart, faqBlock + "\n" + footerNoteStart);

fs.writeFileSync(path, content, 'utf8');
console.log("Done");
