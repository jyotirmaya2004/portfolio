import type { Metadata } from "next";
import { getAllProjects } from "@/data/projects";
import ProjectsIndex from "@/components/ProjectsIndex";
import GsapInit from "@/components/GsapInit";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore projects, experiments, and engineering work across full-stack development, artificial intelligence, machine learning, and software systems by Jyotirmaya Behera.",
  alternates: {
    canonical: "https://jyotirmayabehera.com/projects",
  },
  openGraph: {
    title: "Projects | Jyotirmaya Behera",
    description:
      "Explore projects, experiments, and engineering work across full-stack development, artificial intelligence, machine learning, and software systems by Jyotirmaya Behera.",
    url: "https://jyotirmayabehera.com/projects",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Jyotirmaya Behera",
    description:
      "Explore projects, experiments, and engineering work across full-stack development, artificial intelligence, machine learning, and software systems by Jyotirmaya Behera.",
  },
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projects | Jyotirmaya Behera",
    url: "https://jyotirmayabehera.com/projects",
    description:
      "Explore projects, experiments, and engineering work across full-stack development, artificial intelligence, machine learning, and software systems by Jyotirmaya Behera.",
    hasPart: projects.map((project) => ({
      "@type": "SoftwareApplication",
      name: project.name,
      applicationCategory: project.category,
      description: project.summary,
      url: `https://jyotirmayabehera.com/projects/${project.id}`,
    })),
  };

  return (
    <>
      <GsapInit />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectsIndex projects={projects} />
    </>
  );
}
