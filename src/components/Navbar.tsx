"use client";

import { useEffect, useState } from "react";
import { nav } from "@/lib/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b transition-colors ${
        scrolled || open
          ? "bg-paper/95 backdrop-blur border-paper-line"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-display font-semibold text-lg tracking-tight text-ink"
        >
          NOVA
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-ink/80 hover:text-ink transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-sm text-ink/80 hover:text-ink transition-colors">
            Sign in
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center rounded-sm bg-ink text-paper text-sm font-medium px-4 py-2 hover:bg-amber-deep hover:text-ink transition-colors"
          >
            Start free trial
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-[5px]"
        >
          <span
            className={`block h-[2px] w-6 bg-ink transition-transform duration-200 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-ink transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-ink transition-transform duration-200 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out bg-paper border-t border-paper-line ${
          open ? "max-h-[28rem]" : "max-h-0"
        }`}
      >
        <ul className="px-6 py-4 flex flex-col gap-1">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-base text-ink border-b border-paper-line last:border-none"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="px-6 pb-6 flex flex-col gap-3">
          <a
            href="#"
            onClick={() => setOpen(false)}
            className="text-sm text-ink/80"
          >
            Sign in
          </a>
          <a
            href="#pricing"
            onClick={() => setOpen(false)}
            className="inline-flex justify-center items-center rounded-sm bg-ink text-paper text-sm font-medium px-4 py-3 hover:bg-amber-deep hover:text-ink transition-colors"
          >
            Start free trial
          </a>
        </div>
      </div>
    </header>
  );
}
