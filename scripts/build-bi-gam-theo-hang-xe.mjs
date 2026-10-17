// Build auto365/bi-gam/theo-hang-xe/index.html:
// shell (head CSS + header + footer) lấy từ trang VF6, nội dung từ content-src.html.
import fs from 'node:fs';
import path from 'node:path';
import { JSDOM } from 'jsdom';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/(\w:)/, '$1')), '..');
const dir = path.join(root, 'auto365/bi-gam/theo-hang-xe');
const shell = fs.readFileSync(path.join(root, 'auto365/bi-gam/vinfast/vf6/index.html'), 'utf8');
const content = fs.readFileSync(path.join(dir, 'content-src.html'), 'utf8');

// ---- Render sẵn phần JS (tab hãng, thẻ dòng xe, case) vào HTML tĩnh cho bot SEO/AI ----
// Chạy đúng script của trang trong jsdom, lấy innerHTML các khối rồi ghi lại vào content.
const dom = new JSDOM(content, { runScripts: 'dangerously', pretendToBeVisual: true });
const doc = dom.window.document;
const pre = (id) => {
  const el = doc.getElementById(id);
  if (!el || !el.innerHTML.trim()) throw new Error('prerender empty: ' + id);
  return el.innerHTML;
};
let html = content;
for (const id of ['bght-brands', 'bght-models', 'bght-filter', 'bght-rail']) {
  const re = new RegExp(`(<div[^>]*id="${id}"[^>]*>)(</div>)`);
  if (!re.test(html)) throw new Error('container not empty or missing: ' + id);
  html = html.replace(re, `$1${pre(id).replace(/\$/g, '$$$$')}$2`);
}
// tiêu đề khối dòng xe
html = html.replace(/(<h3 class="bx-ptitle" id="bx-pop-t">)(<\/h3>)/, `$1${doc.getElementById('bx-pop-t').innerHTML}$2`);

// ---- Dữ liệu cho schema lấy từ chính HTML đã render ----
// link tương đối của preview → URL canonical production (trang VinFast: /vinfast/vfX, không có / cuối)
const abs = (u) => new URL(u, 'https://auto365.vn/nang-cap-anh-sang-bi-gam/theo-hang-xe/').href
  .replace('/nang-cap-anh-sang-bi-gam/vinfast-vf3/', '/nang-cap-anh-sang-bi-gam/vinfast/vf3')
  .replace(/(\/nang-cap-anh-sang-bi-gam\/vinfast\/vf\d)\/$/, '$1');
const models = [...doc.querySelectorAll('#bght-models .bx-m')].map((a) => ({ name: a.querySelector('.bx-m-logo').textContent.trim() + ' ' + a.querySelector('b').textContent.trim(), url: abs(a.getAttribute('href')) }));
const cases = [...doc.querySelectorAll('#bght-rail .bght-case')].map((a) => ({ name: a.querySelector('p').textContent.trim(), url: abs(a.getAttribute('href')) }));
const guides = [...doc.querySelectorAll('.bght-guide')].map((a) => ({ name: a.querySelector('h3').textContent.trim(), url: a.getAttribute('href') }));
const faqs = [...doc.querySelectorAll('.bf-list details')].map((d) => ({ q: d.querySelector('summary').textContent.trim(), a: d.querySelector('p').textContent.trim() }));
if (!models.length || !cases.length || !guides.length || !faqs.length) throw new Error('schema source empty');
const itemList = (id, name, items) => ({ '@type': 'ItemList', '@id': canonicalId(id), name, numberOfItems: items.length,
  itemListElement: items.map((x, i) => ({ '@type': 'ListItem', position: i + 1, name: x.name, url: x.url })) });
const canonicalId = (id) => 'https://auto365.vn/nang-cap-anh-sang-bi-gam/theo-hang-xe#' + id;

const head = shell.slice(0, shell.indexOf('</head>'));
const links = head.match(/<link[^>]+(rel="(stylesheet|preconnect|dns-prefetch|preload|icon|shortcut icon|apple-touch-icon)")[^>]*>/g) || [];
const styles = (head.match(/<style[^>]*>[\s\S]*?<\/style>/g) || []).filter((x) => !x.includes('vf3lp'));
const bodyStart = shell.search(/^\s*<body>/m);
const mainOpen = shell.indexOf('<main id="main-content">') + '<main id="main-content">'.length;
const mainClose = shell.lastIndexOf('</main>');
if (bodyStart < 0 || mainOpen < 30 || mainClose < 0) throw new Error('VF6 shell markers not found');

const canonical = 'https://auto365.vn/nang-cap-anh-sang-bi-gam/theo-hang-xe';
const title = 'Bi gầm theo hãng xe: chọn mẫu theo dòng xe và case thực tế | Auto365';
const desc = 'Chọn bi gầm theo hãng xe Toyota, VinFast, Ford, Honda, Mazda, Hyundai, Kia, Mitsubishi. Xem xe thực tế đã lắp tại Auto365, video ánh sáng và quy trình lắp đặt.';
const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'CollectionPage', '@id': canonical + '#collectionpage', url: canonical, name: 'Bi gầm theo hãng xe', description: desc, inLanguage: 'vi', isPartOf: { '@id': 'https://auto365.vn/#website' }, publisher: { '@id': 'https://auto365.vn/#organization' }, breadcrumb: { '@id': canonical + '#breadcrumb' } },
    { '@type': 'BreadcrumbList', '@id': canonical + '#breadcrumb', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: 'https://auto365.vn/' },
      { '@type': 'ListItem', position: 2, name: 'Độ bi gầm', item: 'https://auto365.vn/nang-cap-anh-sang-bi-gam' },
      { '@type': 'ListItem', position: 3, name: 'Bi gầm theo hãng xe', item: canonical } ] },
    { '@type': 'Organization', '@id': 'https://auto365.vn/#organization', name: 'Auto365', url: 'https://auto365.vn/' },
    itemList('dong-xe', 'Dòng xe đã lắp bi gầm tại Auto365', models),
    itemList('xe-thuc-te', 'Xe thực tế đã lắp bi gầm tại Auto365', cases),
    itemList('cam-nang', 'Cẩm nang bi gầm theo dòng xe', guides),
    { '@type': 'FAQPage', '@id': canonical + '#faq', mainEntity: faqs.map((x) => ({ '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a } })) },
  ],
};

const out = `<!DOCTYPE html>
<html lang="vi">
<head>
<!-- BUILT by scripts/build-bi-gam-theo-hang-xe.mjs — edit content-src.html -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${desc}">
<meta name="robots" content="noindex, nofollow, noarchive">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="website">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${desc}">
<meta property="og:image" content="https://preview-365group.pages.dev/bi-gam/theo-hang-xe/hinh/bi-gam-theo-hang-xe-auto365-showroom.webp">
${links.join('\n')}
${styles.join('\n')}
<script type="application/ld+json">${JSON.stringify(schema)}</script>
</head>
${shell.slice(bodyStart, mainOpen)}
${html}
${shell.slice(mainClose)
  // bỏ khối duyệt nội bộ riêng của trang VF6
  .replace(/<aside class="vf3lp-internal-check"[\s\S]*?<\/aside>\s*/, '')
  .replace(/<script id="vf3lp-internal-check-js">[\s\S]*?<\/script>\s*/, '')
  .replace(/<(style|script)\b[^>]*>(?:(?!<\/\1>)[\s\S])*vf3lp[\s\S]*?<\/\1>\s*/g, '')}`;

fs.writeFileSync(path.join(dir, 'index.html'), out);
console.log('built', path.join(dir, 'index.html'), out.length);
