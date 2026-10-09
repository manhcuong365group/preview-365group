# Bi gầm X-Light — Phiếu đánh giá SEO/GEO V1.8

| Trường | Giá trị |
|---|---|
| Chuẩn | Auto365 Quy chuẩn SEO/GEO HTML V1.8 (06/10/2026). Cấu trúc điểm giữ nguyên V1.7; thêm mã hướng dẫn N1–N5 |
| Bản chấm | Preview `auto365/bi-gam-x-light/index.html` — SHA-256 và commit ghi trong [01-noi-dung-ban-duyet.md](01-noi-dung-ban-duyet.md) |
| Môi trường | **Preview/staging** (`preview-365group.pages.dev`, `noindex`). Bản CMS v2 (`v2.auto365.vn`) cần nhận lại mã nguồn này — xem mục "Ghi chú release cho CMS v2" trong [huong-dan-trien-khai.md](huong-dan-trien-khai.md) |
| Ngày chấm | 06/10/2026 · chấm lại 08/10/2026 theo toàn văn V1.8 (mục 7.1, 8.1, 9.3, 9.4, 11.3) |
| Loại chấm | Tự chấm, đề xuất cho người duyệt — **không phải phiếu nghiệm thu** |
| Người kiểm duyệt kỹ thuật | Nguyễn Quang Đạo — duyệt lại bản này ngày 08/10/2026 · Biên soạn: Team Content Auto365 · Phiếu duyệt: [04](04_Phieu_duyet_Bi_gam_X_Light_V1.8.md) |

## 1. Điểm theo tiêu chí

| Mã | Tiêu chí | Điểm xác nhận | Căn cứ (mã N) | CX / phần còn mở |
|---|---|---:|---|---|
| C1 | Chính xác và nhất quán | 9,5/10 | Giá/cặp/VAT, W/đèn theo trang sản phẩm; bảo hành 13/15 mẫu theo PDP; nội dung sửa 07–08/10 đã được kiểm duyệt kỹ thuật 08/10/2026 (N1) | — |
| C2 | Đầy đủ theo vai trò | 9,5/10 | Catalogue + bộ lọc (hệ điện, lens, nhiệt màu, giá/cặp, tản nhiệt), so sánh 3 mẫu, 30 case có nơi lắp, video case VF6, 4 bài cẩm nang, 7 FAQ gồm câu chọn mẫu theo nhu cầu và câu giá/VAT/công lắp (N2) | — |
| C3 | Tự nhiên và hữu ích | 9,5/10 | Sapo trả lời thẳng kèm giá và bước kiểm xe; tiêu đề thẻ khớp thân thẻ (N3) | — |
| **C** | | **28,5/30** | | |
| S1 | Nhu cầu tìm kiếm và vai trò URL | 9,5/10 | Hub thương hiệu X-Light; phân vai hub tổng/PDP/case (N5) | — |
| S2 | Nội dung SEO trên trang | 9,5/10 | Title/H1/meta; credit thống nhất; Brand X-Light nối vào TechArticle bằng `mentions`; 3/3 bảng có `th scope` (N4) | Graph @id bản CMS v2 do CMS chốt |
| S3 | Liên kết và hồ sơ triển khai | 9,5/10 | Link trong trang trỏ URL cuối (9 link 301 đã sửa); canonical, Schema, đoạn link về hub soạn sẵn, hướng dẫn CMS và ghi chú release v2 (N5) | Link vào từ hub tổng/PDP/case và URL production 200 thuộc giai đoạn sau xuất bản (§13.1 bước 7, §13.3) — kiểm ở L2/L7, không tính vào điểm nội dung |
| **S** | | **28,5/30** | | Đạt ngưỡng 28,5 (vừa đủ) |
| G1 | Câu trả lời rõ, đủ ngữ cảnh | 9,5/10 | Giá/đơn vị/VAT/điện áp/cơ chế màu đứng cạnh nhau | — |
| G2 | Lập luận phục vụ nhu cầu | 9,5/10 | FAQ "Nên chọn mẫu theo nhu cầu" nêu mẫu + lý do cho đi phố/đi tỉnh/hốc nhỏ/24V/nhiệt màu, W có giới hạn, Kelvin không quyết định độ sáng; Nhu cầu "mưa, sương mù" không còn lọc theo 3000K (mục 7.1); W có giới hạn; "đã lắp" tách "hồ sơ liên quan" | — |
| G3 | Nguồn và truy nguyên | 5/5 | PDP, case, chính sách bảo hành; 2 xe Honda đã xác nhận F10 New 2025 (08/10/2026); căn cứ "chính hãng": 365Group phân phối X-Light (N1, N3) | — |
| **G** | | **24/25** | | |
| U1 | Cấu trúc dễ đọc | 4,5/5 | Luồng sản phẩm → case → lý do chọn → chi nhánh → hiểu nhanh (accordion 5 mục) → video + form → cẩm nang → FAQ; 360/390/414/1440px không tràn ngang, khối thẻ vuốt ngang có chủ đích, không lỗi JS | Popup kết quả lọc nhanh trên mobile mở sẵn ở vị trí cuộn ngang, cột giới thiệu bị cắt (lỗi có từ trước, chưa sửa) |
| U2 | Hành động tiếp theo | 5/5 | Catalogue + lọc, form, UTM snapshot, request_id; API → CRM → GA4 cho lead test đã được người phụ trách xác nhận thành công 08/10/2026 | Xoá lead test 60/87/111 khỏi CRM |
| U3 | Bộ bàn giao nhất quán | 5/5 | 01 + 02 + 03 + 04 cùng hash/commit preview; 01 liệt kê đúng 10 khối hiện có; 02 đúng 6 ảnh, FAQ 7, credit 08/10; 04 ghi người và ngày cho mọi xác nhận; khối kiểm tra nội bộ cuối trang dẫn tới cả 4 tài liệu | Bản CMS v2 kiểm ở L1 |
| **U** | | **14,5/15** | | |
| **Tổng** | | **95,5/100** | | C 28,5 · S 28,5 · G 24 · U 14,5 |

## 2. Kết luận theo V1.8 (§11.3, §13.3)

**ĐẠT NỘI DUNG V1.8.** Tổng 95,5/100; SEO 28,5/30 (9,50/10, đúng ngưỡng 28,5); GEO 24/25 (9,60/10). Không lỗi chặn nội dung, U3 đồng bộ, không còn CX trọng yếu: kiểm duyệt kỹ thuật 08/10/2026, case Honda, CRM/GA4 và căn cứ chính hãng đã xác nhận (xem [04](04_Phieu_duyet_Bi_gam_X_Light_V1.8.md)).

Kết luận nội dung không phải nghiệm thu live (§13.3). Mức sẵn sàng triển khai: sẵn sàng đăng, với điều kiện xoá khối `#xl-internal-check`, CMS điền `datePublished`, rồi nghiệm thu L1–L8 (link về hub, URL 200, bản CMS v2 khớp bản duyệt).

### Đã sửa ngày 08/10/2026 (gồm góp ý chủ quản cùng ngày)

| Mục | Căn cứ V1.8 | Đã sửa |
|---|---|---|
| Nguồn công suất | §6.1 | Bỏ "hãng công bố" ở popup so sánh, bảng Hiểu nhanh và tiêu chí Đi tỉnh; ghi "theo trang sản phẩm Auto365, tính mỗi đèn" |
| FAQ lens / Kelvin, thẻ mưa sương, chú thích bảng | §7.1 | Sửa cả phần hiển thị và FAQ schema |
| Nhu cầu "mưa, sương mù" | §7.1 | Không còn lọc theo nhiệt màu 3000K; câu tư vấn chuyển sang vùng phủ, vị trí lắp, căn Cos trên xe |
| Thẻ chi nhánh (nay "90+ chi nhánh") | §8.1 | Bỏ "bảo hành thuận tiện tại địa phương"; giữ theo thẻ bảo hành: gửi tại chi nhánh nơi mua, điểm khác do Auto365 xác nhận |
| Thẻ căn chỉnh | §7.1 | Bỏ "bảng test chuyên dụng… đúng cao độ" (chưa có biên bản); ghi quy trình căn lại sau lắp, khách kiểm tra trước khi nhận xe |
| "Chính hãng" / "phân phối chính thức" | §8.1 | Đổi thành "Bảo hành điện tử theo từng mẫu" và "nơi bán có nguồn gốc rõ ràng" cho tới khi có hồ sơ ủy quyền |
| Link 301 | §9.3 | 9 chỗ `bi-gam-xligh-f10-hyper-2` → `bi-gam-x-light-f10-hyper-20` |
| Thực thể | §10.1 | TechArticle `mentions` Brand X-Light |
| Ngày | §9.4 | `dateModified` 2026-10-08; `lastReviewed` giữ 2026-10-06; dòng hiển thị tách ngày duyệt và ngày cập nhật nội dung |
| ID trùng | — | Script đổi thành `xlight-real-case-like-bigm-v5-js` |
| So sánh | — | Chọn mẫu thứ 2 không tự bật popup |
| Hồ sơ triển khai | U3 | Bỏ "chạy được ngay"; 4 điều kiện nghiệm thu; `request_id` thay `lead_id` trong danh sách trường |
| Bố cục theo góp ý chủ quản | — | Bỏ khối "Chọn theo nhu cầu", "Chi phí", "Bài viết & nội dung liên quan", dải số liệu hero, nhãn đỏ trên ảnh; bộ lọc thêm giá/cặp và tản nhiệt (bỏ các nhóm Pha, tính năng, nhân LED); thêm khối video VF6 + form và khối Cẩm nang 4 bài; ảnh 6 lý do thay ảnh minh họa; "90+ chi nhánh"; FAQ 11 → 7 câu (hiển thị + schema) |

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
| BLOCK_08 Schema sai so với hiển thị | Không — FAQ 7 câu khớp; credit khớp |

## 4. Phạm vi điểm và việc còn lại sau khi đạt

Điểm 95,5/100 ở trên là của **bản preview** (hash ghi ở 01). Không áp cho bản v2/CMS: tái kiểm v2 ngày 08/10/2026 chấm 86/100 do v2 lệch dữ liệu (giá F10 Turbo, công suất 2 mẫu, `data-cooling`, Product.brand, author/ngày, 8 link case) — danh sách sửa ở mục 9 của [02](huong-dan-trien-khai.md). Sau khi CMS sửa phải chấm lại bản v2 có hash/release mới.

Việc phát hành (không thuộc điểm nội dung preview):

1. CMS sửa 8 mục ở 02 §9, rồi QA lại trên v2.
2. Người duyệt chốt 3 dữ kiện trang sản phẩm mới đổi (02 §9): bảo hành và nhiệt màu F10 New đời trước, tản nhiệt F10 Hyper 2.0; cập nhật hub theo kết quả.
3. Đăng URL production; xoá khối `#xl-internal-check`; CMS điền `datePublished`.
4. Gắn link về hub theo `doan-link-ve-hub.md`; nghiệm thu Live L1–L8.
5. Xoá lead test 60/87/111 khỏi CRM.
