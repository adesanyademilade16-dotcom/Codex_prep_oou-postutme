// ===========================================================
// CODEX PREP — SVG ICON SYSTEM
// Replaces emoji with consistent stroke-based SVG icons.
// Usage: <span data-icon="home"></span>
// Include this script (plain, non-module) on any page that
// uses data-icon spans — it runs automatically on load.
// ===========================================================
(function () {
  const ICONS = {
    home: '<path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v9a1 1 0 0 0 1 1H9.5v-6h5v6H17.5a1 1 0 0 0 1-1v-9"/>',
    exam: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 3v2h6V3"/><path d="M8 10h8M8 13.5h8M8 17h5"/>',
    calculator: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8"/><circle cx="8" cy="12" r=".9" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r=".9" fill="currentColor" stroke="none"/><circle cx="16" cy="12" r=".9" fill="currentColor" stroke="none"/><circle cx="8" cy="16" r=".9" fill="currentColor" stroke="none"/><circle cx="12" cy="16" r=".9" fill="currentColor" stroke="none"/><path d="M15.2 15.2 16.8 16.8M16.8 15.2 15.2 16.8"/>',
    trophy: '<path d="M7 4h10v4a5 5 0 0 1-10 0V4Z"/><path d="M7 5H4.5A1.5 1.5 0 0 0 3 6.5 3.5 3.5 0 0 0 6.5 10H7"/><path d="M17 5h2.5A1.5 1.5 0 0 1 21 6.5 3.5 3.5 0 0 1 17.5 10H17"/><path d="M12 13v3"/><path d="M8.5 20h7"/><path d="M10 16.5h4l.7 3.5H9.3l.7-3.5Z"/>',
    profile: '<circle cx="12" cy="8.5" r="3.5"/><path d="M5 20c0-3.6 3.1-6.5 7-6.5s7 2.9 7 6.5"/>',
    back: '<path d="M14.5 5 7.5 12l7 7"/>',
    flask: '<path d="M9.5 3h5M10 3v6l-5.2 8.5A2 2 0 0 0 6.5 20.5h11a2 2 0 0 0 1.7-3L14 9V3"/><path d="M8 15h8"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M12 3v2.2M12 18.8V21M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M3 12h2.2M18.8 12H21M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6"/>',
    dna: '<path d="M7 3c0 5 10 5 10 10s-10 5-10 10"/><path d="M17 3c0 5-10 5-10 10s10 5 10 10"/><path d="M8 7h8M7.5 12h9M8 17h8"/>',
    book: '<path d="M5 4.5A1.5 1.5 0 0 1 6.5 3H12v18H6.5A1.5 1.5 0 0 1 5 19.5v-15Z"/><path d="M19 4.5A1.5 1.5 0 0 0 17.5 3H12v18h5.5a1.5 1.5 0 0 0 1.5-1.5v-15Z"/>',
    globe: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.5 2.3 3.8 5.3 3.8 8.5s-1.3 6.2-3.8 8.5c-2.5-2.3-3.8-5.3-3.8-8.5S9.5 5.8 12 3.5Z"/>',
    document: '<path d="M7 3h7l4 4v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/><path d="M14 3v4h4"/><path d="M9 13h6M9 16.5h6"/>',
    target: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/>',
    chart: '<path d="M4 20V10M11 20V4M18 20v-7"/><path d="M3 20.5h18"/>',
    card: '<rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3 9.5h18"/><path d="M6.5 14.5h4"/>',
    lock: '<rect x="5.5" y="10.5" width="13" height="9.5" rx="2"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/>',
    logout: '<path d="M9 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3"/><path d="M15 16l4-4-4-4"/><path d="M19 12H9"/>',
    monitor: '<rect x="3" y="4.5" width="18" height="12" rx="2"/><path d="M8 20h8M12 16.5V20"/>',
    check: '<path d="M5 12.5 9.5 17 19 6.5"/>',
  };

  function renderIcons(root) {
    (root || document).querySelectorAll('[data-icon]').forEach(el => {
      const name = el.getAttribute('data-icon');
      const body = ICONS[name];
      if (!body) return;
      el.innerHTML =
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" ' +
        'stroke-linecap="round" stroke-linejoin="round" width="1em" height="1em">' + body + '</svg>';
      el.classList.add('icon');
    });
  }

  window.CodexIcons = { render: renderIcons, ICONS };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => renderIcons());
  } else {
    renderIcons();
  }
})();
