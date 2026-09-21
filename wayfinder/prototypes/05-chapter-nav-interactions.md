# Prototype — Chapter Navigation & Reveal Interactions

> Ticket: `wayfinder/tickets/05-chapter-nav-interactions.md:1` · Type: prototype · Asset for reaction

## Sticky Chapter Nav (Problem | Idea | Result)

```tsx
// src/components/sections/project-details/ChapterNav.tsx (sketch)
"use client";
import { useEffect, useState } from "react";

const chapters = ["problem","idea","result"] as const;

export function ChapterNav() {
  const [active, setActive] = useState("problem");
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if(e.isIntersecting) setActive(e.target.id) });
    }, { rootMargin: "-50% 0px -50% 0px", threshold: 0 });
    chapters.forEach(id => { const el=document.getElementById(id); if(el) obs.observe(el); });
    return () => obs.disconnect();
  },[]);
  return (
    <nav className="sticky top-[72px] z-20 backdrop-blur-[20px] bg-surface/80 border-y border-glass-border">
      <div className="px-margin-mobile md:px-margin-desktop max-w-[1920px] mx-auto flex gap-8 py-4">
        {chapters.map(id => (
          <a key={id} href={`#${id}`} className={`font-label-caps text-label-caps ${active===id ? "text-soft-white border-b border-soft-white" : "text-outline hover:text-soft-white"} pb-1 transition-colors`}>
            {id === "problem" ? "01 — Problem" : id === "idea" ? "02 — Idea" : "03 — Result"}
          </a>
        ))}
      </div>
    </nav>
  );
}
```

- **Placement:** Directly under `ProjectDetailsHero`, sticky `top-[72px]` (below `TopNavBar`), not full-page snap. `backdrop-blur 20px` + `surface/80` glass per `DESIGN.md:159`.
- **Active state:** IntersectionObserver centered (`-50%` rootMargin) so middle-of-viewport chapter lights up; no scroll-snap.
- **Accessibility:** Native anchor links (`#problem` etc.), keyboard-focusable, fallback without JS still jumps.
- **Mobile:** Horizontal scroll if needed, `overflow-x-auto`, same sticky.

## Reveal Choreography

- **Sections:** Each `ChapterSection` already wrapped in `ScrollReveal` (`src/components/ui/ScrollReveal.tsx:1` threshold 0.1). Keep `fade-in` only — no parallax (performant, per `DESIGN.md:155` avoid heavy drop shadows).
- **Gallery:** `SplitShowGallery` images stagger `delay 0/120/240ms` — already in `03` prototype, confirmed here.
- **No scroll-snap:** Intentionally omitted — Cuberto uses native scroll for editorial flow; snap would fight sticky nav and hurt a11y.

## Anchors

Add `id="problem"` / `id="idea"` / `id="result"` to each `ChapterSection` root `<section>` so nav and deep-links work.

## Open Reaction

- Sticky nav should fade `glass-border` on scroll or stay solid?
- Active underline vs pill background for current chapter?

> Linked as asset from ticket 05; approve to lock interaction spec.

