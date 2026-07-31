import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptRepoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const repoRoot = process.argv[2] ? path.resolve(process.argv[2]) : scriptRepoRoot;
const deployRoot = path.join(repoRoot, 'auto365');
const marker = '<!-- preview-copy-link:start -->';
const generatedPages = new Set([
  path.join(deployRoot, 'he-thong', 'index.html'),
  path.join(deployRoot, 'bi-led-x-light-v30-ultra', 'index.html'),
]);

const snippet = `
${marker}
<script>
(function () {
  'use strict';

  var params = new URLSearchParams(window.location.search);
  if (params.get('admin') !== '1') return;

  function addPreviewCopyButton() {
    if (document.getElementById('preview-copy-link-button')) return;

    var button = document.createElement('button');
    button.id = 'preview-copy-link-button';
    button.type = 'button';
    button.textContent = 'Copy link gửi duyệt';
    button.setAttribute('aria-label', 'Sao chép link mới không dùng cache');
    button.style.cssText = [
      'position:fixed', 'right:16px', 'bottom:16px', 'z-index:2147483647',
      'border:0', 'border-radius:999px', 'padding:12px 18px',
      'background:#1667d9', 'color:#fff', 'font:600 14px/1.2 Arial,sans-serif',
      'box-shadow:0 4px 16px rgba(0,0,0,.25)', 'cursor:pointer'
    ].join(';');

    button.addEventListener('click', async function () {
      var shareUrl = new URL(window.location.href);
      shareUrl.searchParams.delete('admin');
      shareUrl.searchParams.set('v', Date.now().toString());

      try {
        await navigator.clipboard.writeText(shareUrl.toString());
      } catch (error) {
        var input = document.createElement('textarea');
        input.value = shareUrl.toString();
        input.style.position = 'fixed';
        input.style.opacity = '0';
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        input.remove();
      }

      var originalText = button.textContent;
      button.textContent = 'Đã copy link mới!';
      setTimeout(function () { button.textContent = originalText; }, 1800);
    });

    document.body.appendChild(button);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addPreviewCopyButton);
  } else {
    addPreviewCopyButton();
  }
})();
</script>
<!-- preview-copy-link:end -->
`;

function findIndexFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return findIndexFiles(fullPath);
    return entry.name === 'index.html' ? [fullPath] : [];
  });
}

const targets = findIndexFiles(deployRoot)
  .filter((file) => !generatedPages.has(file))
  .concat([
    path.join(deployRoot, 'he-thong', 'main.html'),
    path.join(deployRoot, 'bi-led-x-light-v30-ultra', 'index-src.html'),
  ]);

for (const file of targets) {
  const html = fs.readFileSync(file, 'utf8');
  if (html.includes(marker)) {
    console.log(`SKIP ${path.relative(repoRoot, file)}`);
    continue;
  }
  let updated;
  if (/<\/body>/i.test(html)) {
    updated = html.replace(/<\/body>/i, `${snippet}</body>`);
  } else if (/<\/html>/i.test(html)) {
    updated = html.replace(/<\/html>/i, `${snippet}</html>`);
  } else {
    console.warn(`SKIP_NO_CLOSING_TAG ${path.relative(repoRoot, file)}`);
    continue;
  }
  fs.writeFileSync(file, updated, 'utf8');
  console.log(`UPDATE ${path.relative(repoRoot, file)}`);
}
