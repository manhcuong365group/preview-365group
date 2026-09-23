const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const regex = /\}\)\.catch\(\(\) => \{\n    if \(submitBtn\) \{ submitBtn\.disabled = false; submitBtn\.textContent = 'Gửi yêu cầu tư vấn'; \}\n    if \(statusEl\) \{\n      statusEl\.style\.display = 'block';\n      statusEl\.style\.color = '#e31b2d';\n      statusEl\.innerHTML = 'Đã lưu yêu cầu\. Bạn có thể <a href="https:\/\/zalo\.me\/0365365911" target="_blank" style="color:#087fae;text-decoration:underline;">chat Zalo Auto365<\/a> để phản hồi ngay\.';\n    \}\n  \}\);/;

if (regex.test(html)) {
    console.log("Found bad string, replacing...");
    html = html.replace(regex, "");
    fs.writeFileSync('auto365/bong-led/index.html', html, 'utf8');
} else {
    console.log("Not found with exact regex");
}
