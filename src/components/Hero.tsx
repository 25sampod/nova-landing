const tasks = [
  { label: "Sprint plan drafted", delay: "0.3s" },
  { label: "Standup notes summarized", delay: "0.9s" },
  { label: "Design review scheduled", delay: "1.5s" },
  { label: "Invoice approvals routed", delay: "2.1s" },
];

export default function Hero() {
  return (
    <section id="top" className="pt-32 pb-20 md:pt-44 md:pb-28 bg-[var(--paper)]">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-8 items-center">
        <div>
          <h1 className="font-display text-[2.6rem] leading-[1.05] tracking-tight text-[var(--ink)] sm:text-5xl md:text-6xl max-w-xl">
            Build better. Work smarter.
          </h1>
          <p className="mt-6 text-lg text-[var(--ink)]/70 max-w-md leading-relaxed">
            NOVA plans the projects, clears the busywork and keeps every
            team in sync — so the work that needs a person gets one.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#pricing"
              className="inline-flex items-center rounded-sm bg-[var(--ink)] text-[var(--text-on-ink)] px-6 py-3.5 text-sm font-medium hover:bg-[var(--amber-deep)] hover:text-[var(--text-on-amber)] transition-colors"
            >
              Start free trial
            </a>
            <a
              href="#product"
              className="inline-flex items-center rounded-sm border border-[var(--ink)]/20 px-6 py-3.5 text-sm font-medium text-[var(--ink)] hover:border-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--text-on-ink)] transition-colors"
            >
              See how it works
            </a>
          </div>
          <p className="mt-5 text-sm text-[var(--ink)]/50">
            No card required — cancel anytime.
          </p>
        </div>

        <div className="relative">
          <div className="rounded-sm border border-[var(--paper-line)] bg-[var(--paper-raised)]/60 p-6 shadow-[0_1px_0_0_rgba(0,0,0,0.03)]">
            <div className="flex items-center justify-between border-b border-[var(--paper-line)] pb-3 mb-4">
              <span className="text-xs font-medium text-[var(--ink)]/50">
                This week&apos;s automations
              </span>
              <span className="text-xs text-teal font-medium">Live</span>
            </div>
            <ul className="flex flex-col gap-1">
              {tasks.map((task) => (
                <li
                  key={task.label}
                  className="flex items-center gap-3 py-2.5 opacity-0 animate-tick-in"
                  style={{ animationDelay: task.delay }}
                >
                  <svg
                    viewBox="0 0 20 20"
                    className="w-5 h-5 shrink-0 text-teal"
                    fill="none"
                  >
                    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.4" />
                    <path
                      d="M6 10.2l2.4 2.4L14 7"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray="24"
                      strokeDashoffset="24"
                      className="animate-draw-check"
                      style={{ animationDelay: task.delay }}
                    />
                  </svg>
                  <span className="text-sm text-[var(--ink)]/80">{task.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="absolute -bottom-4 -right-4 -z-10 w-24 h-24 rounded-full bg-[var(--amber)]/30 blur-2xl" aria-hidden />
        </div>
      </div>
    </section>
  );
}
