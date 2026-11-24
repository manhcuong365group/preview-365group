# 03 — Phiếu tự kiểm hub Bi gầm Land Rover (đối chiếu V2.3)

| Mục | Giá trị |
|---|---|
| Ngày tự kiểm | 24/11/2026 (lần 1, bản dựng mới) |
| Chuẩn | Auto365 V2.3 (14/11/2026): Tổng ≥95 · SEO ≥28,50/30 · GEO ≥23,75/25 |
| Trang | https://preview-365group.pages.dev/bi-gam/land-rover/ — 11 dòng xe; 1 case (LR2 S 2010 – X-Light F10 Turbo V2 4300K, lens 3.0 inch) + 1 bài tư vấn (LR2 S) |
| Lưu ý | Điểm team tự chấm, chưa phải điểm nghiệm thu độc lập |

## Điểm tự chấm
| Nhóm | Điểm | Căn cứ |
|---|---|---|
| C — Nội dung /30 | 27,7 | Dữ kiện case khớp bài nguồn (SKU, lens); có "khi nào chưa cần lắp", không áp một cấu hình cho mọi xe. Trừ: case chưa có cơ sở/ngày thi công; thẻ dòng xe chưa có ảnh |
| S — SEO /30 | 28,6 | 1 H1, canonical dự kiến, schema CollectionPage/Breadcrumb/ItemList/FAQ parse được; HTML không lồng sai, style ở head; combobox chi nhánh có aria-activedescendant |
| G — GEO /25 | 22,6 | Trả lời rõ điều kiện lắp, chi phí, bảo hành; nêu giới hạn (lens không quyết định lắp vừa). Trừ: chưa có người kiểm duyệt kỹ thuật (lastReviewed), hồ sơ ca thiếu cơ sở/thời điểm |
| U — Trải nghiệm /15 | 13,0 | Lọc/tìm/rỗng/reset, thẻ → form, form chặn số sai và mock lỗi/thành công đạt (phiếu 06). Trừ: ảnh dòng xe hiện chữ; chưa test điện thoại thật |
| **Tổng** | **≈91,9/100** | **Chưa đạt** (GEO 22,6 < 23,75; tổng < 95) |

## Việc còn mở để đạt
| Việc | Phụ trách | Ảnh hưởng |
|---|---|---|
| Kiểm duyệt kỹ thuật (danh sách dòng xe, mẫu đèn, lens) → thêm lastReviewed | Anh Nguyễn Quang Đạo | G1/G3 ≈ +1,5 |
| Ảnh thẻ dòng xe | Designer | U1/C3 ≈ +1 |
| Cơ sở + ngày thi công từng ca | Chủ quản | C1/G3 ≈ +0,5 |
| Test điện thoại thật; production (CRM, generate_lead) | Chủ quản / IT | U2 |

Ước tính sau khi đóng 3 việc đầu: ≈95,5–96,5.

## Chấm lại 24/11/2026 — sau khi anh Đạo duyệt
| Nhóm | Điểm |
|---|---|
| C /30 | 27,7 |
| S /30 | 28,6 |
| G /25 | 23,9 (+1,3: có kiểm duyệt kỹ thuật, lastReviewed 2026-11-24) |
| U /15 | 13,0 |
| **Tổng** | **≈93,2/100** — qua ngưỡng SEO và GEO (23,9 ≥ 23,75), tổng còn dưới 95 |

Còn mở: ảnh thẻ dòng xe (designer, ≈ +1); cơ sở + ngày thi công từng ca (chủ quản, ≈ +0,5); test điện thoại thật.
