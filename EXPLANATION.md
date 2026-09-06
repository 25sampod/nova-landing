# Short Explanation

## Design decisions

Most AI-productivity landing pages default to a purple/blue gradient on
rounded shadowed cards. I deliberately avoided that: NOVA uses an ink-navy
and warm paper palette with a single amber accent, left-aligned type, and
hairline-bordered grids (mosaic style, using a background color showing
through 1px gaps) instead of shadowed cards everywhere. The only "big
number" moment is the hero's live checklist animation and the Stats
section — both places where it's earned, not decorative. Numbered markers
only appear in "How it works," because that's the one section that's
genuinely a sequence.

## Technology choices

Next.js (App Router) + TypeScript + Tailwind CSS v4, per the assignment's
preference for React/Next.js. Tailwind's utility classes kept styling close
to the markup, which made it faster to keep the hairline-grid pattern
consistent across sections without a separate stylesheet to maintain.

## Component structure

Each of the 13 sections is its own component in `src/components`, and all
copy/data (features, plans, FAQ, etc.) lives in `src/lib/content.ts` as
typed arrays. Components map over that data rather than hardcoding repeated
markup, so adding a fourth pricing plan or an eighth FAQ question is a
one-line change, not a markup edit.

- `Navbar` and `FAQ` are the only two sections that need client-side state
  (mobile menu open/close, accordion open index) and are marked
  `"use client"`; everything else renders as a server component.
- `BackToTop` is a small, isolated client component so it doesn't force the
  rest of the page into client rendering.

## Challenges faced

- **Font loading in a sandboxed build environment**: `next/font/google`
  fetches font files at *build time*, which failed in a network-restricted
  environment. I switched to loading Google Fonts via a `<link>` tag in
  `<head>` instead, which fetches at runtime in the browser — functionally
  equivalent for the deployed site, and it avoided the build-time
  dependency entirely.
- **Building a features grid without repeating the "identical card" look**:
  solved with a CSS grid where the container is colored like the border and
  each cell is the background color, so 1px gaps read as hairlines without
  needing individual `border` classes to reason about on every breakpoint.

## How AI tools were used

I used Claude to scaffold the project, draft each section's markup and
Tailwind classes, and generate placeholder copy for the fictional NOVA
brand. I reviewed the generated design against the assignment's brief and
against common "AI-generated" visual tells before accepting it, adjusted
the color palette and layout approach specifically to avoid those defaults,
and fixed the font-loading approach after the initial build failed in this
environment. The code was read through section by section rather than
accepted as one large, unreviewed block.
