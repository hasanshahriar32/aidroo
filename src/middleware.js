import { NextResponse } from "next/server";

export function middleware(request) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === "/login" || path === "/signup";
  const token = request.cookies.get("token")?.value || "";
  console.log(token);
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL(`/`, request.nextUrl)); // Redirect to home or appropriate page
  }

  if (!isPublicPath) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.nextUrl));
    }

    // const decodedToken = verifyToken(token);
    // if (!decodedToken) {
    //   return NextResponse.redirect(new URL("/login", request.nextUrl));
    // }
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/admin_dashboard/:path*"], // Protect /admin_dashboard and all its sub-routes
};
