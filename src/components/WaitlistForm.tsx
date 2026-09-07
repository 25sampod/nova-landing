"use client";

import { type FormEvent, useState } from "react";

export default function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <label className="sr-only" htmlFor="work-email">
        Work email
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="work-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@company.com"
          className="min-w-0 flex-1 rounded-sm border border-[var(--ink-line)] bg-white/5 px-4 py-3 text-sm text-[var(--text-on-ink)] placeholder:text-[var(--text-on-ink-muted)] focus:border-[var(--amber)] focus:outline-none"
        />
        <button
          type="submit"
          className="inline-flex shrink-0 items-center justify-center rounded-sm bg-[var(--amber)] px-5 py-3 text-sm font-medium text-[var(--text-on-amber)] transition-colors hover:bg-[var(--paper)] hover:text-[var(--text-on-paper)]"
        >
          Request access
        </button>
      </div>
      <p
        aria-live="polite"
        className="min-h-5 text-xs text-[var(--text-on-ink-muted)]"
        role="status"
      >
        {submitted
          ? "Thanks - your request is ready for NOVA's onboarding team."
          : "No card required. This interactive demo keeps your email in the browser."}
      </p>
    </form>
  );
}
