import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  const { pathname } = request.nextUrl;

  // halaman auth
  const isAuthPage = pathname.startsWith("/login") || pathname.startsWith("/register");

  // halaman dashboard
  const isDashboardPage = pathname.startsWith("/dashboard");

  // jika belum login dan akses dashboard
  if (!token && isDashboardPage) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // jika sudah login tapi membuka login/register
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/login",
    "/register"
  ]
};