const fs = require('fs');
const path = require('path');

const htmlPath = 'auto365/bong-led/index.html';
let html = fs.readFileSync(htmlPath, 'utf8');

const imgDir = 'auto365/bong-led/images';
if (!fs.existsSync(imgDir)) {
    fs.mkdirSync(imgDir, { recursive: true });
}

const regex = /"(data:image\/(jpeg|png|webp|svg\+xml);base64,([^"]+))"/g;
let match;
let counter = 1;

while ((match = regex.exec(html)) !== null) {
    const fullMatch = match[1];
    const extRaw = match[2];
    const base64Data = match[3];
    
    // Skip small SVGs if they are just icons, we only extract large images.
    if (base64Data.length < 1000) continue;

    let ext = extRaw;
    if (ext === 'svg+xml') ext = 'svg';

    const filename = `extracted_img_${counter}.${ext}`;
    const filePath = path.join(imgDir, filename);
    const webPath = `images/${filename}`;

    fs.writeFileSync(filePath, Buffer.from(base64Data, 'base64'));
    html = html.replace(fullMatch, webPath);
    console.log(`Extracted ${filename}`);
    counter++;
}

fs.writeFileSync(htmlPath, '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
console.log("Extraction complete.");
