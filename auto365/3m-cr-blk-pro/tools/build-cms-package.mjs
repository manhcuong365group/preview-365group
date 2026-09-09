import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const toolDir = dirname(fileURLToPath(import.meta.url));
const pageDir = resolve(toolDir, '..');
const sourcePath = resolve(pageDir, 'index.html');
const outputDir = resolve(pageDir, 'cms');
const htmlPath = resolve(outputDir, 'index.html');
const contentPath = resolve(outputDir, 'content-only.html');
const cssPath = resolve(outputDir, 'cr-blk-pro.css');
const jsPath = resolve(outputDir, 'cr-blk-pro.js');

const source = await readFile(sourcePath, 'utf8');
const styles = [];
let insertedStylesheet = false;

let html = source.replace(/<style\b[^>]*>([\s\S]*?)<\/style>/gi, (_match, css) => {
  styles.push(css.trim());
  if (insertedStylesheet) return '';
  insertedStylesheet = true;
  return '  <link rel="stylesheet" href="./cr-blk-pro.css">';
});

const scripts = [];
let insertedScript = false;
html = html.replace(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi, (match, attributes, javascript) => {
  if (/type\s*=\s*["']application\/ld\+json["']/i.test(attributes)) return match;
  scripts.push(javascript.trim());
  if (insertedScript) return '';
  insertedScript = true;
  return '<script src="./cr-blk-pro.js" defer></script>';
});

html = html.replace(
  /<meta\s+name=["']robots["']\s+content=["'][^"']*["']\s*\/?>/i,
  '<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">',
);

if (!styles.length || !scripts.length || !insertedStylesheet || !insertedScript) {
  throw new Error('Không tìm thấy đầy đủ CSS/JS inline để tạo gói CMS.');
}

const css = [
  '/* Auto365 CR BLK Pro — CSS CMS, generated from ../index.html */',
  ...styles,
  '',
].join('\n\n');

const javascript = [
  '/* Auto365 CR BLK Pro — JavaScript CMS, generated from ../index.html */',
  ...scripts.map((script, index) => `/* Source block ${index + 1} */\n${script}`),
  '',
].join('\n\n;\n\n');

const iconSprite = html.match(/<svg\s+width=["']0["'][\s\S]*?<\/svg>/i)?.[0];
const noscript = html.match(/<noscript>[\s\S]*?<\/noscript>/i)?.[0];
const mainContent = html
  .match(/<main\b[^>]*>[\s\S]*?<\/main>/i)?.[0]
  ?.replace(/\s*<nav\s+class=["']breadcrumbs["'][\s\S]*?<\/nav>/i, '');

if (!iconSprite || !mainContent) {
  throw new Error('Không tìm thấy icon sprite hoặc nội dung <main> để tạo HTML content-only.');
}

const contentOnly = [
  '<!-- Auto365 CR BLK Pro — dán phần này vào vùng nội dung CMS -->',
  iconSprite,
  noscript || '',
  mainContent,
  '',
].join('\n');

await mkdir(outputDir, { recursive: true });
await Promise.all([
  writeFile(htmlPath, html, 'utf8'),
  writeFile(contentPath, contentOnly, 'utf8'),
  writeFile(cssPath, css, 'utf8'),
  writeFile(jsPath, javascript, 'utf8'),
]);

console.log(JSON.stringify({
  html: htmlPath,
  contentOnly: contentPath,
  css: cssPath,
  javascript: jsPath,
  styleBlocks: styles.length,
  scriptBlocks: scripts.length,
}, null, 2));
