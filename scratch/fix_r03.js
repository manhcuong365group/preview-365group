const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

// For s8k43
let oldS8 = `<li>Chân bóng: H1 / H7 / H11 / 9005 / 9006 / 9012</li>`;
let newS8 = `<li><span style="color:#e31b2d; font-weight:bold;">Ngừng kinh doanh</span></li><li>Chân bóng: H7 / H11 / 9005 / 9006 / 9012</li>`;
if (html.includes(oldS8)) {
    html = html.replace(oldS8, newS8);
    console.log("S8 card updated.");
}

// For ns6-h1
let ns6_h1_old = `data-product-id="ns6-h1" id="product-ns6-h1">`;
let ns6_h1_new = `data-product-id="ns6-h1" id="product-ns6-h1">\n<div style="position:absolute; top:10px; right:10px; background:#e31b2d; color:#fff; padding:4px 8px; font-size:12px; font-weight:bold; border-radius:4px; z-index:1;">Ngừng kinh doanh</div>`;
if (html.includes(ns6_h1_old)) {
    html = html.replace(ns6_h1_old, ns6_h1_new);
    console.log("ns6-h1 card updated.");
}

// For ns6-h11
let ns6_h11_old = `data-product-id="ns6-h11" id="product-ns6-h11">`;
let ns6_h11_new = `data-product-id="ns6-h11" id="product-ns6-h11">\n<div style="position:absolute; top:10px; right:10px; background:#e31b2d; color:#fff; padding:4px 8px; font-size:12px; font-weight:bold; border-radius:4px; z-index:1;">Ngừng kinh doanh</div>`;
if (html.includes(ns6_h11_old)) {
    html = html.replace(ns6_h11_old, ns6_h11_new);
    console.log("ns6-h11 card updated.");
}

// And for S8 4300K, let's also add the badge so it matches visually
let s8k43_old = `data-product-id="s8k43" id="product-s8k43">`;
let s8k43_new = `data-product-id="s8k43" id="product-s8k43">\n<div style="position:absolute; top:10px; right:10px; background:#e31b2d; color:#fff; padding:4px 8px; font-size:12px; font-weight:bold; border-radius:4px; z-index:1;">Ngừng kinh doanh</div>`;
if (html.includes(s8k43_old)) {
    html = html.replace(s8k43_old, s8k43_new);
    console.log("s8k43 badge updated.");
}

// Make .shop-card position:relative if not already
let rootStyles = html.indexOf('.shop-card {');
if (rootStyles !== -1) {
    // just to be safe, I will just add inline style position relative in case
    html = html.replace(/<article class="shop-card"/g, '<article class="shop-card" style="position:relative;"');
}

fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
