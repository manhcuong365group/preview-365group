// One-off: convert bi-led-x-light-v30-ultra/bo_anh_cong_nghe/*.png → hinh/*.webp
// Resize xuống ~1000-1200px, WebP q80 để đáp ứng GATE #10 (≤200KB). Xuất riêng 1 file og-image 1200×630.
import sharp from 'sharp';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(__dirname, '..');
const SRC_MEDIA = path.join(REPO, '_src-media', 'bi-led-x-light-v30-ultra');
const SRC = path.join(SRC_MEDIA, 'bo_anh_cong_nghe');
const SRC_COVERAGE = path.join(SRC_MEDIA, 'anh_thuc_te');
const OUT = path.join(REPO, 'auto365', 'bi-led-x-light-v30-ultra', 'hinh');

const jobs = [
  { src: 'Artboard 1.png', out: 'v30-ultra-hero-key-visual.webp', size: 1000, quality: 80 },
  { src: 'Artboard 2.png', out: 'v30-ultra-tan-nhiet-da-tang.webp', size: 1200, quality: 80 },
  { src: 'Artboard 3.png', out: 'v30-ultra-cau-hinh-chip-12-3-osram.webp', size: 1200, quality: 80 },
  { src: 'Artboard 4.png', out: 'v30-ultra-thiet-ke-kich-thuoc.webp', size: 1200, quality: 80 },
  { src: 'Artboard 5.png', out: 'v30-ultra-turbo-boost-beam.webp', size: 1200, quality: 80 },
];

// Ảnh scenic mô phỏng vùng sáng cho Coverage Explorer (đã có label sẵn).
const coverageJobs = [
  { src: 'di_pho.jpg', out: 'v30-ultra-coverage-city.webp', width: 1200, quality: 78 },
  { src: 'cao_toc.jpg', out: 'v30-ultra-coverage-highway.webp', width: 1200, quality: 78 },
  { src: 'mua.jpg', out: 'v30-ultra-coverage-rain.webp', width: 1200, quality: 78 },
  { src: 'xe_dien.jpg', out: 'v30-ultra-coverage-ev.webp', width: 1200, quality: 78 },
];

async function makeSquare(job) {
  const src = path.join(SRC, job.src);
  const out = path.join(OUT, job.out);
  await sharp(src).resize(job.size, job.size, { fit: 'inside' }).webp({ quality: job.quality, effort: 6 }).toFile(out);
  const bytes = fs.statSync(out).size;
  const meta = await sharp(out).metadata();
  console.log(`${job.out.padEnd(50)} ${meta.width}x${meta.height}  ${(bytes / 1024).toFixed(1)} KB`);
  return { file: job.out, w: meta.width, h: meta.height, kb: bytes / 1024 };
}

async function makeOgImage() {
  const src = path.join(SRC, 'Artboard 1.png');
  const out = path.join(OUT, 'v30-ultra-og-image.jpg');
  await sharp(src)
    .resize(1200, 630, { fit: 'contain', background: { r: 11, g: 11, b: 11 } })
    .jpeg({ quality: 85, progressive: true, mozjpeg: true })
    .toFile(out);
  const bytes = fs.statSync(out).size;
  console.log(`${'v30-ultra-og-image.jpg'.padEnd(50)} 1200x630   ${(bytes / 1024).toFixed(1)} KB`);
  return { file: 'v30-ultra-og-image.jpg', w: 1200, h: 630, kb: bytes / 1024 };
}

async function makeCoverage(job) {
  const src = path.join(SRC_COVERAGE, job.src);
  const out = path.join(OUT, job.out);
  await sharp(src).resize({ width: job.width }).webp({ quality: job.quality, effort: 6 }).toFile(out);
  const bytes = fs.statSync(out).size;
  const meta = await sharp(out).metadata();
  console.log(`${job.out.padEnd(50)} ${meta.width}x${meta.height}  ${(bytes / 1024).toFixed(1)} KB`);
  return { file: job.out, w: meta.width, h: meta.height, kb: bytes / 1024 };
}

const results = [];
for (const j of jobs) results.push(await makeSquare(j));
results.push(await makeOgImage());
for (const j of coverageJobs) results.push(await makeCoverage(j));

const oversize = results.filter(r => r.kb > 200);
if (oversize.length) {
  console.log('\n⚠️  Vượt 200KB (GATE #10):');
  oversize.forEach(r => console.log(`   ${r.file}: ${r.kb.toFixed(1)} KB`));
} else {
  console.log('\n✅ Tất cả ≤ 200KB');
}
