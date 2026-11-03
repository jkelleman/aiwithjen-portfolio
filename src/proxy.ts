import { NextResponse, type NextRequest } from "next/server";
import { ACCESS_COOKIE, hasAccess } from "@/lib/caseAccess";

// Locks the case studies. Visitors without a valid access cookie
// are sent to /unlock and returned here after entering the password.
export async function proxy(request: NextRequest) {
  if (await hasAccess(request.cookies.get(ACCESS_COOKIE)?.value)) {
    const res = NextResponse.next();
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
    res.headers.set("Cache-Control", "private, no-store");
    return res;
  }
  const unlock = new URL("/unlock", request.url);
  unlock.searchParams.set("next", request.nextUrl.pathname);
  return NextResponse.redirect(unlock);
}

export const config = {
  matcher: [
    "/work/pipeline-copilot",
    "/work/pipeline-copilot/:path*",
    "/work/project-osmos",
    "/work/project-osmos/:path*",
    "/work/enterprise-semantic-layer",
    "/work/enterprise-semantic-layer/:path*",
  ],
};
