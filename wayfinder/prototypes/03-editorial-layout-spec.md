# Prototype — Editorial Layout Spec (Bespoke Project Details)

> Ticket: `wayfinder/tickets/03-editorial-layout-spec.md:1` · Type: prototype · Asset for reaction
> Reference: Cuberto DaoWay (https://cuberto.com/projects/daoway/) → Obsidian Cinematic (`DESIGN.md:1`)

## Page Order (editorial story, one scroll)

```
<TopNavBar /> (existing)
<ProjectDetailsHero />          — full-bleed, display-xl, hero image edge-to-edge
<ChapterSection eyebrow="01 — Problem" />  — text left, image right (or stacked mobile)
<SplitShowGallery idea.gallery[0..1] />    — optional, only if gallery exists
<ChapterSection eyebrow="02 — Idea" insight? />  — mirrored layout (image left)
<SplitShowGallery idea.gallery[2..] />    — 2-col, glass-border
<ChapterSection eyebrow="03 — Result" />  — metrics grid + quote
<ResultProof gallery + metrics />         — full-width gallery + testimonial
<NextProjectCTA />                        — like Cuberto "Next project"
<Footer project />
```

## Tokens (from DESIGN.md)

- **Surface:** `surface: #141313`, `on-surface: #e5e2e1`, `surface-container-low: #1c1b1b` for depth
- **Typography:** `display-lg` (80px/80px, -0.04em) for hero title, `display-lg-mobile` 48px, `headline-lg` 40px for chapter titles, `body-lg` 20px for chapter body, `label-caps` 12px 700 0.15em for eyebrow
- **Spacing:** `margin-desktop:64px`, `margin-mobile:24px`, `gutter:32px`, `section-gap-lg:240px` between chapters, `section-gap-md:120px` inside chapter (between title/body/gallery)
- **Rounded:** `rounded:0.5rem` cards, `rounded-lg:1rem` images
- **Elevation:** `cinematic-shadow` (120px blur 15% opacity), `glass-border` 1px soft-white/10%, `backdrop-blur 20px` for sticky nav

## ChapterSection Wire (reused for Problem/Idea/Result)

```tsx
// src/components/sections/project-details/ChapterSection.tsx (prototype sketch)
<ScrollReveal className="fade-in">
  <section className="px-margin-mobile md:px-margin-desktop max-w-[1920px] mx-auto pt-section-gap-lg border-t border-glass-border">
    <p className="font-label-caps text-label-caps text-outline">{eyebrow} — e.g. 01 — Problem</p>
    <h2 className="font-headline-lg text-headline-lg text-soft-white mt-6 max-w-[20ch]">{title}</h2>
    <p className="font-body-lg text-body-lg text-on-surface-variant mt-8 max-w-[60ch]">{body}</p>
    {bullets && <ul className="mt-8 grid gap-2 font-body-md text-on-surface-variant list-disc pl-6">{bullets.map(b=><li>{b}</li>)}</ul>}
    {insight && <blockquote className="mt-8 border-l-2 border-soft-white pl-6 font-body-md italic text-soft-white">{insight}</blockquote>}
    {image && <div className="mt-12 rounded-lg overflow-hidden cinematic-shadow"><CinematicImage src={image.src} alt={image.alt} fill className="aspect-[16/9]" /></div>}
  </section>
</ScrollReveal>
```

- **Alternation:** Problem = text 5col / image 7col (`lg:grid-cols-12`), Idea = mirrored (image left), Result = text stacked then metrics. Mobile: stacked (image order-1).
- **SplitShowGallery:** `grid grid-cols-1 md:grid-cols-2 gap-gutter` — each `CinematicImage` with `rounded-lg` + `glass-border`, `ScrollReveal` per image with `delay={i*120}`.

## Hero Wire

```tsx
// ProjectDetailsHero.tsx sketch
<section className="px-margin-mobile md:px-margin-desktop max-w-[1920px] mx-auto pt-32 pb-section-gap-md">
  <p className="font-label-caps text-label-caps text-outline">{meta} — e.g. PropTech / Real Estate Platform</p>
  <h1 className="font-display-lg text-display-lg md:text-display-lg-mobile text-soft-white mt-4">{title}</h1>
  <p className="font-body-lg text-on-surface-variant mt-6 max-w-[60ch]">{hero.subtitle ?? description}</p>
  <div className="mt-12 rounded-lg overflow-hidden cinematic-shadow">
    <CinematicImage src={hero.image?.src ?? project.image.src} alt={hero.image?.alt ?? project.image.alt} fill className="aspect-[16/9] md:aspect-[21/9]" priority />
  </div>
</section>
```

- Full-bleed image like Cuberto `main.jpg?2`, no crop on desktop, `priority` for LCP.

## Annotations for Motion

- `ScrollReveal` wraps every `<section>` and each gallery image (delay stagger 0/120/240ms) — existing `src/components/ui/ScrollReveal.tsx:1` IntersectionObserver 0.1 threshold.
- `CinematicImage` with `fill` + `object-cover` — add `image-reveal` class if needed (from ProjectShowcase).
- No scroll-snap; native scroll with `PageTransition` from `src/app/layout.tsx:18`.

## Open Questions for Reaction

- Is `section-gap-lg:240px` too airy between Problem/Idea/Result, or should we tighten to 120px for denser Cuberto feel?
- Should SplitShow be inside ChapterSection or as separate gallery band (like DaoWay splitshow/1..4)?
- Do metrics want a 3-col grid (`value` headline-lg + `label` label-caps) vs inline?

> This prototype is linked as asset from ticket 03; do not ship as final code — adjust after your reaction.

