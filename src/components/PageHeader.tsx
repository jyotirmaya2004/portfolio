interface PageHeaderProps {
  title: string;
  description?: string;
  headingId?: string;
}

export default function PageHeader({ title, description, headingId }: PageHeaderProps) {
  return (
    <header className="mb-8 sm:mb-12 relative">
      {/* Accent line */}
      <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-[var(--accent)] to-[#d4a813] rounded-full hidden sm:block" />
      
      <div className="pl-1 sm:pl-4">
        <h1
          id={headingId}
          className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--fg)]"
        >
          {title}
        </h1>
        {description && (
          <p className="mt-2.5 sm:mt-3 text-sm sm:text-lg text-[var(--fg-muted)] max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </header>
  );
}