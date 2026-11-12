// Receives the form, filters junk, and forwards the lead to the Google Sheet (Apps Script web app).

const PHONE_RE = /^[6-9]\d{9}$/;
const FAKE_RE = /^(\d)\1{9}$|^9876543210$|^1234567890$/;
const COURSES = new Set(["makeup", "parlour", "hair", "nail", "brand"]);

function clip(v: unknown, max = 120) {
  return String(v ?? "").replace(/[\r\n\t]/g, " ").trim().slice(0, max);
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  const name = clip(body.name, 80);
  const phone = clip(body.phone, 10);
  const course = COURSES.has(String(body.course)) ? String(body.course) : "brand";
  const elapsed = Number(body.elapsed) || 0;

  // Bots: honeypot filled, or form submitted faster than a person could type.
  // Answer "ok" so the bot does not retry, but do not save it.
  if (clip(body.website) !== "" || (elapsed > 0 && elapsed < 2500)) {
    return Response.json({ ok: true });
  }

  if (name.length < 2 || !PHONE_RE.test(phone) || FAKE_RE.test(phone)) {
    return Response.json({ ok: false, error: "invalid" }, { status: 422 });
  }

  const url = process.env.LEADS_WEBHOOK_URL;
  if (!url) {
    console.error("LEADS_WEBHOOK_URL is not set");
    return Response.json({ ok: false, error: "not_configured" }, { status: 500 });
  }

  const payload = {
    secret: process.env.LEADS_SECRET || "",
    name,
    phone,
    course,
    page: clip(body.page),
    gclid: clip(body.gclid, 200),
    keyword: clip(body.keyword),
    utm_source: clip(body.utm_source),
    utm_campaign: clip(body.utm_campaign),
    userAgent: clip(request.headers.get("user-agent"), 200),
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
      redirect: "follow",
    });
    if (!res.ok) throw new Error(`Sheet responded ${res.status}`);
    const out = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
    if (!out?.ok) throw new Error(`Sheet rejected: ${out?.error ?? "no JSON"}`);
  } catch (err) {
    console.error("Lead forward failed", err);
    return Response.json({ ok: false, error: "forward_failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
