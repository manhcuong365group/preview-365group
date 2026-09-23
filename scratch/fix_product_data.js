const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const jsonStart = html.indexOf('<script type="application/json" id="product-data">');
const jsonEnd = html.indexOf('</script>', jsonStart);
const jsonDataStr = html.substring(jsonStart + 50, jsonEnd);
const catalog = JSON.parse(jsonDataStr);

catalog.forEach(item => {
    item.technicalStatus = 'verified';
    item.sellStatus = 'active';
    
    // Convert sockets to upper case for consistency
    if (item.sockets) {
        item.sockets = item.sockets.map(s => s.toUpperCase());
    }
    
    // Add supportedVehicleVoltages
    item.supportedVehicleVoltages = [];
    if (item.voltage && item.voltage.includes('12')) item.supportedVehicleVoltages.push(12);
    if (item.voltage && item.voltage.includes('24')) item.supportedVehicleVoltages.push(24);
    
    // Mark discontinued products
    if (item.id === 's8k43-h1' || item.id === 'ns6-h1' || item.id === 's8k43') {
        item.sellStatus = 'discontinued';
    }
    
    // Fix URLs for s3-h4 and s6-h4
    if (item.id === 's3-h4') {
        item.url = 'https://auto365.vn/bong-led-x-light-s3-pro-v2-chan-h4';
    }
    if (item.id === 's6-h4') {
        item.url = 'https://auto365.vn/bong-led-x-light-s6-pro-v2-chan-h4';
    }
    
    // Fix T10 kelvin/voltage (bỏ gán khi chưa khóa đúng phiên bản)
    if (item.id === 't10') {
        item.kelvin = '';
        item.voltage = '';
        item.supportedVehicleVoltages = [];
        item.warranty = '12 tháng';
    }
});

const newJsonStr = JSON.stringify(catalog);
html = html.substring(0, jsonStart + 50) + newJsonStr + html.substring(jsonEnd);

fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
console.log("Updated product-data.");
