# Ticket — Define Component Architecture & File Map

> Parent: `../map-project-details.md` · Label: `wayfinder:grilling` · Type: grilling · HITL · Status: closed · Claimed by: opencode · Closed: 2026-08-30 · Frontier: yes
> Blocked by: — (01, 03 closed)
> Skills: `grilling`, `domain-modeling`

## Question

What is the component file map for the bespoke page that keeps `src/components/sections/project-details/` isolated from existing sections — deciding component names, props, and where shared primitives (`SectionEyebrow`, `CinematicImage`, `ScrollReveal`, `AmbientGlow`) are reused vs. new — so the implementation can be sliced vertically without touching `ApproachSection` / `ShowroomSection`?

Decide: `ProjectDetailsHero`, `ChapterSection` (reused for Problem/Idea/Result), `SplitShowGallery`, `ResultProof` (+ sticky chapter nav sub-component), their prop contracts derived from the `ProjectDetails` model from ticket 01, and file paths under `src/components/sections/project-details/` and `src/app/projects/[id]/`.

## Resolution

**Decision:** Isolated bespoke folder + prop contracts locked.

- **Isolation:** New `src/components/sections/project-details/` with 5 components; no edits to `ApproachSection.tsx:1` / `ShowroomSection.tsx:1` / `ProjectShowcase.tsx:1` except href link (ticket 02).
  ```
  src/components/sections/project-details/
    ProjectDetailsHero.tsx      // hero: {project: Project, details: ProjectDetails}
    ChapterSection.tsx          // { eyebrow, title, body, bullets?, insight?, image?, mirrored?: boolean }
    SplitShowGallery.tsx        // { images: ImageAsset[] }
    ResultProof.tsx             // { gallery?: ImageAsset[], metrics?: {label,value}[], quote?: Testimonial }
    NextProjectCTA.tsx          // { currentId: string }
  src/app/projects/[id]/
    page.tsx                    // composes above + TopNavBar/Footer, awaits params, notFound()
    not-found.tsx               // handles unknown id
  ```
- **Props from ticket 01:** `ChapterSection` consumes `ProjectDetails["problem"|"idea"|"result"]` directly (`wayfinder/tickets/01-content-model.md:13`, `CONTEXT.md:9`); `ResultProof` consumes `gallery/metrics/quote` (`content.ts:3` `ImageAsset`, `content.ts:27` `Testimonial` reused, no new types).
- **Reuse primitives:** Inside bespoke, reuse `src/components/ui/CinematicImage.tsx:1`, `ScrollReveal.tsx:1`, `SectionEyebrow.tsx:1`, `AmbientGlow.tsx:1`, `Button.tsx:1`, `TopNavBar.tsx:1`, `Footer.tsx:1` — no duplication; bespoke only adds layout orchestration (`wayfinder/prototypes/03-editorial-layout-spec.md:1`).
- **Route composition (ticket 02):** `src/app/projects/[id]/page.tsx:1` imports `projects` + `projectDetails` from `src/lib/content.ts:91`, awaits `params: Promise<{id}>`, `generateStaticParams`/`generateMetadata`/`notFound()` per `wayfinder/tickets/02-routing-data-strategy.md:13`; `ProjectShowcase` href → `/projects/${id}`.

**Handoff:** Ticket 05 can now decide sticky nav interactions within this file map without re-architecting.

