// Generate 88 LocalBusiness/AutoRepair JSON-LD nodes from branchData → inject vào main.html.
// Đọc branchData (đã sync + geocode qua Goong) → build 1 <script id="localBusinessSchema">.
//
// Usage: node scripts/generate-localbusiness-schema.mjs

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const HTML = path.join(REPO, 'auto365', 'he-thong', 'main.html');

const html = fs.readFileSync(HTML, 'utf8');
const m = html.match(/<script id="branchData"[^>]*>([\s\S]*?)<\/script>/);
const branches = JSON.parse(m[1]);

// Normalize phone to E.164 (0365... → +84365...)
const e164 = (raw) => {
  const digits = String(raw||'').replace(/[^\d]/g, '');
  if (!digits) return null;
  if (digits.startsWith('84')) return '+' + digits;
  if (digits.startsWith('0')) return '+84' + digits.slice(1);
  return '+84' + digits;
};

// Encode image URL — path có space + dấu tiếng Việt phải percent-encode để Googlebot chấp nhận
const encImg = (raw) => {
  if (!raw) return null;
  // Nếu đã absolute URL thì encode phần path/filename; nếu relative thì encode nguyên
  try {
    if (/^https?:\/\//i.test(raw)) {
      const u = new URL(raw);
      u.pathname = u.pathname.split('/').map(seg => encodeURIComponent(decodeURIComponent(seg))).join('/');
      return u.toString();
    }
    return raw.split('/').map(seg => encodeURIComponent(decodeURIComponent(seg))).join('/');
  } catch { return raw; }
};

// Parse locality vs region từ b.province + b.addr
// - Nếu province là TP trực thuộc TW (TP.HCM, Hà Nội, Đà Nẵng, Hải Phòng, Cần Thơ, Huế) → dùng làm addressLocality luôn
// - Nếu là "Tỉnh X" → addressRegion = "X" (bỏ prefix "Tỉnh"), addressLocality = null (Googlebot sẽ suy từ streetAddress)
const CENTRAL_CITIES = new Set(['TP.HCM','Hà Nội','Đà Nẵng','Hải Phòng','Cần Thơ','Huế']);
const splitLocality = (p) => {
  if (!p) return { locality: null, region: null };
  if (CENTRAL_CITIES.has(p)) return { locality: p, region: p };
  return { locality: null, region: p };
};

const nodes = branches
  .filter(b => b.addr && b.lat != null && b.lng != null)
  .map(b => {
    const slug = (b.slug||'').replace(/^\//,'') || b.id;
    const phones = (b.phones||[]).map(e164).filter(Boolean);
    const url = b.slug ? `https://auto365.vn${b.slug}` : `https://auto365.vn/${slug}`;
    const { locality, region } = splitLocality(b.province);
    const node = {
      "@type": ["LocalBusiness", "AutoRepair"],
      "@id": `${url}#localbusiness`,
      "name": b.name,
      "url": url,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": b.addr,
        "addressLocality": locality,
        "addressRegion": region,
        "addressCountry": "VN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": b.lat,
        "longitude": b.lng
      },
      "openingHoursSpecification": [{
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        "opens": "08:00",
        "closes": "18:30"
      }],
      "priceRange": "$$",
      "parentOrganization": { "@id": "https://auto365.vn/#organization" },
      "areaServed": b.province || null
    };
    if (phones.length) node.telephone = phones[0];
    if (b.img) node.image = encImg(b.img);
    // Clean nulls
    if (!node.address.addressLocality) delete node.address.addressLocality;
    if (!node.address.addressRegion) delete node.address.addressRegion;
    if (!node.areaServed) delete node.areaServed;
    return node;
  });

const payload = JSON.stringify({ "@context": "https://schema.org", "@graph": nodes }, null, 0);
const scriptBlock = `<script id="localBusinessSchema" type="application/ld+json">${payload}</script>`;

// Inject/replace right after branchData
let newHtml;
if (html.includes('id="localBusinessSchema"')) {
  newHtml = html.replace(/<script id="localBusinessSchema"[^>]*>[\s\S]*?<\/script>/, scriptBlock);
} else {
  // Insert after </script> of branchData
  newHtml = html.replace(
    /(<script id="branchData"[^>]*>[\s\S]*?<\/script>)/,
    `$1\n  ${scriptBlock}`
  );
}
fs.writeFileSync(HTML, newHtml, 'utf8');

console.log('════════════════════════════════════════════');
console.log(`  Generated ${nodes.length} LocalBusiness nodes`);
console.log('════════════════════════════════════════════');
console.log(`  Total branches:    ${branches.length}`);
console.log(`  With addr+coord:   ${nodes.length}`);
console.log(`  Skipped (no data): ${branches.length - nodes.length}`);
console.log(`  Payload size:      ${(payload.length/1024).toFixed(1)} KB`);
