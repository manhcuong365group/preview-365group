# Hướng dẫn Deploy dự án lên Cloudflare Pages dành cho thành viên nhóm

Tài liệu này hướng dẫn cách lấy mã nguồn của dự án và thực hiện deploy (cập nhật) website lên Cloudflare Pages từ một máy tính mới.

---

## Cách 1: Deploy thủ công bằng Wrangler CLI (Nhanh nhất)

Nếu bạn muốn deploy trực tiếp từ terminal máy tính của mình mà không cần cấu hình Git tự động, hãy làm theo các bước sau:

### 1. Chuẩn bị môi trường
Đảm bảo máy tính của bạn đã cài đặt **Node.js** (tải tại [nodejs.org](https://nodejs.org/)).

### 2. Tải mã nguồn về máy
Sao chép thư mục dự án `preview-365group` về máy của bạn.

### 3. Cấu hình thông tin xác thực Cloudflare
Mở Terminal/PowerShell tại thư mục dự án trên máy của bạn và thiết lập các thông tin đăng nhập bằng cách chạy lệnh dưới đây:

**Trên hệ điều hành Windows (PowerShell):**
```powershell
$env:CLOUDFLARE_API_TOKEN="cfut_utQ9u00eUCM9eJNBrsJvUTvdcFXgKaCUlV8H23npca9be5b2"
$env:CLOUDFLARE_ACCOUNT_ID="8ce5d250461b2f3297c8984846c97943"
```

**Trên macOS / Linux / Git Bash:**
```bash
export CLOUDFLARE_API_TOKEN="cfut_utQ9u00eUCM9eJNBrsJvUTvdcFXgKaCUlV8H23npca9be5b2"
export CLOUDFLARE_ACCOUNT_ID="8ce5d250461b2f3297c8984846c97943"
```

### 4. Thực hiện Deploy
Chạy lệnh sau để tải toàn bộ thư mục `auto365` lên Cloudflare Pages:

```bash
npx wrangler pages deploy auto365 --project-name=preview-365group
```

*Sau khi chạy thành công, trang web sẽ được cập nhật online tại địa chỉ:*
👉 **[https://preview-365group.pages.dev/](https://preview-365group.pages.dev/)**

---

## Cách 2: Deploy tự động thông qua GitHub (Khuyên dùng lâu dài)

Để các máy khác chỉ cần đẩy code lên GitHub là tự động deploy (không cần nhớ Token hay chạy lệnh), hãy cấu hình Git Integration:

1. Đẩy mã nguồn dự án này lên một repository trên **GitHub**.
2. Truy cập **Cloudflare Dashboard** > **Workers & Pages** > Chọn dự án `preview-365group`.
3. Vào tab **Settings** > **Git Integration** > Bấm **Connect to Git** và liên kết tới repository GitHub của bạn.
4. Thiết lập thư mục build là `auto365` và framework preset là **None**.
5. Kể từ giờ, mỗi khi bất cứ ai thực hiện `git push` code mới lên nhánh chính (main/master), Cloudflare sẽ tự động cập nhật web sau 1-2 phút.
