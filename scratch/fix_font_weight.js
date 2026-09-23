const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

// Fix .xl-lead-title
const oldLeadTitle = '.consult-form .xl-lead-title { margin: 0; font-size: 24px; font-weight: 800; color: #17191e; letter-spacing: -.02em; }';
const newLeadTitle = '.consult-form .xl-lead-title { margin: 0; font-size: 24px; font-weight: 600; color: #17191e; letter-spacing: -.02em; }';
html = html.replace(oldLeadTitle, newLeadTitle);

// Fix .lead-grid label
const oldLabel = '.consult-form .lead-grid label { display: flex; flex-direction: column; gap: 6px; font-size: 12.5px; font-weight: 700; color: #20242b; }';
const newLabel = '.consult-form .lead-grid label { display: flex; flex-direction: column; gap: 6px; font-size: 12.5px; font-weight: 500; color: #20242b; }';
html = html.replace(oldLabel, newLabel);

// Fix .consult-evidence-copy h2
const oldEvidence = '.consult-evidence-copy h2 { font-size: 20px; line-height: 1.3; margin: 0 0 12px; font-weight: 700; }';
const newEvidence = '.consult-evidence-copy h2 { font-size: 20px; line-height: 1.3; margin: 0 0 12px; font-weight: 600; }';
html = html.replace(oldEvidence, newEvidence);

fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
console.log("Updated font weights.");
