# Ticket — Spec Editorial Layout & Visual Rhythm

> Parent: `../map-project-details.md` · Label: `wayfinder:prototype` · Type: prototype · HITL · Status: closed · Claimed by: opencode · Closed: 2026-08-30 · Frontier: yes
> Blocks: 04, 05
> Skills: `prototype`, `grilling`

## Question

What is the bespoke editorial layout spec for the Problem / Idea / Result chapters that translates Cuberto DaoWay's pacing (full-bleed hero, chapter blocks, splitshow 2-col galleries, interleaved text+image) into the **Obsidian Cinematic** system (`DESIGN.md:102` section-gap-lg 240px, display-xl 120px, surface #141313, glass borders) — defining section order, spacing, typography scale per chapter, and image treatments — so it reads as one cinematic story, not three reused cards?

Prototype: produce a cheap, rough artifact (outline markdown or stub JSX layout) that shows hero → Problem → Idea (with splitshow) → Result (with proof) → next-project, with annotations for `ScrollReveal`/`CinematicImage` usage. Links prototype as asset; does not ship final code.

## Resolution

**Decision:** Editorial rhythm locked as prototyped; approved as-is.

- **Order:** `ProjectDetailsHero` → `ChapterSection(Problem)` → `SplitShowGallery` → `ChapterSection(Idea)` mirrored → `SplitShowGallery` → `ChapterSection(Result)` + `ResultProof` → `NextProjectCTA` — see `wayfinder/prototypes/03-editorial-layout-spec.md:1`.
- **Tokens:** `DESIGN.md:3` surface `#141313`, `display-lg` 80px / `headline-lg` 40px / `body-lg` 20px / `label-caps`, `section-gap-lg:240px` between chapters, `section-gap-md:120px` inside, `margin-desktop:64px`, `rounded-lg:1rem`, `cinematic-shadow` + `glass-border` + `backdrop-blur 20px`.
- **Component annotations:** `ChapterSection` reuses `ScrollReveal` (`src/components/ui/ScrollReveal.tsx:1`) + `CinematicImage` (`src/components/ui/CinematicImage.tsx:1`) with `fill` + `aspect-[16/9]`; SplitShow is `md:grid-cols-2` with stagger `delay 0/120/240ms`; no scroll-snap, native scroll with `PageTransition`.
- **Prototype asset:** `wayfinder/prototypes/03-editorial-layout-spec.md:1` — user approved, no tweaks (tighter gaps, separate band etc. deferred). This unblocks tickets 04 + 05.

**Assets linked:** Prototype markdown is the spec handoff for 04/05 implementation.

