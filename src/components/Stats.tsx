import { stats } from "@/lib/content";

export default function Stats() {
  return (
    <section className="border-y border-[var(--paper-line)] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-2 md:grid-cols-4 gap-y-10">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`px-6 first:pl-0 border-[var(--paper-line)] ${
              i % 2 === 1 ? "border-l" : "md:border-l-0"
            } ${i % 4 !== 0 ? "md:border-l" : "md:border-l-0"}`}
          >
            <p className="font-display text-4xl md:text-5xl tracking-tight text-[var(--ink)]">
              {stat.value}
              <span className="text-[var(--amber-deep)]">{stat.suffix}</span>
            </p>
            <p className="mt-2 text-sm text-[var(--ink)]/55 max-w-[16ch]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
