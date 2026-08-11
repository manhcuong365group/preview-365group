from pathlib import Path
import re
import unittest

ROOT = Path(__file__).resolve().parent
HTML = (ROOT / 'index.html').read_text(encoding='utf-8')
CSS = (ROOT / 'styles.css').read_text(encoding='utf-8')
JS = (ROOT / 'app.js').read_text(encoding='utf-8')


class KnowledgeTreePrototypeTests(unittest.TestCase):
    def test_demo_is_noindex_nofollow(self):
        self.assertRegex(
            HTML,
            r'<meta\s+name="robots"\s+content="noindex,nofollow"\s*/?>',
        )
        self.assertNotRegex(HTML, r'<link[^>]+rel="canonical"')

    def test_local_assets_are_split_and_present(self):
        self.assertIn('<link rel="stylesheet" href="styles.css">', HTML)
        self.assertIn('<script src="app.js" defer></script>', HTML)
        self.assertNotIn('<style>', HTML)
        self.assertNotRegex(HTML, r'\sstyle="')
        self.assertTrue((ROOT / 'styles.css').is_file())
        self.assertTrue((ROOT / 'app.js').is_file())

    def test_knowledge_tree_has_exactly_eight_branches(self):
        self.assertIn('id="knowledge-tree"', HTML)
        cards = re.findall(r'<a\s+class="branch-card"[^>]*>', HTML)
        self.assertEqual(len(cards), 8)
        modes = re.findall(r'data-route-mode="(subhub|filter|collection)"', HTML)
        self.assertEqual(len(modes), 8)
        self.assertEqual(modes.count('subhub'), 5)
        self.assertEqual(modes.count('filter'), 2)
        self.assertEqual(modes.count('collection'), 1)

    def test_expected_branch_titles_are_present(self):
        expected = [
            'Chọn phim cách nhiệt',
            'Thông số &amp; đo kiểm',
            'Thương hiệu phim',
            'Giá &amp; chi phí',
            'Thi công &amp; chăm sóc',
            'Pháp lý &amp; tầm nhìn',
            'Theo dòng xe',
            'Case thực tế',
        ]
        # HTML uses literal ampersands in these headings, so accept either form.
        normalized = HTML.replace('&', '&amp;')
        for title in expected:
            self.assertIn(title, normalized)

    def test_library_preview_is_bounded_to_six_cards(self):
        cards = re.findall(r'<a\s+class="article-card"[^>]*data-topic="[^"]+"[^>]*data-brand="[^"]+"[^>]*data-type="[^"]+"[^>]*>', HTML)
        self.assertEqual(len(cards), 6)
        self.assertIn('id="library-grid"', HTML)
        self.assertIn('id="library-count"', HTML)
        self.assertIn('id="library-empty"', HTML)

    def test_library_controls_have_stable_ids(self):
        for element_id in ('library-search', 'topic-filter', 'brand-filter', 'type-filter'):
            self.assertIn(f'id="{element_id}"', HTML)

    def test_pagination_is_anchor_based(self):
        block = re.search(r'<nav class="pagination".*?</nav>', HTML, flags=re.S)
        self.assertIsNotNone(block)
        anchors = re.findall(r'<a\s+[^>]*href="[^"]+"', block.group(0))
        self.assertGreaterEqual(len(anchors), 5)

    def test_no_base64_or_external_script_dependency(self):
        self.assertNotIn('data:image', HTML.lower())
        external_scripts = re.findall(r'<script[^>]+src="https?://', HTML, flags=re.I)
        self.assertEqual(external_scripts, [])

    def test_css_has_responsive_and_reduced_motion_contract(self):
        self.assertIn('@media(max-width:1100px)', CSS)
        self.assertIn('@media(max-width:720px)', CSS)
        self.assertIn('@media(prefers-reduced-motion:reduce)', CSS)
        self.assertIn('.branch-grid', CSS)
        self.assertIn('.library-navigator', CSS)

    def test_js_has_filter_and_scrollspy_behavior(self):
        self.assertIn('function applyLibraryFilters()', JS)
        self.assertIn('IntersectionObserver', JS)
        self.assertIn("document.querySelector('#library-grid')", JS)
        self.assertIn("card.dataset.topic", JS)
        self.assertIn("card.dataset.brand", JS)
        self.assertIn("card.dataset.type", JS)

    def test_required_sections_exist(self):
        ids = [
            'overview', 'knowledge-tree', 'learn', 'foundation', 'compare',
            'cases', 'latest', 'trust', 'experts'
        ]
        for section_id in ids:
            self.assertRegex(HTML, rf'id="{re.escape(section_id)}"')

    def test_hub_nav_targets_existing_sections(self):
        nav = re.search(r'<nav class="shell hub-nav".*?</nav>', HTML, flags=re.S)
        self.assertIsNotNone(nav)
        targets = re.findall(r'href="#([^"]+)"', nav.group(0))
        self.assertGreaterEqual(len(targets), 8)
        for target in targets:
            self.assertIn(f'id="{target}"', HTML)


if __name__ == '__main__':
    unittest.main(verbosity=2)
