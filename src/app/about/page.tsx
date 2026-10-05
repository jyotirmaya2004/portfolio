import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About Jyotirmaya Behera",
  description:
    "Learn about Jyotirmaya Behera — a software developer and Integrated MCA student at Utkal University, Bhubaneswar, building AI/ML systems and full-stack applications.",
  alternates: {
    canonical: "https://jyotirmayabehera.com/about",
  },
  openGraph: {
    title: "About Jyotirmaya Behera | Software Developer",
    description:
      "Learn about Jyotirmaya Behera — a software developer and Integrated MCA student at Utkal University, Bhubaneswar, building AI/ML systems and full-stack applications.",
    url: "https://jyotirmayabehera.com/about",
  },
};

const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Jyotirmaya Behera",
    url: "https://jyotirmayabehera.com",
    image: "https://jyotirmayabehera.com/images/profile.jpeg",
    jobTitle: "Software Developer",
    description:
      "Software developer and Integrated MCA student at Utkal University, Bhubaneswar, building AI/ML systems and full-stack web applications.",
    sameAs: [
      "https://github.com/jyotirmaya2004",
      "https://linkedin.com/in/jyotirmaya2004",
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
      />
      <AboutContent />
    </>
  );
}