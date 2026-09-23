const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const start = html.indexOf('<!-- Bottom summary bar: Nhớ nhanh trong 10 giây -->');
if (start > -1) {
    const end = html.indexOf('</div>', html.indexOf('<div class="param-pills">', start)) + 12; // </div> of param-pills, then </div> of param-summary-box
    // let's double check by counting divs
    let block = html.substring(start, end + 200);
    console.log(block);
}
