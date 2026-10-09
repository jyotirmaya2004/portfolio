"use client";

import Link from "next/link";
import { contactInfo } from "@/data/contact";
import { Icon } from "@/components/ui/Icon";
import {
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaRedditAlien,
  FaFacebookF,
  FaTelegramPlane,
  FaMediumM,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiThreads, SiLeetcode } from "react-icons/si";

const socialChannels = [
  { label: "GitHub", href: contactInfo.github, icon: FaGithub },
  { label: "LinkedIn", href: contactInfo.linkedin, icon: FaLinkedinIn },
  { label: "X (Twitter)", href: contactInfo.twitter, icon: FaXTwitter },
  { label: "LeetCode", href: "https://leetcode.com/u/jyotirmaya2004", icon: SiLeetcode },
  { label: "Instagram", href: "https://instagram.com/jyotirmaya2004", icon: FaInstagram },
  { label: "YouTube", href: "https://youtube.com/@jyotirmaya2004", icon: FaYoutube },
  { label: "Telegram", href: "https://t.me/jyotirmaya2004", icon: FaTelegramPlane },
  { label: "Reddit", href: "https://reddit.com/user/jyotirmaya2004", icon: FaRedditAlien },
  { label: "Threads", href: "https://threads.net/@jyotirmaya2004", icon: SiThreads },
  { label: "Medium", href: "https://medium.com/@jyotirmaya2004", icon: FaMediumM },
  { label: "Facebook", href: "https://facebook.com/jyotirmaya2004", icon: FaFacebookF },
];

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="site relative overflow-hidden bg-[#070b14] text-white">
      {/* Subtle ambient light in the footer background */}
      <div
        className="pointer-events-none absolute -left-32 -bottom-32 size-96 rounded-full bg-[var(--color-accent)]/5 blur-3xl opacity-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-0 size-80 rounded-full bg-[var(--color-brand-blue)]/5 blur-3xl opacity-10"
        aria-hidden="true"
      />

      <div className="pad-cards mx-auto w-full max-w-[1440px] py-16 sm:py-24 relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] items-start">
          {/* Identity & Contact Column */}
          <div>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-white">
              Jyotirmaya Behera
            </h2>

            <div className="text-base sm:text-lg text-white/90 mt-2 font-sans font-medium">
              Full-Stack Developer & AI Systems Engineer
            </div>
            <div className="text-xs sm:text-sm text-white/60 mt-1 font-mono flex items-center gap-1.5">
              <span>Bhubaneswar, Odisha, India</span>
            </div>

            <p className="text-sm sm:text-base text-white/80 mt-6 max-w-lg leading-relaxed">
              Have an engineering challenge, enterprise role, or research collaboration to discuss?
              Let’s connect and build something exceptional.
            </p>

            {/* Direct Email Link */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--color-accent)] text-black font-semibold text-sm hover:opacity-90 transition-opacity shadow-sm"
                href={`mailto:${contactInfo.email}`}
              >
                <Icon name="email" size={16} />
                <span>Get in touch via email</span>
                <span className="warrow" aria-hidden="true">→</span>
              </a>
              <span className="font-mono text-xs text-white/60">
                {contactInfo.email}
              </span>
            </div>

            {/* Social Channels */}
            <div className="mt-8">
              <div className="text-xs font-mono uppercase tracking-widest text-white/50 mb-3.5 font-semibold">
                Social & Profiles
              </div>
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 max-w-lg">
                {socialChannels.map((item) => {
                  const IconComp = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/social flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 hover:border-[var(--color-accent)] hover:text-white hover:bg-white/10 transition-colors duration-200"
                      aria-label={item.label}
                      title={item.label}
                    >
                      <IconComp size={16} aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Sitemap Links */}
          <div className="grid grid-cols-2 gap-8 sm:gap-12 lg:justify-end">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[var(--color-accent)] mb-4 font-semibold">
                Explore
              </div>
              <ul className="space-y-3 text-sm font-medium text-white/75">
                <li>
                  <Link href="/#work" className="hover:text-[var(--color-accent)] transition-colors">
                    Selected Work
                  </Link>
                </li>
                <li>
                  <Link href="/#work" className="hover:text-[var(--color-accent)] transition-colors">
                    Experience Track
                  </Link>
                </li>
                <li>
                  <Link href="/skills" className="hover:text-[var(--color-accent)] transition-colors">
                    Skills Constellation
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[var(--color-accent)] transition-colors">
                    About Narrative
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[var(--color-accent)] transition-colors">
                    Contact Galaxy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[var(--color-accent)] mb-4 font-semibold">
                Featured Systems
              </div>
              <ul className="space-y-3 text-sm font-medium text-white/75">
                <li>
                  <a
                    href="https://netram.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--color-accent)] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Netram (SIH)</span>
                    <span className="text-[10px] text-white/40">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/jyotirmaya2004/plantexa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--color-accent)] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Plantexa (NIELIT)</span>
                    <span className="text-[10px] text-white/40">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/jyotirmaya2004/prodexa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--color-accent)] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Prodexa</span>
                    <span className="text-[10px] text-white/40">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://aptixa.jyotirmayabehera.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--color-accent)] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Aptixa</span>
                    <span className="text-[10px] text-white/40">↗</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Back to Top */}
      <div className="relative z-10">
        <div className="pad-cards mx-auto w-full max-w-[1440px] flex flex-wrap items-center justify-between gap-4 py-6 text-xs text-white/60">
          <span>© 2026 Jyotirmaya Behera. All rights reserved.</span>
          <span>Crafted with Next.js 16, TypeScript & GSAP</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="hover:text-[var(--color-accent)] transition-colors flex items-center gap-1 font-mono uppercase tracking-wider text-[11px]"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
