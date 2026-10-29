// Xuất bộ bàn giao 01 (nội dung + SHA) và 04 (master data) cho hub bi gầm VinFast
// từ chính index.html đã build — chạy sau build-bi-gam-vinfast.mjs:
//   node scripts/build-bi-gam-vinfast.mjs && node scripts/export-bi-gam-vinfast-docs.mjs
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { JSDOM } from 'jsdom';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/(\w:)/, '$1')), '..');
const page = path.join(root, 'auto365/bi-gam/vinfast');
const out = path.join(root, 'docs/bi-gam-vinfast');
fs.mkdirSync(out, { recursive: true });

const html = fs.readFileSync(path.join(page, 'index.html'), 'utf8');
const src = fs.readFileSync(path.join(page, 'content-src.html'), 'utf8');
const sha = (s) => crypto.createHash('sha256').update(String(s).replace(/\r\n/g, '\n')).digest('hex');
const doc = new JSDOM(html).window.document;
const txt = (el) => (el ? el.textContent.replace(/\s+/g, ' ').trim() : '');
const ld = JSON.parse(doc.querySelector('script[type="application/ld+json"]').textContent);
const g = (t) => ld['@graph'].filter((x) => x['@type'] === t);
const cp = g('CollectionPage')[0];
const canonical = doc.querySelector('link[rel=canonical]').href;
const toProd = (href) => new URL(href, canonical + '/').href
  .replace('/nang-cap-anh-sang-bi-gam/vinfast-vf3/', '/nang-cap-anh-sang-bi-gam/vinfast/vf3').replace(/\/$/, '');

const models = [...doc.querySelectorAll('#bgvf-grid a.bgvf-m')].map((a) => ({
  name: 'VinFast ' + txt(a.querySelector('b').firstChild),
  group: { ev: 'Xe điện', green: 'Green / dịch vụ', old: 'Xe xăng' }[a.dataset.g],
  status: a.dataset.car ? 'Liên hệ tư vấn' : 'Có hồ sơ',
  url: a.dataset.car ? '' : toProd(a.getAttribute('href')),
  img: (a.querySelector('img') || {}).getAttribute?.('src') || '',
}));
const cases = [...doc.querySelectorAll('#bgvf-rail a.bgvf-case')].map((a) => ({
  model: 'VinFast ' + a.dataset.m, title: txt(a.querySelector('p')), url: a.href, date: a.querySelector('time').getAttribute('datetime'),
}));
const guides = [...doc.querySelectorAll('#bgvf-guides a.bgvf-guide')].map((a) => ({
  title: txt(a.querySelector('h3')), url: a.href, date: a.querySelector('time').getAttribute('datetime'), label: txt(a.querySelector('.lb')),
}));
const faqs = [...doc.querySelectorAll('.bf-list details')].map((d) => ({ q: txt(d.querySelector('summary')), a: txt(d.querySelector('p')) }));
const qa = doc.querySelector('.bq-box');

// ---- 01 ----
const L = [];
L.push('# 01 — Nội dung hub Bi gầm VinFast', '');
L.push('> Xuất tự động bởi `scripts/export-bi-gam-vinfast-docs.mjs` từ `auto365/bi-gam/vinfast/index.html`. Không sửa tay — sửa `content-src.html`, build lại rồi xuất lại.', '');
L.push('| Trường | Giá trị |', '|---|---|');
L.push('| URL preview | https://preview-365group.pages.dev/bi-gam/vinfast/ |');
L.push('| Canonical production | ' + canonical + ' |');
L.push('| Title (' + [...doc.title].length + ' ký tự) | ' + doc.title + ' |');
const desc = doc.querySelector('meta[name=description]').content;
L.push('| Meta description (' + [...desc].length + ' ký tự) | ' + desc + ' |');
L.push('| H1 | ' + txt(doc.querySelector('h1')) + ' |');
L.push('| dateModified | ' + cp.dateModified + ' |');
L.push('| Schema | ' + ld['@graph'].map((x) => x['@type'] + (x.numberOfItems ? ' (' + x.numberOfItems + ')' : '')).join(', ') + ' |');
L.push('| SHA-256 index.html | `' + sha(html) + '` |');
L.push('| SHA-256 content-src.html | `' + sha(src) + '` |', '');
// thứ tự theo trang hiển thị
L.push('## Sapo (kiêm trả lời nhanh)', '', txt(doc.querySelector('.bgvf-lead')), '');
L.push('## ' + txt(doc.querySelector('#dong-xe h2')), '');
L.push('### Dòng xe (' + models.length + ')', '', '| Dòng xe | Nhóm | Trạng thái | Trang production |', '|---|---|---|---|');
models.forEach((m) => L.push(`| ${m.name} | ${m.group} | ${m.status} | ${m.url || '—'} |`));
L.push('', '## ' + txt(doc.querySelector('#xe-thuc-te h2')) + ' (' + cases.length + ' bài hồ sơ)', '', 'Bộ lọc: dòng xe, hãng đèn (suy từ tên đèn trong tiêu đề bài).', '', '| Dòng xe | Bài | Ngày đăng |', '|---|---|---|');
cases.forEach((c) => L.push(`| ${c.model} | [${c.title}](${c.url}) | ${c.date} |`));
// box lưu ý: chỉ nội dung trực tiếp, khối nhu cầu xuất riêng bên dưới
L.push('', '## ' + txt(qa.querySelector('h2')), '');
[...qa.children].filter((x) => x.tagName === 'P' || x.tagName === 'UL').forEach((x) => {
  if (x.tagName === 'UL') x.querySelectorAll(':scope > li').forEach((li) => L.push('- ' + txt(li)));
  else L.push(txt(x));
  L.push('');
});
L.push('### ' + txt(doc.querySelector('#theo-nhu-cau summary h3')) + ' (accordion đóng sẵn, cuối box lưu ý)', '', txt(doc.querySelector('#theo-nhu-cau .bght-sub')), '');
doc.querySelectorAll('#theo-nhu-cau .bgvf-nd').forEach((n) => {
  L.push('#### ' + txt(n.querySelector('h3')), '', '_Dòng xe:_ ' + txt(n.querySelector('.who')), '');
  n.querySelectorAll('li').forEach((li) => L.push('- ' + txt(li)));
  L.push('', txt(n.querySelector('.done')) + ' (' + [...n.querySelectorAll('.done a')].map((a) => a.href).join(', ') + ')', '', 'CTA: ' + txt(n.querySelector('.go')).replace(/\s*→$/, '') + ' → ' + n.querySelector('.go').href, '');
});
L.push(txt(doc.querySelector('.bgvf-nnote')), '');
// vì sao chọn: 6 thẻ ảnh + logo hãng đèn (khối dùng chung với theo-hang-xe)
const why = doc.getElementById('vi-sao-chon');
L.push('## ' + txt(why.querySelector('h2')), '', '_Khối dùng chung với trang theo-hang-xe (build tự lấy). Ảnh là ảnh minh họa tại Auto365, không phải bằng chứng của một ca VinFast cụ thể._', '');
L.push('| Thẻ | Nội dung | Ảnh | Alt |', '|---|---|---|---|');
why.querySelectorAll('.bw-card').forEach((c) => { const im = c.querySelector('img'); L.push(`| ${txt(c.querySelector('h3'))} | ${txt(c.querySelector('p'))} | \`${im.getAttribute('src').split('/').pop()}\` | ${im.getAttribute('alt')} |`); });
L.push('', '**' + txt(why.querySelector('.bght-lbrands-l')) + ':** ' + [...why.querySelectorAll('.bght-lbrand img')].map((i) => i.getAttribute('alt')).join(', ') + ' — phạm vi: thương hiệu đèn Auto365 phân phối, không ngụ ý mỗi hãng đã có hồ sơ VinFast trên trang này.', '');
L.push('## Khối chi nhánh — câu nhận diện', '', txt(doc.querySelector('.bght-branch .bght-sub')), '');
L.push('## Cẩm nang (' + guides.length + ')', '', '| Bài | Nhãn | Ngày đăng |', '|---|---|---|');
guides.forEach((x) => L.push(`| [${x.title}](${x.url}) | ${x.label} | ${x.date} |`));
L.push('', '## FAQ (' + faqs.length + ')', '');
faqs.forEach((f) => L.push('**' + f.q + '**', '', f.a, ''));
L.push('_' + txt(doc.querySelector('.bgvf-disc')) + '_', '');
const form = doc.querySelector('#tu-van form');
L.push('## CTA và form', '', '- CTA cuối: ' + txt(doc.querySelector('#tu-van-ngay h2')) + ' — nút "Nhận tư vấn ngay" (#tu-van), gọi 0365 365 911');
L.push('- Form: action `' + form.getAttribute('action') + '`, data-service `' + form.dataset.service + '` (+ " - VinFast [dòng xe]" khi bấm thẻ dòng xe chưa có hồ sơ), data-source-page `' + form.dataset.sourcePage + '`');
L.push('- Trường: ' + [...form.elements].filter((e) => e.name && e.name !== 'form-honey').map((e) => e.name).join(', ') + '; nhãn nhu cầu hiển thị "Đèn – Bi gầm, Bi LED", giá trị gửi API giữ "Đèn – Bi LED"', '');
fs.writeFileSync(path.join(out, '01_Noi_dung_Bi_gam_VinFast.md'), L.join('\n'));

// ---- 04 ----
const csv = (v) => '"' + String(v ?? '').replace(/"/g, '""') + '"';
const slug = (x) => x.toLowerCase().replace(/vinfast\s*/, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const sku = (t) => (t.match(/(Quantum X V2 và F10 Turbo V2|GTR G1 Turbo V2|F10 Turbo V2(?: \d{4}K)?|F10 2\.0 New|F10 New|301 V2)/) || [])[1] || '';
const checked = '2026-10-23'; // case, cẩm nang: lần kiểm HTTP gần nhất
const checkedModel = '2026-10-26'; // trang dòng xe: kiểm lại 26/10 (Lux đổi sang /lux-sa2-0)
const rows = [['content_type', 'model_id', 'model', 'group', 'status', 'title', 'url', 'published', 'case_id', 'sku_version', 'label', 'image', 'source', 'checked_at', 'note']];
models.forEach((m) => rows.push(['model', slug(m.name), m.name, m.group, m.status, '', m.url, '', '', '', '', m.img, m.status === 'Có hồ sơ' ? 'trang dòng xe (URL production)' : '', checkedModel, m.status === 'Có hồ sơ' ? 'HTTP 200, canonical đúng (kiểm 26/10)' + (/lux-sa2-0/.test(m.url) ? '; URL cũ /lux-sa20 trả 404, không dùng' : '') : '']));
cases.forEach((c) => rows.push(['case', slug(c.model), c.model, '', 'đã đăng', c.title, c.url, c.date, '', sku(c.title), '', '', 'bài đã đăng auto365.vn', checked, 'case_id nội bộ chưa có — chưa xác nhận các bài cùng dòng xe là xe khác nhau']));
guides.forEach((x) => rows.push(['guide', x.url.includes('vinfast-fadil') ? 'fadil' : '', '', '', 'đã đăng', x.title, x.url, x.date, '', '', x.label, '', 'bài đã đăng auto365.vn', checked, x.url.includes('bi-gam-vinfast-fadil') ? 'bài tư vấn theo dòng xe, không phải case' : '']));
fs.writeFileSync(path.join(out, '04_Master_Data_Bi_gam_VinFast.csv'), '﻿' + rows.map((r) => r.map(csv).join(',')).join('\n') + '\n');

console.log('exported', out, { sha: sha(html).slice(0, 12), models: models.length, cases: cases.length, guides: guides.length, faqs: faqs.length });

// Bản sao hồ sơ 01–05 trên preview (reviewer đọc trực tiếp, không cần GitHub)
const hoSo = path.join(page, 'ho-so');
fs.mkdirSync(hoSo, { recursive: true });
for (const n of fs.readdirSync(out)) fs.copyFileSync(path.join(out, n), path.join(hoSo, n));
