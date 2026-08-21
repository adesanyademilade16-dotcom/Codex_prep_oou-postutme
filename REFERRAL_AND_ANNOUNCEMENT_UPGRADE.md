# Codex PREP — Referral + Announcement Upgrade

## Announcements

- Student dashboard supports active announcements and a notification centre.
- Admin CMS supports title, description, image, CTA, priority, scheduling, important flag, drafts, preview, activate/deactivate, edit and delete.
- Announcement images can be uploaded directly from a phone through ImageKit.
- Firebase Storage is not required.
- Uploaded images are optimized in the browser before ImageKit upload.
- Firestore stores the ImageKit `imageUrl` and `imageFileId`.
- Replaced/deleted ImageKit media is cleaned up through an admin-only Vercel API endpoint when possible.
- Broken external image URLs fail gracefully instead of breaking the modal.
- Portrait flyers use `object-fit: contain` so important text is not aggressively cropped.

## Refer & Earn

- Every student gets a deterministic personal referral code such as `CODEX-AB12CD34`.
- Referral code can be entered during email signup, Google signup, or Google profile completion.
- Email referrals become eligible only after the referred account verifies its email; the pending code is then consumed from the user's profile when the dashboard loads.
- Each referred account can create only one immutable referral record.
- Self-referrals are rejected by Firestore rules.
- Profile shows referral code, confirmed referral count, progress and reward milestones.
- Default milestones:
  - 10 confirmed referrals → Regular, 14 days default.
  - 25 confirmed referrals → VIP, 14 days default.
- Rewards are **never granted automatically**. Admin reviews eligibility and chooses the exact duration in days before granting.
- Admin Referral Rewards page shows eligible students and their confirmed referrals.
- Every manual reward is recorded in `referral_rewards` and the immutable admin audit log.
- Admin overview shows the number of students currently at or above the Regular milestone.

## Security / deployment

- Firestore remains default-deny except for explicitly allowed collections.
- Student subscription tier/trial fields cannot be self-upgraded.
- Referral reward documents are admin-only.
- ImageKit upload credentials are issued only after server-side Firebase admin verification.
- Firebase service-account credentials and ImageKit private key are server-only Vercel environment variables.

## Required Vercel variables

```text
IMAGEKIT_PUBLIC_KEY
IMAGEKIT_PRIVATE_KEY
IMAGEKIT_URL_ENDPOINT
FIREBASE_SERVICE_ACCOUNT_JSON
ALLOWED_ORIGIN
CODEX_ADMIN_EMAILS
```

See `IMAGEKIT_SETUP.md` and `.env.example` for details.

## Live testing checklist

1. Deploy the project to Vercel with the environment variables configured.
2. Sign in as an admin and upload a JPG/PNG/WEBP/GIF announcement image from a phone.
3. Verify the ImageKit URL is saved in the announcement document.
4. Verify a student can see the active announcement but cannot read inactive announcements.
5. Verify notification read/dismiss/click state is limited to the student's own document.
6. Create a test account using a referral code.
7. Verify the referrer count increases only after the referred email account is verified.
8. Test the Google signup/profile-completion referral path.
9. For testing rewards, reach the milestone with controlled test accounts and grant 1 day first.
10. Verify the granted tier is reflected by `getEffectiveTier()` and expires correctly.
11. Verify admin audit entries are created and cannot be edited/deleted by clients.
12. Verify unknown Firestore collections remain denied.
