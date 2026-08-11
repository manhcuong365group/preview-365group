# Auto365 Hub Phim Cách Nhiệt V3 — Knowledge Library

Prototype standalone cho Hub 01. V3 tách rõ hai lớp:

1. **Knowledge Map:** 8 nhánh editorial để người đọc hiểu cấu trúc tri thức.
2. **Library Filter:** search/filter/pagination riêng để tìm trong corpus lớn.

## File
- `index.html` — full prototype.
- `styles.css` — design system + responsive + filter drawer.
- `app.js` — search/filter/sort/chips/reset/mobile drawer/scrollspy.
- `test_static.py` — structural checks.
- `PLAN.md` — implementation plan.
- `VERIFY.md` — kết quả verification.

## Lưu ý
- Demo-only, có `noindex,nofollow,noarchive`.
- Không dùng số liệu sản phẩm thật để tránh tạo claim giả.
- Không base64 image, không external JS dependency.
- Production cần bind CMS/DB và SSR pagination/filter phù hợp, không render toàn corpus thành hidden DOM.
