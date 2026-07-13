import puppeteer from 'puppeteer';
import { log, formatSize } from './utils.js';
import { DEFAULTS } from './config.js';

/**
 * Fetches the URL with Puppeteer, captures every network response into a Map
 * keyed by the request URL. Returns the final HTML (after JS render) plus the
 * asset cache and the browser instance (so caller can reuse it for PDF).
 *
 * @param {string} url
 * @param {object} opts
 * @returns {Promise<{html: string, assetCache: Map<string, {buffer: Buffer, contentType: string}>, finalUrl: string, browser: puppeteer.Browser}>}
 */
export async function crawl(url, opts = {}) {
  const timeoutMs = opts.timeoutMs ?? DEFAULTS.navigationTimeoutMs;
  const viewport = opts.viewport ?? DEFAULTS.viewport;

  log.step(`Launching Puppeteer`);
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport(viewport);

  const assetCache = new Map();
  page.on('response', async (response) => {
    try {
      const reqUrl = response.url();
      const status = response.status();
      if (status < 200 || status >= 300) return;
      if (assetCache.has(reqUrl)) return;

      // Skip data: URIs and non-http
      if (!/^https?:/i.test(reqUrl)) return;

      const contentType = (response.headers()['content-type'] || '').split(';')[0].trim() || 'application/octet-stream';
      // Skip navigations (main document) — we get HTML via page.content()
      // Also skip WebSocket/EventStream
      const resourceType = response.request().resourceType();
      if (resourceType === 'document' || resourceType === 'websocket' || resourceType === 'eventsource') return;

      const buffer = await response.buffer().catch(() => null);
      if (!buffer) return;
      assetCache.set(reqUrl, { buffer, contentType, resourceType });
    } catch {
      // ignore — response may have been aborted; page.on('response') should not throw
    }
  });

  log.info(`Navigating to ${url}`);
  const t0 = Date.now();
  try {
    await page.goto(url, { waitUntil: 'networkidle0', timeout: timeoutMs });
  } catch (err) {
    log.warn(`networkidle0 timeout — falling back to networkidle2: ${err.message}`);
    await page.goto(url, { waitUntil: 'networkidle2', timeout: timeoutMs });
  }
  const loadMs = Date.now() - t0;

  const finalUrl = page.url();
  const html = await page.content();

  let totalBytes = 0;
  for (const { buffer } of assetCache.values()) totalBytes += buffer.length;
  log.ok(`Loaded ${finalUrl} in ${loadMs} ms — ${assetCache.size} assets cached (${formatSize(totalBytes)})`);

  await page.close();
  return { html, assetCache, finalUrl, browser };
}
