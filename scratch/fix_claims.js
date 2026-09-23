const fs = require('fs');
let html = fs.readFileSync('scratch/out/index_edited.html', 'utf8');

html = html.replace('GIỮ ZIN 100%', 'GIỮ NGUYÊN BẢN');
html = html.replace('cụm đèn xe 100%', 'cụm đèn xe');
html = html.replace('Cắm giắc zin 100%', 'Cắm giắc trực tiếp');
html = html.replace('cắm giắc 100%', 'cắm giắc trực tiếp');
html = html.replace('chắc chắn 100% qua được đăng kiểm', 'đảm bảo tiêu chuẩn đăng kiểm');
html = html.replace('cắm giắc zin không cắt trích', 'sử dụng giắc cắm không cắt trích');
html = html.replace('zin 100%', 'nguyên bản');
html = html.replace('Zin 100%', 'Nguyên bản');
html = html.replace('Plug & Play', 'Lắp đặt cắm giắc');

// WATT / LUMEN / LUX
html = html.replace(/Watt cao hơn.*?(?=<\/)/g, 'Watt mô tả công suất tiêu thụ điện, không đại diện trực tiếp cho khả năng chiếu sáng thực tế.');
html = html.replace(/Lumen cao hơn.*?(?=<\/)/g, 'Lumen là tổng lượng ánh sáng, trong khi hiệu quả quan sát phụ thuộc vào sự phân bố luồng sáng.');

// KELVIN 
html = html.replace(/6000K.*?(?=nhìn biển báo tốt hơn)/gi, '6000K mang lại ánh sáng trắng hiện đại, phù hợp đi phố.');
html = html.replace(/nhìn biển báo tốt hơn/g, 'hỗ trợ nhận diện biển báo');

fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
