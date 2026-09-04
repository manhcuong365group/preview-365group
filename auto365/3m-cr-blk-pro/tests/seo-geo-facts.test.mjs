import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');

test('states the CR BLK Pro ontology and search-intent heading accurately', () => {
  assert.match(html, /<h1>Phim cách nhiệt 3M CR BLK Pro: cấu hình, giá và cách chọn<\/h1>/);
  assert.match(html, /CR BLK Pro là gói phối mã do Auto365 xây dựng từ phim 3M Crystalline CR BLK, không phải mã riêng của 3M\./);
  assert.match(html, /không phải một mã phim, model, SKU hoặc dòng sản phẩm riêng do 3M công bố/);
});

test('shows the verified configuration for each published case', () => {
  for (const [model, config] of [
    ['VinFast VF 7', 'CR BLK 40 / 15 / 15'],
    ['Peugeot 408', 'CR BLK 40 / 35 / 15'],
    ['Volvo XC90', 'CR BLK 40 / 15 / 15 · Panorama: CR BLK 15'],
    ['Toyota Fortuner', 'CR BLK 40 / 15 / 15'],
    ['Honda CR-V', 'CR BLK 40 / 15 / 15'],
    ['Honda HR-V', 'CR BLK 40 / 15 / 15'],
  ]) {
    assert.match(html, new RegExp(`<h3>${model}<\\/h3><p>Cấu hình đã dán: ${config.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}<\\/p>`));
  }
});

test('keeps technical copy attributed to the applicable 3M TDS conditions', () => {
  assert.match(html, /Thông số theo tài liệu 3M/);
  assert.match(html, /Technical Data Sheet, Revision E, May 2024, Table B/);
  assert.match(html, /IRER được xác định trong dải 780–2\.500 nm/);
  assert.doesNotMatch(html, /Auto365 đo/);
});

test('uses Service schema without a price claim or a LocalBusiness entity on the money page', () => {
  assert.match(html, /"@type": "Service"/);
  assert.doesNotMatch(html, /"@type": "Product"/);
  assert.doesNotMatch(html, /"@type": "LocalBusiness"/);
  assert.doesNotMatch(html, /"@type": "Offer"/);
});

test('links the warranty statement to the official 3M Vietnam policy page', () => {
  assert.match(html, /https:\/\/www\.3m\.com\.vn\/3M\/vi_VN\/car-personalization-vn\/products\/automotive-window-tint\//);
  assert.match(html, /phim cách nhiệt ô tô 3M được hỗ trợ bảo hành lên tới 10 năm/);
});

test('keeps case configuration visible and modal controls accessible', () => {
  assert.match(html, /\.case-content p\{display:block/);
  assert.match(html, /\.form-modal-close\{display:none/);
  assert.match(html, /\.form-modal-open \.form-modal-close\{display:grid/);
  assert.match(html, /data-brand="all" aria-pressed="true"/);
  assert.match(html, /setAttribute\('aria-pressed',String\(item===filter\)\)/);
});

test('keeps JSON-LD and the inline interaction script syntactically valid', () => {
  const jsonLd = html.match(/<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/)?.[1];
  assert.ok(jsonLd, 'JSON-LD block exists');
  assert.doesNotThrow(() => JSON.parse(jsonLd));

  const inlineScripts = [...html.matchAll(/<script(?:[^>]*)>([\s\S]*?)<\/script>/g)]
    .map((match) => match[1])
    .filter((script) => script.trim() && !script.includes('"@context"'));
  assert.ok(inlineScripts.length > 0);
  inlineScripts.forEach((script) => assert.doesNotThrow(() => new Function(script)));
});

test('uses real price buttons and a keyboard-safe consultation modal', () => {
  assert.match(html, /<button type="button" class="price-card" id="price-minicar"/);
  assert.match(html, /<button type="button" class="price-card active" id="price-sedan"/);
  assert.match(html, /lastModalTrigger/);
  assert.match(html, /event\.key==='Tab'/);
  assert.match(html, /consultForm\.contains\(event\.target\)/);
});

test('keeps stylesheet tags balanced so browser CSS parsing is deterministic', () => {
  const openingTags = (html.match(/<style(?:\s[^>]*)?>/g) || []).length;
  const closingTags = (html.match(/<\/style>/g) || []).length;
  assert.equal(openingTags, closingTags);
});
