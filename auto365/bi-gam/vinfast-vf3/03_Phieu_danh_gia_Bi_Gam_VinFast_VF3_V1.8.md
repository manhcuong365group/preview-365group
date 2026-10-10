# Phiếu Đánh Giá — Bi Gầm VinFast VF3 V1.8

## 1. Thông tin đầu vào (§20.1)

| Trường | Nội dung |
| --- | --- |
| Tiêu chuẩn | Auto365 SEO/GEO/HTML V1.8 (hiệu lực 06/10/2026) |
| Tên trang / URL | Bi gầm VinFast VF3 — canonical khai báo `https://v2.auto365.vn/tin-tuc/cam-nang-anh-sang-o-to/bi-gam/vinfast/vf3` (CX domain, xem S3) |
| Loại trang / Intent | Tư vấn theo xe / lựa chọn — "bi gầm VinFast VF3": lắp được không, chọn mẫu nào, giá gồm gì, khi nào cần kiểm tra xe |
| Môi trường / Phiên bản | Preview `https://preview-365group.pages.dev/bi-gam/vinfast-vf3/`; bản nguồn `index.html` 10/10/2026 |
| Ngày kiểm / Múi giờ | 10/10/2026, Asia/Saigon |
| Người biên tập / Reviewer | Team Content Auto365 / Nguyễn Quang Đạo — **đã duyệt 10/10/2026** (chủ quản xác nhận) |
| Xác nhận thương mại | **CX** — giá đối chiếu `stg_products` 06/10/2026, chưa có xác nhận hiệu lực của Commercial |
| Nguồn đã đọc | 9 trang sản phẩm auto365.vn (thông số, đọc 10/10/2026); `data/vf3.json` (sản phẩm, giá, FAQ, bảo hành, video); 2 video VF3 trên auto365.vn; trạng thái HTTP các link cẩm nang (09/10/2026); phiếu kiểm tra & fix 08/10/2026 |
| Phạm vi / Ngoại lệ | Sửa nội dung, alt, schema, hồ sơ; **giữ nguyên layout** theo yêu cầu 10/10/2026. Đề xuất thiết kế lại chưa thực hiện. |

## 2. Bảng điểm (§20.2)

| Mã | Tối đa | Điểm | Bằng chứng / vị trí | Cần sửa / điều kiện đóng |
| --- | ---: | --- | --- | --- |
| C1 | 10 | 9,0 + CX | 9 SKU khớp staging; giá ghi "/bộ đèn", chưa VAT, công/pát/căn chỉnh báo riêng; ảnh AI có alt "Ảnh minh họa"; đã bỏ "an toàn", "sương mù", "trọn gói", "máy laser". | CX Commercial: hiệu lực giá. |
| C2 | 10 | 9,5 | Trả lời nhanh, 9 sản phẩm, **bảng so sánh 9 mẫu có nguồn PDP** + 4 ghi chú đánh đổi (§4.2), video VF3, giá, khi nào cần kiểm tra xe, 11 FAQ. | — |
| C3 | 10 | 9,0 | Văn khách đọc, không nhãn nội bộ, không claim tuyệt đối. | — |
| S1 | 10 | 9,0 | Intent bi gầm VF3; link hub `/nang-cap-anh-sang-bi-gam`; bài đèn chính không nằm trong khối bi gầm. | — |
| S2 | 10 | 9,5 | Title/H1/meta khớp nội dung; alt ảnh minh họa đúng; schema Article (about VF3, mentions 9 sản phẩm), CollectionPage, FAQPage khớp hiển thị. | — |
| S3 | 10 | 8,5 + CX | Đã gỡ 3 link 404; 02 CMS cập nhật @id, ngày, link, CTA. | CX SEO: chốt domain canonical (`v2.auto365.vn` vs `auto365.vn` trong `vf3.json`). |
| G1 | 10 | 9,0 | Trả lời nhanh trích riêng vẫn đúng chủ thể, phạm vi giá và điều kiện kiểm tra xe. | — |
| G2 | 10 | 9,0 | Đánh đổi lens 3.0/2.0, nhiệt màu cố định/ba mức, công suất công bố ≠ phép đo (§7.1); GTR có video VF3; mẫu khác ghi cần kiểm tra; nhãn nhu cầu ghi là gợi ý. | Fitment từng SKU trên VF3 vẫn chỉ có GTR. |
| G3 | 5 | 4,5 + CX | Video thi công VF3; 1 ảnh thật VF3 lắp bi gầm tại Auto365; thông số có nguồn PDP; ngày đối chiếu giá; link chính sách bảo hành; reviewer đã duyệt. | CX Kỹ thuật: hồ sơ fitment từng SKU (F10 Turbo V2 đang để CHECK_REQUIRED); mã đèn trên xe trong ảnh. |
| U1 | 5 | 4,5 | Video VF3 đưa lên ngay sau Tổng quan, nền tối làm điểm nhấn; sản phẩm 2 hàng + "Xem tất cả"; FAQ hiện 5 câu + "Xem thêm"; H2 28px desktop; không tràn ngang mobile. | Hero chưa có ảnh; khối Lý do chọn còn dài (đổi layout — chưa làm). |
| U2 | 5 | 4,75 | 3 khối CTA + form + gọi/Zalo đúng hotline đèn. | L7: test form/CRM trên production. |
| U3 | 5 | 4,75 | 01/02/03 cùng phiên bản 10/10/2026; test kiểm trực tiếp trong HTML (ngày, Article, nhãn, claim cấm). | Đóng hết sau khi các CX được cập nhật vào 02/03. |

**Điểm đã xác nhận:** C 27,5 · S 27,0 · G 22,5 · U 14,0 · **Tổng 91,0/100**.  
**Khoảng còn mở (§11.3):** CX C1 (tối đa +1), S3 (+1,5), G3 (+0,5) → tổng 91,0–94,0; S 27,0–28,5; **G 22,5–23,0**.

**Kết luận nội dung: CHƯA ĐẠT NỘI DUNG V1.8.** Kể cả khi đóng hết CX, G tối đa 23,0 < 23,75 và tổng tối đa 94,0 < 95. Phần còn kéo điểm: bằng chứng trên VF3 mới có cho 1/9 mẫu (G2/G3), chưa có ảnh case VF3 thật (G3), và U1 (hero chưa có ảnh).

## 3. N1–N5 (§20.3)

| Mã | Phạm vi | Kết quả | Bằng chứng | Cách xử lý |
| --- | --- | --- | --- | --- |
| N1 | Giá, bảo hành | Đáp ứng / CX | Giá thiết bị, VAT, đơn vị, ngày đối chiếu; bảo hành theo chính sách, tách khỏi fitment. | Commercial xác nhận hiệu lực giá. |
| N2 | Quyết định chọn bi gầm VF3 | Đáp ứng | Trả lời nhanh, bảng so sánh có nguồn + đánh đổi, khối kiểm tra xe, FAQ. | — |
| N3 | Case/video VF3 | Đáp ứng / CX | 2 video GTR G1 Turbo V2 trên VF3; case xe khác ghi tham khảo; ảnh AI có nhãn minh họa. | Media: ảnh case VF3 thật. |
| N4 | Thực thể | Đáp ứng | Publisher Auto365; about VinFast VF3; mentions 9 Product có brand GTR/X-Light/AES; reviewedBy Nguyễn Quang Đạo (Person @id dùng chung). | — |
| N5 | Vai trò URL | Đáp ứng / CX | Intent VF3 tách hub ngành. | Chốt domain canonical. |

## 4. Blockers

| Mã | Kết quả |
| --- | --- |
| BLOCK_01 | Không phát hiện trong phạm vi đã kiểm (ảnh sai hạng mục đã gỡ; ảnh AI có nhãn minh họa). |
| BLOCK_02 | Không phát hiện (đã bỏ "trọn gói"; giá thiết bị và chi phí khác tách rõ). |
| BLOCK_03 | Không phát hiện (reviewer Nguyễn Quang Đạo đã duyệt 10/10/2026; thông số lấy từ PDP, không tự đo). |
| BLOCK_04 | Không phát hiện (mẫu chưa có hồ sơ ghi cần kiểm tra xe; nhãn nhu cầu ghi là gợi ý). |
| BLOCK_05 | Không phát hiện (hotline 0365 365 911 khớp contactPoint đèn). |
| BLOCK_06 | Không phát hiện ghi chú nội bộ trên bản đăng. |
| BLOCK_07 | NA ở preview (noindex có chủ đích); kiểm khi lên production. |
| BLOCK_08 | Không phát hiện (không Review/Rating/Offer giả; FAQPage khớp hiển thị). |

## 5. Nhật ký Live (§20.4) — preview, chưa phải production

| Mã | Phạm vi / ngày | Trạng thái | Bằng chứng |
| --- | --- | --- | --- |
| L1 | Production | CX | Chưa đăng. |
| L2 | Preview HTTP 200, noindex staging | CX (production) | — |
| L3 | GSC | CX | Chưa có quyền / chưa đăng. |
| L4 | JSON-LD parse OK, @graph 7 node (10/10) | Pass (preview) | Person, Article, CollectionPage[9] + reviewedBy, FAQPage(11). |
| L5 | Desktop 1366px, mobile 375px (09/10) | Pass (preview, mô phỏng viewport) | Không tràn ngang; modal video mở YouTube. |
| L6 | Hiệu năng | CX | Chưa đo. |
| L7 | Form/CRM, tel, Zalo | CX | Chưa test gửi lead. |
| L8 | HTML trả về chứa text, giá, link `a href` | Pass (preview) | Đọc bằng cheerio. |

**Kết luận Live:** CÁC MỤC ĐÃ KIỂM TRA ĐẠT TRÊN PREVIEW; CÒN CX TẠI L1–L3, L6, L7 — chưa nghiệm thu production.

## 6. Đã sửa trong đợt này (09–10/10/2026)

- Video VF3 khôi phục; case xe VinFast khác ghi rõ tham khảo; 3 khối CTA; sản phẩm 2 hàng + "Xem tất cả".
- Mức xác minh trong modal lọc; đoạn giải thích dưới H2 sản phẩm.
- Bỏ claim: trọn gói, chuẩn hóa 90+ chi nhánh, máy laser/chống chói, nhiệt màu tối ưu, căn chỉnh lại trong bảo hành, an toàn, sương mù.
- Alt "Ảnh minh họa" cho 10 ảnh AI (4 khối giới thiệu, 6 khối Lý do chọn).
- Schema: Article (about/mentions/datePublished/dateModified 2026-10-09), ItemList 9, FAQPage 11.
- 10/10: thêm 1 ảnh thật VF3 lắp bi gầm tại Auto365 (dưới 2 video); OG/Twitter image đổi sang ảnh VF3 thật (trước là Toyota Hilux). Bản redesign theo đề xuất UI đã thử và **hoàn lại** theo yêu cầu.
- 10/10: video VF3 lên ngay sau Tổng quan (nền tối), FAQ 5 câu + "Xem thêm", H2 28px; số chi nhánh "90+ / 91" dùng số đã chốt ở các trang trước.
- 10/10: reviewer Nguyễn Quang Đạo duyệt — reviewedBy/lastReviewed/dateModified 2026-10-10, hero + "Cập nhật" 10/10/2026; bảng so sánh 9 mẫu (nguồn PDP) + ghi chú đánh đổi.
- "Cập nhật" cuối trang; 3 link cẩm nang 404 đã gỡ; sửa tràn ngang mobile.

## 7. Còn mở — người phụ trách

| Việc | Phụ trách |
| --- | --- |
| Hồ sơ fitment từng SKU (F10 Turbo V2 trước) | Kỹ thuật |
| Ảnh case VF3 thật thay ảnh minh họa | Media |
| Hiệu lực giá, đơn vị, VAT | Commercial |
| Domain canonical production | SEO |
| L1–L3, L6, L7 sau khi đăng | IT/CMS |
| Thiết kế lại để cải thiện U1 (chưa làm — giữ layout) | Chủ quản quyết định |

## U3

- 01: `index.html` (10/10/2026)
- 02: `02_Huong_dan_CMS_SEO_Bi_Gam_VinFast_VF3_V1.8.md` (10/10/2026)
- 03: file này (10/10/2026)
- Test: `tests/verify-v18-integrity.js`
