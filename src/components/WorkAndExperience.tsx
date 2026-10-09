import Link from "next/link";
import { projectsData } from "@/data/projects";
import { experiencesData } from "@/data/experience";

export default function WorkAndExperience() {
  return (
    <section
      id="projects"
      className="pad-cards mx-auto w-full max-w-[1440px] seq pt-20 sm:pt-28 relative text-[var(--color-ink)]"
    >
      {/* Anchor targets for hash navigation */}
      <div id="work" className="absolute top-0 pointer-events-none" aria-hidden="true" />

      {/* Main Section Header */}
      <div className="pb-2">
        <h2 className="t-section-head">Selected Work & Track Record</h2>
      </div>

      {/* ─── Featured Projects Subsection ─────────────────────────── */}
      <div className="space-y-6 pt-10 sm:pt-12">
        <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--color-accent)] font-semibold">
          Featured Projects
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-12 sm:gap-y-14">
          {projectsData.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group block text-left cursor-pointer transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-4 rounded-sm"
              aria-label={`View details for ${project.name}`}
            >
              <div className="space-y-3">
                <h4 className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors duration-200">
                  {project.name}
                </h4>
                {project.summary && (
                  <p className="text-sm sm:text-[15px] text-[var(--color-body-ink)] leading-relaxed">
                    {project.summary}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ─── Experience Track Subsection ─────────────────────────── */}
      <div id="experience" className="space-y-6 pt-16 sm:pt-20">
        <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--color-accent)] font-semibold">
          Experience & Fellowships
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-12 sm:gap-y-14">
          {experiencesData.map((experience) => (
            <Link
              key={experience.id}
              href={`/experience/${experience.id}`}
              className="group block text-left cursor-pointer transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-4 rounded-sm"
              aria-label={`View details for ${experience.organization} — ${experience.role}`}
            >
              <div className="space-y-3">
                <h4 className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors duration-200">
                  {experience.organization} — {experience.role}
                </h4>
                {experience.summary && (
                  <p className="text-sm sm:text-[15px] text-[var(--color-body-ink)] leading-relaxed">
                    {experience.summary}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
