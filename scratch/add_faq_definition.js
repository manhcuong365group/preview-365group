const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const targetStr = '<div class="faq-grid" id="faq-grid">';
const newFaq = `
    <details class="faq-item">
      <summary><span>Bóng LED ô tô là gì? Có tốt hơn Halogen nguyên bản không?</span><svg class="icon faq-icon"><use href="#icon-chevron-down"></use></svg></summary>
      <p>Bóng LED (Light Emitting Diode) là công nghệ chiếu sáng hiện đại sử dụng chip phát quang. Khác với Halogen đốt nóng dây tóc, bóng LED mang lại hiệu suất sáng cao hơn, tiết kiệm điện, tỏa nhiệt ở chóa ít hơn và có tuổi thọ bền bỉ. Mặc dù vậy, để phát huy tối đa hiệu quả, việc độ bóng LED cần sự tương thích tuyệt đối về chuẩn chân cắm (H4, H7, 9005...), điện áp và cấu hình chóa phản xạ của xe.</p>
    </details>`;

if (html.includes(targetStr)) {
    html = html.replace(targetStr, targetStr + newFaq);
    fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
    console.log("Added definition to FAQ.");
} else {
    console.log("Could not find FAQ grid.");
}
