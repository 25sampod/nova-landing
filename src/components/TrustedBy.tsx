import { trustedBy } from "@/lib/content";

export default function TrustedBy() {
  return (
    <section className="overflow-hidden border-y border-paper-line py-10">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-6 text-xs text-ink/45">
          Trusted by teams who used to run this on spreadsheets
        </p>
      </div>
      <div className="trusted-marquee" aria-label="Companies that trust NOVA">
        <div className="trusted-marquee-track">
          {[false, true].map((isDuplicate) => (
            <ul
              key={String(isDuplicate)}
              className="flex shrink-0"
              aria-hidden={isDuplicate || undefined}
            >
              {trustedBy.map((company) => (
                <li
                  key={company.name}
                  className="flex shrink-0 items-center gap-3 pr-10"
                >
                  <a
                    href={company.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-lg py-1 text-ink/55 transition-colors hover:text-ink"
                  >
                    {company.name === "Amazon" ? (
                      <svg
                        aria-hidden="true"
                        className="size-8"
                        viewBox="0 0 32 32"
                      >
                        <circle cx="16" cy="16" r="15" fill="#232f3e" />
                        <text
                          x="16"
                          y="21"
                          fill="#fff"
                          fontSize="17"
                          fontFamily="Arial, sans-serif"
                          textAnchor="middle"
                        >
                          a
                        </text>
                        <path
                          d="M8 22c5 4 11 4 16 0"
                          fill="none"
                          stroke="#ff9900"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="m21 21 3 1-2 2"
                          fill="none"
                          stroke="#ff9900"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={`https://api.iconify.design/${company.icon}.svg`}
                        alt=""
                        aria-hidden="true"
                        width="32"
                        height="32"
                        className="size-8 object-contain"
                      />
                    )}
                    <span className="font-display text-lg tracking-tight">
                      {company.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
