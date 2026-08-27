// Serves a real server-rendered "page 2" for /bi-gam/index-standard(.html)?page=2
// so bots/tools that don't execute JavaScript see the correct 11-product page
// instead of a client-side-only swap. Source of truth for page-2 markup is the
// <template id="auto365-bi-gam-page-two"> block already shipped inside the static
// index-standard.html file (kept as the no-JS fallback / hydration source).
//
// Only intercepts the bi-gam standard hub file with ?page=2; every other request
// under /bi-gam/ (including page 1 itself) passes through untouched.

const TARGET_PATHS = new Set([
  "/bi-gam/index-standard",
  "/bi-gam/index-standard.html",
]);

const ROOT_OPEN_TAG = '<div id="auto365-bi-gam-root">';
const ROOT_CLOSE_TAG = "</div>";
const TEMPLATE_OPEN_TAG = '<template id="auto365-bi-gam-page-two">';
const TEMPLATE_CLOSE_TAG = "</template>";

const PAGE_TWO_TITLE = "Bi Gầm | Auto365 – Trang 2";
const PAGE_TWO_DESCRIPTION =
  "Trang 2 danh mục Bi Gầm Auto365 với 11 sản phẩm và phụ kiện còn lại; xem giá sản phẩm, thông số và kiểm tra cấu hình theo xe trước khi lắp.";
const PAGE_TWO_CANONICAL = "https://auto365.vn/nang-cap-anh-sang-bi-gam?page=2";

function renderPageTwo(html) {
  const templateOpenIdx = html.indexOf(TEMPLATE_OPEN_TAG);
  const rootOpenIdx = html.indexOf(ROOT_OPEN_TAG);
  if (templateOpenIdx === -1 || rootOpenIdx === -1) {
    // Markup shape changed unexpectedly — fail open and serve page 1 rather
    // than risk shipping a broken page.
    return html;
  }

  const templateContentStart = templateOpenIdx + TEMPLATE_OPEN_TAG.length;
  const templateCloseIdx = html.indexOf(TEMPLATE_CLOSE_TAG, templateContentStart);
  if (templateCloseIdx === -1) return html;
  const pageTwoMain = html.slice(templateContentStart, templateCloseIdx);

  const rootCloseIdx = html.lastIndexOf(ROOT_CLOSE_TAG, templateOpenIdx);
  if (rootCloseIdx === -1 || rootCloseIdx < rootOpenIdx) return html;

  // The <template> block and the small inline script that swaps it into
  // #auto365-bi-gam-root client-side are now redundant for this response
  // (we already swapped server-side) — drop both so page 2 doesn't ship a
  // second inert copy of its own 11 products.
  const templateCloseTagEnd = templateCloseIdx + TEMPLATE_CLOSE_TAG.length;
  const swapScriptStart = html.indexOf("<script>", templateCloseTagEnd);
  const swapScriptEnd = html.indexOf("</script>", swapScriptStart) + "</script>".length;
  const tailAfterSwapScript =
    swapScriptStart !== -1 && swapScriptStart - templateCloseTagEnd < 40
      ? html.slice(swapScriptEnd)
      : html.slice(templateCloseTagEnd);

  let out =
    html.slice(0, rootOpenIdx) +
    ROOT_OPEN_TAG +
    pageTwoMain +
    ROOT_CLOSE_TAG +
    tailAfterSwapScript;

  // Head metadata for page 1 is static SSR content; overwrite it for this
  // page-2 response so a no-JS crawler still gets correct title/canonical.
  out = out.replace(
    /<title>[^<]*<\/title>/,
    `<title>${PAGE_TWO_TITLE}</title>`
  );
  out = out.replace(
    /(<meta name="description" content=")[^"]*(")/,
    `$1${PAGE_TWO_DESCRIPTION}$2`
  );
  out = out.replace(
    /(<meta property="og:title" content=")[^"]*(")/,
    `$1${PAGE_TWO_TITLE}$2`
  );
  out = out.replace(
    /(<meta property="og:description" content=")[^"]*(")/,
    `$1${PAGE_TWO_DESCRIPTION}$2`
  );
  out = out.replace(
    /(<meta name="twitter:title" content=")[^"]*(")/,
    `$1${PAGE_TWO_TITLE}$2`
  );
  out = out.replace(
    /(<meta name="twitter:description" content=")[^"]*(")/,
    `$1${PAGE_TWO_DESCRIPTION}$2`
  );
  out = out.replace(
    /(<link rel="canonical" href=")[^"]*(")/,
    `$1${PAGE_TWO_CANONICAL}$2`
  );
  out = out.replace(
    /(<meta property="og:url" content=")[^"]*(")/,
    `$1${PAGE_TWO_CANONICAL}$2`
  );

  return out;
}

export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);

  if (!TARGET_PATHS.has(url.pathname) || url.searchParams.get("page") !== "2") {
    return next();
  }

  const response = await next();
  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("text/html")) return response;

  const html = await response.text();
  const transformed = renderPageTwo(html);

  const headers = new Headers(response.headers);
  headers.set("content-length", String(new TextEncoder().encode(transformed).length));

  return new Response(transformed, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
