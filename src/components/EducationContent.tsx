import { education } from "@/data/education";
import PageHeader from "@/components/PageHeader";

export default function EducationContent() {
  return (
    <section
      id="education"
      className="pt-20 sm:pt-24 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="education-heading"
    >
      <div className="mx-auto max-w-5xl">
        <PageHeader
          headingId="education-heading"
          title="Education"
          description="Academic background and qualifications."
        />

        <div className="mt-2 space-y-10">
          {education.map((edu, index) => (
            <article
              key={`${edu.institution}-${index}`}
              className="border-l-2 border-[var(--accent)] pl-4 sm:pl-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5">
                <div>
                  <h2 className="text-base font-semibold text-[var(--fg)]">
                    {edu.degree}
                  </h2>
                  <p className="mt-0.5 text-sm font-medium text-[var(--fg-muted)]">
                    {edu.institution}
                  </p>
                  <p className="mt-0.5 text-xs text-[var(--fg-subtle)]">
                    {edu.location} · {edu.period}
                  </p>
                </div>
                {edu.cgpa && (
                  <span className="shrink-0 text-xs font-medium text-[var(--fg-subtle)] bg-[var(--border)] px-2.5 py-1 rounded self-start whitespace-nowrap">
                    {edu.cgpa}
                  </span>
                )}
              </div>

              {edu.description && (
                <p className="mt-3 text-sm text-[var(--fg-muted)] leading-relaxed">
                  {edu.description}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
