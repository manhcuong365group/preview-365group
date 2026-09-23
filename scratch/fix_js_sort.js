const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

// Fix JS so it doesn't break
html = html.replace(
    "$('#shop-sort').addEventListener('change',event=>{",
    "if($('#shop-sort')) $('#shop-sort').addEventListener('change',event=>{"
);

fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
console.log("Fixed JS error");
