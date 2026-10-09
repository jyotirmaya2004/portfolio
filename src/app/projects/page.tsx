import type { Metadata } from "next";
import WorkAndExperience from "@/components/WorkAndExperience";
import PageHeader from "@/components/PageHeader";
import GsapInit from "@/components/GsapInit";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Software projects by Jyotirmaya Behera — including Netram, an AI-powered monitoring platform; Plantexa, a plant disease detection system; Prodexa, a product data aggregator; and Aptixa, a placement preparation quiz platform.",
  alternates: {
    canonical: "https://jyotirmayabehera.com/projects",
  },
  openGraph: {
    title: "Projects | Jyotirmaya Behera",
    description:
      "Software projects by Jyotirmaya Behera — including Netram, an AI-powered monitoring platform; Plantexa, a plant disease detection system; Prodexa, a product data aggregator; and Aptixa, a placement preparation quiz platform.",
    url: "https://jyotirmayabehera.com/projects",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <GsapInit />
      <div className="pad-cards mx-auto w-full max-w-[1440px] pt-24 sm:pt-28 lg:pt-32">
        <PageHeader
          title="Projects"
          description="Featured engineering systems, machine learning pipelines, and production full-stack applications."
        />
      </div>
      <WorkAndExperience initialTab="projects" />
      <Footer />
    </>
  );
}