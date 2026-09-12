import { copyFileSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const toolDir = dirname(fileURLToPath(import.meta.url));
const productDir = resolve(toolDir, '..');
const sourcePath = resolve(productDir, '..', 'titan-black.html');
const outputDir = resolve(productDir, 'cms');
const hostAssetDir = resolve(outputDir, 'uploads', 'images', 'products', 'titan-black-2026');
const hostAssetBase = '/uploads/images/products/titan-black-2026/';
const source = readFileSync(sourcePath, 'utf8');

const styles = [...source.matchAll(/<style(?:\s[^>]*)?>([\s\S]*?)<\/style>/gi)]
  .map(match => match[1].trim())
  .join('\n\n');
const executableScripts = [...source.matchAll(/<script(?![^>]*type="application\/ld\+json")[^>]*>([\s\S]*?)<\/script>/gi)]
  .map(match => match[1].trim())
  .join('\n\n');
const schema = source.match(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/i)?.[1].trim();
const mainStart = source.indexOf('<main class="tb-apple-cleanup" id="tb-product">');
const firstScriptAfterMain = source.indexOf('<script>', mainStart);

if (mainStart < 0 || firstScriptAfterMain < 0 || !schema) {
  throw new Error('Titan source structure changed; CMS export markers were not found.');
}

const html = source.slice(mainStart, firstScriptAfterMain).trim();
const assetPattern = /((?:titan-black|titan-black-2026)\/hinh)\/([A-Za-z0-9._-]+)/g;
const assetRefs = [...new Map([...`${html}\n${styles}`.matchAll(assetPattern)]
  .map(match => [match[2], { directory: match[1], fileName: match[2] }])).values()]
  .sort((a, b) => a.fileName.localeCompare(b.fileName));
const assetNames = assetRefs.map(asset => asset.fileName);
const rewriteAssetPaths = content => content.replace(assetPattern, (_, __, fileName) => `${hostAssetBase}${fileName}`);
const readme = `# Titan Black 2026 — CMS package

Files in this folder are generated from \`auto365/titan-black.html\`.

1. Upload the entire supplied \`uploads/images/products/titan-black-2026/\` folder to \`/www/wwwroot/auto365.vn/public_html/uploads/images/products/titan-black-2026/\`.
2. For the simplest installation, paste \`titan-black.embed.html\` into the CMS content/body area. It automatically loads the matching CSS and JavaScript from the host path.
3. For a CMS with separate fields, paste \`titan-black.cms.html\` into the content/body area, load \`titan-black.css\` as the page stylesheet and \`titan-black.js\` in the page footer.
4. Add \`titan-black.schema.jsonld\` as a JSON-LD script in the page head if the CMS supports structured data.

The form posts to \`/api/leads/lighting\`; confirm that this route is available on the production domain before publishing.
`;

mkdirSync(outputDir, { recursive: true });
rmSync(hostAssetDir, { recursive: true, force: true });
mkdirSync(hostAssetDir, { recursive: true });
for (const asset of assetRefs) {
  const sourceAsset = resolve(productDir, '..', asset.directory, asset.fileName);
  if (!existsSync(sourceAsset)) throw new Error(`Missing referenced asset: ${sourceAsset}`);
  copyFileSync(sourceAsset, resolve(hostAssetDir, asset.fileName));
}
writeFileSync(resolve(outputDir, 'titan-black.cms.html'), `${rewriteAssetPaths(html)}\n`, 'utf8');
writeFileSync(resolve(outputDir, 'titan-black.css'), `${rewriteAssetPaths(styles)}\n`, 'utf8');
writeFileSync(resolve(outputDir, 'titan-black.js'), `${executableScripts}\n`, 'utf8');
writeFileSync(resolve(outputDir, 'titan-black.schema.jsonld'), `${schema}\n`, 'utf8');
const cmsHtml = rewriteAssetPaths(html);
const cmsCss = rewriteAssetPaths(styles);
writeFileSync(resolve(outputDir, 'titan-black.embed.html'), `<link href="${hostAssetBase}titan-black.css" rel="stylesheet"/>\n${cmsHtml}\n<script src="${hostAssetBase}titan-black.js"></script>\n<script type="application/ld+json">${schema}</script>\n`, 'utf8');
writeFileSync(resolve(hostAssetDir, 'titan-black.css'), `${cmsCss}\n`, 'utf8');
writeFileSync(resolve(hostAssetDir, 'titan-black.js'), `${executableScripts}\n`, 'utf8');
writeFileSync(resolve(hostAssetDir, 'titan-black.schema.jsonld'), `${schema}\n`, 'utf8');
writeFileSync(resolve(outputDir, 'titan-black-assets.json'), `${JSON.stringify({ hostAssetBase, files: assetNames }, null, 2)}\n`, 'utf8');
writeFileSync(resolve(outputDir, 'README.md'), readme, 'utf8');

console.log(`Exported CMS package to ${outputDir}`);
