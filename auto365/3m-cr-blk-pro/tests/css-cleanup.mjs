import { readFile } from 'node:fs/promises';
import * as csstree from 'css-tree';
const html = await readFile('auto365/3m-cr-blk-pro/index.html', 'utf8');
const body = html.slice(html.indexOf('<body'));
const edits = [];
const rules = [];
let unused = 0, superseded = 0;
for (const match of html.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/g)) {
  const css = match[1], offset = match.index + match[0].indexOf('>') + 1;
  const ast = csstree.parse(css, { positions: true });
  function visit(list, context = '') {
    list.forEach(node => {
      if (node.type === 'Atrule' && node.block) visit(node.block.children, context + '@' + node.name + ':' + (node.prelude ? csstree.generate(node.prelude) : ''));
      if (node.type !== 'Rule' || node.prelude.type !== 'SelectorList') return;
      const selectors = node.prelude.children.toArray();
      const dead = selectors.every(selector => {
        let missing = false, functional = false;
        csstree.walk(selector, child => {
          if (child.type === 'PseudoClassSelector' && child.children) functional = true;
          if (child.type === 'ClassSelector' && !body.includes(child.name)) missing = true;
        });
        return missing && !functional;
      });
      if (dead) { edits.push({ start: offset + node.loc.start.offset, end: offset + node.loc.end.offset }); unused++; return; }
      rules.push({ node, offset, css, key: context + '|' + csstree.generate(node.prelude) });
    });
  }
  visit(ast.children);
}
const later = new Map();
for (const { node, offset, css, key } of (process.argv.includes('--declarations') ? rules.reverse() : [])) {
  for (const decl of node.block.children.toArray().reverse()) {
    if (decl.type !== 'Declaration') continue;
    const k = key + '|' + decl.property;
    const existing = later.get(k);
    if (existing !== undefined && (existing || !decl.important)) {
      let end = decl.loc.end.offset;
      if (css[end] === ';') end++;
      edits.push({ start: offset + decl.loc.start.offset, end: offset + end });
      superseded++;
    } else later.set(k, !!decl.important);
  }
}
let cleaned = html;
for (const e of edits.sort((a,b) => b.start-a.start)) cleaned = cleaned.slice(0,e.start) + cleaned.slice(e.start,e.end).replace(/[^\r\n]/g,'') + cleaned.slice(e.end);
// Empty rules have no effect; remove them within CSS only.
cleaned = cleaned.replace(/<style\b[^>]*>[\s\S]*?<\/style>/g, block => block.replace(/[^{}<>]+\{\s*\}/g, match => match.replace(/[^\r\n]/g,'')));
console.log(JSON.stringify({ unusedRules: unused, supersededDeclarations: superseded, saved: html.length-cleaned.length, lines: html.split(/\r?\n/).map((old,i) => ({old,new:cleaned.split(/\r?\n/)[i]})).filter(e => e.old !== e.new) }));
