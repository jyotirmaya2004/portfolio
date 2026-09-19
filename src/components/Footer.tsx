"use client";

import { useState, useEffect } from "react";
import { contactInfo } from "@/data/contact";

function GithubIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={`w-5 h-5 ${className}`} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

function LinkedinIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={`w-5 h-5 ${className}`} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
    </svg>
  );
}

function MailIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={`w-5 h-5 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- hydration sync
    setMounted(true);
    const footer = document.querySelector("#site-footer");
    const mainContent = document.querySelector("#main-content");
    
    if (!footer || !mainContent) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When main content's bottom leaves viewport, show footer
          if (!entry.isIntersecting && entry.boundingClientRect.bottom < window.innerHeight) {
            setIsVisible(true);
          } else if (entry.isIntersecting) {
            setIsVisible(false);
          }
        });
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    observer.observe(mainContent);
    return () => observer.disconnect();
  }, []);

  const currentYear = new Date().getFullYear();

  if (!mounted) {
    return (
      <footer
        id="site-footer"
        className="fixed bottom-0 left-0 right-0 z-10 h-32 md:h-40 bg-[var(--bg-surface)] border-t border-[var(--border)] opacity-0 transition-opacity duration-500"
        role="contentinfo"
        aria-hidden="true"
      />
    );
  }

  return (
    <footer
      id="site-footer"
      className={`fixed bottom-0 left-0 right-0 z-10 bg-[var(--bg-surface)] border-t border-[var(--border)] transition-all duration-500 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0 h-32 md:h-40 shadow-[0_-10px_30px_rgba(0,0,0,0.08)]"
          : "opacity-0 translate-y-full h-0 md:h-0"
      }`}
      role="contentinfo"
      aria-hidden={!isVisible}
    >
      {/* Top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent" />
      
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-6 md:py-8 h-full flex items-center justify-between gap-4">
        {/* Copyright - minimal */}
        <p className="text-xs text-[var(--fg-subtle)] whitespace-nowrap">
          &copy; {currentYear} Jyotirmaya Behera
        </p>

        {/* Social links - icon only, generous spacing */}
        <nav className="flex items-center gap-6" aria-label="Social links">
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-10 h-10 rounded-xl text-[var(--fg-subtle)] hover:text-[var(--accent)] hover:bg-[var(--accent-light)]/20 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-10 h-10 rounded-xl text-[var(--fg-subtle)] hover:text-[var(--accent)] hover:bg-[var(--accent-light)]/20 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </a>
          <a
            href={`mailto:${contactInfo.email}`}
            className="group flex items-center justify-center w-10 h-10 rounded-xl text-[var(--fg-subtle)] hover:text-[var(--accent)] hover:bg-[var(--accent-light)]/20 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            aria-label="Email"
          >
            <MailIcon />
          </a>
        </nav>

        {/* Right side - empty for balance or tech stack */}
        <div className="w-10" />
      </div>
    </footer>
  );
}