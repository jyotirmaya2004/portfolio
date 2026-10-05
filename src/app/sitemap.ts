import type { MetadataRoute } from "next";

const BASE_URL = "https://www.jyotirmayabehera.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL },
    { url: `${BASE_URL}/about` },
    { url: `${BASE_URL}/projects` },
    { url: `${BASE_URL}/skills` },
    { url: `${BASE_URL}/experience` },
    { url: `${BASE_URL}/education` },
    { url: `${BASE_URL}/contact` },
  ];
}
