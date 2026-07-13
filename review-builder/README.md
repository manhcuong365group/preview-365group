# review-builder

Đóng gói bất kỳ URL preview nào (ví dụ một page Auto365 trên Cloudflare Pages) thành **1 file HTML standalone + PDF Chrome Print** — inline ảnh/font/CSS/JS, giữ nguyên navigation links và JSON-LD schema. Dùng để gửi sếp review hoặc feed vào AI (ChatGPT/Claude/Gemini).

## Cài đặt

```bash
cd review-builder
npm install
```

Puppeteer sẽ tự tải Chromium (~300MB) lần đầu. Node ≥ 20.

## Dùng

```bash
# Bundle URL preview → dist/review.html + dist/review.pdf
node build.js "https://preview-365group.pages.dev/ceramic-ir/"

# Preset cho AI review: strip topbar/mobilebar/template/tracking JS, giảm ngưỡng ảnh còn 150 KB
node build.js "https://preview-365group.pages.dev/ceramic-ir/" --ai-review

# Chỉ giữ 1 phần (VD toàn bộ <main>), bỏ header/footer/nav
node build.js "https://.../" --keep-selector=main

# Strip selector tuỳ chỉnh, đổi output path, bỏ PDF
node build.js "https://.../" --remove=".ads,#popup" --output=./dist/x.html --no-pdf

# Tăng ngưỡng inline ảnh (mặc định 250 KB) để file self-contained hoàn toàn
node build.js "https://.../" --inline-image-max=500

# Xem full flag
node build.js --help
```

Output đặt trong `dist/` (gitignored).

## Bên trong

- `build.js` — CLI entry
- `lib/crawler.js` — Puppeteer navigate + response cache
- `lib/inline-assets.js` — base64 rewrite cho img/source/video[poster]/link/style/script; parse CSS `url()` bằng css-tree
- `lib/minify.js` — html-minifier-terser với JSON-LD placeholder swap (không bao giờ đụng schema)
- `lib/pdf.js` — page.pdf() Chrome Print, A4 margin 12/10mm
- `lib/config.js` — DEFAULTS + AI_REVIEW_PRESET (Auto365-tuned selectors)

## Bảo toàn

Tool **không đụng**: `<a href>` navigation, `<link rel="canonical">`, `<meta property="og:*">`, hreflang, và **toàn bộ `<script type="application/ld+json">`** (giữ nguyên byte-for-byte qua placeholder swap trong minify).

## Ghi chú

- Nếu URL trả về HTML < 20 KB thì có thể Cloudflare Pages fallback về listing page (folder chưa deploy). Push git để trigger auto-build trước khi bundle.
- V2 backlog: local mode (bỏ Puppeteer), `sharp` convert WebP trước base64, `--cache-dir`, `--single-file-ai` preset chặt hơn.
