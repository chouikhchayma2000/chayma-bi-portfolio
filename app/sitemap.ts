import type { MetadataRoute } from "next";

const baseUrl = "https://your-domain.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/about",
    "/skills",
    "/projects",
    "/projects/adventureworks-incremental-data-warehouse",
    "/projects/ssas-olap-cube-analysis",
    "/projects/agricultural-climate-prediction",
    "/contact"
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8
  }));
}
