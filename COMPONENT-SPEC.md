# Component Specification — Lenard Designs

Atomized component breakdown derived from the reference pages in `refrences/`, aligned to the "Obsidian Cinematic" design system in `DESIGN.md`.

**Stack:** Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · Plus Jakarta Sans · Material Symbols Outlined.

---

## 1. Reference Page Inventory

Each reference page is decomposed below into reusable, atomized components. Pages marked `[shared]` contain components that appear across multiple pages.

### 1.1 `refrences/Landing.html` — Home

```
Landing
├── TopNavBar                          [shared]
│   ├── BrandLogo                      [shared]
│   ├── NavLinks (Work, Services, Project)   [shared]
│   ├── HeaderCTA (Let's Talk)         [shared]
│   └── MobileMenuButton (placeholder) [shared]
├── HeroSection
│   ├── HeroBackground (cinematic image + gradient overlay)
│   ├── HeroHeadline ("Lead by Design. Engineering Reality.")
│   └── HeroSubtext
├── ApproachSection (OUR APPROACH)
│   ├── SectionEyebrow (top-border + label)   [shared]
│   └── ApproachItem ×3 (01 Strategy / 02 Design / 03 Engineering)
├── ShowroomSection (Featured Showroom)
│   ├── SectionHeader (title + "View All Work" link)
│   └── ShowroomCard (image, category label, title, arrow button)
├── CTASection
│   ├── CTAHeadline ("Envision Tomorrow. Launch Today.")
│   └── CTAButton (primary "LET'S TALK")      [shared]
└── Footer                              [shared]
    ├── FooterWatermark (giant translucent brand text)
    ├── FooterLinkGroup (Privacy, Terms, Careers, Instagram)
    └── Copyright
```

### 1.2 `refrences/Project.html` — Portfolio / Selected Works

```
ProjectPage
├── TopNavBar (sticky variant, active "Projects" link, "Start a Project" solid CTA) [shared]
├── PortfolioHeroSection
│   ├── SectionEyebrow ("01 / Portfolio")     [shared]
│   ├── HeroHeadline ("Selected Works")
│   └── HeroSubtext
├── ProjectShowcase
│   └── ProjectCard ×3 (alternating 4/8 grid layout)
│       ├── ProjectMeta (category label)
│       ├── ProjectTitle
│       ├── ProjectDescription
│       ├── ExploreLink ("Explore Case Study" + arrow)
│       └── ProjectImage (image-reveal hover) [shared CinematicImage]
├── TestimonialSection
│   ├── QuoteMark (large format_quote icon)
│   ├── TestimonialQuote (blockquote)
│   └── TestimonialAttribution (rule + "Founder, Tech Ventures")
└── Footer (variant: Privacy / Terms / LinkedIn / Instagram) [shared]

Behavior: ScrollReveal (IntersectionObserver fade-in)   [shared]
```

### 1.3 `refrences/Services.html` — Services

```
ServicesPage
├── Navigation (fixed; active "Services" link)   [shared TopNavBar variant]
├── ServicesHeroSection
│   ├── HeroBackground (image + gradient)
│   ├── SectionEyebrow ("CAPABILITIES / SERVICES")   [shared]
│   ├── HeroHeadline ("The relationship between design and engineering.")
│   └── HeroSubtext
├── ServicePillar ×5 (alternating two-column layout)
│   ├── PillarLabel ("CAPABILITIES // 01")
│   ├── PillarTitle (Website Design, Mobile App, E-Commerce, MVP, Marketing/Event)
│   ├── PillarDescription
│   ├── FeatureList (numbered items 001/002, glass-bordered)
│   │   └── FeatureListItem
│   └── PillarImage (glass panel + image hover reveal) [shared CinematicImage]
├── AmbientGlow (decorative radial gradient)    [shared]
└── Footer (variant: social links Dribbble/LinkedIn/Twitter) [shared]
```

### 1.4 `refrences/Splash Animation.html` — Brand Logo Splash

```
SplashAnimation
└── BrandSplash
    └── SplashSvgLogo (SVG: "L.D" expands to "LENARD DESIGNS";
         letter-slide, blur-in reveal, dot fade, glow pulse)  [shared]
```

### 1.5 `refrences/Splash Reveal.html` — Splash Screen / Preloader

```
SplashScreen (full-viewport preloader)
├── WebGLBackground (canvas + fragment shader ambient animation)
├── SplashSvgLogo (shared animated logo)      [shared]
└── EnterButton ("ENTER" pill, delayed fade-in) [shared button ghost variant]
```

---

## 2. Component Catalog

### 2.1 Shared / Atomic Components

| Component | Type | Purpose | Variants / Props | Used On |
|---|---|---|---|---|
| `BrandLogo` | atomic | Text wordmark "LENARD DESIGNS" in display type; links to `/`; optionally decorative giant watermark mode (`variant: watermark`). | `variant: header \| watermark`, `href` | All pages |
| `NavLinks` | atomic | Horizontal `label-caps` link group with underline-on-hover; renders `active` link with persistent underline. Fed by the shared `navItems` (Work, Services, Projects). | `items: {label, href}[]`, `active` | All pages (via `TopNavBar`) |
| `HeaderCTA` | atomic | Ghost button "Let's Talk" anchoring to contact; hidden on mobile (moved into the mobile drawer). | `label` | All pages (via `TopNavBar`) |
| `MobileMenuButton` | atomic | Mobile-only hamburger (Material Symbol `menu`/`close`) that toggles the header's mobile drawer. | `open`, `onClick` (client) | All pages (via `TopNavBar`) |
| `TopNavBar` | composite | Single fixed site header, identical on every page: backdrop-blur + glass bottom border, brand, Work/Services/Projects links with route-based active underline (`usePathname`), ghost "Let's Talk" CTA, mobile drawer. Self-contained (no props). | — | All pages |
| `Button` | atomic | Style primitives. `primary` = soft-white fill; `ghost` = 1px glass border; `pill` = rounded-full variant for splash. All use `label-caps`. | `variant: primary \| ghost \| pill`, `size`, `asChild` | All pages |
| `CinematicImage` | atomic | Wrapped `<Image>` with dark overlay that clears on hover (image-reveal), plus optional `cinematic-shadow`. | `src`, `alt`, `aspect`, `radius`, `overlayOpacity` | Landing, Project, Services |
| `SectionEyebrow` | atomic | `label-caps` meta label introduced by a 1px glass rule/border; uppercase + wide tracking. | `label`, `withRule: boolean`, `alignment` | Landing, Project, Services |
| `Footer` | composite | Page footer; variants differ in link set. Optionally renders `FooterWatermark`. | `links`, `showWatermark`, `showCopyright` | Landing, Project, Services |
| `FooterLinkGroup` | atomic | Row of `label-caps` / `body-md` footer links with hover color transition. | `links: {label, href}[]` | Landing, Project, Services |
| `Copyright` | atomic | "© 2024 LENARD DESIGNS. All rights reserved." line. | `text`, `variant` | Landing, Project, Services |
| `AmbientGlow` | atomic | Decorative fixed radial gradient behind content for atmosphere; `pointer-events: none`. | — | Services (reusable anywhere) |
| `ScrollReveal` | behavior (client) | IntersectionObserver fade-in-on-scroll wrapper (adds `visible` to `.fade-in`, fade-up). Supports staggered `delay` for sequential reveals. | `delay` (ms) | Projects page, Our Approach |
| `HeroBackground` | atomic | Full-bleed cinematic `<Image>` with `mix-blend`/opacity + gradient overlay toward base color. | `src`, `overlayDirection`, `opacity` | Landing, Services |
| `HeroHeadline` | atomic | `display-xl`/`display-lg` (mobile-aware) headline block. | `lines: string[]` | Landing, Project, Services |
| `HeroSubtext` | atomic | `body-lg` supporting paragraph constrained to `max-w-2xl`. | `children` | Landing, Project, Services |
| `SplashSvgLogo` | atomic | Animated SVG wordmark: "L.D" splits into "LENARD DESIGNS" with letter movement, blur reveal, dot fade, glow pulse. | `duration`, `autoplay` | Splash Animation, Splash Reveal |

### 2.2 Page-Section Components

| Component | Type | Purpose |
|---|---|---|
| `HeroSection` | page-section | Full-viewport (or `70vh`) composition of `HeroBackground`, `SectionEyebrow`, `HeroHeadline`, `HeroSubtext` with vertical centering and generous top padding for the fixed nav. |
| `ApproachSection` | page-section | Landing "OUR APPROACH" chapter: three stacked, glass-ruled rows. |
| `ApproachItem` | composite | Numbered row (`01`, `02`, `03`) of title (`display-lg`) + description (`body-lg`) separated by glass top/bottom borders. Props: `index`, `title`, `description`. |
| `ShowroomSection` | page-section | "Featured Showroom": header row + featured project card. |
| `SectionHeader` | composite | Title (`headline-lg`) on the left + "View All Work" link on the right, with a bottom glass rule. Props: `title`, `linkLabel`, `linkHref`. |
| `ShowroomCard` | composite | Large featured project visual (aspect `21/9` → video on md) with hover zoom, category label, project title, circular arrow button. |
| `CTASection` | page-section | Full-width centered closing statement: `CTAHeadline` + primary `CTAButton`. |
| `PortfolioHeroSection` | page-section | Portfolio intro: eyebrow "01 / Portfolio", `display-xl` "Selected Works", description. |
| `ProjectShowcase` | page-section | Stacked list of `ProjectCard`s separated by `section-gap-md`. |
| `ProjectCard` | composite | Alternating 12-column row (text 4 / image 8, or mirrored) with glass top border; contains `ProjectMeta`, `ProjectTitle`, `ProjectDescription`, `ExploreLink`, `ProjectImage`. Props: `project` (see §4). |
| `ProjectMeta` | atomic | `label-caps` category line (e.g., "Mobile OS Redesign / Product Design"). |
| `ProjectTitle` | atomic | `headline-lg` project name (e.g., "Project Nova"). |
| `ProjectDescription` | atomic | `body-md` supporting copy. |
| `ExploreLink` | atomic | Ghost bordered link "Explore Case Study" + arrow icon with hover fill. |
| `ProjectImage` | atomic | `CinematicImage` at `4/3` (mobile) / `16/9` (desktop) with cinematic shadow. |
| `TestimonialSection` | page-section | Quote chapter on `obsidian-base` with top/bottom borders. |
| `TestimonialQuote` | atomic | `headline-lg` blockquote, max-w constrained. |
| `TestimonialAttribution` | atomic | Small glass rule + `label-caps` attribution line. |
| `ServicesHeroSection` | page-section | Full-screen hero over background image with eyebrow "CAPABILITIES / SERVICES". |
| `ServicePillar` | composite | Alternating two-column capability row: `PillarLabel`, `PillarTitle`, `PillarDescription`, `FeatureList`, `PillarImage`. Props: `pillar` (see §4). |
| `PillarLabel` | atomic | `label-caps` index "CAPABILITIES // 01". |
| `PillarTitle` | atomic | `headline-lg` service name. |
| `PillarDescription` | atomic | `body-lg` paragraph, `soft-white/80`. |
| `FeatureList` | composite | Stacked `FeatureListItem`s with `space-y-4`. |
| `FeatureListItem` | atomic | Row of `label-caps` index (`001`) + `body-md` feature name, separated by a bottom glass border. |
| `PillarImage` | atomic | `CinematicImage` inside a `glass-panel` (blur + glass border), `mix-blend-screen`, opacity fade-in on hover. |
| `BrandSplash` | page-section | Standalone animated logo scene (no nav/footer). |
| `SplashScreen` | page | Full-viewport preloader: `WebGLBackground` + `SplashSvgLogo` + `EnterButton`; body locked (`overflow-hidden`). |
| `WebGLBackground` | atomic (client) | Full-screen `<canvas>` running a fragment-shader ambient animation (time/resolution uniforms). |
| `EnterButton` | atomic | Ghost pill "ENTER" (`label-caps`, tracking `0.2em`) with delayed fade-in; dismisses the splash. |

---

## 3. Component → Page Mapping

| Component | Landing | Project | Services | Splash Animation | Splash Reveal |
|---|---|---|---|---|---|
| `TopNavBar` (incl. BrandLogo, NavLinks, HeaderCTA, MobileMenuButton) | ✓ (identical on all pages) | ✓ | ✓ | — | — |
| `Button` | ✓ | ✓ | ✓ | — | ✓ |
| `CinematicImage` | ✓ | ✓ | ✓ | — | — |
| `SectionEyebrow` | ✓ | ✓ | ✓ | — | — |
| `Footer` (incl. FooterLinkGroup, Copyright, FooterWatermark) | ✓ | ✓ | ✓ | — | — |
| `AmbientGlow` | — | — | ✓ | — | — |
| `ScrollReveal` | — | ✓ | — | — | — |
| `HeroBackground` / `HeroHeadline` / `HeroSubtext` | ✓ | ✓ | ✓ | — | — |
| `SplashSvgLogo` | — | — | — | ✓ | ✓ |
| `WebGLBackground` / `EnterButton` | — | — | — | — | ✓ |
| Page-specific sections (§2.2) | ✓ | ✓ | ✓ | — | — |

---

## 4. Content / Data Models

```ts
// Navigation (single consistent header on every page)
type NavItem = { label: string; href: string };
const navItems: NavItem[] = [
  { label: 'Work', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
];
```

// Approach (Landing)
type ApproachItem = { index: string; title: string; description: string };

// Showroom (Landing)
type ShowroomEntry = { eyebrow: string; title: string; image: ImageAsset };

// Portfolio (Project)
type Project = {
  id: string;
  meta: string;            // "Mobile OS Redesign / Product Design"
  title: string;           // "Project Nova"
  description: string;
  image: ImageAsset;       // aspect 4/3 → 16/9
  href: string;            // case study route
  layout: 'left' | 'right';// which side the text sits on
};

// Testimonial
type Testimonial = { quote: string; attribution: string };

// Services
type ServicePillar = {
  id: string;
  index: string;           // "01"
  title: string;
  description: string;
  features: { index: string; label: string }[]; // 001 / 002
  image: ImageAsset;
  layout: 'left' | 'right';
};

type ImageAsset = { src: string; alt: string; aspect?: string };
```

---

## 5. Proposed Folder Structure

```
src/
├── app/
│   ├── layout.tsx            # root layout: fonts, base colors
│   ├── page.tsx              # / → Landing composition
│   ├── projects/page.tsx     # /projects → Portfolio composition
│   ├── services/page.tsx     # /services → Services composition
│   └── globals.css           # tailwind + theme tokens
├── components/
│   ├── ui/                   # atomic: Button, CinematicImage, SectionEyebrow, Footer, AmbientGlow, BrandLogo…
│   ├── layout/               # TopNavBar, Footer
│   ├── sections/             # page-section components (HeroSection, ApproachSection, ProjectShowcase…)
│   └── splash/               # SplashScreen, SplashSvgLogo, WebGLBackground, EnterButton
└── lib/
    ├── data.ts               # NavItem, Project[], ServicePillar[] content
    └── reveal.ts             # ScrollReveal (IntersectionObserver)
```

**Server vs client:** Static/sectional components (`HeroSection`, `ApproachSection`, `ServicePillar`, `Footer`, etc.) render as Server Components. Client Components (`use client`) are only where interactivity or browser APIs are required: `TopNavBar` (mobile menu), `MobileMenuButton`, `ScrollReveal`, `WebGLBackground`, `EnterButton`, and `Button` only if it needs an `onClick`.