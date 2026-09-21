"use client";

import { useState } from "react";
import { experiences } from "@/data/experience";
import PageHeader from "@/components/PageHeader";

export default function ExperienceContent() {
  const [expandedIndices, setExpandedIndices] = useState<Record<number, boolean>>({
    0: true,
  });

  const toggleExpand = (index: number) => {
    setExpandedIndices((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section
      id="experience"
      className="px-4 pb-16 pt-20 sm:px-6 sm:pb-24 sm:pt-24 lg:px-8"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-4xl">
        <PageHeader
          headingId="experience-heading"
          title="Experience"
          description="Internships and engineering work."
        />

        {/* Timeline Stack directly without cluttered starting buttons */}
        <div className="relative space-y-6 sm:space-y-8 pl-4 sm:pl-8 border-l-2 border-[var(--border)]">
          {experiences.map((exp, index) => {
            const isExpanded = !!expandedIndices[index];

            return (
              <div key={`${exp.organization}-${index}`} className="relative">
                {/* Timeline Checkpoint Marker */}
                <div
                  className="absolute -left-[23px] sm:-left-[39px] top-6 size-3.5 sm:size-4 rounded-full border-2 border-[var(--border)] bg-[var(--bg)] transition-colors duration-200"
                  aria-hidden="true"
                >
                  <div className="size-full rounded-full bg-[var(--accent)]" />
                </div>

                {/* Experience Glass Card */}
                <div className="group relative rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)]/90 p-5 sm:p-6 backdrop-blur-xl shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/50 hover:shadow-xl">
                  {/* Subtle ambient hover glow */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--accent)]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Header Row: Org Monogram, Titles & Badges */}
                  <div className="relative z-10 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-center gap-3">
                      {/* Monogram Badge */}
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] text-xs font-bold font-mono text-[var(--accent)] group-hover:border-[var(--accent)]/40 transition-colors">
                        {exp.organization
                          .split(" ")
                          .map((word) => word[0])
                          .join("")
                          .slice(0, 2)}
                      </div>

                      <div>
                        <h2 className="text-base sm:text-lg font-bold tracking-tight text-[var(--fg)]">
                          {exp.project}
                        </h2>
                        <p className="text-xs sm:text-sm font-medium text-[var(--fg-muted)]">
                          {exp.organization} ·{" "}
                          <span className="text-[var(--accent)]">{exp.title}</span>
                        </p>
                      </div>
                    </div>

                    {/* Meta Badges */}
                    <div className="flex items-center gap-2 self-start">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--bg-elevated)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--fg-muted)] border border-[var(--border)]">
                        <span className="size-1.5 rounded-full bg-[var(--success)]" />
                        Completed
                      </span>
                      {exp.period && (
                        <span className="rounded-full bg-[var(--accent-light)]/40 px-2.5 py-0.5 text-[11px] font-medium text-[var(--accent)] border border-[var(--accent)]/20">
                          {exp.period}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Concise Description */}
                  <p className="relative z-10 mt-3 text-xs sm:text-sm leading-relaxed text-[var(--fg-muted)]">
                    {exp.description}
                  </p>

                  {/* Expandable Key Highlights */}
                  {exp.highlights && exp.highlights.length > 0 && (
                    <div className="relative z-10 mt-3">
                      <button
                        type="button"
                        onClick={() => toggleExpand(index)}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--accent)] hover:underline cursor-pointer focus:outline-none"
                      >
                        <span>{isExpanded ? "Hide key takeaways" : "View key takeaways"}</span>
                        <svg
                          className={`size-3 transition-transform duration-200 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {isExpanded && (
                        <ul className="mt-2 space-y-1.5 rounded-xl bg-[var(--bg-elevated)]/60 p-3 text-xs text-[var(--fg-muted)] border border-[var(--border)]/60">
                          {exp.highlights.map((highlight, hIndex) => (
                            <li key={hIndex} className="flex items-start gap-2">
                              <span className="text-[var(--accent)] mt-0.5 shrink-0">✦</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}

                  {/* Tech Tags */}
                  <div className="relative z-10 mt-4 flex flex-wrap items-center gap-1.5 pt-3 border-t border-[var(--border)]/50">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg bg-[var(--bg-elevated)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--fg-muted)] border border-transparent group-hover:border-[var(--border)] transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
