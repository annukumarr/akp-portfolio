import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://akp-portfolio-zeta.vercel.app";

  return [
    {
      url: baseUrl,
      priority: 1,
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/projects/jarvis-x`,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects/legacy`,
      priority: 0.9,
    },
  ];
}