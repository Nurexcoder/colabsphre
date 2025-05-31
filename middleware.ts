import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Define protected routes and their required roles
const protectedRoutes: { path: string; role: string }[] = [
  { path: "/brand/dashboard", role: "brand" },
  { path: "/influencer/dashboard", role: "influencer" },
];

export function middleware(request: NextRequest) {
  const token = request.cookies.get("access_token")?.value;
  const role = request.cookies.get("role")?.value;

  // Check if the request matches a protected route
  const matched = protectedRoutes.find((route) =>
    request.nextUrl.pathname.startsWith(route.path)
  );

  if (matched) {
    // If no token or role, redirect to login
    if (!token || !role) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
    // If role does not match, redirect to login
    if (role !== matched.role) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/brand/dashboard/:path*", "/influencer/dashboard/:path*"],
};