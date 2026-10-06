# CONTEXT.md — lenard-designs

> Domain: portfolio · Next.js App Router · Obsidian Cinematic

## Glossary

- **Project**: Card-level entry in `src/lib/content.ts:17` — `{id, meta, title, description, image, href, layout}` — used by `ProjectShowcase` listing. Non-detail.

- **ProjectDetails**: Canonical detail record for bespoke page — `Record<string, ProjectDetails>` keyed by `Project.id`. Carries three editorial chapters: **Problem / Idea / Result** plus optional hero override. This is the source of truth for `/projects/[id]`.

- **Problem**: Chapter 1 — the situation before the work, who was affected, urgency and constraints. Maps to questionnaire Problem (Q1-6). Shape: `{ eyebrow, title, body, bullets?, image? }` — `title`+`body` required.

- **Idea**: Chapter 2 — the central bet, why this over alternatives, insight and gallery. Maps to questionnaire Idea (Q7-12). Shape: `{ eyebrow, title, body, insight?, gallery? }`.

- **Result**: Chapter 3 — what shipped, what changed, proof. Maps to questionnaire Result (Q13-18). Shape: `{ eyebrow, title, body, gallery?, metrics?, quote? }`.

- **Chapter**: Shared shape `{ eyebrow, title, body }` — eyebrow is `label-caps` index like `01 · Problem`.

- **Hero**: Header for `/projects/[id]` — reuses `Project.meta/title/image` unless `ProjectDetails.hero.image/subtitle` provided.

## Decisions

- Problem / Idea / Result are canonical chapter names (locked 2026-08-30 via wayfinder ticket 01). Do not use Challenge / Product Overview / Core Mission synonyms in code or copy.

