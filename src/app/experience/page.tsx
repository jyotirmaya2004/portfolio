import type { Metadata } from "next";
import ExperienceContent from "@/components/ExperienceContent";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Work experience and internships of Jyotirmaya Behera — including a machine learning internship at NIELIT Bhubaneswar where he built an AI-based plant disease detection system using TensorFlow and computer vision.",
  alternates: {
    canonical: "https://www.jyotirmayabehera.com/experience",
  },
  openGraph: {
    title: "Experience | Jyotirmaya Behera",
    description:
      "Work experience and internships of Jyotirmaya Behera — including a machine learning internship at NIELIT Bhubaneswar where he built an AI-based plant disease detection system using TensorFlow and computer vision.",
    url: "https://www.jyotirmayabehera.com/experience",
  },
};

export default function ExperiencePage() {
  return (
    <>
      <ExperienceContent />
    </>
  );
}
