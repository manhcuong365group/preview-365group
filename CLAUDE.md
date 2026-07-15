# preview-365group

Môi trường preview / staging cho các landing page tĩnh của **auto365.vn** (thuộc 365Group). Mỗi trang là một thư mục con trong [auto365/](auto365/), chứa `index.html` độc lập cùng với ảnh (`hinh/`) và tài liệu nguồn (`docs/`, `.md`, `.pdf`). Deploy lên **Cloudflare Pages** dưới project `preview-365group` → https://preview-365group.pages.dev/.

Ngôn ngữ nội dung: **tiếng Việt**. Ngôn ngữ giao tiếp với user cũng là tiếng Việt.

## Cấu trúc

```
preview-365group/
├── auto365/                       # Thư mục được deploy (root của Cloudflare Pages)
│   ├── index.html                 # Trang danh sách card, link tới các preview
│   ├── phim-cach-nhiet/           # Hub phim cách nhiệt (Money Hub, ~4k dòng)
│   ├── phim-cach-nhiet-3m/        # Landing 3M
│   ├── phim-cach-nhiet-o-to-3m-ceramic-hybrid/
│   ├── 3m-ceramic-nr-preview/
│   ├── crystalline-cr-blk/
│   ├── danh-gia-3m-ceramic-nr/
│   ├── bao-chi-noi-ve-auto365-365group-3m-pro-shop/  # PR / báo chí, có bảng entity
│   ├── dang-minh-hoang/           # Landing cá nhân
│   ├── g1-tubor-v2/               # Money page GTR G1 Turbo V2
│   ├── xlight-f30-ultra/          # Landing đèn Xlight F30 Ultra
│   ├── he-thong/                  # Trang danh bạ 90 điểm — DÙNG SHELL BUILD (main.html + _shell/)
│   └── bi-led-x-light-v30-ultra/  # Pillar V30 Ultra — DÙNG SHELL BUILD (index-src.html + _shell/)
├── _shell/                        # Header/footer/floating/scripts trích từ production auto365.vn — dùng chung
├── _src-media/                    # Ảnh gốc PNG/JPG chưa optimize (KHÔNG deploy — nằm ngoài auto365/). Xem [_src-media/README.md](_src-media/README.md)
├── scripts/                       # Node scripts: build-pages, extract-shell, convert-*, sync-*
├── docs/                          # Ghi chú fix (fix_baochi.md, fix đặng minh hoàng.md)
├── update_html.js                 # Script cheerio patch 1-lần cho bao-chi-* (regex thay text + inject entity table)
├── check.js                       # Snippet cheerio nháp để kiểm tra section (file bị lỗi encoding UTF-16, không chạy trực tiếp được)
├── links.txt                      # Danh sách URL Auto365 gốc để đối chiếu
├── package.json                   # cheerio, jsdom, puppeteer, html-to-docx (không có script npm)
├── DEPLOY_GUIDE.md                # Hướng dẫn deploy Cloudflare Pages (Wrangler + GitHub)
└── .agents/                       # Bộ agent nội bộ, đã .gitignore — không đụng vào
```

## Quy ước làm việc

- **Chỉ chỉnh HTML tĩnh trong `auto365/<slug>/index.html`** cho các trang standalone. Không đưa build tool, framework, hay bundler vào — Cloudflare Pages serve nguyên file. **Ngoại lệ:** 2 trang dùng shell build là `he-thong/` và `bi-led-x-light-v30-ultra/` — edit `main.html` / `index-src.html` tương ứng, xem [Pattern shell build](#pattern-shell-build-hepiece-thong--bi-led-v30-ultra) bên dưới.
- **CSS/JS inline trong từng `index.html`.** Mỗi landing page tự chứa style của nó (ví dụ [phim-cach-nhiet/index.html](auto365/phim-cach-nhiet/index.html) dùng namespace `.pcn-*`, mỗi page có prefix riêng). Không tách file chung — giữ tính độc lập của preview.
- **Ảnh đặt trong `<slug>/hinh/`** và tham chiếu bằng đường dẫn tương đối.
- Nội dung tối ưu SEO/GEO/Entity (schema.org, FAQ, entity table, E-E-A-T). Khi sửa nội dung, chú ý giữ đồng bộ giữa **visible HTML** và **JSON-LD schema** (FAQ, HowTo, Product, Organization) — commit `319d28d`, `38871fc` là ví dụ về việc sync này bị lệch.
- Tên bảng entity dùng format: `Entity ID | Thực thể | Schema Type | Vai trò | Canonical URL` (xem [update_html.js](update_html.js) làm chuẩn).

## Node scripts

`package.json` chỉ khai báo dependencies, không có `scripts`. Các script ở [scripts/](scripts/) và root là **one-off migration hoặc build utility**, chạy thủ công:

```bash
npm install                              # cài cheerio/jsdom/puppeteer/html-to-docx (sharp cần cài riêng khi convert ảnh)
node update_html.js                      # patch bao-chi-* (regex + inject entity table)
node scripts/build-pages.mjs             # rebuild tất cả trang có main.html (he-thong + v30-ultra)
node scripts/extract-shell.mjs           # fetch production auto365.vn → refresh _shell/*.html
node scripts/build-v30-main.mjs          # transform index-src.html → main.html cho V30 Ultra pillar
node scripts/convert-v30-images.mjs      # convert PNG/JPG → WebP + tạo og-image cho V30 Ultra
node scripts/serve-preview.mjs           # local preview server
node scripts/sync-branchdata-from-csv.mjs # sync danh bạ chi nhánh vào he-thong
```

Trước khi tạo script mới, cân nhắc dùng luôn `cheerio` (đã có sẵn) thay vì `jsdom` cho công việc regex + DOM đơn giản. `puppeteer` và `html-to-docx` phục vụ xuất PDF/DOCX (xem commit `abbb1af`). `sharp` cần `npm install sharp --no-save` khi cần optimize ảnh.

## Pattern shell build (he-thong + bi-led-v30-ultra)

Hai trang này nhúng header/footer/floating chuẩn production `auto365.vn` (Bootstrap 5.3 + Roboto + jQuery + GA4) thay vì tự viết header/footer riêng — giống hệt layout production sau khi merge.

**File layout per slug:**

| File | Vai trò | Edit trực tiếp? | Commit? |
|---|---|---|---|
| `index-src.html` (V30 Ultra) hoặc `main.html` (he-thong) | Source — content của page + 5 shell markers | ✓ Có | ✓ Có (source of truth) |
| `main.html` (V30 Ultra only) | Intermediate — output của `build-v30-main.mjs` (scope CSS + rename class) | ✗ Auto-generated | ✓ Có (giữ pipeline reproducible) |
| `index.html` | Built — output của `build-pages.mjs`, sẵn sàng deploy | ✗ Auto-generated | ✓ Có (Cloudflare deploy target — bắt buộc) |

**Không gitignore `main.html`/`index.html`** — Cloudflare Pages (git integration) deploy từ commit, nếu ignore thì trang không lên được. Sau khi edit source phải rebuild và commit cả 3 file trong 1 commit để tránh sync lệch.

**5 shell markers** trong `main.html` (hoặc `index-src.html` với V30):

```html
<!-- @shell:head-shared -->   → font Roboto + Bootstrap CSS + jQuery + GA4 (trong <head>)
<!-- @shell:header -->         → .custom-header-pc + .custom-header-mobile (logo + mega-menu + search)
<!-- @shell:footer -->         → .footer.ft-content-stg (3 cột + địa chỉ + social)
<!-- @shell:floating -->       → .nut-cart-float + Messenger + Zalo + hotline (fixed right)
<!-- @shell:scripts -->        → Bootstrap JS + Swiper + main.js + Facebook SDK
```

**Namespacing (V30 Ultra pattern):** vì shell nạp Bootstrap → pillar phải rename `.btn` → `.pv-btn`, `.badge` → `.pv-badge`, và wrap content trong `<div class="pillar-v30-ultra">` để scope CSS. Script `scripts/build-v30-main.mjs` làm tự động.

**Workflow cập nhật nội dung V30 Ultra:**

```bash
# 1. Sửa source
$EDITOR auto365/bi-led-x-light-v30-ultra/index-src.html

# 2. Rebuild
node scripts/build-v30-main.mjs && node scripts/build-pages.mjs

# 3. Deploy (index.html là target)
```

**Workflow cập nhật he-thong:** edit `main.html` trực tiếp (không có intermediate), rồi `node scripts/build-pages.mjs`.

**Refresh shell từ production** (khi header/footer auto365.vn thay đổi):

```bash
node scripts/extract-shell.mjs  # fetch & update _shell/*.html
node scripts/build-pages.mjs    # rebuild tất cả trang dùng shell
```

**Safeguard:** `build-v30-main.mjs` sẽ throw nếu source có `@shell:` markers hoặc `BUILT` banner — tránh double-transform khi lỡ nhầm `index.html` với `index-src.html`.

## Deploy

Deploy Cloudflare Pages, build directory = `auto365`, framework = None. Hai cách:

1. **Wrangler CLI thủ công** — set `CLOUDFLARE_API_TOKEN` + `CLOUDFLARE_ACCOUNT_ID` rồi `npx wrangler pages deploy auto365 --project-name=preview-365group`.
2. **Git Integration** — push lên nhánh `main`, Cloudflare auto-build.

Chi tiết + token dev trong [DEPLOY_GUIDE.md](DEPLOY_GUIDE.md). **Không commit token thật vào file khác**; hiện token trong DEPLOY_GUIDE.md là token dev chia sẻ nội bộ — nếu rotate thì cập nhật ở đây.

## Lưu ý khi sửa nội dung

- Style commit message tiếng Anh, dạng `Fix …` / `Update …` / `Add …` (xem `git log`).
- Khi user báo lỗi ở một trang cụ thể, xác định slug (tên thư mục con), edit thẳng `index.html` của slug đó. Đừng refactor toàn cục.
- Với thay đổi lớn tới nhiều trang (ví dụ update Trust Box V9 gần đây), commit theo từng slug/từng concern để dễ rollback.
