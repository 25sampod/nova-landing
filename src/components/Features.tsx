import { features } from "@/lib/content";

export default function Features() {
  const [flagship, ...rest] = features;

  return (
    <section id="features" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-lg mb-14">
          <h2 className="font-display text-3xl md:text-4xl tracking-tight text-[var(--ink)]">
            Six ways NOVA takes work off your plate
          </h2>
          <p className="mt-4 text-[var(--ink)]/65 leading-relaxed">
            Each feature runs on its own, or combines with the others into a
            single workflow that matches how your team already operates.
          </p>
        </div>

        <div className="border border-[var(--paper-line)] bg-[var(--paper-line)] grid gap-px md:grid-cols-[1.2fr_1fr]">
          <div className="p-8 md:p-10 bg-[var(--paper)] hover:bg-[var(--paper-raised)]/60 transition-colors">
            <h3 className="font-display text-xl text-[var(--ink)] mb-3">
              {flagship.title}
            </h3>
            <p className="text-[var(--ink)]/65 leading-relaxed max-w-sm">
              {flagship.body}
            </p>
          </div>
          <div className="p-8 md:p-10 bg-[var(--paper)] hover:bg-[var(--paper-raised)]/60 transition-colors flex items-center">
            <div className="w-full flex flex-col gap-2">
              {["Draft", "In review", "Approved", "Sent"].map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="text-xs text-[var(--ink)]/40 w-16 shrink-0">
                    {step}
                  </span>
                  <div className="h-1.5 flex-1 bg-[var(--paper-line)]/80 relative overflow-hidden">
                    <div
                      className="h-full bg-[var(--amber)]"
                      style={{ width: `${100 - i * 22}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border border-t-0 border-[var(--paper-line)] bg-[var(--paper-line)] grid gap-px sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((feature) => (
            <div
              key={feature.title}
              className="p-8 bg-[var(--paper)] hover:bg-[var(--paper-raised)]/60 transition-colors"
            >
              <h3 className="font-display text-lg text-[var(--ink)] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-[var(--ink)]/60 leading-relaxed">
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
