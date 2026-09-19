import { experiences } from "@/data/experience";
import PageHeader from "@/components/PageHeader";

export default function ExperienceContent() {
  return (
    <section
      id="experience"
      className="pt-20 sm:pt-24 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-5xl">
        <PageHeader
          headingId="experience-heading"
          title="Experience"
          description="Internships and project experience."
        />

        <div className="mt-2 space-y-10">
          {experiences.map((exp, index) => (
            <article
              key={`${exp.organization}-${index}`}
              className="border-l-2 border-[var(--accent)] pl-4 sm:pl-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5">
                <div>
                  <h2 className="text-base font-semibold text-[var(--fg)]">
                    {exp.title}
                  </h2>
                  <p className="mt-0.5 text-sm font-medium text-[var(--fg-muted)]">
                    {exp.organization}
                  </p>
                  <p className="mt-0.5 text-sm text-[var(--fg-subtle)]">
                    {exp.project}
                  </p>
                </div>
                {exp.period && (
                  <span className="shrink-0 text-xs font-medium text-[var(--fg-subtle)] bg-[var(--border)] px-2.5 py-1 rounded self-start">
                    {exp.period}
                  </span>
                )}
              </div>

              <p className="mt-3 text-sm text-[var(--fg-muted)] leading-relaxed">
                {exp.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs font-medium text-[var(--fg-muted)] bg-[var(--bg)] border border-[var(--border)] rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
