import { solutions } from "@/lib/content";

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-lg mb-14">
          <h2 className="font-display text-3xl md:text-4xl tracking-tight text-[var(--ink)]">
            Built around how your team already works
          </h2>
          <p className="mt-4 text-[var(--ink)]/65 leading-relaxed">
            NOVA adapts its workflows to the way each function moves,
            instead of asking teams to adapt to it.
          </p>
        </div>

        <div className="flex flex-col">
          {solutions.map((item) => (
            <div
              key={item.title}
              className="group grid sm:grid-cols-[220px_1fr] gap-2 sm:gap-8 py-7 border-b border-[var(--paper-line)] first:border-t hover:pl-3 transition-[padding] items-baseline"
            >
              <h3 className="font-display text-xl text-[var(--ink)] relative">
                <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--amber)] opacity-0 group-hover:opacity-100 transition-opacity" />
                {item.title}
              </h3>
              <p className="text-[var(--ink)]/60 leading-relaxed max-w-xl">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
