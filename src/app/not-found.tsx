import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)] flex flex-col items-center justify-center px-6 py-24 text-center">
      <div className="w-16 h-16 rounded-full bg-[var(--amber)]/15 border border-[var(--amber)]/30 flex items-center justify-center text-[var(--amber-deep)] mb-8 font-mono text-2xl font-bold">
        404
      </div>
      <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
        Page not found
      </h1>
      <p className="text-base text-[var(--ink)]/65 max-w-md mb-8 leading-relaxed">
        The workflow or link you&apos;re looking for doesn&apos;t exist or has been archived.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-lg bg-[var(--ink)] text-[var(--text-on-ink)] px-6 py-3.5 text-sm font-medium hover:bg-[var(--amber-deep)] hover:text-[var(--text-on-amber)] transition-colors cursor-pointer"
      >
        Back to NOVA Home
      </Link>
    </div>
  );
}
