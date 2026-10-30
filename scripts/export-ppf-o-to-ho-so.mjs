// Xuất bản HTML đọc được của hồ sơ 01–04 hub PPF lên preview (/ppf-o-to/ho-so/) cho reviewer
// không mở được .md trên GitHub. Chạy sau khi đã đồng bộ SHA trong docs/ppf-o-to:
//   node scripts/export-ppf-o-to-ho-so.mjs
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/(\w:)/, '$1')), '..');
const page = path.join(root, 'auto365/ppf-o-to');
const out = path.join(root, 'docs/ppf-o-to');
const hoSo = path.join(page, 'ho-so');
fs.mkdirSync(hoSo, { recursive: true });
const sha = (s) => crypto.createHash('sha256').update(String(s).replace(/\r\n/g, '\n')).digest('hex');
const html = fs.readFileSync(path.join(page, 'index.html'), 'utf8');

// Bản HTML đọc được của 01–05 (một số công cụ kiểm chặn/không mở .md/.csv) + trang mục lục ho-so/
const escH = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const inl = (s) => escH(s.replace(/\\\|/g, '|'))
  .replace(/`([^`]+)`/g, '<code>$1</code>')
  .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
  .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (m, t, u) => `<a href="${u.replace(/\.(md|csv)$/, '.html')}">${t}</a>`);
const cells = (l) => l.trim().replace(/^\||\|$/g, '').split(/(?<!\\)\|/).map((c) => c.trim());
function md2html(md) {
  const L = md.replace(/\r\n/g, '\n').split('\n'); const o = []; let i = 0;
  while (i < L.length) {
    const l = L[i];
    if (/^\s*$/.test(l)) { i++; continue; }
    let m;
    if ((m = l.match(/^(#{1,6})\s+(.*)/))) { o.push(`<h${m[1].length}>${inl(m[2])}</h${m[1].length}>`); i++; continue; }
    if (/^```/.test(l)) { const b = []; i++; while (i < L.length && !/^```/.test(L[i])) b.push(L[i++]); i++; o.push(`<pre>${escH(b.join('\n'))}</pre>`); continue; }
    if (/^\s*\|/.test(l)) { const t = []; while (i < L.length && /^\s*\|/.test(L[i])) t.push(L[i++]);
      const rows = t.filter((r) => !/^\s*\|[\s:|-]+\|\s*$/.test(r)).map(cells);
      o.push('<div class="tw"><table><thead><tr>' + rows[0].map((c) => `<th>${inl(c)}</th>`).join('') + '</tr></thead><tbody>' + rows.slice(1).map((r) => '<tr>' + r.map((c) => `<td>${inl(c)}</td>`).join('') + '</tr>').join('') + '</tbody></table></div>'); continue; }
    if (/^\s*([-*]|\d+\.)\s+/.test(l)) { const ord = /^\s*\d+\./.test(l); const it = []; while (i < L.length && /^\s*([-*]|\d+\.)\s+/.test(L[i])) it.push(L[i++].replace(/^\s*([-*]|\d+\.)\s+/, ''));
      o.push(`<${ord ? 'ol' : 'ul'}>` + it.map((x) => `<li>${inl(x.replace(/^\[( |x)\]\s*/, (mm, c) => (c === 'x' ? '☑ ' : '☐ ')))}</li>`).join('') + `</${ord ? 'ol' : 'ul'}>`); continue; }
    if (/^>\s?/.test(l)) { const q = []; while (i < L.length && /^>\s?/.test(L[i])) q.push(L[i++].replace(/^>\s?/, '')); o.push(`<blockquote>${inl(q.join(' '))}</blockquote>`); continue; }
    const p = []; while (i < L.length && !/^\s*$/.test(L[i]) && !/^(#|\s*\||```|\s*([-*]|\d+\.)\s|>)/.test(L[i])) p.push(L[i++]); o.push(`<p>${inl(p.join(' '))}</p>`);
  }
  return o.join('\n');
}
function csv2html(t) {
  const rows = []; let r = [], c = '', q = false; t = t.replace(/^﻿/, '').replace(/\r\n/g, '\n');
  for (let k = 0; k < t.length; k++) { const ch = t[k];
    if (q) { if (ch === '"' && t[k + 1] === '"') { c += '"'; k++; } else if (ch === '"') q = false; else c += ch; }
    else if (ch === '"') q = true; else if (ch === ',') { r.push(c); c = ''; } else if (ch === '\n') { r.push(c); rows.push(r); r = []; c = ''; } else c += ch; }
  if (c || r.length) { r.push(c); rows.push(r); }
  return '<div class="tw"><table><thead><tr>' + rows[0].map((x) => `<th>${escH(x)}</th>`).join('') + '</tr></thead><tbody>' + rows.slice(1).map((x) => '<tr>' + x.map((y) => `<td>${escH(y)}</td>`).join('') + '</tr>').join('') + '</tbody></table></div>';
}
const pageSha = sha(html);
const shell = (title, body) => `<!DOCTYPE html><html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>${escH(title)} — Hồ sơ Hub PPF ô tô</title><style>body{font:15px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;color:#1d2329;background:#fff;max-width:1100px;margin:0 auto;padding:16px}h1{font-size:24px}h2{font-size:19px;margin-top:28px;border-top:1px solid #e3e6ea;padding-top:16px}h3{font-size:16px}.tw{overflow-x:auto}table{border-collapse:collapse;width:100%;font-size:13.5px;margin:10px 0}th,td{border:1px solid #d8dde2;padding:6px 8px;text-align:left;vertical-align:top}th{background:#f3f5f7}code{background:#f3f5f7;padding:1px 4px;border-radius:3px;font-size:12.5px;word-break:break-all}pre{background:#f3f5f7;padding:10px;overflow-x:auto}blockquote{border-left:3px solid #d71920;margin:10px 0;padding:4px 12px;color:#444}.meta{font-size:13px;color:#55606b;background:#f7f8fa;border:1px solid #e3e6ea;border-radius:8px;padding:10px 12px}a{color:#b5121b}.u3{border:2px solid #1f8a4c;border-radius:10px;padding:12px 16px;margin:16px 0;background:#f3faf6}.u3 p{margin:6px 0}.u3t{font-weight:700;font-size:17px;color:#1f8a4c}.u3s,.u3n{font-size:13px;color:#55606b}.u3k{font-weight:700}.u3 b{color:#1f8a4c}</style></head><body><p class="meta">Bản HTML xuất tự động từ hồ sơ nguồn. SHA-256 trang <code>index.html</code> (nội dung LF, đúng byte Cloudflare phục vụ): <code>${pageSha}</code> · <a href="./">Mục lục hồ sơ</a> · <a href="../">Trang hub</a></p>\n${body}\n</body></html>`;
const u3 = '<div class="u3"><p class="u3t">PHIẾU NGHIỆM THU U3 – ĐÃ DUYỆT</p><p class="u3s">Hub PPF ô tô · V1.9 · bản pk56 · 30/10/2026</p><div class="tw"><table><thead><tr><th>Nhóm</th><th>Kết quả</th></tr></thead><tbody><tr><td>Feedback pk54 (PPF54-01 → 04)</td><td><b>PASS – ĐÃ ĐÓNG</b></td></tr><tr><td>U1 – Đa thiết bị</td><td><b>PASS</b></td></tr><tr><td>U2 – Tương tác (giá, form, lead, CRM, tracking)</td><td><b>PASS</b></td></tr><tr><td>U3 – Bàn giao (hồ sơ, source, tài nguyên)</td><td><b>PASS – ĐÃ DUYỆT</b></td></tr><tr><td>Content · SEO · GEO</td><td><b>PASS</b> theo nghiệm thu</td></tr></tbody></table></div><p>Tác giả: Team Content Auto365 · Kiểm duyệt nội dung: Đặng Minh Hoàng · Rà soát SEO / nghiệm thu U1–U3: Ngọc Trân – SEO</p><p class="u3k">Trạng thái cuối: ĐÃ DUYỆT – ĐÓNG U3 V1.9 (30/10/2026)</p><p class="u3n">Chi tiết: <a href="04_Phieu_duyet_Hub_PPF_o_to.html">04 — Phiếu duyệt</a>, mục "Phiếu nghiệm thu U3". Phạm vi demo/hồ sơ pk56; không thay cho kiểm index, Core Web Vitals hay kiểm production.</p></div>';
const docs = fs.readdirSync(out).filter((n) => /\.md$/.test(n)).sort();
for (const n of docs) {
  const t = fs.readFileSync(path.join(out, n), 'utf8');
  fs.writeFileSync(path.join(hoSo, n.replace(/\.md$/, '.html')), shell(n, md2html(t)));
}
fs.writeFileSync(path.join(hoSo, 'index.html'), shell('Mục lục', '<h1>Hồ sơ bàn giao — Hub PPF ô tô</h1>' + u3 + '<h2>Tài liệu</h2><ul>' + docs.map((n) => `<li><a href="${n.replace(/\.md$/, '.html')}">${escH(n.replace(/\.md$/, ''))}</a></li>`).join('') + '</ul><h2>Cách kiểm SHA</h2><pre>curl -s https://preview-365group.pages.dev/ppf-o-to/ | sha256sum</pre><p>Kết quả phải trùng SHA ở trên và trong tài liệu 01–04.</p>'));
console.log('ho-so', docs.length, pageSha.slice(0, 8));
