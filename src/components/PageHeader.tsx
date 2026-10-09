interface PageHeaderProps {
  title: string;
  description?: string;
  headingId?: string;
}

export default function PageHeader({ title, description, headingId }: PageHeaderProps) {
  return (
    <header className="mb-10 sm:mb-16 relative">
      <div>
        <h1
          id={headingId}
          className="font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-[var(--color-ink)]"
        >
          {title}
        </h1>
        {description && (
          <p className="mt-3 text-base sm:text-lg text-[var(--color-body-ink)] max-w-2xl leading-relaxed opacity-85">
            {description}
          </p>
        )}
      </div>
    </header>
  );
}