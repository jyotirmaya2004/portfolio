import Hero from "@/components/Hero";
import SkillsMarquee from "@/components/SkillsMarquee";
import WorkAndExperience from "@/components/WorkAndExperience";
import Footer from "@/components/Footer";
import GsapInit from "@/components/GsapInit";

export default function Home() {
  return (
    <>
      <GsapInit />
      <Hero />
      <SkillsMarquee />
      <WorkAndExperience />
      <Footer />
    </>
  );
}
