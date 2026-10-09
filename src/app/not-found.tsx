import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <main className="min-h-[70vh] flex flex-col items-center justify-center pad-cards text-center pt-28 pb-20">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[var(--color-accent)]">
          404 — Page Not Found
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[var(--color-ink)] mt-4 tracking-tight">
          Destination does not exist.
        </h1>
        <p className="text-sm sm:text-base text-[var(--fg-muted)] mt-3 max-w-md">
          The requested project or route could not be located.
        </p>
        <Link
          href="/#projects"
          className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[var(--color-brand-blue)] rounded-xl hover:opacity-90 transition-opacity"
        >
          <Icon name="arrow-left" size={14} />
          <span>Return to Projects</span>
        </Link>
      </main>
      <Footer />
    </>
  );
}
