import { steps } from "@/lib/content";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-lg mb-14">
          <h2 className="font-display text-3xl md:text-4xl tracking-tight text-[var(--ink)]">
            From connected tools to a running workflow
          </h2>
          <p className="mt-4 text-[var(--ink)]/65 leading-relaxed">
            Four steps take you from a first login to automation running
            quietly in the background.
          </p>
        </div>

        <ol className="relative max-w-2xl">
          <div
            className="absolute left-[15px] top-2 bottom-2 w-px bg-[var(--paper-line)]"
            aria-hidden
          />
          {steps.map((step, i) => (
            <li key={step.title} className="relative pl-12 pb-12 last:pb-0">
              <span className="absolute left-0 top-0 w-8 h-8 rounded-full border border-[var(--ink)]/20 bg-[var(--paper)] flex items-center justify-center text-sm font-medium text-[var(--ink)]">
                {i + 1}
              </span>
              <h3 className="font-display text-lg text-[var(--ink)] mb-1.5">
                {step.title}
              </h3>
              <p className="text-[var(--ink)]/60 leading-relaxed max-w-md">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
