export default function Product() {
  return (
    <section id="product" className="section-ink on-ink py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="font-display text-3xl md:text-4xl tracking-tight max-w-md">
            One board that already knows what happened
          </h2>
          <p className="mt-5 text-text-on-ink-muted leading-relaxed max-w-md">
            NOVA sits underneath your projects, watching what your team
            actually does — commits, messages, approvals — and updates the
            board without anyone filling in a status.
          </p>
          <ul className="mt-8 flex flex-col gap-4">
            {[
              "No manual status updates",
              "One workload view across every project",
              "Every change logged, nothing lost in chat",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber shrink-0" />
                <span className="text-text-on-ink/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-ink-line rounded-sm overflow-hidden bg-ink-soft">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-ink-line">
            <span className="w-2.5 h-2.5 rounded-full bg-ink-line" />
            <span className="w-2.5 h-2.5 rounded-full bg-ink-line" />
            <span className="w-2.5 h-2.5 rounded-full bg-ink-line" />
            <span className="ml-3 text-xs text-text-on-ink-muted">
              Q3 launch board
            </span>
          </div>
          <div className="grid grid-cols-3 gap-px bg-ink-line">
            {[
              { label: "To do", items: ["Landing page copy", "Beta invite list"] },
              { label: "In progress", items: ["Onboarding flow", "Pricing page"] },
              { label: "Done", items: ["API rate limits", "Design review"] },
            ].map((col) => (
              <div key={col.label} className="bg-ink-soft p-3">
                <p className="text-[11px] font-medium text-text-on-ink-muted mb-3">
                  {col.label}
                </p>
                <div className="flex flex-col gap-2">
                  {col.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-sm border border-ink-line bg-ink px-2.5 py-2 text-xs text-text-on-ink/90"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
