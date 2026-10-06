const fs = require('fs');
const file = 'auto365/bi-gam/vinfast-vf3/index.html';
let content = fs.readFileSync(file, 'utf8');

// Update knowledge links to be more specific hub links if they aren't already
content = content.replace('href=\x22https://v2.auto365.vn/tin-tuc\x22', 'href=\x22https://v2.auto365.vn/kinh-nghiem-do-den\x22');

// Inject internal links in some intro text if possible
// We will look for <p class=\x22vf3lp-sub\x22> or similar intro text to add links to hub categories
const introRegex = /(<h1[^>]*>[\s\S]*?<\/h1>[\s\S]*?)<p[^>]*class=\x22vf3lp-sub\x22[^>]*>([\s\S]*?)<\/p>/;
if (introRegex.test(content)) {
    let text = RegExp.;
    // Link 'bi g?m' to category
    text = text.replace(/bi g?m/i, '<a href=\x22https://auto365.vn/do-den-bi-gam-o-to\x22 style=\x22color: inherit; text-decoration: underline;\x22 title=\x22Ð? bi g?m ô tô\x22>bi g?m</a>');
    // Link 'Auto365' to home or hub
    text = text.replace(/Auto365/, '<a href=\x22https://auto365.vn\x22 style=\x22color: inherit; text-decoration: underline;\x22>Auto365</a>');
    content = content.replace(introRegex, '<p class=\x22vf3lp-sub\x22>' + text + '</p>');
}

fs.writeFileSync(file, content, 'utf8');
console.log('Added backlinks');
