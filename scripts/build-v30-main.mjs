// One-off: transform bi-led-x-light-v30-ultra/index.html (standalone) → main.html (shell-ready).
// Sau khi chạy: node scripts/build-pages.mjs sẽ merge main.html + _shell/* → index.html production-like.
//
// Việc:
//  - Strip .topbar, <nav class="nav">, .mobilebar, <a class="skip-link">
//  - Chèn 5 shell markers: head-shared, header, footer, floating, scripts
//  - Scope CSS: prefix bare element selectors (body/a/section/h1..h3/p/table/th/td/main/button/input/select) với .pillar-v30-ultra
//  - Remove global reset (*{...}, html{scroll-behavior}, body{...}) — production đã có
//  - Rename .btn → .pv-btn, .badge → .pv-badge để không đụng Bootstrap
//  - Thêm class pillar-v30-ultra vào <main>
//
// KHÔNG dùng cheerio cho phần CSS transform (cheerio không parse CSS); dùng regex có kiểm soát.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PILLAR_DIR = path.resolve(__dirname, '..', 'auto365', 'bi-led-x-light-v30-ultra');
const SRC = path.join(PILLAR_DIR, 'index-src.html');
const OUT = path.join(PILLAR_DIR, 'main.html');

let html = fs.readFileSync(SRC, 'utf8');
const origLen = html.length;

// Safeguard: nguồn phải là standalone chưa qua build-pages. Nếu đã có @shell markers hoặc
// BUILT banner thì đây là output cũ bị dùng nhầm làm source → dừng để tránh double-transform.
if (/@shell:[a-z-]+/.test(html) || /<!--\s*BUILT from main\.html/.test(html)) {
  throw new Error(`Source ${SRC} đã có @shell markers hoặc BUILT banner — đây là build output, không phải standalone. Aborting để tránh double-transform.`);
}

// ─── 1. HTML shell adaptations ─────────────────────────────────────────────
// Toàn bộ <html>…</head> → replaced by new head skeleton + preserved page-specific meta.

// Extract page-specific meta block (từ <title> đến trước </head>) để giữ lại
const headMatch = html.match(/<head>([\s\S]*?)<\/head>/);
if (!headMatch) throw new Error('Không tìm thấy <head>');
const oldHeadInner = headMatch[1];

// Bỏ các tag đã có trong shell head-shared (charset, viewport, favicon...)
// Giữ: title, meta description, meta robots, canonical, all og/twitter, JSON-LD, style
const keep = [];
const headLines = oldHeadInner.split(/(?=<)/); // split before each <
for (const line of headLines) {
  const t = line.trim();
  if (!t) continue;
  // Skip charset + viewport (shell có)
  if (/^<meta[^>]+charset=/i.test(t)) continue;
  if (/^<meta[^>]+name=["']viewport/i.test(t)) continue;
  keep.push(line);
}
const preservedHead = keep.join('').trim();

// Build new head
const newHead = `<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
  <!-- @shell:head-shared -->
  ${preservedHead}
</head>`;

html = html.replace(/<head>[\s\S]*?<\/head>/, newHead);

// ─── 2. Doctype + html tag ─────────────────────────────────────────────────
html = html.replace(
  /<!DOCTYPE html>\s*<html[^>]*>/i,
  `<!doctype html>\n<html lang="vi" data-build="network-v7-unified" data-release="preview">`
);

// ─── 3. Body: strip standalone header/footer/mobilebar/skip-link ───────────
// Remove skip-link
html = html.replace(/<a class="skip-link"[^>]*>[\s\S]*?<\/a>\s*/g, '');

// Remove the handoff gate comment (long one right after <body>) — keep body opener clean
// Match: <body><!-- HANDOFF GATE — ... --> and remove the comment
html = html.replace(/(<body>)(\s*<!--[\s\S]*?-->\s*)/, '$1\n<!-- @shell:header -->\n');

// Remove .topbar block
html = html.replace(/<div class="topbar">[\s\S]*?<\/div>\s*<\/div>\s*/, '');

// Remove <nav class="nav">…</nav> block (custom header nav)
html = html.replace(/<nav class="nav">[\s\S]*?<\/nav>\s*/, '');

// Remove .mobilebar <nav>
html = html.replace(/<nav aria-label="Liên hệ nhanh" class="mobilebar">[\s\S]*?<\/nav>\s*/, '');

// Wrap all pillar content (hero + trust + main) trong 1 scope container.
// .hero và .trust sibling của <main>, phải cùng chung parent để CSS scope apply.
html = html.replace(/(<header class="hero">)/, '<div class="pillar-v30-ultra">\n$1');
html = html.replace(/(<\/main>)/, '$1\n</div>');

// ─── 4. Insert shell markers before </body> ────────────────────────────────
html = html.replace(
  /(<\/main>)([\s\S]*?)(<\/body>)/,
  (_full, mainClose, between, bodyClose) => {
    // Between should still contain the <script> that binds coverage/passport/filter handlers.
    // Keep it as-is; shells go AFTER </main> and BEFORE the page's inline <script> so shell scripts (jQuery/Bootstrap) load first.
    return `${mainClose}\n<!-- @shell:footer -->\n<!-- @shell:floating -->\n<!-- @shell:scripts -->\n${between}${bodyClose}`;
  }
);

// ─── 5. Rename Bootstrap-conflicting classes in HTML ───────────────────────
// Duyệt qua từng class attribute, đổi token khớp chính xác — tránh regex greedy dính nhầm.
const CLASS_RENAME = {
  'btn': 'pv-btn',
  'btn-gold': 'pv-btn-gold',
  'btn-ghost': 'pv-btn-ghost',
  'btn-light': 'pv-btn-light',
  'badge': 'pv-badge',
};
html = html.replace(/class="([^"]+)"/g, (_m, cls) => {
  const words = cls.split(/\s+/).map(w => CLASS_RENAME[w] || w);
  return `class="${words.join(' ')}"`;
});

// ─── 6. CSS transform: scope + rename + strip resets ───────────────────────
html = html.replace(/<style>([\s\S]*?)<\/style>/, (_m, cssRaw) => {
  let css = cssRaw;

  // Rename class in CSS too
  css = css.replace(/\.btn\b/g, '.pv-btn')
           .replace(/\.pv-btn-gold\b/g, '.pv-btn-gold') // no-op safety
           .replace(/\.pv-btn-ghost\b/g, '.pv-btn-ghost')
           .replace(/\.pv-btn-light\b/g, '.pv-btn-light')
           .replace(/\.badge\b/g, '.pv-badge');

  // Strip global reset rules (production has them)
  css = css.replace(/\*\{[^}]*\}\s*/g, '');           // *{box-sizing:border-box}
  css = css.replace(/html\{[^}]*\}\s*/g, '');         // html{scroll-behavior:smooth}
  css = css.replace(/body\{[^}]*\}\s*/gs, '');        // body{margin:0;...}

  // Scope bare element/at-root selectors — prefix với .pillar-v30-ultra
  // Do this by processing rule-by-rule using a simple state machine.
  const scoped = scopeCSS(css, '.pillar-v30-ultra');
  return `<style>\n${scoped}\n</style>`;
});

fs.writeFileSync(OUT, html, 'utf8');
console.log(`✓ Wrote ${path.relative(process.cwd(), OUT)}`);
console.log(`  Source: ${origLen.toLocaleString()} bytes → main: ${html.length.toLocaleString()} bytes`);

// ─── Helpers ───────────────────────────────────────────────────────────────
function scopeCSS(css, scope) {
  // Split into rules while respecting nested {} in @media/@supports.
  // Approach: tokenize top-level rules. For @media/@keyframes/@supports/@font-face, recurse into inner rules.
  const out = [];
  let i = 0;
  while (i < css.length) {
    // Skip whitespace
    while (i < css.length && /\s/.test(css[i])) { out.push(css[i]); i++; }
    if (i >= css.length) break;
    // At-rule?
    if (css[i] === '@') {
      const atEnd = findAtRuleEnd(css, i);
      const block = css.slice(i, atEnd);
      // @media / @supports: scope inner
      if (/^@(media|supports|container)\b/.test(block)) {
        const braceOpen = block.indexOf('{');
        const prelude = block.slice(0, braceOpen + 1);
        const inner = block.slice(braceOpen + 1, block.length - 1);
        out.push(prelude);
        out.push('\n');
        out.push(scopeCSS(inner, scope));
        out.push('\n}');
      } else {
        // @keyframes / @font-face / @import — leave untouched
        out.push(block);
      }
      i = atEnd;
      continue;
    }
    // Normal rule: read selector list until '{'
    let braceStart = css.indexOf('{', i);
    if (braceStart === -1) break;
    const selectors = css.slice(i, braceStart);
    const braceEnd = findMatchingBrace(css, braceStart);
    const body = css.slice(braceStart, braceEnd + 1);
    const scopedSel = selectors
      .split(',')
      .map(s => s.trim())
      .filter(Boolean)
      .map(s => {
        // Skip :root, keep as-is
        if (s.startsWith(':root')) return s;
        // If selector already contains the scope class, leave
        if (s.includes(scope)) return s;
        // If selector starts with .pillar-v30-ultra descendant already, leave
        // Descendant scope: `.pillar-v30-ultra main`, `.pillar-v30-ultra .hero`, etc.
        return `${scope} ${s}`;
      })
      .join(',');
    out.push(scopedSel);
    out.push(body);
    i = braceEnd + 1;
  }
  return out.join('');
}

function findMatchingBrace(s, openIdx) {
  let depth = 0;
  for (let i = openIdx; i < s.length; i++) {
    if (s[i] === '{') depth++;
    else if (s[i] === '}') { depth--; if (depth === 0) return i; }
  }
  return -1;
}

function findAtRuleEnd(s, start) {
  // Find semicolon (no block) OR matching closing brace
  let i = start;
  while (i < s.length && s[i] !== ';' && s[i] !== '{') i++;
  if (s[i] === ';') return i + 1;
  if (s[i] === '{') {
    const close = findMatchingBrace(s, i);
    return close + 1;
  }
  return s.length;
}
