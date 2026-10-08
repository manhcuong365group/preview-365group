# Bi gầm X-Light — Phiếu chấm SEO/GEO V1.7

| Trường | Giá trị |
|---|---|
| Bản chấm | `auto365/bi-gam-x-light/index.html` — SHA-256 `6b7ace66c2b8cda296a9d2623b8b9f102ddd8737976377f081a9e4ae26806ee8` (commit `5dde7fbb`), cùng mã với [01-noi-dung-ban-duyet.md](01-noi-dung-ban-duyet.md) |
| Ngày chấm | 05/10/2026 (tự chấm lại sau tái kiểm 05/10 của người duyệt) |
| Loại chấm | Tự chấm bản preview — **chưa phải phiếu nghiệm thu chính thức**; người duyệt chấm lại theo mã |
| Người kiểm duyệt nội dung | Nguyễn Quang Đạo (06/10/2026) |
| Ngưỡng đạt | Tổng ≥ 95/100 · SEO ≥ 28,5/30 · GEO ≥ 23,75/25 · 0 lỗi chặn |
| Bộ bàn giao | `01-noi-dung-ban-duyet.md` · `huong-dan-trien-khai.md` (+ `doan-link-ve-hub.md`) · `03-phieu-cham-v17.md` |

## Điểm thành phần

| Mã | Nội dung | Điểm | Căn cứ / còn thiếu |
|---|---|---:|---|
| C1 | Chính xác, nhất quán | 9/10 | Case gắn SKU theo URL sản phẩm; 28/30 là "đã lắp", 2 xe Honda hiển thị "hồ sơ liên quan — chưa đối chiếu phiên bản thi công"; popup so sánh đọc đúng Cos/Pha; 2 mẫu chỉ có 35W ghi "nguồn chưa tách Cos/Pha"; đơn vị thống nhất "cặp". Trừ: dữ liệu chưa gom về một nguồn chung (XL-05) |
| C2 | Đủ theo vai trò | 9,5/10 | 15 mẫu, nhu cầu, chi phí 7 khoản, 30 case có nơi lắp, FAQ 7 câu |
| C3 | Tự nhiên, hữu ích | 9/10 | Sapo trả lời thẳng; CTA đúng hành động; giới hạn ghi ngay cạnh dữ kiện |
| **C** | | **27,5/30** | |
| S1 | Nhu cầu & vai trò URL | 9,5/10 | Hub thương hiệu, phân vai với hub tổng/PDP/case |
| S2 | On-page | 9,5/10 | Title/H1/meta, 93/93 ảnh có alt, ItemList 15, FAQPage 11 câu khớp hiển thị, từ khoá đèn gầm ô tô/xe hơi |
| S3 | Liên kết & triển khai | 9/10 | Hồ sơ CMS + đoạn link soạn sẵn. Còn: URL production 404, link về chưa triển khai (ghi ở nghiệm thu live) |
| **S** | | **28/30** | Thiếu 0,5 so với ngưỡng 28,5 |
| G1 | Trả lời rõ, đủ ngữ cảnh | 9,5/10 | Giá/đơn vị/VAT/cơ chế màu đứng cạnh nhau; FAQ phân biệt bi gầm và đèn gầm |
| G2 | Lập luận lựa chọn | 9,5/10 | Lọc theo thông số có nguồn; số mẫu khớp + "Xem tất cả"; ghi rõ W không phải phép đo chiếu xa |
| G3 | Nguồn & truy nguyên | 4,5/5 | Link SKU, case, người duyệt, ngày; case gắn SKU theo link công khai, phân biệt "đã lắp" và "liên quan". Trừ: chưa đối chiếu phiếu xưởng gốc; câu bảo hành/KTV đã viết theo phạm vi chính sách, chưa gắn nguồn văn bản |
| **G** | | **23,5/25** | Thiếu 0,25 so với ngưỡng |
| U1 | Dễ đọc (desktop + mobile 375px) | 4,5/5 | Ghi chú/bảng ≥ 13px; không tràn ngang; đo bằng trình duyệt giả lập, chưa phải máy thật |
| U2 | Bước tiếp theo | 4,5/5 | Form/CTA rõ. Test lead 87 (03/10) là **team tự báo**: API `success:true`, đủ mẫu/giá/UTM/gclid, event 1 lần; lỗi/timeout báo đúng. CRM/routing/GA4: CX |
| U3 | Bộ bàn giao | 4/5 *(theo tái kiểm 05/10)* | Đủ 3 phần cùng mã SHA; 05/10 đã đồng bộ ngày duyệt, meta description, 93 ảnh, 8 ảnh `hinh/`, nhật ký test tách tự báo/CX. Người duyệt chấm lại |
| **U** | | **13/15** | |
| **Tổng** | | **92/100** | **Chưa đạt 95** — khớp tái kiểm 05/10 |

## Kết quả QA (bản preview)

| Mã | Kết quả |
|---|---|
| QA-01 | Xe tải 24V → chỉ F10 Turbo 24V và Turbo 24V V2 — đạt |
| QA-02 | 12V + đi tỉnh + lens 2.0 → F10 2.0 New, Hyper 2.0, F10 2.0 2024 — đạt |
| QA-03 | F10 New đời trước không nhận case Honda; F10 New 2025 hiện 2 xe Honda dưới nhãn "Hồ sơ liên quan (chưa đối chiếu phiên bản thi công)" — đạt |
| QA-04 | Chọn F10 2.0 New → form đúng mẫu, 4.500.000đ/cặp, chưa VAT — đạt |
| QA-05 | So sánh Turbo V2 + 301 V2 + X3 Ultra → ~45/~75, ~45/~55, 45/70 — đạt |
| QA-06 | So sánh 2 mẫu 35W → "35W (nguồn chưa tách Cos/Pha)" — đạt |
| QA-07 | Mẫu thứ tư bị chặn, có Bỏ/Thay — đạt |
| QA-08 | F10 2.0 New / Turbo 24V V2 ghi "/ cặp" ở HTML và DOM — đạt |
| QA-09 | Dưới 4,5 / 4,5–5,5 / trên 5,5 triệu lọc đúng mốc — đạt |
| QA-11 | > 3 mẫu khớp → "Có X mẫu…" + "Xem tất cả ứng viên" — đạt |
| QA-12 | API thành công / 500 / success:false / timeout — team tự báo đạt (lead 87); CRM CX |
| QA-13 | URL có UTM + gclid → gửi đủ trong payload — đạt |
| QA-10, 14, 15, 16 | CX — cần thiết kế cuối, máy thật, production |

## Lỗi chặn

| Lỗi | Trạng thái |
|---|---|
| Sai SKU/case (F10 New) | Đã sửa |
| Bảng so sánh mất Cos/Pha | Đã sửa |
| URL production 404 | **Còn** — chờ IT đăng |
| Preview `noindex` | Đúng vai trò bản thử, không phải lỗi |

## Việc còn lại để đạt 95+

1. IT đăng `auto365.vn/nang-cap-anh-sang-bi-gam-x-light` (200, index, self-canonical, sitemap) → S3.
2. CMS dán link theo `doan-link-ve-hub.md` → S3, S1.
3. (Tuỳ chọn) Xưởng đối chiếu phiếu gốc của các case → G3.
4. CRM xác nhận lead 60 và 87 đủ trường, rồi xoá cả hai.
6. Vận hành xác nhận chính sách "bảo hành tại mọi chi nhánh" và kinh nghiệm KTV (gắn nguồn hoặc chỉnh câu) → G3, C3.
7. Xưởng đối chiếu phiên bản thi công 2 xe Honda → G3, C1.
5. Gỡ khối "Kiểm tra nội bộ" ở cuối bài khi đăng production.
