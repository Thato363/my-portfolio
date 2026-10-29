import type { MetadataRoute } from "next";

const siteUrl = "https://my-portfolio-amber-theta-53.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
