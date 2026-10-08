const fs = require('fs');

const html = fs.readFileSync('auto365/bi-gam/vinfast-vf3/index.html', 'utf8');
const data = fs.readFileSync('auto365/bi-gam/vinfast-vf3/data/vf3.json', 'utf8');
const combined = `${html}\n${data}`;

const mustContain = [
  'Auto365 SEO/GEO/HTML V1.8',
  'Bi gầm VinFast VF3: phương án lắp, giá và case thực tế',
  'Team Content Auto365',
  'Rà soát kỹ thuật: <strong>Nguyễn Quang Đạo</strong>',
  'Đã xác minh trên VinFast VF3',
  'Kỹ thuật đã xác nhận tương thích VF3',
  'Cần kiểm tra VF3 trước khi chốt cấu hình',
  'Giá thiết bị tham khảo theo dữ liệu sản phẩm Auto365 đối chiếu ngày 06/10/2026',
  'chưa gồm VAT và chưa bao gồm phụ kiện, pát/mặt dưỡng, công lắp hoặc căn chỉnh',
  'Nguồn đối chiếu',
  'Phạm vi sử dụng',
  'Ngày kiểm nội dung',
  'Điều kỹ thuật cần kiểm tra',
  'Phạm vi pháp lý',
  'Việc chấp nhận khi kiểm định phụ thuộc cấu hình thực tế',
  'Chọn điểm Auto365 có dịch vụ nâng cấp ánh sáng và xác nhận cấu hình trước khi đặt lịch',
  'Xe VinFast đã lắp bi gầm tại Auto365',
  'VinFast VF3 lắp GTR G1 Turbo V2 tại Auto365',
  'VinFast VF7 Plus 2025 lắp X-Light F10 Turbo V2 5500K',
  'https://auto365.vn/vinfast-vf-7-plus-2025-lap-bi-gam-x-light-f10-turbo-v2-5500k',
  'không dùng thay bằng chứng fitment VF3',
  'Đèn bi gầm X-Light F10 Turbo V2',
  'Bi gầm X-Light 301 V2',
  'Bi gầm AES SV 3.0 Pro',
  'hinh/bi-gam-vinfast-vf3-muc-dich-tang-sang.png',
  'hinh/bi-gam-vinfast-vf3-cau-hinh-phu-hop.png',
  'hinh/bi-gam-vinfast-vf3-ky-thuat-lap-dat.png',
  'hinh/bi-gam-vinfast-vf3-trai-nghiem-thuc-te.png',
  'about',
  'mentions',
  'datePublished',
  'dateModified'
];

const forbidden = [
  'Evidence Level:',
  'Ba mẫu đầu có căn cứ rõ nhất: video lắp trên VF3 hoặc bảo hành 2 năm',
  'bong-led-vinfast-vf3-s3-pro-chan-h7.jpg',
  'top-4-bong-led-naoevo-co-the-nang-cap-vinfast-vf3-10.jpg',
  'top-3-dong-den-lens-vuong-cho-xe-vinfast-vf3-7.jpg',
  'Tất cả chi nhánh Auto365 đang hoạt động đều tiếp nhận lắp bi gầm',
  'Lắp bi gầm có bị lỗi đăng kiểm không?',
  'Đèn bi gầm Kỹ thuật đã xác nhận tương thích VF3',
  'Bi gầm Cần kiểm tra VF3 trước khi chốt cấu hình SV'
];

const missing = mustContain.filter((needle) => !combined.includes(needle));
if (missing.length) {
  throw new Error(`Missing V1.8 VF3 integrity content: ${missing.join(', ')}`);
}

const stillPresent = forbidden.filter((needle) => combined.includes(needle));
if (stillPresent.length) {
  throw new Error(`Forbidden V1.8 VF3 content still present: ${stillPresent.join(', ')}`);
}

// Check physical image files exist
const requiredImages = [
  'auto365/bi-gam/vinfast-vf3/hinh/bi-gam-vinfast-vf3-muc-dich-tang-sang.png',
  'auto365/bi-gam/vinfast-vf3/hinh/bi-gam-vinfast-vf3-cau-hinh-phu-hop.png',
  'auto365/bi-gam/vinfast-vf3/hinh/bi-gam-vinfast-vf3-ky-thuat-lap-dat.png',
  'auto365/bi-gam/vinfast-vf3/hinh/bi-gam-vinfast-vf3-trai-nghiem-thuc-te.png'
];

for (const imgPath of requiredImages) {
  if (!fs.existsSync(imgPath)) {
    throw new Error(`Missing physical image file: ${imgPath}`);
  }
}

const requiredHandoffFiles = [
  'auto365/bi-gam/vinfast-vf3/02_Huong_dan_CMS_SEO_Bi_Gam_VinFast_VF3_V1.8.md',
  'auto365/bi-gam/vinfast-vf3/03_Phieu_danh_gia_Bi_Gam_VinFast_VF3_V1.8.md'
];

const missingHandoffFiles = requiredHandoffFiles.filter((file) => !fs.existsSync(file));
if (missingHandoffFiles.length) {
  throw new Error(`Missing V1.8 U3 handoff files: ${missingHandoffFiles.join(', ')}`);
}

for (const file of requiredHandoffFiles) {
  const body = fs.readFileSync(file, 'utf8');
  for (const needle of ['Auto365 SEO/GEO/HTML V1.8', 'N1', 'N2', 'N3', 'N4', 'N5', 'U3']) {
    if (!body.includes(needle)) throw new Error(`Missing ${needle} in ${file}`);
  }
}

console.log('VF3 V1.8 evidence, images, data scope, entity, reviewer, legal FAQ and U3 integrity verified successfully.');
