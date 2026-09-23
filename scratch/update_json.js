const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const s1 = html.indexOf('<script type="application/json" id="product-data">');
const e1 = html.indexOf('</script>', s1);
let data = JSON.parse(html.substring(s1 + 50, e1));

data.forEach(item => {
    // Determine supportedVehicleVoltages
    if (item.voltage === '12/24V') item.supportedVehicleVoltages = [12, 24];
    else if (item.voltage === '12V' || item.voltage === '9–16V') item.supportedVehicleVoltages = [12];
    else item.supportedVehicleVoltages = [12]; // Defaulting to 12V for cars, but wait...
    
    // Fix S8 4300K
    if (item.id === 's8k43') {
        item.sockets = item.sockets.filter(s => s !== 'H1');
        item.socketText = item.socketText.replace('H1 / ', '');
        item.sellStatus = 'discontinued';
    }
    
    // Fix S6 H1 (ns6-h1)
    if (item.id === 'ns6-h1' || item.url.includes('s6-pro-chan-h1')) {
        item.sellStatus = 'discontinued';
    }
    
    // Fix T10
    if (item.id === 't10') {
        item.warranty = '12 tháng';
        if (item.kelvin === '6000K') item.kelvin = 'Liên hệ';
        if (item.voltage === '12V') item.voltage = 'Liên hệ';
        item.supportedVehicleVoltages = []; // Since we don't lock 12V yet
    }
});

let newJsonStr = JSON.stringify(data);
html = html.substring(0, s1 + 50) + newJsonStr + html.substring(e1);
fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
console.log("JSON Catalog updated successfully.");
