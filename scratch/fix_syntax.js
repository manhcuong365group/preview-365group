const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const brokenStr =   });\n  }).catch(() => {\n    if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Gửi yêu cầu tư vấn'; }\n    if (statusEl) {\n      statusEl.style.display = 'block';\n      statusEl.style.color = '#e31b2d';\n      statusEl.innerHTML = 'Đã lưu yêu cầu. Bạn có thể <a href=\"https://zalo.me/0365365911\" target=\"_blank\" style=\"color:#087fae;text-decoration:underline;\">chat Zalo Auto365</a> để phản hồi ngay.';\n    }\n  });;

if (html.includes(brokenStr)) {
    console.log("Found exact string, replacing");
    html = html.replace(brokenStr, "  });");
    fs.writeFileSync('auto365/bong-led/index.html', html, 'utf8');
} else {
    console.log("String not found!");
}
