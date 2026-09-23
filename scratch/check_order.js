const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const hero = html.indexOf('<header class="hero"');
const shop = html.indexOf('<div class="shop-main"');
const so_sanh = html.indexOf('<section class="section" id="so-sanh"');
const chan_bong = html.indexOf('<section class="section" id="chan-bong"');
const bang_gia = html.indexOf('<section class="section compact" id="bang-gia"');

console.log("Hero:", hero);
console.log("Shop Grid:", shop);
console.log("So Sanh:", so_sanh);
console.log("Chan Bong:", chan_bong);
console.log("Bang Gia:", bang_gia);
