const fs = require('fs');
const html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const faqStart = html.indexOf('<div class="faq-grid" id="faq-grid">');
const faqEnd = html.indexOf('</div>', html.lastIndexOf('</details>', faqStart + 10000));
const faqHTML = html.substring(faqStart, faqEnd);

const questions = faqHTML.match(/<summary>.*?<\/summary>/g);
if (questions) {
    console.log("Total visible FAQs:", questions.length);
    questions.forEach(q => console.log(q.replace(/<[^>]+>/g, '')));
}
