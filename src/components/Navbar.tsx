"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    icon: (
      <svg className="size-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    label: "About",
    href: "/about",
    icon: (
      <svg className="size-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    label: "Projects",
    href: "/projects",
    icon: (
      <svg className="size-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    label: "Experience",
    href: "/experience",
    icon: (
      <svg className="size-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Skills",
    href: "/skills",
    icon: (
      <svg className="size-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    label: "Education",
    href: "/education",
    icon: (
      <svg className="size-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5" />
      </svg>
    ),
  },
  {
    label: "Contact",
    href: "/contact",
    icon: (
      <svg className="size-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

function MenuIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="relative w-5 h-5 flex items-center justify-center pointer-events-none" aria-hidden="true">
      <span
        className={`absolute h-0.5 w-4.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
          isOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
        }`}
      />
      <span
        className={`absolute h-0.5 w-4.5 bg-current rounded-full transition-all duration-200 ease-in-out ${
          isOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
        }`}
      />
      <span
        className={`absolute h-0.5 w-4.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
          isOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
        }`}
      />
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuCardRef = useRef<HTMLDivElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

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

  /* Close mobile menu when clicking outside */
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node | null;
      if (
        menuCardRef.current &&
        !menuCardRef.current.contains(target) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isMobileMenuOpen]);

  /* Detect scroll for glassmorphism effect */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const desktopNavItems = navItems.filter((item) => item.href !== "/");

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[var(--bg)]/80 backdrop-blur-2xl border-b border-[var(--border)] shadow-xs"
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
            {desktopNavItems.map((item) => {
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

          {/* Mobile Right Controls: Theme Toggle & Menu Toggle */}
          <div className="flex md:hidden items-center gap-1.5">
            <ThemeToggle />
            <button
              ref={toggleBtnRef}
              type="button"
              className="flex items-center justify-center w-10 h-10 rounded-lg text-[var(--fg)] hover:bg-[var(--bg-elevated)] active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] touch-manipulation cursor-pointer"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu-capsule"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open navigation menu"}
            >
              <MenuIcon isOpen={isMobileMenuOpen} />
            </button>
          </div>
        </nav>
      </header>

      {/* Pure, Ultra-Compact Floating Capsule Menu for Mobile */}
      {isMobileMenuOpen && (
        <>
          {/* Subtle Dimmed Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/35 backdrop-blur-[2px] md:hidden animate-fade-in"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Floating Compact Island (Only Navbar Menu Items + Close Button) */}
          <aside
            ref={menuCardRef}
            id="mobile-menu-capsule"
            className="fixed top-[calc(var(--navbar-h)+0.375rem)] right-3 sm:right-6 z-50 w-56 md:hidden rounded-2xl bg-[var(--bg-surface)]/95 backdrop-blur-2xl border border-[var(--border)] shadow-2xl p-2 animate-menu-pop"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar: Cross Close Button Only */}
            <div className="flex justify-end pb-1 mb-1 border-b border-[var(--border)]/50">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center justify-center size-7 rounded-full bg-[var(--bg-elevated)] hover:bg-[var(--accent)] hover:text-white text-[var(--fg-muted)] active:scale-90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] cursor-pointer touch-manipulation"
                aria-label="Close menu"
                title="Close menu"
              >
                <svg className="size-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Pure Navbar Navigation Links */}
            <nav aria-label="Mobile navigation">
              <ul className="space-y-1" role="list">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium transition-all duration-150 border ${
                          isActive
                            ? "bg-[var(--accent-light)]/60 text-[var(--accent)] border-[var(--accent)]/40 font-semibold shadow-2xs"
                            : "bg-[var(--bg-elevated)]/40 hover:bg-[var(--bg-elevated)] text-[var(--fg-muted)] hover:text-[var(--fg)] border-transparent"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        <span className={isActive ? "text-[var(--accent)]" : "text-[var(--fg-subtle)]"}>
                          {item.icon}
                        </span>
                        <span className="truncate">{item.label}</span>
                        {isActive && (
                          <span className="ml-auto size-1.5 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>
        </>
      )}
    </>
  );
}