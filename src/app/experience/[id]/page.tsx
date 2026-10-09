import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllExperiences, getExperienceById } from "@/data/experience";
import { Icon } from "@/components/ui/Icon";
import Footer from "@/components/Footer";
import GsapInit from "@/components/GsapInit";

interface ExperiencePageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const experiences = getAllExperiences();
  return experiences.map((exp) => ({
    id: exp.id,
  }));
}

export async function generateMetadata({ params }: ExperiencePageProps): Promise<Metadata> {
  const { id } = await params;
  const experience = getExperienceById(id);

  if (!experience) {
    return {
      title: "Experience Not Found",
    };
  }

  const title = `${experience.role} — ${experience.organization}`;
  const description =
    experience.summary?.trim() || `${experience.role} at ${experience.organization}.`;
  const canonicalUrl = `https://jyotirmayabehera.com/experience/${experience.id}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${experience.role} | ${experience.organization}`,
      description,
      url: canonicalUrl,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${experience.role} | ${experience.organization}`,
      description,
    },
  };
}

export default async function ExperienceDetailPage({ params }: ExperiencePageProps) {
  const { id } = await params;
  const experience = getExperienceById(id);

  if (!experience) {
    notFound();
  }

  const allExperiences = getAllExperiences();
  const currentIndex = allExperiences.findIndex((e) => e.id === id);
  const prevExp = currentIndex > 0 ? allExperiences[currentIndex - 1] : null;
  const nextExp = currentIndex < allExperiences.length - 1 ? allExperiences[currentIndex + 1] : null;

  return (
    <>
      <GsapInit />

      <article className="pad-cards mx-auto w-full max-w-[1240px] pt-20 sm:pt-24 lg:pt-28 pb-12 text-[var(--color-ink)]">
        {/* Back Link */}
        <div className="pb-8">
          <Link
            href="/#experience"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--fg-muted)] hover:text-[var(--color-accent)] transition-colors duration-200"
          >
            <Icon
              name="arrow-left"
              size={13}
              className="transition-transform duration-200 group-hover:-translate-x-1 text-[var(--fg-muted)] group-hover:text-[var(--color-accent)]"
            />
            <span>Back to Experience</span>
          </Link>
        </div>

        {/* Main Grid: Left Column (Identity, Organization, Stack) + Right Column (Narrative, Challenge, Takeaways) */}
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] xl:grid-cols-[420px_1fr] gap-10 lg:gap-16 items-start">
          {/* Left Column: Pinned on Desktop */}
          <header className="lg:sticky lg:top-28 lg:self-start space-y-6">
            <div className="space-y-3">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[var(--color-ink)] leading-[1.15]">
                {experience.role}
              </h1>

              <p className="text-base sm:text-lg text-[var(--color-accent)] font-medium leading-snug">
                {experience.organization} — {experience.period}
              </p>

              {experience.tag?.trim() && (
                <p className="text-xs font-mono text-[var(--fg-muted)] pt-0.5">
                  {experience.tag}
                </p>
              )}
            </div>

            {/* Technologies & Tools: Rendered in Left Column */}
            {experience.technologies && experience.technologies.length > 0 && (
              <div className="space-y-2.5 pt-2">
                <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--color-accent)] font-semibold">
                  Technologies & Tools
                </h2>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-[var(--bg-elevated)] text-xs font-mono font-medium text-[var(--color-ink)] border border-[var(--border)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </header>

          {/* Right Column: Narrative Overview, Challenge, Key Deliverables */}
          <div className="space-y-10">
            {/* Overview */}
            {experience.summary?.trim() && (
              <section className="space-y-3">
                <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--color-accent)] font-semibold">
                  Overview
                </h2>
                <p className="text-base sm:text-[17px] text-[var(--color-body-ink)] leading-relaxed">
                  {experience.summary}
                </p>
              </section>
            )}

            {/* Challenge & Context */}
            {experience.challenge?.trim() && (
              <section className="space-y-3">
                <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--color-accent)] font-semibold">
                  Engineering Challenge
                </h2>
                <p className="text-base sm:text-[17px] text-[var(--color-body-ink)] leading-relaxed">
                  {experience.challenge}
                </p>
              </section>
            )}

            {/* Key Deliverables & Takeaways */}
            {experience.takeaways && experience.takeaways.length > 0 && (
              <section className="space-y-3.5">
                <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--color-accent)] font-semibold">
                  Key Deliverables & Takeaways
                </h2>
                <ul className="space-y-3">
                  {experience.takeaways.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm sm:text-base text-[var(--color-body-ink)] leading-relaxed"
                    >
                      <span
                        className="text-[var(--color-accent)] select-none font-semibold shrink-0"
                        aria-hidden="true"
                      >
                        −
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>

        {/* Experience Pagination — Zero Divider Line */}
        {(prevExp || nextExp) && (
          <nav
            aria-label="Experience navigation"
            className="mt-16 pt-8 flex items-center justify-between gap-6"
          >
            {prevExp ? (
              <Link
                href={`/experience/${prevExp.id}`}
                className="group flex flex-col items-start gap-1 text-left"
              >
                <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--fg-subtle)] group-hover:text-[var(--color-accent)] transition-colors flex items-center gap-1.5">
                  <Icon name="arrow-left" size={11} /> Previous Experience
                </span>
                <span className="font-serif text-base sm:text-lg font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
                  {prevExp.organization}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {nextExp ? (
              <Link
                href={`/experience/${nextExp.id}`}
                className="group flex flex-col items-end gap-1 text-right ml-auto"
              >
                <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--fg-subtle)] group-hover:text-[var(--color-accent)] transition-colors flex items-center gap-1.5">
                  Next Experience <Icon name="arrow-right" size={11} />
                </span>
                <span className="font-serif text-base sm:text-lg font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
                  {nextExp.organization}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </nav>
        )}
      </article>

      <Footer />
    </>
  );
}
