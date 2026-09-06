"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-display text-3xl md:text-4xl tracking-tight text-ink mb-14">
          Questions teams ask before switching
        </h2>

        <div className="border-t border-paper-line">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.question} className="border-b border-paper-line">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-header-${i}`}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-base md:text-lg text-ink">
                      {item.question}
                    </span>
                    <span
                      className="relative w-5 h-5 shrink-0 text-ink/60"
                      aria-hidden
                    >
                      <span className="absolute inset-y-1/2 left-0 w-full h-px bg-current -translate-y-1/2" />
                      <span
                        className={`absolute inset-y-1/2 left-0 w-full h-px bg-current -translate-y-1/2 transition-transform duration-200 ${
                          isOpen ? "rotate-0 scale-x-0" : "rotate-90"
                        }`}
                      />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-header-${i}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pr-10 text-ink/65 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
