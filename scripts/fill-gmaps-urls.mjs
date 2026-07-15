// Điền cột "Google Maps Place URL" cho tất cả branch trong CSV master từ địa chỉ mới sau sáp nhập.
// Không cần API key, không cần billing — dùng Google Maps Search URL Scheme (public, free).
// Bỏ qua các row đã có sẵn URL (VD Trụ Sở Chính đã có canonical place_id).
//
// Usage: node scripts/fill-gmaps-urls.mjs

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CSV = path.join(REPO, 'docs', 'auto365-master-merged.csv');
const TODAY = '15/07/2026'; // Cập nhật date column

// --- CSV parser (handle quoted fields) ---
function parseRow(line){
  const out=[]; let f='', q=false;
  for(let i=0;i<line.length;i++){ const c=line[i];
    if(q){ if(c==='"'&&line[i+1]==='"'){f+='"';i++;} else if(c==='"')q=false; else f+=c; }
    else { if(c==='"')q=true; else if(c===','){out.push(f);f='';} else f+=c; }
  } out.push(f); return out;
}
function toRow(a){ return a.map(v=>/[",\n\r]/.test(v)?'"'+v.replace(/"/g,'""')+'"':v).join(','); }

// Build search URL từ địa chỉ. Ưu tiên "name + address" cho match Google Maps chính xác hơn.
function buildMapsURL(name, address, province) {
  // Concat name + address + " Việt Nam" giúp Google Maps match đúng branch (không nhầm địa danh khác)
  const parts = [name, address, province, 'Việt Nam'].filter(Boolean).map(s => s.trim());
  const query = parts.join(', ');
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

// --- Load CSV ---
const text = fs.readFileSync(CSV, 'utf8');
const bom = text.charCodeAt(0) === 0xFEFF ? '﻿' : '';
const raw = bom ? text.slice(1) : text;
const lines = raw.split('\r\n').filter(l => l.length > 0);
const header = parseRow(lines[0]);

// Column index reference (0-based, 42 cols)
const COL = {
  slug: 1,             // ID Slug
  nameOrig: 4,         // Tên gốc (trước sáp nhập)
  nameNew: 5,          // Tên hiển thị (sau sáp nhập)
  provOld: 6,          // Tỉnh cũ
  provNew: 7,          // Tỉnh mới
  addrOld: 8,          // Địa chỉ cũ
  addrNew: 9,          // Địa chỉ mới
  gmapsUrl: 12,        // Google Maps Place URL
  gmapsEmbed: 13,      // Google Maps Embed iframe HTML
  dateUpdated: 23,     // Ngày cập nhật (DD/MM/YYYY)
};

let filled=0, skipped=0, missing=0;
const out = [lines[0]]; // keep header
for (let i = 1; i < lines.length; i++) {
  const cols = parseRow(lines[i]);
  if (cols.length < 42) { out.push(lines[i]); continue; }

  const slug = cols[COL.slug];
  const name = cols[COL.nameOrig];
  const addr = cols[COL.addrNew] || cols[COL.addrOld];
  const prov = cols[COL.provNew] || cols[COL.provOld];

  if (!addr) {
    missing++;
    console.log(`  ⚠ ${slug} (${name}) — không có địa chỉ, skip`);
    out.push(lines[i]);
    continue;
  }

  // Đã có URL sẵn (VD Trụ Sở Chính có canonical place_id) → giữ nguyên
  if (cols[COL.gmapsUrl] && cols[COL.gmapsUrl].trim()) {
    skipped++;
    out.push(lines[i]);
    continue;
  }

  cols[COL.gmapsUrl] = buildMapsURL(name, addr, prov);
  if (!cols[COL.dateUpdated]) cols[COL.dateUpdated] = TODAY;
  filled++;
  out.push(toRow(cols));
}

fs.writeFileSync(CSV, bom + out.join('\r\n') + '\r\n', 'utf8');

console.log('\n════════════════════════════════════════════');
console.log('  Google Maps URL auto-fill complete');
console.log('════════════════════════════════════════════');
console.log(`  Filled (new):       ${filled}`);
console.log(`  Skipped (đã có):    ${skipped}`);
console.log(`  Missing (no addr):  ${missing}`);
console.log(`\n  CSV → ${CSV}`);
