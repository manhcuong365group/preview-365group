import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const page = readFileSync(new URL('./titan-black.html', import.meta.url), 'utf8');

assert.match(page, /id="tuong-thich"/, 'requires a public compatibility section');
assert.match(page, /Lens tròn: 130 × 80 × 80 mm/, 'requires the round-lens dimensions');
assert.match(page, /Lens vuông: 130 × 80 × 65 mm/, 'requires the square-lens dimensions');
assert.match(page, /CANBUS\/decoder.*báo riêng|báo riêng.*CANBUS\/decoder/s, 'requires CANBUS pricing guidance');
assert.match(page, /hình ảnh.*minh họa|minh họa.*hiệu quả thực tế/is, 'requires a light-image disclaimer');
assert.match(page, /không cam kết kết quả đăng kiểm/i, 'requires a registration disclaimer');
assert.match(page, /article\.tb-surface > figure\.tb-media img\{width:76%!important;height:76%!important;object-fit:contain!important\}/, 'requires an inline-style override that keeps the whole H4 accessory visible');
assert.match(page, /\.tb-feature:nth-child\(1\) figure\{[^}]*background-image:url\('titan-black\/hinh\/titan-back-2\.webp'\)[^}]*\}/, 'requires the supplied two-version image for the lens block');
assert.match(page, /\.tb-feature:nth-child\(1\) figure\{[^}]*background-color:#087bd0/, 'requires a blue surround instead of black side bars');
assert.match(page, /\.tb-feature:nth-child\(1\) figure\{[^}]*background-size:100% 100%/, 'requires the supplied lens image to fill its matching frame');
assert.match(page, /\.tb-feature:nth-child\(2\) figure\{[^}]*aspect-ratio:16 \/ 9[^}]*background-size:100% 100%/, 'requires the cooling image to fill its matching frame');
assert.match(page, /<form class="tb-faq__form" id="tb-faq-form">[\s\S]*Nhận tư vấn miễn phí[\s\S]*name="year"[\s\S]*name="need"[\s\S]*Chính sách bảo mật/, 'requires the supplied consultation form in the FAQ column');
assert.match(page, /querySelectorAll\("#tb-fit-form,#tb-faq-form"\)/, 'requires the FAQ form to use the same Zalo consultation flow');
for (const redundantCopy of [
  'So sánh các thông số công bố của Titan Black 2021, 2.0 và phiên bản 2026.',
  'Auto365 chỉ xác nhận phương án sau khi kiểm tra cụm đèn và hệ điện thực tế.',
  'Quy trình 7 bước giúp thống nhất phương án, thi công và kiểm tra trước khi bàn giao.',
  'Nội dung kỹ thuật của Bi LED Titan Black 2026 được đối chiếu với tài liệu sản phẩm. Phương án lắp đặt cần được kiểm tra theo cụm đèn, không gian lắp và hệ điện của từng xe.',
  'Thông tin cần biết để chọn đúng phiên bản và xác nhận phương án theo xe thực tế.'
]) assert.doesNotMatch(page, new RegExp(redundantCopy.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), `removes redundant copy: ${redundantCopy}`);
assert.doesNotMatch(page, /content:"FIT CHECK"/, 'removes the decorative fit-check label');
assert.doesNotMatch(page, /content:"VEHICLE FIT"/, 'removes the decorative vehicle-fit label');
assert.match(page, /<div class="tb-spec-list">[\s\S]*Điện áp[\s\S]*Bảo hành[\s\S]*<\/div>\s*<div>[\s\S]*Nhiệt màu[\s\S]*Tuổi thọ công bố[\s\S]*<\/div>\s*<\/div>/, 'balances the specification list into two equal columns');
assert.match(page, /#tb-product #thong-so \.tb-spec-list\{grid-template-columns:1fr;gap:0\}/, 'stacks the balanced specifications into one readable column on mobile');
assert.match(page, /#tb-product #so-sanh \.tb-compare__media\{grid-template-columns:1fr\}/, 'stacks the comparison visual and upgrade summary on mobile');
assert.match(page, /@media \(max-width:480px\)\{#tb-product \.tb-faq__form-grid\{grid-template-columns:1fr\}\}/, 'stacks all consultation form fields on narrow phones');
assert.doesNotMatch(page, /#tb-product \.tb-light-shared\{[^}]*max-width:1120px[^}]*}/, 'keeps the shared lighting visual at its original full-width treatment');
assert.match(page, /<div class="tb-price-line">\s*<div class="tb-price">6\.500\.000đ<\/div>\s*<span class="tb-price-vat">Chưa bao gồm VAT<\/span>/, 'keeps the full VAT note compact and inline with the price');
assert.match(page, /<div class="tb-hero-commerce__main">\s*<a class="tb-btn tb-btn--dark"[\s\S]*?Nhắn Zalo tư vấn[\s\S]*?<a class="tb-btn tb-btn--primary" href="#kiem-tra-xe">Kiểm tra xe có lắp được không<\/a>/, 'places the vehicle check action beside Zalo consultation');
assert.doesNotMatch(page, /Hình ảnh dùng để minh họa cấu hình Cos\/Pha theo tư liệu sản phẩm; hiệu quả thực tế phụ thuộc cụm đèn, cách căn chỉnh, mặt đường, thời tiết và điều kiện sử dụng của từng xe\./, 'removes the lighting-image disclaimer requested by the user');
assert.doesNotMatch(page, /Công lắp và vật tư phát sinh xác nhận theo xe/, 'removes the extra installation-cost note below the hero price');
assert.match(page, /<h3 style="margin-top:8px">Nhôm \+ quạt<\/h3>[\s\S]*Quạt tản nhiệt 45 mm hỗ trợ lưu thông khí phía sau cụm đèn/, 'balances the cooling card with its 45 mm fan detail');
