const fs = require('fs');

const html = fs.readFileSync('auto365/bi-gam/index.html', 'utf8');
const faqStart = html.indexOf('<section class="section" id="faq">');
const faqEnd = html.indexOf('</section>', faqStart);
const faq = html.slice(faqStart, faqEnd);
const mustContain = [
  'Có nên chọn bi gầm công suất cao nhất?',
  'Làm sao biết xe có lắp vừa bi gầm?',
  'Lắp bi gầm có ảnh hưởng hệ thống điện không?',
  'Case xe thật có đảm bảo xe cùng đời sẽ lắp giống nhau?',
  'Trang này khác “đèn gầm dạng rời” ở đâu?'
];
const missing = mustContain.filter((needle) => !faq.includes(needle));
if (missing.length) throw new Error(`FAQ coverage is incomplete: ${missing.join(', ')}`);

console.log('FAQ coverage for selection, fitment, electrical system, case evidence and taxonomy verified.');
