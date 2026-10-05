import type { Metadata } from "next";
import SkillsContent from "@/components/SkillsContent";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills of Jyotirmaya Behera — spanning full-stack web development with Next.js, React, TypeScript, and Node.js; backend systems with Python, Flask, and PostgreSQL; and AI/ML with TensorFlow and computer vision.",
  alternates: {
    canonical: "https://jyotirmayabehera.com/skills",
  },
  openGraph: {
    title: "Skills | Jyotirmaya Behera",
    description:
      "Technical skills of Jyotirmaya Behera — spanning full-stack web development with Next.js, React, TypeScript, and Node.js; backend systems with Python, Flask, and PostgreSQL; and AI/ML with TensorFlow and computer vision.",
    url: "https://jyotirmayabehera.com/skills",
  },
};

export default function SkillsPage() {
  return (
    <>
      <SkillsContent />
    </>
  );
}