import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createHmac } from "crypto";

export const ADMIN_COOKIE = "ai_ad_remix_admin";

function getAdminSecret() {
  return process.env.ADMIN_PASSWORD || "change-me";
}

export function verifyPassword(password: string): boolean {
  return password === getAdminSecret();
}

export function createSessionToken(password: string): string {
  const secret = getAdminSecret();
  return createHmac("sha256", secret).update(password).digest("hex");
}

export async function isAdminAuthenticated(): Promise<boolean> {
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
