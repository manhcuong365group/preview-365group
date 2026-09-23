const fs = require('fs');
const file = 'auto365/bong-led/index.html';
let html = fs.readFileSync(file, 'utf8');

const oldSapoRegex = /<p class="hero-lead">[\s\S]*?<\/p>/;
const newSapo = '<p class="hero-lead">Bóng LED ô tô có nhi?u c?u hình khác nhau v? chân c?m (H1, H4, H7, H11, 9005...), công su?t, nhi?t màu và di?n áp. Thay vì ch?n ch? theo công su?t, c?n d?i chi?u c?u hình xe, c?u t?o chóa dèn nguyên b?n và kho?ng h? n?p ch?p t?n nhi?t d? xác d?nh dòng bóng phù h?p, h? tr? gom sáng chu?n và h?n ch? chói m?t.</p>';
html = html.replace(oldSapoRegex, newSapo);

const aeoBox = '<section class="section compact" id="thong-tin-nhanh" aria-labelledby="thong-tin-nhanh-title">\n' +
'  <div class="wrap">\n' +
'    <div class="aeo-box" style="background: #f8f9fa; border-left: 4px solid #ef2326; padding: 20px; border-radius: 8px; margin-bottom: 12px; margin-top: 12px;">\n' +
'      <h2 id="thong-tin-nhanh-title" style="font-size: 18px; margin-top: 0; margin-bottom: 12px;">Thông tin nhanh:</h2>\n' +
'      <p style="margin-bottom: 12px;"><strong>Bóng LED ô tô</strong> (Light Emitting Diode) là gi?i pháp nâng c?p ánh sáng ?ng d?ng công ngh? diode phát quang. Vi?c thay th? bóng Halogen nguyên b?n b?ng bóng LED giúp h? tr? c?i thi?n t?m nhìn, ti?t ki?m di?n nang và mang l?i di?n m?o hi?n d?i hon cho xe.</p>\n' +
'      \n' +
'      <h3 style="font-size: 16px; margin-bottom: 8px;">Uu di?m k? thu?t khi nâng c?p bóng LED:</h3>\n' +
'      <ul style="margin-bottom: 16px; padding-left: 20px; line-height: 1.5;">\n' +
'        <li style="margin-bottom: 6px;"><strong>Hi?u su?t phát sáng:</strong> Cu?ng d? sáng cao hon so v?i Halogen truy?n th?ng, h? tr? chi?u sáng rõ nét khu v?c phía tru?c và các chu?ng ng?i v?t.</li>\n' +
'        <li style="margin-bottom: 6px;"><strong>Ti?t ki?m di?n nang:</strong> M?c tiêu th? di?n th?p, giúp gi?m t?i cho h? th?ng di?n c?a xe.</li>\n' +
'        <li><strong>Ð? b?n ?n d?nh:</strong> Kh? nang v?n hành b?n b? nh? h? th?ng t?n nhi?t (qu?t ho?c lu?i t?n nhi?t) du?c tích h?p tr?c ti?p trên thân bóng.</li>\n' +
'      </ul>\n' +
'      \n' +
'      <h3 style="font-size: 16px; margin-bottom: 8px;">Luu ý quan tr?ng khi ch?n thay bóng LED (C?m Jack Zin):</h3>\n' +
'      <ul style="margin-bottom: 0; padding-left: 20px; line-height: 1.5;">\n' +
'        <li style="margin-bottom: 6px;"><strong>Ðúng chân c?m (Socket):</strong> C?n xác d?nh chính xác lo?i chân c?m c?a xe (H1, H4, H7, H11, 9005, 9006...) d? l?p d?t v?a v?n theo chu?n c?m và ch?y (Plug & Play) mà không c?n d? ch?.</li>\n' +
'        <li style="margin-bottom: 6px;"><strong>C?u t?o chóa dèn:</strong> Ð?i chi?u k? chóa ph?n x? ho?c th?u kính nguyên b?n d? ch?n lo?i bóng LED có thi?t k? chip LED phù h?p, d?m b?o lu?ng sáng h?i t?, không gây chói cho xe ngu?c chi?u.</li>\n' +
'        <li><strong>H? di?n (12V/24V):</strong> Uu tiên ch?n các m?u bóng h? tr? dúng d?i di?n áp c?a xe (12V cho xe du l?ch, 24V cho xe thuong m?i) d? d?m b?o tu?i th? thi?t b?.</li>\n' +
'      </ul>\n' +
'    </div>\n' +
'  </div>\n' +
'</section>\n';

const splitRegex = /<\/section>\s*<div class="wrap quick-tabs">/;
if(splitRegex.test(html)) {
    html = html.replace(splitRegex, '</section>\n' + aeoBox + '<div class="wrap quick-tabs">');
} else {
    console.log("Could not find insertion point!");
}

fs.writeFileSync(file, html);
console.log('AEO Box added successfully.');
