# Bi gầm X-Light — Phiếu chấm SEO/GEO V1.7

| Trường | Giá trị |
|---|---|
| Bản chấm | `auto365/bi-gam-x-light/index.html` — SHA-256 `f84aba30896b8964facb686f678ae750f01c955cdb08f8a79ad352e9572ddbcf` (commit `ea11db57`), cùng mã với [01-noi-dung-ban-duyet.md](01-noi-dung-ban-duyet.md) |
| Ngày chấm | 03/10/2026 |
| Loại chấm | Tự chấm bản preview — **chưa phải phiếu nghiệm thu chính thức**; người duyệt chấm lại theo mã |
| Người kiểm duyệt nội dung | Nguyễn Quang Đạo (30/09/2026) |
| Ngưỡng đạt | Tổng ≥ 95/100 · SEO ≥ 28,5/30 · GEO ≥ 23,75/25 · 0 lỗi chặn |
| Bộ bàn giao | `01-noi-dung-ban-duyet.md` · `huong-dan-trien-khai.md` (+ `doan-link-ve-hub.md`) · `03-phieu-cham-v17.md` |

## Điểm thành phần

| Mã | Nội dung | Điểm | Căn cứ / còn thiếu |
|---|---|---:|---|
| C1 | Chính xác, nhất quán | 9,5/10 | Case gắn SKU theo URL sản phẩm (30/30, gồm 2 xe Honda gắn F10 New 2025 theo link trong bài case); popup so sánh đọc đúng Cos/Pha; 2 mẫu chỉ có 35W ghi "nguồn chưa tách Cos/Pha"; đơn vị thống nhất "cặp". Trừ: dữ liệu chưa gom về một nguồn chung (XL-05) |
| C2 | Đủ theo vai trò | 9,5/10 | 15 mẫu, nhu cầu, chi phí 7 khoản, 30 case có nơi lắp, FAQ 11 câu |
| C3 | Tự nhiên, hữu ích | 9,5/10 | Sapo trả lời thẳng; CTA đúng hành động; giới hạn ghi ngay cạnh dữ kiện |
| **C** | | **28,5/30** | |
| S1 | Nhu cầu & vai trò URL | 9/10 | Hub thương hiệu, phân vai với hub tổng/PDP/case. Trừ: chưa có dữ liệu GSC |
| S2 | On-page | 9,5/10 | Title/H1/meta, 87/87 ảnh có alt, ItemList 15, FAQPage 11 câu khớp hiển thị, từ khoá đèn gầm ô tô/xe hơi |
| S3 | Liên kết & triển khai | 8/10 | Hồ sơ CMS + đoạn link soạn sẵn. Trừ: URL production 404, chưa có link trỏ về |
| **S** | | **26,5/30** | **Chưa đạt 28,5** |
| G1 | Trả lời rõ, đủ ngữ cảnh | 9,5/10 | Giá/đơn vị/VAT/cơ chế màu đứng cạnh nhau; FAQ phân biệt bi gầm và đèn gầm |
| G2 | Lập luận lựa chọn | 9,5/10 | Lọc theo thông số có nguồn; số mẫu khớp + "Xem tất cả"; ghi rõ W không phải phép đo chiếu xa |
| G3 | Nguồn & truy nguyên | 4,5/5 | Link SKU, case, người duyệt, ngày; 30/30 case có SKU theo nguồn công khai. Trừ: chưa đối chiếu phiếu xưởng gốc |
| **G** | | **23,5/25** | Thiếu 0,25 so với ngưỡng |
| U1 | Dễ đọc (desktop + mobile 375px) | 5/5 | Ghi chú/bảng ≥ 13px; không tràn ngang; đo bằng trình duyệt giả lập, chưa phải máy thật |
| U2 | Bước tiếp theo | 5/5 | Test form 03/10: lead **87** vào API production (`success:true`), đủ mẫu/giá/UTM/gclid; `lead_form_submit` 1 lần; lỗi 500 / success:false / timeout đều báo đúng và giữ lựa chọn |
| U3 | Bộ bàn giao | 5/5 *(chờ người duyệt xác nhận)* | Đủ 3 phần cùng mã SHA |
| **U** | | **15/15** | |
| **Tổng** | | **93,5/100** | **Chưa đạt 95** |

## Kết quả QA (bản preview)

| Mã | Kết quả |
|---|---|
| QA-01 | Xe tải 24V → chỉ F10 Turbo 24V và Turbo 24V V2 — đạt |
| QA-02 | 12V + đi tỉnh + lens 2.0 → F10 2.0 New, Hyper 2.0, F10 2.0 2024 — đạt |
| QA-03 | F10 New đời trước không còn nhận case Honda; 2 case này thuộc F10 New 2025 theo link bài case — đạt |
| QA-04 | Chọn F10 2.0 New → form đúng mẫu, 4.500.000đ/cặp, chưa VAT — đạt |
| QA-05 | So sánh Turbo V2 + 301 V2 + X3 Ultra → ~45/~75, ~45/~55, 45/70 — đạt |
| QA-06 | So sánh 2 mẫu 35W → "35W (nguồn chưa tách Cos/Pha)" — đạt |
| QA-07 | Mẫu thứ tư bị chặn, có Bỏ/Thay — đạt |
| QA-08 | F10 2.0 New / Turbo 24V V2 ghi "/ cặp" ở HTML và DOM — đạt |
| QA-09 | Dưới 4,5 / 4,5–5,5 / trên 5,5 triệu lọc đúng mốc — đạt |
| QA-11 | > 3 mẫu khớp → "Có X mẫu…" + "Xem tất cả ứng viên" — đạt |
| QA-12 | API thành công / 500 / success:false / timeout — đạt (lead 87) |
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
4. CRM xác nhận lead 87 đủ trường, xoá lead 60 và 87.
5. Gỡ khối "Kiểm tra nội bộ" ở cuối bài khi đăng production.
