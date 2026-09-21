# Ticket — Decide Chapter Navigation & Reveal Interactions

> Parent: `../map-project-details.md` · Label: `wayfinder:prototype` · Type: prototype · HITL · Status: closed · Claimed by: opencode · Closed: 2026-08-30 · Frontier: yes
> Blocked by: — (03, 04 closed)
> Skills: `prototype`, `grilling`

## Question

What interaction model should the bespoke page use for its three chapters — specifically whether to add a sticky chapter nav (Problem | Idea | Result) with active-state, what `ScrollReveal` / `CinematicImage` reveal choreography to apply per chapter, and whether to avoid scroll-snap — so the Cuberto-inspired story feels cinematic but remains performant and accessible?

Prototype: produce a minimal interactive stub or annotated spec showing nav behavior (sticky vs inline), reveal timings, and mobile fallback, referencing `src/components/ui/ScrollReveal.tsx` and `src/components/transitions/PageTransition.tsx` patterns. Record decision; does not ship production animations.

## Resolution

**Decision:** Sticky chapter nav + reveal choreography locked as prototyped; approved.

- **Nav:** `ChapterNav` sticky `top-[72px]` under `TopNavBar`, `backdrop-blur 20px` + `bg-surface/80` + `border-y border-glass-border` (`DESIGN.md:159`), anchors `href="#problem/#idea/#result"` with `id="problem/idea/result"` on each `ChapterSection`; active state via `IntersectionObserver` centered `-50%` rootMargin, style `text-soft-white + border-b` active vs `text-outline` idle; mobile `overflow-x-auto`; no scroll-snap (native scroll, a11y, matches Cuberto flow).
- **Reveals:** Reuse `ScrollReveal` (`src/components/ui/ScrollReveal.tsx:1` threshold 0.1 + `fade-in`) per section + per gallery image stagger `delay 0/120/240ms` (from `03`); `CinematicImage` `fill` `aspect-[16/9]` (`src/components/ui/CinematicImage.tsx:1`); `PageTransition` from `src/app/layout.tsx:18` wraps page — no parallax for perf.
- **Prototype asset:** `wayfinder/prototypes/05-chapter-nav-interactions.md:1` — approved as-is.

**Assets linked:** Prototype is handoff for implementation of `ChapterNav.tsx`.

