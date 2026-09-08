# NOVA — Technical Explanation

This document outlines the core design rationale, technology choices, architecture, and engineering details for the **NOVA** landing page assignment.

---

## 1. Design Decisions

- **Editorial & Restrained Aesthetic**: Steered away from generic purple gradients and heavy floating drop shadows in favor of a clean, structured layout with hairline borders inspired by modern developer tools.
- **Cohesive Color Palette**: Warm paper canvas (`#fbfbf9`) in light mode, deep obsidian (`#0b0d13`) in dark mode, paired with a single energetic amber accent (`#e07a38`) for primary CTAs and active states.
- **Dual-Theme Engine**: Built with pure CSS custom properties in `globals.css` with persistent `localStorage` support and zero layout flicker.
- **Purposeful Motion**: Focused micro-interactions (staggered scroll reveals, kinetic headline animation, smooth accordion crossfades) that convey product clarity without distracting clutter.

---

## 2. Technology Choices

- **Next.js 16 (App Router) & React 19**: Chosen for fast static rendering, built-in API route handling, and an easy path to a production app.
- **TypeScript**: Enforces strict typing across all components, interfaces, and data models (`Feature`, `PricingPlan`, `FAQItem`, etc.) to eliminate runtime errors.
- **Tailwind CSS v4**: Utility-first styling with colocated styles and minimal CSS bundle overhead.
- **Zero Heavy UI Kits**: Every component (tabs, accordion, modal, carousel) was hand-crafted from first principles to keep the bundle lightweight and eliminate dependency bloat.

---

## 3. Component Structure

- **`src/components/`**: Isolated, reusable presentation components for each section (`Hero.tsx`, `Features.tsx`, `Product.tsx`, `Solutions.tsx`, `Pricing.tsx`, `Testimonials.tsx`, `FAQ.tsx`, `DemoModal.tsx`, etc.).
- **`src/app/`**: Root layout, font definitions, global theme variables, and the `/api/waitlist` route handler.
- **`src/lib/content.ts`**: Single source of truth containing typed content arrays, making copy updates effortless without altering UI markup.

---

## 4. Challenges Faced & Solutions

- **Theme Consistency Across Inverted Sections**: Solved by scoping local CSS variable overrides (`.on-ink`) so inverted cards maintain proper readability across both light and dark modes.
- **Cumulative Layout Shift (CLS) on Toggles**: Locked minimum container heights (`min-h`) on the pricing toggle and solutions switcher to eliminate layout jumping during user interaction.
- **Dependency-Free Carousel**: Built touch swipe detection (`onTouchStart`/`onTouchEnd`) and auto-rotation directly into `Testimonials.tsx` without relying on bulky external slider packages.

---

## 5. How AI Tools Were Used

- **Tools Used**: **Claude** and **Gemini**.
- **Scaffolding & Copy**: Used to scaffold initial file structure, draft layout components, and generate realistic placeholder copy.
- **Human Review & Refinement**: All generated code was actively reviewed, refactored, and tested—rejecting generic styling defaults, tuning mobile breakpoints, fixing layout shifts, and perfecting component interactions.
