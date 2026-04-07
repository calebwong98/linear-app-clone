// src/middleware.ts
import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. /images (inside /public for static files)
     * 5. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api/|_next/|images/|_vercel|[\\w-]+\\.\\w+).*)",
  ],
};

export function proxy(req: NextRequest) {
  const url = req.nextUrl;
  const pathname = url.pathname;
  const search = url.search;

  return NextResponse.rewrite(new URL(`/home${pathname}${search}`, req.url));
}
