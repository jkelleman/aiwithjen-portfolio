import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/work/pipeline-copilot", "/unlock", "/api/"] },
    sitemap: "https://aiwithjen.com/sitemap.xml",
  };
}
