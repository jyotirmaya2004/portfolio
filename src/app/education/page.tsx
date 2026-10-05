import type { Metadata } from "next";
import EducationContent from "@/components/EducationContent";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Educational background of Jyotirmaya Behera — pursuing an Integrated MCA at Utkal University, Bhubaneswar with a current CGPA of 9.32/10, combining computer science fundamentals with software development and AI/ML.",
  alternates: {
    canonical: "https://jyotirmayabehera.com/education",
  },
  openGraph: {
    title: "Education | Jyotirmaya Behera",
    description:
      "Educational background of Jyotirmaya Behera — pursuing an Integrated MCA at Utkal University, Bhubaneswar with a current CGPA of 9.32/10, combining computer science fundamentals with software development and AI/ML.",
    url: "https://jyotirmayabehera.com/education",
  },
};

export default function EducationPage() {
  return (
    <>
      <EducationContent />
    </>
  );
}