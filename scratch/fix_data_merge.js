const fs = require('fs');
const file = 'auto365/bong-led/index.html';
let html = fs.readFileSync(file, 'utf8');

// Update JSON data
html = html.replace(/<script id="product-data" type="application\/json">([\s\S]*?)<\/script>/, function(match, jsonStr) {
    let data = JSON.parse(jsonStr);
    data.forEach(p => {
        // Fix warranties
        if (p.family === 's3' || p.family === 's6' || p.id.startsWith('s3') || p.id.startsWith('s6')) {
            p.warranty = '24 tháng';
        }
        if (p.id === 't10' || p.id.startsWith('t10')) {
            p.warranty = '12 tháng';
        }
        
        // Add voltage info explicitly for logic mapping
        p.voltageStr = p.voltage; // Keep original text
        if (p.id.includes('s6') || p.id.includes('s3') || p.id.includes('ns3') || p.id.includes('ns6')) {
            p.voltageValue = '12V'; // assuming S3/S6 are 12V only based on context
        } else {
            p.voltageValue = 'all'; // supports both or not specified
        }

        p.needs = [];
        if (p.id.includes('s6')) p.needs.push('highway', 'rain');
        if (p.id.includes('s3')) p.needs.push('city', 'rain');
        if (p.id.includes('s8')) p.needs.push('rain', 'highway');
    });
    return '<script id="product-data" type="application/json">' + JSON.stringify(data) + '</script>';
});

// Update the quickselect script to use the main data
// Remove hardcoded LED_CATALOG and replace with dynamic map
html = html.replace(/var LED_CATALOG = \[\s*\{[\s\S]*?\];/g, 
"var rawCatalog = JSON.parse(document.getElementById('product-data').textContent);\n" +
"var LED_CATALOG = rawCatalog.map(function(p) {\n" +
"    return {\n" +
"        id: p.id,\n" +
"        name: p.name,\n" +
"        priceText: p.priceText,\n" +
"        price: p.price,\n" +
"        sockets: p.sockets ? p.sockets.map(function(s){return s.toUpperCase()}) : [],\n" +
"        temp: p.kelvin,\n" +
"        voltage: p.voltageValue || 'all',\n" +
"        needs: p.needs || [],\n" +
"        url: p.url,\n" +
"        img: p.image\n" +
"    };\n" +
"});");

fs.writeFileSync(file, html);
console.log('JSON Data and Suggestion Catalog Merged successfully.');
