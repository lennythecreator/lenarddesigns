# Lenard Designs — Review Fix Checklist

Working checklist derived from `Lenard Designs Website Review.md` (13 Nov 2026, 5/10).
Each item names the concern in the review and the change that answers it. Every item
below is implemented in the site; verification results are at the bottom.

## 1. Show real, named work (review: portfolio 3/10, "no named clients, no live links")

- [x] Every project states its ownership: client engagement, research collaboration or studio product. (`Project.ownership` in `src/lib/content.ts`, rendered on cards and case-study heroes.)
- [x] The Projects listing shows the named client or lab, plus the project's current status and what can be verified. (`ProjectShowcase.tsx`)
- [x] Each case study carries a "Project facts" block: client, our role, status and how a visitor can see the work. (`ProjectFacts.tsx`, rendered under the hero in `src/app/projects/[id]/page.tsx`)
- [x] Tracky is labelled a studio product with its publication status, not read as client work. (`meta`, `ownership`, `client`, `status`, `proofNote`; case study copy says it is internal and not on npm.)
- [x] Zizi stops repeating the same render as a multi-item gallery; every repeated chapter image was removed, and concept renders are labelled. (`visualNote` in the Zizi hero.)
- [x] The anonymous testimonial ("Founder, Tech Ventures") is removed, along with the unattributed pilot-cohort quote. `TestimonialSection.tsx` and the `testimonial` export are deleted; nothing on the site publishes an unattributed quote. A verifiability section replaces it. (A named, permissioned quote can be added later; the old type is gone rather than re-rendered anonymously.)

## 2. Source every metric (review: "no baseline, sample size or time period")

- [x] Metrics carry a source line: baseline, period, method and who reported the number. (`Metric.source`; shown under each value in `ResultProof.tsx`)
- [x] Each case study shows a "How these numbers were measured" disclosure. (`result.measurement` rendered as a labelled panel.)
- [x] Self-reported pilot data is explicitly marked as team-reported, not independently audited. (Zizi measurement paragraph, and the `source` lines.)

## 3. Add the people (review: trust 3/10, "no founder, team or history")

- [x] A `/studio` page names the person who runs engagements, their role and background, and who works on each project. Lenny is presented as a studio member, not as owner or founder. (`src/app/studio/page.tsx`, `studioProfile.member`)
- [x] The studio page states where the studio is, how it is sized, who leads the work and what it does not do (no account manager, no junior handoff). (facts grid + principles)
- [x] The home page gains a studio section linking to `/studio`. (`StudioIntroSection.tsx`)
- [x] Navigation and footer expose the studio page. (`navItems`, all three `footerConfigs`)
- [x] The studio page says references and underlying pilot data are available on request. (`studioProfile.proofPoints`)

## 4. Fix the placeholder links (review: Privacy, Terms, Careers and socials all pointed at "#")

- [x] `/privacy` is published and describes what the contact form collects, why, where it is stored, retention and how to have it deleted.
- [x] `/terms` is published (quotes and ranges, case study figures, IP and third-party marks, liability, Maryland governing law).
- [x] The Careers link is removed until there are openings.
- [x] Social links are removed rather than left pointing at "#"; no `href="#"` remains anywhere in `src/`. (Verified by search.)
- [x] Sitemap and `public/llms.txt` list the new pages and the named case studies.

## 5. Say how you work (review: services 5/10, "no process, pricing guidance or stack detail")

- [x] Every service states its stack and says both timeline and pricing are set per project. No price numbers and no fixed durations are published. (`ServicePillar.timeline/investment/stack`, rendered by `ServicePillar.tsx` under "TIMELINE" and "PRICING" labels)
- [x] Every service states who it is for. (`ServicePillar.audience`)
- [x] The services page adds a process section describing the four stages, without inventing per-stage durations. (`ProcessSection.tsx`, `processSteps`)
- [x] The services page explains the billing model (fixed fee, 50% to begin, 50% at launch) and that each project is quoted individually rather than from a price list, with the reason. (`engagementNotes`)
- [x] The services hero states what the studio builds and for whom. (`ServicesHeroSection.tsx`)

## 6. Trim the buzzwords (review: "could describe any agency", internal terms in client copy)

- [x] Site metadata description is rewritten around what is built, for whom and where. (`src/app/layout.tsx`; `metadataBase` also moved into the metadata object, which the build had been ignoring.)
- [x] Landing hero copy is concrete instead of abstract. (`LandingHeroSection.tsx`)
- [x] Internal design-system terms (e.g. "Obsidian Cinematic tokens") are removed from case study copy. (Zizi Idea and Result chapters rewritten; verified by search.)
- [x] Portfolio hero copy is concrete. (`PortfolioHeroSection.tsx`)

## 7. Set expectations on Contact (review: "no address, no next-step expectations")

- [x] The contact page states the studio's location and service area. (`contactInfo.location`, `contactInfo.serviceArea`)
- [x] A response-time promise sits next to the form. (`contactInfo.responseTime`, above the form and in the page intro)
- [x] The contact page explains what happens after an inquiry. (`nextSteps` list: reply, call, written scope)
- [x] The consent checkbox links to the privacy policy. (`ContactForm.tsx`)
- [x] The success message matches the stated response promise ("within one business day").

## 8. Build outside proof (review: no third-party validation, no Tracky package link)

- [x] The Projects page replaces the unattributed quote with a "what you can check" section. (`ProofSection.tsx`)
- [x] The studio page states that references and pilot data are available on request, and every case study names the client, the role and the measurement method.

## Verification

- [x] `npm run lint` — 0 errors (188 pre-existing warnings, all from vendored `.agents`/`.claude` skill scripts, none in `src/`).
- [x] `npx tsc --noEmit` — exit 0.
- [x] `npm run build` — exit 0, Next.js 16.3.6; `/studio`, `/privacy`, `/terms` prerender, and `/projects/Zizi`, `/projects/project-sitesense`, `/projects/tracky` still generate statically.

## Facts only the owner can supply (not implementation blockers)

The site has honest slots for these; confirm them before treating the content as final.

- A real portrait (the studio page uses Lenny's first name and a monogram plate). The copy deliberately avoids owner or founder wording, per the owner's legal preference.
- Exact Zizi pilot cohort size and dates (the page states the window, baseline and method, and that the figures are team-reported).
- A public demo or repository link for Tracky and SiteSense (both state a walkthrough is available on request).
- Live social profile URLs (social links stay removed until profiles exist).
- Founded year (omitted rather than invented).
- The response-time promise is a written default in `src/lib/contact.ts`; adjust it to the real working hours. Pricing is deliberately absent from the site: each project is quoted individually after scoping, so there is no rate card to publish.
