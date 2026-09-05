import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import { test } from 'node:test';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');

test('states the CR BLK Pro ontology and search-intent heading accurately', () => {
  assert.match(html, /<h1>Phim cách nhiệt 3M CR BLK Pro: cấu hình, giá và cách chọn<\/h1>/);
  assert.match(html, /CR BLK Pro là gói phối mã do Auto365 xây dựng từ phim 3M Crystalline CR BLK, không phải mã riêng của 3M\./);
  assert.match(html, /không phải một mã phim, model, SKU hoặc dòng sản phẩm riêng do 3M công bố/);
});

test('keeps the quick-answer heading compact beside its supporting copy', () => {
  assert.match(html, /\.answer-card h2\{font-size:clamp\(23px,2vw,27px\)!important;line-height:1\.14\}/);
  assert.match(html, /\.trust-copy h2\{font-size:clamp\(24px,2\.1vw,29px\)!important;line-height:1\.14\}/);
  assert.match(html, /\.consult-section \.section-heading h2\{font-size:clamp\(24px,2\.1vw,29px\)!important;line-height:1\.14\}/);
  assert.match(html, /\.trust-copy\{padding:26px;border:1px solid #dfe4eb;border-radius:18px;background:#fff\}/);
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

test('connects the Service to the named installation location without a product or price schema claim', () => {
  assert.match(html, /"@type": "Service"/);
  assert.doesNotMatch(html, /"@type": "Product"/);
  assert.match(html, /"@type": \["LocalBusiness", "AutomotiveBusiness"\]/);
  assert.match(html, /"@id": "https:\/\/auto365\.vn\/thu-duc#automotive-business"/);
  assert.match(html, /"hasMap": "https:\/\/www\.google\.com\/maps\?cid=9988450659874114499"/);
  assert.match(html, /"parentOrganization": \{"@id": "https:\/\/auto365\.vn\/#organization"/);
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

test('ships every preview-local image and the social image with this page', async () => {
  const localSources = [...html.matchAll(/(?:src|href)="(\/3m-cr-blk-pro\/hinh\/[^"]+)"/g)]
    .map((match) => match[1]);
  assert.ok(localSources.length > 0, 'preview-local image sources exist');
  await Promise.all(localSources.map((source) => access(new URL(`../hinh/${source.split('/').pop()}`, import.meta.url))));
  await access(new URL('../hinh/og-cr-blk-pro-1200x630.png', import.meta.url));
});

test('uses real price buttons and a keyboard-safe consultation modal', () => {
  assert.match(html, /<button type="button" class="price-card" id="price-minicar"/);
  assert.match(html, /<button type="button" class="price-card active" id="price-sedan"/);
  assert.match(html, /lastModalTrigger/);
  assert.match(html, /event\.key==='Tab'/);
  assert.match(html, /consultForm\.contains\(event\.target\)/);
});

test('keeps pricing cards compact while preserving readable prices', () => {
  assert.match(html, /\.price-cards\{gap:12px\}/);
  assert.match(html, /\.price-card\{min-height:0;padding:18px 20px;border-width:1px;border-radius:16px\}/);
  assert.match(html, /\.price-card>strong\{margin:8px 0 0;font-size:24px\}/);
});

test('keeps package names and live starting prices aligned in distinct comparison cards', () => {
  assert.match(html, /class="package-title-row"><h3>CR BLK tiêu chuẩn<\/h3><div class="package-price"><span>Giá gói từ <strong data-bind="standard-compact">14,8 triệu<\/strong>/);
  assert.match(html, /data-bind="pro-compact">15,5 triệu/);
  assert.match(html, /\.package-card\{border:1px solid #1b5eaa;box-shadow:none\}/);
  assert.match(html, /\.package-card\.pro-card,\.package-card\.pro-card\.selected\{border-color:#d8aa4d/);
  assert.match(html, /\.package-title-row\{display:flex;align-items:baseline;justify-content:space-between/);
  assert.doesNotMatch(html, /Pro chênh 700\.000đ ở cả ba nhóm xe/);
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
  assert.match(html, /\.why-certificate-card img\{object-fit:contain;background:#fff\}/);
});

test('keeps text readable on light case panels and publishes the current schema date', () => {
  assert.match(html, /\.cases-section \.split-heading>p\{color:var\(--muted\)\}/);
  assert.match(html, /"dateModified": "2026-09-05"/);
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

test('uses the requested three contact actions in the branch finder', () => {
  assert.match(html, /class="a365-contact-actions" aria-label="Liên hệ Auto365"/);
  assert.match(html, /href="https:\/\/zalo\.me\/3622666363345050913"[^>]*>Nhắn Zalo<\/a>/);
  assert.match(html, /href="tel:0365365365"[^>]*>Gọi 0365 365 365<\/a>/);
  assert.match(html, /class="a365-btn a365-btn-outline js-open-consult" type="button">Gửi thông tin tư vấn<\/button>/);
  assert.match(html, /\.a365-contact-actions \.a365-btn\{display:flex;width:100%;min-height:38px;align-items:center;justify-content:center;padding:0 8px;[^}]*white-space:nowrap\}/);
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
  assert.doesNotMatch(html, /Case có ảnh, mã phim và ngày thi công/);
  assert.match(html, /Giá tham khảo trọn xe theo nhóm xe;/);
});

test('uses only the stated Auto 75 condition for the published TDS table', () => {
  assert.match(html, /Dữ liệu áp dụng cho tổ hợp phim \+ kính Auto 75 theo Table B \(kính ô tô xanh dày 6 mm, VLT nền 73%\)/);
});

test('keeps the technical-specification heading on one line on larger screens', () => {
  assert.match(html, /\.evidence-data h2\{[^}]*font-size:clamp\(20px,2vw,28px\);white-space:nowrap\}/);
  assert.match(html, /@media\(max-width:680px\)\{[^}]*\.evidence-data h2\{white-space:normal\}/);
});

test('places the real-installation image beside the technical table without redundant source panels', () => {
  assert.match(html, /<div class="container evidence-grid">\s*<figure class="evidence-visual">[\s\S]*?<div class="evidence-data"><h2>Thông số dùng để lựa chọn<\/h2>/);
  assert.match(html, /<p class="spec-source">Nguồn: 3M™ Automotive Window Film Crystalline™ Series, Technical Data Sheet, Revision E, May 2024, Table B/);
  assert.doesNotMatch(html, /<div class="source-card">/);
  assert.doesNotMatch(html, /Trang sản phẩm 3M Việt Nam →/);
  assert.match(html, /\.evidence-grid\{display:grid;grid-template-columns:460px minmax\(0,1fr\);align-items:start;gap:32px\}/);
  assert.match(html, /\.evidence-data\{max-width:460px;justify-self:start;width:100%\}/);
});

test('uses a compact transposed specification table for the three CR BLK codes', () => {
  assert.match(html, /<thead><tr><th scope="col">Thông số<\/th><th scope="col">CR BLK 40<\/th><th scope="col">CR BLK 35<\/th><th scope="col">CR BLK 15<\/th><\/tr><\/thead>/);
  assert.match(html, /<th scope="row">VLT \(phim \+ kính Auto 75\)<\/th><td>41%<\/td><td>33%<\/td><td>14%<\/td>/);
  assert.match(html, /<th scope="row">TSER<\/th><td>58%<\/td><td>60%<\/td><td>64%<\/td>/);
  assert.match(html, /<th scope="row">Giảm chói<\/th><td>44%<\/td><td>55%<\/td><td>81%<\/td>/);
  assert.doesNotMatch(html, /Vị trí Auto365 đề xuất:/);
});

test('uses a consistent 34px desktop scale for every section heading', () => {
  assert.match(html, /h2\{font-size:34px!important\}/);
  assert.match(html, /@media\(max-width:680px\)\{h2\{font-size:28px!important\}\}/);
});

test('does not initialize a sticky contact component that is absent from the markup', () => {
  assert.doesNotMatch(html, /document\.getElementById\('contactSticky'\)/);
  assert.doesNotMatch(html, /IntersectionObserver\(function\(entries\)\{sticky/);
});

test('keeps location cards compact without redundant tags or address underlines', () => {
  assert.doesNotMatch(html, /class="location-tag"/);
  assert.match(html, /\.location-card\{min-height:0\}/);
  assert.match(html, /\.location-card \.location-address\{color:#e31b23;font-size:11px;font-weight:750;text-decoration:none\}/);
  assert.match(html, /\.location-actions \.location-phone\{color:#fff;border-color:#e31b23;background:#e31b23\}/);
  assert.match(html, /\.location-actions\{display:flex;flex-wrap:wrap;gap:7px;margin-top:12px;padding-top:0\}/);
  assert.match(html, /<span class="location-address location-availability">Hỗ trợ tư vấn toàn quốc<\/span>/);
});

test('presents Auto365 reasons as four linked proof points rather than a generic checklist', () => {
  assert.match(html, /<h2 class="why-auto365-title" id="why-auto365-title">Vì sao nên dán phim cách nhiệt tại Auto365\?<\/h2>/);
  assert.doesNotMatch(html, /Chọn dịch vụ có cơ sở/);
  assert.doesNotMatch(html, /Quyết định dựa trên những gì khách hàng có thể đối chiếu trước, trong và sau khi thi công\./);
  assert.equal((html.match(/class="why-proof-card"/g) || []).length, 4);
  assert.match(html, /class="why-proof-card" href="#pro-shop-certificates"/);
  assert.match(html, /class="why-proof-card" href="#specs"/);
  assert.match(html, /class="why-proof-card" href="#cases"/);
  assert.match(html, /class="why-proof-card" href="#warranty"/);
  assert.match(html, /<strong>Điểm thi công có thông tin để kiểm tra<\/strong>/);
  assert.match(html, /<strong>Tư vấn cấu hình theo từng xe và nhu cầu<\/strong>/);
  assert.match(html, /<strong>Quy trình rõ ràng và case thực tế để đối chiếu<\/strong>/);
  assert.match(html, /<strong>Có hồ sơ sau khi bàn giao<\/strong>/);
  assert.doesNotMatch(html, /Báo giá theo nhóm xe<\/strong> — phạm vi hạng mục/);
});

test('keeps Auto365 proof cards and certificates free of redundant ordinal labels', () => {
  const proofSection = html.slice(html.indexOf('class="pro-shop-reasons"'), html.indexOf('class="source-links"'));
  assert.doesNotMatch(proofSection, /<b>0[1-4]<\/b>/);
  assert.doesNotMatch(proofSection, /HỒ SƠ 0[1-4]/);
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

test('adds the nationwide Auto365 branch finder immediately after real installations', () => {
  const finder = html.indexOf('id="branch-finder"');
  const cases = html.indexOf('id="cases"');
  const locations = html.indexOf('id="pro-shop"');
  assert.ok(finder > cases && finder < locations);
  assert.match(html, /class="a365-network"/);
  assert.match(html, /<h2 class="a365-title"[^>]*>Tìm điểm Auto365 phù hợp gần bạn<\/h2>/);
  assert.match(html, /<h3 class="a365-right-title"[^>]*>Hơn 90 chi nhánh · 33 tỉnh thành<\/h3>/);
  assert.match(html, /class="a365-right-heading"><h3 class="a365-right-title"[^>]*>Hơn 90 chi nhánh · 33 tỉnh thành<\/h3><a class="a365-all"/);
  assert.match(html, /class="a365-contact-actions" aria-label="Liên hệ Auto365"/);
  assert.match(html, /\.a365-contact-actions\{display:grid;grid-template-columns:repeat\(3,minmax\(0,1fr\)\)/);
  assert.match(html, /\.a365-title,\.a365-right-title\{min-height:0;font-size:clamp\(20px,1\.75vw,23px\)!important;line-height:1\.15;white-space:nowrap\}/);
  assert.match(html, /@media\(max-width:520px\)\{\.a365-contact-actions\{grid-template-columns:1fr\}\.a365-contact-actions \.a365-btn\{min-height:40px;font-size:12px\}\.a365-title,\.a365-right-title\{white-space:normal\}\}/);
  assert.match(html, /<span class="a365-region-name">Miền Bắc<\/span><strong class="a365-region-count">41 điểm<\/strong>/);
  assert.match(html, /<span class="a365-region-name">Miền Trung<\/span><strong class="a365-region-count">26 điểm<\/strong>/);
  assert.match(html, /<span class="a365-region-name">Miền Nam<\/span><strong class="a365-region-count">23 điểm<\/strong>/);
  assert.match(html, /\.a365-panel\{padding:18px\}/);
  assert.match(html, /\.a365-grid\{align-items:stretch\}/);
  assert.match(html, /\.a365-right \.a365-all\{min-height:0;margin:0;padding:0;color:var\(--accent\)/);
  assert.match(html, /\.a365-region\{display:flex;min-height:70px;align-items:center;justify-content:space-between/);
  assert.doesNotMatch(html, /Chọn khu vực để xem danh sách cửa hàng, địa chỉ, dịch vụ và thông tin liên hệ từng điểm/);
});

test('presents the specification evidence as two balanced desktop panels', () => {
  assert.match(html, /\.evidence-grid\{grid-template-columns:minmax\(420px,\.95fr\) minmax\(0,1\.05fr\);gap:20px;align-items:stretch\}/);
  assert.match(html, /\.evidence-visual img\{flex:1;min-height:0;height:auto/);
  assert.match(html, /\.evidence-data\{max-width:none;justify-self:stretch;padding:24px/);
});

test('keeps the reference visual treatment for the specification evidence', () => {
  assert.match(html, /\.evidence-section \.container\{width:min\(1180px,calc\(100% - 48px\)\)\}/);
  assert.match(html, /\.evidence-grid\{grid-template-columns:minmax\(0,\.9fr\) minmax\(560px,1fr\);gap:16px/);
  assert.match(html, /\.evidence-data\{[^}]*padding:30px 32px/);
  assert.match(html, /\.spec-table-wrap caption:before\{[^}]*background:#ed1b24/);
});

test('keeps the reference specification layout inside the article content width', () => {
  assert.match(html, /\.evidence-section \.container\{width:min\(1180px,calc\(100% - 48px\)\)\}/);
  assert.doesNotMatch(html, /\.evidence-section \.container\{width:min\(1700px/);
});

test('scales the evidence panels without forcing a tall cropped vehicle image', () => {
  assert.match(html, /\.evidence-visual\{min-height:0;aspect-ratio:\.96/);
  assert.match(html, /\.evidence-visual img\{flex:1;min-height:0;height:auto/);
});

test('keeps the specification panel compact at article width', () => {
  assert.match(html, /\.evidence-data\{padding:20px 22px/);
  assert.match(html, /\.spec-table-wrap th,\.spec-table-wrap td\{padding:9px 10px/);
  assert.match(html, /\.spec-table-wrap>p\{padding:10px 12px;font-size:10px/);
});

test('does not render stray text before the page content', () => {
  assert.doesNotMatch(html, /<\/style>`r`n/);
});

test('keeps the visual at its natural wide aspect ratio', () => {
  assert.match(html, /\.evidence-visual\{height:100%;aspect-ratio:auto/);
  assert.match(html, /\.evidence-visual img\{aspect-ratio:1\.5;flex:none/);
});

test('keeps the consultation form compact beside its image on desktop', () => {
  assert.match(html, /\.consult-form\{padding:18px;gap:9px/);
  assert.match(html, /\.consult-form input,\.consult-form select,\.consult-form textarea\{[^}]*padding:9px 10px/);
  assert.match(html, /\.consult-form \.button-gold\{min-height:42px/);
});

test('aligns the consultation form with the adjacent introduction on desktop', () => {
  assert.match(html, /@media\(min-width:901px\)\{\.consult-form\{margin-top:0\}\}/);
});

test('removes the redundant four-point service-proof strip below the hero', () => {
  assert.doesNotMatch(html, /<section class="proof-strip" aria-label="Bằng chứng dịch vụ">/);
});

test('uses a spacious, aligned Auto365 proof layout without redundant labels', () => {
  assert.doesNotMatch(html, /<span>Vì sao chọn Auto365\?<\/span>/);
  assert.doesNotMatch(html, /Hình ảnh chứng nhận, lắp đặt và hoạt động đào tạo được hiển thị để khách hàng tham khảo khi tư vấn\./);
  assert.match(html, /\.why-proof-card\{display:grid;min-height:0;grid-template-rows:40px 72px 155px auto/);
  assert.match(html, /\.why-certificate-card img\{width:100%;height:200px/);
  assert.match(html, /\.answer-section\{padding-top:8px;padding-bottom:5px\}/);
});

test('uses the page typography weight for Auto365 proof-card labels', () => {
  assert.match(html, /\.why-proof-card strong\{[^}]*font-weight:600/);
  assert.match(html, /\.why-proof-card em\{[^}]*font-weight:600/);
});

test('keeps a compact vertical rhythm between page blocks', () => {
  assert.match(html, /\.section\{padding:7px 0\}/);
  assert.match(html, /\.branch-finder\{padding:14px 0\}/);
  assert.match(html, /\.pro-shop-section\{padding:8px 0 12px\}/);
  assert.match(html, /\.why-auto365\{margin:7px 0 0\}/);
  assert.match(html, /\.media-section\{padding:8px 0\}/);
});

test('presents the four certification visuals with compact captions only', () => {
  assert.doesNotMatch(html, /<div class="why-certificate-copy">/);
  assert.equal((html.match(/class="why-certificate-card"/g) || []).length, 4);
  assert.doesNotMatch(html, /CHỨNG NHẬN 01/);
  assert.doesNotMatch(html, /HỆ THỐNG · 3M AUTHORIZED DISTRIBUTOR VIETNAM/);
  assert.doesNotMatch(html, /Xem hồ sơ phân phối 3M trên website 365Group →/);
  assert.doesNotMatch(html, /class="why-actions"/);
  assert.match(html, /\.why-certificate-card img\{width:100%;height:200px/);
});

test('keeps only essential TDS context and includes the IRR values', () => {
  assert.match(html, /<th scope="row">IRR<\/th><td>98%<\/td><td>98%<\/td><td>98%<\/td>/);
  assert.doesNotMatch(html, /<p class="evidence-intro">/);
  assert.doesNotMatch(html, /VLT trong bảng là VLT của tổ hợp phim/);
  assert.doesNotMatch(html, /class="source-legend"/);
});

test('uses a three-to-two visual-to-table ratio with aligned evidence panels', () => {
  assert.match(html, /\.evidence-grid\{grid-template-columns:minmax\(0,3fr\) minmax\(400px,2fr\);gap:16px;align-items:stretch\}/);
  assert.match(html, /\.evidence-visual\{height:100%;aspect-ratio:auto/);
  assert.match(html, /\.evidence-visual img\{aspect-ratio:1\.5;flex:none;width:100%;height:auto/);
  assert.match(html, /\.spec-table-wrap th,\.spec-table-wrap td\{padding:9px 10px/);
});

test('presents Auto365 proof as four visual verification cards with a certificate band', () => {
  assert.match(html, /<h2 class="why-auto365-title" id="why-auto365-title">Vì sao nên dán phim cách nhiệt tại Auto365\?<\/h2>/);
  assert.equal((html.match(/class="why-proof-card"/g) || []).length, 4);
  assert.match(html, /class="why-proof-card" href="#pro-shop-certificates"/);
  assert.match(html, /class="why-proof-card" href="#specs"/);
  assert.match(html, /class="why-proof-card" href="#cases"/);
  assert.match(html, /class="why-proof-card" href="#warranty"/);
  assert.match(html, /class="why-certificate-band" id="pro-shop-certificates"/);
  assert.match(html, /\.why-proof-card\{display:flex;min-height:0;flex-direction:column/);
  assert.match(html, /\.why-proof-card img\{width:100%;height:155px;margin-top:0/);
  assert.match(html, /src="\/3m-cr-blk-pro\/hinh\/2\.webp" alt="Mặt tiền 3M Pro Shop Auto365"/);
  assert.match(html, /src="\/3m-cr-blk-pro\/hinh\/5\.webp" alt="Không gian 3M Pro Shop Auto365 phục vụ tư vấn"/);
  assert.match(html, /src="\/3m-cr-blk-pro\/hinh\/8\.webp" alt="Kỹ thuật viên thi công phim cách nhiệt tại 3M Pro Shop Auto365"/);
});
