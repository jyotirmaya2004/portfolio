"use client";

import type { CSSProperties } from "react";
import {
  FaEnvelope, FaFacebookF, FaGithub, FaInstagram,
  FaLinkedinIn, FaPinterestP, FaQuora, FaRedditAlien,
  FaSnapchatGhost, FaTelegramPlane, FaYoutube, FaGlobeAmericas,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import type { IconType } from "react-icons";
import { SiLeetcode, SiSubstack, SiThreads } from "react-icons/si";
import { socialLinks, type SocialLink } from "@/data/contact";

const icons: Record<string, IconType> = {
  facebook: FaFacebookF, telegram: FaTelegramPlane, threads: SiThreads,
  github: FaGithub, linkedin: FaLinkedinIn, youtube: FaYoutube,
  instagram: FaInstagram, "x-twitter": FaXTwitter, reddit: FaRedditAlien,
  pinterest: FaPinterestP, snapchat: FaSnapchatGhost,
  quora: FaQuora, substack: SiSubstack, email: FaEnvelope, leetcode: SiLeetcode,
  x: FaXTwitter,
};

const orbitPositions: Record<string, { radius: number; angle: number }> = {
  facebook: { radius: 0.455, angle: -90 },
  telegram: { radius: 0.455, angle: -18 },
  threads: { radius: 0.455, angle: 54 },
  github: { radius: 0.455, angle: 126 },
  linkedin: { radius: 0.455, angle: 198 },
  youtube: { radius: 0.35, angle: -54 },
  instagram: { radius: 0.35, angle: 18 },
  x: { radius: 0.35, angle: 90 },
  reddit: { radius: 0.35, angle: 162 },
  pinterest: { radius: 0.35, angle: 234 },
  leetcode: { radius: 0.245, angle: -90 },
  snapchat: { radius: 0.245, angle: -18 },
  quora: { radius: 0.245, angle: 54 },
  substack: { radius: 0.245, angle: 126 },
  email: { radius: 0.245, angle: 198 },
};

function socialNodeStyle(link: SocialLink): CSSProperties {
  const { radius, angle: degrees } = orbitPositions[link.position] ?? { radius: 0.35, angle: 0 };
  const angle = (degrees * Math.PI) / 180;

  return {
    left: `${50 + Math.cos(angle) * radius * 100}%`,
    top: `${50 + Math.sin(angle) * radius * 100}%`,
    transform: "translate(-50%, -50%)",
  } as CSSProperties;
}

function SocialNode({ link }: { link: SocialLink }) {
  const Icon = icons[link.icon] ?? FaGlobeAmericas;
  const hasProfileLink = Boolean(link.href && link.href !== "#");
  const tooltip = hasProfileLink ? link.label : `${link.label} — profile coming soon`;
  const node = (
    <>
      <span className="grid size-full place-items-center rounded-full border border-[var(--border)] bg-[var(--bg-surface)] shadow-[var(--shadow-md)] transition-[background-color,border-color,box-shadow,transform] duration-200 group-hover:scale-110 group-hover:border-[var(--border-hover)] group-hover:bg-[var(--bg-elevated)] group-focus-visible:scale-110 group-focus-visible:border-[var(--border-hover)] group-focus-visible:ring-2 group-focus-visible:ring-[var(--accent)] group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-[var(--bg)]">
        <Icon className="size-4 sm:size-5" style={{ color: link.color }} aria-hidden="true" />
      </span>
      <span aria-hidden="true" className="pointer-events-none absolute bottom-[calc(100%+0.65rem)] left-1/2 z-20 hidden -translate-x-1/2 whitespace-nowrap rounded-md border border-[var(--border)] bg-[var(--bg-surface)]/95 px-2 py-1 text-[11px] font-medium text-[var(--fg)] opacity-0 shadow-[var(--shadow-md)] backdrop-blur transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 md:block">
        {tooltip}
      </span>
    </>
  );
  const commonProps = {
    className: "contact-orbit-node group absolute size-11 sm:size-14",
    style: { ...socialNodeStyle(link), "--node-color": link.color } as CSSProperties,
  };

  if (!hasProfileLink) {
    return <div {...commonProps} role="img" aria-label={tooltip}>{node}</div>;
  }

  const isExternal = link.external ?? !link.href.startsWith("mailto:");
  return (
    <a {...commonProps} href={link.href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined} aria-label={link.label}>
      {node}
    </a>
  );
}

export default function ContactContent() {
  return (
    <section
      id="contact"
      className="relative isolate flex min-h-[calc(100dvh-var(--navbar-h))] overflow-hidden bg-[var(--bg)] px-4 pb-6 pt-[calc(var(--navbar-h)+1.5rem)] text-[var(--fg)] sm:px-6 sm:pb-8 sm:pt-[calc(var(--navbar-h)+2rem)]"
      aria-label="Contact links"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,var(--accent-glow),transparent_48%)] opacity-30" />
      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-between gap-6">
        <div
          className="contact-orbital-system relative grid shrink-0 place-items-center"
          style={{ "--orbital-size": "clamp(20rem, min(64vw, 74dvh), 40rem)" } as CSSProperties}
        >
          <div className="pointer-events-none absolute inset-[4.5%] rounded-full border border-[var(--border)] opacity-80" />
          <div className="pointer-events-none absolute inset-[15%] rounded-full border border-[var(--border)] opacity-65" />
          <div className="pointer-events-none absolute inset-[25.5%] rounded-full border border-[var(--border)] opacity-50" />
          <div className="relative z-10 grid size-12 place-items-center rounded-full border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--accent)] shadow-[var(--shadow-lg)] sm:size-16">
            <FaGlobeAmericas className="size-7 sm:size-9" aria-hidden="true" />
            <span className="sr-only">Personal website</span>
          </div>
          {socialLinks.map((link) => <SocialNode key={link.label} link={link} />)}
        </div>

        <footer className="flex flex-col items-center gap-2 text-[10px] font-medium tracking-[0.16em] text-[var(--fg-subtle)] sm:text-xs">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="size-1 rounded-full bg-[var(--border-hover)]" />
            <span className="size-1.5 rounded-full bg-[var(--fg-muted)]" />
            <span className="size-1 rounded-full bg-[var(--border-hover)]" />
          </div>
          <p>© {new Date().getFullYear()} Jyotirmaya Behera</p>
        </footer>
      </div>

      <style>{`
        .contact-orbital-system {
          width: var(--orbital-size);
          height: var(--orbital-size);
        }
        .contact-orbit-node:hover > span:first-child { box-shadow: 0 0 18px color-mix(in srgb, var(--node-color) 25%, transparent); }
      `}</style>
    </section>
  );
}
