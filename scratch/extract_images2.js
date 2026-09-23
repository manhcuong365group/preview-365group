const fs = require('fs');
const path = require('path');

const htmlPath = 'auto365/bong-led/index.html';
let html = fs.readFileSync(htmlPath, 'utf8');

const imgDir = 'auto365/bong-led/images';

// Find all data URIs
const regex = /"(data:image\/([^;]+)(;base64)?,([^"]+))"/g;
let match;
let counter = 2; // continue from 2

while ((match = regex.exec(html)) !== null) {
    const fullMatch = match[1];
    const extRaw = match[2];
    const isBase64 = match[3] === ';base64';
    const data = match[4];
    
    if (data.length < 1000) continue; // skip tiny inline SVGs etc

    let ext = extRaw;
    if (ext === 'svg+xml') ext = 'svg';

    const filename = `extracted_img_${counter}.${ext}`;
    const filePath = path.join(imgDir, filename);
    const webPath = `images/${filename}`;

    if (isBase64) {
        fs.writeFileSync(filePath, Buffer.from(data, 'base64'));
    } else {
        fs.writeFileSync(filePath, decodeURIComponent(data));
    }
    
    html = html.replace(fullMatch, webPath);
    console.log(`Extracted ${filename}`);
    counter++;
}

fs.writeFileSync(htmlPath, '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
console.log("Extraction 2 complete.");
