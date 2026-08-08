from pathlib import Path
from bs4 import BeautifulSoup

ROOT = Path('/mnt/data/auto365-newsroom-v2-mockup')
html_path = ROOT / 'index.html'
css_path = ROOT / 'mockup.css'
js_path = ROOT / 'mockup.js'

assert html_path.exists(), 'index.html missing'
assert css_path.exists(), 'mockup.css missing'
assert js_path.exists(), 'mockup.js missing'

html = html_path.read_text(encoding='utf-8')
css = css_path.read_text(encoding='utf-8')
js = js_path.read_text(encoding='utf-8')
soup = BeautifulSoup(html, 'html.parser')

h1 = soup.find('h1')
assert h1 and 'Tin tức Auto365' in h1.get_text(' ', strip=True)

ids = [el.get('id') for el in soup.find_all(id=True)]
for required in ['global-finder', 'service-guides', 'vehicle-cases', 'content-feed', 'trust']:
    assert required in ids, f'missing section #{required}'

order = {name: html.index(f'id="{name}"') for name in ['global-finder','service-guides','vehicle-cases','content-feed','trust']}
assert order['global-finder'] < order['service-guides'] < order['vehicle-cases'] < order['content-feed'] < order['trust']

vehicle = soup.find(id='vehicle-cases')
for select_id in ['case-brand', 'case-model', 'case-service']:
    assert vehicle.find(id=select_id), f'missing {select_id}'

service = soup.find(id='service-guides')
service_names = service.get_text(' ', strip=True)
for label in ['Phim cách nhiệt','Ánh sáng ô tô','Camera ô tô','PPF & Wrap','Đồ chơi xe']:
    assert label in service_names, f'missing service guide {label}'

# No standalone featured section in the new compact information architecture.
assert not soup.find(id='featured')

# Global finder covers content-wide discovery dimensions, not vehicle make/model.
finder = soup.find(id='global-finder')
for select_id in ['filter-type','filter-topic','filter-need']:
    assert finder.find(id=select_id), f'missing {select_id}'
assert not finder.find(id='case-brand')

assert 'data-case-brand' in html and 'data-case-service' in html
assert 'applyGlobalFilters' in js
assert 'applyCaseFilters' in js
assert '@media (max-width: 760px)' in css
assert 'overflow-x: auto' in css
print('PASS: mockup structure and interaction contract')
