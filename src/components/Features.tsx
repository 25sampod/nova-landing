import { features } from "@/lib/content";
import Reveal from "./Reveal";

function FeatureIcon({ name }: { name: string }) {
  switch (name) {
    case "zap":
      return (
        <svg className="w-5 h-5 text-[var(--amber-deep)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case "code":
      return (
        <svg className="w-5 h-5 text-[var(--amber-deep)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case "shield":
      return (
        <svg className="w-5 h-5 text-[var(--amber-deep)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "repeat":
      return (
        <svg className="w-5 h-5 text-[var(--amber-deep)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 1l4 4-4 4" />
          <path d="M3 11V9a4 4 0 0 1 4-4h14" />
          <path d="M7 23l-4-4 4-4" />
          <path d="M21 13v2a4 4 0 0 1-4 4H3" />
        </svg>
      );
    case "users":
      return (
        <svg className="w-5 h-5 text-[var(--amber-deep)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "sliders":
      return (
        <svg className="w-5 h-5 text-[var(--amber-deep)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" y1="21" x2="4" y2="14" />
          <line x1="4" y1="10" x2="4" y2="3" />
          <line x1="12" y1="21" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12" y2="3" />
          <line x1="20" y1="21" x2="20" y2="16" />
          <line x1="20" y1="12" x2="20" y2="3" />
          <line x1="1" y1="14" x2="7" y2="14" />
          <line x1="9" y1="8" x2="15" y2="8" />
          <line x1="17" y1="16" x2="23" y2="16" />
        </svg>
      );
    case "plug":
    default:
      return (
        <svg className="w-5 h-5 text-[var(--amber-deep)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v6" />
          <path d="M9 22v-6" />
          <path d="M15 22v-6" />
          <path d="M5 8h14a2 2 0 0 1 2 2v2a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6v-2a2 2 0 0 1 2-2z" />
        </svg>
      );
  }
}

export default function Features() {
  const [flagship, ...rest] = features;

  return (
    <section id="features" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-[var(--paper)] overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal variant="reveal-left" className="max-w-xl mb-10 sm:mb-14">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[var(--ink)] break-words">
            Engineered for deep workflow automation
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[var(--ink)]/70 leading-relaxed break-words">
            Each capability runs reliably in the background or connects seamlessly into visual workflows across your existing tools.
          </p>
        </Reveal>

        {/* Flagship Feature Card */}
        <Reveal className="w-full">
          <div className="border border-[var(--paper-line)] bg-[var(--paper)] dark:bg-[var(--paper-raised)] rounded-xl sm:rounded-2xl overflow-hidden shadow-sm grid grid-cols-1 md:grid-cols-[1.15fr_1fr] mb-6 hover:border-[var(--ink)]/20 transition-all min-w-0">
            <div className="p-4 sm:p-7 md:p-6 lg:p-10 flex flex-col justify-between min-w-0">
              <div>
                <div className="flex items-center gap-2.5 mb-3.5 sm:mb-4">
                  <span className="p-2 rounded-lg bg-[var(--paper-raised)] dark:bg-[var(--paper-deep)] border border-[var(--paper-line)]">
                    <FeatureIcon name={flagship.icon} />
                  </span>
                  <span className="text-[11px] font-mono font-medium text-[var(--amber-deep)] bg-[var(--amber)]/10 px-2.5 py-0.5 rounded border border-[var(--amber)]/20">
                    {flagship.tag}
                  </span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-[var(--ink)] mb-2.5 sm:mb-3 tracking-tight break-words">
                  {flagship.title}
                </h3>
                <p className="text-sm sm:text-base text-[var(--ink)]/70 leading-relaxed max-w-md break-words">
                  {flagship.body}
                </p>
              </div>

              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[var(--paper-line)] flex flex-col xs:flex-row xs:items-center justify-between gap-1.5 text-xs text-[var(--ink)]/55 font-mono">
                <span>Runs 24/7 in background</span>
                <span className="text-teal font-medium">99.99% execution reliability</span>
              </div>
            </div>

            {/* Live Pipeline Visual in Flagship Card */}
            <div className="p-4 sm:p-7 md:p-6 lg:p-10 bg-[var(--paper-raised)]/50 dark:bg-[var(--paper-deep)] border-t md:border-t-0 md:border-l border-[var(--paper-line)] flex flex-col justify-center gap-2.5 sm:gap-3 min-w-0">
              <span className="text-xs font-medium text-[var(--ink)]/65 mb-0.5 sm:mb-1">
                Automated Workflow Flow
              </span>
              {[
                { step: "Event Detection", status: "Triggered instantly on app events", tag: "Instant" },
                { step: "Rules & Filtering", status: "Evaluates branch rules and team schedules", tag: "Verified" },
                { step: "Task Assignment", status: "Routes tickets and notifies assignees", tag: "Assigned" },
                { step: "Team Notification", status: "Dispatches summary updates to channels", tag: "Delivered" },
              ].map((pipe, idx) => (
                <div
                  key={pipe.step}
                  className="flex items-center justify-between p-2.5 sm:p-3 rounded-lg bg-[var(--paper)] dark:bg-[var(--paper-raised)] border border-[var(--paper-line)] text-xs shadow-2xs gap-2.5 sm:gap-3 hover:border-[var(--amber)]/40 transition-colors"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-teal/15 text-teal font-mono text-[10px] sm:text-xs font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <div className="min-w-0">
                      <p className="font-semibold text-[var(--ink)] truncate">{pipe.step}</p>
                      <p className="text-[11px] text-[var(--ink)]/60 truncate">{pipe.status}</p>
                    </div>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded shrink-0">
                    {pipe.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* 6 Remaining Feature Cards */}
        <Reveal variant="reveal-stagger" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {rest.map((feature) => (
            <div
              key={feature.title}
              className="p-4 sm:p-7 rounded-xl sm:rounded-2xl border border-[var(--paper-line)] bg-[var(--paper)] dark:bg-[var(--paper-raised)] hover:bg-[var(--paper-raised)]/60 dark:hover:bg-[var(--paper-deep)] hover:border-[var(--amber)]/40 hover:-translate-y-1 hover:shadow-md active:scale-[0.99] transition-all duration-200 shadow-2xs flex flex-col justify-start group min-w-0"
            >
              <div className="flex items-center justify-between gap-2 mb-4 sm:mb-5">
                <span className="p-2.5 rounded-lg bg-[var(--paper-raised)] dark:bg-[var(--paper-deep)] border border-[var(--paper-line)] group-hover:border-[var(--amber)]/40 group-hover:scale-105 transition-all duration-200">
                  <FeatureIcon name={feature.icon} />
                </span>
                <span className="text-[10px] font-mono font-medium text-[var(--ink)]/60 bg-[var(--paper-raised)] dark:bg-[var(--paper-deep)] px-2.5 py-1 rounded border border-[var(--paper-line)]">
                  {feature.tag}
                </span>
              </div>
              <h3 className="font-display text-base sm:text-lg font-semibold text-[var(--ink)] mb-2 tracking-tight break-words">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--ink)]/70 leading-relaxed break-words">
                {feature.body}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
