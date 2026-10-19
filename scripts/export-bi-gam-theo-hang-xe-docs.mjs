// Xuất bộ bàn giao tự động cho trang bi-gam/theo-hang-xe:
//   docs/bi-gam-theo-hang-xe/01_Noi_dung_Bi_gam_theo_hang_xe.md  (nội dung hiển thị + SHA-256)
//   docs/bi-gam-theo-hang-xe/04_Master_Data_Bi_gam_theo_hang_xe.csv (dòng xe, case, bài tư vấn, nguồn hãng)
// Chạy sau build: node scripts/export-bi-gam-theo-hang-xe-docs.mjs
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { JSDOM } from 'jsdom';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/(\w:)/, '$1')), '..');
const dir = path.join(root, 'auto365/bi-gam/theo-hang-xe');
const out = path.join(root, 'docs/bi-gam-theo-hang-xe');
fs.mkdirSync(out, { recursive: true });
const html = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');
const src = fs.readFileSync(path.join(dir, 'content-src.html'), 'utf8');
const sha = (x) => crypto.createHash('sha256').update(x).digest('hex');
const d = new JSDOM(html).window.document;
const main = d.querySelector('main');
const t = (el) => (el ? el.textContent.replace(/\s+/g, ' ').trim() : '');
const upd = (src.match(/class="bght-upd">Cập nhật <time datetime="([0-9-]+)"/) || [])[1];

// ---- dữ liệu từ content-src ----
const lit = (name, re) => Function('return ' + src.match(re)[1])();
const CA = JSON.parse(src.match(/var CA=(.*);\n/)[1]);
const LINEUP = lit('LINEUP', /var LINEUP=(\{[\s\S]*?\});/);
const GUIDE = lit('GUIDE', /var GUIDE=(\{[^\n]*?\});/);
const INTRO = lit('INTRO', /var INTRO=(\{[^\n]*\});\n/);
const ISRC = lit('ISRC', /var ISRC=(\{[^\n]*\});\n/);
const nz = (x) => x.toLowerCase().replace(/[\s-]/g, '');

// ---- 01 nội dung ----
const L = [];
L.push('# 01 — Nội dung trang Bi gầm theo hãng xe', '');
L.push('| Trường | Giá trị |', '|---|---|');
L.push('| URL preview | https://preview-365group.pages.dev/bi-gam/theo-hang-xe/ |');
L.push('| Canonical | ' + d.querySelector('link[rel=canonical]').href + ' |');
L.push('| Title | ' + t(d.querySelector('title')) + ' |');
L.push('| Meta description | ' + d.querySelector('meta[name=description]').content + ' |');
L.push('| Ngày cập nhật (dateModified) | ' + upd + ' |');
L.push('| SHA-256 index.html | `' + sha(html) + '` |');
L.push('| SHA-256 content-src.html | `' + sha(src) + '` |');
L.push('| Xuất lúc | ' + new Date().toISOString().slice(0, 10) + ' (tự động, `scripts/export-bi-gam-theo-hang-xe-docs.mjs`) |', '');
L.push('## H1 và sapo', '', '**' + t(main.querySelector('h1')) + '**', '', t(main.querySelector('.bght-lead')), '', t(main.querySelector('.bght-upd')), '');
L.push('## Các khối (theo thứ tự hiển thị)', '');
[...main.querySelectorAll('h2')].filter((h) => !h.closest('dialog')).forEach((h, i) => L.push(i + 1 + '. ' + t(h)));
L.push('', '## Vì sao chọn Auto365', '');
main.querySelectorAll('.bw-card').forEach((c) => L.push('- **' + t(c.querySelector('h3')) + '** — ' + t(c.querySelector('p'))));
L.push('', '## Quy trình', '');
main.querySelectorAll('.bght-step').forEach((s) => L.push('- ' + t(s.querySelector('i')) + '. **' + t(s.querySelector('b')) + '** — ' + t(s.querySelector('small'))));
L.push('', '## FAQ (khớp FAQPage)', '');
main.querySelectorAll('.bf-list details').forEach((q) => L.push('**' + t(q.querySelector('summary')) + '**', '', t(q).replace(t(q.querySelector('summary')), '').trim(), ''));
L.push('## Giới thiệu hãng (hiện khi chọn hãng)', '');
Object.keys(INTRO).forEach((b) => L.push('- **' + b + '** — ' + INTRO[b] + ' _Nguồn: ' + (ISRC[b] || 'các mẫu từng phân phối chính hãng tại Việt Nam, Auto365 tổng hợp') + '_'));
L.push('', '## Số liệu', '', `- Hãng: ${Object.keys(LINEUP).length} · Dòng xe: ${Object.values(LINEUP).flat().length} · Case: ${CA.length} · Bài tư vấn theo dòng xe: ${Object.keys(GUIDE).length} · Thẻ cẩm nang: ${main.querySelectorAll('.bght-guide').length}`);
fs.writeFileSync(path.join(out, '01_Noi_dung_Bi_gam_theo_hang_xe.md'), L.join('\n') + '\n');

// ---- 04 master data ----
const q = (x) => '"' + String(x ?? '').replace(/"/g, '""') + '"';
const R = [['Loại', 'Hãng', 'Dòng xe / Tiêu đề', 'Có ảnh thẻ', 'Số case', 'URL', 'Ngày đăng', 'Nguồn / ghi chú']];
for (const b in LINEUP) for (const [m, img] of LINEUP[b]) {
  const n = CA.filter((c) => c[0] === b && nz(c[2] + c[3]).includes(nz(m))).length;
  R.push(['Dòng xe', b, m, img ? 'Có' : 'Logo hãng', n, GUIDE[m] ? 'https://auto365.vn/' + GUIDE[m] : '', '', ISRC[b] || 'Mẫu từng phân phối tại VN']);
}
CA.forEach((c) => R.push(['Case', c[0], c[2], '', '', 'https://auto365.vn/' + c[3], c[5], 'Bài đã đăng auto365.vn']));
main.querySelectorAll('.bght-guide').forEach((g) => R.push(['Cẩm nang', '', t(g.querySelector('h3')), '', '', g.href, g.querySelector('time')?.getAttribute('datetime') || '', 'Bài đã đăng auto365.vn']));
fs.writeFileSync(path.join(out, '04_Master_Data_Bi_gam_theo_hang_xe.csv'), '﻿' + R.map((r) => r.map(q).join(',')).join('\n') + '\n');
console.log('01 + 04 ok · sha', sha(html).slice(0, 12), '· rows', R.length - 1);
