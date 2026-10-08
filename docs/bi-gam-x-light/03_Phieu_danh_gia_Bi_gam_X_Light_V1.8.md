# Bi gầm X-Light — Phiếu đánh giá SEO/GEO V1.8

| Trường | Giá trị |
|---|---|
| Chuẩn | Auto365 Quy chuẩn SEO/GEO HTML V1.8 (06/10/2026). Cấu trúc điểm giữ nguyên V1.7; thêm mã hướng dẫn N1–N5 |
| Bản chấm | Preview `auto365/bi-gam-x-light/index.html` — SHA-256 và commit ghi trong [01-noi-dung-ban-duyet.md](01-noi-dung-ban-duyet.md) |
| Môi trường | **Preview/staging** (`preview-365group.pages.dev`, `noindex`). Bản CMS v2 (`v2.auto365.vn`) cần nhận lại mã nguồn này — xem mục "Ghi chú release cho CMS v2" trong [huong-dan-trien-khai.md](huong-dan-trien-khai.md) |
| Ngày chấm | 06/10/2026 · chấm lại 08/10/2026 sau khi sửa theo tái kiểm 06/10 |
| Loại chấm | Tự chấm, đề xuất cho người duyệt — **không phải phiếu nghiệm thu** |
| Người kiểm duyệt kỹ thuật | Nguyễn Quang Đạo (06/10/2026) · Biên soạn: Team Content Auto365 |

## 1. Điểm theo tiêu chí

| Mã | Tiêu chí | Điểm đề xuất | Căn cứ (mã N liên quan) | Còn mở |
|---|---|---:|---|---|
| C1 | Chính xác và nhất quán | 9,5/10 | Giá/cặp/VAT, W/đèn, 35W chưa tách, cơ chế màu thống nhất; câu bảo hành viết lại theo chính sách công khai, link chính sách đặt cạnh câu (N1) | Ngày hiệu lực giá 06/10/2026 do người phụ trách chốt |
| C2 | Đầy đủ theo vai trò | 9,5/10 | Catalogue, nhu cầu, chi phí 7 khoản, 30 case có nơi lắp, 11 FAQ (N2) | — |
| C3 | Tự nhiên và hữu ích | 9,5/10 | Sapo trả lời thẳng kèm giá và bước kiểm xe; lý do chọn Auto365 viết theo phạm vi xác nhận (N3) | Trùng khối địa điểm `#he-thong` / `#diem-lap` nằm ở template CMS v2 |
| **C** | | **28,5/30** | | |
| S1 | Nhu cầu tìm kiếm và vai trò URL | 9,5/10 | Hub thương hiệu X-Light; phân vai hub tổng/PDP/case (N5) | — |
| S2 | Nội dung SEO trên trang | 9,5/10 | Title/H1/meta; credit thống nhất: meta author + `TechArticle.author` = Team Content Auto365, `CollectionPage.reviewedBy` = Nguyễn Quang Đạo, khớp dòng hiển thị (N4) | Graph schema CMS v2 khác preview — CMS chốt `@id` |
| S3 | Liên kết và hồ sơ triển khai | 9/10 | Hồ sơ CMS, đoạn link soạn sẵn, ghi chú release v2 (N5) | Link vào chưa triển khai; release pack v2 cần hash bản CMS |
| **S** | | **28/30** | | Thiếu 0,5 |
| G1 | Câu trả lời rõ, đủ ngữ cảnh | 9,5/10 | Giá/đơn vị/VAT/điện áp/cơ chế màu đứng cạnh nhau | — |
| G2 | Lập luận phục vụ nhu cầu | 9,5/10 | Lọc điện áp/lens/nhu cầu/ngân sách; W có giới hạn; "đã lắp" tách "hồ sơ liên quan" | — |
| G3 | Nguồn và truy nguyên | 4,5/5 | PDP, case, hồ sơ người duyệt, chính sách bảo hành (N1, N3) | Phiên bản thi công 2 xe Honda chưa đối chiếu |
| **G** | | **23,5/25** | | Thiếu 0,25 |
| U1 | Cấu trúc dễ đọc | 4,5/5 | Luồng chọn → so → case → tư vấn; mobile 360–414px không tràn | Máy thật: CX |
| U2 | Hành động tiếp theo | 4,5/5 | Catalogue ẩn đúng thẻ (đã thử khi gỡ CSS `.is-hidden`): 301→1, 24V→2, lens 2.0→4, không khớp→0, xoá lọc→8; form chuyển đúng mẫu; UTM lấy từ snapshot khi URL đã sạch; `lead_id` số được giữ | CRM/routing/GA4: CX; v2 cần build lại |
| U3 | Bộ bàn giao nhất quán | 4/5 | 01 + 02 + 03 cùng hash preview; có ghi chú release v2 | Chưa có hash/release ID bản CMS v2 |
| **U** | | **13/15** | | |
| **Tổng** | | **93/100** | | Các mục CX ghi riêng ở §2, không cộng vào điểm |

## 2. Kết luận theo V1.8 (§13.3)

**CHƯA ĐẠT NỘI DUNG V1.8** cho bản preview này — tổng 93/100 < 95 và S 28/30 < 28,5. Điểm chỉ tính phần đã xác nhận trên bản đang chấm.

Việc cần xác nhận (CX) — ghi riêng, không dùng để nâng điểm:

- Bản CMS v2 build lại từ mã nguồn này (catalogue, UTM, credit, bảo hành).
- API → CRM → GA4: lead test 60, 87, 111 do team tự gửi; CRM/GA4 chưa xác nhận.
- Link vào từ hub tổng/PDP/case; URL production 200.

### Đã sửa ngày 08/10/2026 (theo tái kiểm 06/10)

| Mục | Đã sửa |
|---|---|
| Nguồn công suất | Bỏ "hãng công bố" ở ghi chú popup so sánh, bảng Hiểu nhanh và tiêu chí Đi tỉnh; ghi "theo trang sản phẩm Auto365, tính mỗi đèn" |
| FAQ lens / Kelvin, thẻ mưa sương, chú thích bảng | Sửa cả phần hiển thị và FAQ schema; bảng ghi ngày đối chiếu 06/10/2026 |
| ID trùng | `xlight-real-case-like-bigm-v5` chỉ còn ở thẻ style; script đổi thành `xlight-real-case-like-bigm-v5-js` |
| So sánh | Chọn mẫu thứ 2 không tự mở popup; người dùng bấm "Xem so sánh". Mẫu thứ 4 vẫn báo trên thanh, và trong popup khi popup đang mở |
| Hồ sơ triển khai | Bỏ câu "chạy được ngay"; ghi 4 điều kiện nghiệm thu; danh sách trường gửi đổi `lead_id` → `request_id` |

## 3. Lỗi chặn (§12)

| Mã | Trạng thái |
|---|---|
| BLOCK_01 Sai sản phẩm/cấu hình | Không — case Honda ghi đúng mức "hồ sơ liên quan" |
| BLOCK_02 Mâu thuẫn giá/VAT/bảo hành | Không — giá/cặp/chưa VAT thống nhất; bảo hành theo chính sách |
| BLOCK_03 Bịa bằng chứng/người duyệt | Không |
| BLOCK_04 Đề xuất kỹ thuật thiếu căn cứ | Không — 24V/lens/W có điều kiện |
| BLOCK_05 Sai điểm liên hệ | Không — hotline 0365 365 911 |
| BLOCK_06 Ghi chú nội bộ trong bản đăng | **Phải xoá khi lên production**: khối `#xl-internal-check` (preview tự ẩn ngoài pages.dev/localhost) |
| BLOCK_07 Production noindex/canonical/404 | Áp cho live — URL production đang 404 |
| BLOCK_08 Schema sai so với hiển thị | Không — FAQ 11 câu khớp; credit khớp |

## 4. Việc để chuyển sang "ĐẠT NỘI DUNG V1.8"

1. CMS build lại v2 từ commit ghi trong 01, kiểm 5 ca catalogue + UTM sau cleanup → U2, U3.
2. ~~Ngày hiệu lực giá~~ — đã chốt 06/10/2026.
3. CMS chốt graph schema/`@id` bản v2, gộp khối địa điểm trùng → S2, C3.
4. Dán link về hub theo `doan-link-ve-hub.md`; đăng URL production → S3.
5. Xưởng đối chiếu 2 xe Honda → G3.
6. CRM xác nhận lead 60/87 rồi xoá → U2.
