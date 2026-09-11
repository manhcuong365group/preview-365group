import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const toolDir = dirname(fileURLToPath(import.meta.url));
const productDir = resolve(toolDir, '..');
const sourcePath = resolve(productDir, '..', 'titan-black.html');
const outputDir = resolve(productDir, 'cms');
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
const readme = `# Titan Black 2026 — CMS package

Files in this folder are generated from \`auto365/titan-black.html\`.

1. Upload \`titan-black.css\` as the page stylesheet.
2. Paste \`titan-black.cms.html\` into the CMS content/body area. Do not wrap it in another \`main\` element.
3. Load \`titan-black.js\` after the HTML, preferably in the page footer.
4. Add \`titan-black.schema.jsonld\` as a JSON-LD script in the page head if the CMS supports structured data.
5. Keep the \`titan-black/hinh/\` asset directory available at the same relative path, or replace those image URLs with the CMS media URLs.

The form posts to \`/api/leads/lighting\`; confirm that this route is available on the production domain before publishing.
`;

mkdirSync(outputDir, { recursive: true });
writeFileSync(resolve(outputDir, 'titan-black.cms.html'), `${html}\n`, 'utf8');
writeFileSync(resolve(outputDir, 'titan-black.css'), `${styles}\n`, 'utf8');
writeFileSync(resolve(outputDir, 'titan-black.js'), `${executableScripts}\n`, 'utf8');
writeFileSync(resolve(outputDir, 'titan-black.schema.jsonld'), `${schema}\n`, 'utf8');
writeFileSync(resolve(outputDir, 'README.md'), readme, 'utf8');

console.log(`Exported CMS package to ${outputDir}`);
