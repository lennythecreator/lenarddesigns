# Wayfinder Map — Bespoke Project Details Page

> Label: `wayfinder:map` · Type: map · Status: open
> Tracker: local-markdown (default — no external issue tracker provided)

## Destination

A **spec to hand off** for a bespoke Project Details route at `/projects/[id]` — three editorial chapters **Problem / Idea / Result** inspired by Cuberto DaoWay, driven by typed content in `src/lib/content.ts:17`, using Obsidian Cinematic tokens (surface #141313, display-xl, section-gap-lg 240px) with bespoke components. Wayfinding is done when all build decisions are resolved and can be sliced into implementation vertical slices.

## Notes

- **Domain:** lenard-designs portfolio · Next.js 14+ App Router · Obsidian Cinematic (see `DESIGN.md:1`)
- **Skills to consult each session:** `nextjs-app-router-patterns`, `grilling`, `domain-modeling`, `prototype`, `research`
- **Constraints:** content stays in `src/lib/content.ts` (no CMS yet) · bespoke layout (do NOT reuse `ApproachSection`/`ShowroomSection` patterns verbatim) · must link from `src/components/sections/ProjectShowcase.tsx:1`
- **Reference:** https://cuberto.com/projects/daoway/ · existing questionnaire `to-questionnaire-project-details.md:1`

## Decisions so far

<!-- the index: one line per closed ticket, enough to judge relevance, then zoom the link for the detail the ticket holds -->
- [Define ProjectDetails Content Model](tickets/01-content-model.md): Canonical `ProjectDetails = Record<string, {problem, idea, result: Chapter + extras}>` keyed by `Project.id`; `title+body` required, rest optional; hero falls back to `Project`; `CONTEXT.md` locked. Unlocks routing (02) and component props (04).
- [Decide Routing & Data Strategy for /projects/[id]](tickets/02-routing-data-strategy.md): Next 16.3.1 `src/app/projects/[id]/page.tsx` with `params: Promise<{id}>` (await), `generateStaticParams` from `projects`, `dynamicParams=false`, `notFound()` fallback, `generateMetadata` from details, `ProjectShowcase` href → `/projects/${id}`. Verifies `next.config.ts` images + `dynamic-routes.md`/`generate-static-params.md` docs.
- [Spec Editorial Layout & Visual Rhythm](tickets/03-editorial-layout-spec.md): Approved bespoke order hero→Problem→SplitShow→Idea (mirrored)→SplitShow→Result+ResultProof→NextProject; tokens `section-gap-lg:240px`, display-lg/headline-lg, cinematic-shadow/glass-border, ScrollReveal stagger; prototype at `wayfinder/prototypes/03-editorial-layout-spec.md:1`.
- [Define Component Architecture & File Map](tickets/04-component-architecture.md): Isolated `src/components/sections/project-details/` (Hero, ChapterSection, SplitShowGallery, ResultProof, NextProjectCTA) reusing `CinematicImage`/`ScrollReveal`/`SectionEyebrow`; props directly from `ProjectDetails` (01); route `src/app/projects/[id]/page.tsx` composes them.
- [Decide Chapter Navigation & Reveal Interactions](tickets/05-chapter-nav-interactions.md): Sticky `ChapterNav` (Problem|Idea|Result) with `IntersectionObserver` active, anchors `#problem/#idea/#result`, glass/blur, no scroll-snap; reveals via `ScrollReveal` + stagger, prototype at `wayfinder/prototypes/05-chapter-nav-interactions.md:1`.

## Not yet specified

<!-- in-scope fog you can't ticket yet; graduates as the frontier advances -->
- Per-project final copy for Zizi / SiteSense (Problem/Idea/Result text) — needs questionnaire answers applied to `projectDetails` records
- Image asset sourcing & optimization strategy ( `/public` vs remote URLs, `next/image` sizing for hero / splitshow / galleries)
- SEO & metadata model for `[id]` route (`generateMetadata`, OG images, `sitemap.ts`)
- Next-project navigation logic (order, circular linking)
- Motion / reveal choreography details beyond `ScrollReveal` + `CinematicImage`
- Error / notFound handling for unknown `[id]`

## Out of scope

<!-- work ruled beyond the destination; closed, never graduates -->
- CMS / admin editing UI for project content
- Multi-language / i18n for project details
- E-commerce or checkout flows
- Migration of all existing projects — only template + 1 exemplar (Zizi) needed to prove the way

