# 03 — Phiếu đánh giá V1.8: Hub PPF ô tô

- Trang: `https://preview-365group.pages.dev/ppf-o-to/` (bản 21/10/2026, preview, noindex đúng chủ đích)
- Người chấm: Claude, tự đánh giá sau khi sửa theo audit PPF19 của reviewer (19/10/2026). CHƯA thay cho tái chấm của reviewer.
- Loại trang: hub dịch vụ/danh mục PPF. Tiêu chuẩn: Auto365 SEO/GEO/HTML V1.8. Chấm trên preview.
- Điểm chỉ ghi trong phiếu này, không ghi lên trang (user 19/10/2026).

## Điểm reviewer (audit PPF19, bản 19/10/2026)

C 28,0 · S 28,3 · G 22,5 · U1+U2 9,2 · U3 CX → 88,0–93,0/100, CHƯA ĐẠT. Lỗi chặn: BLOCK_01 (ảnh hero/ảnh form là dán phim kính).

## Tự chấm lại (bản 21/10/2026, lần 2)

| Mã | Tối đa | Điểm | Căn cứ / phần thiếu |
|---|---:|---:|---|
| C1 | 10 | 9,5 | Giá Sedan/SUV/MPV và bảo hành theo PDP; chứng nhận 3M ghi đúng đơn vị (Auto365 Center, 365 Group); năng lực chi nhánh theo /chi-nhanh; pháp lý theo điều khoản TT 79. Còn: danh sách panel trong gói toàn xe; tài liệu AX do hãng phát hành |
| C2 | 10 | 9,7 | Đủ sản phẩm, case, ảnh thi công, lý do chọn, kiến thức ngành (vật liệu, 6 tiêu chí chọn PPF, phạm vi, kiểm tra, nghiệm thu, hư hỏng, đổi màu), góc chuyên gia, FAQ 7 câu. Còn: đường tới toàn bộ catalog |
| C3 | 10 | 9,6 | Kiến thức viết tổng quát ngành, lý do chọn viết theo lợi ích chủ xe, không claim tuyệt đối |
| S1 | 10 | 9,7 | Vai trò hub rõ; mapping /ppfwrap-film chưa duyệt |
| S2 | 10 | 9,6 | 1 H1, title 64 / meta 150, 3 bảng có caption + scope, ALT ảnh khớp nội dung (logo hãng trong nút lọc để alt trống, nút có aria-label) |
| S3 | 10 | 9,4 | Link nội bộ đã đổi sang URL production; graph nối @id, reviewedBy có url hồ sơ. Còn: đường tới toàn bộ catalog, migration chưa nghiệm thu |
| G1 | 10 | 9,6 | Các câu kiến thức trích riêng vẫn đúng phạm vi (xu hướng ngành, điều kiện) |
| G2 | 10 | 9,6 | Ma trận tình huống → phạm vi; 6 tiêu chí so sánh dòng phim; giá theo loại xe |
| G3 | 5 | 4,9 | Chuyên gia có tên, chức danh, hồ sơ; ý kiến kỹ thuật về PPF của anh Đặng Minh Hoàng (duyệt 21/10/2026); trích dẫn có nguồn (Dân trí 18/12/2019); TDS 3M; 13 case + 8 ảnh dẫn bài gốc. Còn: tài liệu AX do hãng phát hành |
| U1 | 5 | 4,9 | Bố cục 50:50 xen kẽ, ảnh–chữ cao bằng nhau; thẻ Vì sao thẳng hàng (subgrid); FAQ dạng danh sách; bỏ khối ghi chú nội bộ và câu dẫn cứng; gallery tạp chí; 375px/1280px không tràn. Chưa thử thiết bị thật |
| U2 | 5 | 4,8 | Form/hotline thống nhất 0365 365 365; lead 205 đã kiểm; lọc case có trạng thái rỗng |
| U3 | 5 | 5,0 | 01–03 cùng SHA-256 bên dưới |

**Tổng tự chấm: C 28,8 · S 28,7 · G 24,1 · U 14,7 → 96,3/100. ĐẠT NỘI DUNG V1.8 (bản preview)** — SEO 28,7 ≥ 28,5; GEO 24,1 ≥ 23,75. Cần reviewer tái chấm; chưa nghiệm thu Live.

## Xử lý phiếu tái kiểm R2 (22/10/2026)

| Mã | Trạng thái | Việc đã làm |
|---|---|---|
| R21-01 | Đã sửa trên preview | Ô tìm chi nhánh chuyển tới `/chi-nhanh?service=ppf&q=<địa phương>`; 3 nút miền dùng `service=ppf&mien=bac|trung|nam` (đúng tham số đọc trong branch-category.min.js). Cần reviewer thử lại desktop/mobile |
| R21-02 | Đã sửa trên preview | Bỏ xếp hạng độ dẻo/tự phục hồi/UV/tuổi thọ/giá theo TPU-TPH-PVC, thay bằng một dòng hướng dẫn xem TDS và phiếu bảo hành từng sản phẩm; viết lại câu mở bài vật liệu, tiêu chí độ dày và tiêu chí keo theo điều kiện |
| R21-03 | Còn mở | Cần SEO/IT chốt URL catalog đầy đủ và tuyến Wrap trước 301; chưa đặt link để tránh trỏ về /ppfwrap-film rồi 301 vòng |
| R21-04 | Một phần | Anh Đặng Minh Hoàng duyệt lại toàn bài bản 22/10/2026 (gồm câu trích chuyên gia và các sửa R21-01/R21-02); lastReviewed = 2026-10-22. Commercial/CRM/pháp lý hợp nhất còn CX |
| R21-05 | Giữ nguyên | Chủ trang yêu cầu bỏ dòng chữ dưới sơ đồ (20/10); bảng 5 tình huống và FAQ đã nêu phạm vi thống nhất khi kiểm tra xe |

Bổ sung 22/10/2026 (sau khi anh Hoàng duyệt bản sáng): mục kiến thức k07 "Có nên dán PPF? Lợi ích và giới hạn" và 2 FAQ (xe cũ đã xước; PPF bóng hay mờ), FAQ hiển thị 9 = FAQPage 9. Phần bổ sung này cần reviewer xem lại.

Bổ sung 22/10/2026: mục kiến thức k08 (accordion, sau k00) — 12 vị trí dán lẻ kèm giá thấp nhất "từ" (AX G Series, Sedan/SUV hạng A–B; chủ trang yêu cầu chỉ để giá tượng trưng), nguồn: bảng giá tham khảo AX Film cho khách lẻ, gồm VAT (chủ trang cung cấp 22/10). Giá toàn xe A–B/C–D/MPV khớp card và AggregateOffer hiện có. FAQ chi phí (hiển thị + FAQPage) thêm dán lẻ từ 400.000đ (A–B). Dán lẻ 3M chưa có bảng.

Bổ sung 22/10/2026: quy trình thi công đổi từ 5 sang 6 bước theo tài liệu quy trình chủ trang cung cấp (tiếp nhận; vệ sinh; đo đạc & chuẩn bị phim; dán; hoàn thiện; kiểm tra, bàn giao & hướng dẫn). Khối riêng #quy-trinh dạng 6 thẻ ảnh; ảnh thật từ hồ sơ thi công đã đăng (BMW 530i, Mazda CX-5, Ford Ranger, Toyota Camry), mỗi ảnh dẫn về bài gốc; đã bỏ ảnh minh họa AI.

Bổ sung 22/10/2026: khối "PPF là gì?" mở rộng định nghĩa (độ dày phổ biến 6–10 mil, PPF khác ceramic/wrap, có thể bóc) và mô tả chức năng 4 lớp theo TDS 3M 150 Gloss.

Không tự cộng điểm cho các mục trên; chờ reviewer tái chấm.

## Tự chấm sau R2 (bản 22/10/2026, lấy điểm reviewer 21/10 làm gốc)

| Mã | Tối đa | R2 21/10 | Tự chấm 22/10 | Căn cứ thay đổi |
|---|---:|---:|---:|---|
| C1 | 10 | 9,5 | 9,6 | R21-02: bỏ xếp hạng TPU/TPH/PVC, câu độ dày/keo có điều kiện; giá dán lẻ khớp bảng AX Film |
| C2 | 10 | 9,7 | 9,8 | Thêm giá dán lẻ theo vị trí, mục Lợi ích & giới hạn, quy trình 6 bước, định nghĩa PPF đầy đủ; catalog vẫn mở |
| C3 | 10 | 9,7 | 9,7 | Giữ |
| S1 | 10 | 9,7 | 9,7 | Migration /ppfwrap-film còn mở |
| S2 | 10 | 9,8 | 9,8 | Giữ; ALT ảnh quy trình mô tả đúng ảnh hồ sơ thật |
| S3 | 10 | 9,5 | 9,5 | R21-03 catalog/Wrap còn mở |
| G1 | 10 | 9,6 | 9,7 | Kết luận vật liệu/độ dày trích riêng không còn quá rộng |
| G2 | 10 | 9,5 | 9,7 | Lợi ích–giới hạn, giá dán lẻ, FAQ xe cũ/bóng–mờ hỗ trợ quyết định |
| G3 | 5 | 4,4 | 4,6 | Câu trích kỹ thuật của anh Đặng Minh Hoàng (duyệt 21/10); ảnh quy trình dẫn về 4 hồ sơ thi công gốc |
| U1 | 5 | 4,9 | 4,9 | Thẻ Vì sao không còn khoảng trống trên mobile; 375/540/1280px không tràn |
| U2 | 5 | 4,4 | 4,8 | R21-01: finder giữ q + service=ppf (Quảng Ninh → 8 điểm), nút miền dùng mien= |
| U3 | 5 | CX | 4,5 | 01–03 cùng SHA bên dưới; anh Hoàng duyệt lại toàn bài 22/10. Commercial/CRM còn CX |

**Tổng tự chấm: C 29,1 · S 29,0 · G 24,0 · U 14,2 → 96,3/100. ĐẠT theo tự chấm (preview)** — SEO 29,0 ≥ 28,5; GEO 24,0 ≥ 23,75. Phần bổ sung sau bản duyệt sáng 22/10 (giá dán lẻ, k07, 2 FAQ, quy trình ảnh thật, định nghĩa PPF) cần anh Hoàng xem lại; cần reviewer tái chấm; chưa nghiệm thu Live.

## Việc còn lại (tăng mức dư, không chặn)

1. Tài liệu kỹ thuật/giấy phân phối AX Film do hãng phát hành (C1, G3).
2. Danh sách panel trong gói toàn xe theo loại xe (C1).
3. Đường "Xem tất cả sản phẩm PPF" và mapping /ppfwrap-film + trang Wrap được duyệt (C2, S3).
4. Đối chiếu văn bản hợp nhất Thông tư 79 khi đăng.

Mọi sửa HTML sau phiên bản này phải chấm lại.

## Bảng đối chiếu phiên bản

| File | Phiên bản |
|---|---|
| `auto365/ppf-o-to/index.html` | SHA-256 `8a1ae4d0a51e9f85dbbd74b768e2a3fa92239b5949561a7a7bf5b49d650f7fee` |
| 01_Noi_dung_Hub_PPF_o_to.md | Xuất tự động từ HTML trên, 21/10/2026 |
| 02_Huong_dan_CMS_SEO_Hub_PPF_o_to_V1.8.md | Ghi cùng SHA-256, có bảng sửa PPF19 |

Điểm là nhận định biên tập, không phải điểm Google hay xác suất AI đề xuất.
