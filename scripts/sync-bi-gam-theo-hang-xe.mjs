// Đồng bộ trang auto365/bi-gam/theo-hang-xe với bài mới trên auto365.vn
//   node scripts/sync-bi-gam-theo-hang-xe.mjs            → cập nhật content-src.html rồi build lại index.html
//   node scripts/sync-bi-gam-theo-hang-xe.mjs --dry-run  → chỉ báo cáo, không ghi file
// Nguồn: sitemap blog + chuyên mục "Tư vấn nâng cấp theo xe".
//  - Bài lắp bi gầm thực tế (case)      → thêm vào mảng CA (khối "Xe thực tế")
//  - Bài tư vấn theo dòng xe bi-gam-<hãng>-<dòng> → thêm vào GUIDE (link "Xem chi tiết") + khối Cẩm nang
// Chỉ THÊM MỚI, không xoá/sửa dữ liệu đã có. Bài không nhận diện được hãng/dòng xe sẽ được liệt kê để duyệt tay.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const DRY = process.argv.includes('--dry-run');
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/(\w:)/, '$1')), '..');
const SRC = path.join(root, 'auto365/bi-gam/theo-hang-xe/content-src.html');
const SITE = 'https://auto365.vn/';
let s = fs.readFileSync(SRC, 'utf8');

const BRANDS = { toyota: 'Toyota', vinfast: 'VinFast', ford: 'Ford', honda: 'Honda', hyundai: 'Hyundai', kia: 'Kia', mazda: 'Mazda', mitsubishi: 'Mitsubishi', bmw: 'BMW', lexus: 'Lexus', suzuki: 'Suzuki', nissan: 'Nissan', peugeot: 'Peugeot', volkswagen: 'Volkswagen', audi: 'Audi', 'land-rover': 'Land Rover', porsche: 'Porsche', chevrolet: 'Chevrolet', isuzu: 'Isuzu', daewoo: 'Daewoo', jeep: 'Jeep', elantra: 'Hyundai' };
const brandOf = (slug) => {
  for (const k of Object.keys(BRANDS).sort((a, b) => b.length - a.length)) if (slug.startsWith(k + '-')) return BRANDS[k];
  const m = slug.match(/-(?:cho|tren)-(?:xe-yeu-)?([a-z]+(?:-rover)?)/); return m && BRANDS[m[1]] ? BRANDS[m[1]] : null;
};
const isCase = (slug) => /(lap|nang-cap|do|len)-(den-)?bi-gam|bi-gam-.*(cho|tren)-|ho-so-nang-cap-bi-gam/.test(slug)
  && !/^(bi-gam-|nang-cap-bi-gam-nao|nang-cap-anh-sang|bang-|co-nen|tai-sao|loi-ich|luu-y|tong-hop|do-den-bi-gam-(tai|khi|chat|tang|f10|gtr|titan|x-light|xlight|3-che))/.test(slug)
  && !!brandOf(slug);
const isGuide = (slug) => /^bi-gam-[a-z]+(-[a-z0-9]+)+$/.test(slug) && !!brandOf(slug.replace(/^bi-gam-/, ''));

const get = async (u) => { const r = await fetch(u, { headers: { 'User-Agent': 'Mozilla/5.0 Auto365-sync' } }); if (!r.ok) throw new Error(r.status + ' ' + u); return r.text(); };
const meta = (h) => ({
  title: ((h.match(/<title>([^<]*)/) || [])[1] || '').replace(/&amp;/g, '&').replace(/\s*\|\s*Auto365.*$/i, '').trim(),
  image: (h.match(/property="og:image" content="([^"]*)"/) || [])[1] || '',
  desc: ((h.match(/name="description" content="([^"]*)"/) || [])[1] || '').replace(/&amp;/g, '&'),
  date: ((h.match(/"datePublished":\s*"([0-9-]{10})/) || [])[1]) || '',
});

// ---- dữ liệu hiện có trong trang ----
const caM = s.match(/var CA=(.*);\n/);
const CA = JSON.parse(caM[1]);
const haveCase = new Set(CA.map((c) => c[3]));
const gM = s.match(/var GUIDE=\{([^\n]*?)\};/);
const GUIDE = Object.fromEntries([...gM[1].matchAll(/'?([^':,]+)'?:'([a-z0-9-]+)'/g)].map((m) => [m[1], m[2]]));
const LINEUP = Function('return ' + s.match(/var LINEUP=(\{[\s\S]*?\});/)[1])();
const haveGuideCard = new Set([...s.matchAll(/class="bght-guide[^"]*" href="https:\/\/auto365\.vn\/([a-z0-9-]+)"/g)].map((m) => m[1]));
const caseOnly = new Set(Object.values(GUIDE));
// bài chỉ có tư vấn (dòng xe không có case) nằm trong mảng C với c[7]=1
[...s.matchAll(/'(bi-gam-[a-z0-9-]+)',N\+[^\]]*?,'https:\/\/auto365\.vn\/\1',1\]/g)].forEach((m) => caseOnly.add(m[1]));

// ---- quét nguồn ----
const slugs = new Set();
const sm = await get(SITE + 'sitemap/sitemap-blog.xml');
[...sm.matchAll(/<loc>https:\/\/auto365\.vn\/([a-z0-9-]+)<\/loc>/g)].forEach((m) => slugs.add(m[1]));
for (let p = 1; p <= 10; p++) {
  let h; try { h = await get(SITE + 'tin-tuc/tu-van-nang-cap-theo-xe' + (p > 1 ? '?page=' + p : '')); } catch { break; }
  const before = slugs.size;
  [...h.matchAll(/href="(?:https:\/\/auto365\.vn)?\/([a-z0-9-]+)"/g)].forEach((m) => slugs.add(m[1]));
  if (slugs.size === before && p > 1) break;
}
const newCases = [...slugs].filter((x) => isCase(x) && !haveCase.has(x));
const newGuides = [...slugs].filter((x) => isGuide(x) && !caseOnly.has(x) && !haveGuideCard.has(x));
console.log(`Quét ${slugs.size} link · case mới: ${newCases.length} · bài tư vấn mới: ${newGuides.length}`);

// ---- chuẩn hoá tên (cùng quy tắc với dữ liệu đang có) ----
const FIX = { ecosport: 'EcoSport', raptor: 'Raptor', 'land cruiser': 'Land Cruiser', scirocco: 'Scirocco', orlando: 'Orlando', odyssey: 'Odyssey', sunny: 'Sunny', rubicon: 'Rubicon', fadil: 'Fadil' };
const fixCase = (t) => (t === t.toUpperCase() ? t.charAt(0) + t.slice(1).toLowerCase() : t)
  .replace(/x-light/gi, 'X-Light').replace(/\bgtr\b/gi, 'GTR').replace(/\bf10\b/gi, 'F10').replace(/\bg1\b/gi, 'G1').replace(/\bx3\b/gi, 'X3')
  .replace(/\b(toyota|honda|ford|mazda|hyundai|vinfast|mitsubishi|nissan|peugeot|porsche|suzuki|chevrolet|volkswagen|jeep|kia)\b/gi, (w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
  .replace(/\bbmw\b/gi, 'BMW').replace(/\b(cr-v|cx-5|cx-8|x5|lr2|xl7)\b/gi, (w) => w.toUpperCase()).replace(/Vinfast/g, 'VinFast');
const nameOf = (t, b) => {
  let x = t.replace(/^Đèn bi gầm .*? cho /i, '').replace(/^Nâng cấp bi gầm .*? cho “?xế yêu”? /i, '');
  x = x.split(/\s(?:19|20)\d{2}(?=\s|$)|\s(?:lắp|nâng cấp|độ|đời)\s|:/i)[0].trim();
  for (const k in FIX) x = x.replace(new RegExp('\\b' + k + '\\b', 'i'), FIX[k]);
  if (!x.toLowerCase().startsWith(b.toLowerCase())) x = b + ' ' + x.replace(new RegExp('^' + b + '\\s*', 'i'), '');
  return x.replace(/\s+/g, ' ');
};
const nz = (x) => x.toLowerCase().replace(/[\s-]/g, '');
const modelOf = (b, slugOrTitle) => (LINEUP[b] || []).map((x) => x[0]).sort((a, z) => z.length - a.length).find((m) => nz(slugOrTitle).includes(nz(m)));

// ---- lấy dữ liệu bài mới ----
const review = [];
for (const slug of newCases) {
  const m = meta(await get(SITE + slug));
  if (!m.title || !m.image) { review.push(`[case thiếu tiêu đề/ảnh] ${slug}`); continue; }
  const b = brandOf(slug), t = fixCase(m.title);
  CA.push([b, nameOf(t, b), t, slug, m.image, m.date]);
  if (!modelOf(b, t + ' ' + slug)) review.push(`[case chưa khớp dòng xe trong LINEUP] ${b} · ${t} → ${SITE}${slug}`);
  console.log('  + case', b, '·', t);
}
const guideCards = [];
for (const slug of newGuides) {
  const b = brandOf(slug.replace(/^bi-gam-/, ''));
  const m = meta(await get(SITE + slug));
  if (!m.title) { review.push(`[bài tư vấn thiếu tiêu đề] ${slug}`); continue; }
  const model = modelOf(b, slug.replace(/^bi-gam-[a-z]+(-rover)?-/, ''));
  if (model && !GUIDE[model]) GUIDE[model] = slug;
  else if (!model) review.push(`[bài tư vấn chưa khớp dòng xe trong LINEUP] ${b} · ${m.title} → ${SITE}${slug}`);
  const esc = (x) => x.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
  guideCards.push(`  <a class="bght-guide" href="${SITE}${slug}"><span class="im"><img src="${m.image}" alt="${esc(m.title)}" loading="lazy"><span class="lb">Theo dòng xe</span></span><span class="bd"><h3>${esc(m.title)}</h3><p>${esc(m.desc)}</p><time datetime="${m.date}">${m.date.split('-').reverse().join('/')}</time></span></a>`);
  console.log('  + bài tư vấn', b, model || '(?)', '·', m.title);
}

if (review.length) console.log('\nCần duyệt tay:\n  ' + review.join('\n  '));
if (!newCases.length && !newGuides.length) { console.log('Không có bài mới.'); process.exit(0); }
if (DRY) { console.log('\n--dry-run: không ghi file.'); process.exit(0); }

// ---- ghi lại content-src.html ----
CA.sort((a, z) => (z[5] || '').localeCompare(a[5] || ''));
s = s.replace(caM[0], 'var CA=' + JSON.stringify(CA) + ';\n');
s = s.replace(gM[0], 'var GUIDE={' + Object.entries(GUIDE).map(([k, v]) => `${/^[A-Za-z0-9]+$/.test(k) ? k : `'${k}'`}:'${v}'`).join(',') + '};');
if (guideCards.length) {
  const anchor = s.indexOf('  <a class="bght-guide"');
  s = s.slice(0, anchor) + guideCards.join('\n') + '\n' + s.slice(anchor);
}
fs.writeFileSync(SRC, s);
console.log('\nĐã cập nhật content-src.html, build lại trang...');
execFileSync(process.execPath, [path.join(root, 'scripts/build-bi-gam-theo-hang-xe.mjs')], { stdio: 'inherit' });
