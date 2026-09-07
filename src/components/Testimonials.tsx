import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section className="section-ink on-ink py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl md:text-4xl tracking-tight max-w-md mb-14">
          Teams notice the difference in the first week
        </h2>

        <div className="grid md:grid-cols-3 gap-px bg-[var(--ink-line)] border border-[var(--ink-line)]">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="bg-[var(--ink)] p-8 flex flex-col justify-between min-h-[240px]"
            >
              <blockquote className="text-[var(--text-on-ink)]/90 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 pt-4 border-t border-[var(--ink-line)]">
                <p className="text-sm font-medium text-[var(--text-on-ink)]">
                  {t.name}
                </p>
                <p className="text-sm text-[var(--text-on-ink-muted)]">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
