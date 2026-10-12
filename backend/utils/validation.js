const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+]?[\d\s()-]{7,20}$/;
const HEADER_INJECTION_RE = /[\r\n]/;

export function sanitizeText(value, { max = 2000 } = {}) {
  if (typeof value !== 'string') return '';
  return value.replace(/\0/g, '').trim().slice(0, max);
}

export function hasHeaderInjection(...values) {
  return values.some((value) => HEADER_INJECTION_RE.test(String(value || '')));
}

export function isValidEmail(email) {
  return EMAIL_RE.test(email);
}

export function isValidPhone(phone) {
  return PHONE_RE.test(phone);
}

export function requireFields(fields) {
  const missing = Object.entries(fields)
    .filter(([, value]) => !value || (typeof value === 'string' && !value.trim()))
    .map(([key]) => key);
  return missing;
}
