// ===========================================================
// CODEX PREP — ANNOUNCEMENTS + NOTIFICATION CENTRE
// Optional dashboard layer: failures must never block auth/CBT.
// ===========================================================
import {
  db, collection, query, where, getDocs, limit,
  doc, getDoc, setDoc, updateDoc, serverTimestamp
} from "./auth.js";

const MAX_ACTIVE_ANNOUNCEMENTS = 25;

function toMillis(value) {
  if (!value) return null;
  if (typeof value.toMillis === 'function') return value.toMillis();
  if (value instanceof Date) return value.getTime();
  if (typeof value === 'number') return value;
  return null;
}

function isHttpsUrl(value) {
  return typeof value === 'string' && /^https:\/\//i.test(value);
}

function isInternalRoute(value) {
  return typeof value === 'string' && /^[a-zA-Z0-9_./-]+\.html(?:[?#].*)?$/.test(value) && !value.includes('\\');
}

function safeCtaUrl(value) {
  if (!value) return null;
  const trimmed = String(value).trim();
  if (isInternalRoute(trimmed)) {
    return window.location.pathname.includes('/admin/') && !trimmed.startsWith('../') ? `../${trimmed}` : trimmed;
  }
  if (isHttpsUrl(trimmed)) return trimmed;
  return null;
}

export async function getActiveAnnouncements() {
  const snap = await getDocs(query(
    collection(db, 'announcements'),
    where('status', '==', 'active'),
    limit(MAX_ACTIVE_ANNOUNCEMENTS)
  ));
  const now = Date.now();
  return snap.docs
    .map(d => ({ id: d.id, ...d.data() }))
    .filter(a => {
      if (a.audience && a.audience !== 'all') return false;
      const start = toMillis(a.startAt);
      const expiry = toMillis(a.expiresAt);
      return (!start || start <= now) && (!expiry || now < expiry);
    })
    .sort((a, b) => {
      const p = (Number(b.priority) || 0) - (Number(a.priority) || 0);
      if (p) return p;
      return (toMillis(b.createdAt) || 0) - (toMillis(a.createdAt) || 0);
    });
}

export async function getReadMap(uid) {
  if (!uid) return {};
  const snap = await getDoc(doc(db, 'announcement_reads', uid));
  return snap.exists() ? (snap.data().states || {}) : {};
}

export async function setReadStatus(uid, announcementId, status) {
  if (!uid || !announcementId || !['seen', 'dismissed', 'clicked'].includes(status)) return;
  // Nested object keeps the announcement ID as a literal key even if it contains dots.
  const ref = doc(db, 'announcement_reads', uid);
  try {
    await updateDoc(ref, { [`states.${announcementId}`]: status, updatedAt: serverTimestamp() });
  } catch (error) {
    if (error?.code !== 'not-found') throw error;
    await setDoc(ref, { states: { [announcementId]: status }, updatedAt: serverTimestamp() });
  }
}

export function countUnread(announcements, readMap) {
  return announcements.filter(a => !readMap?.[a.id]).length;
}

function escapeHtml(value) {
  const div = document.createElement('div');
  div.textContent = value == null ? '' : String(value);
  return div.innerHTML;
}

function createOverlay(label) {
  const existing = document.getElementById('codexAnnouncementOverlay');
  if (existing) existing.remove();
  const overlay = document.createElement('div');
  overlay.id = 'codexAnnouncementOverlay';
  overlay.className = 'codex-announcement-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', label);
  return overlay;
}

function focusTrap(overlay, initial) {
  const selector = 'button:not([disabled]),a[href],input,textarea,select,[tabindex]:not([tabindex="-1"])';
  const focusables = () => [...overlay.querySelectorAll(selector)];
  const onKeydown = (event) => {
    if (event.key === 'Escape') {
      overlay.querySelector('[data-ann-close]')?.click();
      return;
    }
    if (event.key !== 'Tab') return;
    const items = focusables();
    if (!items.length) return;
    const first = items[0], last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  };
  overlay.addEventListener('keydown', onKeydown);
  requestAnimationFrame(() => (initial || focusables()[0])?.focus());
}

export function showAnnouncementModal(announcement, callbacks = {}) {
  if (!announcement) return;
  const overlay = createOverlay(announcement.title || 'Announcement');
  const image = announcement.imageUrl ? `<div class="codex-ann-media"><img class="codex-ann-image" src="${escapeHtml(announcement.imageUrl)}" alt=""><div class="codex-ann-image-fallback" hidden>Image could not be loaded.</div></div>` : '';
  const title = announcement.title ? `<h2>${escapeHtml(announcement.title)}</h2>` : '';
  const description = announcement.description ? `<p>${escapeHtml(announcement.description)}</p>` : '';
  const ctaUrl = safeCtaUrl(announcement.ctaUrl);
  const cta = announcement.ctaText && ctaUrl
    ? `<a class="btn btn-primary codex-ann-cta" data-ann-cta href="${escapeHtml(ctaUrl)}" ${isHttpsUrl(ctaUrl) ? 'target="_blank" rel="noopener noreferrer"' : ''}>${escapeHtml(announcement.ctaText)}</a>`
    : '';

  overlay.innerHTML = `
    <div class="codex-ann-modal" tabindex="-1">
      <button type="button" class="codex-ann-close" data-ann-close aria-label="Close announcement">×</button>
      ${image}
      <div class="codex-ann-body">
        ${announcement.important ? '<span class="codex-ann-important">Important</span>' : ''}
        ${title}${description}
        <div class="codex-ann-actions">${cta}</div>
      </div>
    </div>`;
  document.body.appendChild(overlay);
  document.body.classList.add('codex-modal-open');
  const mediaImg = overlay.querySelector('.codex-ann-image');
  const mediaFallback = overlay.querySelector('.codex-ann-image-fallback');
  if (mediaImg) mediaImg.addEventListener('error', () => { mediaImg.hidden = true; if (mediaFallback) mediaFallback.hidden = false; });

  const close = () => {
    overlay.remove();
    document.body.classList.remove('codex-modal-open');
    callbacks.onClose?.();
  };
  overlay.querySelector('[data-ann-close]').addEventListener('click', close);
  overlay.addEventListener('click', (event) => { if (event.target === overlay) close(); });
  overlay.querySelector('[data-ann-cta]')?.addEventListener('click', () => callbacks.onCta?.());
  focusTrap(overlay, overlay.querySelector('[data-ann-close]'));
}

export function showNotificationCentre(announcements, readMap, callbacks = {}) {
  const overlay = createOverlay('Notifications');
  const unread = countUnread(announcements, readMap);
  const items = announcements.length ? announcements.map(a => `
    <button type="button" class="codex-notif-item ${readMap?.[a.id] ? 'is-read' : 'is-unread'}" data-ann-id="${escapeHtml(a.id)}">
      <span class="codex-notif-dot" aria-hidden="true"></span>
      <span class="codex-notif-copy">
        <strong>${escapeHtml(a.title || 'Announcement')}</strong>
        <span>${escapeHtml(a.description || 'New update from Codex PREP.')}</span>
      </span>
      <span class="codex-notif-arrow" aria-hidden="true">›</span>
    </button>`).join('') : '<div class="codex-notif-empty"><div>🔔</div><strong>You’re all caught up</strong><span>No active announcements right now.</span></div>';

  overlay.innerHTML = `
    <div class="codex-notif-panel" tabindex="-1">
      <div class="codex-notif-head">
        <div><span class="codex-ann-important">Notifications</span><h2>Updates & announcements</h2></div>
        <button type="button" class="codex-ann-close" data-ann-close aria-label="Close notifications">×</button>
      </div>
      ${unread ? `<p class="codex-notif-summary">${unread} unread update${unread === 1 ? '' : 's'}</p>` : ''}
      <div class="codex-notif-list">${items}</div>
    </div>`;
  document.body.appendChild(overlay);
  document.body.classList.add('codex-modal-open');

  const close = () => { overlay.remove(); document.body.classList.remove('codex-modal-open'); };
  overlay.querySelector('[data-ann-close]').addEventListener('click', close);
  overlay.addEventListener('click', (event) => { if (event.target === overlay) close(); });
  overlay.querySelectorAll('[data-ann-id]').forEach(btn => btn.addEventListener('click', () => {
    const item = announcements.find(a => a.id === btn.dataset.annId);
    if (!item) return;
    close();
    callbacks.onOpenItem?.(item);
  }));
  focusTrap(overlay, overlay.querySelector('[data-ann-close]'));
}
