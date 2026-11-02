// Shared helpers for the password-protected case study.
// Runs in both the proxy and route handlers, so it only uses Web Crypto.

export const ACCESS_COOKIE = "case_access";
export const ACCESS_MAX_AGE = 60 * 60 * 24 * 30; // 30 days
export const PROTECTED_PREFIX = "/work/pipeline-copilot";

const encoder = new TextEncoder();

function toHex(buf: ArrayBuffer): string {
  return Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, "0")).join("");
}

async function hmac(secret: string, message: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  return toHex(await crypto.subtle.sign("HMAC", key, encoder.encode(message)));
}

/** Constant-time comparison for equal-length hex strings. */
function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

/** The configured password, or null. With no password set, everything stays locked. */
function configuredPassword(): string | null {
  const p = process.env.CASE_STUDY_PASSWORD;
  return p && p.length >= 8 ? p : null;
}

/**
 * The cookie value is an HMAC of a fixed label keyed by the password,
 * so changing the password signs everyone out.
 */
export async function accessToken(): Promise<string | null> {
  const password = configuredPassword();
  return password ? hmac(password, "case-study-access:v1") : null;
}

export async function hasAccess(cookieValue: string | undefined): Promise<boolean> {
  if (!cookieValue) return false;
  const expected = await accessToken();
  return expected !== null && safeEqual(cookieValue, expected);
}

export async function passwordMatches(attempt: string): Promise<boolean> {
  const password = configuredPassword();
  if (!password || !attempt) return false;
  // Compare digests so the comparison time doesn't depend on the input length.
  const [a, b] = await Promise.all([hmac("compare", attempt), hmac("compare", password)]);
  return safeEqual(a, b);
}

/** Only allow same-site relative redirects. */
export function safeNext(next: string | null | undefined): string {
  if (next && next.startsWith("/") && !next.startsWith("//") && !next.includes("\\")) return next;
  return PROTECTED_PREFIX;
}
