// Build auto365/bi-gam/vinfast/index.html (hub bi gầm VinFast):
// shell (head CSS + header + footer) lấy từ trang VF6, nội dung từ vinfast/content-src.html,
// khối chi nhánh + form tư vấn chuẩn lấy từ theo-hang-xe/content-src.html.
import fs from 'node:fs';
import path from 'node:path';
import { JSDOM } from 'jsdom';

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
  .replace('kỹ thuật viên kiểm tra xe và tư vấn cấu hình.</p>', 'kỹ thuật viên kiểm tra xe và tư vấn cấu hình. Auto365.vn - Trụ Sở Chính thuộc hệ sinh thái 365Group, là điểm tư vấn, lắp đặt và hỗ trợ bảo hành các dòng đèn X-Light, GTR, AES theo nhu cầu sử dụng thực tế của từng xe.</p>');
const lead = cut('<section class="bght-sec bght-leadsec"', /<\/section><\/div>\s*<\/div><\/section>/)
  .replace(/data-service="[^"]*"/g, 'data-service="Bi gầm VinFast"')
  .replace(/data-source-page="[^"]*"/g, 'data-source-page="Bi gầm VinFast"')
  .replace('placeholder="VD: Toyota Vios 2021"', 'placeholder="VD: VinFast VF 6 2025"');
content = content.replace('<!-- @branch -->', () => branch).replace('<!-- @lead -->', () => lead);

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
html = html.replace(/<span id="bgvf-n">\d+<\/span>/, `<span id="bgvf-n">${doc.getElementById('bgvf-n').textContent}</span>`);
// script chỉ gắn sự kiện, không render lại
html = html.replace("$('bgvf-n').textContent=M.length;", 'if(!$(\'bgvf-grid\').children.length){$(\'bgvf-n\').textContent=M.length;')
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
const desc = 'Chọn dòng xe VinFast để xem cấu hình bi gầm, hình ảnh xe thực tế đã lắp tại Auto365 (X-Light, GTR, AES) và nhận tư vấn tại hệ thống 90+ chi nhánh.';
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
fs.writeFileSync(path.join(dir, 'index.html'), outFixed);
console.log('built', path.join(dir, 'index.html'), out.length, { models: models.length, cases: cases.length, faqs: faqs.length });
