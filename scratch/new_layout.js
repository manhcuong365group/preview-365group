const fs = require('fs');
const file = 'auto365/bi-gam/vinfast-vf3/index.html';
let content = fs.readFileSync(file, 'utf8');

const data = JSON.parse(fs.readFileSync('auto365/bi-gam/vinfast-vf3/data/vf3.json', 'utf8'));
const articles = data.lien_quan;
const featured = articles[0];

let featuredHtml = '<article class="vf3lp-k-featured">' +
    '<div class="vf3lp-k-thumb"><span class="vf3lp-k-badge">C?m nang</span>' +
    '<a href="' + featured.url + '"><img src="' + featured.anh + '" alt="' + featured.tieu_de + '" loading="lazy" /></a></div>' +
    '<div class="vf3lp-k-content"><h3><a href="' + featured.url + '">' + featured.tieu_de + '</a></h3>' +
    '<p>' + featured.mo_ta + '</p>' +
    '<div class="vf3lp-k-meta"><svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" fill="none" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> 06/10/2026 09:00</div></div></article>';

let listHtml = '<div class="vf3lp-k-list">';
articles.slice(1).forEach(item => {
    let imgHtml = item.anh ? '<img src="' + item.anh + '" alt="' + item.tieu_de + '" loading="lazy" />' : '<div style="width:100%;height:100%;background:#e2e8f0;display:flex;align-items:center;justify-content:center;color:#64748b;font-size:12px;">No Image</div>';
    listHtml += '<article class="vf3lp-k-item"><div class="vf3lp-k-item-thumb"><a href="' + item.url + '">' + imgHtml + '</a></div>' +
    '<div class="vf3lp-k-item-content"><h4><a href="' + item.url + '">' + item.tieu_de + '</a></h4><p>' + item.mo_ta + '</p>' +
    '<div class="vf3lp-k-meta"><svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" fill="none" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> 05/10/2026 14:30</div></div></article>';
});
listHtml += '</div>';

const newLayoutHtml = '<div class="vf3lp-knowledge-layout">' + featuredHtml + listHtml + '</div>';

const newCss = '.vf3lp-knowledge-layout { display: grid; grid-template-columns: 1fr; gap: 24px; margin-top: 24px; }' +
'@media(min-width: 992px) { .vf3lp-knowledge-layout { grid-template-columns: 1fr 1fr; } }' +
'.vf3lp-k-featured { background: #fff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; }' +
'.vf3lp-k-thumb { position: relative; width: 100%; height: 280px; }' +
'.vf3lp-k-thumb img { width: 100%; height: 100%; object-fit: cover; }' +
'.vf3lp-k-badge { position: absolute; top: 16px; left: 16px; background: #dc2626; color: #fff; padding: 4px 12px; border-radius: 4px; font-size: 13px; font-weight: 700; z-index: 2; }' +
'.vf3lp-k-content { padding: 24px; }' +
'.vf3lp-k-content h3 { margin: 0 0 12px; font-size: 1.25rem; font-weight: 700; line-height: 1.4; }' +
'.vf3lp-k-content h3 a { color: #1e293b; text-decoration: none; }' +
'.vf3lp-k-content h3 a:hover { color: #2563eb; }' +
'.vf3lp-k-content p { margin: 0 0 16px; color: #64748b; font-size: 14px; line-height: 1.6; }' +
'.vf3lp-k-meta { display: flex; align-items: center; gap: 6px; color: #94a3b8; font-size: 13px; }' +
'.vf3lp-k-list { display: flex; flex-direction: column; gap: 16px; padding-right: 8px; max-height: 480px; overflow-y: auto; }' +
'.vf3lp-k-list::-webkit-scrollbar { width: 6px; }' +
'.vf3lp-k-list::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }' +
'.vf3lp-k-item { display: flex; gap: 16px; padding-bottom: 16px; border-bottom: 1px solid #e2e8f0; }' +
'.vf3lp-k-item:last-child { border-bottom: none; padding-bottom: 0; }' +
'.vf3lp-k-item-thumb { flex-shrink: 0; width: 160px; height: 100px; border-radius: 8px; overflow: hidden; }' +
'.vf3lp-k-item-thumb img { width: 100%; height: 100%; object-fit: cover; }' +
'.vf3lp-k-item-content h4 { margin: 0 0 8px; font-size: 1rem; font-weight: 600; line-height: 1.4; }' +
'.vf3lp-k-item-content h4 a { color: #1e293b; text-decoration: none; }' +
'.vf3lp-k-item-content h4 a:hover { color: #2563eb; }' +
'.vf3lp-k-item-content p { margin: 0 0 8px; color: #64748b; font-size: 13px; line-height: 1.5; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }';

const sectionRegex = /(<div class="vf3lp-knowledge-grid">)([\s\S]*?)(<\/div>\s*<\/div>\s*<\/section>)/;
if (sectionRegex.test(content)) {
    content = content.replace(sectionRegex, newLayoutHtml + '\n</div>\n</section>');
}

const oldCssRegex = /\.vf3lp-knowledge-grid[\s\S]*?a:hover\s*\{\s*text-decoration:\s*underline;\s*\}/;
if (oldCssRegex.test(content)) {
    content = content.replace(oldCssRegex, newCss);
} else {
    content = content.replace('</style>', newCss + '\n</style>');
}

const headerRegex = /<h2 class="vf3lp-h2"(.*?)>C?m nang nâng c?p bi g?m VF3<\/h2>/;
if (headerRegex.test(content)) {
    content = content.replace(/<div class="vf3lp-head">([\s\S]*?)<\/h2>([\s\S]*?)<\/div>/, '<div class="vf3lp-head" style="display:flex;justify-content:space-between;align-items:flex-end;"><div></h2></div><a href="https://v2.auto365.vn/tin-tuc" style="color:#dc2626;font-weight:600;text-decoration:none;font-size:14px;display:flex;align-items:center;gap:4px;">Xem t?t c? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a></div>');
}

fs.writeFileSync(file, content, 'utf8');
console.log('Done');
