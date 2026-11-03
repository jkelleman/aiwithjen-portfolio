import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: [
        "/work/pipeline-copilot",
        "/work/project-osmos",
        "/work/enterprise-semantic-layer",
        "/unlock",
        "/api/",
      ] },
    sitemap: "https://aiwithjen.com/sitemap.xml",
  };
}
