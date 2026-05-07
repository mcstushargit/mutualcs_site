import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/?q=", "/_next/"],
      },
    ],
    sitemap: "https://mutualcs.com/sitemap.xml",
    host: "https://mutualcs.com",
  };
}
