#!/usr/bin/env node
// Build preview pages by injecting shared shell parts into main.html templates.
//
// For each auto365/<slug>/main.html, replaces `<!-- @shell:<name> -->` markers with
// the content of `_shell/<name>.html`, then writes to auto365/<slug>/index.html.
//
// Usage:
//   node scripts/build-pages.js            # build all pages that have main.html
//   node scripts/build-pages.js he-thong   # build a single slug
//
// Idempotent — safe to re-run. Shell files are read fresh every run so
// re-running extract-shell.mjs then this script picks up production updates.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const AUTO365_DIR = path.join(REPO, 'auto365');
const SHELL_DIR = path.join(REPO, '_shell');

const SHELL_PARTS = ['head-shared', 'header', 'footer', 'floating', 'scripts'];

function loadShell() {
  const shell = {};
  for (const name of SHELL_PARTS) {
    const p = path.join(SHELL_DIR, `${name}.html`);
    if (!fs.existsSync(p)) {
      console.error(`❌ Missing shell file: ${p}`);
      process.exit(1);
    }
    shell[name] = fs.readFileSync(p, 'utf8');
  }
  return shell;
}

function buildPage(slug, shell) {
  const dir = path.join(AUTO365_DIR, slug);
  const mainPath = path.join(dir, 'main.html');
  const outPath = path.join(dir, 'index.html');

  if (!fs.existsSync(mainPath)) {
    return { slug, skipped: true, reason: 'no main.html' };
  }

  let html = fs.readFileSync(mainPath, 'utf8');
  const foundMarkers = new Set();

  html = html.replace(/<!--\s*@shell:([a-z-]+)\s*-->/g, (_match, name) => {
    if (!shell[name]) {
      console.warn(`  ⚠ Unknown shell marker in ${slug}/main.html: @shell:${name}`);
      return `<!-- @shell:${name} (unknown) -->`;
    }
    foundMarkers.add(name);
    return `<!-- @shell:${name} begin -->\n${shell[name]}\n<!-- @shell:${name} end -->`;
  });

  // Prepend build banner
  const banner = `<!-- BUILT from main.html + _shell/ on ${new Date().toISOString()} — DO NOT EDIT DIRECTLY -->\n`;
  html = html.replace(/(<!doctype html>)/i, `$1\n${banner}`);

  fs.writeFileSync(outPath, html, 'utf8');
  return { slug, ok: true, markers: [...foundMarkers], size: (html.length / 1024).toFixed(1) };
}

function findSlugsWithMain() {
  return fs.readdirSync(AUTO365_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .filter(d => fs.existsSync(path.join(AUTO365_DIR, d.name, 'main.html')))
    .map(d => d.name);
}

function main() {
  const targetSlug = process.argv[2];
  const shell = loadShell();
  const slugs = targetSlug ? [targetSlug] : findSlugsWithMain();

  console.log('══════════════════════════════════════════');
  console.log(`  Building ${slugs.length} preview page${slugs.length === 1 ? '' : 's'} with shared shell`);
  console.log('══════════════════════════════════════════\n');

  const results = slugs.map(s => buildPage(s, shell));

  for (const r of results) {
    if (r.skipped) {
      console.log(`  ⊘ ${r.slug.padEnd(30)} skipped (${r.reason})`);
    } else {
      console.log(`  ✓ ${r.slug.padEnd(30)} ${r.size} KB  [${r.markers.join(', ')}]`);
    }
  }

  const built = results.filter(r => r.ok).length;
  console.log(`\n  Built ${built} / ${slugs.length} pages → auto365/<slug>/index.html`);
}

// Timestamp injection deterministic for the banner — we still want to know when built,
// but Date.now() lives at runtime, not in the source.
main();
