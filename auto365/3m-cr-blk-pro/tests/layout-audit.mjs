import { chromium } from 'playwright';
import { readFile, mkdir } from 'node:fs/promises';
import { resolve, extname } from 'node:path';
import assert from 'node:assert/strict';

// Serve the current source through intercepted requests, without publishing it.
const root = resolve('auto365');
const browser = await chromium.launch({ headless: true });
const output = resolve('tmp/cr-blk-layout-audit');
await mkdir(output, { recursive: true });
const reports = [];
try {
  for (const width of [375, 768, 1024, 1440]) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    const scriptErrors = [];
    page.on('pageerror', error => scriptErrors.push(error.message));
    await page.route('https://local.audit/**', async route => {
      const path = resolve(root, '.' + new URL(route.request().url()).pathname);
      if (!path.startsWith(root)) return route.abort();
      try {
        const file = path.endsWith('3m-cr-blk-pro') ? resolve(path, 'index.html') : path;
        const type = { '.html': 'text/html', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.png': 'image/png' }[extname(file)];
        await route.fulfill({ body: await readFile(file), contentType: type || 'application/octet-stream' });
      } catch { await route.fulfill({ status: 404, body: '' }); }
    });
    await page.goto('https://local.audit/3m-cr-blk-pro', { waitUntil: 'domcontentloaded' });
    await page.addStyleTag({ content: 'html{scroll-behavior:auto!important}' });
    await page.locator('#expert-guide').scrollIntoViewIfNeeded();
    await page.evaluate(async () => {
      await document.fonts.ready;
      await Promise.all([...document.querySelectorAll('#expert-guide img')].map(img => img.decode().catch(() => {})));
    });
    const report = await page.evaluate(() => {
      const rect = e => { const r = e.getBoundingClientRect(); return { top: r.top, bottom: r.bottom, left: r.left, right: r.right, height: r.height }; };
      const parts = ['.knowledge-grid', '.knowledge-note', '.source-links', '.expert-quote', '.section-photo'].map(s => rect(document.querySelector('#expert-guide ' + s)));
      const ids = [...document.querySelectorAll('[id]')].map(e => e.id);
      return {
        width: innerWidth,
        heroPadding: [getComputedStyle(document.querySelector(".hero")).paddingTop, getComputedStyle(document.querySelector(".hero")).paddingBottom].map(parseFloat),
        containers: [...document.querySelectorAll('main > section > .container')].map(e => ({ section: e.parentElement.id, width: Math.round(e.getBoundingClientRect().width) })),
        overflow: document.documentElement.scrollWidth - innerWidth,
        gaps: parts.slice(1).map((p, i) => Math.round((p.top - parts[i].bottom) * 100) / 100),
        priceImageGap: rect(document.querySelector("#pricing .section-photo")).top - rect(document.querySelector("#pricing .price-cards")).bottom,
        duplicateIds: ids.filter((id, i) => ids.indexOf(id) !== i),
        mainCount: document.querySelectorAll('main').length,
        h1Count: document.querySelectorAll('h1').length,
        missingAlt: document.querySelectorAll('img:not([alt])').length,
        unlabeledFields: [...document.querySelectorAll('input:not([type=hidden]),select,textarea')].filter(e => !e.closest('[aria-hidden="true"]') && e.getClientRects().length && !e.labels?.length && !e.getAttribute('aria-label') && !e.getAttribute('aria-labelledby')).map(e => e.id || e.name),
        brokenLocalLinks: [...document.querySelectorAll('a[href^="#"]')].map(e => e.getAttribute('href')).filter(h => h.length > 1 && !document.getElementById(h.slice(1))),
        overlappingSections: [...document.querySelectorAll('main > section')].flatMap((e, i, all) => i && rect(e).top < rect(all[i - 1]).bottom - 1 ? [e.id || e.className] : []),
      };
    });
    await page.locator('#expert-guide').screenshot({ path: resolve(output, `expert-${width}.png`) });
    for (const section of ['branch-finder', 'specs', 'warranty', 'pricing']) {
      await page.locator(`#${section}`).screenshot({ path: resolve(output, `${section}-${width}.png`) });
    }
    // Exercise real browser events without submitting a lead or visiting external destinations.
    await page.locator('.js-price-select[data-vehicle="suv"]').click();
    assert.equal(await page.locator('#form-vehicle-group').inputValue(), 'suv');
    assert.equal(await page.locator('#form-offer-price').inputValue(), '18300000');
    assert.ok(await page.locator('body').evaluate(e => e.classList.contains('form-modal-open')));
    await page.keyboard.press('Escape');
    assert.ok(await page.locator('.js-price-select[data-vehicle="suv"]').evaluate(e => e === document.activeElement));
    await page.locator('.js-package[data-package="pro"]').click();
    assert.equal(await page.locator('#form-config-code').inputValue(), 'CRP-SUV-40-35-15');
    assert.equal(await page.locator('#form-offer-price').inputValue(), '18300000');
    await page.keyboard.press('Escape');
    await page.locator('.js-package[data-package="standard"]').click();
    assert.equal(await page.locator('#form-offer-price').inputValue(), '17600000');
    await page.keyboard.press('Escape');
    const nightSelect = page.locator('.mobile-choice[data-mobile="drive"]');
    if (await nightSelect.isVisible()) await nightSelect.selectOption('night');
    else await page.locator('.js-drive[data-drive="night"]').click();
    assert.match(await page.locator('#form-config-code').inputValue(), /^CRS-/);
    const filter = page.locator('.case-filter[data-brand="VinFast"]');
    if (await filter.count()) {
      await filter.click();
      assert.equal(await page.locator('.case-card:visible').count(), 1);
    }
    assert.deepEqual(scriptErrors, []);
    report.interactions = 'vehicle, package, modal open/Escape/focus return, night recommendation, case filter: passed';
    reports.push(report);
    await page.close();
  }
  console.log(JSON.stringify(reports, null, 2));
  if (process.argv.includes('--check')) {
    for (const r of reports) {
      assert.ok(r.overflow <= 1, `Page overflow at ${r.width}px`);
      assert.ok(r.heroPadding.every(p => p >= 16 && p <= 22) && r.heroPadding[0] === r.heroPadding[1], `Uneven hero padding at ${r.width}px`);
      assert.ok(r.containers.every(c => Math.abs(c.width - r.containers[0].width) <= 1), `Misaligned container at ${r.width}px`);
      assert.ok(r.gaps.every(g => g >= 14 && g <= 25), `Uneven reading flow at ${r.width}px: ${r.gaps}`);
      assert.ok(r.priceImageGap >= 14, `Price image touches cards at ${r.width}px`);
      assert.equal(r.mainCount, 1);
      assert.equal(r.h1Count, 1);
      assert.deepEqual(r.duplicateIds, []);
      assert.deepEqual(r.unlabeledFields, []);
      assert.deepEqual(r.brokenLocalLinks, []);
      assert.equal(r.missingAlt, 0);
      assert.deepEqual(r.overlappingSections, []);
    }
  }
} finally { await browser.close(); }
