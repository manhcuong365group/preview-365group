# Dữ liệu landing Bi gầm VinFast VF3

`vf3.json` là dữ liệu chuẩn của trang https://v2.auto365.vn/tin-tuc/cam-nang-anh-sang-o-to/bi-gam/vinfast/vf3 — dùng để dựng giao diện mới, **không tự bịa thêm** sản phẩm, giá, FAQ.

Nguồn: `landing-sources/master-bi-gam-vinfast-vf3/_nguon/gen.py` (repo auto365.vn). Tạo lại:

```
python landing-sources/master-bi-gam-vinfast-vf3/_nguon/xuat-json.py <đường-dẫn>/vf3.json --db
```

| Trường | Nội dung |
|---|---|
| `trang` | URL, xe, hạng mục, đoạn "Trả lời nhanh" |
| `nhu_cau` | 4 nhu cầu dùng cho bộ lọc (`ma`: pho / mua / manh / tiet-kiem) |
| `san_pham` | 9 mẫu bi gầm theo thứ tự ưu tiên: tên, slug, URL, `gia` (VNĐ, chưa VAT), ảnh, nhãn, `nhu_cau` hợp với mẫu, `muc_gia` (duoi5 / tren5 triệu). `db` = đối chiếu bảng `stg_products` staging; `lech` rỗng = khớp |
| `gia` | Khối "Giá và phạm vi chi phí" |
| `can_kiem_tra_xe` | Trường hợp cần kiểm tra xe trước khi chốt |
| `video` | 2 video đã xác minh (YouTube ID) |
| `bai_viet` | 8 bài, `tab` = kn / xe / ss, `nen_doc` = gắn sao |
| `faq` | 11 câu hỏi – đáp |
| `lien_quan`, `the` | Dịch vụ liên quan cho VF3, thẻ chủ đề |
| `bao_hanh`, `chi_nhanh`, `nguoi_duyet` | Khối tin cậy (E-E-A-T). `bao_hanh.*` có chứa HTML link |

Ảnh và link đều là URL tuyệt đối về auto365.vn. Bản HTML gốc để tham khảo bố cục: `../index.html`.
