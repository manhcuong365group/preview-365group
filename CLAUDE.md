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
│   └── xlight-f30-ultra/          # Landing đèn Xlight F30 Ultra
├── docs/                          # Ghi chú fix (fix_baochi.md, fix đặng minh hoàng.md)
├── update_html.js                 # Script cheerio patch 1-lần cho bao-chi-* (regex thay text + inject entity table)
├── check.js                       # Snippet cheerio nháp để kiểm tra section (file bị lỗi encoding UTF-16, không chạy trực tiếp được)
├── links.txt                      # Danh sách URL Auto365 gốc để đối chiếu
├── package.json                   # cheerio, jsdom, puppeteer, html-to-docx (không có script npm)
├── DEPLOY_GUIDE.md                # Hướng dẫn deploy Cloudflare Pages (Wrangler + GitHub)
└── .agents/                       # Bộ agent nội bộ, đã .gitignore — không đụng vào
```

## Quy ước làm việc

- **Chỉ chỉnh HTML tĩnh trong `auto365/<slug>/index.html`.** Không đưa build tool, framework, hay bundler vào — Cloudflare Pages serve nguyên file.
- **CSS/JS inline trong từng `index.html`.** Mỗi landing page tự chứa style của nó (ví dụ [phim-cach-nhiet/index.html](auto365/phim-cach-nhiet/index.html) dùng namespace `.pcn-*`, mỗi page có prefix riêng). Không tách file chung — giữ tính độc lập của preview.
- **Ảnh đặt trong `<slug>/hinh/`** và tham chiếu bằng đường dẫn tương đối.
- Nội dung tối ưu SEO/GEO/Entity (schema.org, FAQ, entity table, E-E-A-T). Khi sửa nội dung, chú ý giữ đồng bộ giữa **visible HTML** và **JSON-LD schema** (FAQ, HowTo, Product, Organization) — commit `319d28d`, `38871fc` là ví dụ về việc sync này bị lệch.
- Tên bảng entity dùng format: `Entity ID | Thực thể | Schema Type | Vai trò | Canonical URL` (xem [update_html.js](update_html.js) làm chuẩn).

## Node scripts

`package.json` chỉ khai báo dependencies, không có `scripts`. Các file `.js` ở root là **one-off migration**, chạy thủ công:

```bash
npm install                # cài cheerio/jsdom/puppeteer/html-to-docx
node update_html.js        # ví dụ: patch bao-chi-* (regex-based, sửa hard-code paths bên trong nếu tái sử dụng)
```

Trước khi tạo script mới, cân nhắc dùng luôn `cheerio` (đã có sẵn) thay vì `jsdom` cho công việc regex + DOM đơn giản. `puppeteer` và `html-to-docx` phục vụ xuất PDF/DOCX (xem commit `abbb1af`).

## Deploy

Deploy Cloudflare Pages, build directory = `auto365`, framework = None. Hai cách:

1. **Wrangler CLI thủ công** — set `CLOUDFLARE_API_TOKEN` + `CLOUDFLARE_ACCOUNT_ID` rồi `npx wrangler pages deploy auto365 --project-name=preview-365group`.
2. **Git Integration** — push lên nhánh `main`, Cloudflare auto-build.

Chi tiết + token dev trong [DEPLOY_GUIDE.md](DEPLOY_GUIDE.md). **Không commit token thật vào file khác**; hiện token trong DEPLOY_GUIDE.md là token dev chia sẻ nội bộ — nếu rotate thì cập nhật ở đây.

## Lưu ý khi sửa nội dung

- Style commit message tiếng Anh, dạng `Fix …` / `Update …` / `Add …` (xem `git log`).
- Khi user báo lỗi ở một trang cụ thể, xác định slug (tên thư mục con), edit thẳng `index.html` của slug đó. Đừng refactor toàn cục.
- Với thay đổi lớn tới nhiều trang (ví dụ update Trust Box V9 gần đây), commit theo từng slug/từng concern để dễ rollback.
