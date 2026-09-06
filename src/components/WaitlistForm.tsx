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
          className="min-w-0 flex-1 rounded-sm border border-ink-line bg-white/5 px-4 py-3 text-sm text-text-on-ink placeholder:text-text-on-ink-muted focus:border-amber focus:outline-none"
        />
        <button
          type="submit"
          className="inline-flex shrink-0 items-center justify-center rounded-sm bg-amber px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-paper"
        >
          Request access
        </button>
      </div>
      <p
        aria-live="polite"
        className="min-h-5 text-xs text-text-on-ink-muted"
        role="status"
      >
        {submitted
          ? "Thanks - your request is ready for NOVA's onboarding team."
          : "No card required. This interactive demo keeps your email in the browser."}
      </p>
    </form>
  );
}
