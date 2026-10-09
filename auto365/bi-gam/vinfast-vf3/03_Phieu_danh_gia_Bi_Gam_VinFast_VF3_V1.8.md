# Phiếu Đánh Giá — Bi Gầm VinFast VF3 V1.8

Tiêu chuẩn: Auto365 SEO/GEO/HTML V1.8  
Loại trang: landing page/tư vấn theo xe  
Ngày kiểm: 09/10/2026, Asia/Saigon (rà lại theo phiếu kiểm tra & fix ngày 08/10/2026)  
Người biên tập: Team Content Auto365  
Rà soát kỹ thuật: Nguyễn Quang Đạo (chờ hồ sơ duyệt riêng cho VF3 — xem VF3-04)  
Phạm vi: source local `index.html`, preview `https://preview-365group.pages.dev/bi-gam/vinfast-vf3/`. Chưa nghiệm thu live production.

## Kết luận hiện tại

**HOLD nghiệm thu.** Đã đóng các lỗi nội dung sửa được trong HTML. Chưa chấm PASS V1.8 vì còn CX cần Kỹ thuật / Operations / Media xác nhận và chưa chạy QA live L1–L8 trên production. Điểm 98,6/100 của phiếu ngày 07/10 không còn hiệu lực (phiếu đó ghi đóng P0 nhưng trang thực tế thiếu video VF3, thiếu nhãn xác minh, FAQ chỉ 4/11, ItemList rỗng).

## Ma trận lỗi (theo phiếu 08/10/2026)

| ID | Ưu tiên | Trạng thái | Đã làm / còn thiếu |
| --- | --- | --- | --- |
| VF3-01 | P0 | **Một phần** | Không còn ảnh H7/Naoevo/lens vuông/V20 trong khối bi gầm. 4 ảnh khối "có gì cần biết" là ảnh minh họa (AI) → alt đổi thành "Ảnh minh họa: …", thẻ "Trải nghiệm thực tế" đổi thành "Tư vấn theo phiên bản" để không bị đọc như evidence. **CX Media:** cần ảnh case VF3 + GTR G1 Turbo V2 có mã media, hồ sơ gốc, người xác minh. |
| VF3-02 | P0 | **Đóng trong HTML** | Nhãn xác minh hiển thị trong modal lọc (thẻ sản phẩm ở lưới chính không gắn nhãn theo yêu cầu 09/10; đoạn dưới H2 nêu rõ GTR G1 Turbo V2 là mẫu đã có video VF3): GTR G1 Turbo V2 = "Đã có case VF3 được xác minh" (CASE_VERIFIED, căn cứ 2 video VF3); 8 mẫu còn lại = "Cần kiểm tra xe trước khi chốt" (CHECK_REQUIRED). Đoạn giải thích mức xác minh đặt dưới H2 sản phẩm. Bỏ meta "Bảo hành 2 năm" khỏi modal lọc. **Lưu ý:** `vf3.json` ghi F10 Turbo V2 = "Kỹ thuật đã xác nhận tương thích VF3" nhưng `nguon_doi_chieu` không có hồ sơ → tạm để CHECK_REQUIRED, chờ Kỹ thuật gửi hồ sơ fitment để nâng lên FITMENT_VERIFIED. |
| VF3-03 | P0/CX | **Đóng câu chữ, CX Master Data** | Bỏ badge "Chuẩn hóa 90+ chi nhánh"; thêm câu "Khả năng tiếp nhận và phạm vi thi công bi gầm được xác nhận theo từng cơ sở trước khi đặt lịch." **CX Operations:** Master Data chi nhánh có dịch vụ bi gầm/VF3. |
| VF3-04 | P1/CX | **CX** | Giữ reviewer Nguyễn Quang Đạo (không tự thay). Cần hồ sơ: phạm vi duyệt, ngày, version cho trang VF3. |
| VF3-05 | P1 | **Đóng** | FAQ đăng kiểm dùng đoạn an toàn của phiếu 08/10, không kết luận pháp lý. FAQ hiện đủ 11/11 câu theo `vf3.json`. |
| VF3-06 | P1 | **Đóng trong preview** | Khôi phục section "Video thi công bi gầm trên VinFast VF3" (2 video `Aa0Of6ZtxEE`, `weADPByfN7g`). Đã test click → modal mở đúng YouTube embed, không rơi vào placeholder. Cần test lại trên production. |
| VF3-07 | P1 | **Đóng câu chữ, chờ Commercial** | Giá 9 SKU khớp `stg_products` (đối chiếu 06/10/2026). Bỏ "Báo giá trọn gói" (bước 4 + dock) → "Báo giá từng hạng mục". Thêm thẻ AES SV 2.0 Max (5.000.000đ) đang thiếu ở lưới chính. Commercial xác nhận đơn vị/VAT/hiệu lực. |
| VF3-08 | QA | **Một phần** | Schema: thêm FAQPage (11 câu, khớp visible); ItemList 9 sản phẩm (chỉ name + url, không Offer/Review). Sửa tràn ngang mobile 375px (grid gốc + khối 7 bước + rail cẩm nang). Còn: L1–L3, L6, L7 trên production. |

## Sửa thêm ngoài ma trận

- Claim chưa có căn cứ trong khối 7 bước: "nhiệt màu tối ưu", "cắm giắc zin an toàn", "Cân chỉnh máy laser, cắt sáng chuẩn chống chói" → viết lại theo mô tả quy trình, không claim tuyệt đối.
- Thẻ "Hậu mãi": bỏ "căn chỉnh lại nếu sai lệch trong thời hạn bảo hành" (mâu thuẫn `bao_hanh.thi_cong`) → ghi đúng: lỗi do lắp đặt không thuộc bảo hành thiết bị, trao đổi phương án/chi phí trước khi xử lý.
- Case section đổi H2 thành "Xe VinFast khác đã lắp bi gầm tại Auto365" + ghi chú case xe khác chỉ để tham khảo, không thay kiểm tra trên VF3.
- Cẩm nang: gỡ 3 bài trả 404 trên v2 (kiểm 09/10/2026): `kinh-nghiem-chon-nhiet-mau-den-gam`, `do-bi-gam-o-to-co-duoc-dang-kiem-khong`, `quy-trinh-can-chinh-duong-cat-sang-bi-gam`. Sửa tiêu đề 2 bài cho khớp title thật, bỏ "khắc phục triệt để", "chuẩn xác".

## N1–N5

| Mã | Kết quả | Ghi chú |
| --- | --- | --- |
| N1 | Đáp ứng một phần | Giá tách thiết bị / phụ kiện / công / VAT; bảo hành tách khỏi fitment. Chờ Commercial xác nhận hiệu lực giá. |
| N2 | Đáp ứng | Quick Answer, nhãn xác minh từng SKU, khối "khi nào cần kiểm tra xe", 11 FAQ. |
| N3 | Đáp ứng một phần | Video/case VF3 GTR G1 Turbo V2 đã hiển thị; case xe VinFast khác ghi rõ chỉ tham khảo. Ảnh khối giới thiệu là ảnh minh họa (CX Media). |
| N4 | Đáp ứng | Auto365 (publisher), VinFast VF3, GTR/X-Light/AES, reviewer thống nhất giữa visible text và schema. |
| N5 | Đáp ứng | Intent bi gầm VF3; hub `/nang-cap-anh-sang-bi-gam` giữ intent ngành; bài đèn chính không nằm trong khối bi gầm. |

## Definition of Done

- [ ] Ảnh trong khối bi gầm đúng VF3 + đúng hạng mục (CX Media — đang là ảnh minh họa có ghi rõ)
- [x] Case/video có nguồn, đúng SKU/version (2 video GTR G1 Turbo V2 trên VF3)
- [x] Không dùng bảo hành như evidence fitment
- [x] Từng SKU có trạng thái xác minh hiển thị trong modal lọc (lưới chính bỏ nhãn theo yêu cầu; F10 Turbo V2 chờ hồ sơ để nâng mức)
- [ ] Claim local khớp Master Data (CX Operations)
- [ ] Reviewer có hồ sơ duyệt VF3 (CX)
- [ ] Giá, VAT, công, pát, phụ kiện xác nhận với Commercial/SSOT
- [x] FAQ pháp lý không có kết luận tuyệt đối
- [x] Video/card/modal mở đúng (preview)
- [ ] Canonical, indexability, CWV trên production
- [ ] Form/CTA/CRM tracking test end-to-end
- [ ] U3 A/B/C đồng bộ sau khi đóng CX
- [ ] Chấm lại tổng, SEO, GEO sau QA live

## U3

- 01: `index.html` (09/10/2026)
- 02: `02_Huong_dan_CMS_SEO_Bi_Gam_VinFast_VF3_V1.8.md`
- 03: `03_Phieu_danh_gia_Bi_Gam_VinFast_VF3_V1.8.md` (file này)
- Test: `tests/verify-v18-integrity.js` — đã thêm kiểm tra nhãn xác minh, video, FAQPage và các claim bị cấm trực tiếp trong HTML.
