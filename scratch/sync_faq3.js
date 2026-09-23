const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const faqStart = html.indexOf('<div class="faq-grid" id="faq-grid">');
const faqEnd = html.indexOf('</div>', html.lastIndexOf('</details>', faqStart + 10000));
const faqHTML = html.substring(faqStart, faqEnd);

const questions = [];
const regex = /<details[^>]*>\s*<summary>(.*?)<\/summary>\s*<div[^>]*>\s*(.*?)\s*<\/div>\s*<\/details>/gs;
let match;
while ((match = regex.exec(faqHTML)) !== null) {
    let q = match[1].replace(/<[^>]+>/g, '').trim();
    let a = match[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    questions.push({
        "@type": "Question",
        "name": q,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": a
        }
    });
}

const jsonldStart = html.indexOf('<script type="application/ld+json">') + '<script type="application/ld+json">'.length;
const jsonldEnd = html.indexOf('</script>', jsonldStart);
const data = JSON.parse(html.substring(jsonldStart, jsonldEnd));

let faqIndex = data['@graph'].findIndex(item => item["@type"] === "FAQPage");
if (faqIndex > -1) {
    data['@graph'][faqIndex].mainEntity = questions;
}

html = html.substring(0, jsonldStart) + JSON.stringify(data) + html.substring(jsonldEnd);
fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
console.log('FAQ Schema synced with ' + questions.length + ' questions.');
