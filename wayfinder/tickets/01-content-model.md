# Ticket — Define ProjectDetails Content Model

> Parent: `../map-project-details.md` · Label: `wayfinder:grilling` · Type: grilling · HITL · Status: closed · Claimed by: opencode · Closed: 2026-08-30
> Blocks: 02, 04
> Skills: `grilling`, `domain-modeling`

## Question

What is the canonical `ProjectDetails` type that extends `src/lib/content.ts:17` `Project` to carry **Problem / Idea / Result** for the bespoke editorial page — including field names, required vs optional, and how it maps to the `to-questionnaire-project-details.md` answers — so that `/projects/[id]` can be driven entirely from `src/lib/content.ts` without CMS?

Decide: hero subtitle + mainImage, `problem: { eyebrow, title, body, bullets? }`, `idea: { title, body, insight, gallery }`, `result: { title, body, images, metrics?, quote? }`, and whether to store as `Record<string, ProjectDetails>` alongside `projects` or replace `Project`. Lock domain terms (Problem/Idea/Result) in `CONTEXT.md` if needed and cross-check `content.ts` vs `DESIGN.md` tokens.

## Resolution

**Decision:** Canonical `ProjectDetails` extends `Project` without mutation.

```ts
// src/lib/content.ts — to be added (spec, not yet implemented)
export type Chapter = { eyebrow: string; title: string; body: string; }
export type ProjectDetails = {
  id: string; // matches Project.id — key for Record
  hero?: { subtitle?: string; image?: ImageAsset; } // fallback to Project.meta/title/image
  problem: Chapter & { bullets?: string[]; image?: ImageAsset; } // Q1, Q2: title+body required, bullets/image optional
  idea: Chapter & { insight?: string; gallery?: ImageAsset[]; } // insight + gallery optional
  result: Chapter & { gallery?: ImageAsset[]; metrics?: { label:string; value:string }[]; quote?: Testimonial; }
}
export const projectDetails: Record<string, ProjectDetails> = {
  "Zizi": { problem:{eyebrow:"01 — Problem", title:"...", body:"..."}, idea:{...}, result:{...} },
}
```

- **Rationale:** Q1 confirmed consistent `{eyebrow,title,body}+extras` per chapter → maps 1:1 to questionnaire (`Problem` Q1-6 → `problem`, `Idea` Q7-12 → `idea`, `Result` Q13-18 → `result`). Q2: only `title`+`body` required, rest optional so any project ships with text-only fallback. Q3: keep `projects: Project[]` for `ProjectShowcase` listing, add `projectDetails: Record<string, ProjectDetails>` keyed by `id` — zero breakage, lookup `projectDetails[params.id]`. Q4: hero reuses `Project` header, `hero.image` optional override.
- **Domain terms locked in `CONTEXT.md:1`**: Problem / Idea / Result are canonical chapter names (not Challenge/Overview/Mission).
- **Cross-check:** `ImageAsset` and `Testimonial` reuse existing types (`content.ts:3`, `content.ts:27`); Obsidian tokens from `DESIGN.md:1` unchanged.

**Assets linked:** `CONTEXT.md:1` updated; spec block above is handoff for ticket 04.

