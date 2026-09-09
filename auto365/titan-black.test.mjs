import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const page = readFileSync(new URL('./titan-black.html', import.meta.url), 'utf8');

assert.match(page, /id="tuong-thich"/, 'requires a public compatibility section');
assert.match(page, /Lens tròn: 130 × 80 × 80 mm/, 'requires the round-lens dimensions');
assert.match(page, /Lens vuông: 130 × 80 × 65 mm/, 'requires the square-lens dimensions');
assert.match(page, /CANBUS\/decoder.*báo riêng|báo riêng.*CANBUS\/decoder/s, 'requires CANBUS pricing guidance');
assert.match(page, /hình ảnh.*minh họa|minh họa.*hiệu quả thực tế/is, 'requires a light-image disclaimer');
assert.match(page, /không cam kết kết quả đăng kiểm/i, 'requires a registration disclaimer');
