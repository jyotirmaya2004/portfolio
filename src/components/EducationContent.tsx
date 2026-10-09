import { education } from "@/data/education";
import PageHeader from "@/components/PageHeader";

export default function EducationContent() {
  return (
    <section
      id="education"
      className="pt-24 sm:pt-28 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
      aria-labelledby="education-heading"
    >
      <PageHeader
        headingId="education-heading"
        title="Education"
        description="Academic background and computer science qualifications."
      />

      <div className="mt-4 space-y-10 border-l border-[var(--border)] pl-5 sm:pl-8">
        {education.map((edu, index) => (
          <article
            key={`${edu.institution}-${index}`}
            className="relative group"
          >
            {/* Timeline pip */}
            <div
              className="absolute -left-[26px] sm:-left-[38px] top-1 size-3 rounded-full border border-[var(--border)] bg-[var(--bg)] group-hover:border-[var(--color-accent)] transition-colors"
              aria-hidden="true"
            >
              <div className="size-full rounded-full bg-[var(--color-accent)]/80" />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div>
                <h2 className="text-lg font-semibold text-[var(--color-head-ink)]">
                  {edu.degree}
                </h2>
                <p className="mt-1 text-sm font-medium text-[var(--color-accent)]">
                  {edu.institution}
                </p>
                <p className="mt-1 text-xs font-mono text-[var(--fg-subtle)]">
                  {edu.location} · {edu.period}
                </p>
              </div>
              {edu.cgpa && (
                <span className="shrink-0 text-xs font-mono font-medium text-[var(--color-ink)] bg-[var(--color-hero-bg)] border border-[var(--border)] px-3 py-1 rounded-full self-start whitespace-nowrap">
                  {edu.cgpa}
                </span>
              )}
            </div>

            {edu.description && (
              <p className="mt-3 text-sm text-[var(--color-body-ink)] opacity-85 leading-relaxed max-w-2xl">
                {edu.description}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
