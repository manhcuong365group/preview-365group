import { pathToFileURL } from 'node:url';
import path from 'node:path';
import { log } from './utils.js';
import { DEFAULTS } from './config.js';

/**
 * Render the already-written review.html to PDF via the given Puppeteer
 * browser instance. Uses Chrome's print pipeline (page.pdf).
 */
export async function renderPdf(browser, htmlPath, pdfPath, pdfOptions = DEFAULTS.pdfOptions) {
  const page = await browser.newPage();
  try {
    const fileUrl = pathToFileURL(path.resolve(htmlPath)).href;
    log.info(`PDF: loading ${fileUrl}`);
    await page.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 60_000 });
    // Force print media so @media print styles apply if any.
    await page.emulateMediaType('print');
    await page.pdf({ path: pdfPath, ...pdfOptions });
  } finally {
    await page.close();
  }
}
