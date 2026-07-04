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
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const note = form.querySelector('[data-form-note]');
      const name = String(data.get('name') || '').trim();
      const reply = String(data.get('reply') || '').trim();
      const topic = String(data.get('topic') || '').trim();
      const message = String(data.get('message') || '').trim();
      const privacy = data.get('privacy');
      if (!name || !reply || !topic || !message || !privacy) {
        if (note) note.textContent = 'Bitte füllen Sie alle Felder aus und bestätigen Sie den Datenschutzhinweis.';
        return;
      }
      const subject = encodeURIComponent('Anfrage über die Website: ' + topic);
      const body = encodeURIComponent([
        'Name: ' + name,
        'Kontakt: ' + reply,
        'Anliegen: ' + topic,
        '',
        'Nachricht:',
        message
      ].join('\n'));
      window.location.href = 'mailto:kontakt@steinmetzwerkstatt-harich.de?subject=' + subject + '&body=' + body;
      if (note) note.textContent = 'Ihr E-Mail-Programm wird geöffnet. Falls nicht, schreiben Sie bitte direkt an kontakt@steinmetzwerkstatt-harich.de.';
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