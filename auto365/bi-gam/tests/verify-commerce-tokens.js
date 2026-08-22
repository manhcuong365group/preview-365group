const fs = require('fs');

const html = fs.readFileSync('auto365/bi-gam/index.html', 'utf8').replace(/\s/g, '');
const requiredTokens = [
  '--brand:#E31D2B', '--ink:#101114', '--muted:#62666D', '--soft:#F5F6F8',
  '--line:#E2E4E8', '--success:#17824A', '--warning:#B76A00',
];
for (const token of requiredTokens) {
  if (!html.includes(token)) throw new Error(`Missing Commerce V2 token: ${token}`);
}
console.log('Commerce V2 tokens verified.');
