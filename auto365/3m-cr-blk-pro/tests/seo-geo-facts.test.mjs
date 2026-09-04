import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');

test('states the CR BLK Pro ontology and search-intent heading accurately', () => {
  assert.match(html, /<h1>Phim cách nhiệt 3M CR BLK Pro: cấu hình, giá và cách chọn<\/h1>/);
  assert.match(html, /CR BLK Pro là gói phối mã do Auto365 xây dựng từ phim 3M Crystalline CR BLK, không phải mã riêng của 3M\./);
  assert.match(html, /không phải một mã phim, model, SKU hoặc dòng sản phẩm riêng do 3M công bố/);
});

test('shows the verified configuration for each published case', () => {
  for (const [model, config] of [
    ['VinFast VF 7', 'CR BLK 40 / 15 / 15'],
    ['Peugeot 408', 'CR BLK 40 / 35 / 15'],
    ['Volvo XC90', 'CR BLK 40 / 15 / 15 · Panorama: CR BLK 15'],
    ['Toyota Fortuner', 'CR BLK 40 / 15 / 15'],
    ['Honda CR-V', 'CR BLK 40 / 15 / 15'],
    ['Honda HR-V', 'CR BLK 40 / 15 / 15'],
  ]) {
    assert.match(html, new RegExp(`<h3>${model}<\\/h3><p>Cấu hình đã dán: ${config.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}<\\/p>`));
  }
});

test('keeps technical copy attributed to the applicable 3M TDS conditions', () => {
  assert.match(html, /<h2>Thông số dùng để lựa chọn<\/h2>/);
  assert.match(html, /Technical Data Sheet, Revision E, May 2024, Table B/);
  assert.match(html, /IRER được xác định trong dải 780–2\.500 nm/);
  assert.doesNotMatch(html, /Auto365 đo/);
});

test('uses Service schema without a price claim or a LocalBusiness entity on the money page', () => {
  assert.match(html, /"@type": "Service"/);
  assert.doesNotMatch(html, /"@type": "Product"/);
  assert.doesNotMatch(html, /"@type": "LocalBusiness"/);
  assert.doesNotMatch(html, /"@type": "Offer"/);
});

test('links the warranty statement to the official 3M Vietnam policy page', () => {
  assert.match(html, /https:\/\/www\.3m\.com\.vn\/3M\/vi_VN\/car-personalization-vn\/products\/automotive-window-tint\//);
  assert.match(html, /phim cách nhiệt ô tô 3M được hỗ trợ bảo hành lên tới 10 năm/);
});

test('keeps case configuration visible and modal controls accessible', () => {
  assert.match(html, /\.case-content p\{display:block/);
  assert.match(html, /\.form-modal-close\{display:none/);
  assert.match(html, /\.form-modal-open \.form-modal-close\{display:grid/);
  assert.match(html, /data-brand="all" aria-pressed="true"/);
  assert.match(html, /setAttribute\('aria-pressed',String\(item===filter\)\)/);
});

test('keeps JSON-LD and the inline interaction script syntactically valid', () => {
  const jsonLd = html.match(/<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/)?.[1];
  assert.ok(jsonLd, 'JSON-LD block exists');
  assert.doesNotThrow(() => JSON.parse(jsonLd));

  const inlineScripts = [...html.matchAll(/<script(?:[^>]*)>([\s\S]*?)<\/script>/g)]
    .map((match) => match[1])
    .filter((script) => script.trim() && !script.includes('"@context"'));
  assert.ok(inlineScripts.length > 0);
  inlineScripts.forEach((script) => assert.doesNotThrow(() => new Function(script)));
});

test('uses real price buttons and a keyboard-safe consultation modal', () => {
  assert.match(html, /<button type="button" class="price-card" id="price-minicar"/);
  assert.match(html, /<button type="button" class="price-card active" id="price-sedan"/);
  assert.match(html, /lastModalTrigger/);
  assert.match(html, /event\.key==='Tab'/);
  assert.match(html, /consultForm\.contains\(event\.target\)/);
});

test('keeps stylesheet tags balanced so browser CSS parsing is deterministic', () => {
  const openingTags = (html.match(/<style(?:\s[^>]*)?>/g) || []).length;
  const closingTags = (html.match(/<\/style>/g) || []).length;
  assert.equal(openingTags, closingTags);
});

test('does not claim an unverified price confirmation and preserves certificate images', () => {
  assert.doesNotMatch(html, /được xác nhận ngày 27\/08\/2026/);
  assert.match(html, /\.pro-shop-gallery img\{height:150px;object-fit:contain\}/);
  assert.doesNotMatch(html, /\.pro-shop-gallery img\{height:150px;object-fit:cover\}/);
});

test('does not reserve mobile space for a sticky CTA that is absent from the markup', () => {
  assert.doesNotMatch(html, /id="contactSticky"/);
  assert.doesNotMatch(html, /padding-bottom:calc\(68px \+ env\(safe-area-inset-bottom\)\)/);
  assert.doesNotMatch(html, /\.contact-sticky\{display:none!important\}/);
});

test('routes each location card to its detail page, map, or system hotline', () => {
  assert.match(html, /href="https:\/\/auto365\.vn\/thu-duc"[^>]*>Xem chi tiết →<\/a>/);
  assert.match(html, /href="https:\/\/www\.google\.com\/maps\?cid=9988450659874114499&amp;g_mp=/);
  assert.match(html, /href="https:\/\/auto365\.vn\/3m-pro-shop-tru-so-chinh"[^>]*>Xem chi tiết →<\/a>/);
  assert.match(html, /href="https:\/\/maps\.app\.goo\.gl\/fZ38C2BhKZVyqLBv6"/);
  assert.match(html, /href="tel:19009365">Hotline 1900 9365<\/a>/);
});

test('uses the street address as the Google Maps link without service-hours copy', () => {
  assert.doesNotMatch(html, /Giờ phục vụ:/);
  assert.match(html, /class="location-address" href="https:\/\/www\.google\.com\/maps\?cid=9988450659874114499&amp;g_mp=[^"]+"[^>]*>4\/4\/1\/7 Đường số 3, Phường Hiệp Bình, TP\. Hồ Chí Minh<\/a>/);
  assert.match(html, /class="location-address" href="https:\/\/maps\.app\.goo\.gl\/fZ38C2BhKZVyqLBv6"[^>]*>4\/4\/3\/3 Đường số 3, Phường Hiệp Bình, TP\. Hồ Chí Minh<\/a>/);
  assert.match(html, /class="location-detail" href="https:\/\/auto365\.vn\/thu-duc"/);
  assert.match(html, /class="location-detail" href="https:\/\/auto365\.vn\/3m-pro-shop-tru-so-chinh"/);
});

test('uses compact location action chips and omits the district label', () => {
  assert.doesNotMatch(html, /Khu phố 31/);
  assert.match(html, /<div class="location-actions"><a class="location-phone" href="tel:\+84365365911">Gọi 0365 365 911<\/a><a class="location-detail"/);
  assert.match(html, /<div class="location-actions"><a class="location-phone" href="tel:\+84365365365">Gọi 0365 365 365<\/a><a class="location-detail"/);
  assert.match(html, /\.location-actions\{display:flex;flex-wrap:wrap/);
  assert.match(html, /\.location-actions a\{display:inline-flex/);
});

test('limits case and price copy to evidence published on this preview', () => {
  assert.match(html, /Mỗi case hiển thị ảnh thi công và cấu hình đã dán của xe\./);
  assert.match(html, /Xe thật • Cấu hình đã dán/);
  assert.doesNotMatch(html, /Case có ảnh, mã phim và ngày thi công/);
  assert.match(html, /Giá tham khảo trọn xe theo nhóm xe;/);
});

test('uses only the stated Auto 75 condition for the published TDS table', () => {
  assert.match(html, /Dữ liệu áp dụng cho tổ hợp phim \+ kính Auto 75 theo Table B \(kính ô tô xanh dày 6 mm, VLT nền 73%\)/);
});

test('does not initialize a sticky contact component that is absent from the markup', () => {
  assert.doesNotMatch(html, /document\.getElementById\('contactSticky'\)/);
  assert.doesNotMatch(html, /IntersectionObserver\(function\(entries\)\{sticky/);
});

test('keeps location cards compact without redundant tags or address underlines', () => {
  assert.doesNotMatch(html, /class="location-tag"/);
  assert.match(html, /\.location-card\{min-height:0\}/);
  assert.match(html, /\.location-card \.location-address\{color:var\(--accent\);font-size:11px;font-weight:750;text-decoration:none\}/);
  assert.match(html, /\.location-actions\{display:flex;flex-wrap:wrap;gap:7px;margin-top:12px;padding-top:0\}/);
  assert.match(html, /<span class="location-address location-availability">Hỗ trợ tư vấn toàn quốc<\/span>/);
});

test('presents Auto365 reasons as four linked proof points rather than a generic checklist', () => {
  assert.match(html, /<h3 id="why-auto365-title">Tại sao chọn Auto365\?<\/h3>/);
  assert.equal((html.match(/class="proof-card(?: |")/g) || []).length, 4);
  assert.match(html, /class="proof-card" href="#pro-shop-certificates"/);
  assert.match(html, /class="proof-card" href="#specs"/);
  assert.match(html, /class="proof-card" href="#cases"/);
  assert.match(html, /class="proof-card proof-card-accent" href="#warranty"/);
  assert.doesNotMatch(html, /Báo giá theo nhóm xe<\/strong> — phạm vi hạng mục/);
});

test('uses a compact end-user heading rhythm without leftover eyebrow labels', () => {
  assert.doesNotMatch(html, /class="eyebrow/);
  assert.doesNotMatch(html, /\.eyebrow\{display:none\}/);
  assert.match(html, /\.section\{padding:20px 0\}/);
  assert.match(html, /\.pro-shop-section\{padding:20px 0 36px\}/);
  assert.match(html, /@media\(max-width:680px\)\{\.section\{padding:18px 0\}/);
});

test('names the case gallery as real CR BLK Pro installations', () => {
  assert.match(html, /<h2>Xe thực tế thi công dán phim cách nhiệt CR BLK Pro tại Auto365<\/h2>/);
  assert.doesNotMatch(html, /<h2>Case CR BLK Pro tại Auto365<\/h2>/);
});
