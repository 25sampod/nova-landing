export default function FinalCTA() {
  return (
    <section className="section-ink on-ink py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
        <h2 className="font-display text-3xl md:text-5xl tracking-tight max-w-lg">
          Give your team its Mondays back.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <a
            href="#pricing"
            className="inline-flex justify-center items-center rounded-sm bg-amber text-ink px-7 py-4 text-sm font-medium hover:bg-paper transition-colors"
          >
            Start free trial
          </a>
          <a
            href="#product"
            className="inline-flex justify-center items-center rounded-sm border border-ink-line px-7 py-4 text-sm font-medium text-text-on-ink hover:border-text-on-ink transition-colors"
          >
            Talk to sales
          </a>
        </div>
      </div>
    </section>
  );
}
