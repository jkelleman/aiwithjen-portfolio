import { NextResponse, type NextRequest } from "next/server";
import { ACCESS_COOKIE, ACCESS_MAX_AGE, accessToken, passwordMatches, passwordStatus, safeNext } from "@/lib/caseAccess";

export async function POST(request: NextRequest) {
  const form = await request.formData();
  const attempt = String(form.get("password") ?? "");
  const next = safeNext(String(form.get("next") ?? ""));

  if (!(await passwordMatches(attempt))) {
    const p = process.env.CASE_STUDY_PASSWORD ?? "";
    console.warn("[unlock] failed", {
      status: passwordStatus(),
      attemptLength: attempt.length,
      configuredLength: p.length,
      configuredTrimDiffers: p !== p.trim(),
      attemptTrimDiffers: attempt !== attempt.trim(),
    });
    const back = new URL("/unlock", request.url);
    back.searchParams.set("next", next);
    back.searchParams.set("error", "1");
    return NextResponse.redirect(back, 303);
  }

  const token = await accessToken();
  const res = NextResponse.redirect(new URL(next, request.url), 303);
  res.cookies.set(ACCESS_COOKIE, token!, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: ACCESS_MAX_AGE,
  });
  return res;
}
