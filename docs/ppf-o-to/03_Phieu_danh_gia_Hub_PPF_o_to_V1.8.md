# 03 — Phiếu đánh giá V1.8: Hub PPF ô tô

- Trang: `https://preview-365group.pages.dev/ppf-o-to/` (bản 24/10/2026, preview, noindex đúng chủ đích)
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
| R21-03 | Đã chốt (chủ trang báo 22/10/2026) | SEO/IT đã chốt URL catalog và tuyến Wrap; chờ URL để gắn link "Xem tất cả sản phẩm" trên hub trước khi 301 /ppfwrap-film |
| R21-04 | Một phần | Anh Đặng Minh Hoàng duyệt lại toàn bài bản 22/10/2026 (gồm câu trích chuyên gia và các sửa R21-01/R21-02); lastReviewed = 2026-10-22. Commercial/CRM/pháp lý hợp nhất còn CX |
| R21-05 | Giữ nguyên | Chủ trang yêu cầu bỏ dòng chữ dưới sơ đồ (20/10); bảng 5 tình huống và FAQ đã nêu phạm vi thống nhất khi kiểm tra xe |

Bổ sung 22/10/2026 (sau khi anh Hoàng duyệt bản sáng): mục kiến thức k07 "Có nên dán PPF? Lợi ích và giới hạn" và 2 FAQ (xe cũ đã xước; PPF bóng hay mờ), FAQ hiển thị 9 = FAQPage 9. Đã được anh Hoàng duyệt 22/10/2026.

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
| U3 | 5 | CX | 4,5 | 01–03 cùng SHA bên dưới; anh Hoàng duyệt lại toàn bài 22/10; lead test 228 (22/10) CRM đã nhận; Commercial đã xác nhận (chủ trang báo 22/10/2026) |

**Tổng tự chấm: C 29,1 · S 29,0 · G 24,0 · U 14,2 → 96,3/100. ĐẠT theo tự chấm (preview)** — SEO 29,0 ≥ 28,5; GEO 24,0 ≥ 23,75. Phần bổ sung sau bản duyệt sáng 22/10 (giá dán lẻ, k07, 2 FAQ, quy trình ảnh thật, định nghĩa PPF) đã được anh Đặng Minh Hoàng xem và duyệt ngày 22/10/2026; cần reviewer tái chấm; chưa nghiệm thu Live.

## Xử lý phiếu tái kiểm R3 (23/10/2026)

| Mã | Trạng thái | Việc đã làm |
|---|---|---|
| R22-01 | Đã sửa trên preview | Đổi cả 3 href TDS 150 Gloss sang PDF 3M Revision B, 08/2026 (2395418O) và 2 nhãn thành "Revision B, 08/2026"; card 150 Gloss ghi "7.5 mil (0.19 mm, phim kèm keo)", bảo hành 10 năm khớp TDS. Reviewer xác nhận áp dụng Việt Nam |
| R22-02 | Một phần | Bảng giá dán lẻ lấy từ bảng giá AX Film khách lẻ (tham khảo, gồm VAT) chủ trang cung cấp 22/10, Commercial đã xác nhận 22/10. Card 3M 50 Gloss (độ dày) và AX X Series Ver 2 (bảo hành): PDP chưa công bố số, giữ "Theo trang sản phẩm", không tự điền |
| R22-03 | Giữ nguyên | Hub dùng NAP 4/4/1/7 và 33 tỉnh theo danh bạ + chứng nhận 3M; khác biệt bài Dân Việt (4/4/3/3, 34 tỉnh) chuyển vận hành xác nhận, không sửa theo báo |
| R22-04 | Chờ URL | SEO/IT đã chốt; chờ chủ trang gửi URL catalog để gắn "Xem toàn bộ sản phẩm PPF/Wrap" |
| R22-05 | Một phần | Lead test 228 (22/10) CRM đã nhận; 01–03 cùng SHA bên dưới. Production chưa nghiệm thu |
| Giá dán lẻ 3M | Đã thêm | k08 thêm nhóm 3M PPF: 12 vị trí giá "từ" theo bảng giá 3M PPF theo vị trí của 3M Pro Shop - Trụ Sở Chính (3M 50 Gloss, Sedan, lập 23/10/2026; file chủ trang gửi). Bảng ghi VAT cần xác nhận khi chốt báo giá → trang ghi đúng như vậy. Chênh lệch cần Commercial xác nhận, chưa sửa: (1) đã sửa theo xác nhận chủ trang 23/10: 3M 200 Gloss toàn xe 102/110/122tr (Sedan/SUV/MPV), card + AggregateOffer + FAQ; 3M 150 Gloss 85/92/102tr, card + AggregateOffer (chủ trang duyệt 23/10); (2) địa chỉ 4/4/3 và hotline 0587.365.365 trên bảng giá khác hub (4/4/1/7, 0365 365 365) |
| Giá theo loại xe | Đã thêm | Khối #gia-theo-xe (tham khảo bố cục Store Detailing): 3 thẻ Sedan/SUV/MPV, mỗi thẻ "chỉ từ" + 6 dòng phim (AX G, AX X V2, 3M 50/100/150/200) — số khớp card và AggregateOffer; xe mẫu chỉ tham khảo |
| Khối thương hiệu | Đã thay lưới card (chủ trang duyệt 23/10) | Khối thương hiệu nay là #san-pham (bỏ lưới 9 card + JS carousel; ItemList schema 9 sản phẩm giữ nguyên, 8 mã hiển thị trong 2 khối, carbon gộp 1 thẻ): khối 3M và AX Film (ảnh case thật, nhãn, giới thiệu, phù hợp, 4 mã/khối với độ dày–bảo hành–giá từ). Card 3M 50: bảo hành 5 năm theo bảng giá 3M 23/10, bỏ dòng độ dày chưa có nguồn; card AX X V2: bỏ dòng bảo hành chưa có nguồn |
| Gộp giá vào #san-pham | Đã làm (23/10) | Theo chủ trang: bỏ khối #gia-theo-xe và accordion k08; mỗi mã trong khối thương hiệu ghi giá Sedan/SUV/MPV; giá dán lẻ thành mục mở/đóng "Giá dán lẻ theo vị trí" trong khối 3M (từ 760.000đ) và AX (từ 400.000đ), giữ nguyên ghi chú nguồn |
| Khối #bang-gia | Đã thêm (23/10, theo mockup chủ trang; bố cục 2×2 hiện cùng lúc; thẻ phim và sơ đồ vị trí dùng hình minh họa xe dạng vector SVG (trang trí, không phải ảnh thi công); gói dùng ảnh case thật) | 4 tab: theo xe (chọn hãng + loại xe, thẻ từng mã), theo vị trí (sơ đồ xe + 13 vị trí, 3M 50/150/200 và AX G/K/X), gói theo nhu cầu (4 gói, giá "từ" tạm tính = cộng giá vị trí AX G Series Sedan/A–B, gói toàn xe = giá gói; ghi rõ cách tính), ước tính nhanh (cộng giá vị trí hoặc giá toàn xe, cảnh báo khi tổng vượt gói toàn xe). Số liệu từ bảng giá 3M theo vị trí 23/10 + bảng AX Film khách lẻ + giá toàn xe đã duyệt; AX: Sedan=A–B, SUV=C–D, MPV=MPV/E-SUV. Không có giá vị trí cho 3M 100 Gloss và hõm tay cửa nên không đưa vào. Bỏ giá dán lẻ/giá theo loại xe trùng trong khối thương hiệu |
| Gọn khối giá (24/10) | Đã làm | Theo góp ý: #bang-gia còn 2 tab (Giá dán toàn xe: chọn hãng + loại xe; Ước tính chi phí nhanh: chọn dòng phim, loại xe, toàn xe/từng vị trí); bỏ sơ đồ vị trí, gói, hình xe minh họa; bỏ giá trùng trong khối thương hiệu; khối thương hiệu dùng logo chữ 3M / AX Film thay ảnh xe; logo hãng ở bộ lọc case cùng kích thước, xám khi chưa chọn |
| Khối giá theo mockup 2 (24/10) | Đã làm | #san-pham dựng theo layout chủ trang gửi, dữ liệu theo bảng giá đã duyệt (không lấy số trong mockup): thanh thương hiệu 3M/AX; giá toàn xe 3 thẻ Sedan/SUV/MPV kèm bảng dòng phim (ảnh case thật Camry, CX-5, VF 8); giá theo vị trí (bảng + "khi nào nên dán"); 4 gói giá "từ" tạm tính AX G Sedan; ước tính nhanh; dải "giá đã bao gồm". Bỏ nhãn "Phổ biến", hõm tay cửa, gói va quẹt (không có nguồn giá) |
| Vị trí + ước tính (24/10) | Đã làm | Giá theo vị trí dựng như mockup: ảnh case thật BMW 530i có chấm vị trí, 8 ô giá hai bên, bảng 13 vị trí bên phải (mobile chỉ ảnh + bảng). Khối Ước tính nhanh đưa lên ngay sau bảng giá toàn xe |
| Callout vị trí (24/10) | Đã làm | Giá theo vị trí dạng callout: ảnh thật BMW 530i đánh số 1–8 + đường nối, 8 thẻ có ảnh cận cảnh thật từ case (nóc xe chưa có ảnh, dùng icon), hàng "Vị trí khác" (cản sau, cốp sau, sườn xe, đuôi cá, đèn sau); bảng 13 vị trí thu vào "Xem bảng giá đầy đủ". Không thêm hõm tay cửa/ốp gầm vì chưa có nguồn giá |
| Configurator (24/10) | Đã làm | Tham khảo file demo configurator chủ trang gửi (chỉ lấy tương tác, không lấy price matrix suy theo hệ số trong demo): bấm số trên xe / thẻ / vị trí khác để cộng giá; thanh tổng tạm tính (dính đáy trên mobile), nút xóa; bỏ đường nối, số xếp theo cột; gộp khối Ước tính nhanh vào đây; nút gói chọn sẵn vị trí |
| A7 nhãn sơ đồ | Giữ nguyên | Chủ trang yêu cầu không để chữ dưới sơ đồ (20/10) |

## Tự chấm sau R3 (bản 24/10/2026, lấy điểm reviewer R3 22/10 làm gốc)

Thay đổi chính 23–24/10: TDS 3M 150 Gloss đổi sang Revision B (08/2026); giá 3M 150/200 Gloss theo bảng giá 3M theo vị trí (chủ trang xác nhận 23/10); khối giá mới trong #san-pham (thanh thương hiệu, giá toàn xe 3 loại xe, ước tính nhanh, giá theo vị trí dạng callout có tích chọn + tổng tạm tính, gói theo nhu cầu); bỏ các dòng thông số không có nguồn trên card; logo bộ lọc case đồng bộ.

| Mã | Tối đa | R3 22/10 | Tự chấm 24/10 | Căn cứ |
|---|---:|---:|---:|---|
| C1 | 10 | 9,8 | 9,8 | Giá toàn xe/vị trí khớp bảng giá 3M (23/10) và AX khách lẻ; giá vị trí 3M ghi rõ VAT xác nhận khi chốt báo giá; không dùng số trong mockup |
| C2 | 10 | 9,8 | 9,9 | Có đủ giá toàn xe theo loại xe, giá 13 vị trí, gói theo nhu cầu, công cụ ước tính |
| C3 | 10 | 9,7 | 9,7 | Giữ |
| S1 | 10 | 9,7 | 9,7 | Migration /ppfwrap-film chưa nghiệm thu |
| S2 | 10 | 9,8 | 9,8 | Giữ; ảnh khối giá là ảnh case thật, ALT mô tả đúng |
| S3 | 10 | 9,5 | 9,5 | R22-04: chờ URL catalog để gắn link |
| G1 | 10 | 9,7 | 9,7 | Giữ |
| G2 | 10 | 9,8 | 9,9 | Khách tự so giá theo loại xe/dòng phim/vị trí và tính tổng trước khi liên hệ |
| G3 | 5 | 4,4 | 4,6 | R22-01 đã sửa (TDS Revision B, 3 href + 2 nhãn); nguồn bảng giá ghi trên trang |
| U1 | 5 | 4,9 | 4,8 | Trang dài hơn do khối giá tương tác; desktop + 375px không tràn |
| U2 | 5 | 4,9 | 4,9 | Thanh tổng + nút "Nhận báo giá chính xác" dẫn form; finder giữ địa phương |
| U3 | 5 | CX | 4,5 | 01–03 cùng SHA bên dưới; lead 228 CRM đã nhận; anh Đặng Minh Hoàng đã duyệt khối giá mới 24/10/2026 (lastReviewed = 2026-10-24) |

**Tổng tự chấm: C 29,4 · S 29,0 · G 24,2 · U 14,2 → 96,8/100. ĐẠT theo tự chấm (preview)** — SEO 29,0 ≥ 28,5; GEO 24,2 ≥ 23,75.

Việc còn lại trước ký duyệt: (1) ĐÃ XONG: anh Đặng Minh Hoàng duyệt khối giá mới 24/10/2026; (2) URL catalog/Wrap (R22-04); (3) ĐÃ XONG: chủ trang chốt 24/10/2026 dùng địa chỉ 4/4/1/7 Đường Số 3, Phường Hiệp Bình, TP. Hồ Chí Minh và hotline 0365 365 365 (hub đã dùng đúng; địa chỉ/hotline in trên file bảng giá 3M không dùng); (4) reviewer tái chấm; (5) nghiệm thu production.

## Tự chấm lại (24/10/2026, sau duyệt khối giá + chốt NAP)

| Mã | 24/10 lần 1 | 24/10 lần 2 | Căn cứ thay đổi |
|---|---:|---:|---|
| G3 | 4,6 | 4,7 | NAP thống nhất 4/4/1/7 + 0365 365 365 (chủ trang chốt), không còn chênh nguồn |
| U3 | 4,5 | 4,7 | Anh Đặng Minh Hoàng duyệt khối giá mới 24/10 (lastReviewed 2026-10-24); 01–03 cùng SHA; lead 228 CRM đã nhận. Còn thiếu: catalog URL, nghiệm thu production |
| Còn lại | — | giữ | C 29,4 · S 29,0 · G1/G2 9,7/9,9 · U1/U2 4,8/4,9 |

**Tổng tự chấm: C 29,4 · S 29,0 · G 24,3 · U 14,4 → 97,1/100. ĐẠT theo tự chấm (preview)** — SEO 29,0 ≥ 28,5; GEO 24,3 ≥ 23,75. Còn: URL catalog (R22-04), reviewer tái chấm, nghiệm thu production.

## Tự chấm lại (26/10/2026, sau làm lại giao diện khối giá, video, sắp xếp mục)

Thay đổi 26/10 (chỉ giao diện và vị trí, không đổi giá/bảo hành/thông số):
- Khối giá: tab thương hiệu 3M | AX Film, thanh chọn loại xe, thẻ phim có giá trọn gói theo loại xe.
- Giá theo vị trí: gộp ô ước tính vào bảng giá theo vị trí, đánh số 1–8 và tô đỏ tấm được chọn trên ảnh xe. Bảng đầy đủ 13 vị trí hiện giá của 6 dòng phim.
- Gói theo nhu cầu: xếp theo giá; gói toàn xe liệt kê các tấm sơn.
- Video: 9 clip PPF từ kênh Auto365, bố cục 1 video lớn và các video nhỏ. Hình ảnh và Video chuyển lên ngay sau Xe thực tế.
- Bảng so sánh PPF / ceramic / wrap gộp vào mục "PPF là gì?".
- Lần tự chấm đầu ngày 26/10 được 96,3: thẻ phim, bảng 13 vị trí và thẻ vị trí chỉ có giá sau khi chạy JavaScript. Đã sửa: giá mặc định (3M, Sedan) nằm sẵn trong HTML. Thẻ carbon ghi "Carbon Fiber (Clear / Gloss)" cho khớp 2 sản phẩm trong ItemList.

| Mã | 24/10 lần 2 | 26/10 | Căn cứ |
|---|---:|---:|---|
| C1 | 9,8 | 9,8 | Giữ; giá thẻ/bảng/schema/FAQ cùng nguồn D |
| C2 | 9,9 | 9,9 | Đủ 9 sản phẩm hiển thị (gồm Clear / Gloss Carbon), giá 6 dòng × 13 vị trí, 4 gói |
| C3 | 9,7 | 9,7 | Giữ |
| S1 | 9,7 | 9,7 | Migration /ppfwrap-film chưa nghiệm thu |
| S2 | 9,8 | 9,8 | Giá có trong HTML tĩnh; 1 H1, 17 H2; không ảnh thiếu ALT; không anchor hỏng |
| S3 | 9,5 | 9,5 | R22-04 chờ URL catalog |
| G1 | 9,7 | 9,7 | Giữ |
| G2 | 9,9 | 9,9 | AI đọc được giá theo loại xe/vị trí không cần JS; 9 video thực tế có tiêu đề rõ |
| G3 | 4,7 | 4,7 | Giữ |
| U1 | 4,8 | 4,9 | Mobile gọn hơn (thẻ vị trí 2 cột, chữ/giá nhỏ lại); desktop + 375px không tràn |
| U2 | 4,9 | 4,9 | Giữ |
| U3 | 4,7 | 4,7 | Anh Đặng Minh Hoàng đã xem và duyệt giao diện khối giá mới 26/10/2026 (lastReviewed = 2026-10-26) |

**Tổng tự chấm: C 29,4 · S 29,0 · G 24,3 · U 14,5 → 97,2/100. ĐẠT theo tự chấm (preview)** — SEO 29,0 ≥ 28,5; GEO 24,3 ≥ 23,75. Anh Đặng Minh Hoàng duyệt giao diện mới 26/10/2026. Còn: URL catalog (R22-04), reviewer tái chấm, nghiệm thu production.

## Bổ sung 27/10/2026: dải báo chí

Thêm dải "Báo chí nói về Auto365 & 3M Pro Shop" cuối mục Vì sao chọn: 4 bài có nhắc PPF/3M Pro Shop/365Group (Dân Việt, Xã Hội, Thanh Niên, Doanh nghiệp Kinh tế Xanh), dùng nguyên tiêu đề bài, link mở tab mới + link trang báo chí; Organization.subjectOf thêm 4 NewsArticle. dateModified 2026-10-27; lastReviewed 2026-10-27.

| Mã | 26/10 | 27/10 | Căn cứ |
|---|---:|---:|---|
| G3 | 4,7 | 4,8 | Có nguồn báo chí độc lập dẫn tới Auto365/3M Pro Shop |
| Còn lại | — | giữ | C 29,4 · S 29,0 · G1/G2 9,7/9,9 · U 14,5 |

**Tổng tự chấm: C 29,4 · S 29,0 · G 24,4 · U 14,5 → 97,3/100. ĐẠT theo tự chấm (preview).** Anh Đặng Minh Hoàng đã duyệt dải báo chí 27/10/2026 (lastReviewed = 2026-10-27).

## Xử lý phiếu tái kiểm pk36 theo V1.9 (28/10/2026)

Reviewer chấm pk36 ngày 27/10: C 29,2 · SEO 28,8 · GEO 23,9 · U2 3,8 · U1/U3 CX → 85,7 điểm (khoảng mở 85,7–95,7), chưa đạt demo V1.9.

| Mã | Đã làm 28/10 | Trạng thái |
|---|---|---|
| PK34-01 Toàn xe 0đ | Thêm chế độ phạm vi (toàn xe / từng vị trí). Toàn xe dùng giá gói: 3M 50 = 38 / 44 / 51 triệu, AX G = 20 triệu; đổi phim/nhóm xe tính lại đúng chế độ; Xóa về trạng thái rỗng; bấm một vị trí thì chuyển sang tính từng vị trí | Đã sửa, đã thử các mẫu nghiệm thu |
| PK34-02 Cấu hình sang form | Nút "Nhận báo giá chính xác" và nút "Báo giá" trên thẻ phim điền product_group + product_interest (mã phim, nhóm xe, phạm vi/vị trí, số bên, tạm tính, VAT, nguồn giá) và hiện ô "Cấu hình bạn đã chọn" trong form, có link sửa; đổi cấu hình sau đó tự cập nhật; giữ thông tin liên hệ đã nhập. AX G đầu xe: 7.200.000đ → SUV 7.920.000đ | Đã sửa frontend; lưu ở CRM chờ IT xác nhận (product_interest đã nằm trong nội dung gửi /api/leads) |
| PK34-03 3M 200: 102 hay 104 triệu | Giữ 102 / 110 / 122 triệu theo bảng giá 3M ngày 23/10 (chủ trang xác nhận 23/10). PDP và catalog còn ghi 104 triệu | Cần IT/Commercial cập nhật PDP + catalog theo bảng 23/10 |
| PK34-04 VF 8 dưới nhãn 7 chỗ | Đổi tên nhóm theo kích thước: Sedan / xe nhỏ · SUV / CUV cỡ vừa · SUV cỡ lớn / MPV; ghi rõ nhóm giá chia theo kích thước thân xe, không theo số chỗ. Không đổi giá | Đã sửa |
| PK34-05 HQ / tỉnh | "Xem Trụ Sở Chính" trỏ https://auto365.vn/3m-pro-shop-tru-so-chinh; thêm 10 link tỉnh (service=ppf&q=…) + danh bạ PPF đầy đủ | Đã sửa phần link; chuẩn PPF chung/ngoại lệ do Operations |
| PK34-06 Catalog / carbon | Thẻ carbon có 2 link Clear và Gloss tới đúng PDP | Carbon đã sửa; catalog là tài liệu nội bộ, không đăng công khai (chủ trang 28/10) → R22-04 không áp dụng |
| PK34-07 Nhãn chấm ảnh | 8 chấm có aria-label riêng (Chọn nóc xe, Chọn ốp gương…) và aria-pressed đồng bộ với thẻ | Đã sửa |
| Thêm | Mobile: mục "PPF là gì?" bị bảng so sánh làm giãn cột (642px) → đã ép cột 1fr, bảng cuộn ngang | Đã sửa |

Kiểm tra: desktop 1366 px và mobile 375 px, không lỗi console, trang không tràn ngang. dateModified 2026-10-28; lastReviewed 2026-10-28 (anh Đặng Minh Hoàng duyệt bản pk36 ngày 28/10).

**Tự chấm V1.9 (preview): C 29,3 · SEO 29,0 · GEO 23,9 · U1 4,6 · U2 4,7 · U3 4,5 → 96,0/100.**

Bổ sung 28/10: lead test 14:04 → POST https://auto365.vn/api/leads, product_group "Toàn xe", product_interest đủ cấu hình (3M PPF 50 · Sedan · Toàn xe · 38.000.000đ), tên "TEST hub PPF vui long xoa", request_id 86e5f65a-4d81-4b23-9b3b-a656cd3438b5 → HTTP 200 {success:true, lead_id 273, test:true}; CRM đã nhận đủ cấu hình và đã xoá lead 273 (chủ trang báo 28/10). Anh Đặng Minh Hoàng duyệt bản pk36 (28/10). PDP 3M 200 trên auto365.vn đã hiện 102.000.000đ (kiểm lại 28/10, khớp hub).

## Việc còn lại (tăng mức dư, không chặn)

1. Tài liệu kỹ thuật/giấy phân phối AX Film do hãng phát hành (C1, G3).
2. Danh sách panel trong gói toàn xe theo loại xe (C1).
3. Đường "Xem tất cả sản phẩm PPF" và mapping /ppfwrap-film + trang Wrap được duyệt (C2, S3).
4. Đối chiếu văn bản hợp nhất Thông tư 79 khi đăng.

Mọi sửa HTML sau phiên bản này phải chấm lại.

## Bảng đối chiếu phiên bản

| File | Phiên bản |
|---|---|
| `auto365/ppf-o-to/index.html` | SHA-256 `a52390cd6b6ea4bc258bc5d6e3e7647ad258bf1cbe8549302b47d3f6ef1b05a1` |
| 01_Noi_dung_Hub_PPF_o_to.md | Xuất tự động từ HTML trên, 21/10/2026 |
| 02_Huong_dan_CMS_SEO_Hub_PPF_o_to_V1.8.md | Ghi cùng SHA-256, có bảng sửa PPF19 |

Điểm là nhận định biên tập, không phải điểm Google hay xác suất AI đề xuất.

### Tự chấm lại 28/10/2026 (V1.9, preview)

| Nhóm | Trước | Nay | Căn cứ |
|---|---|---|---|
| Content | 29,3 | 29,4 | Anh Đặng Minh Hoàng duyệt bản có cách tính toàn xe + ô tóm tắt (28/10) |
| SEO | 29,0 | 29,2 | Giá 3M 200 Gloss 102tr khớp giữa hub và PDP; R22-04 catalog không áp dụng (tài liệu nội bộ) |
| GEO | 23,9 | 24,3 | Không còn lệch giá giữa các nguồn auto365.vn |
| U1 | 4,6 | 4,7 | Ngày kiểm duyệt khớp bản đang chạy |
| U2 | 4,7 | 4,9 | Lead 273 end-to-end: API success, CRM nhận đủ cấu hình, đã xoá |
| U3 | 4,5 | 4,6 | Form nhận cấu hình từ máy tính giá và thẻ phim |

**Tổng tự chấm: C 29,4 · SEO 29,2 · GEO 24,3 · U1 4,7 · U2 4,9 · U3 4,6 → 97,1/100. ĐẠT theo tự chấm (preview)** — SEO ≥ 28,5; GEO ≥ 23,75. Còn: reviewer tái chấm; catalog PDF chưa kiểm lại giá 3M 200.

Ghi chú 28/10 (giao diện theo góp ý sếp): bỏ dải "Tìm nhanh theo tỉnh" ở khối Hệ thống theo yêu cầu chủ trang; ô tìm theo tỉnh, 3 miền và link Gần tôi vẫn giữ. Đổi tông màu đen/xám, giữ đỏ cho CTA chính, giá thẻ phim và lớp phim trên ảnh xe; logo 3M/AX trên tab hãng; dải báo chí có ảnh bài.

## Xử lý phiếu tái kiểm pk48 theo V1.9 (29/10/2026)

| Mã | Đã xử lý | Kiểm trực tiếp |
|---|---|---|
| PK48-01A Xóa giữ phạm vi cũ | Phạm vi tự điền được xóa cùng tóm tắt và product_interest khi xóa cấu hình; phạm vi khách tự chọn thì giữ nguyên (quy tắc: chỉ ghi đè trường do hệ thống tự điền) | Toàn xe → CTA → Xóa: phạm vi "Chưa rõ", product_interest rỗng, tóm tắt "Đã xóa lựa chọn"; khách chọn "Mặt trước" thì giữ |
| PK48-01B Sửa từ card | Link "Sửa lựa chọn" từ card mở lại đúng hãng/nhóm xe/thẻ (viền nhấn); đổi nhóm xe ở card cập nhật tóm tắt; chạm vào calculator sau đó thì tóm tắt chuyển theo calculator, link sửa về calculator | 3M 200/cỡ vừa → đổi cỡ lớn: 122 triệu; chuyển tab AX rồi Sửa: về 3M/cỡ lớn/thẻ 3M 200; tên khách nhập giữ nguyên |
| PK48-02 HQ / 3M Pro Shop | Khối Trụ Sở Chính 4/4/1/7 có link /thu-duc; link dưới chứng nhận đổi thành "Xem hồ sơ 3M Pro Shop" → /3m-pro-shop-tru-so-chinh | Chủ trang xác nhận 30/10/2026: hai địa chỉ đều đúng — Trụ Sở Chính / Auto365 Center 4/4/1/7 (địa chỉ trên chứng nhận), 3M Pro Shop & 3M Training Center 4/4/3/3, phát triển trong hệ sinh thái Trụ Sở Chính, thuộc 365Group |
| PK48-03 Nguồn/nhãn | Bỏ ghi chú "Sedan = A–B, SUV = C–D" ở bảng vị trí; footer tách nguồn giá trọn gói (PDP 19/10, 3M 200 đối chiếu 28/10), giá vị trí 3M (23/10) và AX khách lẻ; product_interest ghi nguồn theo loại giá (gói hoặc vị trí) | Độ dày 3M 50 và bảo hành AX X: PDP chưa công bố, giữ nguyên chờ Commercial |
| PK48-04 Catalog | Thêm link "Xem toàn bộ sản phẩm PPF/Wrap" → /ppfwrap-film cạnh thẻ phim | Nhóm link tỉnh đã bỏ theo yêu cầu chủ trang 28/10; finder tỉnh và 3 miền giữ |
| QA video | Clip F4iyRoH7Mco (VF7 3M 50 Gloss) đã chuyển riêng tư trên YouTube (thumbnail 404) → bỏ khỏi khối video, còn 8 clip | 8/8 ảnh thumbnail tải được |

Kiểm: desktop và mobile 375 px, không tràn ngang, không lỗi console. dateModified 2026-10-29; lastReviewed giữ 2026-10-28.

Bổ sung 29/10/2026 (chủ trang cung cấp): độ dày 3M PPF 50 Gloss = 7.3 mil, đã thêm vào thẻ phim, dữ liệu thẻ và tóm tắt báo giá (schema Product không khai báo độ dày nên không đổi). Bảo hành AX PPF X Series Ver 2 = 8 năm (chủ trang cung cấp 29/10/2026), đã thêm vào thẻ phim và tóm tắt báo giá. Hết thông số còn thiếu trên các thẻ phim.

Đồng bộ khối Hệ thống theo #branch-discovery production (29/10/2026): thêm nút hotline 0365.365.911 (Đèn · Camera · Phụ kiện), Google Maps dùng link maps.app.goo.gl như production, thêm danh sách 91 chi nhánh theo 33 tỉnh dạng ẩn (giống khối SSR production, link tuyệt đối auto365.vn) để bot đọc được; giao diện không hiện thêm nhóm link tỉnh. Giữ link "Xem hồ sơ Trụ Sở Chính" theo PK48-02.

QA bảng (29/10/2026): rule CSS cũ ẩn cột thứ 3 của bảng giá 13 vị trí làm mất cột 3M 150 Gloss trên mọi màn hình, đã hiện lại; mobile ghim cột "Vị trí dán" khi cuộn ngang. Bảng PPF/ceramic/wrap và TPU/TPH/PVC chuyển dạng thẻ xếp dọc trên mobile (≤760px), desktop giữ dạng bảng.

## Xử lý phiếu tái kiểm pk54 theo V1.9 (30/10/2026)

| Mã | Đã làm | Còn lại |
|---|---|---|
| PPF54-01 Chứng nhận / nơi tiếp nhận | Câu khối chứng nhận ghi: 3M Việt Nam cấp chứng nhận cho Auto365 Center (Trụ Sở Chính, 4/4/1/7); 3M Pro Shop & 3M Training Center phát triển trong hệ sinh thái Trụ Sở Chính, thuộc 365Group, tại 4/4/3/3 — đặt lịch tại đây. Khối HQ (4/4/1/7, /thu-duc, Maps production) và link hồ sơ 3M Pro Shop (/3m-pro-shop-tru-so-chinh) tách riêng | Đóng — chủ trang xác nhận 30/10 |
| PPF54-02 QA sửa card / thủ công | Thông báo xoá phản ánh phạm vi khách tự chọn ("Phạm vi bạn đã chọn (Mặt trước) vẫn được giữ"). Đã chạy đủ bảng mẫu, xem bảng QA dưới | Endpoint/CRM: team đối chiếu bằng yêu cầu thử theo quy trình |
| PPF54-03 Link tỉnh | Danh sách 91 điểm / 33 tỉnh dạng ẩn như SSR production; giao diện giữ ô tìm + 3 miền theo yêu cầu chủ trang 28/10 | Nhóm link tỉnh hiển thị: chủ trang đã chọn không hiện |
| PPF54-04 Nguồn | 3M 50: nhãn "7.3 mil · Phim kèm keo" theo 3M Việt Nam (giống 150). AX X Ver 2: bảo hành 8 năm (chủ trang cung cấp 29/10) | Bảng phê duyệt thương mại cùng bản |

QA luồng (localhost, 30/10/2026):

| Luồng | Kết quả |
|---|---|
| Card 3M 200 / cỡ vừa → tư vấn → nhập tên → Sửa → cỡ lớn | 110 → 122 triệu, tóm tắt + product_interest cập nhật, tên giữ nguyên |
| Card 3M 100 (chỉ giá toàn xe) → Sửa | Quay về đúng thẻ 3M 100 (viền nhấn), không đẩy sang bảng vị trí |
| Calculator AX G / Sedan / gói đầu → CTA → đổi SUV | 7,2 → 7,92 triệu; 4 nhóm, đèn/gương 2 bên; phạm vi tự điền Từng chi tiết |
| Calculator → card → calculator | Tóm tắt luôn theo nguồn vừa thao tác |
| Khách tự chọn Mặt trước → Xoá calculator | Phạm vi giữ Mặt trước, product_interest trống, thông báo ghi đúng giá trị đang giữ |

U1 đa thiết bị (30/10/2026): đo 360, 390, 430, 768, 820, 1024 px — không phần tử nào tràn ngang ngoài vùng cuộn có chủ đích; bảng so sánh xếp thẻ ≤760px, bảng 13 vị trí ghim cột vị trí; không lỗi console. dateModified 2026-10-30; lastReviewed giữ 2026-10-28.

Bổ sung 30/10/2026 (sau pk55):
- PPF54-03: danh sách 91 điểm / 33 tỉnh chuyển từ dạng ẩn sang khối mở/đóng hiển thị "Danh sách 91 điểm theo 33 tỉnh/thành" dưới hai thẻ hệ thống (theo gợi ý accordion của phiếu); mỗi tỉnh link /chi-nhanh?service=ppf&q=<tỉnh>, mỗi điểm link hồ sơ cơ sở trên auto365.vn (124 link). Desktop 3 cột theo miền, mobile 1 cột, không tràn ngang.
- PPF54-02 CRM: chủ trang cho gửi thử 30/10/2026 14:37 — POST https://auto365.vn/api/leads (3M 200 Gloss · SUV cỡ vừa · Toàn xe · 110 triệu, source_page ppf-o-to-hub) → HTTP 200, success:true, lead_id 289, test:true. Cần bộ phận CRM xoá lead 289 sau khi đối chiếu.
- Anh Đặng Minh Hoàng duyệt bản pk55 ngày 30/10/2026 → lastReviewed 2026-10-30, byline (30/10/2026).

## Nghiệm thu U3 pk56 (30/10/2026) — ĐÃ DUYỆT

Phiếu nghiệm thu U3 bản pk56 (Ngọc Trân – SEO, 30/10/2026): PPF54-01…04 PASS – ĐÃ ĐÓNG; U1, U2 PASS; U3 PASS – ĐÃ DUYỆT; Content/SEO/GEO PASS theo nghiệm thu, không gán điểm tổng mới. Trạng thái cuối: ĐÃ DUYỆT – ĐÓNG U3 V1.9. Chi tiết trong [04](04_Phieu_duyet_Hub_PPF_o_to.md).
