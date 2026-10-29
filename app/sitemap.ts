import type { MetadataRoute } from "next";

const siteUrl = "https://my-portfolio-amber-theta-53.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/projects", "/skills", "/contact", "/cv"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
