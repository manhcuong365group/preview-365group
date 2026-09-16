function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' }
  });
}

export async function onRequestPost({ request, env }) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return json({ ok: false, error: 'invalid_json' }, 400);
  }

  const name = String(payload?.name || '').trim();
  const phone = String(payload?.phone || '').trim();
  if (!name || !phone) return json({ ok: false, error: 'name_and_phone_required' }, 422);

  const webhook = String(env.LEAD_WEBHOOK_URL || '').trim();
  if (!webhook) return json({ ok: false, error: 'webhook_not_configured' }, 501);

  const response = await fetch(webhook, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      ...payload,
      name,
      phone,
      received_at: new Date().toISOString()
    })
  });
  if (!response.ok) return json({ ok: false, error: 'webhook_failed' }, 502);
  return json({ ok: true });
}
