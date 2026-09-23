const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const imgDir = 'auto365/bong-led/images';
const regex = /"data:image\/webp;base64,([^"]+)"/;
const match = html.match(regex);
if (match) {
    const data = match[1];
    const filename = `extracted_img_4.webp`;
    const filePath = require('path').join(imgDir, filename);
    const webPath = `images/${filename}`;
    fs.writeFileSync(filePath, Buffer.from(data, 'base64'));
    html = html.replace(match[0], `"${webPath}"`);
    fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
    console.log("Extracted image 4");
}
