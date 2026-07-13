#!/usr/bin/env node
import { Command } from 'commander';
import * as cheerio from 'cheerio';
import fs from 'node:fs/promises';
import path from 'node:path';
import { crawl } from './lib/crawler.js';
import { inlineAssets, logInlineStats } from './lib/inline-assets.js';
import { safeMinify } from './lib/minify.js';
import { renderPdf } from './lib/pdf.js';
import { log, formatSize } from './lib/utils.js';
import { DEFAULTS, AI_REVIEW_PRESET } from './lib/config.js';

const program = new Command();

program
  .name('review-build')
  .description('Bundle a preview URL into a single standalone review.html + review.pdf.\nInlines images/fonts/CSS/JS under a size threshold; keeps navigation links, JSON-LD schema, canonical, OG.')
  .argument('<url>', 'URL to bundle (e.g. https://preview-365group.pages.dev/bi-led-x-light-v30-ultra/)')
  .option('-o, --output <path>', 'Output HTML path', path.join(DEFAULTS.outputDir, DEFAULTS.outputHtml))
  .option('--no-pdf', 'Skip PDF generation')
  .option('--no-minify', 'Skip HTML/CSS/JS minification')
  .option('--inline-image-max <kb>', 'Inline images up to this size in KB (larger ones keep their absolute URL)', String(DEFAULTS.inlineImageMaxKB))
  .option('--keep-selector <selector>', 'Keep only elements matching this selector (replaces <body> content)')
  .option('--remove <selectors>', 'Comma-separated selectors to remove before inlining')
  .option('--ai-review', 'Apply Auto365 AI-review preset: strip .topbar/.mobilebar/<template>/tracking scripts, lower image threshold')
  .option('--timeout <ms>', 'Navigation timeout in ms', String(DEFAULTS.navigationTimeoutMs))
  .parse(process.argv);

const opts = program.opts();
const url = program.args[0];

let inlineImageMaxKB = Number(opts.inlineImageMax) || DEFAULTS.inlineImageMaxKB;
const removeSelectors = [];
if (opts.remove) removeSelectors.push(...opts.remove.split(',').map((s) => s.trim()).filter(Boolean));
if (opts.aiReview) {
  removeSelectors.push(...AI_REVIEW_PRESET.remove);
  if (Number(opts.inlineImageMax) === DEFAULTS.inlineImageMaxKB) {
    // User didn't override — apply preset's lower threshold
    inlineImageMaxKB = AI_REVIEW_PRESET.inlineImageMaxKB;
  }
  log.info(`--ai-review preset active (Auto365 tuned)`);
}

const outputHtml = path.resolve(opts.output);
const outputPdf = outputHtml.replace(/\.html?$/i, '.pdf');
const outputDir = path.dirname(outputHtml);
await fs.mkdir(outputDir, { recursive: true });

const t0 = Date.now();
let browser;
try {
  const result = await crawl(url, { timeoutMs: Number(opts.timeout) });
  browser = result.browser;
  const { html: rawHtml, assetCache, finalUrl } = result;

  const originalSize = Buffer.byteLength(rawHtml, 'utf8');
  log.info(`Original HTML size: ${formatSize(originalSize)}`);

  log.step('Applying DOM edits');
  const $ = cheerio.load(rawHtml, { decodeEntities: false });

  // --remove (includes --ai-review preset selectors)
  if (removeSelectors.length) {
    let removed = 0;
    for (const sel of removeSelectors) {
      try {
        const n = $(sel).length;
        $(sel).remove();
        removed += n;
      } catch (err) {
        log.warn(`selector "${sel}" invalid: ${err.message}`);
      }
    }
    log.info(`Removed ${removed} element(s) via --remove/--ai-review`);
  }

  // --keep-selector: replace <body> with only matched elements
  if (opts.keepSelector) {
    const keep = $(opts.keepSelector);
    if (keep.length === 0) {
      log.warn(`--keep-selector "${opts.keepSelector}" matched 0 elements — leaving body untouched`);
    } else {
      const kept = keep.map((_, el) => $.html(el)).get().join('\n');
      $('body').empty().append(kept);
      log.info(`--keep-selector kept ${keep.length} element(s)`);
    }
  }

  log.step('Inlining assets');
  const stats = await inlineAssets($, finalUrl, assetCache, { imageMaxKB: inlineImageMaxKB });
  logInlineStats(stats);

  let out = $.html();

  if (opts.minify) {
    log.step('Minifying');
    const beforeMinify = Buffer.byteLength(out, 'utf8');
    out = await safeMinify(out);
    const afterMinify = Buffer.byteLength(out, 'utf8');
    log.info(`Minify: ${formatSize(beforeMinify)} → ${formatSize(afterMinify)} (saved ${formatSize(beforeMinify - afterMinify)})`);
  }

  await fs.writeFile(outputHtml, out, 'utf8');
  const finalSize = Buffer.byteLength(out, 'utf8');
  log.ok(`Wrote ${outputHtml} (${formatSize(finalSize)})`);
  if (finalSize > 5 * 1024 * 1024) {
    log.warn(`Output is > 5 MB — consider lowering --inline-image-max (currently ${inlineImageMaxKB} KB) or using --ai-review to shrink for AI review use case.`);
  }

  if (opts.pdf) {
    log.step('Rendering PDF (Chrome Print)');
    await renderPdf(browser, outputHtml, outputPdf);
    const pdfStat = await fs.stat(outputPdf);
    log.ok(`Wrote ${outputPdf} (${formatSize(pdfStat.size)})`);
  }

  const totalMs = Date.now() - t0;
  log.ok(`Done in ${(totalMs / 1000).toFixed(1)} s`);
} catch (err) {
  log.err(err.stack || err.message);
  process.exitCode = 1;
} finally {
  if (browser) await browser.close().catch(() => {});
}
