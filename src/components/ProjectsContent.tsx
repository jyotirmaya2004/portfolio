"use client";

import { projects } from "@/data/projects";
import PageHeader from "@/components/PageHeader";

function GithubIcon() {
  return (
    <svg className="size-4 shrink-0 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg className="size-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

export default function ProjectsContent() {
  return (
    <section
      id="projects"
      className="px-4 pb-16 pt-20 sm:px-6 sm:pb-24 sm:pt-24 lg:px-8"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-5xl">
        <PageHeader
          headingId="projects-heading"
          title="Projects"
          description="Featured engineering projects and applications."
        />

        {/* Premium Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group relative flex flex-col justify-between rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)]/90 p-6 backdrop-blur-xl shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--accent)]/50 hover:shadow-xl"
            >
              {/* Subtle ambient hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--accent)]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10">
                {/* Header Row: Status Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--bg-elevated)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--fg-muted)] border border-[var(--border)]">
                    <span
                      className={`size-1.5 rounded-full ${
                        project.status === "DEPLOYED"
                          ? "bg-[var(--success)] animate-pulse"
                          : "bg-[var(--accent)]"
                      }`}
                      aria-hidden="true"
                    />
                    <span>{project.status === "DEPLOYED" ? "Live" : "Completed"}</span>
                  </span>

                  <span className="text-[11px] font-mono text-[var(--fg-subtle)] uppercase">
                    {project.technologies[0]}
                  </span>
                </div>

                {/* Project Title & Classification */}
                <h2 className="text-xl font-bold tracking-tight text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">
                  {project.name}
                </h2>
                <p className="mt-1 text-xs font-medium text-[var(--accent)]">
                  {project.classification}
                </p>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[var(--fg-muted)]">
                  {project.description}
                </p>
              </div>

              {/* Bottom: Tech Stack & Action Links */}
              <div className="relative z-10 mt-6 pt-4 border-t border-[var(--border)]/60">
                {/* Tech Badges */}
                <div className="flex flex-wrap items-center gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-[var(--bg-elevated)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--fg-muted)] border border-transparent group-hover:border-[var(--border)] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-2.5">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl bg-[var(--accent)] px-3.5 py-1.5 text-xs font-semibold text-white shadow-xs hover:bg-[var(--accent-hover)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                    >
                      <span>Live Demo</span>
                      <ExternalLinkIcon />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl bg-[var(--bg-elevated)] px-3.5 py-1.5 text-xs font-semibold text-[var(--fg)] hover:text-[var(--accent)] hover:bg-[var(--border)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] border border-[var(--border)]"
                    >
                      <GithubIcon />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}