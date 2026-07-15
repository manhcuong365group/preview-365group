// Đồng bộ branchData trong main.html theo CSV master (địa chỉ sau sáp nhập là source of truth).
//
// Update:
//   - addr → cột "Địa chỉ mới sau sáp nhập chi tiết" (col 9)
//   - province → cột "Tỉnh mới" (col 7)
//   - legacy → cột "Tỉnh cũ" (col 6)
//   - lat/lng → chỉ update nếu CSV có giá trị khác preview (bảo toàn geocode chuẩn)
//
// Match rule: CSV slug (col 1) === branchData slug (b.slug bỏ "/") hoặc b.id
//
// Usage: node scripts/sync-branchdata-from-csv.mjs

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CSV = path.join(REPO, 'docs', 'auto365-master-merged.csv');
const HTML = path.join(REPO, 'auto365', 'he-thong', 'main.html');

// Verified coordinate overrides từ Google Maps thật (khi CSV/preview còn fallback tâm tỉnh)
const COORD_OVERRIDES = {
  'thu-duc': { lat: 10.8402348, lng: 106.7137664 }, // Auto365.vn Trụ Sở Chính GBP place_id
};

// Chuẩn hoá tên tỉnh: CSV có nhiều biến thể ("TP. Hồ Chí Minh", "Thành phố Cần Thơ", "Thừa Thiên Huế")
// → chuyển về short form nhất quán mà preview đã dùng
const PROV_CANONICAL = {
  'TP. Hồ Chí Minh': 'TP.HCM',
  'Thành phố Hồ Chí Minh': 'TP.HCM',
  'Thành Phố Hồ Chí Minh': 'TP.HCM',
  'Hồ Chí Minh': 'TP.HCM',
  'Thành phố Cần Thơ': 'Cần Thơ',
  'Thừa Thiên Huế': 'Huế',
  'Thừa Thiên - Huế': 'Huế',
  'Thanh Hoá': 'Thanh Hóa',
  'Khánh Hoà': 'Khánh Hòa',
};
const canonProv = p => PROV_CANONICAL[p] || p;

function parseCSV(text){
  const bom = text.charCodeAt(0) === 0xFEFF;
  const raw = bom ? text.slice(1) : text;
  const rows=[]; let f='', row=[], q=false;
  for (let i=0;i<raw.length;i++) {
    const c=raw[i];
    if(q){ if(c==='"'&&raw[i+1]==='"'){f+='"';i++;} else if(c==='"')q=false; else f+=c; }
    else { if(c==='"')q=true; else if(c===',') {row.push(f); f='';}
      else if(c==='\n'||c==='\r') { if(c==='\r'&&raw[i+1]==='\n')i++; row.push(f); rows.push(row); row=[]; f=''; }
      else f+=c;
    }
  }
  if(f.length||row.length){row.push(f);rows.push(row);}
  return rows;
}

const csvRows = parseCSV(fs.readFileSync(CSV,'utf8')).filter(r => r.length > 5);
const header = csvRows[0];
const bySlug = new Map();
for (let i=1; i<csvRows.length; i++) {
  const r = csvRows[i];
  const slug = (r[1]||'').trim();
  if (!slug) continue;
  bySlug.set(slug, r);
}
console.log(`CSV: ${bySlug.size} rows keyed by slug`);

const html = fs.readFileSync(HTML,'utf8');
const m = html.match(/(<script id="branchData"[^>]*>)([\s\S]*?)(<\/script>)/);
if (!m) { console.error('branchData not found'); process.exit(1); }
const branches = JSON.parse(m[2]);
console.log(`branchData: ${branches.length} branches`);

let updated=0, unmatched=[];
for (const b of branches) {
  const slug = (b.slug||'').replace(/^\//,'');
  const row = bySlug.get(slug);
  if (!row) { unmatched.push(b.name); continue; }
  const newAddr = (row[9]||'').trim();
  const oldAddr = (row[8]||'').trim();
  const newProv = canonProv((row[7]||'').trim());
  const oldProv = canonProv((row[6]||'').trim());
  if (newAddr) b.addr = newAddr;
  // Giữ địa chỉ cũ nếu khác địa chỉ mới (nhiều điểm chỉ đổi cấp hành chính, không đổi street)
  if (oldAddr && oldAddr !== newAddr) b.addrOld = oldAddr;
  if (newProv) b.province = newProv;
  if (oldProv && oldProv !== newProv) b.legacy = oldProv;
  // Coord override (verified from Google Maps)
  if (COORD_OVERRIDES[slug]) {
    b.lat = COORD_OVERRIDES[slug].lat;
    b.lng = COORD_OVERRIDES[slug].lng;
  }
  updated++;
}

// Write back
const newPayload = JSON.stringify(branches, null, 0);
const newHtml = html.slice(0, m.index) + m[1] + newPayload + m[3] + html.slice(m.index + m[0].length);
fs.writeFileSync(HTML, newHtml, 'utf8');

console.log(`\n════════════════════════════════════════════`);
console.log(`  Sync complete`);
console.log(`════════════════════════════════════════════`);
console.log(`  Updated:     ${updated}/${branches.length}`);
console.log(`  Unmatched:   ${unmatched.length}`);
if (unmatched.length) unmatched.forEach(n => console.log(`    • ${n}`));
console.log(`  Coord overrides applied: ${Object.keys(COORD_OVERRIDES).length}`);
