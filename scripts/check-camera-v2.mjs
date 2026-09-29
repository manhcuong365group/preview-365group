// Kiểm giá camera-hanh-trinh-v2 khớp nhau giữa data/catalog.ssot.js, card HTML và danh sách <noscript>.
// Chạy: node scripts/check-camera-v2.mjs  (exit 1 nếu lệch → không được deploy)
import fs from "node:fs";
import vm from "node:vm";

const dir = new URL("../auto365/camera-hanh-trinh-v2/", import.meta.url);
const html = fs.readFileSync(new URL("index.html", dir), "utf8");
const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync(new URL("data/catalog.ssot.js", dir), "utf8"), ctx);
const catalog = ctx.window.CATALOG_SSOT.filter(p => ["active", "available_on_request"].includes(p.status));

const fmt = n => (n ? new Intl.NumberFormat("vi-VN").format(n) + "đ" : "Liên hệ");
const errors = [];
const seen = new Set();

for (const p of catalog) {
  if (seen.has(p.product_id)) errors.push(`trùng product_id: ${p.product_id}`);
  seen.add(p.product_id);
  const want = fmt(p.price);
  const url = p.pdp_url;

  const card = html.split("\n").find(l => l.startsWith('<article class="product">') && l.includes(`href="${url}"`));
  if (!card) errors.push(`thiếu card HTML: ${url}`);
  else {
    const m = card.match(/<div class="price[^"]*">([^<]+)<\/div>/);
    if (!m || m[1] !== want) errors.push(`card lệch giá ${url}: ${m ? m[1] : "?"} ≠ ${want}`);
    const cov = p.coverage || (p.channels === 3 ? "front-rear-cabin" : p.channels === 2 ? "front-rear" : "front");
    const wantLabel = p.coverage_basis === "inferred" && p.channels > 1
      ? `Bộ ${p.channels} kênh · hướng ghi cần xác nhận`
      : { "front-rear-cabin": "Bộ 3 kênh · trước – sau – cabin", "front-rear": "Bộ 2 kênh · trước – sau", "front-cabin": "Bộ 2 kênh · trước – cabin", front: "Bản camera trước · 1 kênh" }[cov];
    const lab = card.match(/<small class="bundle-label">([^<]+)<\/small>/);
    if (!lab || lab[1] !== wantLabel) errors.push(`card lệch hướng ghi ${url}: ${lab ? lab[1] : "?"} ≠ ${wantLabel}`);
  }

  const li = html.match(new RegExp(`<li><a href="${url.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}">[^<]*— ([^<]+)</a></li>`));
  if (!li) errors.push(`thiếu dòng <noscript>: ${url}`);
  else if (li[1] !== want) errors.push(`<noscript> lệch giá ${url}: ${li[1]} ≠ ${want}`);
}

if (errors.length) {
  console.error(`✗ ${errors.length} lỗi:\n` + errors.join("\n"));
  process.exit(1);
}
console.log(`✓ ${catalog.length} sản phẩm: giá và hướng ghi khớp giữa catalog.ssot.js, card HTML và <noscript>.`);
