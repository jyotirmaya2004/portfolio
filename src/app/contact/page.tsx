import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Jyotirmaya Behera. Open to internship opportunities, project collaborations, and general discussions about software development and AI/ML.",
  alternates: {
    canonical: "https://www.jyotirmayabehera.com/contact",
  },
  openGraph: {
    title: "Contact | Jyotirmaya Behera",
    description:
      "Get in touch with Jyotirmaya Behera. Open to internship opportunities, project collaborations, and general discussions about software development and AI/ML.",
    url: "https://www.jyotirmayabehera.com/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
