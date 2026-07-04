import { NextResponse } from 'next/server';

const TOPICS = new Set(['Gedenkstein', 'Steinlicht', 'Skulptur / Steinobjekt', 'Beratung', 'Sonstiges']);

function clean(value, max = 2000) {
  return String(value || '').trim().slice(0, max);
}

function isReasonableReply(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || /^[+()\d\s/-]{6,}$/.test(value);
}

export async function POST(request) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: 'Ungültige Anfrage.' }, { status: 400 });
  }

  const honeypot = clean(payload.website, 200);
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(payload.name, 160);
  const reply = clean(payload.reply, 200);
  const topic = clean(payload.topic, 80);
  const message = clean(payload.message, 4000);
  const privacy = Boolean(payload.privacy);

  if (!name || !reply || !topic || !message || !privacy) {
    return NextResponse.json({ ok: false, message: 'Bitte füllen Sie alle Pflichtfelder aus.' }, { status: 400 });
  }

  if (!TOPICS.has(topic) || !isReasonableReply(reply)) {
    return NextResponse.json({ ok: false, message: 'Bitte prüfen Sie Ihre Kontaktdaten.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || 'kontakt@steinmetzwerkstatt-harich.de';
  const from = process.env.CONTACT_FROM_EMAIL || 'Steinmetzwerkstatt Harich <onboarding@resend.dev>';

  if (!apiKey) {
    return NextResponse.json(
      { ok: false, message: 'Das Formular ist noch nicht vollständig konfiguriert. Bitte rufen Sie an oder schreiben Sie direkt eine E-Mail.' },
      { status: 503 }
    );
  }

  const text = [
    'Neue Website-Anfrage',
    '',
    'Name: ' + name,
    'Kontakt: ' + reply,
    'Anliegen: ' + topic,
    '',
    'Nachricht:',
    message,
    '',
    'DSGVO-Einwilligung: ja',
  ].join('\n');

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: reply.includes('@') ? reply : undefined,
      subject: 'Website-Anfrage: ' + topic,
      text,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { ok: false, message: 'Die Anfrage konnte gerade nicht gesendet werden. Bitte versuchen Sie es später erneut oder rufen Sie direkt an.' },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true, message: 'Vielen Dank. Ihre Anfrage wurde gesendet.' });
}
