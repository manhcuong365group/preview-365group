# _src-media

Source media (PNG artwork gốc, ảnh scenic chưa optimize) cho các landing pillar. Thư mục này **KHÔNG được deploy** — nằm ngoài `auto365/` (Cloudflare build directory) chính vì lý do đó.

**Workflow chuẩn:**

1. Thiết kế / render / chụp ảnh → đặt vào `_src-media/<slug>/<sub-folder>/`
2. Chạy script convert riêng cho slug (VD `scripts/convert-v30-images.mjs`) → xuất WebP/JPG tối ưu vào `auto365/<slug>/hinh/`
3. Chỉ `hinh/` được deploy — source giữ lại đây cho lần re-convert sau

**Có thể commit hay không?** Tuỳ:
- Ảnh PSD/AI/PNG gốc > 5MB nên **không commit** (bloat repo). Team giữ trên Drive/Dropbox và pull về khi cần re-convert.
- Ảnh JPG scenic < 500KB có thể commit nếu team muốn giữ pipeline reproducible từ git thuần.

Hiện tại các folder trong `_src-media/` đang untracked — quyết định commit hay không tuỳ team.
