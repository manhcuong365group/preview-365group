# Vietnamese Provinces Database (post-merger 2025)

Dataset dùng để chuẩn hoá NAP + validate địa chỉ + build legacy mapping cho các trang chi nhánh Auto365.

## Nguồn

- **Repo:** [thanglequoc/vietnamese-provinces-database](https://github.com/thanglequoc/vietnamese-provinces-database)
- **License:** MIT (dùng thương mại free)
- **Version tại thời điểm fetch:** v3.1.0 (Nghị quyết 30/2026/QH16 — bản hợp nhất mới nhất sau sáp nhập tỉnh)
- **Fetched:** 15/07/2026

## Files

| File | Size | Nội dung |
|------|:---:|----------|
| `full.json` | 1.5 MB | 34 tỉnh × ~100 fields mỗi ward + English translations |
| `simplified.min.json` | 547 KB | Rút gọn field, giữ VN + En |
| `vn-only.min.json` | 226 KB | Chỉ VN (dùng cho production preview để giảm bundle) |

**KHÔNG tải:** `vn_provinces_wards_geojson_2026-07-12__19_50_51.zip` (50 MB — polygon boundaries, chỉ tải khi cần map overlay).

## Cấu trúc province

```json
{
  "Type": "province",
  "Code": "24",
  "Name": "Bắc Ninh",
  "NameEn": "Bac Ninh",
  "FullName": "Tỉnh Bắc Ninh",
  "FullNameEn": "Bac Ninh Province",
  "CodeName": "bac_ninh",
  "AdministrativeUnitId": 4,
  "AdministrativeUnitShortName": "Tỉnh",
  "AdministrativeUnitFullName": "Tỉnh",
  "Wards": [ ... ]
}
```

## Cấu trúc ward

```json
{
  "Type": "ward",
  "Code": "00004",
  "Name": "Ba Đình",
  "NameEn": "Ba Dinh",
  "FullName": "Phường Ba Đình",
  "FullNameEn": "Ba Dinh Ward",
  "CodeName": "ba_dinh"
}
```

## 34 tỉnh sau sáp nhập (Tổng 3.321 wards)

| # | Tỉnh | Code | Wards |
|:---:|------|:---:|:---:|
| 1 | Hà Nội | 01 | 126 |
| 2 | Cao Bằng | 04 | 56 |
| 3 | Tuyên Quang | 08 | 124 |
| 4 | Điện Biên | 11 | 45 |
| 5 | Lai Châu | 12 | 38 |
| 6 | Sơn La | 14 | 75 |
| 7 | Lào Cai | 15 | 99 |
| 8 | Thái Nguyên | 19 | 92 |
| 9 | Lạng Sơn | 20 | 65 |
| 10 | Quảng Ninh | 22 | 54 |
| 11 | Bắc Ninh | 24 | 99 |
| 12 | Phú Thọ | 25 | 148 |
| 13 | Hải Phòng | 31 | 114 |
| 14 | Hưng Yên | 33 | 104 |
| 15 | Ninh Bình | 37 | 129 |
| 16 | Thanh Hoá | 38 | 166 |
| 17 | Nghệ An | 40 | 130 |
| 18 | Hà Tĩnh | 42 | 69 |
| 19 | Quảng Trị | 44 | 78 |
| 20 | Huế | 46 | 40 |
| 21 | Đà Nẵng | 48 | 94 |
| 22 | Quảng Ngãi | 51 | 96 |
| 23 | Gia Lai | 52 | 135 |
| 24 | Khánh Hoà | 56 | 65 |
| 25 | Đắk Lắk | 66 | 102 |
| 26 | Lâm Đồng | 68 | 124 |
| 27 | Đồng Nai | 75 | 95 |
| 28 | Hồ Chí Minh | 79 | 168 |
| 29 | Tây Ninh | 80 | 96 |
| 30 | Đồng Tháp | 82 | 102 |
| 31 | Vĩnh Long | 86 | 124 |
| 32 | An Giang | 91 | 102 |
| 33 | Cần Thơ | 92 | 103 |
| 34 | Cà Mau | 96 | 64 |

## Use case cho Auto365 preview

1. **Validate địa chỉ mới** trong `docs/auto365-master-merged.csv` — check tên tỉnh + phường có tồn tại
2. **Legacy province mapping** — Bắc Giang → Bắc Ninh (do tên phường cũ vẫn nằm trong ward list của tỉnh mới)
3. **Autocomplete xã/phường** — 3.321 điểm searchable
4. **Slug URL** — dùng `CodeName` cho URL routing
5. **NameEn** — canonical tên tiếng Anh cho hreflang / international SEO

## Refresh

Khi có nghị quyết mới → re-fetch từ GitHub master:

```bash
DEST="D:/Manh_Cuong/laragon/www/03_internal_tools/preview-365group/docs/vn-provinces"
BASE="https://raw.githubusercontent.com/thanglequoc/vietnamese-provinces-database/master/json"
curl -sL -o "$DEST/full.json" "$BASE/full_json_generated_data_vn_units.json"
curl -sL -o "$DEST/simplified.min.json" "$BASE/simplified_json_generated_data_vn_units_minified.json"
curl -sL -o "$DEST/vn-only.min.json" "$BASE/vn_only_simplified_json_generated_data_vn_units_minified.json"
```

Cập nhật `README.md` version + fetched date sau khi re-fetch.
