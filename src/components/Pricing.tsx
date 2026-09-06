import { plans } from "@/lib/content";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-lg mb-14">
          <h2 className="font-display text-3xl md:text-4xl tracking-tight text-ink">
            Straightforward pricing, per member
          </h2>
          <p className="mt-4 text-ink/65 leading-relaxed">
            Start free, upgrade when automation is doing more of the work
            than your team is.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-paper-line border border-paper-line">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-paper p-8 flex flex-col relative ${
                plan.highlighted ? "border-t-2 border-t-amber" : ""
              }`}
            >
              {plan.highlighted && (
                <span className="absolute top-8 right-8 text-xs font-medium text-amber-deep">
                  Most teams choose this
                </span>
              )}
              <h3 className="font-display text-xl text-ink mb-1">
                {plan.name}
              </h3>
              <p className="text-sm text-ink/55 mb-6 max-w-[24ch]">
                {plan.description}
              </p>
              <div className="mb-6">
                <span className="font-display text-4xl text-ink tracking-tight">
                  {plan.price}
                </span>
                <span className="text-sm text-ink/50 ml-2">
                  {plan.period}
                </span>
              </div>
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-ink/75">
                    <svg viewBox="0 0 16 16" className="w-4 h-4 mt-0.5 shrink-0 text-teal" fill="none">
                      <path d="M3.5 8.2l2.6 2.6L12.5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`inline-flex justify-center items-center rounded-sm px-5 py-3 text-sm font-medium transition-colors ${
                  plan.highlighted
                    ? "bg-ink text-paper hover:bg-amber-deep hover:text-ink"
                    : "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-paper"
                }`}
              >
                {plan.price === "Custom" ? "Contact sales" : "Get started"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
