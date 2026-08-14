#!/usr/bin/env node

/**
 * Auto365 Den Gam Dang Roi V3.3 unified-hub regression suite.
 *
 * Dependency-free by design: this file only uses Node built-ins so the team can
 * run it in CI or beside the hand-off HTML without installing a browser stack.
 *
 * Usage:
 *   node tests/validate_v321.mjs
 *   node tests/validate_v321.mjs path/to/candidate.html
 */

import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const TEST_DIR = path.dirname(fileURLToPath(import.meta.url));
const EXPECTED_FILE = "Auto365_Den_Gam_Dang_Roi_V3.3_Unified_Hub_Candidate.html";
const TARGET = path.resolve(process.argv[2] || path.join(TEST_DIR, "..", "public", EXPECTED_FILE));
const CANONICAL = "https://auto365.vn/den-gam-dang-roi";
const PUBLISHED_ISO = "2026-08-12";
const MODIFIED_ISO = "2026-08-14";
const MODIFIED_DISPLAY = "14/08/2026";
const PRODUCT_DATA_VERSION_ISO = "2026-08-12";
const PAGE_VARIANT = "v3.3-unified-hub-candidate";
const BUILD_MARKER = `${PAGE_VARIANT}+2026-08-14`;

// Immutable parity contract for this hand-off artifact. This fixture verifies
// that HTML, runtime data and JSON-LD agree; it is not a claim that this test
// file is the business/product single source of truth.
const EXPECTED_PRODUCTS = new Map([
  ["m10v3", { name: "Titan Moto M10 Ultra V3", url: "https://auto365.vn/den-gam-dang-roi-titan-moto-m10-ultra-v3" }],
  ["f30", { name: "X-Light F30 Ultra", url: "https://auto365.vn/x-light-f30-ultra" }],
  ["m30u", { name: "Titan M30 Ultra", url: "https://auto365.vn/den-tro-sang-titan-m30-ultra" }],
  ["m30v2", { name: "Titan Moto M30 Ultra V2", url: "https://auto365.vn/den-tro-sang-titan-moto-m30-ultra-v2" }],
  ["m40", { name: "Titan M40 Ultra V2", url: "https://auto365.vn/den-tro-sang-titan-m40-ultra-v2" }],
]);

if (!fs.existsSync(TARGET)) {
  console.error(`FAIL: Khong tim thay file HTML: ${TARGET}`);
  process.exit(2);
}

const html = fs.readFileSync(TARGET, "utf8");

const ENTITY_MAP = {
  amp: "&",
  apos: "'",
  gt: ">",
  hellip: "…",
  laquo: "«",
  ldquo: "“",
  lsquo: "‘",
  lt: "<",
  mdash: "—",
  ndash: "–",
  nbsp: " ",
  quot: '"',
  raquo: "»",
  rdquo: "”",
  rsquo: "’",
  times: "×",
};

function decodeEntities(value) {
  return String(value).replace(/&(#x[\da-f]+|#\d+|[a-z][\da-z]+);/gi, (entity, key) => {
    if (key[0] === "#") {
      const radix = key[1]?.toLowerCase() === "x" ? 16 : 10;
      const number = Number.parseInt(key.slice(radix === 16 ? 2 : 1), radix);
      return Number.isFinite(number) ? String.fromCodePoint(number) : entity;
    }
    return Object.hasOwn(ENTITY_MAP, key.toLowerCase()) ? ENTITY_MAP[key.toLowerCase()] : entity;
  });
}

function normalizeText(value) {
  return decodeEntities(
    String(value)
      .replace(/<!--[\s\S]*?-->/g, " ")
      .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
      .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " "),
  )
    .replace(/[\u00a0\s]+/g, " ")
    .trim();
}

function parseAttributes(raw) {
  const attrs = Object.create(null);
  const withoutTagName = raw.replace(/^<\/?\s*[\w:-]+/, "").replace(/\/?\s*>$/, "");
  const pattern = /([^\s"'<>\/=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
  let match;
  while ((match = pattern.exec(withoutTagName))) {
    const key = match[1].toLowerCase();
    attrs[key] = decodeEntities(match[2] ?? match[3] ?? match[4] ?? "");
  }
  return attrs;
}

function maskRawTextElements(source) {
  return source.replace(/(<(script|style)\b[^>]*>)([\s\S]*?)(<\/\2\s*>)/gi, (_all, open, _tag, body, close) => {
    return open + " ".repeat(body.length) + close;
  });
}

function parseHtml(source) {
  const masked = maskRawTextElements(source);
  const root = { tag: "#document", attrs: {}, children: [], parent: null, start: 0, openEnd: 0, endStart: source.length, end: source.length };
  const nodes = [];
  const stack = [root];
  const voidTags = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]);
  const tokenPattern = /<!--[\s\S]*?-->|<![^>]*>|<\/?[a-z][^>]*>/gi;
  let token;
  while ((token = tokenPattern.exec(masked))) {
    const raw = token[0];
    if (raw.startsWith("<!--") || /^<!/.test(raw)) continue;
    const closing = /^<\//.test(raw);
    const tagMatch = raw.match(/^<\/?\s*([\w:-]+)/);
    if (!tagMatch) continue;
    const tag = tagMatch[1].toLowerCase();
    if (closing) {
      for (let index = stack.length - 1; index > 0; index -= 1) {
        if (stack[index].tag !== tag) continue;
        while (stack.length - 1 >= index) {
          const closed = stack.pop();
          if (closed === stack[index]) break;
          if (closed.endStart == null) {
            closed.endStart = token.index;
            closed.end = token.index;
          }
        }
        const closed = nodes.findLast((node) => node.tag === tag && node.endStart == null);
        if (closed) {
          closed.endStart = token.index;
          closed.end = tokenPattern.lastIndex;
        }
        break;
      }
      continue;
    }
    const parent = stack.at(-1);
    const node = {
      tag,
      attrs: parseAttributes(raw),
      children: [],
      parent,
      start: token.index,
      openEnd: tokenPattern.lastIndex,
      endStart: null,
      end: null,
    };
    parent.children.push(node);
    nodes.push(node);
    if (!voidTags.has(tag) && !/\/\s*>$/.test(raw)) stack.push(node);
    else {
      node.endStart = tokenPattern.lastIndex;
      node.end = tokenPattern.lastIndex;
    }
  }
  for (const node of nodes) {
    if (node.endStart == null) {
      node.endStart = source.length;
      node.end = source.length;
    }
  }
  return { root, nodes };
}

const parsed = parseHtml(html);

function classes(node) {
  return new Set((node?.attrs.class || "").split(/\s+/).filter(Boolean));
}

function descendants(node, predicate = () => true) {
  const output = [];
  const visit = (current) => {
    for (const child of current.children || []) {
      if (predicate(child)) output.push(child);
      visit(child);
    }
  };
  visit(node);
  return output;
}

function nodeText(node) {
  if (!node) return "";
  return normalizeText(html.slice(node.openEnd, node.endStart));
}

function byId(id) {
  return parsed.nodes.find((node) => node.attrs.id === id);
}

function metaValue(key, value) {
  return parsed.nodes.find((node) => node.tag === "meta" && node.attrs[key] === value)?.attrs.content;
}

function inputValue(name) {
  return parsed.nodes.find((node) => node.tag === "input" && node.attrs.name === name)?.attrs.value;
}

function sameSet(left, right) {
  if (left.size !== right.size) return false;
  return [...left].every((item) => right.has(item));
}

function detailsMessage(items, limit = 12) {
  const list = [...items];
  if (!list.length) return "";
  const shown = list.slice(0, limit).map((item) => `  - ${item}`);
  if (list.length > limit) shown.push(`  - ... va ${list.length - limit} loi khac`);
  return shown.join("\n");
}

function requireCondition(condition, message) {
  if (!condition) throw new Error(message);
}

function requireNoIssues(issues, heading) {
  if (issues.length) throw new Error(`${heading}\n${detailsMessage(issues)}`);
}

function tagLabel(node) {
  const id = node.attrs.id ? `#${node.attrs.id}` : "";
  const klass = node.attrs.class ? `.${node.attrs.class.trim().replace(/\s+/g, ".")}` : "";
  return `${node.tag}${id}${klass}`;
}

function findMatchingBrace(source, start) {
  requireCondition(source[start] === "{", `Expected "{" at offset ${start}`);
  let depth = 0;
  let quote = null;
  let escaped = false;
  let lineComment = false;
  let blockComment = false;
  for (let index = start; index < source.length; index += 1) {
    const char = source[index];
    const next = source[index + 1];
    if (lineComment) {
      if (char === "\n") lineComment = false;
      continue;
    }
    if (blockComment) {
      if (char === "*" && next === "/") {
        blockComment = false;
        index += 1;
      }
      continue;
    }
    if (quote) {
      if (escaped) escaped = false;
      else if (char === "\\") escaped = true;
      else if (char === quote) quote = null;
      continue;
    }
    if (char === "/" && next === "/") {
      lineComment = true;
      index += 1;
      continue;
    }
    if (char === "/" && next === "*") {
      blockComment = true;
      index += 1;
      continue;
    }
    if (char === '"' || char === "'" || char === "`") {
      quote = char;
      continue;
    }
    if (char === "{") depth += 1;
    if (char === "}") {
      depth -= 1;
      if (depth === 0) return index;
    }
  }
  throw new Error(`Unclosed brace beginning at offset ${start}`);
}

function extractObjectLiteral(source, variableName) {
  const pattern = new RegExp(`\\b(?:var|let|const)\\s+${variableName}\\s*=\\s*`);
  const match = pattern.exec(source);
  requireCondition(match, `Khong tim thay khai bao ${variableName}`);
  const start = source.indexOf("{", match.index + match[0].length);
  requireCondition(start >= 0, `Khong tim thay object literal cua ${variableName}`);
  const end = findMatchingBrace(source, start);
  return source.slice(start, end + 1);
}

function extractFunction(source, functionName) {
  const pattern = new RegExp(`\\bfunction\\s+${functionName}\\s*\\(`);
  const match = pattern.exec(source);
  if (!match) return null;
  const startBrace = source.indexOf("{", match.index + match[0].length);
  if (startBrace < 0) return null;
  const endBrace = findMatchingBrace(source, startBrace);
  return source.slice(match.index, endBrace + 1);
}

function scriptText(node) {
  return html.slice(node.openEnd, node.endStart);
}

const jsonLdNodes = parsed.nodes.filter((node) => node.tag === "script" && node.attrs.type === "application/ld+json");
const applicationScripts = parsed.nodes.filter((node) => node.tag === "script" && node.attrs.type !== "application/ld+json");
const appJs = applicationScripts.map(scriptText).join("\n");

let schema = null;
let graph = [];
try {
  if (jsonLdNodes.length === 1) {
    schema = JSON.parse(scriptText(jsonLdNodes[0]));
    graph = Array.isArray(schema?.["@graph"]) ? schema["@graph"] : [];
  }
} catch {
  // The schema parse test below reports the actionable failure.
}

function hasType(node, expected) {
  const types = Array.isArray(node?.["@type"]) ? node["@type"] : [node?.["@type"]];
  return types.includes(expected);
}

function graphNodeByType(expected) {
  return graph.find((node) => hasType(node, expected));
}

function graphNodeById(id) {
  return graph.find((node) => node?.["@id"] === id);
}

const results = [];
async function test(name, callback) {
  try {
    await callback();
    results.push({ name, ok: true });
  } catch (error) {
    results.push({ name, ok: false, error: error instanceof Error ? error.message : String(error) });
  }
}

await test("File hand-off, metadata va canonical", () => {
  const issues = [];
  if (path.basename(TARGET) !== EXPECTED_FILE) issues.push(`Ten file phai la ${EXPECTED_FILE}`);
  if (!/^<!doctype html>/i.test(html.trimStart())) issues.push("Thieu <!doctype html>");
  const htmlNode = parsed.nodes.find((node) => node.tag === "html");
  if (htmlNode?.attrs.lang !== "vi") issues.push('Thuoc tinh <html lang> phai bang "vi"');
  const titles = parsed.nodes.filter((node) => node.tag === "title");
  if (titles.length !== 1 || !nodeText(titles[0])) issues.push(`Can dung 1 <title>, hien co ${titles.length}`);
  const description = metaValue("name", "description");
  if (!description || description.length < 80 || description.length > 180) issues.push("Meta description phai co 80-180 ky tu");
  const canonicalNodes = parsed.nodes.filter((node) => node.tag === "link" && node.attrs.rel === "canonical");
  if (canonicalNodes.length !== 1 || canonicalNodes[0].attrs.href !== CANONICAL) issues.push(`Canonical phai duy nhat va bang ${CANONICAL}`);
  if (metaValue("property", "og:url") !== CANONICAL) issues.push("og:url khong khop canonical");
  if (metaValue("property", "og:title") !== nodeText(titles[0])) issues.push("og:title khong khop <title>");
  if (metaValue("name", "twitter:title") !== nodeText(titles[0])) issues.push("twitter:title khong khop <title>");
  const robots = metaValue("name", "robots") || "";
  if (!/\bindex\b/i.test(robots) || !/\bfollow\b/i.test(robots)) issues.push("Meta robots production phai cho phep index,follow");
  requireNoIssues(issues, "Metadata/canonical chua dat:");
});

await test("JSON-LD hop le, graph day du va tham chieu khong dut", () => {
  const issues = [];
  if (jsonLdNodes.length !== 1) issues.push(`Can dung 1 khoi JSON-LD, hien co ${jsonLdNodes.length}`);
  if (!schema) issues.push("JSON-LD khong parse duoc bang JSON.parse");
  if (schema?.["@context"] !== "https://schema.org") issues.push("@context phai la https://schema.org");
  if (!graph.length) issues.push("@graph dang rong hoac khong ton tai");
  const requiredTypes = ["Organization", "Person", "WebSite", "BreadcrumbList", "CollectionPage", "Article", "ImageObject", "FAQPage"];
  for (const type of requiredTypes) if (!graphNodeByType(type)) issues.push(`Thieu node schema ${type}`);
  const ids = graph.map((node) => node?.["@id"]).filter(Boolean);
  const duplicateSchemaIds = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicateSchemaIds.length) issues.push(`Schema trung @id: ${[...new Set(duplicateSchemaIds)].join(", ")}`);
  if (graph.some((node) => hasType(node, "Product") || hasType(node, "Offer"))) issues.push("Hub khong duoc chen Product/Offer schema vao graph hand-off");

  const localIds = new Set(ids);
  const references = [];
  const walk = (value) => {
    if (!value || typeof value !== "object") return;
    if (!Array.isArray(value) && Object.keys(value).length === 1 && typeof value["@id"] === "string") references.push(value["@id"]);
    for (const nested of Object.values(value)) walk(nested);
  };
  walk(schema);
  for (const reference of references) {
    if ((reference.startsWith(`${CANONICAL}#`) || reference.startsWith("https://auto365.vn/#")) && !localIds.has(reference)) {
      issues.push(`Tham chieu @id noi bo khong co node dich: ${reference}`);
    }
  }
  requireNoIssues(issues, "Schema graph chua dat:");
});

await test("5 san pham hien thi va product parity lock", () => {
  const issues = [];
  const productContainer = byId("productMobile");
  if (!productContainer) issues.push("Thieu #productMobile");
  const cards = productContainer ? descendants(productContainer, (node) => node.tag === "article" && classes(node).has("product-tile")) : [];
  if (cards.length !== 5) issues.push(`Danh muc phai co dung 5 product card, hien co ${cards.length}`);
  if (!/\.catalog-products\.product-mobile\s*\{[^}]*\bdisplay\s*:\s*(?:flex|grid)/i.test(html)) issues.push("Khong tim thay CSS hien thi .catalog-products.product-mobile");

  const cardRecords = new Map();
  for (const card of cards) {
    if (Object.hasOwn(card.attrs, "hidden") || card.attrs["aria-hidden"] === "true") issues.push(`Card bi an trong HTML: ${tagLabel(card)}`);
    const button = descendants(card, (node) => node.tag === "button" && Object.hasOwn(node.attrs, "data-product-fitment"))[0];
    const heading = descendants(card, (node) => node.tag === "h3")[0];
    const link = descendants(card, (node) => node.tag === "a" && /^https:\/\/auto365\.vn\//.test(node.attrs.href || ""))[0];
    const key = button?.attrs["data-product-fitment"];
    if (!key) {
      issues.push(`Card thieu data-product-fitment: ${nodeText(heading) || tagLabel(card)}`);
      continue;
    }
    if (cardRecords.has(key)) issues.push(`Product card trung SKU: ${key}`);
    cardRecords.set(key, { name: nodeText(heading), url: link?.attrs.href, card });
  }
  for (const [key, expected] of EXPECTED_PRODUCTS) {
    const card = cardRecords.get(key);
    if (!card) issues.push(`Thieu product card ${key} (${expected.name})`);
    else {
      if (card.name !== expected.name) issues.push(`Ten card ${key}: "${card.name}" != "${expected.name}"`);
      if (card.url !== expected.url) issues.push(`URL card ${key} khong khop parity contract`);
      if (key === "m10v3" && !classes(card.card).has("product-tile")) issues.push("M10 khong phai product card hien thi");
    }
  }
  const unexpectedKeys = [...cardRecords.keys()].filter((key) => !EXPECTED_PRODUCTS.has(key));
  if (unexpectedKeys.length) issues.push(`Card co SKU ngoai parity contract: ${unexpectedKeys.join(", ")}`);

  const statusText = nodeText(byId("catalogStatus"));
  if (!/\b5\b/.test(statusText)) issues.push(`#catalogStatus mac dinh phai ghi 5 mau, hien la "${statusText}"`);

  let products = null;
  try {
    products = vm.runInNewContext(`(${extractObjectLiteral(appJs, "PRODUCTS")})`, {}, { timeout: 500 });
  } catch (error) {
    issues.push(`Khong doc duoc PRODUCTS: ${error.message}`);
  }
  if (products) {
    const productKeys = new Set(Object.keys(products));
    if (!sameSet(productKeys, new Set(EXPECTED_PRODUCTS.keys()))) issues.push(`PRODUCTS phai co ${[...EXPECTED_PRODUCTS.keys()].join(", ")}; hien co ${[...productKeys].join(", ")}`);
    for (const [key, expected] of EXPECTED_PRODUCTS) {
      if (!products[key]) continue;
      if (products[key].id !== key) issues.push(`PRODUCTS.${key}.id khong khop key`);
      if (products[key].fullName !== expected.name) issues.push(`PRODUCTS.${key}.fullName khong khop "${expected.name}"`);
      if (products[key].url !== expected.url) issues.push(`PRODUCTS.${key}.url khong khop parity contract`);
    }
  }

  const productList = graphNodeById(`${CANONICAL}#product-list`);
  const schemaItems = productList?.itemListElement || [];
  if (productList?.numberOfItems !== 5 || schemaItems.length !== 5) issues.push(`Product ItemList phai co numberOfItems=5 va 5 ListItem`);
  const expectedByUrl = new Map([...EXPECTED_PRODUCTS.values()].map((item) => [item.url, item.name]));
  for (const [index, item] of schemaItems.entries()) {
    if (item.position !== index + 1) issues.push(`Product schema position ${index + 1} khong lien tuc`);
    if (expectedByUrl.get(item.url) !== item.name) issues.push(`Product schema sai ten/URL: ${item.name || "(rong)"}`);
  }
  if (!sameSet(new Set(schemaItems.map((item) => item.url)), new Set(expectedByUrl.keys()))) issues.push("Tap URL product schema khong khop parity contract 5 SKU");

  const compareBody = byId("compareBody");
  const rows = compareBody ? descendants(compareBody, (node) => node.tag === "tr") : [];
  if (rows.length !== 5) issues.push(`Bang so sanh phai co 5 dong, hien co ${rows.length}`);
  const tableNames = new Set(rows.map((row) => {
    const brand = descendants(row, (node) => classes(node).has("brand"))[0];
    const productName = descendants(row, (node) => classes(node).has("product-name"))[0];
    return normalizeText(`${nodeText(brand)} ${nodeText(productName)}`);
  }));
  if (!sameSet(tableNames, new Set([...EXPECTED_PRODUCTS.values()].map((item) => item.name)))) issues.push(`Ten trong bang khong khop 5 SKU: ${[...tableNames].join(" | ")}`);
  requireNoIssues(issues, "Product parity lock chua dat:");
});

await test("Ten M40 chuan xac tren moi be mat", () => {
  const issues = [];
  const badMatches = [...html.matchAll(/Titan Moto M40 Ultra V2/g)];
  if (badMatches.length) {
    const lines = badMatches.map((match) => html.slice(0, match.index).split("\n").length);
    issues.push(`Con ${badMatches.length} cho ghi sai "Titan Moto M40 Ultra V2" (dong ${[...new Set(lines)].slice(0, 12).join(", ")})`);
  }
  let products = null;
  try { products = vm.runInNewContext(`(${extractObjectLiteral(appJs, "PRODUCTS")})`, {}, { timeout: 500 }); } catch { /* covered elsewhere */ }
  if (products?.m40?.brand !== "Titan") issues.push(`PRODUCTS.m40.brand phai la "Titan"`);
  if (products?.m40?.fullName !== "Titan M40 Ultra V2") issues.push(`PRODUCTS.m40.fullName phai la "Titan M40 Ultra V2"`);
  requireNoIssues(issues, "Ten thuong mai M40 chua dong nhat:");
});

await test("3 case noi bat co link HTML tinh va thu vien CASES day du", () => {
  const issues = [];
  const caseList = graphNodeById(`${CANONICAL}#case-list`);
  const schemaItems = caseList?.itemListElement || [];
  if (caseList?.numberOfItems !== 3 || schemaItems.length !== 3) issues.push(`Case ItemList phai co numberOfItems=3 va 3 ListItem noi bat`);
  for (const [index, item] of schemaItems.entries()) if (item.position !== index + 1) issues.push(`Case schema position ${index + 1} khong lien tuc`);
  const schemaUrls = new Set(schemaItems.map((item) => item.url).filter(Boolean));
  if (schemaUrls.size !== 3) issues.push(`Schema case phai co 3 URL noi bat duy nhat, hien co ${schemaUrls.size}`);

  const anchorNodes = parsed.nodes.filter((node) => node.tag === "a" && node.attrs.href);
  const anchorsByHref = new Map();
  for (const anchor of anchorNodes) {
    const list = anchorsByHref.get(anchor.attrs.href) || [];
    list.push(anchor);
    anchorsByHref.set(anchor.attrs.href, list);
  }
  for (const item of schemaItems) {
    const anchors = anchorsByHref.get(item.url) || [];
    if (!anchors.length) issues.push(`Case chi co trong JS/schema, thieu <a href> tinh: ${item.url}`);
    else if (!anchors.some((anchor) => nodeText(anchor).length >= 5)) issues.push(`Link case khong co anchor text mo ta: ${item.url}`);
  }

  try {
    const cases = vm.runInNewContext(`(${extractObjectLiteral(appJs, "CASES")})`, {}, { timeout: 500 });
    const caseUrls = new Set(Object.values(cases).map((item) => item.url));
    if (Object.keys(cases).length !== 10) issues.push(`CASES phai co 10 record, hien co ${Object.keys(cases).length}`);
    for (const url of schemaUrls) if (!caseUrls.has(url)) issues.push(`Case noi bat khong nam trong thu vien CASES: ${url}`);
  } catch (error) {
    issues.push(`Khong doc duoc CASES: ${error.message}`);
  }
  requireNoIssues(issues, "Thu vien case tinh chua dat:");
});

await test("FAQ hien thi va FAQPage khop tung cau/tung chu", () => {
  const issues = [];
  const faqSection = byId("faq");
  const details = faqSection ? descendants(faqSection, (node) => node.tag === "details") : [];
  const faqSchema = graphNodeByType("FAQPage");
  const schemaQuestions = faqSchema?.mainEntity || [];
  if (details.length !== 8) issues.push(`FAQ hien thi phai co 8 details, hien co ${details.length}`);
  if (schemaQuestions.length !== 8) issues.push(`FAQPage phai co 8 Question, hien co ${schemaQuestions.length}`);
  const count = Math.max(details.length, schemaQuestions.length);
  for (let index = 0; index < count; index += 1) {
    const detail = details[index];
    const schemaQuestion = schemaQuestions[index];
    const visibleQuestion = nodeText(detail ? descendants(detail, (node) => node.tag === "summary")[0] : null);
    const visibleAnswer = nodeText(detail ? descendants(detail, (node) => node.tag === "p")[0] : null);
    const schemaQuestionText = normalizeText(schemaQuestion?.name || "");
    const schemaAnswerText = normalizeText(schemaQuestion?.acceptedAnswer?.text || "");
    if (visibleQuestion !== schemaQuestionText) issues.push(`FAQ ${index + 1} sai cau hoi: HTML="${visibleQuestion}" | schema="${schemaQuestionText}"`);
    if (visibleAnswer !== schemaAnswerText) issues.push(`FAQ ${index + 1} sai cau tra loi: HTML va schema khong trung khop`);
    if (schemaQuestion?.["@type"] !== "Question" || schemaQuestion?.acceptedAnswer?.["@type"] !== "Answer") issues.push(`FAQ schema ${index + 1} thieu Question/Answer type`);
  }
  requireNoIssues(issues, "FAQ fidelity chua dat:");
});

await test("Selector vuot 192 to hop va khong fallback sai", () => {
  const issues = [];
  let runtime;
  try {
    const productsLiteral = extractObjectLiteral(appJs, "PRODUCTS");
    const inBudgetSource = extractFunction(appJs, "inBudget");
    const selectorSource = extractFunction(appJs, "selectorResults");
    requireCondition(inBudgetSource, "Thieu function inBudget");
    requireCondition(selectorSource, "Thieu function selectorResults");
    runtime = vm.runInNewContext(
      `const PRODUCTS=${productsLiteral};${inBudgetSource}${selectorSource};({PRODUCTS,inBudget,selectorResults})`,
      {},
      { timeout: 1000 },
    );
  } catch (error) {
    throw new Error(`Khong extract/evaluate duoc selector: ${error.message}`);
  }

  const routes = ["city", "mixed", "highway", "rain"];
  const zones = ["near", "balanced", "depth", "unknown"];
  const budgets = ["under5", "5to6", "over6", "open"];
  const voltages = ["unknown", "12", "24"];
  const validRoute = new Set(routes);
  const validZone = new Set(["near", "balanced", "depth"]);
  const validSystems = new Set([12, 24]);
  const products = Object.values(runtime.PRODUCTS);
  if (products.length !== 5) issues.push(`Selector PRODUCTS phai co 5 SKU, hien co ${products.length}`);
  for (const product of products) {
    if (!product.id || !EXPECTED_PRODUCTS.has(product.id)) issues.push(`Selector co SKU la: ${product.id || "(rong)"}`);
    if (!Array.isArray(product.routes) || product.routes.some((route) => !validRoute.has(route))) issues.push(`${product.id}: routes khong hop le`);
    if (!Array.isArray(product.zones) || product.zones.some((zone) => !validZone.has(zone))) issues.push(`${product.id}: zones khong hop le`);
    if (!Array.isArray(product.systems) || !product.systems.length || product.systems.some((system) => !validSystems.has(system))) issues.push(`${product.id}: systems khong hop le`);
    if (!(product.price > 0)) issues.push(`${product.id}: price phai > 0`);
  }
  const twentyFourVoltIds = products.filter((product) => product.systems.includes(24)).map((product) => product.id);
  if (twentyFourVoltIds.length !== 1 || twentyFourVoltIds[0] !== "m40") issues.push(`24V chi duoc tra m40, hien co ${twentyFourVoltIds.join(", ") || "khong co"}`);

  let combinations = 0;
  const before = JSON.stringify(runtime.PRODUCTS);
  for (const route of routes) for (const zone of zones) for (const budget of budgets) for (const voltage of voltages) {
    combinations += 1;
    let result;
    try {
      result = runtime.selectorResults(route, zone, budget, voltage);
    } catch (error) {
      issues.push(`${route}/${zone}/${budget}/${voltage}: selector throw ${error.message}`);
      continue;
    }
    const items = Array.isArray(result?.items) ? result.items : [];
    const ids = items.map((item) => item.id);
    if (!Array.isArray(result?.items)) issues.push(`${route}/${zone}/${budget}/${voltage}: result.items khong phai array`);
    if (items.length > 3) issues.push(`${route}/${zone}/${budget}/${voltage}: tra ${items.length} ket qua (>3)`);
    if (new Set(ids).size !== ids.length) issues.push(`${route}/${zone}/${budget}/${voltage}: trung SKU trong shortlist`);
    const expectedDiagnosis = zone === "unknown" || voltage === "unknown";
    if (result?.needsDiagnosis !== expectedDiagnosis) issues.push(`${route}/${zone}/${budget}/${voltage}: needsDiagnosis sai`);

    const matching = products
      .filter((product) => product.routes.includes(route))
      .filter((product) => zone === "unknown" || product.zones.includes(zone))
      .filter((product) => voltage === "unknown" || product.systems.includes(Number(voltage)))
      .filter((product) => runtime.inBudget(product.price, budget))
      .sort((left, right) => right.cases - left.cases || left.price - right.price || left.fullName.localeCompare(right.fullName, "vi"))
      .slice(0, 3)
      .map((product) => product.id);
    if (ids.join("|") !== matching.join("|")) issues.push(`${route}/${zone}/${budget}/${voltage}: shortlist ${ids.join(",") || "rong"} != strict-match ${matching.join(",") || "rong"}`);
    if (voltage === "24" && items.some((item) => item.id !== "m40")) issues.push(`${route}/${zone}/${budget}/24: lo SKU khong ho tro 24V`);
  }
  if (combinations !== 192) issues.push(`Phai chay 192 to hop, da chay ${combinations}`);
  if (JSON.stringify(runtime.PRODUCTS) !== before) issues.push("selectorResults da mutate PRODUCTS");
  requireNoIssues(issues, "Selector regression chua dat:");
});

await test("Preview/demo host guard chan gui lead that", () => {
  const issues = [];
  const expressionMatch = appJs.match(/\bvar\s+isDemo\s*=\s*([^;]+);/);
  const helperSource = extractFunction(appJs, "isDemoEnvironment");
  if (!expressionMatch && !helperSource) issues.push("Thieu isDemo guard hoac isDemoEnvironment()");
  const evaluate = (hostname, protocol = "https:") => {
    const context = { location: { hostname, protocol } };
    if (helperSource) return vm.runInNewContext(`${helperSource};Boolean(isDemoEnvironment())`, context, { timeout: 300 });
    return vm.runInNewContext(`Boolean(${expressionMatch[1]})`, context, { timeout: 300 });
  };
  const cases = [
    ["preview-365group.pages.dev", "https:", true],
    ["branch-preview.pages.dev", "https:", true],
    ["example.chatgpt.site", "https:", true],
    ["localhost", "http:", true],
    ["", "file:", true],
    ["auto365.vn", "https:", false],
    ["www.auto365.vn", "https:", false],
    ["pages.dev.evil.example", "https:", false],
  ];
  if (expressionMatch || helperSource) {
    for (const [hostname, protocol, expected] of cases) {
      let actual;
      try { actual = evaluate(hostname, protocol); } catch (error) {
        issues.push(`Guard throw voi ${protocol}//${hostname}: ${error.message}`);
        continue;
      }
      if (actual !== expected) issues.push(`Guard ${protocol}//${hostname || "(empty host)"}: expected ${expected}, got ${actual}`);
    }
    const guardIndex = helperSource ? appJs.indexOf("isDemoEnvironment") : expressionMatch.index;
    const fetchIndex = appJs.indexOf("fetch(form.action");
    if (fetchIndex < 0 || guardIndex > fetchIndex) issues.push("Demo guard phai chay truoc fetch(form.action)");
  }
  requireNoIssues(issues, "Demo environment guard chua dat:");
});

await test("Fitment invalidation xoa ket qua/CRM context cu", () => {
  const issues = [];
  const invalidator = extractFunction(appJs, "invalidateFitmentResult");
  if (!invalidator) throw new Error("Thieu function invalidateFitmentResult()");
  const sync = extractFunction(appJs, "syncFitmentIntent") || "";
  const selectProduct = extractFunction(appJs, "selectProductForFitment") || "";
  if (!/\binvalidateFitmentResult\s*\(/.test(sync)) issues.push("syncFitmentIntent() phai goi invalidateFitmentResult() tren moi thay doi input");
  if (!/\binvalidateFitmentResult\s*\(/.test(selectProduct)) issues.push("selectProductForFitment() phai invalidate case cu khi doi SKU bang nut/card");
  if (!/fitmentForm input,#fitmentForm select/.test(appJs)) issues.push("Fitment change wiring phai bao phu moi input/select trong #fitmentForm");

  const initialHref = "https://auto365.vn/byd-m6-lap-den-gam-dang-roi-titan-m40-ultra-v2";
  function mockElement(values = {}) {
    const attrs = new Map(Object.entries(values.attrs || {}));
    return {
      value: values.value ?? "",
      textContent: values.textContent ?? "",
      hidden: values.hidden ?? false,
      href: values.href ?? "",
      required: false,
      dataset: {},
      style: {},
      classList: { add() {}, remove() {}, toggle() {} },
      setAttribute(name, value) { attrs.set(name, String(value)); if (name === "href") this.href = String(value); },
      removeAttribute(name) { attrs.delete(name); if (name === "href") this.href = ""; },
      getAttribute(name) { return attrs.get(name) ?? null; },
      focus() {},
    };
  }
  const elements = {
    fitmentTitle: mockElement({ textContent: "Có hồ sơ thi công để tham chiếu" }),
    fitmentCopy: mockElement({ textContent: "Auto365 đã công bố BYD M6 × Titan M40 Ultra V2." }),
    fitmentBadge: mockElement({ textContent: "Cùng xe và sản phẩm · vẫn cần xác minh" }),
    fitmentDetail: mockElement({ textContent: "Hồ sơ nguồn ghi 2024 Dynamic." }),
    fitmentCaseLink: mockElement({ textContent: "Xem hồ sơ tham chiếu", hidden: false, href: initialHref, attrs: { href: initialHref } }),
    fitmentPrimary: mockElement({ textContent: "Gửi ảnh đầu xe để xác nhận", href: "#booking", attrs: { href: "#booking" } }),
    bookingVehicle: mockElement({ value: "BYD M6 2024" }),
    bookingSku: mockElement({ value: "m40" }),
    bookingFitmentState: mockElement({ value: "case_reference" }),
    bookingRecommendationId: mockElement({ value: "old-recommendation" }),
    bookingPayload: mockElement({ value: JSON.stringify({ vehicle: "BYD M6", selected_sku: "m40", case_url: initialHref, state: "case_reference" }) }),
    fitmentProduct: mockElement({ value: "m10v3" }),
    fitmentVehicle: mockElement({ value: "ford-ecosport" }),
    fitmentYear: mockElement({ value: "2021" }),
    fitmentBumper: mockElement({ value: "modified" }),
    fitmentVoltage: mockElement({ value: "12" }),
  };
  const dollar = (selector) => {
    if (typeof selector !== "string") return selector;
    if (selector.startsWith("#")) return elements[selector.slice(1)] || mockElement();
    return mockElement();
  };
  const resetSource = extractFunction(appJs, "resetWorkflowContext") || "function resetWorkflowContext(){}";
  const context = {
    $: dollar,
    $$: () => [],
    PRODUCTS: Object.fromEntries([...EXPECTED_PRODUCTS].map(([key, item]) => [key, { id: key, ...item }])),
    track() {},
    resetWorkflowContext() {},
    syncFitmentIntent() {},
  };
  try {
    vm.runInNewContext(`${resetSource};${invalidator};invalidateFitmentResult();`, context, { timeout: 500 });
  } catch (error) {
    issues.push(`invalidateFitmentResult() throw trong harness: ${error.message}`);
  }
  if (!elements.fitmentCaseLink.hidden) issues.push("invalidate phai an #fitmentCaseLink");
  if (elements.fitmentCaseLink.getAttribute("href") != null || elements.fitmentCaseLink.href === initialHref) issues.push("invalidate phai xoa href case cu");
  if (/Có hồ sơ thi công/i.test(elements.fitmentTitle.textContent)) issues.push("invalidate van giu title ket qua case cu");
  if (/Cùng xe và sản phẩm/i.test(elements.fitmentBadge.textContent)) issues.push("invalidate van giu badge positive cu");
  if (/BYD M6/.test(elements.bookingVehicle.value)) issues.push("invalidate van giu bookingVehicle cu, co the gui sai xe vao CRM");
  if (elements.bookingFitmentState.value === "case_reference") issues.push("invalidate van giu fitment_state=case_reference");
  if (elements.bookingPayload.value) {
    try {
      const payload = JSON.parse(elements.bookingPayload.value);
      if (payload.case_url || payload.vehicle === "BYD M6" || payload.state === "case_reference") issues.push("invalidate van giu case_url/vehicle/state cu trong bookingPayload");
    } catch {
      issues.push("bookingPayload sau invalidate khong phai JSON hop le hoac chuoi rong");
    }
  }
  requireNoIssues(issues, "Fitment stale-state lock chua dat:");
});

await test("Khong co href rong/# va moi fragment co dich", () => {
  const issues = [];
  const anchors = parsed.nodes.filter((node) => node.tag === "a");
  for (const anchor of anchors) {
    const href = anchor.attrs.href;
    if (href === "#" || href === "") issues.push(`${tagLabel(anchor)} co href="${href}"`);
    if (href?.startsWith("#") && href.length > 1 && !byId(decodeURIComponent(href.slice(1)))) issues.push(`Fragment khong co ID dich: ${href}`);
    if (anchor.attrs.target === "_blank" && !/(^|\s)noopener(\s|$)/.test(anchor.attrs.rel || "")) issues.push(`target="_blank" thieu rel="noopener": ${href || "(khong href)"}`);
  }
  if (/\.href\s*=\s*["']#["']/.test(appJs)) issues.push("JavaScript con gan .href = '#' placeholder");
  requireNoIssues(issues, "Link/fragment chua dat:");
});

await test("Marker V3.3, build 14/08 va data source 12/08", () => {
  const issues = [];
  if (inputValue("page_variant") !== PAGE_VARIANT) issues.push(`page_variant phai la ${PAGE_VARIANT}, hien la ${inputValue("page_variant") || "(thieu)"}`);
  if (metaValue("name", "auto365-build") !== BUILD_MARKER) issues.push(`meta auto365-build phai la ${BUILD_MARKER}, hien la ${metaValue("name", "auto365-build") || "(thieu)"}`);
  if (inputValue("data_version") !== PRODUCT_DATA_VERSION_ISO) issues.push(`data_version phai giu ngay doi chieu nguon ${PRODUCT_DATA_VERSION_ISO}, hien la ${inputValue("data_version") || "(thieu)"}`);
  const datedNodes = graph.filter((node) => Object.hasOwn(node, "dateModified"));
  if (!datedNodes.length) issues.push("Schema thieu dateModified");
  for (const node of datedNodes) if (node.dateModified !== MODIFIED_ISO) issues.push(`${node["@type"] || node["@id"]}: dateModified=${node.dateModified}, can ${MODIFIED_ISO}`);
  const publishedNodes = graph.filter((node) => Object.hasOwn(node, "datePublished"));
  for (const node of publishedNodes) if (node.datePublished !== PUBLISHED_ISO) issues.push(`${node["@type"] || node["@id"]}: datePublished phai giu ${PUBLISHED_ISO}`);
  const trustbar = parsed.nodes.find((node) => classes(node).has("trustbar"));
  if (!nodeText(trustbar).includes(`Cập nhật ${MODIFIED_DISPLAY}`)) issues.push(`Trustbar phai hien "Cập nhật ${MODIFIED_DISPLAY}"`);
  const updatedTimes = parsed.nodes.filter((node) => node.tag === "time" && node.attrs.datetime === MODIFIED_ISO && nodeText(node) === MODIFIED_DISPLAY);
  if (updatedTimes.length < 2) issues.push(`Can it nhat 2 <time datetime="${MODIFIED_ISO}">${MODIFIED_DISPLAY}</time>, hien co ${updatedTimes.length}`);
  requireNoIssues(issues, "Version/date markers chua dat:");
});

await test("Tat ca anh co alt va kich thuoc; hero/schema dong nhat", () => {
  const issues = [];
  const images = parsed.nodes.filter((node) => node.tag === "img");
  if (!images.length) issues.push("Trang khong co anh");
  for (const [index, image] of images.entries()) {
    const label = image.attrs.src?.split("/").at(-1)?.slice(0, 70) || `img ${index + 1}`;
    if (!normalizeText(image.attrs.alt || "")) issues.push(`${label}: thieu alt co nghia`);
    const width = Number(image.attrs.width);
    const height = Number(image.attrs.height);
    if (!Number.isInteger(width) || width <= 0 || !Number.isInteger(height) || height <= 0) issues.push(`${label}: thieu width/height nguyen duong`);
  }
  const heroImage = images.find((image) => image.attrs.fetchpriority === "high") || images[0];
  const schemaImage = graphNodeById(`${CANONICAL}#hero-image`);
  if (!schemaImage) issues.push("Thieu hero ImageObject schema");
  else if (heroImage) {
    if (schemaImage.url !== heroImage.attrs.src) issues.push("Hero ImageObject.url khong khop anh hero HTML");
    if (Number(schemaImage.width) !== Number(heroImage.attrs.width) || Number(schemaImage.height) !== Number(heroImage.attrs.height)) issues.push("Hero ImageObject width/height khong khop anh hero HTML");
  }
  const ogImage = metaValue("property", "og:image");
  if (heroImage && ogImage !== heroImage.attrs.src) issues.push("og:image khong khop anh hero");
  if (metaValue("name", "twitter:image") !== ogImage) issues.push("twitter:image khong khop og:image");
  requireNoIssues(issues, "Image/CLS/schema fidelity chua dat:");
});

await test("Heading outline va top-level section semantic", () => {
  const issues = [];
  const headings = parsed.nodes.filter((node) => /^h[1-6]$/.test(node.tag));
  const h1s = headings.filter((node) => node.tag === "h1");
  if (h1s.length !== 1) issues.push(`Can dung 1 H1, hien co ${h1s.length}`);
  for (const heading of headings) if (!nodeText(heading)) issues.push(`${tagLabel(heading)} khong co noi dung`);
  for (const heading of headings.filter((node) => node.tag !== "h2" && classes(node).has("h2"))) issues.push(`${tagLabel(heading)} dung class .h2 nhung sai cap heading`);

  const main = byId("main-content") || parsed.nodes.find((node) => node.tag === "main");
  if (!main) issues.push("Thieu <main>");
  else {
    const topSections = main.children.filter((node) => node.tag === "section");
    for (const section of topSections) {
      const firstHeading = descendants(section, (node) => /^h[1-6]$/.test(node.tag))[0];
      const expectedTag = section.attrs.id === "top" || classes(section).has("hero") ? "h1" : "h2";
      if (!firstHeading) issues.push(`${tagLabel(section)} thieu heading (them H2 sr-only neu can giu UI)`);
      else if (firstHeading.tag !== expectedTag) issues.push(`${tagLabel(section)} mo bang <${firstHeading.tag}>; can <${expectedTag}>`);
    }
  }
  requireNoIssues(issues, "Heading outline chua dat:");
});

await test("Khong trung HTML id va ARIA/form references co dich", () => {
  const issues = [];
  const idNodes = parsed.nodes.filter((node) => node.attrs.id);
  const ids = new Map();
  for (const node of idNodes) {
    const existing = ids.get(node.attrs.id) || [];
    existing.push(node);
    ids.set(node.attrs.id, existing);
  }
  for (const [id, nodes] of ids) if (nodes.length > 1) issues.push(`ID #${id} xuat hien ${nodes.length} lan`);
  for (const label of parsed.nodes.filter((node) => node.tag === "label" && node.attrs.for)) if (!ids.has(label.attrs.for)) issues.push(`<label for="${label.attrs.for}"> khong co control dich`);
  const ariaReferenceAttrs = ["aria-controls", "aria-describedby", "aria-labelledby"];
  for (const node of parsed.nodes) for (const attr of ariaReferenceAttrs) {
    if (!node.attrs[attr]) continue;
    for (const id of node.attrs[attr].split(/\s+/)) if (id && !ids.has(id)) issues.push(`${tagLabel(node)} ${attr} tro toi #${id} khong ton tai`);
  }
  requireNoIssues(issues, "ID/reference integrity chua dat:");
});

console.log(`\nAuto365 V3.3 regression: ${path.basename(TARGET)}`);
for (const result of results) {
  console.log(`${result.ok ? "PASS" : "FAIL"}  ${result.name}`);
  if (!result.ok) console.log(result.error.split("\n").map((line) => `      ${line}`).join("\n"));
}
const passed = results.filter((result) => result.ok).length;
const failed = results.length - passed;
console.log(`\nTong: ${passed}/${results.length} nhom PASS; ${failed} nhom FAIL.`);
if (failed) {
  console.log("Production gate: HOLD — sua het regression truoc khi ban giao/live.");
  process.exitCode = 1;
} else {
  console.log("Candidate gate: PASS — tat ca invariant ke thua tu V3.2.1 da duoc khoa.");
}
