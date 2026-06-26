import { NextResponse } from "next/server";
import { ADMIN_COOKIE } from "@/lib/admin-auth";

function getBaseUrl(request: Request): URL {
  const forwarded = request.headers.get("x-forwarded-host");
  const proto = request.headers.get("x-forwarded-proto") || "https";
  const host = forwarded || request.headers.get("host") || "localhost";
  return new URL(`${proto}://${host}`);
}

export async function POST(request: Request) {
  const base = getBaseUrl(request);
  const response = NextResponse.redirect(new URL("/admin/login", base), { status: 303 });
  response.cookies.delete(ADMIN_COOKIE);
  return response;
}
