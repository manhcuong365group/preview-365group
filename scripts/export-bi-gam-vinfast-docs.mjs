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
const sha = (s) => crypto.createHash('sha256').update(s).digest('hex');
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
  group: { ev: 'Xe điện', green: 'Green / dịch vụ', old: 'Dòng đời trước' }[a.dataset.g],
  status: a.dataset.car ? 'Liên hệ tư vấn' : 'Có hồ sơ',
  url: a.dataset.car ? '' : toProd(a.getAttribute('href')),
  img: (a.querySelector('img') || {}).getAttribute?.('src') || '',
}));
const cases = [...doc.querySelectorAll('#bgvf-rail a.bgvf-case')].map((a) => ({
  model: 'VinFast ' + a.dataset.m, title: txt(a.querySelector('p')), url: a.href, date: a.querySelector('time').getAttribute('datetime'),
}));
const guides = [...doc.querySelectorAll('#bgvf-guides a.bgvf-guide')].map((a) => ({
  title: txt(a.querySelector('h3')), url: a.href, date: a.querySelector('time').getAttribute('datetime'),
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
L.push('## Sapo', '', txt(doc.querySelector('.bgvf-lead')), '');
L.push('## Dòng xe (' + models.length + ')', '', '| Dòng xe | Nhóm | Trạng thái | Trang production |', '|---|---|---|---|');
models.forEach((m) => L.push(`| ${m.name} | ${m.group} | ${m.status} | ${m.url || '—'} |`));
L.push('', '## Xe thực tế (' + cases.length + ')', '', '| Dòng xe | Bài | Ngày đăng |', '|---|---|---|');
cases.forEach((c) => L.push(`| ${c.model} | [${c.title}](${c.url}) | ${c.date} |`));
L.push('', '## Trả lời nhanh', '', '**' + txt(qa.querySelector('h2')) + '**', '');
qa.querySelectorAll('p, li').forEach((x) => L.push((x.tagName === 'LI' ? '- ' : '') + txt(x), ''));
L.push('## Cẩm nang (' + guides.length + ')', '', '| Bài | Ngày đăng |', '|---|---|');
guides.forEach((x) => L.push(`| [${x.title}](${x.url}) | ${x.date} |`));
L.push('', '## FAQ (' + faqs.length + ')', '');
faqs.forEach((f) => L.push('**' + f.q + '**', '', f.a, ''));
fs.writeFileSync(path.join(out, '01_Noi_dung_Bi_gam_VinFast.md'), L.join('\n'));

// ---- 04 ----
const csv = (v) => '"' + String(v ?? '').replace(/"/g, '""') + '"';
const rows = [['content_type', 'model', 'group', 'status', 'title', 'url', 'published', 'image', 'source']];
models.forEach((m) => rows.push(['model', m.name, m.group, m.status, '', m.url, '', m.img, m.status === 'Có hồ sơ' ? 'trang dòng xe preview' : '']));
cases.forEach((c) => rows.push(['case', c.model, '', 'đã đăng', c.title, c.url, c.date, '', 'auto365.vn (khối case trang VF3 production)']));
guides.forEach((x) => rows.push(['guide', '', '', 'đã đăng', x.title, x.url, x.date, '', 'auto365.vn (khối cẩm nang trang VF3 production)']));
fs.writeFileSync(path.join(out, '04_Master_Data_Bi_gam_VinFast.csv'), '﻿' + rows.map((r) => r.map(csv).join(',')).join('\n') + '\n');

console.log('exported', out, { sha: sha(html).slice(0, 12), models: models.length, cases: cases.length, guides: guides.length, faqs: faqs.length });
