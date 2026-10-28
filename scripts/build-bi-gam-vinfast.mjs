// Build auto365/bi-gam/vinfast/index.html (hub bi gầm VinFast):
// shell (head CSS + header + footer) lấy từ trang VF6, nội dung từ vinfast/content-src.html,
// khối chi nhánh + form tư vấn chuẩn lấy từ theo-hang-xe/content-src.html.
import fs from 'node:fs';
import path from 'node:path';
import { JSDOM } from 'jsdom';

// ---- Bộ tìm chi nhánh trên preview ----
// Script newsroom-branch-finder của website gọi /chi-nhanh?json=1 và dựng link /chi-nhanh… tương đối:
// chạy đúng trên auto365.vn, nhưng trên preview (pages.dev) bị trỏ về origin preview và auto365.vn không mở CORS.
// Lúc build: lấy danh sách chi nhánh thật, nhúng vào trang; script nhỏ dưới đây CHỈ chạy khi không ở auto365.vn.
const BRANCH_API = 'https://auto365.vn/chi-nhanh?json=1';
let branchData = null;
try {
  const res = await fetch(BRANCH_API, { headers: { 'User-Agent': 'Mozilla/5.0 (preview build)' } });
  if (!res.ok) throw new Error('HTTP ' + res.status);
  branchData = (await res.json()).map((b) => ({ ...b, url: b.url && b.url.startsWith('/') ? 'https://auto365.vn' + b.url : b.url }));
  if (!Array.isArray(branchData) || branchData.length < 50) throw new Error('branch list too short: ' + (branchData && branchData.length));
} catch (e) {
  console.warn('branch data not embedded:', e.message);
  branchData = null;
}
const branchPatch = `<script id="bgvf-branch-preview">(function(){if(/(^|\\.)auto365\\.vn$/.test(location.hostname))return;var P="https://auto365.vn";var D=${branchData ? JSON.stringify(branchData).replace(/</g, '\\u003c') : 'null'};var f=window.fetch;window.fetch=function(u,o){var s=typeof u==="string"?u:(u&&u.url)||"";if(/^\\/chi-nhanh\\?json=1/.test(s)){if(D)return Promise.resolve(new Response(JSON.stringify(D),{status:200,headers:{"Content-Type":"application/json"}}));return f.call(this,P+s,o)}return f.apply(this,arguments)};var fix=function(a){var h=a.getAttribute("href");if(h&&/^\\/chi-nhanh/.test(h))a.setAttribute("href",P+h)};document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='/chi-nhanh']");if(a)fix(a)},true);new MutationObserver(function(m){m.forEach(function(r){r.addedNodes.forEach(function(n){if(n.nodeType!==1)return;if(n.matches&&n.matches("a[href^='/chi-nhanh']"))fix(n);n.querySelectorAll&&n.querySelectorAll("a[href^='/chi-nhanh']").forEach(fix)})})}).observe(document.documentElement,{childList:true,subtree:true})})();</script>`;
// ---- Danh sách tỉnh có điểm Auto365: link thật, có sẵn trong HTML (không cần thao tác tìm) ----
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
let provinceBlock = '';
if (branchData) {
  const by = {};
  for (const b of branchData) { const r = b.region || 'Khác'; (by[r] = by[r] || {}); by[r][b.province] = (by[r][b.province] || 0) + 1; }
  const order = ['Miền Bắc', 'Miền Trung & Tây Nguyên', 'Miền Nam'];
  const nProv = Object.values(by).reduce((n, o) => n + Object.keys(o).length, 0);
  const href = (p) => 'https://auto365.vn/chi-nhanh?q=' + encodeURIComponent(p) + '#workspace';
  provinceBlock = `<div class="bgvf-prov"><a class="bgvf-prov-all" href="https://auto365.vn/chi-nhanh">Xem toàn bộ ${branchData.length} điểm tiếp nhận Auto365 →</a>
<details class="bgvf-prov-d"><summary>Danh sách ${nProv} tỉnh/thành có điểm Auto365</summary>
${order.filter((r) => by[r]).map((r) => `<div class="bgvf-prov-g"><b>${esc(r)}</b><ul>${Object.entries(by[r]).sort((a, b) => a[0].localeCompare(b[0], 'vi')).map(([p, n]) => `<li><a href="${href(p)}">${esc(p)}</a> <span>(${n})</span></li>`).join('')}</ul></div>`).join('\n')}
<p class="bgvf-prov-note">Số điểm theo danh bạ auto365.vn/chi-nhanh tại thời điểm cập nhật trang; nên gọi trước để xác nhận lịch tiếp nhận.</p></details></div>
<style>.bgvf-prov{margin-top:16px}.bgvf-prov-all{display:inline-block;padding:6px 0;color:var(--r)!important;font-weight:600}.bgvf-prov-d{margin-top:8px;border:1px solid var(--ln);border-radius:10px;padding:10px 16px;background:#fff}.bgvf-prov-d summary{cursor:pointer;font-weight:600;padding:4px 0}.bgvf-prov-g{margin-top:10px}.bgvf-prov-g b{font-size:14px}.bgvf-prov-g ul{list-style:none;margin:6px 0 0;padding:0;display:flex;flex-wrap:wrap;gap:6px 14px}.bgvf-prov-g li{font-size:14px}.bgvf-prov-g a{color:var(--ink)!important;text-decoration:underline;display:inline-block;padding:3px 0}.bgvf-prov-g span{color:var(--mu);font-size:12.5px}.bgvf-prov-note{font-size:12.5px;color:var(--mu);margin:10px 0 2px}</style>`;
}

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/(\w:)/, '$1')), '..');
const dir = path.join(root, 'auto365/bi-gam/vinfast');
const shell = fs.readFileSync(path.join(dir, 'vf6/index.html'), 'utf8');
const bght = fs.readFileSync(path.join(root, 'auto365/bi-gam/theo-hang-xe/content-src.html'), 'utf8');
let content = fs.readFileSync(path.join(dir, 'content-src.html'), 'utf8');

// ---- khối dùng chung từ theo-hang-xe ----
const cut = (start, endRe) => {
  const i = bght.indexOf(start);
  if (i < 0) throw new Error('block not found: ' + start);
  const m = endRe.exec(bght.slice(i));
  if (!m) throw new Error('block end not found: ' + start);
  return bght.slice(i, i + m.index + m[0].length);
};
const branch = cut('<section class="bght-sec bght-branch"', /\n<\/div><\/section>/)
  .replace('<h2 class="bght-h2">Hệ thống chi nhánh &amp; tư vấn</h2>', '<span class="bgvf-eb">Hệ thống chi nhánh</span><h2 class="bght-h2">Tìm chi nhánh Auto365 gần bạn</h2>')
  .replace('kỹ thuật viên kiểm tra xe và tư vấn cấu hình.</p>', 'kỹ thuật viên kiểm tra xe và tư vấn cấu hình. Auto365.vn - Trụ Sở Chính thuộc hệ sinh thái 365Group, là điểm tư vấn, lắp đặt và hỗ trợ bảo hành các dòng đèn X-Light, GTR, AES, Titan, Henvvei, Red Lighting, Matrix Light và Fogway theo nhu cầu sử dụng thực tế của từng xe.</p>');
const lead = cut('<section class="bght-sec bght-leadsec"', /<\/section><\/div>\s*<\/div><\/section>/)
  .replace(/data-service="[^"]*"/g, 'data-service="Bi gầm VinFast"')
  .replace(/data-source-page="[^"]*"/g, 'data-source-page="Bi gầm VinFast"')
  .replace('placeholder="VD: Toyota Vios 2021"', 'placeholder="VD: VinFast VF 6 2025"');
// khối "Vì sao chọn" 6 thẻ ảnh + logo hãng đèn (đã duyệt ở theo-hang-xe); ảnh trỏ về thư mục theo-hang-xe
// ảnh thẻ "Vì sao chọn": thay ảnh xe hãng khác bằng ảnh xe VinFast thật tại Auto365 (lấy từ các trang dòng xe)
const WHY_IMG = {
  'auto365vn-mat-tien-he-thong-nang-cap-xe-toan-quoc.webp': ['limo-green/hinh/ly-do-limo-green-chi-nhanh.webp', 'VinFast Limo Green tại chi nhánh Auto365'],
  'auto365vn-tra-cuu-bao-hanh-dien-tu.webp': ['vf6/hinh/ly-do-vf6-phieu-ban-giao.webp', 'VinFast VF 6 và màn hình tra cứu bảo hành điện tử tại Auto365'],
  'auto365vn-xuong-lap-bi-gam-x-light-x3-ultra.webp': ['fadil/hinh/ly-do-fadil-ban-giao.webp', 'VinFast Fadil lắp bi gầm X-Light 301 V2 tại xưởng Auto365'],
  'auto365vn-can-chinh-den-tren-bang-test-xuong.webp': ['vf6/hinh/kiem-tra-duong-cat-cos-bang-test.webp', 'Kiểm tra đường cắt Cos bi gầm VinFast trên bảng test tại Auto365'],
  'auto365vn-bao-gia-lap-dat-bi-gam.webp': ['fadil/hinh/ly-do-fadil-tu-van-cau-hinh.webp', 'VinFast Fadil cùng bộ bi gầm trước khi lắp tại Auto365'],
  'auto365vn-tu-van-den-gam-theo-tung-xe.webp': ['vf6/hinh/ly-do-vf6-tu-van-cau-hinh.webp', 'Tư vấn cấu hình bi gầm cho VinFast VF 6 tại Auto365'],
};
let why = cut('<section class="bght-sec bght-why" id="vi-sao-chon">', /\n?<\/div><\/section>/)
  .replace(/src="hinh\/([^"]+)" alt="[^"]*"/g, (m, f) => { const v = WHY_IMG[f]; if (!v) throw new Error('why img: ' + f); return `src="${v[0]}" alt="${v[1]}"`; })
  .replace('Vì sao chọn Auto365 để nâng cấp bi gầm?', 'Vì sao chọn Auto365 để nâng cấp bi gầm VinFast?')
  // VinFast: không nêu số điện áp chung; kiểm theo tài liệu từng xe
  .replace('Kiểm tra hốc đèn và hệ điện 12V/24V trước khi đề xuất mẫu;', 'Kiểm tra hốc đèn, hệ điện phụ trợ và điện áp cấp nguồn theo tài liệu của từng xe trước khi đề xuất mẫu;');
// khối gốc bên theo-hang-xe dư 1 </div> (đóng luôn wrapper của trang đó) → bỏ phần dư, không thì đóng sớm .bgvf
{
  let extra = (why.match(/<\/div>/g) || []).length - (why.match(/<div\b/g) || []).length;
  while (extra-- > 0) why = why.replace(/<\/div>(\s*<\/section>)$/, '$1');
  if ((why.match(/<\/div>/g) || []).length !== (why.match(/<div\b/g) || []).length) throw new Error('why block div unbalanced');
}
const whyRules =bght.match(/\.bw-(grid|card|photo)( img| h3| p| a)?\{[^}]*\}/g) || [];
const whyCss = '<style>' + whyRules.slice(0, 7).join('\n')
  + '\n' + (bght.match(/\.bght-lbrands\{[^\n]*/) || [''])[0]
  + '\n@media (max-width:767px){.bw-grid{grid-template-columns:none;grid-auto-flow:column;grid-template-rows:repeat(2,auto);grid-auto-columns:78%;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none}.bw-card{scroll-snap-align:start}}</style>\n';
content = content.replace('<!-- @branch -->', () => branch.replace(/\n<\/div><\/section>$/, () => '\n' + provinceBlock + '\n</div></section>')).replace('<!-- @lead -->', () => lead).replace('<!-- @why -->', () => whyCss + why);

// ---- render sẵn phần JS (tab, thẻ dòng xe, case) vào HTML tĩnh cho bot SEO/AI ----
const dom = new JSDOM(content, { runScripts: 'dangerously', pretendToBeVisual: true });
const doc = dom.window.document;
let html = content;
for (const id of ['bgvf-tabs', 'bgvf-grid', 'bgvf-cf', 'bgvf-rail', 'bgvf-guides']) {
  const el = doc.getElementById(id);
  if (!el || !el.innerHTML.trim()) throw new Error('prerender empty: ' + id);
  const re = new RegExp(`(<div[^>]*id="${id}"[^>]*>)(</div>)`);
  if (!re.test(html)) throw new Error('container not empty or missing: ' + id);
  html = html.replace(re, (_, a, b) => a + el.innerHTML + b);
}
// script chỉ gắn sự kiện, không render lại
html = html.replace("var nM=M.length;", 'if(!$(\'bgvf-grid\').children.length){var nM=M.length;')
  .replace("// lọc\n", "}\n// lọc\n");

// ---- schema từ chính HTML đã render ----
const canonical = 'https://auto365.vn/nang-cap-anh-sang-bi-gam/vinfast';
const absUrl = (u) => new URL(u, canonical + '/').href
  .replace('/nang-cap-anh-sang-bi-gam/vinfast-vf3/', '/nang-cap-anh-sang-bi-gam/vinfast/vf3')
  .replace(/\/$/, '');
const models = [...doc.querySelectorAll('#bgvf-grid a.bgvf-m:not([data-car])')].map((a) => ({ name: 'VinFast ' + a.querySelector('b').firstChild.textContent.trim(), url: absUrl(a.getAttribute('href')) }));
const cases = [...doc.querySelectorAll('#bgvf-rail a.bgvf-case')].map((a) => ({ name: a.querySelector('p').textContent.trim(), url: a.getAttribute('href') }));
const faqs = [...doc.querySelectorAll('.bf-list details')].map((d) => ({ q: d.querySelector('summary').textContent.trim(), a: d.querySelector('p').textContent.trim() }));
if (!models.length || !cases.length || !faqs.length) throw new Error('schema source empty');
const itemList = (id, name, items) => ({ '@type': 'ItemList', '@id': canonical + '#' + id, name, numberOfItems: items.length,
  itemListElement: items.map((x, i) => ({ '@type': 'ListItem', position: i + 1, name: x.name, url: x.url })) });
const dateModified = (content.match(/class="bgvf-dm" datetime="([0-9-]+)"/) || [])[1];
const lastReviewed = (content.match(/class="bgvf-rv" datetime="([0-9-]+)"/) || [])[1];
const reviewedBy = lastReviewed && { '@type': 'Person', name: 'Nguyễn Quang Đạo', jobTitle: 'Kiểm duyệt kỹ thuật đèn ô tô', url: 'https://auto365.vn/tac-gia/nguyen-quang-dao' };

const title = 'Bi gầm VinFast theo từng dòng xe: VF 3, VF 6, VF 7, Limo Green | Auto365';
const desc = 'Tra cứu bi gầm VinFast theo dòng xe, xem hồ sơ X-Light và GTR đã lắp tại Auto365; kiểm tra cấu hình, chi phí và điểm tiếp nhận trước khi thi công.';
const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'CollectionPage', '@id': canonical + '#collectionpage', url: canonical, name: 'Bi gầm VinFast theo từng dòng xe', description: desc, inLanguage: 'vi', dateModified, ...(lastReviewed ? { lastReviewed, reviewedBy } : {}),
      about: { '@type': 'Brand', name: 'VinFast' }, isPartOf: { '@id': 'https://auto365.vn/#website' }, publisher: { '@id': 'https://auto365.vn/#organization' }, breadcrumb: { '@id': canonical + '#breadcrumb' } },
    { '@type': 'BreadcrumbList', '@id': canonical + '#breadcrumb', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: 'https://auto365.vn/' },
      { '@type': 'ListItem', position: 2, name: 'Nâng cấp ánh sáng', item: 'https://auto365.vn/nang-cap-anh-sang' },
      { '@type': 'ListItem', position: 3, name: 'Bi gầm', item: 'https://auto365.vn/nang-cap-anh-sang-bi-gam' },
      { '@type': 'ListItem', position: 4, name: 'VinFast', item: canonical } ] },
    { '@type': 'Organization', '@id': 'https://auto365.vn/#organization', name: 'Auto365', url: 'https://auto365.vn/' },
    itemList('dong-xe', 'Dòng xe VinFast có hồ sơ bi gầm', models),
    itemList('xe-thuc-te', 'Bài hồ sơ lắp bi gầm trên xe VinFast tại Auto365', cases),
    { '@type': 'FAQPage', '@id': canonical + '#faq', mainEntity: faqs.map((x) => ({ '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a } })) },
  ],
};

const head = shell.slice(0, shell.indexOf('</head>'));
const links = head.match(/<link[^>]+(rel="(stylesheet|preconnect|dns-prefetch|preload|icon|shortcut icon|apple-touch-icon)")[^>]*>/g) || [];
const styles = (head.match(/<style[^>]*>[\s\S]*?<\/style>/g) || []).filter((x) => !x.includes('vf3lp'));
const bodyStart = shell.search(/^\s*<body>/m);
const mainOpen = shell.indexOf('<main id="main-content">') + '<main id="main-content">'.length;
const mainClose = shell.lastIndexOf('</main>');
if (bodyStart < 0 || mainOpen < 30 || mainClose < 0) throw new Error('VF6 shell markers not found');

const out = `<!DOCTYPE html>
<html lang="vi">
<head>
<!-- BUILT by scripts/build-bi-gam-vinfast.mjs — edit content-src.html -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${desc}">
<meta name="robots" content="noindex, nofollow, noarchive">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="website">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${desc}">
<meta property="og:image" content="https://preview-365group.pages.dev/bi-gam/theo-hang-xe/hinh/m-vf6.webp">
${links.join('\n')}
${styles.join('\n')}
<script type="application/ld+json">${JSON.stringify(schema)}</script>
${branchPatch}
</head>
${shell.slice(bodyStart, mainOpen)}
${html}
${shell.slice(mainClose)
  .replace(/<aside class="vf3lp-internal-check"[\s\S]*?<\/aside>\s*/, '')
  .replace(/<script id="vf3lp-internal-check-js">[\s\S]*?<\/script>\s*/, '')
  .replace(/<(style|script)\b[^>]*>(?:(?!<\/\1>)[\s\S])*vf3lp[\s\S]*?<\/\1>\s*/g, '')}`;

// nhãn nhu cầu trong form (nội dung + nút nổi): hiển thị có bi gầm, giữ nguyên giá trị gửi API
const outFixed = out.split('<option selected>Đèn – Bi LED</option>').join('<option value="Đèn – Bi LED" selected>Đèn – Bi gầm, Bi LED</option>');
if (outFixed === out) throw new Error('priority option not found');
// Shell gốc nạp main.js/jquery.toc/content.js nhưng thiếu jQuery → nạp jQuery (defer, cùng bản production) ngay trước main.js
const MAINJS = '<script defer type="text/javascript" src="https://v2.auto365.vn/assets/frontend/js/main.js';
if (!outFixed.includes(MAINJS)) throw new Error('main.js script not found');
const outJq = outFixed.includes('jquery-3.6.0.min.js') ? outFixed : outFixed.replace(MAINJS, '<script defer src="https://v2.auto365.vn/assets/frontend/vendor/jquery/jquery-3.6.0.min.js"></script>\n' + MAINJS);
fs.writeFileSync(path.join(dir, 'index.html'), outJq);
console.log('built', path.join(dir, 'index.html'), out.length, { models: models.length, cases: cases.length, faqs: faqs.length });
