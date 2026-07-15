// Geocode 89 branch addresses via Goong Places API để lấy lat/lng chính xác street-level.
// Update cả branchData trong main.html LẪN CSV master (giữ 2 nguồn đồng bộ).
//
// Usage: node scripts/geocode-goong.mjs
// Optional: node scripts/geocode-goong.mjs --force  (geocode lại cả điểm đã có tọa độ)

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const HTML = path.join(REPO, 'auto365', 'he-thong', 'main.html');
const CSV = path.join(REPO, 'docs', 'auto365-master-merged.csv');
const API_KEY = 'aUUZ711jhbPbZmV7MrbGV3b3GHxYZgMX0KtKtC1X';
const FORCE = process.argv.includes('--force');

// Coord Auto365 place_id (đã verified thủ công) — không geocode lại
const VERIFIED = new Set(['thu-duc']);

// Vietnam bounding box sanity check
const VN_BOUNDS = { latMin: 6.5, latMax: 24, lngMin: 101.5, lngMax: 117.5 };
const inVN = (lat, lng) => lat >= VN_BOUNDS.latMin && lat <= VN_BOUNDS.latMax && lng >= VN_BOUNDS.lngMin && lng <= VN_BOUNDS.lngMax;

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function geocode(query) {
  const url = `https://rsapi.goong.io/geocode?address=${encodeURIComponent(query)}&api_key=${API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) return { error: `HTTP ${res.status}` };
  const data = await res.json();
  if (!data.results || !data.results.length) return { error: 'no results' };
  const top = data.results[0];
  const lat = top.geometry?.location?.lat;
  const lng = top.geometry?.location?.lng;
  if (lat == null || lng == null) return { error: 'no coords in result' };
  return { lat, lng, matched: top.formatted_address };
}

// --- Load branchData ---
const html = fs.readFileSync(HTML, 'utf8');
const m = html.match(/(<script id="branchData"[^>]*>)([\s\S]*?)(<\/script>)/);
const branches = JSON.parse(m[2]);
console.log(`Loaded ${branches.length} branches`);

// Track province center coords to detect "still fallback" (i.e. tọa độ giống nhau ~= province fallback)
const provinceCenters = new Map();
for (const b of branches) {
  const key = b.province + '|' + (b.lat?.toFixed(2)) + ',' + (b.lng?.toFixed(2));
  provinceCenters.set(key, (provinceCenters.get(key) || 0) + 1);
}

let ok = 0, fail = 0, skipped = 0, verified = 0;
const changes = [];

for (let i = 0; i < branches.length; i++) {
  const b = branches[i];
  const slug = (b.slug || '').replace(/^\//, '');
  const idx = String(i + 1).padStart(2, '0');
  const name = (b.name || '').padEnd(40).slice(0, 40);

  if (VERIFIED.has(slug)) {
    console.log(`[${idx}/${branches.length}] ${name} ✓ VERIFIED (skip)`);
    verified++;
    continue;
  }

  if (!b.addr) {
    console.log(`[${idx}/${branches.length}] ${name} ⚠ no addr (skip)`);
    skipped++;
    continue;
  }

  // Skip already-precise coords unless --force. Detect fallback by checking if coord is shared with other branches in same province.
  const coordKey = b.province + '|' + b.lat?.toFixed(2) + ',' + b.lng?.toFixed(2);
  const isFallback = (provinceCenters.get(coordKey) || 0) > 1;
  if (!FORCE && b.lat != null && !isFallback) {
    console.log(`[${idx}/${branches.length}] ${name} ✓ has precise coord (skip, use --force to redo)`);
    skipped++;
    continue;
  }

  const query = `${b.name}, ${b.addr}${b.province ? ', ' + b.province : ''}, Việt Nam`;
  const result = await geocode(query);
  if (result.error || !inVN(result.lat, result.lng)) {
    console.log(`[${idx}/${branches.length}] ${name} ✗ ${result.error || 'out of VN'}`);
    fail++;
  } else {
    const oldLat = b.lat, oldLng = b.lng;
    b.lat = Math.round(result.lat * 1e6) / 1e6;
    b.lng = Math.round(result.lng * 1e6) / 1e6;
    const drift = oldLat && oldLng ? Math.sqrt((oldLat - b.lat) ** 2 + (oldLng - b.lng) ** 2) : 0;
    console.log(`[${idx}/${branches.length}] ${name} ✓ ${b.lat},${b.lng}${drift ? ` (drift ${drift.toFixed(2)}°)` : ''}`);
    changes.push({ slug, name: b.name, old: [oldLat, oldLng], new: [b.lat, b.lng] });
    ok++;
  }
  await sleep(250); // Goong rate limit: 250ms between calls = ~4 req/s = 240 req/min
}

// Write branchData back
const newPayload = JSON.stringify(branches, null, 0);
const newHtml = html.slice(0, m.index) + m[1] + newPayload + m[3] + html.slice(m.index + m[0].length);
fs.writeFileSync(HTML, newHtml, 'utf8');

// Update CSV lat/lng columns (10, 11)
const csvText = fs.readFileSync(CSV, 'utf8');
const bomChar = csvText.charCodeAt(0) === 0xFEFF;
let csvBody = bomChar ? csvText.slice(1) : csvText;
for (const c of changes) {
  // Find row starting with STT,slug,... update cols 10 (lat) and 11 (lng)
  csvBody = csvBody.replace(new RegExp(`^(\\d+,${c.slug},[^\\n]*)`, 'm'), (row) => {
    const parseRow = (line) => {
      const out=[]; let f='', q=false;
      for(let i=0;i<line.length;i++){ const ch=line[i];
        if(q){ if(ch==='"'&&line[i+1]==='"'){f+='"';i++;} else if(ch==='"')q=false; else f+=ch; }
        else { if(ch==='"')q=true; else if(ch===','){out.push(f);f='';} else f+=ch; }
      } out.push(f); return out;
    };
    const toRow = (a) => a.map(v=>/[",\n\r]/.test(v)?'"'+v.replace(/"/g,'""')+'"':v).join(',');
    const cols = parseRow(row);
    if (cols.length >= 12) { cols[10] = String(c.new[0]); cols[11] = String(c.new[1]); }
    return toRow(cols);
  });
}
fs.writeFileSync(CSV, (bomChar ? '﻿' : '') + csvBody, 'utf8');

console.log('\n════════════════════════════════════════════');
console.log('  Goong geocoding complete');
console.log('════════════════════════════════════════════');
console.log(`  Geocoded:    ${ok}`);
console.log(`  Failed:      ${fail}`);
console.log(`  Skipped:     ${skipped} (đã có tọa độ chính xác — dùng --force để redo)`);
console.log(`  Verified:    ${verified} (đã verify thủ công, luôn skip)`);
console.log(`  → branchData + CSV đã cập nhật`);
