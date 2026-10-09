"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/ui/Icon";

const navLinks = [
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const prevScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show near the very top of the page
      if (currentScrollY <= 60) {
        setIsVisible(true);
        prevScrollY.current = currentScrollY;
        return;
      }

      // Delta threshold to avoid jitter on trackpads
      const diff = currentScrollY - prevScrollY.current;
      if (Math.abs(diff) < 6) return;

      if (diff > 0) {
        // Scrolling DOWN -> Hide navbar
        setIsVisible(false);
      } else {
        // Scrolling UP -> Reveal navbar
        setIsVisible(true);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ensure navbar stays visible if the user has the mobile menu open
  const showNavbar = isVisible || mobileOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Gradual fading background: No bottom border or hard line, fades smoothly to transparent at bottom */}
      {!mobileOpen && (
        <div
          className="absolute inset-x-0 top-0 h-20 sm:h-24 pointer-events-none -z-10 bg-gradient-to-b from-white via-white/95 to-transparent backdrop-blur-md [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"
          aria-hidden="true"
        />
      )}

      {mobileOpen && (
        <div
          className="absolute inset-0 pointer-events-none -z-10 bg-white/98 backdrop-blur-xl"
          aria-hidden="true"
        />
      )}

      {/* Compact Navbar Bar */}
      <nav
        className="pad-nav mx-auto flex h-14 sm:h-16 items-center justify-between"
        aria-label="Main Navigation"
      >
        {/* Monogram Brand */}
        <Link
          href="/"
          className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--color-ink)] hover:opacity-85 transition-opacity"
          aria-label="Jyotirmaya Behera Home"
        >
          JB
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-7 lg:gap-9 text-[14px] sm:text-[15px] font-medium">
          {navLinks.map((link) => {
            const isExactRoute = pathname === link.href;

            return (
              <Link
                key={link.label}
                href={link.href}
                className={
                  isExactRoute
                    ? "text-[var(--color-accent)] font-semibold transition-colors duration-200"
                    : "text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors duration-200"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1.5 text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors focus:outline-none"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <Icon name="close" size={20} /> : <Icon name="menu" size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl px-6 py-5 shadow-lg animate-fade-in">
          <div className="flex flex-col gap-3.5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[15px] font-medium text-[var(--color-ink)] hover:text-[var(--color-accent)] py-1"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}