import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectById } from "@/data/projects";
import { Icon } from "@/components/ui/Icon";
import Footer from "@/components/Footer";
import GsapInit from "@/components/GsapInit";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const title = project.subtitle?.trim()
    ? `${project.name} — ${project.subtitle}`
    : `${project.name} | Jyotirmaya Behera`;
  const description =
    project.summary?.trim() || `${project.name} engineering project overview and architecture.`;
  const canonicalUrl = `https://jyotirmayabehera.com/projects/${project.id}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${project.name} | Jyotirmaya Behera`,
      description,
      url: canonicalUrl,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | Jyotirmaya Behera`,
      description,
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  const allProjects = getAllProjects();
  const currentIndex = allProjects.findIndex((p) => p.id === id);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.name,
    ...(project.summary?.trim() ? { description: project.summary } : {}),
    operatingSystem: "Web",
    author: {
      "@type": "Person",
      name: "Jyotirmaya Behera",
      url: "https://jyotirmayabehera.com",
    },
    ...(project.liveUrl?.trim() ? { url: project.liveUrl } : {}),
  };

  return (
    <>
      <GsapInit />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="pad-cards mx-auto w-full max-w-[1240px] pt-20 sm:pt-24 lg:pt-28 pb-12 text-[var(--color-ink)]">
        {/* Back Link */}
        <div className="pb-8">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--fg-muted)] hover:text-[var(--color-accent)] transition-colors duration-200"
          >
            <Icon
              name="arrow-left"
              size={13}
              className="transition-transform duration-200 group-hover:-translate-x-1 text-[var(--fg-muted)] group-hover:text-[var(--color-accent)]"
            />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Main Grid: Left Column (Identity, CTA, Stack) + Right Column (Narrative, Challenge, Features) */}
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] xl:grid-cols-[420px_1fr] gap-10 lg:gap-16 items-start">
          {/* Left Column: Pinned on Desktop */}
          <header className="lg:sticky lg:top-28 lg:self-start space-y-6">
            <div className="space-y-3">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[var(--color-ink)] leading-[1.15]">
                {project.name}
              </h1>

              {/* Subtitle: Only rendered if non-empty */}
              {project.subtitle?.trim() && (
                <p className="text-base sm:text-lg text-[var(--color-accent)] font-medium leading-snug">
                  {project.subtitle}
                </p>
              )}
            </div>

            {/* Action Links: Only rendered if at least one link exists */}
            {(project.liveUrl?.trim() || project.githubUrl?.trim()) && (
              <div className="flex flex-wrap items-center gap-3 pt-1">
                {project.liveUrl?.trim() && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[var(--color-brand-blue)] rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <span>View Live Platform</span>
                    <Icon name="external-link" size={13} />
                  </a>
                )}
                {project.githubUrl?.trim() && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[var(--color-ink)] bg-[var(--bg)] border border-[var(--border)] hover:border-[var(--color-accent)] rounded-lg transition-colors"
                  >
                    <Icon name="github" size={14} />
                    <span>GitHub Repository</span>
                  </a>
                )}
              </div>
            )}

            {/* Technologies & Infrastructure: Rendered in Left Column */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="space-y-2.5 pt-2">
                <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--color-accent)] font-semibold">
                  Technologies
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
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

          {/* Right Column: Narrative, Problem/Challenge, Features */}
          <div className="space-y-10">
            {/* Overview */}
            {project.summary?.trim() && (
              <section className="space-y-3">
                <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--color-accent)] font-semibold">
                  Overview
                </h2>
                <p className="text-base sm:text-[17px] text-[var(--color-body-ink)] leading-relaxed">
                  {project.summary}
                </p>
              </section>
            )}

            {/* Problem & Challenge */}
            {project.challenge?.trim() && (
              <section className="space-y-3">
                <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--color-accent)] font-semibold">
                  The Problem & Challenge
                </h2>
                <p className="text-base sm:text-[17px] text-[var(--color-body-ink)] leading-relaxed">
                  {project.challenge}
                </p>
              </section>
            )}

            {/* Key Features & Engineering Architecture */}
            {project.features && project.features.length > 0 && (
              <section className="space-y-3.5">
                <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--color-accent)] font-semibold">
                  Key Features & Engineering Architecture
                </h2>
                <ul className="space-y-3">
                  {project.features.map((item, idx) => (
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

        {/* Project Pagination — Zero Divider Line */}
        {(prevProject || nextProject) && (
          <nav
            aria-label="Project navigation"
            className="mt-16 pt-8 flex items-center justify-between gap-6"
          >
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.id}`}
                className="group flex flex-col items-start gap-1 text-left"
              >
                <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--fg-subtle)] group-hover:text-[var(--color-accent)] transition-colors flex items-center gap-1.5">
                  <Icon name="arrow-left" size={11} /> Previous Project
                </span>
                <span className="font-serif text-base sm:text-lg font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
                  {prevProject.name}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.id}`}
                className="group flex flex-col items-end gap-1 text-right ml-auto"
              >
                <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--fg-subtle)] group-hover:text-[var(--color-accent)] transition-colors flex items-center gap-1.5">
                  Next Project <Icon name="arrow-right" size={11} />
                </span>
                <span className="font-serif text-base sm:text-lg font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
                  {nextProject.name}
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
