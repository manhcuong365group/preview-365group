# 05 — Gói sửa CMS v2 hub Nâng cấp ánh sáng (theo tái kiểm 19/10/2026)

Ngày lập: 19/10/2026. Nguồn: DOM/JSON-LD của https://v2.auto365.vn/nang-cap-anh-sang (dateModified 2026-10-17T20:45:48+07:00, 125 thẻ, ItemList 123) và script trang `/page-asset/5585.js`. Bản preview (bản nguồn đã sửa đủ) để đối chiếu: https://preview-365group.pages.dev/nang-cap-anh-sang/.

Mỗi mục ghi: vị trí trên v2 → sửa cụ thể → cách kiểm đóng. Bảng dữ liệu chi tiết theo từng thẻ: `06_Doi_chieu_CMS_v2_voi_Master.csv`.

## AS19-01 — Finder → danh mục ra 0/0 (P1)

**Vị trí:** `/page-asset/5585.js`, handler `#recoAll`. Hiện tại handler chỉ đặt nhóm/giá/điện, không xoá ô `#q` và các bộ lọc `.pf-brand`, `.pf-lens`, `.pf-color`.

**Sửa:** thay dòng handler bằng:

```js
$('#recoAll').addEventListener('click', function(){
  closeDlg($('#recoDlg'));
  $('#q').value = '';
  $$('.pf-brand, .pf-lens, .pf-color, input[name=cat], input[name=volt]').forEach(function(i){ i.checked = false; });
  setCats(window.__recoCats || []);
  setPrice(window.__recoPrice || '');
  var v = $('#f-volt').value;
  $$('input[name=volt]').forEach(function(i){ i.checked = !!v && i.value === v; });
  reset();      // reset() phải đọc lại filter và đặt lại giới hạn hiển thị
  goCatalog();
});
```

**Kiểm đóng:** nhập "F+ Pro 5500" + chọn X-Light + 5500K → finder Đi phố / Bi LED / 6–10 triệu / 12V → "Xem tất cả" phải ra đúng tập khớp của bản v2 (hiện 6 mẫu), ô tìm rỗng. Thử thêm từ trạng thái sạch và một tổ hợp không có mẫu.

## AS19-02 — Bi LED Titan Black 2026: thương hiệu và nhiệt màu (P1)

**Vị trí:** dữ liệu sản phẩm (product_meta) của `/bi-led-titan-black-2026` → thẻ `article.product-card` (`data-brand`, `data-color`) và bảng so sánh.

**Sửa:**
- Thương hiệu: **X-Light** (chủ quản chốt 14/10/2026; PDP ghi X-Light). Giữ tên "Titan Black 2026".
- `data-color`: **"5200K,3000K"** (Cos 5200K, tâm Pha 3000K).
- Bảng so sánh: hàng Nhiệt màu hiển thị **"5200K / tâm Pha 3000K"** — lấy từ trường mô tả đầy đủ, không ghép từ `data-color`.

**Kiểm đóng:** thẻ, bộ lọc thương hiệu, bộ lọc 5200K và 3000K, modal so sánh, PDP đều khớp.

## AS19-03 — Chỉ mục nhiệt màu thiếu (P1)

**Vị trí:** sidebar nhiệt màu (`.pf-color`) và `data-color` của từng thẻ.

**Sửa:**
1. Sinh danh sách lựa chọn nhiệt màu từ dữ liệu thực; hiện thiếu **4500K, 5200K, 5800K, 6500K**. Đặt nhãn nhóm "Nhiệt màu (Cos hoặc tâm Pha)".
2. Bổ sung `data-color` cho **26 thẻ** có nhiệt màu trong nội dung/nguồn nhưng thiếu chỉ mục:

| URL | Tên | data-color hiện tại | Cần thêm |
| --- | --- | --- | --- |
| `/bi-led-titan-black-2026` | Bi LED Titan Black 2026 | 3000K | 5200K |
| `/bi-laser-henvvei-l92-pro-new-2024` | Bi Laser Henvvei L92 Pro (New 2024) | (rỗng) | 5200K |
| `/bi-gam-led-gtr-g1-pro` | BI GẦM LED GTR G1 PRO | (rỗng) | 3000K, 5500K |
| `/bi-gam-gtr-special-edition-150-plus` | BI GẦM GTR SPECIAL EDITION 150 PLUS | (rỗng) | 3000K |
| `/bong-led-x-light-v12-hyper-360` | Bóng LED X-Light V12 Hyper 360 | (rỗng) | 5800K |
| `/bong-led-naoevo-s9-pro-chan-9005` | Bóng LED X-Light S9 Pro chân 9005 | (rỗng) | 5800K |
| `/bong-led-naoevo-s9-pro-chan-h11` | Bóng LED X-Light S9 Pro chân H11 | (rỗng) | 5800K |
| `/bong-led-naoevo-s9-pro-chan-h7` | Bóng LED X-Light S9 Pro chân H7 | (rỗng) | 5800K |
| `/bong-led-naoevo-s9-pro-chan-h4` | Bóng LED X-Light S9 Pro chân H4 | (rỗng) | 5800K |
| `/bong-led-naoevo-s8-pro-chan-9005` | Bóng LED X-Light S8 Pro chân 9005 | (rỗng) | 5800K |
| `/bong-led-naoevo-s8-pro-chan-h11` | Bóng LED X-Light S8 Pro chân H11 | (rỗng) | 5800K |
| `/bong-led-naoevo-s8-pro-chan-h7` | Bóng LED X-Light S8 Pro chân H7 | (rỗng) | 5800K |
| `/bong-led-naoevo-s8-pro-chan-h4` | Bóng LED X-Light S8 Pro chân H4 | (rỗng) | 5800K |
| `/bong-led-naoevo-s6-pro-chan-9005` | Bóng LED X-Light S6 Pro chân 9005 | (rỗng) | 5800K |
| `/bong-led-naoevo-s6-pro-chan-h11` | Bóng LED X-Light S6 Pro chân H11 | (rỗng) | 5800K |
| `/bong-led-naoevo-s6-pro-chan-h7` | Bóng LED X-Light S6 Pro chân H7 | (rỗng) | 5800K |
| `/bong-led-naoevo-s6-pro-chan-h4` | Bóng LED X-Light S6 Pro chân H4 | (rỗng) | 5800K |
| `/bong-led-naoevo-s3-pro-chan-9005` | Bóng LED X-Light S3 Pro chân 9005 | (rỗng) | 5800K |
| `/bong-led-naoevo-s9-pro-chan-h1` | Bóng LED X-Light S9 Pro chân H1 | (rỗng) | 5800K |
| `/bong-led-naoevo-s8-pro-chan-h1` | Bóng LED X-Light S8 Pro chân H1 | (rỗng) | 5800K |
| `/bong-led-naoevo-s3-pro-chan-h11` | Bóng LED X-Light S3 Pro chân H11 | (rỗng) | 5800K |
| `/bong-led-naoevo-s3-pro-chan-h7` | Bóng LED X-Light S3 Pro chân H7 | (rỗng) | 5800K |
| `/bong-led-naoevo-s3-pro-chan-h4` | Bóng LED X-Light S3 Pro chân H4 | (rỗng) | 5800K |
| `/bong-led-naoevo-s3-pro-chan-h1` | Bóng LED X-Light S3 Pro chân H1 | (rỗng) | 5800K |
| `/bong-led-naoevo-s6-pro-chan-h1` | Bóng LED X-Light S6 Pro chân H1 | (rỗng) | 5800K |
| `/x-light-f30-ultra` | Đèn gầm dạng rời X-Light F30 Ultra | 5500K,3000K | 6500K |

**Kiểm đóng:** lọc 5200K / 5800K / 6500K ra đúng các mẫu trên; không còn thẻ có nhiệt màu nguồn mà thiếu chỉ mục (cột "Thiếu trong data-color" của 06 rỗng).

## AS19-04 — ItemList 123 / 125 thẻ (P2)

**Vị trí:** JSON-LD CollectionPage.mainEntity.

**Sửa:** sinh ItemList từ đúng tập thẻ hiển thị. Hiện thiếu 2 URL:
- `/bong-led-naoevo-s6-pro-chan-h1` — Bóng LED X-Light S6 Pro chân H1
- `/bong-led-s8-pro-4300k` — Bóng LED X-Light S8 Pro - nhiệt màu 4300K

`numberOfItems` = số phần tử thực (125, hoặc 129 nếu khôi phục 4 mẫu ở mục AS19-07).

## AS19-05 — Điểm neo (P2)

- Nút hero "Xem xe thực tế đã lắp": `href="#cases"` → **`href="#vehicle-cases"`** (id thực của khu case). Kiểm tiêu đề khu case không bị header cố định che (`scroll-margin-top`).
- Có **2 phần tử `id="cam-nang"`** (wrapper + section). Giữ một, đổi phần còn lại (vd `cam-nang-inner`).

## AS19-06 — Nhãn VAT khó đọc (P2)

**Vị trí:** `.product-vat` (hiện 10px, #999).

**Sửa:** `.product-vat{font-size:12.5px;color:#5f6368}` (preview đang dùng 12.5px). Kiểm desktop/mobile.

## AS19-07 — Hồ sơ cùng bản v2 (U3)

- Tập sản phẩm: v2 có **125** thẻ, preview/04 có **129**. Thiếu trên v2 (4):
  - `/bi-led-aes-f002-plus` — Bi LED AES F-002 Plus (Bi LED)
  - `/bi-led-aes-turbo-bm` — Bi LED AES Turbo BM (Bi LED)
  - `/bi-led-mini-titan-moto-f15-v2` — Bi LED Mini Titan Moto F-15 V2 (Bi LED Mini)
  - `/bi-gam-x-light-f10-hyper-20` — Bi gầm X-Light F10 Hyper 2.0 (Bi gầm)
- Không có thẻ nào chỉ có trên v2.
- Lệch thương hiệu so với 04: Bi LED Titan Black 2026 (v2: Titan, 04: X-Light).
- Lệch giá so với 04: không.
- **Quyết định cần chủ quản chốt:** khôi phục 4 mẫu cho bằng preview (129), hoặc ghi lý do bỏ và dùng 06 làm Master cho bản v2.
- Bảng đối chiếu từng thẻ: `06_Doi_chieu_CMS_v2_voi_Master.csv` (125 dòng v2 + 4 dòng thiếu).

## Cách nhanh nhất

Dựng lại hub v2 từ HTML preview mới nhất (đã sửa đủ AS19-01…06, 129 mẫu, ItemList 129, VAT 12.5px). Nếu sửa tay theo các mục trên, sau khi xong: cập nhật `dateModified` = ngày phát hành, giữ `lastReviewed` 2026-10-12, rồi gửi reviewer chấm lại trên v2.
