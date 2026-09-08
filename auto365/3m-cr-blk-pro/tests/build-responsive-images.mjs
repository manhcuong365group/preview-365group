import sharp from 'sharp';
import { readFile } from 'node:fs/promises';
import { resolve, basename } from 'node:path';
import { createHash } from 'node:crypto';

const base = resolve('auto365/3m-cr-blk-pro');
const html = await readFile(resolve(base, 'index.html'), 'utf8');
const edits = [];
const cache = new Map();
for (const [tag] of html.matchAll(/<img\b[^>]*>/g)) {
  const src = tag.match(/\bsrc="([^"]+)"/)?.[1];
  if (!src) continue;
  let variants = cache.get(src);
  if (!variants) {
    let buffer;
    if (src.startsWith('/3m-cr-blk-pro/')) buffer = await readFile(resolve('auto365', '.' + src));
    else {
      const response = await fetch(src, { signal: AbortSignal.timeout(20000) });
      if (!response.ok) throw new Error(`${src}: ${response.status}`);
      buffer = Buffer.from(await response.arrayBuffer());
    }
    const meta = await sharp(buffer).metadata();
    if (!meta.width || !meta.height) throw new Error(`Not an image: ${src}`);
    const name = basename(new URL(src, 'https://local.audit').pathname).replace(/\.[^.]+$/, '').replace(/[^a-zA-Z0-9-]/g, '-').slice(0, 50) + '-' + createHash('sha1').update(src).digest('hex').slice(0, 6);
    const widths = [...new Set([320, 640, 960, Math.min(meta.width, 1440)].filter(w => w <= meta.width))].sort((a,b) => a-b);
    const sources = [];
    for (const width of widths) {
      const file = `${name}-${width}.webp`;
      await sharp(buffer).resize({ width, withoutEnlargement: true }).webp({ quality: 80 }).toFile(resolve(base, 'hinh', file));
      sources.push(`/3m-cr-blk-pro/hinh/${file} ${width}w`);
    }
    variants = { sources: sources.join(', '), width: meta.width, height: meta.height };
    cache.set(src, variants);
  }
  const hero = tag.includes('fetchpriority="high"');
  const wide = /class="section-photo"|13-1\.jpg/.test(tag);
  const sizes = wide ? '(max-width:680px) calc(100vw - 28px), min(1296px, calc(100vw - 40px))' : hero ? '(max-width:900px) calc(100vw - 40px), 600px' : '(max-width:680px) calc(100vw - 28px), (max-width:900px) 50vw, 640px';
  let replacement = tag.replace(/\s(?:srcset|sizes|width|height)="[^"]*"/g, '');
  replacement = replacement.replace(/>$/, ` srcset="${variants.sources}" sizes="${sizes}" width="${variants.width}" height="${variants.height}">`);
  edits.push({ old: tag, new: replacement });
}
const og = resolve(base, 'hinh/og-cr-blk-pro-1200x630.png');
const input = await readFile(og);
if (input.length > 300000) await sharp(input).png({ palette: true, quality: 80, colours: 128, compressionLevel: 9 }).toFile(og);
console.log(JSON.stringify({ edits, unique: cache.size, ogBytes: (await readFile(og)).length }));
