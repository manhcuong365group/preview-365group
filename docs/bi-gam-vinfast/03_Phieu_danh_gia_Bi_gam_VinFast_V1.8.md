# 03 — Phiếu đánh giá SEO/GEO V1.8: Hub Bi gầm VinFast

| Trường | Giá trị |
|---|---|
| Chuẩn | Auto365 Quy chuẩn SEO/GEO HTML V1.8 — đủ 12 tiêu chí (có U3), thang /100. Ngưỡng: tổng ≥95, SEO ≥28,5/30, GEO ≥23,75/25 |
| Bản chấm | Preview `auto365/bi-gam/vinfast/index.html` — SHA-256 ghi trong [01](01_Noi_dung_Bi_gam_VinFast.md) (dateModified 2026-10-23) |
| Ngày chấm | 22/10/2026 (lượt 1: 91,0 · lượt 2 sau khi anh Đạo duyệt: 92,3 · lượt 3 sau khối "Chọn theo nhu cầu": 93,1 · lượt 4 sau duyệt bổ sung + lead test: 94,9 · lượt 5 sau CRM xác nhận lead 228; phần sẽ bổ sung sau khi đăng không trừ điểm) |
| Loại chấm | Tự chấm của team triển khai trên preview — **không phải phiếu nghiệm thu** |
| Kiểm duyệt kỹ thuật | Nguyễn Quang Đạo — duyệt 22/10/2026; `lastReviewed` 2026-10-22; xem [05](05_Phieu_duyet_Bi_gam_VinFast.md) |

## 0. Reviewer chấm 22/10/2026 và bản vá 23/10/2026

Reviewer chấm snapshot SHA `1d8380cb…` (22/10/2026 20:54): **92,0/100 — CHƯA ĐẠT** (C 27,4 · SEO 28,0 · GEO 22,6 · U 14,0). Reviewer không công nhận mức tự chấm 95,1 ở mục 1. Điểm mục 1 giữ lại làm lịch sử, **không dùng làm kết luận**.

| Mã | Phiếu reviewer | Đã làm 23/10/2026 | Còn mở |
|---|---|---|---|
| P0-1 | Href tương đối (vf6/, ../vinfast-vf3/…) sai khi lên canonical | 6 link trang dòng xe ở thẻ, CTA khối nhu cầu, ItemList đổi sang URL tuyệt đối production; không còn href tương đối trong nội dung. 02 mục 3 map ảnh tương đối + lưu ý header/footer v2 | IT upload ảnh, dùng header/footer production |
| P0-2 | 3 trang con 404 | Giữ link (phương án 1: đăng trước hub); 02 mục 3 ghi điều kiện phát hành + phương án dự phòng đổi 3 thẻ sang tư vấn | CMS đăng Fadil / Limo Green / Lux SA2.0 |
| B01 | Trả lời nhanh trước lưới | Sapo viết lại thành câu trả lời nhanh (theo mẫu reviewer, ~60 từ), không tách ô riêng để hero không lặp ý | — |
| B02 | H2 lưới dễ hiểu 18 hồ sơ | H2 "Chọn dòng xe VinFast"; dòng phụ "18 lựa chọn. Sáu dòng đang có trang hồ sơ…, các dòng còn lại được tư vấn sau khi kiểm tra…" | — |
| B03 | Bài tư vấn Fadil bị tính là case | Bỏ `/bi-gam-vinfast-fadil` khỏi khối case và ItemList (11 → 10), chuyển sang cẩm nang nhãn "Tư vấn dòng xe"; ItemList đổi tên "Bài hồ sơ…"; 04 thêm content_type, model_id, case_id (trống — chưa có mã nội bộ), sku_version, checked_at, ghi chú chưa xác nhận trùng xe | case_id nội bộ từ Media nếu có |
| B04 | Câu giắc zin / tải nhỏ / chói quá rộng | Thay bằng đoạn reviewer đề xuất (kiểm điểm cấp nguồn, tải bổ sung, dây/giắc, bảo vệ mạch theo đời và phiên bản; không mặc định có sẵn giắc; không can thiệp pin cao áp) ở box lưu ý, khối nhu cầu, FAQ, thẻ lý do; chói → "lắp đặt và căn chỉnh phù hợp hỗ trợ hạn chế nguy cơ gây chói"; bỏ "đảm bảo" ở chú thích case | Anh Đạo duyệt lại câu chữ mới (05) |
| B05 | Cẩm nang lệch chủ đề | 5 bài: tư vấn Fadil, bi gầm cho ô tô điện, dải sáng rộng / chiếu xa khi mưa, hốc đèn nhỏ 2.0 inch, đèn gầm sáng yếu (đã kiểm 200, đọc tiêu đề) | — |
| B06 | FAQ chi phí, bảo hành; nguồn quy định; nhãn form | +2 FAQ (khoản chi phí; bảo hành theo mẫu/phiên bản + phiếu bàn giao, không nêu thời hạn chung); FAQ đăng kiểm bỏ câu dẫn bài không có URL production; nhãn hiển thị "Đèn – Bi gầm, Bi LED" (giá trị API giữ nguyên) ở form nội dung + nút nổi; câu nhận diện Trụ Sở Chính ở khối chi nhánh; dòng tham khảo cuối FAQ | Anh Đạo duyệt 2 FAQ mới |
| B07 | 01 thiếu khối nhu cầu; 02 schema/map | 01 xuất thêm trả lời nhanh, tiêu đề lưới, khối nhu cầu (kèm link), CTA/form, câu chi nhánh, dòng tham khảo; 02 viết lại map production, robots + X-Robots-Tag, cách kiểm schema (không lấy FAQ rich result / RRT làm tiêu chí) | — |

Chưa tự chấm lại sau bản vá — **chờ reviewer tái kiểm** đúng bản SHA mới trong 01. Các câu chữ B04/B06 cần anh Đạo duyệt lại trước khi tái kiểm.

## 1. Điểm theo tiêu chí (tự chấm 22/10 — lịch sử, đã thay bằng mục 0)

| Mã | Tiêu chí | Điểm | Căn cứ | Còn mở |
|---|---|---:|---|---|
| C1 | Chính xác và nhất quán | 9,5/10 | Case, cẩm nang lấy từ bài đã đăng auto365.vn; không ghi giá; đại lý X-Light/GTR/AES, 90+ chi nhánh, hotline 911 theo dữ kiện đã chốt; title, H1, schema, FAQ khớp nhau; anh Đạo duyệt box lưu ý + FAQ 22/10/2026 | — |
| C2 | Đầy đủ theo vai trò | 9,4/10 | 18 dòng xe chia 3 nhóm, khối chọn theo nhu cầu 3 nhóm xe, 6 dòng có trang riêng, 11 case lọc theo dòng xe, box lưu ý, 4 lý do, chi nhánh, 8 cẩm nang, 4 FAQ, form | Cẩm nang riêng VinFast bổ sung sau khi có bài (không trừ điểm) |
| C3 | Tự nhiên và hữu ích | 9,2/10 | Giọng trung tính ("kỹ thuật viên", "chủ xe"), không "nhất/tuyệt đối"; thẻ dòng xe chưa có hồ sơ dẫn về form, tự điền dòng xe | — |
| **C** | | **28,1/30** | | |
| S1 | Nhu cầu tìm kiếm và vai trò URL | 9,5/10 | Trang hãng giữa hub bi gầm và trang dòng xe; phân vai trong 02 mục 1 | — |
| S2 | Nội dung SEO trên trang | 9,6/10 | Title 72 ký tự, meta 146, 1 H1 (đã sửa dính chữ khi đọc text), canonical, 6 khối schema sinh từ HTML; thẻ dòng xe/case/cẩm nang render sẵn trong HTML; CollectionPage có `reviewedBy`, `lastReviewed` khớp byline hiển thị | — |
| S3 | Liên kết và hồ sơ triển khai | 9,5/10 | 25 link auto365.vn kiểm 22/10 = 200; sửa link 404 `/xe-thuc-te`; liên kết xuống 6 trang dòng xe | 3 trang con production đăng sau (không trừ điểm, CMS xử lý theo 02 mục 6) |
| **S** | | **28,6/30** | | Đạt ngưỡng 28,5 |
| G1 | Câu trả lời rõ, đủ ngữ cảnh | 9,4/10 | Box "Xe VinFast lắp bi gầm cần lưu ý gì?" trả lời thẳng; FAQ xe điện, đăng kiểm, thời gian + khối chọn theo nhu cầu trả lời "khi nào chưa cần lắp" cho từng nhóm xe | — |
| G2 | Lập luận phục vụ nhu cầu | 9,6/10 | Khối "Xe VinFast của bạn dùng để làm gì?": 3 nhóm (xe điện đi phố / xe dịch vụ chạy đêm, đi mưa / dòng đời trước, đi tỉnh), mỗi nhóm có khi nào chưa cần lắp, nên ưu tiên gì, xe đã lắp thật và link trang dòng xe; câu chữ theo phần tư vấn nhu cầu đã duyệt ở các trang dòng xe ; anh Đạo duyệt bổ sung 22/10/2026 | — |
| G3 | Nguồn và truy nguyên | 4,8/5 | Mỗi case link bài gốc có ngày; nguồn ảnh ghi trong 02; 04 lưu URL từng dòng; người duyệt đứng tên + ngày trên trang | — |
| **G** | | **23,8/25** | | Đạt ngưỡng 23,75 |
| U1 | Cấu trúc dễ đọc | 4,6/5 | Hero → dòng xe → case → lưu ý → lý do → chi nhánh → cẩm nang → FAQ → CTA → form; mobile 375px không tràn ngang, lưới dòng xe 2 hàng vuốt ngang | — |
| U2 | Hành động tiếp theo | 5/5 | Form nr-lead (`data-service="Bi gầm VinFast"`), gọi 0365 365 911, Zalo; thẻ dòng xe chưa có hồ sơ tự điền dòng xe vào form; lead test 228 (22/10/2026) → `{"success":true}`; `source_page` sửa đúng "Bi gầm VinFast" ; CRM xác nhận nhận lead 228 có dòng xe "VinFast VF 8" (22/10/2026) | Xoá lead test 228 (vận hành, không tính điểm) |
| U3 | Bộ bàn giao nhất quán | 5/5 | 01 + 04 xuất tự động từ index.html cùng SHA; 02 hướng dẫn CMS; 03 phiếu này; khối kiểm tra nội bộ cuối trang (chỉ hiện trên preview); 05 phiếu duyệt ghi người, ngày, phạm vi | — |
| **U** | | **14,6/15** | | |
| **Tổng** | | **95,1/100** | | C 28,1 · S 28,6 · G 23,8 · U 14,6 |

## 2. Kết luận

**CHƯA ĐẠT theo reviewer (92,0/100, 22/10/2026).** Bản vá 23/10 ở mục 0 chờ duyệt kỹ thuật câu chữ mới và reviewer tái kiểm; không tự tuyên bố ĐẠT.

## 3. Việc cần làm để đạt

| Ưu tiên | Việc | Ai |
|---|---|---|
| 1 | Đăng 3 trang dòng xe Fadil / Limo Green / Lux SA2.0 (hoặc đổi trạng thái 3 thẻ) trước khi thay hub | CMS/IT + SEO |
| 2 | Duyệt lại câu nguồn điện / chói và 2 FAQ mới | Anh Đạo |
| 3 | Reviewer tái kiểm bản SHA mới | Reviewer |
| — | Xoá lead test 228 khỏi CRM | Vận hành |

## 4. Đã sửa trong lượt chấm này (22/10/2026)

| Mục | Đã sửa |
|---|---|
| Link | "Xem tất cả case" `/xe-thuc-te` (404) → `/tin-tuc?q=VinFast` |
| H1 | Thêm khoảng trắng giữa "VinFast" và "theo từng dòng xe" (text bot đọc bị dính chữ) |
| VF 7 | Trang production đã 200 → thẻ VF 7 link sang trang dòng xe, vào ItemList |
| FAQ | Câu dòng có hồ sơ khớp 6 trang dòng xe |
| U3 | Bộ 01–04 + script xuất tự động + khối kiểm tra nội bộ cuối trang |
| Duyệt kỹ thuật | Byline "Rà soát kỹ thuật: Nguyễn Quang Đạo (22/10/2026)" + `reviewedBy`/`lastReviewed`; phiếu duyệt 05; khối kiểm tra nội bộ đổi trạng thái |
| Chọn theo nhu cầu | Khối 3 nhóm xe sau lưới dòng xe; desktop 3 cột, mobile vuốt ngang |
| Duyệt bổ sung + lead | Anh Đạo duyệt khối nhu cầu; sửa `data-source-page` thành "Bi gầm VinFast"; lead test 228 → success |
| CRM | Chủ quản xác nhận lead 228 có dòng xe "VinFast VF 8" (22/10/2026) |
| Lọc case theo hãng đèn | Hàng lọc thứ 2 "Hãng đèn" (X-Light / GTR, suy từ tên đèn trong tiêu đề bài), kết hợp với lọc dòng xe |
