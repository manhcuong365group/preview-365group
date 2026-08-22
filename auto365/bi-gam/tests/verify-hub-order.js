const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('auto365/bi-gam/index.html', 'utf8');
const $ = cheerio.load(html);
const sections = $('section').toArray();
const productIndex = sections.findIndex((node) => node.attribs.id === 'products');
const finderIndex = sections.findIndex((node) => node.attribs.id === 'finder');

if (productIndex === -1 || finderIndex === -1) {
  throw new Error('Hub must include both the product catalog and the fitment recommendation sections.');
}
if (productIndex > finderIndex) {
  throw new Error('Product catalog must appear before the fitment recommendation in the hub reading order.');
}

const heading = $('#finder h2').first().text().replace(/\s+/g, ' ').trim();
if (!heading.includes('phù hợp')) {
  throw new Error('The fitment section must be framed as a suitability recommendation.');
}

console.log('Hub order verified: catalog first, suitability recommendation second.');
