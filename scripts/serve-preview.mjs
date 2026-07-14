// Tiny static server for local preview of auto365/*.
// Usage: node scripts/serve-preview.mjs [port]

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PORT = parseInt(process.argv[2] || '8765', 10);
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'auto365');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'application/javascript; charset=utf-8',
  '.mjs':  'application/javascript; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg':  'image/svg+xml',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif':  'image/gif',
  '.ico':  'image/x-icon',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
  '.ttf':  'font/ttf',
  '.pdf':  'application/pdf',
  '.txt':  'text/plain; charset=utf-8',
  '.md':   'text/markdown; charset=utf-8',
};

http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split('?')[0]);
  if (urlPath.endsWith('/')) urlPath += 'index.html';
  const fsPath = path.join(ROOT, urlPath);
  if (!fsPath.startsWith(ROOT)) { res.writeHead(403).end('forbidden'); return; }

  fs.stat(fsPath, (err, stat) => {
    if (err) { res.writeHead(404).end('not found'); return; }
    if (stat.isDirectory()) {
      res.writeHead(302, { Location: urlPath + '/' }).end();
      return;
    }
    const mime = MIME[path.extname(fsPath).toLowerCase()] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': mime, 'Cache-Control': 'no-store' });
    fs.createReadStream(fsPath).pipe(res);
  });
}).listen(PORT, '127.0.0.1', () => {
  console.log(`Preview server → http://localhost:${PORT}/`);
  console.log(`  he-thong    → http://localhost:${PORT}/he-thong/`);
  console.log(`Serving ${ROOT}`);
});
