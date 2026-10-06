const fs = require('fs');
const file = 'auto365/bi-gam/vinfast-vf3/index.html';
let content = fs.readFileSync(file, 'utf8');

const data = JSON.parse(fs.readFileSync('auto365/bi-gam/vinfast-vf3/data/vf3.json', 'utf8'));
const articles = data.lien_quan;

// Featured article (first one)
const featured = articles[0];
let featuredHtml = \
  <article class=\x22vf3lp-k-featured\x22>
    <div class=\x22vf3lp-k-thumb\x22>
      <span class=\x22vf3lp-k-badge\x22>C?m nang</span>
      <a href=\x22\\x22><img src=\x22\\x22 alt=\x22\\x22 loading=\x22lazy\x22 /></a>
    </div>
    <div class=\x22vf3lp-k-content\x22>
      <h3><a href=\x22\\x22>\</a></h3>
      <p>\</p>
      <div class=\x22vf3lp-k-meta\x22>
        <svg viewBox=\x220 0 24 24\x22 width=\x2214\x22 height=\x2214\x22 stroke=\x22currentColor\x22 fill=\x22none\x22 stroke-width=\x222\x22><circle cx=\x2212\x22 cy=\x2212\x22 r=\x2210\x22/><polyline points=\x2212 6 12 12 16 14\x22/></svg>
        06/10/2026 09:00
      </div>
    </div>
  </article>
\;

// List articles
let listHtml = '<div class=\x22vf3lp-k-list\x22>';
articles.slice(1).forEach(item => {
    let imgHtml = item.anh ? \<img src=\x22\\x22 alt=\x22\\x22 loading=\x22lazy\x22 />\ : \<div style=\x22width:100%;height:100%;background:#e2e8f0;display:flex;align-items:center;justify-content:center;color:#64748b;font-size:12px;\x22>No Image</div>\;
    listHtml += \
    <article class=\x22vf3lp-k-item\x22>
      <div class=\x22vf3lp-k-item-thumb\x22>
        <a href=\x22\\x22>\</a>
      </div>
      <div class=\x22vf3lp-k-item-content\x22>
        <h4><a href=\x22\\x22>\</a></h4>
        <p>\</p>
        <div class=\x22vf3lp-k-meta\x22>
          <svg viewBox=\x220 0 24 24\x22 width=\x2214\x22 height=\x2214\x22 stroke=\x22currentColor\x22 fill=\x22none\x22 stroke-width=\x222\x22><circle cx=\x2212\x22 cy=\x2212\x22 r=\x2210\x22/><polyline points=\x2212 6 12 12 16 14\x22/></svg>
          05/10/2026 14:30
        </div>
      </div>
    </article>
    \;
});
listHtml += '</div>';

const newLayoutHtml = \<div class=\x22vf3lp-knowledge-layout\x22>\\</div>\;

// CSS for the new layout
const newCss = \
.vf3lp-knowledge-layout { display: grid; grid-template-columns: 1fr; gap: 24px; margin-top: 24px; }
@media(min-width: 992px) { .vf3lp-knowledge-layout { grid-template-columns: 1fr 1fr; } }
.vf3lp-k-featured { background: #fff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; }
.vf3lp-k-thumb { position: relative; width: 100%; height: 280px; }
.vf3lp-k-thumb img { width: 100%; height: 100%; object-fit: cover; }
.vf3lp-k-badge { position: absolute; top: 16px; left: 16px; background: #dc2626; color: #fff; padding: 4px 12px; border-radius: 4px; font-size: 13px; font-weight: 700; z-index: 2; }
.vf3lp-k-content { padding: 24px; }
.vf3lp-k-content h3 { margin: 0 0 12px; font-size: 1.25rem; font-weight: 700; line-height: 1.4; }
.vf3lp-k-content h3 a { color: #1e293b; text-decoration: none; }
.vf3lp-k-content h3 a:hover { color: #2563eb; }
.vf3lp-k-content p { margin: 0 0 16px; color: #64748b; font-size: 14px; line-height: 1.6; }
.vf3lp-k-meta { display: flex; align-items: center; gap: 6px; color: #94a3b8; font-size: 13px; }

.vf3lp-k-list { display: flex; flex-direction: column; gap: 16px; padding-right: 8px; max-height: 480px; overflow-y: auto; }
.vf3lp-k-list::-webkit-scrollbar { width: 6px; }
.vf3lp-k-list::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
.vf3lp-k-item { display: flex; gap: 16px; padding-bottom: 16px; border-bottom: 1px solid #e2e8f0; }
.vf3lp-k-item:last-child { border-bottom: none; padding-bottom: 0; }
.vf3lp-k-item-thumb { flex-shrink: 0; width: 160px; height: 100px; border-radius: 8px; overflow: hidden; }
.vf3lp-k-item-thumb img { width: 100%; height: 100%; object-fit: cover; }
.vf3lp-k-item-content h4 { margin: 0 0 8px; font-size: 1rem; font-weight: 600; line-height: 1.4; }
.vf3lp-k-item-content h4 a { color: #1e293b; text-decoration: none; }
.vf3lp-k-item-content h4 a:hover { color: #2563eb; }
.vf3lp-k-item-content p { margin: 0 0 8px; color: #64748b; font-size: 13px; line-height: 1.5; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
\;

// Replace old grid with new layout
const sectionRegex = /(<div class=\x22vf3lp-knowledge-grid\x22>)([\s\S]*?)(<\/div>\s*<\/div>\s*<\/section>)/;
if (sectionRegex.test(content)) {
    content = content.replace(sectionRegex, newLayoutHtml + '\n</div>\n</section>');
}

// Inject new CSS (replace old .vf3lp-knowledge-grid CSS)
const oldCssRegex = /\.vf3lp-knowledge-grid[\s\S]*?a:hover\s*\{\s*text-decoration:\s*underline;\s*\}/;
if (oldCssRegex.test(content)) {
    content = content.replace(oldCssRegex, newCss);
} else {
    // If old css not found, just append to </style>
    content = content.replace('</style>', newCss + '\n</style>');
}

// Also update the header to have 'Xem t?t c?' button if requested, but let's just do the layout first.
const headerRegex = /<h2 class=\x22vf3lp-h2\x22(.*?)>C?m nang nâng c?p bi g?m VF3<\/h2>/;
if (headerRegex.test(content)) {
    // Add flex between title and xem tat ca
    content = content.replace(/<div class=\x22vf3lp-head\x22>([\s\S]*?)<\/h2>([\s\S]*?)<\/div>/, \<div class=\x22vf3lp-head\x22 style=\x22display:flex;justify-content:space-between;align-items:flex-end;\x22><div>\</h2>\</div><a href=\x22https://v2.auto365.vn/tin-tuc\x22 style=\x22color:#dc2626;font-weight:600;text-decoration:none;font-size:14px;display:flex;align-items:center;gap:4px;\x22>Xem t?t c? <svg width=\x2216\x22 height=\x2216\x22 viewBox=\x220 0 24 24\x22 fill=\x22none\x22 stroke=\x22currentColor\x22 stroke-width=\x222\x22><path d=\x22M5 12h14M12 5l7 7-7 7\x22/></svg></a></div>\);
}

fs.writeFileSync(file, content, 'utf8');
console.log('Applied new knowledge layout');

