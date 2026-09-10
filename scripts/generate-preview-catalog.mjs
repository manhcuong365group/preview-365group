import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.argv[2] || 'auto365');
const ignored = new Set(['index.html', 'pages.json']);

function readMeta(html, pattern) {
  return html.match(pattern)?.[1]?.trim().replace(/\s+/g, ' ') || '';
}

function categoryFor(slug) {
  if (/camera|70mai/i.test(slug)) return 'Camera';
  if (/phim|3m|ceramic|crystalline/i.test(slug)) return 'Phim cách nhiệt';
  if (/bi-|gam|led|den-|g1|m10|m20|xlight/i.test(slug)) return 'Đèn & bi gầm';
  if (/he-thong|danh|chi-nhanh/i.test(slug)) return 'Hệ thống';
  if (/review|bao-chi|newsroom|bui|dang/i.test(slug)) return 'Nội dung & thương hiệu';
  return 'Khác';
}

const entries = fs.readdirSync(root, { withFileTypes: true });
const pages = [];

for (const entry of entries) {
  const file = entry.isDirectory() ? path.join(root, entry.name, 'index.html') : path.join(root, entry.name);
  if (!fs.existsSync(file) || !entry.isDirectory() && (!entry.name.endsWith('.html') || ignored.has(entry.name))) continue;
  const html = fs.readFileSync(file, 'utf8');
  const slug = entry.isDirectory() ? entry.name : entry.name.replace(/\.html$/, '');
  const title = readMeta(html, /<title[^>]*>([\s\S]*?)<\/title>/i) || slug.replace(/[-_]+/g, ' ');
  const description = readMeta(html, /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i);
  pages.push({
    slug,
    title,
    description: description || 'Trang preview đang được hoàn thiện.',
    category: categoryFor(slug),
    url: entry.isDirectory() ? `./${entry.name}/index.html` : `./${entry.name}`,
    updatedAt: fs.statSync(file).mtimeMs,
  });
}

pages.sort((a, b) => a.title.localeCompare(b.title, 'vi'));
fs.writeFileSync(path.join(root, 'pages.json'), JSON.stringify({ generatedAt: new Date().toISOString(), pages }, null, 2) + '\n');
console.log(`Generated ${pages.length} preview entries in ${path.join(root, 'pages.json')}`);
