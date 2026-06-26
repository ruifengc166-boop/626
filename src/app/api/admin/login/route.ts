import { NextResponse } from "next/server";
import { ADMIN_COOKIE, verifyPassword, createSessionToken } from "@/lib/admin-auth";

function getBaseUrl(request: Request): URL {
  const forwarded = request.headers.get("x-forwarded-host");
  const proto = request.headers.get("x-forwarded-proto") || "https";
  const host = forwarded || request.headers.get("host") || "localhost";
  return new URL(`${proto}://${host}`);
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const password = String(formData.get("password") || "");

  if (!verifyPassword(password)) {
    const base = getBaseUrl(request);
    return NextResponse.redirect(new URL("/admin/login?error=1", base), { status: 303 });
  }

  const base = getBaseUrl(request);
  const response = NextResponse.redirect(new URL("/admin", base), { status: 303 });
  response.cookies.set(ADMIN_COOKIE, createSessionToken(password), {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    path: "/",
  });

  return response;
}
