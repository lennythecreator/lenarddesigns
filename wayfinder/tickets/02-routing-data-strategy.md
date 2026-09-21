# Ticket — Decide Routing & Data Strategy for /projects/[id]

> Parent: `../map-project-details.md` · Label: `wayfinder:research` · Type: research · AFK · Status: closed · Claimed by: opencode (research subagent) · Closed: 2026-08-30 · Branch: research/routing-data-strategy
> Blocked by: — (01 closed)
> Skills: `research`, `nextjs-app-router-patterns`

## Question

How should the dynamic route `/projects/[id]` be implemented in the Next.js App Router given this is the Next.js version with breaking changes per `AGENTS.md:1` — specifically `generateStaticParams`, data lookup from `src/lib/content.ts`, `generateMetadata`, `notFound()` handling, and linking from `src/components/sections/ProjectShowcase.tsx` — so it follows the repo's docs in `node_modules/next/dist/docs/` and the project's existing `src/app/projects/page.tsx` pattern?

Research: verify current `next.config.ts`, app-router conventions for `[id]` folders, and whether `href: "#"` in `projects` becomes `/projects/{id}`. Produce decision on file location and data-fetching pattern (no build yet).

## Resolution

**Decision — file & data pattern (Next 16.3.1, React 19, App Router):**

- **Route file:** `src/app/projects/[id]/page.tsx` (leaf page, Server Component by default). Also add `src/app/projects/[id]/not-found.tsx` for unknown ids.
- **`params` is Promise** — breaking change v15+ (`node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/page.md:13`, `dynamic-routes.md:21`): must `await params`.
  ```ts
  export default async function ProjectDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = projects.find(p => p.id === id);
    const details = projectDetails[id];
    if (!project || !details) notFound();
  }
  ```
- **`generateStaticParams`** (`node_modules/next/dist/docs/01-app/03-api-reference/04-functions/generate-static-params.md:1`): statically generate known ids at build, no fetch memoization needed (local content).
  ```ts
  export async function generateStaticParams() {
    return projects.map(p => ({ id: p.id })); // { id: "Zizi" }, { id: "project-sitesense" }
  }
  export const dynamicParams = false; // unspecified ids → 404 (only known projects served)
  ```
- **`generateMetadata`** ( `generate-metadata.md:1` ): derive from `details` → `title: ${project.title} — ${details.problem.title}` etc., OG image from `details.hero?.image ?? project.image`.
- **Linking:** `src/components/sections/ProjectShowcase.tsx:34` `href={project.href}` currently `"#"` — change to `` `/projects/${project.id}` ``. Type `Project` `href` remains but value becomes dynamic route; no type change needed. Keeps `src/app/projects/page.tsx:17` listing intact.
- **`next.config.ts:4` images:** already allows `lh3.googleusercontent.com` + local `/public` (no change needed). `CinematicImage` wrapper handles `next/image`.
- **Verified repo patterns:** `src/app/layout.tsx:1` root layout with `PageTransition`; `src/app/projects/page.tsx:9` Server Component pattern; this `[id]` page follows same.

**Context pointer for consumers:** Ticket 04 can now design props as `project: Project` + `details: ProjectDetails`; ticket 03 can assume hero lookup with fallback.

**Research branch artifact:** `research/routing-data-strategy` (throwaway) — context pointer is this ticket; no code committed (planning only).

