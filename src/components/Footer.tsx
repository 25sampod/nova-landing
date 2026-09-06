import { footerLinks } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-paper-line py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
          <div>
            <p className="font-display font-semibold text-lg text-ink mb-3">
              NOVA
            </p>
            <p className="text-sm text-ink/55 max-w-xs leading-relaxed">
              The AI productivity platform that plans projects, clears
              busywork and keeps every team in sync.
            </p>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <p className="text-sm font-medium text-ink mb-4">{heading}</p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-ink/60 hover:text-ink transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-paper-line flex flex-col sm:flex-row justify-between gap-4">
          <p className="text-xs text-ink/45">
            © {new Date().getFullYear()} NOVA Labs, Inc. All rights reserved.
          </p>
          <p className="text-xs text-ink/45">
            A fictional company built for a front-end development assignment.
          </p>
        </div>
      </div>
    </footer>
  );
}
