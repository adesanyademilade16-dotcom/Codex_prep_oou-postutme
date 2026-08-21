// CODEX PREP — ImageKit announcement image uploader
// Firebase remains the source of truth for app data. ImageKit only stores media.

const MAX_INPUT_BYTES = 5 * 1024 * 1024;
const MAX_OUTPUT_BYTES = 2.5 * 1024 * 1024;
const MAX_WIDTH = 1600;
const MAX_HEIGHT = 2000;
const ALLOWED_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif']);

function safeFileName(name, extension = null) {
  const original = String(name || 'announcement-image');
  const ext = extension || (original.match(/\.([a-zA-Z0-9]+)$/)?.[1] || 'jpg').toLowerCase();
  const cleanExt = ['jpg','jpeg','png','webp','gif'].includes(ext) ? ext : 'jpg';
  const base = original
    .replace(/\.[^.]+$/, '')
    .replace(/[^a-zA-Z0-9_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 70) || 'announcement-image';
  return `${base}-${Date.now()}.${cleanExt === 'jpeg' ? 'jpg' : cleanExt}`;
}

function getAuthToken() {
  return window.__CODEX_FIREBASE_AUTH__?.currentUser?.getIdToken?.();
}

async function getFirebaseIdToken() {
  const token = await getAuthToken();
  if (!token) throw new Error('Your admin session has expired. Please sign in again.');
  return token;
}

function loadImage(file) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => { URL.revokeObjectURL(url); resolve(img); };
    img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('The selected image could not be read.')); };
    img.src = url;
  });
}

async function prepareImage(file) {
  if (!ALLOWED_TYPES.has(file.type)) {
    throw new Error('Please choose a JPG, PNG, WEBP or GIF image.');
  }
  if (file.size > MAX_INPUT_BYTES) {
    throw new Error('Image is too large. Maximum source size is 5 MB.');
  }

  // GIFs may contain animation. Preserve the original GIF rather than flattening it.
  if (file.type === 'image/gif') return { file: new File([file], safeFileName(file.name, 'gif'), { type: 'image/gif', lastModified: Date.now() }), width: null, height: null, compressed: false };

  const img = await loadImage(file);
  const scale = Math.min(1, MAX_WIDTH / img.naturalWidth, MAX_HEIGHT / img.naturalHeight);
  const width = Math.max(1, Math.round(img.naturalWidth * scale));
  const height = Math.max(1, Math.round(img.naturalHeight * scale));

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d', { alpha: false });
  ctx.drawImage(img, 0, 0, width, height);

  const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg', 0.82));
  if (!blob) throw new Error('Could not prepare the image for upload.');

  const output = new File([blob], safeFileName(file.name), { type: 'image/jpeg', lastModified: Date.now() });
  if (output.size > MAX_OUTPUT_BYTES) {
    // One additional compression pass for unusually detailed flyers.
    const blob2 = await new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg', 0.68));
    if (blob2 && blob2.size < output.size) {
      return { file: new File([blob2], safeFileName(file.name), { type: 'image/jpeg' }), width, height, compressed: true };
    }
  }
  return { file: output, width, height, compressed: true };
}

export async function uploadAnnouncementImage(sourceFile, { onProgress } = {}) {
  const prepared = await prepareImage(sourceFile);
  const firebaseToken = await getFirebaseIdToken();

  const authResponse = await fetch('/api/imagekit-auth', {
    method: 'GET',
    headers: { Authorization: `Bearer ${firebaseToken}` },
    cache: 'no-store'
  });
  const authData = await authResponse.json().catch(() => ({}));
  if (!authResponse.ok) throw new Error(authData.error || 'ImageKit authentication failed.');

  const form = new FormData();
  form.append('file', prepared.file);
  form.append('fileName', safeFileName(prepared.file.name, prepared.file.type.split('/')[1]));
  form.append('publicKey', authData.publicKey);
  form.append('signature', authData.signature);
  form.append('expire', String(authData.expire));
  form.append('token', authData.token);
  form.append('useUniqueFileName', 'true');
  form.append('folder', '/codex-prep/announcements');
  form.append('tags', 'codex-prep,announcement');

  // XMLHttpRequest gives us upload progress on mobile browsers more reliably than fetch.
  const result = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://upload.imagekit.io/api/v1/files/upload');
    xhr.responseType = 'json';
    xhr.upload.onprogress = event => {
      if (event.lengthComputable && typeof onProgress === 'function') {
        onProgress(Math.round((event.loaded / event.total) * 100));
      }
    };
    xhr.onerror = () => reject(new Error('Network error while uploading the image.'));
    xhr.onload = () => {
      const body = xhr.response || {};
      if (xhr.status >= 200 && xhr.status < 300) resolve(body);
      else reject(new Error(body.message || body.error || `ImageKit upload failed (${xhr.status}).`));
    };
    xhr.send(form);
  });

  if (!result.url) throw new Error('ImageKit returned no image URL.');

  return {
    url: result.url,
    fileId: result.fileId || null,
    filePath: result.filePath || null,
    width: result.width || prepared.width || null,
    height: result.height || prepared.height || null,
    size: result.size || prepared.file.size,
    fileType: result.fileType || prepared.file.type,
    compressed: prepared.compressed
  };
}
