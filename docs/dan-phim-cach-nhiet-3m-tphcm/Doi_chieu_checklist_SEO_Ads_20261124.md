# Đối chiếu checklist SEO Local + Ads – /dan-phim-cach-nhiet-3m-tphcm (24/11/2026)

- Nguồn: HTML live https://auto365.vn/dan-phim-cach-nhiet-3m-tphcm (tải 24/11/2026)
- Preview: https://manhcuong365group.github.io/preview-365group/phim-3m-hcm/ (link preview cũ, đã thay bằng bản live)
- Preview để `noindex`; khi đưa lên production trả robots về `index, follow`. Canonical giữ self-canonical URL live.
- `page-asset.js` là bản sao `/page-asset/16176.js` chỉ để preview hiển thị ảnh gói (đổi đường dẫn ảnh sang tuyệt đối). Production giữ file gốc, không cần áp.

## Đã sửa trên preview

| ID | Thay đổi |
|---|---|
| L01 | Title: "Dán phim cách nhiệt 3M TP.HCM \| Auto365 Trụ Sở Chính" (cả og/twitter, tên CollectionPage trong schema). Description theo mục 4. H1: "Dán phim cách nhiệt 3M tại Auto365 Trụ Sở Chính – TP.HCM". |
| L03 | Thêm dòng "Báo giá dán tại Auto365 Trụ Sở Chính — chọn loại xe" dưới H2 bảng giá. 6 gói, 3 nhóm xe, giá, VAT, ghi chú "áp dụng từ 06/2026" giữ nguyên. |
| L05 / L18 | Thêm 1 link sang Hub `/phim-cach-nhiet-o-to-3m` ("Xem thông số chi tiết các dòng phim 3M") dưới đoạn chọn nhanh, sau bảng giá. Không đẩy khách sang Hub trước CTA. |
| L09 | Bổ sung `gbraid`, `wbraid` vào 2 đoạn lấy tham số chiến dịch gửi kèm lead (trước đó chỉ có UTM + gclid). |
| L11 | H2 → "Quy trình dán phim 3M tại Auto365 Trụ Sở Chính"; thời gian 2–4 giờ vẫn ghi là tham khảo. |
| L13 | H2 → "Nguồn phim 3M và bảo hành khi dán tại Trụ Sở Chính". |
| L07 | H2 → "Đến Auto365 Trụ Sở Chính dán phim 3M tại Hiệp Bình". Địa chỉ, giờ, đường đi, CTA giữ nguyên. |
| L17 | H2 FAQ → "Câu hỏi thường gặp khi dán phim 3M tại Auto365 Trụ Sở Chính". 5 FAQ hiện có đã phủ giá/VAT, nơi dán + đường đi, thử phim, thời gian + đặt lịch, bảo hành, đăng kiểm – không thêm FAQ chèn từ khoá. |

## Giữ nguyên (đã kiểm)

- L02 hero đã nêu thi công tại Hiệp Bình, có "Xem giá theo xe" + gọi.
- L04 giá dán lẻ đủ 3 vị trí.
- L10 canonical self, không trỏ Hub.
- L12 đo kiểm, L14 báo chí, L15 đánh giá Google, L16 "Vì sao": giữ.
- L19 schema: AggregateOffer 5.900.000–18.300.000đ, 6 gói khớp bảng giá hiển thị (đã bấm thử 3 nhóm xe trên live).

## Cần xác nhận trước khi sửa tiếp (không tự đổi)

| ID | Việc | Đầu mối |
|---|---|---|
| L06 | 58 case: xác nhận case nào thi công tại Trụ Sở Chính. Nhiều case 2023–2025 có trước 3M Pro Shop (06/2026), chưa đổi H2 sang "tại Trụ Sở Chính". | Kỹ thuật / anh Đạo |
| L07 / 5.2 | Quan hệ địa chỉ Trụ Sở Chính 4/4/1/7 và 3M Pro Shop & Training Center 4/4/3/3: khách giao xe ở đâu. | Vận hành |
| L11 (form) | Trang có 2 form (inline + popup) cùng mục đích; IT kiểm đếm `generate_lead` không trùng. | IT |
| L08 / L21 | Lead test có gbraid/wbraid đi tới CRM; phân loại lead về Trụ Sở Chính; baseline GSC 28 ngày. | IT / SEO |
