import { NextResponse, type NextRequest } from "next/server";
import { get } from "@vercel/blob";
import { ACCESS_COOKIE, hasAccess } from "@/lib/caseAccess";
import { CASE_ASSETS } from "@/lib/caseAssets";

// Streams case-study files from a private Vercel Blob store.
// Access is checked here, next to the read, rather than relying on the proxy.
export async function GET(request: NextRequest, ctx: { params: Promise<{ name: string }> }) {
  if (!(await hasAccess(request.cookies.get(ACCESS_COOKIE)?.value))) {
    return new NextResponse("Not found", { status: 404 });
  }

  const { name } = await ctx.params;
  if (!Object.hasOwn(CASE_ASSETS, name)) {
    return new NextResponse("Not found", { status: 404 });
  }

  const result = await get(name, { access: "private" });
  if (!result || result.statusCode !== 200 || !result.stream) {
    return new NextResponse("Not found", { status: 404 });
  }

  const headers: Record<string, string> = {
    // Browsers only load caption tracks served as text/vtt.
    "Content-Type": name.endsWith(".vtt") ? "text/vtt; charset=utf-8" : result.blob.contentType,
    "X-Content-Type-Options": "nosniff",
    "X-Robots-Tag": "noindex, nofollow",
    "Cache-Control": "private, no-cache",
    "Accept-Ranges": "bytes",
  };

  // Safari only plays video when byte ranges are supported. Files are small,
  // so read the whole blob and slice it.
  const range = request.headers.get("range");
  const match = range?.match(/^bytes=(\d*)-(\d*)$/);
  if (match) {
    const body = new Uint8Array(await new Response(result.stream).arrayBuffer());
    const size = body.byteLength;
    let start = match[1] ? Number(match[1]) : size - Number(match[2]);
    let end = match[1] && match[2] ? Number(match[2]) : size - 1;
    start = Math.max(0, start);
    end = Math.min(end, size - 1);
    if (start > end) {
      return new NextResponse(null, { status: 416, headers: { "Content-Range": `bytes */${size}` } });
    }
    return new NextResponse(body.slice(start, end + 1), {
      status: 206,
      headers: {
        ...headers,
        "Content-Range": `bytes ${start}-${end}/${size}`,
        "Content-Length": String(end - start + 1),
      },
    });
  }

  return new NextResponse(result.stream, { headers });
}
