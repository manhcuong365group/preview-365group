import mime from 'mime-types';

export const log = {
  info: (msg) => console.log(`[i] ${msg}`),
  ok: (msg) => console.log(`[✓] ${msg}`),
  warn: (msg) => console.warn(`[!] ${msg}`),
  err: (msg) => console.error(`[✗] ${msg}`),
  step: (msg) => console.log(`\n▸ ${msg}`),
};

export function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

export function mimeFromContentType(contentType, fallbackExt = '') {
  if (!contentType) return fallbackExt ? mime.lookup(fallbackExt) || 'application/octet-stream' : 'application/octet-stream';
  return contentType.split(';')[0].trim();
}

export function extFromUrl(url) {
  try {
    const u = new URL(url);
    const m = u.pathname.match(/\.([a-z0-9]+)$/i);
    return m ? m[1].toLowerCase() : '';
  } catch {
    return '';
  }
}

export function toDataUri(buffer, contentType) {
  return `data:${contentType};base64,${buffer.toString('base64')}`;
}

export function resolveUrl(base, ref) {
  try {
    return new URL(ref, base).href;
  } catch {
    return null;
  }
}

export function isDataUri(url) {
  return typeof url === 'string' && url.startsWith('data:');
}

export function isAbsoluteUrl(url) {
  return typeof url === 'string' && /^https?:\/\//i.test(url);
}
