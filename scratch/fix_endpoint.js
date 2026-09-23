const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const oldEndpointLine = `const endpoint = window.AUTO365_LED_CONFIG?.leadEndpoint || '/api/leads/lighting';`;
const newEndpointLine = `const endpoint = window.AUTO365_LED_CONFIG?.leadEndpoint;`;
html = html.replace(oldEndpointLine, newEndpointLine);

fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
console.log("Removed default fallback endpoint.");
