# 03 — Phiếu tự kiểm V2.2: Hub Bi gầm Hyundai

| Trường | Giá trị |
|---|---|
| Trang | https://preview-365group.pages.dev/bi-gam/hyundai/ |
| Bản kiểm | SHA-256 ghi trong [01](01_Noi_dung_Bi_gam_Hyundai.md) |
| Ngày tự kiểm | 07/11/2026 (chấm lại sau duyệt, test lead, QA mobile) |
| Chuẩn | V2.2 — ngưỡng tổng ≥95, SEO ≥28,5/30, GEO ≥23,75/25 |
| Trạng thái | **ĐÃ DUYỆT nội dung 07/11/2026** — anh Nguyễn Quang Đạo (chủ quản xác nhận), gồm phần bổ sung GEO; test điện thoại thật OK 07/11; lead test #32 vào CRM OK; phiếu U3 tự nghiệm thu: [06](06_Phieu_nghiem_thu_U3_Bi_gam_Hyundai.md) |

## 1. Tự chấm (trên preview)

| Mã | Tiêu chí | Điểm | Căn cứ |
|---|---|---:|---|
| C1 | Chính xác và nhất quán | 9,3/10 | 8 case + bài tư vấn từ bài đã đăng auto365.vn; nội dung kỹ thuật anh Đạo duyệt 07/11; mỗi bài case là một xe khác nhau (chủ quản xác nhận 07/11); còn một số bài không ghi đời xe |
| C2 | Đầy đủ theo vai trò | 8,9/10 | 17 dòng xe, 8 case, một hãng đèn (X-Light), 9/17 dòng chưa có hồ sơ |
| C3 | Tự nhiên và hữu ích | 9,5/10 | Giọng trung tính, có điều kiện kiểm xe; thẻ dòng xe đồng bộ ảnh tách nền, hero ảnh thi công thật |
| | **Content** | **27,7/30** | |
| S1 | Intent và URL | 9,6/10 | Trang hãng giữa hub bi gầm và bài dòng xe |
| S2 | On-page | 9,5/10 | 1 H1, canonical, 6 khối schema sinh từ HTML, nội dung render sẵn |
| S3 | Liên kết, triển khai | 9,4/10 | Link auto365.vn trong nội dung kiểm HTTP 200 ngày 07/11; hồ sơ 01–06 |
| | **SEO** | **28,5/30** | Qua ngưỡng 28,5 |
| G1 | Trả lời rõ | 9,4/10 | Box lưu ý; FAQ dòng có hồ sơ/2.0 hay 3.0 inch/đời cũ/HCM/tỉnh khác/chi phí/bảo hành; bảng tra "Xe  đã lắp mẫu bi gầm nào?" ( dòng: xe, đời/phiên bản, mẫu đèn, lens, link bài) |
| G2 | Lập luận, giới hạn | 9,4/10 | 3 nhóm nhu cầu kèm khi nào chưa cần lắp; FAQ 2.0/3.0 inch dẫn đúng xe đã lắp, nêu giới hạn (khác đời phải đo hốc) |
| G3 | Nguồn, truy nguyên | 5/5 | Anh Đạo duyệt 07/11: tên + ngày trên trang và schema (`reviewedBy`, `lastReviewed`); case link bài gốc |
| | **GEO** | **23,8/25** | Qua ngưỡng 23,75 — phần bổ sung GEO 07/11 anh Đạo đã duyệt |
| U1 | Đa thiết bị | 5/5 | 375 px giả lập + 1366 px đạt; chủ quản test điện thoại thật OK 07/11/2026 |
| U2 | Tương tác, lead | 5/5 | Lead test #32 (service "Bi gầm Hyundai", xe Hyundai Creta 2022) gửi /api/leads → `success:true`, `test:true` ngày 07/11 |
| U3 | Bàn giao | 5/5 | 01–06 cùng build; phiếu U3 R2 PASS · ĐÃ DUYỆT 07/11/2026 — [PDF](PHIEU_U3_HUB_BI_GAM_HYUNDAI_PREVIEW_PASS_DA_DUYET_R2_20261107.pdf) |
| | **Tổng** | **≈95,0/100** | Tự chấm 07/11 (qua 3 ngưỡng). **Tái kiểm độc lập 08/11 chưa đạt** — xem mục 3; đã vá 09/11, anh Đạo đã duyệt phần vá 09/11/2026 (lastReviewed 2026-11-09); chờ reviewer tái chấm |

## 2. Còn thiếu

Phần production (IT): URL trả 200, robots/canonical, OG, liên kết từ trang theo hãng + sitemap, gỡ khối nội bộ, xoá lead test; thống nhất giá trị `priority` với CRM.
- Hyundai: thêm case/bài tư vấn cho các dòng chưa có hồ sơ (Grand i10, Venue, Stargazer…) để C2 lên.

## 3. Tái kiểm độc lập 08/11/2026 — xử lý 09/11/2026

Reviewer rà soát (không chấm điểm số): mô tả SEO nêu GTR/AES trong khi 8 hồ sơ đều X-Light; 7 ô lens trống; thanh đầu trang che tiêu đề khi nhảy; tìm "Hyundai Santa Fe" rỗng; nhãn thẻ Accent; tên ItemList.

| Mục | Đã vá trên preview 09/11 |
|---|---|
| Lens | Điền theo bài case (ưu tiên) hoặc thông số trang sản phẩm của đúng mẫu (F10 Hyper 2.0 = 2.0 inch; X3 Ultra, F10 Pro, F10 New 2025, 301 V2, Titan 301, GTR G1 Turbo = 3.0 inch; AES SV theo tên mẫu). Dòng không có căn cứ ghi "Chưa xác nhận". Nguồn từng dòng ở 02 |
| FAQ lens | Một ví dụ 2.0 inch và một ví dụ 3.0 inch lấy từ bảng tra (không có ca 2.0 thì ghi rõ chưa có) |
| FAQ dòng xe | Sinh lại theo dữ liệu: dòng có hồ sơ, dòng có bài tư vấn, đủ danh sách "Tư vấn cấu hình" |
| Meta/OG/CollectionPage | Mô tả nêu đúng hãng đèn có trong hồ sơ; tên ItemList dòng xe theo đúng nội dung |
| Tìm dòng xe | Bỏ tiền tố hãng, dấu gạch, khoảng trắng khi so khớp; thông báo rỗng có nút "Xoá tìm kiếm" |
| Điều hướng | Nút "Xem N hồ sơ lắp bi gầm" mở bảng `#bang-tra`; nút giá → `/nang-cap-anh-sang-bi-gam#san-pham` kèm ghi chú công lắp/phụ kiện báo theo xe; nút "Chọn dòng xe" ngay sau sapo; bù thanh đầu trang cố định (`scroll-margin-top`) |
| Bảng tra mobile | Mỗi hồ sơ hiển thị thành thẻ (xe, mẫu đèn, lens, link), không cần vuốt ngang |
| Nội dung | Đoạn "Khi nào chưa cần nâng cấp"; FAQ bảo hành thêm đối chiếu số seri, kích hoạt bảo hành điện tử; câu chốt tham khảo kỹ thuật theo mẫu chuẩn |
| Hồ sơ 01 | Ký tự `|` trong title được thoát, không tách cột |
| Thẻ Accent | Thẻ có bài tư vấn nhưng chưa có hồ sơ ghi "Xem cấu hình và giá tham khảo" |
| Đã vá trên trang 10/11 | Bộ tìm chi nhánh: truy vấn "Hồ Chí Minh" không còn khớp "Đường mòn Hồ Chí Minh" (Hà Tĩnh CN3) — trang dùng bản script đã vá /bi-gam/_bf/newsroom-branch-finder.fix.js (ưu tiên khớp tỉnh/thành); DEV đã được báo để sửa script gốc. Font Remix Icon/JS 404 trên preview do shell — kiểm khi tích hợp |

## 4. Bổ sung 10/11/2026 — anh Đạo đã duyệt 10/11/2026

- Thêm dòng xe theo danh sách hãng, sắp thẻ xe có case/xe mới lên trước, lưới 2 hàng + "Xem thêm", từ khóa "lắp bi gầm <xe>", bỏ khối 4 ô dưới hero, thay 5 ảnh khối "Vì sao chọn".
- H1/title chuẩn SEO: "Lắp đèn bi gầm Hyundai theo từng dòng xe".
- lastReviewed 2026-11-10.
- Thêm case Hyundai Creta 1.5L đặc biệt 2024 – X-Light X3 Ultra 5500K (bài đăng 10/11/2026) → 9 hồ sơ.

## Tái kiểm 10/11/2026 và bản vá 11/11/2026

Reviewer độc lập 10/11 chưa chốt PASS (lý do chung: thiếu dữ liệu lens theo ca trên trang sau khi gỡ bảng, FAQ dẫn bảng đã gỡ, thiếu lối vào giá mẫu, hồ sơ lệch SHA). Đã vá 11/11:

- Mỗi thẻ hồ sơ hiển thị **mẫu bi gầm · lens** lấy từ dữ liệu từng ca (đối chiếu 100% với bảng lens đã duyệt 09/11 cho Hyundai/Mitsubishi/Ford/Honda). Không khôi phục bảng `#bang-tra` theo quyết định của chủ quản 10/11; FAQ 2.0/3.0 inch dẫn về khối hồ sơ `#xe-thuc-te`.
- Bộ lọc hãng đèn dựng từ dữ liệu từng ca (không suy từ tiêu đề): ca "SV 3.0 Max" thuộc AES.
- FAQ chi phí có link **danh sách mẫu bi gầm và giá tham khảo** (`https://auto365.vn/nang-cap-anh-sang-bi-gam#san-pham`), tách giá đèn theo mẫu khỏi báo giá hoàn thiện theo xe.
- Mobile: khoảng cuộn tới mục 124px (tiêu đề không bị thanh đầu trang che). Tìm xe bỏ dấu (Coupé = Coupe) và bỏ chữ "Hybrid".
- Bộ tìm chi nhánh: link "Xem tất cả" chuẩn hoá Hồ Chí Minh/HCM/Sài Gòn → `TP.HCM` khi sang danh bạ.
- Hồ sơ 01–06 xuất lại cùng một build (11/11/2026).

Anh Đạo duyệt bản vá 11/11/2026 (lastReviewed 2026-11-11). Điểm sau vá: chờ reviewer tái chấm; U3 (form → CRM, tracking) nghiệm thu trên URL chính thức.
