import Image from "next/image";
import Link from "next/link";
import { contactInfo } from "@/data/contact";

function GithubIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={`h-5 w-5 ${className}`} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LinkedinIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={`h-5 w-5 ${className}`} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function SparkleIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={`w-4 h-4 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M5 21v-4M3 19h4M21 3v4M19 5h4M21 21v-4M19 19h4" />
    </svg>
  );
}

function CodeIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={`w-5 h-5 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      className="relative min-h-[calc(100svh-var(--navbar-h))] flex items-center px-4 sm:px-6 lg:px-8 pt-[var(--navbar-h)]"
      aria-labelledby="hero-heading"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Gradient orb 1 */}
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-[var(--accent)]/10 via-transparent to-[#d4a813]/10 blur-3xl animate-float" />
        {/* Gradient orb 2 */}
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-[#d4a813]/10 via-transparent to-[var(--accent)]/10 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3e%3cpath d='M100 0L0 0 0 100' fill='none' stroke='%23b8860b' stroke-width='0.5'/%3e%3c/svg%3e")`,
          backgroundSize: "100px 100px"
        }} />
      </div>

      <div className="mx-auto w-full max-w-5xl py-10 sm:py-16 lg:py-24 relative z-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 lg:gap-16">
          {/* Main Text Content */}
          <div className="flex-1 max-w-2xl">
            {/* Tagline (Dominant Headline) */}
            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--fg)] leading-[1.15] text-balance"
            >
              Turning problems into
              <br />
              <span className="gradient-text">opportunities.</span>
            </h1>

            {/* Decorative accent line */}
            <div className="mt-5 flex items-center gap-2.5">
              <div className="w-12 h-[2px] bg-gradient-to-r from-[var(--accent)] to-[#7c3aed] rounded-full" />
              <SparkleIcon className="text-[var(--accent)]" />
            </div>

            {/* Name & Academic Identity with Mobile-First Avatar */}
            <div className="mt-5 flex items-center gap-3 sm:gap-4">
              <div className="md:hidden relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-[var(--border)] shadow-lg bg-[var(--bg-elevated)]">
                <Image
                  src="/images/profile.jpeg"
                  alt="Jyotirmaya Behera"
                  width={80}
                  height={80}
                  priority
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "50% 40%" }}
                />
                <div className="absolute inset-0 rounded-full border border-[var(--accent)]/20" />
              </div>
              <div className="min-w-0">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[var(--fg)] truncate">
                  Jyotirmaya Behera
                </p>
              </div>
            </div>

            {/* Introduction */}
            <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-[var(--fg-muted)]">
              Exploring modern web technologies and AI/ML through practical
              projects, with a focus on building useful solutions to real-world
              problems.
            </p>

            {/* CTA buttons - Full width on mobile */}
            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-6 py-3.5 text-sm font-medium text-white shadow-md hover:shadow-lg hover:bg-[var(--accent-hover)] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 w-full sm:w-auto"
              >
                View Projects
                <ArrowRightIcon />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] px-6 py-3.5 text-sm font-medium text-[var(--fg)] shadow-sm hover:border-[var(--accent)] hover:bg-[var(--bg-elevated)] hover:shadow-md hover:text-[var(--accent)] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 w-full sm:w-auto"
              >
                Contact Me
                <ArrowRightIcon />
              </Link>
            </div>

            {/* Social links */}
            <div className="mt-7 flex items-center gap-4">
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-11 h-11 rounded-lg text-[var(--fg-subtle)] hover:text-[var(--accent)] hover:bg-[var(--accent-light)]/30 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
                aria-label="GitHub profile"
              >
                <GithubIcon />
              </a>

              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-11 h-11 rounded-lg text-[var(--fg-subtle)] hover:text-[var(--accent)] hover:bg-[var(--accent-light)]/30 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon />
              </a>

              <a
                href={`mailto:${contactInfo.email}`}
                className="group flex items-center justify-center w-11 h-11 rounded-lg text-[var(--fg-subtle)] hover:text-[var(--accent)] hover:bg-[var(--accent-light)]/30 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Desktop Profile Card: Premium circular frame */}
          <div className="hidden md:block shrink-0 pt-1 relative">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--accent)]/20 to-[#d4a813]/20 blur-2xl opacity-50 animate-float" style={{ animationDelay: "-2s" }} />
            
            <div className="relative w-56 h-56 lg:w-64 lg:h-64 rounded-full p-1.5 bg-gradient-to-br from-[var(--accent)]/30 to-[#d4a813]/30 shadow-xl hover:shadow-[0_0_60px_rgba(184,134,11,0.2)] transition-all duration-500">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-[var(--bg-surface)] border border-[var(--border)]">
                <Image
                  src="/images/profile.jpeg"
                  alt="Jyotirmaya Behera"
                  fill
                  priority
                  sizes="(max-width: 1024px) 224px, 256px"
                  className="object-cover"
                  style={{ objectPosition: "50% 40%" }}
                />
              </div>
            </div>

            {/* Decorative floating elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-xl bg-[var(--accent-light)]/50 border border-[var(--accent)]/20 flex items-center justify-center animate-float" style={{ animationDelay: "-1s" }}>
              <CodeIcon className="text-[var(--accent)]" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-10 h-10 rounded-xl bg-[#d4a813]/10 border border-[#d4a813]/20 flex items-center justify-center animate-float" style={{ animationDelay: "-4s" }}>
              <SparkleIcon className="text-[#d4a813]" />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}