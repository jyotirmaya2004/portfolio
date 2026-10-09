import type { MetadataRoute } from "next";
import { getAllProjects } from "@/data/projects";
import { getAllExperiences } from "@/data/experience";

const BASE_URL = "https://jyotirmayabehera.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectEntries = getAllProjects().map((project) => ({
    url: `${BASE_URL}/projects/${project.id}`,
    lastModified: new Date(),
  }));

  const experienceEntries = getAllExperiences().map((exp) => ({
    url: `${BASE_URL}/experience/${exp.id}`,
    lastModified: new Date(),
  }));

  return [
    { url: BASE_URL, lastModified: new Date() },
    ...projectEntries,
    ...experienceEntries,
    { url: `${BASE_URL}/about`, lastModified: new Date() },
    { url: `${BASE_URL}/skills`, lastModified: new Date() },
    { url: `${BASE_URL}/education`, lastModified: new Date() },
    { url: `${BASE_URL}/contact`, lastModified: new Date() },
  ];
}