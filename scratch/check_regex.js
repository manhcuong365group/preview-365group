const fs = require('fs');
const html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const faqStart = html.indexOf('<div class="faq-grid" id="faq-grid">');
const faqEnd = html.indexOf('</section>', faqStart);
const faqHTML = html.substring(faqStart, faqEnd);
console.log(faqHTML.substring(0, 500));
const questions = [];
const regex = /<details[^>]*>\s*<summary[^>]*>([\s\S]*?)<\/summary>\s*<div[^>]*>([\s\S]*?)<\/div>\s*<\/details>/g;
let match;
while ((match = regex.exec(faqHTML)) !== null) {
    let q = match[1].replace(/<[^>]+>/g, '').trim();
    questions.push(q);
}
console.log('Found:', questions.length);
