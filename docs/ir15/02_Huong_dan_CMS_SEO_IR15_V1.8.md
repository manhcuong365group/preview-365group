# 02 — Hướng dẫn CMS/SEO: 3M IR15 (V1.8)

- Bản nguồn: `auto365/ma-phim/ir15.html` (preview https://preview-365group.pages.dev/ma-phim/ir15)
- URL production giữ nguyên: https://auto365.vn/ir15 (cập nhật URL hiện có, không tạo URL mới)
- Loại trang: Mã phim kính sườn sau/kính lưng dòng Ceramic IR. Câu hỏi chính: IR15 giá, kín đến đâu, khác IR25.
- Phiên bản bàn giao: HTML SHA-256 `838c7a1a016a4b344bdda0c62e31a5fab291bdfabd4039660fdb5d61862c9af4` (06/10/2026); phần 01 = file HTML này; phần 03 = `03_Phieu_danh_gia_IR15_V1.8.md`
- dateModified: 2026-10-06; byline "Cập nhật nội dung 06/10/2026". Không có datePublished (chưa có dữ liệu); không tự thêm.

## 1. Bối cảnh các sửa đổi

Sếp duyệt preview lúc khoảng 18:00 ngày 05/10/2026 và yêu cầu chỉnh. Quy tắc cũ "không nhấn mạnh tối/đi đêm" chỉ nới ở các câu nhắc quan sát có điều kiện, ngắn, trung tính, không hứa hẹn (popup và FAQ liên quan). Mọi giá đã gồm VAT; hotline 0365 365 365; ưu đãi/dịch vụ áp dụng toàn hệ thống 91 chi nhánh; bảo hành ghi "lên đến 10 năm theo chính sách 3M Việt Nam".

**Nội dung trang này đã sửa**

- Popup: ghi chú kính sườn trước (kèm link "So với IR25"), kính lưng (có "gương trung tâm"), cửa sổ trời; giá có VAT; dòng nguồn TDS Rev B.
- Service.offers tách 2 Offer; tên điểm "Auto365.vn - Trụ Sở Chính" thống nhất.

**Sửa dùng chung (cả 9 trang mã phim)**: popup ghi chú quan sát theo vị trí + link "So với …" (CR BLK 15/IR15/NR15 ở sườn trước); nhãn giá có "đã gồm VAT"; nguồn thông số theo mã (trường SRC); nhãn ưu tiên "Kín hơn (độ truyền sáng thấp)" kèm dòng giải thích xếp theo VLT; form lead (trả focus về nút mở popup, khóa Tab trong hộp thoại, xóa trạng thái cũ mỗi lần mở, sau gửi thành công nhãn "Bạn đang quan tâm" luôn bằng gói ẩn, tùy chọn nhu cầu theo gói); tên điểm "Auto365.vn - Trụ Sở Chính" (gạch ngang thường); "điểm phần trăm" thay cho "điểm".

## 2. Đã kiểm trên production (06/10/2026)

| Hạng mục | Kết quả |
|---|---|
| HTTP, canonical | 200; canonical tự trỏ đúng URL |
| Robots | `index, follow, max-image-preview:large…`, không noindex. Preview có noindex qua `_headers` (đúng chủ đích); không mang header này sang production. |
| Nội dung live cũ 1 | Live: canonical đúng, index/follow. Trong khi bảng thông số live ghi VLT 16%, đoạn mô tả live còn "tỷ lệ truyền sáng đặc trưng chỉ 18%" → mâu thuẫn, thay bằng 16% (Auto 75, TDS Rev B). |
| Nội dung live cũ 2 | Live giá 1.800.000đ / 2.300.000đ khớp; chưa có câu "đã gồm VAT". Title/H1 live chỉ "IR15". |

## 3. Việc IT/CMS

1. Thay nội dung trang hiện có bằng bản mới; giữ một H1 và title/meta của bản mới (title 60 ký tự: "3M Ceramic IR15 kính sườn, kính sau: giá, thông số | Auto365").
2. Ảnh trong `assets/` upload lên CMS, đổi `src` sang URL CMS thật; đường dẫn `assets/…` chỉ dùng cho preview.
3. JSON-LD: hợp nhất với graph CMS tự sinh, không để hai Product/WebPage mâu thuẫn. Giữ Organization, AutoRepair `#tru-so-chinh`, WebPage (author, reviewedBy, citation, dateModified), Product, Service (offers theo vị trí: giá hiện có [1800000,2300000] VND), BreadcrumbList, FAQPage (7 câu, khớp HTML). Không thêm InStock, priceValidUntil, rating.
4. Form `/api/leads`: kiểm bằng lead thử do team tạo (đánh dấu TEST): hero → IR15; thẻ gói → gói + "Nhiều vị trí"; popup gợi ý mã + vị trí → đúng mã + vị trí. Chỉ coi là thành công khi phản hồi {"success": true}. Lưu ý: /api/leads không validate phone/consent phía server.
5. Preview giữ noindex; production kiểm lại header và meta robots sau khi ghép.

## 4. Việc team (trang/bài khác trên site live — không sửa trong đợt này)

- Bài VF3 (58% IR): việc của team, không sửa trong đợt này.
- Bài Innova/camera: nếu có IR15 ở kính lưng, thêm câu kiểm tầm nhìn qua gương chiếu hậu trong xe, camera lùi hỗ trợ khi lùi xe.
- Sửa số 18% → 16% trên trang live /ir15.

## 5. Nguồn

- Thông số trang: VLT 16, TSER 63, IRER 67, giảm chói 78 (kính Auto 75; TDS Ceramic IR Rev B 07/2021).
- Bảo hành (3M Việt Nam, lên tới 10 năm): https://www.3m.com.vn/3M/vi_VN/car-personalization-vn/products/automotive-window-tint/
- Crystalline TDS Rev F 08/2025: https://multimedia.3m.com/mws/media/2628835O/cystalline-technical-data-sheet.pdf ; Ceramic IR TDS Rev B 07/2021: https://multimedia.3m.com/mws/media/1919598O/3m-automotive-window-film-ceramic-ir-series-tech-data-sheet.pdf

## 6. Còn chờ dữ liệu (CX)

- Biên bản đo riêng IR15: trang không tuyên bố số đo riêng nên không dùng để trừ điểm (3 case đều ghi IR15).
- Bản chụp/biên bản đo gốc (thiết bị, ngày, vị trí kính, kính nguyên bản) cho các ảnh máy đo trên trang.
- Văn bản chính sách bảo hành riêng theo từng mã phim tại Việt Nam (trang đang dùng câu "lên đến 10 năm theo chính sách 3M Việt Nam" do chủ trang xác nhận).
- Danh sách chi nhánh có dịch vụ cho mã này (ưu đãi/dịch vụ áp dụng toàn hệ thống 91 chi nhánh đã được chủ trang xác nhận).
- Search Console (URL Inspection, canonical Google chọn), mobile thiết bị thật, PageSpeed, lead thử vào CRM (form POST /api/leads, chỉ báo thành công khi {"success": true}).

> Cập nhật 06/10/2026: nguồn bảo hành là cổng eWarranty 3M (https://ews2.3m.com/ews/pub/vnaf/searchWarranty) — chủ trang xác nhận đây là link chuẩn; đã mở được bằng trình duyệt. Đã bỏ link trang 3M Việt Nam (phim ô tô) khỏi các trang.
