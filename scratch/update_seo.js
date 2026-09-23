const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

// Title
const oldTitle = /<title>.*?<\/title>/;
const newTitle = `<title>Bóng LED ô tô X-Light: giá, chân H4 H7 H11 | Auto365</title>`;
html = html.replace(oldTitle, newTitle);

// Meta description
const oldDesc = /<meta name="description" content="[^"]+">/;
const newDesc = `<meta name="description" content="Xem bóng LED ô tô X-Light và NaoEvo, so sánh giá, chân bóng và bảo hành. Đối chiếu cấu hình đèn, điện áp và thông tin lắp đặt trước khi chọn mua tại Auto365.">`;
html = html.replace(oldDesc, newDesc);

// H1
const oldH1 = /<h1>.*?<\/h1>/;
const newH1 = `<h1>Bóng LED ô tô: chọn đúng chân, đúng cấu hình xe</h1>`;
html = html.replace(oldH1, newH1);

// Hero lead
const oldHeroLeadRegex = /<p class="hero-lead">.*?<\/p>/s;
const newHeroLead = `<p class="hero-lead">
        Bóng LED ô tô cần được chọn theo chân bóng, điện áp và cấu hình cụm đèn. Danh mục dưới đây giúp bạn đối chiếu các dòng sản phẩm, giá và bảo hành; trước khi đặt, cần xác nhận vị trí Cos/Pha hoặc đèn phụ, khoảng hở và phương án lắp trên xe. Nếu chưa biết chân bóng, hãy gửi thông tin xe để Auto365 hỗ trợ kiểm tra.
      </p>`;
html = html.replace(oldHeroLeadRegex, newHeroLead);

fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
console.log("Updated SEO metadata and hero lead.");
