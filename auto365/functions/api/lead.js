// Cloudflare Pages Function: POST /api/lead
// Forwards lead-form submissions to an external webhook (Slack, Google Sheets
// Apps Script, Zapier/Make, ...) configured via the LEAD_WEBHOOK_URL
// environment variable in the Cloudflare Pages project settings.
// If that variable is not set, the endpoint responds 501 and does nothing —
// callers must treat this as best-effort and keep their existing fallback
// (this project's forms always also hand off to Zalo regardless of this
// endpoint's result).
export async function onRequestPost(context) {
  const { request, env } = context;

  let data;
  try {
    data = await request.json();
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: 'invalid_json' }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    });
  }

  if (!env.LEAD_WEBHOOK_URL) {
    return new Response(JSON.stringify({ ok: false, error: 'webhook_not_configured' }), {
      status: 501,
      headers: { 'content-type': 'application/json' },
    });
  }

  try {
    await fetch(env.LEAD_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        ...data,
        received_at: new Date().toISOString(),
      }),
    });
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: 'webhook_failed' }), {
      status: 502,
      headers: { 'content-type': 'application/json' },
    });
  }
}
