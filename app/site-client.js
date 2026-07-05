'use client';

import { useId, useState } from 'react';
import Link from 'next/link';

const topics = ['Gedenkstein', 'Steinlicht', 'Skulptur / Steinobjekt', 'Beratung', 'Sonstiges'];

export function SiteShell({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const nav = [
    ['Gedenksteine & Steinwerke', '/gedenksteine-steinwerke/'],
    ['Handwerk & Gestaltung', '/handwerk-gestaltung/'],
  ];

  return (
    <>
      <header className={'site-header' + (menuOpen ? ' is-open' : '')}>
        <a className="skip-link" href="#main">Zum Inhalt springen</a>
        <div className="topbar">
          <div className="container topbar__inner">
            <span>Steinmetz- und Steinbildhauer-Meister in Neunkirchen-Seelscheid/Eischeid</span>
            <a href="tel:+4922472386">Telefon 02247 2386</a>
          </div>
        </div>
        <div className="container nav-shell">
          <Link className="brand" href="/" aria-label="Steinmetzwerkstatt Harich Startseite">
            <img src="/assets/images/logo-harich.png" alt="Logo Steinmetzwerkstatt Harich" />
            <span><strong>Steinmetzwerkstatt Harich</strong><small>Einzigartigkeit in Stein seit 1958</small></span>
          </Link>
          <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="site-nav" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span><span></span><span></span><span className="sr-only">Menü öffnen</span>
          </button>
          <nav className="site-nav" id="site-nav" aria-label="Hauptnavigation">
            {nav.map(([label, href]) => <Link key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</Link>)}
          </nav>
          <div className="header-actions">
            <button className="button button--primary button--small" type="button" onClick={() => setContactOpen(true)}>Beratung anfragen</button>
            <a className="button button--secondary button--small" href="tel:+4922472386">Direkt anrufen</a>
          </div>
        </div>
      </header>
      <main id="main">{children}</main>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div><strong>Steinmetzwerkstatt Bruno Johannes Harich GmbH</strong><p>Zum Nüchel 17<br />53819 Neunkirchen-Seelscheid, Eischeid</p></div>
          <div><strong>Kontakt</strong><p><a href="tel:+4922472386">02247 2386</a><br /><a href="mailto:kontakt@steinmetzwerkstatt-harich.de">kontakt@steinmetzwerkstatt-harich.de</a></p></div>
          <div><strong>Leistungen</strong><p><Link href="/gedenksteine/">Gedenksteine</Link><br /><Link href="/gestaltung/">Gestaltung</Link><br /><Link href="/steinobjekte/">Steinobjekte</Link></p></div>
          <div><strong>Rechtliches</strong><p><Link href="/impressum/">Impressum</Link><br /><Link href="/datenschutz/">Datenschutz</Link></p></div>
        </div>
      </footer>
      <div className="mobile-contact" aria-label="Schnelle Kontaktaufnahme">
        <a href="tel:+4922472386">Anrufen</a>
        <button type="button" onClick={() => setContactOpen(true)}>Anfrage senden</button>
      </div>
      {contactOpen ? <ContactModal onClose={() => setContactOpen(false)} /> : null}
    </>
  );
}

function ContactModal({ onClose }) {
  return (
    <div className="modal-layer" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-card">
        <button className="modal-close" type="button" onClick={onClose} aria-label="Kontaktformular schließen">×</button>
        <p className="eyebrow">Schnelle Anfrage</p>
        <h2 id="modal-title">Beratung anfragen</h2>
        <ContactForm source="popup" />
      </div>
    </div>
  );
}

export function ContactForm({ source = 'seite' }) {
  const id = useId().replace(/:/g, '');
  const [status, setStatus] = useState('');
  const [busy, setBusy] = useState(false);

  async function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get('name') || '').trim(),
      reply: String(data.get('reply') || '').trim(),
      topic: String(data.get('topic') || '').trim(),
      message: String(data.get('message') || '').trim(),
      privacy: Boolean(data.get('privacy')),
      website: String(data.get('website') || '').trim(),
      source,
    };

    if (!payload.name || !payload.reply || !payload.topic || !payload.message || !payload.privacy) {
      setStatus('Bitte füllen Sie alle Felder aus und bestätigen Sie den Datenschutzhinweis.');
      return;
    }

    setBusy(true);
    setStatus('Ihre Anfrage wird gesendet...');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));
      setStatus(result.message || (response.ok ? 'Vielen Dank. Ihre Anfrage wurde gesendet.' : 'Die Anfrage konnte gerade nicht gesendet werden.'));
      if (response.ok) form.reset();
    } catch {
      setStatus('Die Anfrage konnte gerade nicht gesendet werden. Bitte rufen Sie direkt an.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="field hp-field" aria-hidden="true"><label>Website</label><input name="website" type="text" tabIndex="-1" autoComplete="off" /></div>
      <div className="field"><label htmlFor={id + '-name'}>Name</label><input id={id + '-name'} name="name" type="text" autoComplete="name" required /></div>
      <div className="field"><label htmlFor={id + '-reply'}>E-Mail oder Telefon</label><input id={id + '-reply'} name="reply" type="text" autoComplete="email" required /></div>
      <div className="field field--wide"><label htmlFor={id + '-topic'}>Anliegen</label><select id={id + '-topic'} name="topic" required><option value="">Bitte auswählen</option>{topics.map((topic) => <option key={topic}>{topic}</option>)}</select></div>
      <div className="field field--wide"><label htmlFor={id + '-message'}>Nachricht</label><textarea id={id + '-message'} name="message" rows="5" required /></div>
      <label className="check field--wide"><input name="privacy" type="checkbox" required /><span>Ich bin damit einverstanden, dass meine Angaben zur Bearbeitung der Anfrage verarbeitet werden. Hinweise stehen in der <Link href="/datenschutz/">Datenschutzerklärung</Link>.</span></label>
      <p className="form-note field--wide" aria-live="polite">{status}</p>
      <button className="button button--primary field--wide" type="submit" disabled={busy}>Anfrage senden</button>
    </form>
  );
}

export function ReviewsCarousel({ reviews }) {
  const [active, setActive] = useState(0);
  const review = reviews[active];
  return (
    <section className="review-band" aria-label="Rezensionen als Platzhalter">
      <div className="container review-shell">
        <div className="review-intro">
          <p className="eyebrow">Stimmen von Kunden</p>
          <h2>Ruhige Begleitung, persönliche Gestaltung</h2>
          <p>Dieser Bereich ist vorbereitet und wird später mit echten, freigegebenen Kundenstimmen gefüllt.</p>
        </div>
        <div className="review-card">
          <span className="placeholder-label">Platzhalter - später ersetzen</span>
          <blockquote>{review.quote}</blockquote>
          <p>{review.person}</p>
          <div className="review-controls" aria-label="Rezension wechseln">
            {reviews.map((item, index) => <button key={item.person} type="button" className={index === active ? 'is-active' : ''} onClick={() => setActive(index)}><span className="sr-only">Rezension {index + 1}</span></button>)}
          </div>
        </div>
      </div>
    </section>
  );
}

export function MapConsent() {
  const [show, setShow] = useState(false);
  return (
    <div className="map-consent">
      <h3>Anfahrt datensparsam ansehen</h3>
      <p>Eine externe Karte wird erst geladen, wenn Sie aktiv zustimmen.</p>
      {show ? <iframe title="Karte Steinmetzwerkstatt Harich" src="https://www.openstreetmap.org/export/embed.html?bbox=7.2702%2C50.8504%2C7.3302%2C50.8904&layer=mapnik" loading="lazy" /> : <button className="button button--secondary" type="button" onClick={() => setShow(true)}>Karte laden</button>}
    </div>
  );
}
