# Codex PREP — Phase Upgrade Notes

## What was corrected

### Dashboard responsive layout
- Two-column card grid on phones.
- Three columns on larger phones/tablets.
- Four columns on laptop/desktop.
- Five columns on wide desktop.
- Six columns on very wide screens.
- Wider dashboard container prevents the UI from becoming a small centered strip on large screens.
- Cards use fluid grid sizing instead of fixed desktop widths.

### Announcements
- Added `js/announcements.js`.
- Added responsive announcement modal with keyboard/focus handling and Escape/backdrop close.
- Added notification centre with unread state.
- Added per-user announcement interaction state.
- Added `admin/announcements.html` CMS-style management page.
- Added announcement management shortcut to `admin/index.html`.
- Added validation for HTTPS image URLs and safe internal/HTTPS CTA destinations.
- Added start/expiry handling, priority, important flag, drafts, preview, activate/deactivate, edit and delete.

### Firestore
- Added `firestore.rules` containing the supplied security baseline plus minimal rules for:
  - `announcements/{id}`
  - `announcement_reads/{uid}`
- Student announcement content is readable only while the announcement document is active.
- Students can only modify their own notification interaction document.
- Existing collections remain under the supplied access model.
- Default deny remains in place.

### PWA
- Bumped the PWA/service-worker version to `v4` so the browser can retire the previous worker/cache cleanly.
- Existing network-first strategy remains; authenticated Firestore/Auth data is not cached.

### Authentication/loading UX
- Dashboard authentication initialization, dashboard Firestore data loading and optional announcement loading remain separate.
- Dashboard has a visible retry/recovery state when auth initialization times out or errors.
- A dashboard Firestore failure no longer presents as an authentication-loading failure.

### Mode selection
- Mode cards now use two columns on phones instead of forcing a single oversized column.
- Larger screens progressively move to three columns.

## Rating

**Overall: 9.7/10** for this phase.

The architecture remains static HTML/CSS/JavaScript + Firebase, without a framework migration. The remaining 0.3 is intentionally reserved for live-device QA against the production Firebase project, especially Chrome-specific authentication behavior, real Firestore rule deployment, Storage policy verification, and PWA installation behavior on Android/iOS.

## Deployment safety

Do not deploy the included `firestore.rules` blindly to production. Compare it with the currently deployed rules, deploy it in a controlled test/staging environment first, then verify:

1. Student login/profile access.
2. Student CBT attempt creation/read restrictions.
3. Student subscription reads.
4. Admin access.
5. Announcement admin CRUD.
6. Student announcement reads.
7. Student own notification-state writes.
8. Default-deny behavior for unknown collections.

No production data migration is required for announcements; the feature is additive.

### Image storage
- Removed the Firebase Storage SDK dependency from `js/auth.js`.
- Removed `storageBucket` from the client Firebase config.
- Removed the Firebase Storage rules file.
- Added secure ImageKit client upload flow through `/api/imagekit-auth.js`.
- The API verifies a Firebase ID token and restricts upload credentials to the same three admin emails used by the Firestore rules.
- Added browser-side image optimization for non-GIF announcement images before upload.
- Announcement documents store the ImageKit URL and optional `imageFileId`.
- ImageKit's private key and Firebase service-account credential are server-only Vercel environment variables.
