const fs = require('fs');
const path = require('path');
const assert = require('assert');

const page = fs.readFileSync(
  path.join(__dirname, '..', 'Auto365_Den_Gam_Dang_Roi_V2.1_Authority_10-10.html'),
  'utf8'
);

assert.match(page, /--section-space:64px/, 'desktop section spacing must be compacted to 64px');
assert.match(page, /--section-space:46px/, 'mobile section spacing must be compacted to 46px');
assert.match(page, /\.h2\{max-width:800px;font-size:clamp\(28px,3\.2vw,40px\);line-height:1\.16;letter-spacing:-\.025em;font-weight:600\}/, 'section headings must use a lighter and more compact scale');
assert.match(page, /\.mobile-bar\{[^}]*min-height:54px/, 'mobile CTA bar must use a compact 54px minimum height');
assert.match(page, /<a class="btn primary" href="#quickselect">Chọn cấu hình theo xe<\/a>/, 'hero must prioritize vehicle configuration');
assert.doesNotMatch(page, /id="case-preview"/, 'case content must appear only once in the full case library');
assert.match(page, /\.shop-sidebar\{min-width:0/, 'mobile catalog sidebar must be allowed to shrink to viewport width');
assert.match(page, /\.shop-main\{min-width:0/, 'mobile catalog main area must be allowed to contain the horizontal product rail');
assert.match(page, /\.product-card\.compact \.best-for,\.product-card\.compact \.product-badges\{display:none/, 'compact product cards must hide secondary copy and badges');
assert.match(page, /\.product-card\.compact \.spec-list div:nth-child\(2\)\{display:none/, 'compact product cards must show only three core specifications');
assert.match(page, /\.product-grid\{display:grid;grid-template-columns:repeat\(2,minmax\(0,1fr\)\)/, 'mobile product cards must render in two columns');
assert.match(page, /\.product-card \.product-body h3\{font-size:14px/, 'mobile product names must use a compact type scale');
assert.match(page, /@media\(max-width:760px\)\{[\s\S]*?body\{font-size:14px/, 'mobile body copy must use a 14px base size');
assert.match(page, /\.product-card \.pbrand\{display:none/, 'product cards must hide redundant brand labels');
assert.match(page, /\.product-card\.compact \.spec-list span\{display:none/, 'compact cards must use short bullet-style specifications');
assert.match(page, /\.product-card\.compact \.product-actions \.btn\.primary\{display:none/, 'compact cards must expose one primary product action');
assert.match(page, /\.product-card\.compact \.spec-list b\{font-weight:400/, 'mobile product detail copy must use regular font weight');
assert.match(page, /\.lede\{font-size:14px;font-weight:400/, 'mobile lead copy must use the 14px regular text scale');
assert.match(page, /@media\(max-width:760px\)\{[\s\S]*?\.h2\{font-size:clamp\(26px,7\.4vw,32px\)/, 'mobile headings must use a compact reading scale');
assert.match(page, /\.answer-card h2\{font-size:20px/, 'mobile definition headings must not dominate body copy');
assert.match(page, /\.benefit-grid\{grid-template-columns:repeat\(2,minmax\(0,1fr\)\)/, 'the four benefit cards must form a balanced two-by-two grid on desktop');
assert.doesNotMatch(page, /id="compare"/, 'the product-style comparison table must not interrupt the editorial hub');
assert.doesNotMatch(page, /href="#compare"/, 'navigation must not link to the removed comparison section');
assert.doesNotMatch(page, /Thêm ảnh xe nếu thuận tiện/, 'the compact booking form must remove photo-upload fields');
assert.doesNotMatch(page, /Gửi 3 ảnh để nhận cấu hình/, 'primary CTAs must not demand three photos before consultation');
assert.match(page, /\.answer-card\{width:100%;max-width:none;/, 'the definition card must use the full content width');
assert.match(page, /Quy trình 7 bước giúp thống nhất phương án/, 'the installation process must describe the standard seven-step flow');
assert.match(page, /<div class="process">(?:<article>.*?<\/article>){7}<\/div>/, 'the process must contain seven concrete stages');
assert.match(page, /Quy trình thi công, căn chỉnh và bảo hành/, 'the process must use the standard installation wording');
assert.match(page, /\.process\{counter-reset:steps;display:grid;grid-template-columns:repeat\(7,minmax\(0,1fr\)\)/, 'desktop process must use a seven-step timeline');
assert.match(page, /\.faq-list\{display:grid;grid-template-columns:1fr;max-width:900px/, 'FAQ answers must stay in one vertical reading flow');
assert.doesNotMatch(page, /class="booking-more"/, 'the compact booking form must not include a bulky optional-information section');
assert.match(page, /class="branch-quick"/, 'the booking area must provide quick branch choices');
assert.match(page, /function initProductAutoplay\(\)/, 'desktop product rail must support autoplay');
assert.match(page, /prefers-reduced-motion: reduce/, 'product autoplay must respect reduced-motion preferences');
assert.doesNotMatch(page, /\["pointerenter","focusin","touchstart"\]/, 'autoplay must not stop merely because the pointer enters the product rail');
assert.match(page, /setTimeout\(advance,1200\)/, 'autoplay must make an early first move instead of appearing idle for several seconds');
assert.match(page, /function qsQueueRecommendation\(\)/, 'quick selector must queue automatic recommendations');
assert.match(page, /qsShowRecommendation\(false\)/, 'automatic recommendations must reveal without forcing page focus');
assert.doesNotMatch(page, /id="qsSubmit"/, 'the redundant manual recommendation button must be removed');
assert.match(page, /class="qs-contact"/, 'quick selector must retain contact CTAs after removing the manual button');
assert.match(page, /class="context-cta"/, 'editorial sections must include contextual conversion CTAs');
assert.match(page, /id="solutions"/, 'the hub must explain how standalone fog lights differ from adjacent lighting upgrades');
assert.match(page, /Đèn gầm dạng rời khác gì với các hướng nâng cấp ánh sáng khác\?/, 'the solution section must use a neutral comparison framing');
assert.match(page, /class="beam-library"/, 'Beam Lab must expose a visual evidence library');
assert.match(page, /Ảnh tham khảo từ bài case đã công bố/, 'Beam Lab must label images as reference-only');
assert.match(page, /den-tro-sang-titan-m30-ultra-v2-cho-vinfast-vf8-gia-thong-so/, 'Beam Lab must link to its published source case');

console.log('V2.1 mobile density and conversion-flow checks passed.');
