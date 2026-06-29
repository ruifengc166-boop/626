import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createHmac } from "crypto";

export const ADMIN_COOKIE = "ai_ad_remix_admin";
const DEFAULT_ADMIN_PASSWORD = "change-me";

function getAdminSecret() {
  return process.env.ADMIN_PASSWORD?.trim() || DEFAULT_ADMIN_PASSWORD;
}

export function isDefaultAdminPassword(): boolean {
  const configured = process.env.ADMIN_PASSWORD?.trim();
  return !configured || configured === DEFAULT_ADMIN_PASSWORD;
}

export function isAdminAuthDisabled(): boolean {
  return process.env.NODE_ENV === "production" && isDefaultAdminPassword();
}

export function verifyPassword(password: string): boolean {
  if (isAdminAuthDisabled()) return false;
  return password === getAdminSecret();
}

export function createSessionToken(password: string): string {
  const secret = getAdminSecret();
  return createHmac("sha256", secret).update(password).digest("hex");
}

export async function isAdminAuthenticated(): Promise<boolean> {
  if (isAdminAuthDisabled()) return false;
  const secret = getAdminSecret();
  const expectedToken = createHmac("sha256", secret).update(secret).digest("hex");
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE)?.value;
  return token === expectedToken;
}

export async function requireAdmin() {
  const authed = await isAdminAuthenticated();
  if (!authed) redirect("/admin/login");
}
