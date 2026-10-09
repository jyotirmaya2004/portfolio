"use client";

import {
  FaFacebookF,
  FaTelegramPlane,
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaRedditAlien,
  FaPinterestP,
  FaMediumM,
  FaQuora,
  FaEnvelope,
  FaGlobeAmericas,
} from "react-icons/fa";
import { SiThreads, SiSubstack, SiLeetcode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import type { IconType } from "react-icons";

import { socialLinks, centerHub, orbits, type SocialLink } from "@/data/contact";

const iconsMap: Record<string, IconType> = {
  facebook: FaFacebookF,
  telegram: FaTelegramPlane,
  threads: SiThreads,
  github: FaGithub,
  linkedin: FaLinkedinIn,
  youtube: FaYoutube,
  instagram: FaInstagram,
  x: FaXTwitter,
  reddit: FaRedditAlien,
  pinterest: FaPinterestP,
  medium: FaMediumM,
  quora: FaQuora,
  substack: SiSubstack,
  email: FaEnvelope,
  leetcode: SiLeetcode,
};

const orbitRadiusMap = new Map(orbits.map((o) => [o.id, o.radius]));

function getSocialNodeStyle(link: SocialLink): React.CSSProperties {
  const radius = orbitRadiusMap.get(link.orbit) ?? 0.35;
  const angleRad = (link.angle * Math.PI) / 180;
  const left = 50 + radius * 100 * Math.cos(angleRad);
  const top = 50 + radius * 100 * Math.sin(angleRad);

  return {
    left: `${left}%`,
    top: `${top}%`,
    transform: "translate(-50%, -50%)",
  };
}

export default function ContactContent() {
  return (
    <section
      id="contact"
      className="relative isolate flex min-h-[calc(100dvh-var(--navbar-h))] flex-col items-center justify-between overflow-hidden bg-[var(--bg)] px-4 pb-6 pt-[calc(var(--navbar-h)+1.5rem)] text-[var(--fg)] sm:px-6 sm:pb-8 sm:pt-[calc(var(--navbar-h)+2rem)]"
      aria-label="Contact links constellation"
    >
      {/* ── Background Subtle Ambient Monochrome Glow ──────────────── */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.035),transparent_65%)]" />

      {/* ── Orbital System Area ───────────────────────────────────────── */}
      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center">
        <div
          className="relative shrink-0 select-none"
          style={{
            width: "clamp(20rem, min(76vw, 76dvh), 42rem)",
            height: "clamp(20rem, min(76vw, 76dvh), 42rem)",
          }}
        >
          {/* ── Orbit Tracks (Loaded from orbitalContact.json) ─────────── */}
          {orbits.map((orbit) => (
            <div
              key={orbit.id}
              className={`pointer-events-none absolute rounded-full border border-[var(--border)] ${orbit.opacityClass}`}
              style={{ inset: `${orbit.insetPercentage}%` }}
              aria-hidden="true"
            />
          ))}

          {/* ── Center Globe ──────────────────────────────────────────── */}
          <a
            href={centerHub.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${centerHub.label}: ${centerHub.tooltip}`}
            className="group absolute z-30 flex size-12 sm:size-16 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--fg)] shadow-xs transition-all duration-200 hover:border-[var(--fg)] focus-visible:outline-none"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <FaGlobeAmericas
              className="size-6 sm:size-8 transition-transform duration-200"
              aria-hidden="true"
            />
            <span
              role="tooltip"
              className="pointer-events-none absolute bottom-[calc(100%+0.65rem)] left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-md border border-[var(--border)] bg-[var(--bg-surface)]/95 px-2 py-1 text-[11px] font-medium text-[var(--fg)] opacity-0 shadow-sm backdrop-blur transition-all duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
            >
              {centerHub.tooltip}
            </span>
          </a>

          {/* ── 15 Orbiting Nodes (Vibrant Brand Colors on Logo Icons) ─── */}
          {socialLinks.map((social) => {
            const Icon = iconsMap[social.icon] ?? FaGlobeAmericas;
            const hasProfile = Boolean(social.href && social.href !== "#");
            const tooltip = hasProfile
              ? social.label
              : `${social.label} — profile coming soon`;

            const iconColor = social.color || "var(--fg)";

            const nodeContent = (
              <>
                {/* Node Surface (Clean Elevated Theme Background) */}
                <span className="relative z-10 flex size-full items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-surface)] shadow-xs transition-all duration-200 group-hover:border-[var(--border-hover)] group-hover:bg-[var(--bg-elevated)]">
                  <Icon
                    className="size-4 sm:size-5 transition-transform duration-200"
                    style={{ color: iconColor }}
                    aria-hidden="true"
                  />
                </span>

                {/* Clean Tooltip on Hover/Focus */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-[calc(100%+0.65rem)] left-1/2 z-50 hidden -translate-x-1/2 whitespace-nowrap rounded-md border border-[var(--border)] bg-[var(--bg-surface)]/95 px-2 py-1 text-[11px] font-medium text-[var(--fg)] opacity-0 shadow-sm backdrop-blur transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 md:block"
                >
                  {tooltip}
                </span>
              </>
            );

            const commonProps = {
              className:
                "group absolute z-20 flex size-10 xs:size-11 sm:size-13 md:size-14 items-center justify-center rounded-full transition-transform duration-200 focus-visible:outline-none",
              style: getSocialNodeStyle(social),
            };

            if (!hasProfile) {
              return (
                <div
                  key={social.label}
                  {...commonProps}
                  role="img"
                  aria-label={tooltip}
                >
                  {nodeContent}
                </div>
              );
            }

            return (
              <a
                key={social.label}
                {...commonProps}
                href={social.href}
                target={social.external ? "_blank" : undefined}
                rel={social.external ? "noopener noreferrer" : undefined}
                aria-label={social.label}
              >
                {nodeContent}
              </a>
            );
          })}
        </div>
      </div>

      {/* ── Minimal Footer ───────────────────────────────────────────── */}
      <footer className="flex flex-col items-center gap-2 text-[10px] font-medium tracking-[0.16em] text-[var(--fg-subtle)] sm:text-xs">
        <p>© {new Date().getFullYear()} Jyotirmaya Behera</p>
      </footer>
    </section>
  );
}