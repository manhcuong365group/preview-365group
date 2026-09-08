import { chromium } from 'playwright';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
const html = await readFile('auto365/3m-cr-blk-pro/index.html','utf8');
const browser = await chromium.launch();
const results = [];
try {
  for (const width of [375,768,1024,1440]) {
    const page = await browser.newPage({viewport:{width,height:900}});
    await page.route('**/*', r => r.abort());
    await page.setContent(html);
    for(const modal of [false,true]) {
      if(modal) await page.evaluate(()=>document.body.classList.add('form-modal-open'));
      const values = await page.evaluate(()=> [...document.querySelectorAll('body *')].filter(e=>!['SCRIPT','STYLE','SVG','SYMBOL','PATH','USE'].includes(e.tagName)).map(e=> {
        const s=getComputedStyle(e);
        return ['display','position','width','height','padding','margin','gap','font-size','font-weight','line-height','color','background-color','border','grid-template-columns','align-items','overflow','transform','box-shadow'].map(p=>s.getPropertyValue(p));
      }));
      results.push({width,modal,hash:createHash('sha256').update(JSON.stringify(values)).digest('hex')});
    }
    await page.close();
  }
} finally {await browser.close();}
console.log(JSON.stringify(results));
