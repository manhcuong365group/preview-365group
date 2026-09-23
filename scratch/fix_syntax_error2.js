const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const badError = `<button type="button" onclick="showConsultStepGlobal({id:'', name:'Gửi thông tin nhờ kiểm tra xe', priceText:'Chờ báo giá', img:'https://auto365.vn/uploads/images/product_12052026/xlight-t10-1.jpg.webp'}, {isPick:false, customBadge:'Hỗ trợ kỹ thuật', customTitle:'Gửi thông tin xe cần kiểm tra', isDirectBooking:true})"`;

const goodError = `<button type="button" onclick="showConsultStepGlobal({id:\\'\\', name:\\'Gửi thông tin nhờ kiểm tra xe\\', priceText:\\'Chờ báo giá\\', img:\\'https://auto365.vn/uploads/images/product_12052026/xlight-t10-1.jpg.webp\\'}, {isPick:false, customBadge:\\'Hỗ trợ kỹ thuật\\', customTitle:\\'Gửi thông tin xe cần kiểm tra\\', isDirectBooking:true})"`;

if (html.includes(badError)) {
    html = html.replace(badError, goodError);
    fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
    console.log("Fixed the syntax error by adding double backslashes.");
} else {
    console.log("Could not find badError string.");
}
