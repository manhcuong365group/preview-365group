from pathlib import Path
import re

ROOT = Path(__file__).resolve().parent
HTML = (ROOT / 'index.html').read_text(encoding='utf-8')
CSS = (ROOT / 'styles.css').read_text(encoding='utf-8')
JS = (ROOT / 'app.js').read_text(encoding='utf-8')

checks = []
def check(name, ok):
    checks.append((name, bool(ok)))

check('meta noindex', 'noindex,nofollow,noarchive' in HTML)
check('8 knowledge map cards', HTML.count('class="map-card"') == 8)
check('tree has no form controls', not re.search(r'id="knowledge-map"[\s\S]*?<select', HTML.split('id="learn"')[0]))
check('library filter panel exists', 'id="library-filters"' in HTML)
check('7 library filter dimensions', all(x in HTML for x in ['topic-filter','film-filter','car-filter','type-filter','need-filter','year-filter','library-search']))
check('12 demo article cards', HTML.count('class="article-card"') == 12)
check('mobile filter drawer', all(x in HTML for x in ['filter-mobile-toggle','filter-close','filter-backdrop']))
check('active filter chips logic', 'filter-chip' in JS and 'activeFilterEntries' in JS)
check('reset filter logic', 'filter-reset' in HTML and "reset?.addEventListener" in JS)
check('sort logic', 'sort-filter' in HTML and 'sortedVisibleCards' in JS)
check('pagination present', 'class="pagination v3-pagination"' in HTML)
check('trust and experts sections', 'id="trust"' in HTML and 'id="experts"' in HTML)
check('related auto365 urls', 'https://auto365.vn/tin-tuc/cam-nang-anh-sang-o-to' in HTML)
check('no base64 image', 'data:image/' not in HTML and 'data:image/' not in CSS)
check('no external js dependency', len(re.findall(r'<script[^>]+src="https?://', HTML)) == 0)
check('prefers reduced motion', 'prefers-reduced-motion' in CSS)
check('css/js linked', 'href="styles.css"' in HTML and 'src="app.js"' in HTML)
check('tree and library separate', HTML.index('id="knowledge-map"') < HTML.index('id="library"'))

failed = [name for name, ok in checks if not ok]
for name, ok in checks:
    print(f"{'PASS' if ok else 'FAIL'} - {name}")
print(f"\nRESULT: {len(checks)-len(failed)}/{len(checks)} PASS")
if failed:
    raise SystemExit(1)
