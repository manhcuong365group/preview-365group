# Hướng Dẫn CMS/SEO — Bi Gầm VinFast VF3 V1.8

Tiêu chuẩn: Auto365 SEO/GEO/HTML V1.8  
Bản nguồn: `auto365/bi-gam/vinfast-vf3/index.html` (phiên bản 10/10/2026)  
URL canonical đang khai báo: `https://v2.auto365.vn/tin-tuc/cam-nang-anh-sang-o-to/bi-gam/vinfast/vf3` — **CX:** `data/vf3.json` ghi `https://auto365.vn/tin-tuc/cam-nang-anh-sang-o-to/bi-gam/vinfast/vf3`; SEO chốt domain production trước khi đăng.  
URL preview: `https://preview-365group.pages.dev/bi-gam/vinfast-vf3/` (noindex có chủ đích của staging, §9.4)  
Ngày kiểm hồ sơ: 10/10/2026, Asia/Saigon

## Phạm vi

Loại trang: tư vấn theo xe / lựa chọn (V1.8 §3). Intent trọng tâm: bi gầm VinFast VF3. Hub `/nang-cap-anh-sang-bi-gam` giữ intent ngành. Trang không thay báo giá thi công cuối cùng; case GTR G1 Turbo V2 trên VF3 không dùng để chứng minh mẫu đèn khác; case VinFast khác dòng xe chỉ để tham khảo.

## Metadata & on-page

| Trường | Giá trị |
| --- | --- |
| Title | Bi gầm VinFast VF3: Giá, cấu hình và case thực tế \| Auto365 |
| Meta description | Tư vấn bi gầm VinFast VF3 theo cấu hình, mức giá, điều kiện lắp và case thực tế. Xem sản phẩm có bằng chứng trên VF3 và chọn điểm Auto365 phù hợp. |
| H1 | Bi gầm VinFast VF3: phương án lắp, giá và case thực tế |
| Author (hiển thị) | Team Content Auto365 |
| Rà soát kỹ thuật | Nguyễn Quang Đạo — **đã duyệt 10/10/2026** (xác nhận của chủ quản). Schema: `reviewedBy` → `https://auto365.vn/tac-gia/nguyen-quang-dao#person`, `lastReviewed` 2026-10-10 trên CollectionPage |
| datePublished | 2026-10-02 (giữ nguyên) |
| dateModified | 2026-10-10T00:00:00+07:00 — ngày gửi bài/duyệt (quy tắc reviewer: lastReviewed, dateModified, dòng "Cập nhật" = ngày gửi bài). |
| Ngày kiểm nội dung (hero) | 10/10/2026 |
| Cập nhật (cuối trang) | 10/10/2026 — khớp dateModified; tên reviewer link về trang tác giả |

Thứ tự H2: Tổng quan → **Video thi công trên VF3 (nền tối)** → Có gì cần biết → Sản phẩm (2 hàng + Xem tất cả, bảng so sánh) → [CTA] → Xe VinFast khác đã lắp → Giá và phạm vi chi phí / Khi nào cần kiểm tra xe → [CTA] → Lý do chọn → Địa điểm → Cẩm nang → Nâng cấp khác → Dòng xe VinFast khác → [CTA] → FAQ (5 câu + Xem thêm; FAQPage giữ đủ 11) → Form.

## Sản phẩm, giá, mức xác minh

- 9 SKU theo `vf3.json` (giá thiết bị, chưa VAT, đơn vị **/bộ đèn**, đối chiếu `stg_products` 06/10/2026). **CX Commercial:** hiệu lực giá.
- Lưới chính hiện 2 hàng (8 desktop / 4 mobile); nút "Xem thêm mẫu bi gầm" là link sang hub `https://v2.auto365.vn/nang-cap-anh-sang-bi-gam`. Mẫu thứ 9 (AES SV 2.0 Max) vẫn nằm trong HTML, bảng so sánh và bộ lọc.
- Mức xác minh hiển thị trong bảng so sánh (popup lọc đã bỏ 10/10): GTR G1 Turbo V2 = "Đã có case VF3 được xác minh" (căn cứ 2 video); 8 mẫu còn lại = "Cần kiểm tra xe trước khi chốt". Thẻ lưới chính không gắn nhãn (yêu cầu 09/10); đoạn dưới H2 sản phẩm nêu GTR là mẫu có video VF3.
- Bảng **"So sánh nhanh 9 mẫu bi gầm cho VF3"** (`#vf3lp-so-sanh`, trong khối Sản phẩm, dưới nút "Xem tất cả"): lens, công suất Cos/Pha mỗi đèn, nhiệt màu, bảo hành, giá, trạng thái trên VF3. Nguồn: trang sản phẩm auto365.vn đọc 10/10/2026 (quy tắc reviewer: PDP là nguồn được chấp nhận). Ô "—" = PDP không ghi (lens AES SV 3.0 Pro); bảo hành AES SV 3.0 Max "Xác nhận khi báo giá" vì PDP không ghi. Có caption, `th scope`, cuộn ngang riêng trên mobile. Hiển thị dạng accordion `<details>` **thu gọn mặc định** (yêu cầu 10/10); bảng vẫn nằm trong HTML. 4 ghi chú đánh đổi: bằng chứng VF3, lens 3.0 vs 2.0, một vs ba nhiệt màu, công suất công bố khác phép đo.
- F10 Turbo V2: `vf3.json` ghi "Kỹ thuật đã xác nhận tương thích VF3" nhưng chưa có hồ sơ trong `nguon_doi_chieu` → trang để CHECK_REQUIRED. **CX Kỹ thuật.**
- Nhãn nhu cầu trong bộ lọc (đi phố / đi mưa / đi tỉnh / tiết kiệm) là gợi ý lọc, có ghi chú "không phải xác nhận tương thích". **CX Kỹ thuật** nếu muốn dùng làm căn cứ chọn.

## Ảnh & video

| File / nguồn | Loại | Alt |
| --- | --- | --- |
| `hinh/bi-gam-vinfast-vf3-*.png` (4 ảnh) | Ảnh minh họa (AI), không phải evidence | "Ảnh minh họa: …" |
| `hinh/ly-do-*.png` (6 ảnh) | Ảnh minh họa (AI) khối Lý do chọn | "Ảnh minh họa: …" |
| `hinh/vf3-bi-gam-bat-den-truoc-auto365.webp` | **Ảnh thật** VF3 lắp bi gầm tại Auto365 (biển số đã che), 1 ảnh đại diện dưới 2 video | mô tả đúng ảnh, chưa ghi mã đèn |
| `hinh/vf3-den-chinh-rgb-auto365.webp` | Ảnh thật cụm **đèn chính** đã nâng cấp trên cùng chiếc VF3 — đặt cạnh ảnh bi gầm theo yêu cầu 10/10, caption ghi rõ hạng mục riêng, không thuộc bi gầm | mô tả đúng ảnh |
| `hinh/og-vf3-bi-gam.jpg` (1200×630) | OG/Twitter image — thay ảnh Toyota Hilux trước đây. Khi đăng CMS: upload và đổi URL tuyệt đối sang auto365.vn | — |
| Video `Aa0Of6ZtxEE`, `weADPByfN7g` | Video thi công thật VF3 + GTR G1 Turbo V2 | tiêu đề video |

**CX Media:** ảnh case VF3 thật cho các khối giới thiệu (hiện giữ ảnh minh họa theo yêu cầu 10/10). Ảnh cận đèn pha RGB không dùng (đèn chính). **CX:** xác nhận mã đèn trên chiếc VF3 trong ảnh thật.

## Link

- Sản phẩm, hub, cẩm nang: `v2.auto365.vn`. Case xe VinFast khác: `auto365.vn` (bài gốc). Đã gỡ 3 link cẩm nang trả 404 (kiểm 09/10/2026).
- CTA: `#tu-van` (form), `tel:0365365911`, `https://zalo.me/0365365911` — trùng hotline đèn trong Organization `contactPoint`.

## Schema (một script `@graph`)

| Node | @id | Ghi chú |
| --- | --- | --- |
| WebSite | `https://auto365.vn/#website` | |
| Organization | `https://auto365.vn/#organization` | publisher + author |
| Person | `https://auto365.vn/tac-gia/nguyen-quang-dao#person` | Nguyễn Quang Đạo, reviewedBy của CollectionPage |
| BreadcrumbList | `{PAGE}#breadcrumb` | 5 cấp |
| Article | `{PAGE}#article` | about: VinFast VF3 (Car), Bi gầm ô tô; mentions: 9 Product (name, url, brand); datePublished/dateModified |
| CollectionPage | `{PAGE}#collectionpage` | ItemList 9 sản phẩm (name + url) |
| FAQPage | `{PAGE}#faq` | 11 câu, khớp 1:1 với FAQ hiển thị |

Không dùng Offer, Review, AggregateRating khi chưa có dữ liệu tương ứng.

## N1–N5

- **N1:** giá thiết bị có ngày đối chiếu, VAT, đơn vị; công/pát/căn chỉnh báo riêng; bảo hành tách khỏi fitment. Chờ Commercial xác nhận hiệu lực.
- **N2:** trả lời nhanh, sản phẩm, bảng so sánh 9 mẫu có nguồn + ghi chú đánh đổi, video VF3, khối "khi nào cần kiểm tra xe", 11 FAQ.
- **N3:** video VF3 thật cho GTR G1 Turbo V2; case xe khác ghi rõ tham khảo; ảnh minh họa có nhãn.
- **N4:** Auto365 publisher; VF3 (about); GTR/X-Light/AES (brand trên mentions); reviewer Nguyễn Quang Đạo (Person @id dùng chung với các trang ánh sáng khác).
- **N5:** intent bi gầm VF3; bài đèn chính không nằm trong khối bi gầm.

## Kiểm triển khai (L1–L8)

Preview đã kiểm 09–10/10/2026: L5 (desktop 1366px, mobile 375px — không tràn ngang), modal video mở YouTube. Còn chờ trên production: L1–L4, L6, L7 (form/CRM), L8.

## U3

- 01: `index.html` (10/10/2026)
- 02: file này
- 03: `03_Phieu_danh_gia_Bi_Gam_VinFast_VF3_V1.8.md`
- Test: `tests/verify-v18-integrity.js`


## Cập nhật bố cục 10/10

- Hero (2 cột bằng nhau, chữ trái — ảnh phải, ảnh cao bằng khối chữ): cột chữ = H1 2 dòng (không eyebrow, không dòng tác giả/ngày — reviewer + ngày ở dòng ghi chú cuối trang và schema), đoạn trả lời nhanh (`#master-tra-loi`, bản rút gọn, không hiện nhãn — giữ aria-label) ngay dưới H1, 4 tab nhu cầu, 2 nút; cột ảnh = 1 ảnh VF3 thật. Mobile: chữ trước, ảnh sau.
- 2 thẻ xếp dọc, so le đối xứng (Giá: ảnh trái — chữ phải; Kiểm tra xe: chữ trái — ảnh phải): "Giá và phạm vi chi phí" + ảnh xe VF3 bật đèn (chú thích ảnh thực tế, biển số đã che); "Khi nào cần kiểm tra xe" + ảnh cụm đèn chính (chú thích hạng mục riêng, không thuộc bi gầm). Không còn khối ảnh nền tối riêng.
- Khối "Địa điểm Auto365 tiếp nhận": làm lại giao diện theo mẫu 10/10 (ô thông tin 2×2, 3 nút cùng hàng, 3 ô miền có hình địa danh). Nội dung và số liệu giữ nguyên; bỏ câu "Khả năng tiếp nhận… theo từng cơ sở" theo yêu cầu 10/10 (ý này còn trong FAQ chi nhánh). Sửa nút Google Maps trước đây trỏ `#` → link Maps trụ sở (cùng link trang bi gầm X-Light).
- Đã bỏ khung tìm kiếm ở hero và popup lọc (`vf3lp-loc`). Mức xác minh từng mẫu hiển thị trong bảng so sánh ("Có video VF3" / "Kiểm tra xe").
- Form báo giá (`nr-quote`): thêm dòng trạng thái `[data-js="nr-quote-status"]` — thiếu phần tử này làm `quote.js` lỗi, mọi nút "Báo giá"/"Nhận báo giá" không mở được form.
- 4 tab nhu cầu dưới "Trả lời nhanh" lọc lưới sản phẩm theo `nhu_cau` trong `vf3.json` (JS inline, không phụ thuộc page-asset). Khi lọc hiện ghi chú "Gợi ý theo nhu cầu, kỹ thuật viên xác nhận mẫu phù hợp khi kiểm tra xe" + nút Bỏ lọc. **CX Kỹ thuật:** căn cứ gán nhu cầu cho từng mẫu (§7.1).
- Giao diện chung (10/10): bo góc 8px cho mọi khung/thẻ/ảnh nội dung (chip, nút viên thuốc giữ tròn); khoảng cách giữa các block 10px, đệm dọc trong block 10px (giảm 50%); FAQ dạng danh sách không khung, dấu +/−.
- Cẩm nang: thanh trượt 1 hàng (5 bài), nút ‹ › trượt ngang.
- Lý do chọn: thêm dải "Thương hiệu đèn tại Auto365" (8 logo X-Light, GTR, AES, Henvvei, Titan, Red Lighting, Matrix Light, Fogway — ảnh lấy từ auto365.vn như hub nâng cấp ánh sáng). Logo tĩnh, không có bộ lọc theo hãng trên trang này.
- Mobile (≤600px): tab nhu cầu 2 cột; thẻ Lý do chọn 2 hàng cuộn ngang (ảnh nhỏ trái); case xe VinFast khác 2 hàng cuộn ngang (≤768px); Dòng xe VinFast 2 cột; chi nhánh: info 2×2, nút Gọi full + Zalo/Maps chia đôi, 3 ô miền 1 hàng. Trang mobile ~15.600px → ~13.300px.
- Chân bài có khối `#vf3lp-internal-check` (Kiểm tra nội bộ → link 02/03/04), chỉ hiện trên pages.dev/localhost. **Xoá khối này và script `vf3lp-internal-check-js` khi đăng production** (BLOCK_06). Phiếu duyệt: `04_Phieu_duyet_Bi_Gam_VinFast_VF3_V1.8.md`.
