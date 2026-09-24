const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

// 1. Fix qs-voltage dropdown: remove the empty option
const oldVoltage = '<option value="">Chưa rõ — cần kiểm tra</option>';
if (html.includes(oldVoltage)) {
    html = html.replace(oldVoltage, '');
    console.log("Removed empty voltage option.");
} else {
    console.log("Empty voltage option not found.");
}

// 2. Fix shop grid to 3 columns and max 3 items when collapsed
// Find desktop grid columns
const oldGridDesktop = '.shop-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px; }';
const newGridDesktop = '.shop-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; }';
if (html.includes(oldGridDesktop)) {
    html = html.replace(oldGridDesktop, newGridDesktop);
    console.log("Changed shop-grid columns from 4 to 3 on desktop.");
} else {
    console.log("shop-grid desktop columns not found.");
}

// Find collapsed items limit
const oldCollapsedLimit = '.shop-grid.collapsed .shop-card:nth-child(n+9) { display: none; }';
const newCollapsedLimit = '.shop-grid.collapsed .shop-card:nth-child(n+4) { display: none; }';
if (html.includes(oldCollapsedLimit)) {
    html = html.replace(oldCollapsedLimit, newCollapsedLimit);
    console.log("Changed collapsed limit from 8 (n+9) to 3 (n+4).");
} else {
    console.log("Collapsed limit not found.");
}

fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
console.log("HTML updated.");
