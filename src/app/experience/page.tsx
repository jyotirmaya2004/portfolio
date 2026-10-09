import type { Metadata } from "next";
import WorkAndExperience from "@/components/WorkAndExperience";
import PageHeader from "@/components/PageHeader";
import GsapInit from "@/components/GsapInit";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Work experience and internships of Jyotirmaya Behera — including a machine learning internship at NIELIT Bhubaneswar where he built an AI-based plant disease detection system using TensorFlow and computer vision.",
  alternates: {
    canonical: "https://jyotirmayabehera.com/experience",
  },
  openGraph: {
    title: "Experience | Jyotirmaya Behera",
    description:
      "Work experience and internships of Jyotirmaya Behera — including a machine learning internship at NIELIT Bhubaneswar where he built an AI-based plant disease detection system using TensorFlow and computer vision.",
    url: "https://jyotirmayabehera.com/experience",
  },
};

export default function ExperiencePage() {
  return (
    <>
      <GsapInit />
      <div className="pad-cards mx-auto w-full max-w-[1440px] pt-24 sm:pt-28 lg:pt-32">
        <PageHeader
          title="Experience"
          description="Internships, research fellowships, and engineering work across enterprise and open systems."
        />
      </div>
      <WorkAndExperience initialTab="experience" />
      <Footer />
    </>
  );
}