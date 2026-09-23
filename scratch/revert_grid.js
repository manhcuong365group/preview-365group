const fs = require('fs');
const file = 'auto365/bong-led/index.html';
let html = fs.readFileSync(file, 'utf8');

// Find the horizontal scroll override we added and remove/revert it
const cssRegex = /\.shop-grid\s*\{[\s\S]*?scroll-snap-align:\s*start;\s*\}/;
html = html.replace(cssRegex, '');

// If the previous replace failed or left stuff behind, let's just forcefully remove any .shop-grid and .shop-card overrides I added manually.
// Actually, earlier I added it directly, let's just make it a clean CSS override that resets to grid:
const resetCSS = 
.shop-grid {
    display: grid !important;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)) !important;
    gap: 16px !important;
    overflow: visible !important;
}
.shop-grid .shop-card {
    max-width: 100% !important;
    min-width: 0 !important;
}
.shop-grid::-webkit-scrollbar {
    display: none;
}
;
// Let's just append this to the end of the <style> block or before </head>
html = html.replace('</head>', '<style>' + resetCSS + '</style></head>');

fs.writeFileSync(file, html);
console.log('Reverted to multi-row grid.');
