import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import PageHeader from "@/components/PageHeader";

const highlights = [
  {
    title: "Building with purpose",
    description: "Practical full-stack and AI/ML projects designed to solve real problems.",
    href: "/#work",
    linkLabel: "View projects",
    iconName: "code" as const,
  },
  {
    title: "Learning in depth",
    description: "An Integrated MCA student building strong computer science foundations.",
    href: "/education",
    linkLabel: "View education",
    iconName: "graduation" as const,
  },
  {
    title: "Always exploring",
    description: "Modern web technologies, AI advancements, and open-source collaboration.",
    href: "/skills",
    linkLabel: "Explore skills",
    iconName: "book" as const,
  },
];

export default function AboutContent() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-4 pb-16 pt-24 sm:px-6 sm:pb-24 sm:pt-28 lg:px-8 max-w-5xl mx-auto"
      aria-labelledby="about-heading"
    >
      <PageHeader
        headingId="about-heading"
        title="About Jyotirmaya Behera"
        description="Software developer and student exploring the intersection of web technologies and AI/ML."
      />

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(17rem,0.65fr)] lg:items-start">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--color-hero-bg)] p-6 sm:p-8">
          <p className="text-base leading-relaxed text-[var(--color-body-ink)] sm:text-lg">
            I am an Integrated MCA student at Utkal University in Bhubaneswar, Odisha. My academic journey
            combines computer science fundamentals with a focus on software development, artificial
            intelligence, and machine learning.
          </p>
          <p className="mt-5 text-base leading-relaxed text-[var(--color-body-ink)] sm:text-lg">
            I build practical software projects that solve real problems. My work spans full-stack web
            development, AI/ML applications, and learning modern technologies. I believe in writing clean,
            maintainable code and continuously improving my craft.
          </p>
          <div className="mt-6 flex flex-wrap gap-2" aria-label="Current interests">
            {["Web development", "AI / ML", "Open source"].map((interest) => (
              <span
                key={interest}
                className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-3.5 py-1.5 text-xs font-semibold text-[var(--color-accent)]"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        <aside
          className="rounded-2xl border border-[var(--border)] bg-[var(--color-hero-bg)] p-6 sm:p-7"
          aria-label="Currently focused on"
        >
          <p className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            Currently focused on
          </p>
          <p className="mt-3 text-lg font-semibold leading-snug text-[var(--color-head-ink)]">
            Bridging academic learning with real-world application.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-body-ink)] opacity-80">
            Exploring modern frameworks, AI advancements, and ways to turn ideas into robust software.
          </p>
        </aside>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {highlights.map(({ title, description, href, linkLabel, iconName }) => (
          <Link
            key={title}
            href={href}
            className="group rounded-xl border border-[var(--border)] bg-[var(--color-hero-bg)] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-accent)]/40 hover:shadow-xs focus:outline-none"
          >
            <span className="grid size-11 place-items-center rounded-lg bg-[var(--bg)] border border-[var(--border)] text-[var(--color-accent)] transition-colors duration-200">
              <Icon name={iconName} size={20} />
            </span>
            <h2 className="mt-4 font-semibold text-base text-[var(--color-head-ink)]">{title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-body-ink)] opacity-80">{description}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-brand-blue)]">
              {linkLabel}
              <span className="warrow" aria-hidden="true">→</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
