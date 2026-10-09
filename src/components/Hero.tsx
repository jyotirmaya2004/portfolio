"use client";

import Image from "next/image";
import { contactInfo } from "@/data/contact";

export default function Hero() {
  return (
    <section className="pad-hero mx-auto w-full max-w-[1440px] pt-28 sm:pt-32 lg:pt-36">
      {/* Hero container: Open top, left, and right; bounded only by the bottom border */}
      <div className="hero-card border-b border-[var(--border)] bg-[var(--color-hero-bg)] px-6 sm:px-10 lg:px-14 pt-0 pb-0 relative overflow-visible">
        {/* Subtle gradual hue starting from the bottom baseline and fading upward */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[var(--color-accent)]/[0.06] via-[var(--color-accent)]/[0.01] to-transparent z-0"
          aria-hidden="true"
        />

        <div className="grid h-full grid-cols-1 items-end gap-8 lg:gap-12 lg:grid-cols-[1.1fr_1fr] relative z-10 overflow-visible">
          {/* Copy Column */}
          <div
            className="hero-copy seq order-2 lg:order-1 pt-6 sm:pt-8 lg:pt-10 pb-6 sm:pb-8 lg:pb-10"
            style={{ "--sd": "180ms" } as React.CSSProperties}
          >
            {/* Main Headlines */}
            <h1 className="t-serif-hero text-[var(--color-ink)]">
              Hi, I’m Jyoti.
            </h1>
            <h2 className="mt-3 sm:mt-4 t-sans-hero text-[var(--color-ink)] max-w-[560px]">
              Full-stack{" "}
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif italic font-semibold text-[var(--color-accent)] luxury-underline focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-4 rounded-xs"
                aria-label="GitHub Profile (Full-stack developer)"
              >
                developer
              </a>{" "}
              and{" "}
              <a
                href="https://www.youtube.com/@jyotirmaya2004"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif italic font-semibold text-[var(--color-accent)] luxury-underline focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-4 rounded-xs"
                aria-label="YouTube Channel (Podcaster)"
              >
                podcaster
              </a>
              .
            </h2>

            {/* Narrative Bio */}
            <p className="mt-4 sm:mt-5 max-w-[500px] t-body-lg text-[var(--color-body-ink)] leading-relaxed">
              I build production-grade web applications and applied AI systems, focused on clean architecture, performance, and scalability.
            </p>
          </div>

          {/* Portrait Column: Aligned to bottom baseline with top extending outside */}
          <div
            className="seq order-1 lg:order-2 flex justify-center lg:justify-end items-end relative overflow-visible"
            style={{ "--sd": "360ms" } as React.CSSProperties}
          >
            {/* Gradual hue starting from the bottom of the photo and radiating upward */}
            <div
              className="pointer-events-none absolute -bottom-4 inset-x-0 h-3/4 bg-gradient-to-t from-[var(--color-accent)]/15 via-[var(--color-accent)]/[0.03] to-transparent blur-2xl z-0"
              aria-hidden="true"
            />

            <div className="relative w-60 sm:w-68 md:w-76 lg:w-[330px] xl:w-[360px] aspect-[1140/1380] -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-18 xl:-mt-18 z-10">
              <Image
                src="/images/profile.png"
                alt="Jyotirmaya Behera"
                fill
                priority
                sizes="(min-width: 1280px) 360px, (min-width: 1024px) 330px, (min-width: 768px) 304px, (min-width: 640px) 272px, 240px"
                className="object-contain object-bottom select-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}