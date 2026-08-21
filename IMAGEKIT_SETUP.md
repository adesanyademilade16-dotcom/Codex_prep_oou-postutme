# Codex PREP — ImageKit + Vercel setup

Firebase Storage is **not used** by the announcement-image feature. Firebase/Firestore remains the source of truth for authentication and app data; ImageKit stores and delivers announcement media.

## Required ImageKit values

From ImageKit → Developer options/API keys:

- **Public API key** — safe to use in the client upload request.
- **Private API key** — SECRET; never put it in HTML, browser JavaScript, GitHub, Firestore, or a screenshot.
- **URL endpoint** — e.g. `https://ik.imagekit.io/your_imagekit_id`.

ImageKit's client-upload flow requires temporary authentication parameters. Our Vercel function generates those using the private key, then the browser uploads directly to ImageKit. The private key never reaches the browser.

## Vercel environment variables

Go to **Vercel → Project → Settings → Environment Variables** and add:

```text
IMAGEKIT_PUBLIC_KEY=public_xxxxxxxxx
IMAGEKIT_PRIVATE_KEY=private_xxxxxxxxx
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_imagekit_id
FIREBASE_SERVICE_ACCOUNT_JSON=<complete Firebase service-account JSON>
ALLOWED_ORIGIN=https://codex-prep-oou-postutme.vercel.app
CODEX_ADMIN_EMAILS=codexhub16@gmail.com,bukolaqudus10@gmail.com,mikejoel895@gmail.com
```

`FIREBASE_SERVICE_ACCOUNT_JSON` is the preferred Firebase Admin configuration for this project. Paste the **entire JSON object as one environment-variable value**. Do not commit the service-account JSON to GitHub and do not send it in chat.

The project also supports the older three-variable Firebase Admin configuration (`FIREBASE_PROJECT_ID`, `FIREBASE_CLIENT_EMAIL`, `FIREBASE_PRIVATE_KEY`) if you prefer that setup.

### Environment scope

For the live site, enable the variables for **Production**. If you use Vercel Preview deployments to test the uploader, enable them for **Preview** too.

After changing environment variables, create a new deployment. Vercel applies environment-variable changes to new deployments, not the already-running deployment.

## Secure upload flow

```text
Admin browser
   ↓ Firebase ID token
/api/imagekit-auth
   ↓ verifies admin with Firebase Admin
short-lived ImageKit token/signature/expiry
   ↓
ImageKit upload API
   ↓
public ImageKit image URL + fileId
   ↓
Firestore announcements/{id}
```

Only an authenticated admin can obtain upload credentials. The browser never receives `IMAGEKIT_PRIVATE_KEY`.

## Announcement media lifecycle

- Upload from phone: JPG, PNG, WEBP or GIF, maximum source size 5 MB.
- Non-GIF images are resized/compressed in the browser for mobile-friendly delivery.
- ImageKit files are placed in `/codex-prep/announcements`.
- Firestore stores `imageUrl` and `imageFileId`.
- Deleting an announcement attempts to delete its ImageKit file too.
- Replacing an uploaded ImageKit image attempts to remove the previous ImageKit file after the Firestore update succeeds.
- Manually pasted external HTTPS URLs are supported and are never sent to the ImageKit delete endpoint.

## Testing

A plain static server does **not** execute Vercel `/api` functions. For the complete uploader flow, deploy to Vercel or use Vercel's local development tooling.

Test in this order:

1. Sign in with one of the configured admin accounts.
2. Open **Admin → Announcements**.
3. Choose **Upload image** from an Android phone.
4. Confirm upload progress reaches 100% and an image preview appears.
5. Save the announcement.
6. Open the student dashboard and confirm the image appears in the announcement modal.
7. Delete the announcement and confirm the Firestore document disappears; ImageKit cleanup should also run.

## Security notes

- ImageKit private key: Vercel only.
- Firebase service-account credential: Vercel only.
- Never put either secret in the repository.
- If a private key is ever exposed publicly, rotate it immediately.
