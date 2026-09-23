const fs = require('fs');
const html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const dataStr = html.split('<script id="product-data" type="application/json">')[1].split('</script>')[0];
const data = JSON.parse(dataStr);
console.log('JSON Products:', data.length);
const htmlCards = html.match(/<article class="shop-card"/g) || [];
console.log('HTML Cards:', htmlCards.length);
