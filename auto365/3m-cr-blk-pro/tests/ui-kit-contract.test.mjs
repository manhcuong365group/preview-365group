import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

assert.match(html, /id="crblk-ui-kit"/, 'UI Kit layer must be present');
assert.match(html, /--ui-space-4:16px/, 'UI Kit must expose the 4px spacing scale');
assert.match(html, /--ui-text-base:16px/, 'UI Kit must expose base typography');
assert.match(html, /\.ui-card\{/, 'UI Kit must provide a reusable card contract');
assert.match(html, /\.ui-button\{/, 'UI Kit must provide a reusable button contract');
assert.match(html, /@media\(max-width:768px\)/, 'UI Kit must include mobile rules');
assert.match(html, /1900 9365/, 'Auto365 nationwide system card must keep the 1900 9365 hotline');

console.log('CR BLK Pro UI Kit contract passed');
