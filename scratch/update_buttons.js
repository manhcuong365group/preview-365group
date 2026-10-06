const fs = require('fs');
const path = 'auto365/bi-gam/vinfast-vf3/index.html';
let content = fs.readFileSync(path, 'utf8');

const oldButtons = `<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">
          <a href="tel:0365365911" style="background: #dc2626; color: #fff; padding: 10px; text-align: center; border-radius: 8px; text-decoration: none; font-weight: 500; font-size: 0.875rem; display: flex; align-items: center; justify-content: center; gap: 6px;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> Gọi</a>
          <a href="https://zalo.me/0365365911" target="_blank" style="border: 1px solid #0068ff; color: #0068ff; padding: 10px; text-align: center; border-radius: 8px; text-decoration: none; font-weight: 500; font-size: 0.875rem; display: flex; align-items: center; justify-content: center; gap: 6px;">Zalo</a>
          <a href="#" style="border: 1px solid #e2e8f0; color: #334155; padding: 10px; text-align: center; border-radius: 8px; text-decoration: none; font-weight: 500; font-size: 0.875rem; display: flex; align-items: center; justify-content: center; gap: 6px;">Maps</a>
        </div>`;

const newButtons = `<div style="display: grid; grid-template-columns: minmax(max-content, 1.2fr) 1fr 1fr; gap: 12px;">
          <a href="tel:0365365911" style="background: #dc2626; color: #fff; padding: 10px; text-align: center; border-radius: 8px; text-decoration: none; font-weight: 500; font-size: 0.875rem; display: flex; align-items: center; justify-content: center; gap: 6px;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> Gọi 0365 365 911</a>
          <a href="https://zalo.me/0365365911" target="_blank" style="border: 1px solid #0068ff; color: #0068ff; padding: 10px; text-align: center; border-radius: 8px; text-decoration: none; font-weight: 500; font-size: 0.875rem; display: flex; align-items: center; justify-content: center; gap: 6px;"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M21.815 10.638C21.815 6.42 17.587 3 12.355 3 7.124 3 2.895 6.42 2.895 10.638c0 2.228 1.157 4.237 2.983 5.568.17.126.24.348.175.547l-.926 2.853c-.116.357.25.68.583.513l3.24-1.632c.162-.08.35-.094.522-.036 1.053.35 2.217.538 3.428.538 5.232 0 9.46-3.42 9.46-7.638z"/></svg> Zalo tư vấn</a>
          <a href="#" style="border: 1px solid #dc2626; color: #dc2626; padding: 10px; text-align: center; border-radius: 8px; text-decoration: none; font-weight: 500; font-size: 0.875rem; display: flex; align-items: center; justify-content: center; gap: 6px;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> Google Maps</a>
        </div>`;

if (content.includes(oldButtons)) {
    content = content.replace(oldButtons, newButtons);
    fs.writeFileSync(path, content, 'utf8');
    console.log("Replaced buttons");
} else {
    // try removing whitespace
    const oldButtonsRegex = /<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">[\s\S]*?<\/div>/;
    const match = content.match(oldButtonsRegex);
    if (match) {
        content = content.replace(match[0], newButtons);
        fs.writeFileSync(path, content, 'utf8');
        console.log("Replaced buttons via regex");
    } else {
        console.log("Buttons not found");
    }
}
