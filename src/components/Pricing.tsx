"use client";

import { useState } from "react";
import { plans } from "@/lib/content";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-lg mb-14">
          <h2 className="font-display text-3xl md:text-4xl tracking-tight text-[var(--ink)]">
            Straightforward pricing, per member
          </h2>
          <p className="mt-4 text-[var(--ink)]/65 leading-relaxed">
            Start free, upgrade when automation is doing more of the work
            than your team is.
          </p>
        </div>

        <div className="mb-8 flex items-center justify-center gap-4">
          <span className={`text-sm font-medium ${!isAnnual ? "text-[var(--ink)]" : "text-[var(--ink)]/50"}`}>
            Monthly
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={isAnnual}
            aria-label="Switch to annual billing"
            onClick={() => setIsAnnual((v) => !v)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              isAnnual ? "bg-[var(--amber)]" : "bg-[var(--paper-line)]"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform ${
                isAnnual ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${isAnnual ? "text-[var(--ink)]" : "text-[var(--ink)]/50"}`}>
            Annual
            <span className="ml-2 text-xs text-[var(--amber-deep)] font-normal">(save ~17%)</span>
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-[var(--paper-line)] border border-[var(--paper-line)]">
          {plans.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const period = isAnnual ? plan.annualPeriod : plan.period;
            return (
              <div
                key={plan.name}
                className={`bg-[var(--paper)] p-8 flex flex-col relative ${
                  plan.highlighted ? "border-t-2 border-t-[var(--amber)]" : ""
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute top-8 right-8 text-xs font-medium text-[var(--amber-deep)]">
                    Most teams choose this
                  </span>
                )}
                <h3 className="font-display text-xl text-[var(--ink)] mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-[var(--ink)]/55 mb-6 max-w-[24ch]">
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="font-display text-4xl text-[var(--ink)] tracking-tight">
                    {price}
                  </span>
                  <span className="text-sm text-[var(--ink)]/50 ml-2">
                    {period}
                  </span>
                </div>
                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-[var(--ink)]/75">
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
                      ? "bg-[var(--ink)] text-[var(--text-on-ink)] hover:bg-[var(--amber-deep)] hover:text-[var(--text-on-amber)]"
                      : "border border-[var(--ink)]/20 text-[var(--ink)] hover:border-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--text-on-ink)]"
                  }`}
                >
                  {price === "Custom" ? "Contact sales" : "Get started"}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
