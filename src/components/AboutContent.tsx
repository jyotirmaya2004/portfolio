import Link from "next/link";
import { FaArrowRight, FaBookOpen, FaCode, FaGraduationCap } from "react-icons/fa";
import PageHeader from "@/components/PageHeader";

const highlights = [
  { title: "Building with purpose", description: "Practical full-stack and AI/ML projects designed to solve real problems.", href: "/projects", linkLabel: "View projects", Icon: FaCode },
  { title: "Learning in depth", description: "An Integrated MCA student building strong computer science foundations.", href: "/education", linkLabel: "View education", Icon: FaGraduationCap },
  { title: "Always exploring", description: "Modern web technologies, AI advancements, and open-source collaboration.", href: "/skills", linkLabel: "Explore skills", Icon: FaBookOpen },
];

export default function AboutContent() {
  return (
    <section id="about" className="relative overflow-hidden px-4 pb-12 pt-20 sm:px-6 sm:pb-20 sm:pt-24 lg:px-8" aria-labelledby="about-heading">
      <div className="pointer-events-none absolute -right-32 top-20 size-80 rounded-full bg-[var(--accent-glow)] blur-3xl" />
      <div className="relative mx-auto max-w-5xl">
        <PageHeader headingId="about-heading" title="About" description="Software developer and student exploring the intersection of web technologies and AI/ML." />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(17rem,0.65fr)] lg:items-start">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-5 shadow-[var(--shadow-sm)] sm:p-7">
            <p className="text-base leading-relaxed text-[var(--fg-muted)] sm:text-lg">I am an Integrated MCA student at Utkal University in Bhubaneswar, Odisha. My academic journey combines computer science fundamentals with a focus on software development, artificial intelligence, and machine learning.</p>
            <p className="mt-5 text-base leading-relaxed text-[var(--fg-muted)] sm:text-lg">I build practical software projects that solve real problems. My work spans full-stack web development, AI/ML applications, and learning modern technologies. I believe in writing clean, maintainable code and continuously improving my craft.</p>
            <div className="mt-6 flex flex-wrap gap-2" aria-label="Current interests">
              {["Web development", "AI / ML", "Open source"].map((interest) => (
                <span key={interest} className="rounded-full border border-[var(--accent)]/20 bg-[var(--accent-light)]/35 px-3 py-1.5 text-xs font-semibold text-[var(--accent)] transition-transform duration-200 hover:-translate-y-0.5">{interest}</span>
              ))}
            </div>
          </div>

          <aside className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-5 sm:p-6" aria-label="Currently focused on">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent)]">Currently focused on</p>
            <p className="mt-3 text-lg font-semibold leading-snug text-[var(--fg)]">Bridging academic learning with real-world application.</p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--fg-muted)]">Exploring frameworks, AI advancements, and ways to turn ideas into useful software.</p>
          </aside>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {highlights.map(({ title, description, href, linkLabel, Icon }) => (
            <Link key={title} href={href} className="group rounded-xl border border-[var(--border)] bg-[var(--bg-surface)] p-5 shadow-[var(--shadow-xs)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--accent)]/45 hover:shadow-[var(--shadow-md)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]">
              <span className="grid size-10 place-items-center rounded-lg bg-[var(--accent-light)]/45 text-[var(--accent)] transition-transform duration-200 group-hover:scale-110"><Icon className="size-5" aria-hidden="true" /></span>
              <h2 className="mt-4 font-semibold text-[var(--fg)]">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">{description}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">{linkLabel} <FaArrowRight className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
