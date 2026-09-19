"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { contactInfo } from "@/data/contact";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { label: "About",      href: "/about"      },
  { label: "Projects",   href: "/projects"   },
  { label: "Experience", href: "/experience" },
  { label: "Skills",     href: "/skills"     },
  { label: "Education",  href: "/education"  },
  { label: "Contact",    href: "/contact"    },
];

function MenuIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      className="w-5 h-5 transition-transform duration-300 ease-out"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
      style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
    >
      {isOpen ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      )}
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function ChevronRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={`w-5 h-5 text-[var(--fg-subtle)] ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  /* Reset scroll state and close mobile menu on route change */
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional state reset on route change
    setIsScrolled(false);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  /* Close mobile menu on Escape key */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  /* Detect scroll for glassmorphism effect */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[var(--bg)]/80 backdrop-blur-2xl border-b border-[var(--border)] shadow-sm"
            : "bg-transparent"
        }`}
        style={{ height: "var(--navbar-h)" }}
      >
        <nav
          className="mx-auto max-w-5xl h-full flex items-center justify-between px-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          {/* Logo / home link */}
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-[var(--fg)] hover:text-[var(--accent)] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-md px-2 py-1 -ml-2"
            aria-label="Go to homepage"
          >
            <span className="gradient-text">JB</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1" role="list">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  role="listitem"
                  className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${
                    isActive
                      ? "text-[var(--accent)] bg-[var(--accent-light)]/50 nav-active"
                      : "text-[var(--fg-muted)] hover:text-[var(--fg)] hover:bg-[var(--bg-elevated)]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pl-2 border-l border-[var(--border)] flex items-center">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Right Controls: Theme Toggle & Menu Button */}
          <div className="flex md:hidden items-center gap-1">
            <ThemeToggle />
            <button
              className="flex items-center justify-center w-10 h-10 -mr-1 rounded-md text-[var(--fg)] hover:bg-[var(--bg-elevated)] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <MenuIcon isOpen={isMobileMenuOpen} />
            </button>
          </div>
        </nav>
      </header>

      {/* Premium Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden animate-fade-in"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Mobile Drawer */}
          <div
            ref={menuRef}
            id="mobile-menu"
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm md:hidden flex flex-col bg-[var(--bg)] shadow-xl animate-slide-in-right"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            {/* Header with Profile */}
            <div className="flex flex-col items-center px-6 py-8 pb-6 border-b border-[var(--border)] relative overflow-hidden">
              {/* Subtle background pattern */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3e%3cpath d='M100 0L0 0 0 100' fill='none' stroke='%231a56db' stroke-width='0.5'/%3e%3c/svg%3e")`,
                backgroundSize: "80px 80px"
              }} />
              
              {/* Profile section */}
              <div className="relative z-10 flex flex-col items-center text-center w-full">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-3 border-[var(--accent)]/30 bg-[var(--bg-elevated)] shadow-lg">
                  <Image
                    src="/images/profile.jpeg"
                    alt="Jyotirmaya Behera"
                    width={96}
                    height={96}
                    priority
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "50% 40%" }}
                  />
                  {/* Accent ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-[var(--accent)]/20" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-[var(--fg)]">Jyotirmaya Behera</h3>
                <p className="mt-1 text-sm text-[var(--fg-muted)]">Integrated MCA Student</p>
                <p className="text-xs text-[var(--fg-subtle)]">Utkal University, Bhubaneswar</p>
              </div>

              {/* Close button */}
              <button
                className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full text-[var(--fg-muted)] hover:text-[var(--fg)] hover:bg-[var(--bg-elevated)] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 overflow-y-auto px-4 py-6" aria-label="Mobile menu links">
              <ul className="space-y-1" role="list">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  const delay = index * 50;
                  return (
                    <li key={item.label} style={{ transitionDelay: `${delay}ms` }} className="animate-slide-in-right">
                      <Link
                        href={item.href}
                        className={`group flex items-center justify-between px-4 py-4 rounded-xl text-base font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${
                          isActive
                            ? "text-[var(--accent)] bg-[var(--accent-light)]/30 font-semibold"
                            : "text-[var(--fg-muted)] hover:text-[var(--fg)] hover:bg-[var(--bg-elevated)]"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="flex items-center gap-3">
                          <span className="text-xs font-mono text-[var(--fg-subtle)] w-8 text-right opacity-50 group-hover:opacity-100 transition-opacity">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span>{item.label}</span>
                        </span>
                        <div className="flex items-center gap-2">
                          {isActive && (
                            <span className="w-2 h-2 rounded-full bg-[var(--accent)] transition-transform group-hover:scale-125" aria-hidden="true" />
                          )}
                          <ChevronRightIcon className="group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all duration-200" />
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Footer Section */}
            <div className="px-4 pb-6 border-t border-[var(--border)]">
              {/* Social Links */}
              <div className="mb-6">
                <p className="text-xs uppercase tracking-wider font-semibold text-[var(--fg-subtle)] mb-4 px-2">Connect</p>
                <div className="grid grid-cols-3 gap-3">
                  <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2 px-4 py-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] hover:border-[var(--accent)]/50 hover:bg-[var(--accent-light)]/20 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                    aria-label="GitHub profile"
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-[var(--fg-muted)] group-hover:text-[var(--accent)] transition-colors bg-[var(--bg)]">
                      <GithubIcon />
                    </div>
                    <span className="text-xs font-medium text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">GitHub</span>
                  </a>
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2 px-4 py-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] hover:border-[var(--accent)]/50 hover:bg-[var(--accent-light)]/20 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                    aria-label="LinkedIn profile"
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-[var(--fg-muted)] group-hover:text-[var(--accent)] transition-colors bg-[var(--bg)]">
                      <LinkedinIcon />
                    </div>
                    <span className="text-xs font-medium text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">LinkedIn</span>
                  </a>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="group flex flex-col items-center gap-2 px-4 py-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] hover:border-[var(--accent)]/50 hover:bg-[var(--accent-light)]/20 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                    aria-label="Email"
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-[var(--fg-muted)] group-hover:text-[var(--accent)] transition-colors bg-[var(--bg)]">
                      <MailIcon />
                    </div>
                    <span className="text-xs font-medium text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">Email</span>
                  </a>
                </div>
              </div>

              {/* Copyright */}
              <p className="text-center text-xs text-[var(--fg-subtle)]">
                &copy; {new Date().getFullYear()} Jyotirmaya Behera
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}