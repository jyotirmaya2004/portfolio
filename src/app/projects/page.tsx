import type { Metadata } from "next";
import ProjectsContent from "@/components/ProjectsContent";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Software projects by Jyotirmaya Behera — including Netram, an AI-powered monitoring platform; Plantexa, a plant disease detection system; Prodexa, a product data aggregator; and Aptixa, a placement preparation quiz platform.",
  alternates: {
    canonical: "https://www.jyotirmayabehera.com/projects",
  },
  openGraph: {
    title: "Projects | Jyotirmaya Behera",
    description:
      "Software projects by Jyotirmaya Behera — including Netram, an AI-powered monitoring platform; Plantexa, a plant disease detection system; Prodexa, a product data aggregator; and Aptixa, a placement preparation quiz platform.",
    url: "https://www.jyotirmayabehera.com/projects",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsContent />
    </>
  );
}
