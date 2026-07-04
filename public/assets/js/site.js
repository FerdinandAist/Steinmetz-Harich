(() => {
  const header = document.querySelector('[data-header]');
  const menuToggle = document.querySelector('[data-menu-toggle]');
  if (menuToggle && header) {
    menuToggle.addEventListener('click', () => {
      const open = header.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(open));
    });
  }

  const modal = document.querySelector('[data-contact-modal]');
  const openers = document.querySelectorAll('[data-open-contact]');
  const closers = document.querySelectorAll('[data-close-contact]');
  openers.forEach((button) => button.addEventListener('click', () => {
    if (!modal) return;
    if (typeof modal.showModal === 'function') modal.showModal();
    else modal.setAttribute('open', '');
    const first = modal.querySelector('input, select, textarea, button');
    if (first) first.focus();
  }));
  closers.forEach((button) => button.addEventListener('click', () => modal && modal.close()));
  if (modal) {
    modal.addEventListener('click', (event) => {
      if (event.target === modal) modal.close();
    });
  }

  document.querySelectorAll('[data-contact-form]').forEach((form) => {
    const existingHp = form.querySelector('input[name="website"]');
    if (!existingHp) {
      const hp = document.createElement('div');
      hp.className = 'field hp-field';
      hp.setAttribute('aria-hidden', 'true');
      hp.innerHTML = '<label>Website</label><input name="website" type="text" tabindex="-1" autocomplete="off">';
      form.prepend(hp);
    }

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const note = form.querySelector('[data-form-note]');
      const button = form.querySelector('button[type="submit"]');
      const payload = {
        name: String(data.get('name') || '').trim(),
        reply: String(data.get('reply') || '').trim(),
        topic: String(data.get('topic') || '').trim(),
        message: String(data.get('message') || '').trim(),
        privacy: Boolean(data.get('privacy')),
        website: String(data.get('website') || '').trim(),
      };

      if (!payload.name || !payload.reply || !payload.topic || !payload.message || !payload.privacy) {
        if (note) note.textContent = 'Bitte füllen Sie alle Felder aus und bestätigen Sie den Datenschutzhinweis.';
        return;
      }

      if (note) note.textContent = 'Ihre Anfrage wird gesendet...';
      if (button) button.disabled = true;

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        const result = await response.json().catch(() => ({}));
        if (!response.ok || !result.ok) throw new Error(result.message || 'Die Anfrage konnte nicht gesendet werden.');
        form.reset();
        if (note) note.textContent = result.message || 'Vielen Dank. Ihre Anfrage wurde gesendet.';
      } catch (error) {
        if (note) note.textContent = error.message || 'Die Anfrage konnte nicht gesendet werden. Bitte rufen Sie direkt an oder schreiben Sie eine E-Mail.';
      } finally {
        if (button) button.disabled = false;
      }
    });
  });

  document.querySelectorAll('[data-load-map]').forEach((button) => {
    button.addEventListener('click', () => {
      const wrap = button.closest('[data-map]');
      const target = wrap && wrap.querySelector('[data-map-target]');
      if (!target || target.dataset.loaded) return;
      target.dataset.loaded = 'true';
      target.innerHTML = '<iframe title="Karte zur Steinmetzwerkstatt Harich" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.openstreetmap.org/export/embed.html?bbox=7.308%2C50.84%2C7.42%2C50.91&layer=mapnik&marker=50.875%2C7.357"></iframe>';
      button.remove();
    });
  });
})();