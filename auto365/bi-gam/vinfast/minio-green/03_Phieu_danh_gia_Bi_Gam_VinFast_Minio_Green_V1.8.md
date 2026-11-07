# Phiếu đánh giá V1.9 — Bi gầm VinFast Minio Green (tự chấm 07/11/2026)

| Mục | Giá trị |
|---|---|
| Preview | https://preview-365group.pages.dev/bi-gam/vinfast/minio-green/ |
| SHA-256 index.html | `1584afbe5b9f46d0580efb8fd302fd204fb461bff7391ad8bbc94f515ed0d0a6` |
| Người chấm | Tự chấm (team nội dung) — chưa phải điểm reviewer |
| Kiểm tra | Bản local cùng SHA trên localhost; preview live có thể khác cho đến khi push |

## Điểm 12 tiêu chí

| Mã | Tối đa | Điểm | Căn cứ |
|---|---:|---:|---|
| C1 Dữ kiện chính xác | 10 | 9,0 | 9 mẫu có kỹ thuật xác nhận 07/11; giá/thông số lấy từ trang sản phẩm; chưa có case Minio Green |
| C2 Đủ để quyết định | 10 | 9,0 | Nhu cầu, bảng so sánh, giá tách VAT/công, bước kiểm xe, phương án chưa cần lắp |
| C3 Tự nhiên, hữu ích | 10 | 9,0 | Giọng trung tính; một số khối CTA lặp |
| **Content** | **30** | **27,0** | |
| S1 Intent/URL/phân vai | 10 | 9,0 | MODEL_GUIDE rõ; hub production chưa link |
| S2 On-page | 10 | 8,0 | Title/meta/H1/ALT đủ; **toàn bộ ảnh là minh họa AI** |
| S3 Liên kết/triển khai | 10 | 8,5 | Schema parse OK, thẻ xe khác đủ; production chưa có, link ngang còn tương đối |
| **SEO** | **30** | **25,5** | Dưới ngưỡng 28,5 |
| G1 Trả lời rõ | 10 | 9,5 | Quick Answer đầu trang, FAQ trực tiếp |
| G2 Lập luận/giới hạn | 10 | 9,0 | Phân biệt W công bố với vùng sáng thực tế; Cos/Pha ghi rõ không phải phép đo |
| G3 Nguồn/người xác nhận | 5 | 4,5 | Có người + ngày + bảng xác nhận; chưa có case/nguồn ảnh thật |
| **GEO** | **25** | **23,0** | Dưới ngưỡng 23,75 |
| U1 Hiển thị | 5 | 4,5 | Đạt 360/375/390/768/1440; ảnh AI |
| U2 CTA/lead | 5 | 4,0 | Logic form đúng (mock); chưa test backend/CRM thật |
| U3 Hồ sơ | 5 | 4,0 | 02/03/04 + bảng xác nhận đồng bộ SHA/ngày; chưa có chữ ký chủ quản |
| **Tổng** | **100** | **88,0** | **CHƯA ĐẠT** (ngưỡng ≥95, SEO ≥28,5, GEO ≥23,75) |

## Lỗi mở

| ID | Mức | Nội dung | Chủ trì |
|---|---|---|---|
| MG-01 | P0 trước production | 7 ảnh là minh họa AI — phải thay ảnh chụp thực tế (hero, hốc, đang lắp, sau lắp, bàn giao) | Media |
| MG-02 | P1 | Chưa có case/hồ sơ lắp bi gầm Minio Green | Kỹ thuật/Media |
| MG-03 | P1 | Hub VinFast production chưa có thẻ Minio Green | SEO/IT |
| MG-04 | P1 | Chưa test /api/leads → CRM thật (chỉ mock) | IT/CRM |
| MG-05 | P2 | `product_url` modal báo giá là đường dẫn tương đối → trên pages.dev trỏ sai domain | IT |
| MG-06 | Release | Gỡ khối nội bộ, OG sang CDN, robots index, map link ngang sang production | IT |

## Ghi chú

- Không dùng câu "phù hợp mọi đời" — anh Đạo chỉ xác nhận danh sách 9 mẫu.
- Case trong slider là xe VinFast khác (tiêu đề "Một số xe VinFast khác…"), không gắn Minio Green.
