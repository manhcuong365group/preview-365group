# Auto365 Hub Phim Cách Nhiệt V2 — Knowledge Tree

Standalone prototype để đánh giá UI/UX và architecture của hub cấp 2.

## Files
- `index.html` — full standalone markup, noindex demo-only.
- `styles.css` — visual system + responsive + reduced motion.
- `app.js` — filter demo cho 6 article cards và active-state sticky navigation.
- `test_static.py` — structural regression test dùng Python stdlib.
- `PLAN.md` — implementation plan gốc.

## Chạy thử
Mở `index.html` trực tiếp trong trình duyệt. Không cần build step hoặc dependency ngoài.

## Lưu ý
- Không dùng để publish/index.
- Không có schema production, sitemap hay canonical giả.
- Dữ liệu/article trong prototype là demo-only.
- Taxonomy dừng ở Hub → Subtopic → Article.
