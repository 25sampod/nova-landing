# NOVA — Build Better. Work Smarter.

A fully responsive, modern landing page for **NOVA**, a fictional AI
productivity platform, built as a front-end development intern assignment.

## Project description

NOVA helps teams plan projects, automate repetitive work and stay in sync
without extra status meetings. This project is the marketing landing page
for that product: a single-page site covering everything from the hero
through pricing and FAQ, built to feel like a real company site rather than
a tutorial project.

## Technologies used

- **Next.js 16** (App Router) — chosen because it's the preferred stack for
  the assignment and gives file-based routing, server components and a
  simple path to a production app later.
- **React 19** — component model for the whole UI.
- **TypeScript** — type safety for props and content data.
- **Tailwind CSS v4** — utility-first styling with a small custom design
  token layer (colors, fonts) defined in `globals.css`.
- **Google Fonts** — Space Grotesk (display/headings) and Inter (body text),
  loaded via a `<link>` tag so no extra build tooling is required.

No component libraries or UI kits were used — every section is a hand-built
component so the code stays easy to read and explain.

## Features

- 13 required sections: navigation, hero, trusted-by strip, features (6),
  product/about, how it works, stats, solutions/use cases, testimonials (3),
  pricing (3 plans), FAQ (6 questions), final CTA, footer.
- Responsive navigation with a working mobile hamburger menu (animated icon,
  slide-down panel, closes on link click, locks body scroll while open).
- Smooth scrolling to in-page sections via anchor links.
- Fully accessible FAQ accordion (`aria-expanded`, `aria-controls`,
  `aria-labelledby`, keyboard-operable `<button>` elements).
- Hover effects on buttons and cards throughout.
- One deliberate load-in animation in the hero (a checklist ticking off
  automatically) rather than scroll-triggered effects on every section.
- Back-to-top button that appears after scrolling (bonus).
- No horizontal scrolling or layout breakage from mobile (375px) through
  desktop.

## Installation instructions

```bash
# install dependencies
npm install

# run the dev server
npm run dev
# open http://localhost:3000

# production build
npm run build
npm run start
```

Requires Node.js 18.18 or newer.

## Project structure

```
src/
  app/
    layout.tsx      # fonts, metadata, root HTML shell
    page.tsx         # assembles all sections in order
    globals.css       # design tokens (colors, fonts) + small utilities
  components/
    Navbar.tsx        # sticky nav + mobile hamburger menu
    Hero.tsx           # headline, CTAs, animated checklist visual
    TrustedBy.tsx       # logo strip
    Features.tsx         # flagship feature + grid of 6
    Product.tsx           # dark section with board mockup
    HowItWorks.tsx          # 4-step numbered sequence
    Stats.tsx                 # 4 stat callouts
    Solutions.tsx               # use-case list by team
    Testimonials.tsx              # 3 testimonial cards
    Pricing.tsx                    # 3 plans
    FAQ.tsx                         # accessible accordion
    FinalCTA.tsx                     # closing call to action
    Footer.tsx                        # link columns + legal
    BackToTop.tsx                      # scroll-to-top button
  lib/
    content.ts        # all copy/data, kept separate from markup
```

## Screenshots

Add screenshots here after deploying (desktop, tablet and mobile views),
for example:

```
![Desktop hero](./screenshots/desktop-hero.png)
![Mobile menu](./screenshots/mobile-menu.png)
```

## Live demo URL

_Add your deployed URL here after publishing to Vercel, Netlify, GitHub
Pages or Cloudflare Pages, e.g._: `https://nova-landing.vercel.app`

## AI tools used

This project was built with assistance from **Claude** (Anthropic), used to:

- Scaffold the Next.js + Tailwind project structure.
- Draft component markup and Tailwind styling for each section.
- Write placeholder copy for a fictional company (NOVA).
- Review the design against common "AI-generated" visual clichés (cream +
  terracotta palettes, identical shadowed cards, ALL-CAPS eyebrows, etc.)
  and steer toward a more distinctive, left-aligned, hairline-grid look.

See `EXPLANATION.md` for how the code was reviewed and adapted rather than
used as-is.
