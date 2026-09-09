# Hướng dẫn SEO sửa preview

## Cách sửa bằng trình duyệt

1. Vào repo GitHub → chọn nhánh `main` → mở file cần sửa trong `auto365/`.
2. Bấm biểu tượng cây bút → chọn **Create a new branch** với tên `seo/70mai-...`.
3. Sửa HTML hoặc tải ảnh vào `auto365/camera-hanh-trinh-70mai/hinh/`, sau đó bấm **Propose changes** để tạo Pull Request.

Cloudflare Pages sẽ tạo link preview cho Pull Request. Chỉ merge vào `main` sau khi người phụ trách duyệt nội dung, ảnh, link và giao diện.

## Quyền GitHub

- Mời tài khoản SEO trong **Settings → Collaborators** với quyền **Write**.
- Không cấp **Admin** và không cho sửa trực tiếp `main`.
- Bật bảo vệ `main`, yêu cầu Pull Request trước khi merge.

## Quy tắc ảnh

- Ảnh dùng trong trang đặt tại `auto365/camera-hanh-trinh-70mai/hinh/`.
- Giữ tên file không dấu, có model và vị trí: `70mai-a510-desktop.webp`.
- Không xóa ảnh cũ nếu chưa kiểm tra toàn bộ đường dẫn đang dùng.
