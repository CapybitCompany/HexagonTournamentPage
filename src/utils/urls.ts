const rawSite = import.meta.env.SITE || 'https://www.minecrafthex.pl';
const rawBase = import.meta.env.BASE_URL || '/';

const normalizedSite = rawSite.endsWith('/') ? rawSite : `${rawSite}/`;
const normalizedBase = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

function trimLeadingSlashes(value: string) {
  return value.replace(/^\/+/, '');
}

export function withBase(path = '') {
  if (!path) {
    return normalizedBase;
  }

  return `${normalizedBase}${trimLeadingSlashes(path)}`;
}

export function absoluteUrl(path = '') {
  return new URL(withBase(path), normalizedSite).toString();
}

export function resolveAbsoluteUrl(pathOrUrl: string) {
  return /^https?:\/\//.test(pathOrUrl) ? pathOrUrl : absoluteUrl(pathOrUrl);
}