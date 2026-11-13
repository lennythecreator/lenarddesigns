export type NavItem = { label: string; href: string };

export type ImageAsset = { src: string; alt: string };

export type ApproachItem = {
  index: string;
  title: string;
  description: string;
};

export type ShowroomEntry = {
  eyebrow: string;
  title: string;
  image: ImageAsset;
};

/**
 * A result, with the evidence attached. Every metric must say where the number
 * comes from; the case study renders this line under the value.
 */
export type Metric = {
  label: string;
  value: string;
  source: string;
};

export type Project = {
  id: string;
  meta: string;
  title: string;
  description: string;
  image: ImageAsset;
  href: string;
  layout: "left" | "right";
  /** How the work came to exist: client engagement, collaboration or own product. */
  ownership: string;
  /** Named client, lab or "Lenard Designs (own product)". */
  client: string;
  /** What the studio was responsible for on this project. */
  role: string;
  /** Honest current state of the work. */
  status: string;
  /** What a visitor can actually check, and how. */
  proofNote: string;
};

export type Chapter = {
  eyebrow: string;
  title: string;
  body: string;
};

export type ProjectDetails = {
  id: string;
  hero?: { subtitle?: string; image?: ImageAsset };
  problem: Chapter & { bullets?: string[]; image?: ImageAsset };
  idea: Chapter & { insight?: string; gallery?: ImageAsset[] };
  result: Chapter & {
    gallery?: ImageAsset[];
    metrics?: Metric[];
    /** How the numbers above were produced, in plain language. */
    measurement?: string;
  };
  /** Note shown with the visuals when they are renders rather than product screens. */
  visualNote?: string;
};

export type ServicePillar = {
  id: string;
  index: string;
  title: string;
  description: string;
  audience: string;
  timeline: string;
  investment: string;
  stack: string[];
  features: { index: string; label: string }[];
  image: ImageAsset;
  layout: "left" | "right";
};

export type ProcessStep = {
  index: string;
  title: string;
  description: string;
};

export type StudioFact = {
  label: string;
  value: string;
};

export type StudioProfile = {
  introduction: string;
  founder: {
    name: string;
    role: string;
    bio: string;
    monogram: string;
  };
  facts: StudioFact[];
  principles: { title: string; description: string }[];
  proofPoints: string[];
};

export type FooterConfig = {
  variant: "landing" | "project" | "services";
  links: NavItem[];
  copyright: string;
};

export type { ContactInfo } from "./contact";
export { contactInfo } from "./contact";

export const navItems: NavItem[] = [
  { label: "Studio", href: "/studio" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
];

export const approachItems: ApproachItem[] = [
  {
    index: "01",
    title: "Strategy",
    description:
      "We define what the product has to do, who it serves and what proves it worked, before anything is drawn.",
  },
  {
    index: "02",
    title: "Design",
    description:
      "We design the interface in the browser, at real content sizes, so what you approve is what ships.",
  },
  {
    index: "03",
    title: "Engineering",
    description:
      "We build and deploy it ourselves, in React and TypeScript, and hand over a codebase your team can run.",
  },
];

export const showroomEntry: ShowroomEntry = {
  eyebrow: "PropTech / Real Estate Platform",
  title: "Zizi",
  image: {
    src: "/Zizi.png",
    alt: "Concept render of the Zizi buying flow: a dark, high-contrast property interface with verification and escrow states.",
  },
};

export const heroImageLanding = {
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBv5aH8Lj4Sa1cwbDueL2VmzgxP9cxtyDac-FDSuuHqLZ5unz1LFsBlMlQXbKys_09oIcFSqJVMeqvAOCwfnfQgDbOUBmgJ2UX6TpbuJteSPxULURBczJ19p1iWIFYn1h3DYgihz9mFqfomJ7eEICBDP5m6Xuj2Tnpj6zmQQpdRThLO9OnsVv6y1A11v7cHIDZ9YpcZGaYzr_-z_OebT4USrgMOKzgcQSDmHerFlBwJc9uImi4vXDPs",
  alt: "A cinematic, high-fidelity hero image showcasing a futuristic, minimalist control room or high-end design studio setting. The space features large transparent curved displays showing complex data visualizations, glowing softly in a cool blue and white palette.",
};

export const heroImageServices = {
  src: "https://lh3.googleusercontent.com/aida/AP1WRLsSuDrcLg2HB34YcYtgQySSo_O9Mid27lbNjyf3ACur4le_ifGwSV3W5kJBSCEf5EKZdWPcsC2pDHKfg5EoKFPbiz6PU-x4cOT76OhkWUbwBjSmO-pc8AkdPOGV58SVQfbvLyeeoukm1fXQNSJMk2rxq-jobsxhvIgbi7Xqtwh-BSIDIOSPTAAYl7vg8CUxXBWEcZJFKfMponqxcCaA2HgGle6cQEjGYsIvBX8cDBpECvKle--JvhZGCE8",
  alt: "A cinematic, high-fidelity visualization of a futuristic interface. Translucent glass screens float in a dark, brutalist architectural space with complex data nodes and glowing wireframes.",
};

export const projects: Project[] = [
  {
    id: "Zizi",
    meta: "PropTech / Real estate platform for diaspora buyers",
    title: "Zizi",
    description:
      "A buying platform for diaspora buyers that puts title verification and escrow progress in one place instead of across intermediaries.",
    image: {
      src: "/Zizi.png",
      alt: "Concept render of the Zizi property buying interface with verification and escrow states.",
    },
    href: "/projects/Zizi",
    layout: "left",
    ownership: "Client engagement",
    client: "Zizi (PropTech startup)",
    role: "Strategy, UX and interface design, front-end build",
    status: "Pilot release",
    proofNote:
      "No public demo yet. Product screens and the pilot's raw event data are available on a walkthrough call.",
  },
  {
    id: "project-sitesense",
    meta: "AI Tool / Accessibility auditing",
    title: "SiteSense",
    description:
      "An accessibility auditor that scans a page with vision models and returns WCAG-ordered issues in under 30 seconds, built with the CoNA Lab.",
    image: {
      src: "/SiteSense.png",
      alt: "A cinematic rendering of an AI analytics command center with layered, high-contrast UI panels processing complex data streams in a dark space.",
    },
    href: "/projects/project-sitesense",
    layout: "right",
    ownership: "Research collaboration",
    client: "CoNA Lab",
    role: "UX design and interface engineering, with the lab's backend developer",
    status: "Working prototype",
    proofNote:
      "Prototype, not a deployed service. We can walk through the audit flow and the WCAG mapping on request.",
  },
  {
    id: "tracky",
    meta: "Studio Product / React analytics SDK",
    title: "Tracky",
    description:
      "Our own React analytics SDK: opt-in event tracking that batches to an endpoint you already run, with installable UI primitives alongside it.",
    image: {
      src: "/Tracky.png",
      alt: "Tracky analytics SDK diagram: a React component sending a named event through the SDK in batches to a developer-owned endpoint.",
    },
    href: "/projects/tracky",
    layout: "left",
    ownership: "Studio product",
    client: "Lenard Designs (own product)",
    role: "Product design and SDK engineering",
    status: "v0.1.0, not published",
    proofNote:
      "Not on npm yet and no hosted dashboard. The playground is shown on request until the package is published.",
  },
];

export const projectDetails: Record<string, ProjectDetails> = {
  Zizi: {
    id: "Zizi",
    hero: {
      subtitle:
        "A buying platform for diaspora buyers that makes title verification and escrow progress legible from abroad.",
    },
    problem: {
      eyebrow: "01 · Problem",
      title:
        "Diaspora buyers couldn't trust or track off-plan purchases from abroad.",
      body:
        "Listings were scattered across agents and messaging apps, payment proof arrived as screenshots, and nobody could say which title checks had actually been done. Buyers stalled at the deposit because moving money felt like a guess.",
      bullets: [
        "No verified title chain in one place",
        "Offline payment proof, manual reconciliation",
        "No progress visibility after the deposit",
      ],
    },
    idea: {
      eyebrow: "02 · Idea",
      title: "Make verification the product, not a badge.",
      body:
        "We collapsed listings, title checks and escrow into one flow, and made every step say what was checked, who checked it and what happens next. The sales surface stayed editorial and sparse: one property at a time, with the evidence underneath it.",
      insight:
        "Trust is the interface: if verification feels legible at each step, buyers move.",
    },
    result: {
      eyebrow: "03 · Result",
      title: "A pilot that moved buyers past the deposit.",
      body:
        "The pilot shipped a verified buying flow: a shareable title record, escrow milestones with dates, and status updates after deposit. Buyers reached a verified lead with fewer manual handoffs, and the team could see where a purchase stalled instead of guessing.",
      metrics: [
        {
          label: "Inquiry to verified lead",
          value: "+34%",
          source:
            "Zizi pilot, team-reported · baseline: pre-pilot inquiry flow · eight-week window · event tracking",
        },
        {
          label: "Time to proof of title",
          value: "-42%",
          source:
            "Zizi pilot, team-reported · baseline: pre-pilot manual process · eight-week window · event tracking",
        },
      ],
      measurement:
        "Both figures are pilot results reported by the Zizi team, not independently audited. Baseline: the same buyers' inquiry flow before the pilot. Period: the eight-week pilot window. Method: in-product event tracking compared against the team's manual inquiry sheet. Cohort size and the raw event data are available on request.",
    },
    visualNote:
      "Visuals on this page are concept renders of the pilot build, not live product screenshots. Product screens are shared on a walkthrough call.",
  },
  "project-sitesense": {
    id: "project-sitesense",
    hero: {
      subtitle:
        "An accessibility auditor that flags WCAG-ordered issues in under 30 seconds, built with the CoNA Lab.",
    },
    problem: {
      eyebrow: "01 · Problem",
      title: "Manual audits couldn't keep pace with the state's web footprint.",
      body:
        "Maryland state web properties had to improve accessibility, but the standard process — manual review or an off-the-shelf scanner — was slow and hard to scale across hundreds of pages. Auditors spent their time finding issues instead of fixing them.",
    },
    idea: {
      eyebrow: "02 · Idea",
      title: "Automated auditing, built on vision models and WCAG 2.",
      body:
        "The CoNA Lab set out to build Site Sense: an automated auditor using vision models and the lab's own custom API. I partnered with the backend developer and owned the UX design and interface engineering, structuring audit results around WCAG 2 so an auditor could act on them in order of severity rather than scroll through a raw list.",
      gallery: [
        {
          src: "/SiteSense2.png",
          alt: "SiteSense gallery: WCAG compliance breakdown view",
        },
        {
          src: "/SiteSense3.png",
          alt: "SiteSense gallery: audit results dashboard",
        },
        {
          src: "/SiteSense4.png",
          alt: "SiteSense gallery: detailed accessibility issue view",
        },
      ],
    },
    result: {
      eyebrow: "03 · Result",
      title: "A prototype faster than the industry incumbents.",
      body:
        "After weeks of collaboration we shipped a testable prototype ready for real auditors. Typical tools took minutes to scan a site; Site Sense returned full results in under 30 seconds, with issues grouped by WCAG criterion and severity.",
      gallery: [
        {
          src: "/SiteSense3.png",
          alt: "SiteSense result gallery: audit results overview",
        },
        {
          src: "/SiteSense4.png",
          alt: "SiteSense result gallery: detailed issue remediation view",
        },
      ],
      metrics: [
        {
          label: "Audit time",
          value: "<30s",
          source:
            "Prototype timing during CoNA Lab reviews · same pages compared with two incumbent tools",
        },
      ],
      measurement:
        "Audit time was measured on the working prototype during CoNA Lab reviews, timing the same pages that two incumbent tools had already scanned. It is a single-team measurement, not a published benchmark, and the prototype is not deployed publicly.",
    },
  },
  tracky: {
    id: "tracky",
    hero: {
      subtitle:
        "Our own React analytics SDK: opt-in event tracking that batches to an endpoint you control.",
    },
    problem: {
      eyebrow: "01 · Problem",
      title:
        "Product teams had to choose between a hosted platform and hand-built instrumentation.",
      body:
        "React teams wanted to understand page views, feature usage and conversion flows. A hosted platform would own the data path; hand-rolled tracking drifts across pages and is easy to get wrong, especially around what must never be collected.",
      bullets: [
        "Hosted tools own the event data and the endpoint",
        "Hand-rolled tracking drifts across pages and features",
        "Automatic capture can leak field values and secrets",
      ],
    },
    idea: {
      eyebrow: "02 · Idea",
      title: "An SDK that measures the app without owning the data.",
      body:
        "Tracky pairs an AnalyticsProvider and a useAnalytics hook with independent, opt-in capture switches for page views, clicks, form submits, input changes, frustration clicks, cursor heat maps and scroll depth. A separate registry ships analytics-aware Button, Checkbox, Switch and Select primitives as source, installed with the tracky CLI, so teams keep and theme the code they use. Events buffer and batch to whichever endpoint the integrator configures.",
      insight:
        "Opt-in by default: measurement stays explicit, and field values never leave the page.",
      gallery: [
        {
          src: "/Tracky2.png",
          alt: "Tracky playground: activating the Button sends one component_interaction event to the event stream while page capture stays off.",
        },
        {
          src: "/Tracky3.png",
          alt: "Tracky playground: the Input and Textarea components report no event, and typed values are never read.",
        },
      ],
    },
    result: {
      eyebrow: "03 · Result",
      title: "A working scaffold with the privacy boundaries drawn in.",
      body:
        "The SDK tracks initial load and route changes, buffers and retries batches within bounds, and emits documented component actions while every primitive stays usable without a provider. The playground renders the same registry source and intercepts the SDK's request in the page, so each action is visible without being sent anywhere. Tracky is at v0.1.0, is not published to npm, and hosted dashboards and license verification are explicitly out of scope.",
      gallery: [
        {
          src: "/Tracky4.png",
          alt: "Tracky playground: toggling the Checkbox and Switch streams component_interaction events while field values stay unread.",
        },
      ],
      metrics: [
        {
          label: "Initial primitives",
          value: "7",
          source: "Counted from the v0.1.0 package manifest",
        },
        {
          label: "Documented component actions",
          value: "4",
          source: "Listed in the published SDK documentation",
        },
      ],
      measurement:
        "Both counts come from the v0.1.0 package manifest and the SDK documentation in the repository. Tracky is an internal product, not client work, and is not yet published to npm.",
    },
  },
};

const imageWebDesign = {
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJo1eRawaztUrOi9oSP1DCY3uQ0iRR5vFUbt0s7WHiJdHVdf9h4SIkNFzwlOQyGUplpcSrcNNNHLYrw8sbHe_DmJfXmPOzLE9Dui2JyctuZRBnUWSNcRfTVRdoHSk8NVuznBwqKPhQD0uqtjNpjkgZBqS99dB1UkzJH5hvDgTh2RxpNR0oEhSV1mKT3oKGcyvSEFHiVqA42VEen7LREQyUHAFc2peBMxWNxXBSFKpXSSum6ddkfrl-",
  alt: "Web development visualization",
};

const imageMobileApp = {
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHKgmNIk6IccRPedxcOOMIE0xBVYWFDAqNOZfY1k2rjcPr2PgzPuGXaLs8B2DRLi2ldG3VTN-UfMeOvt-L4Ae-0NWdETEezRYwVjgjxW5Ik9VacLP_iAPTCVAuzxcZ_2jDhrE-18pRk3XJXFxrmNQcOwdPlMbaPqfNpxtD9pMub2_cAQK4MBoF-EYKZD9uxyBW5xi9Ns_FqlpKS6SgmpEEP1f1Nj2XlfqfKsYKGXEppdwhVUNHyw4m",
  alt: "Mobile app design visualization",
};

const imageEcommerce = {
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBStN6h5HwEOVHu06YppTbBhmaCyKWXCMBquDMXpoK5s6YANWCcqXWo2-rPGzgFUm8k5Fgg193KH7A7AUFg8Pgw-1Ut_biD6eq5itccDNj8wBNgiaEGgA-CxXZRj_3t5Ht4_D7CXM22seWKayMvCz6h0hlCFLd92xo06BcmJzOFCk-XWxKi55aYdJH-c4ZmfYQ-aVZik3jlLWFIfatfrIfXoCn5f5wtyzRZLhCzYqB9Kxwtu1dsyu3p",
  alt: "E-commerce visualization",
};

export const servicePillars: ServicePillar[] = [
  {
    id: "website-design",
    index: "01",
    title: "Website Design & Development",
    description:
      "A custom site designed around how your business actually sells, built to load fast and edited without a developer.",
    audience:
      "For owner-led businesses replacing a template site that no longer matches the work.",
    timeline: "Set by scope",
    investment: "Quoted per project",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Sanity or Payload CMS"],
    features: [
      { index: "001", label: "Responsive Architecture" },
      { index: "002", label: "CMS Integration" },
      { index: "003", label: "Technical SEO & Analytics" },
    ],
    image: imageWebDesign,
    layout: "left",
  },
  {
    id: "mobile-app",
    index: "02",
    title: "Mobile App Development",
    description:
      "An iOS and Android app with one codebase, designed for the handful of tasks your users open it for.",
    audience:
      "For teams taking a validated web product to mobile, or replacing a manual field workflow.",
    timeline: "Set by scope",
    investment: "Quoted per project",
    stack: ["React Native", "Expo", "TypeScript", "Native modules where needed"],
    features: [
      { index: "001", label: "Native & Cross-Platform" },
      { index: "002", label: "User Experience Design" },
      { index: "003", label: "Release & Store Submission" },
    ],
    image: imageMobileApp,
    layout: "right",
  },
  {
    id: "e-commerce",
    index: "03",
    title: "E-Commerce Development",
    description:
      "A store built around the checkout, not the theme: fewer steps, faster pages, and product pages that answer the buying questions.",
    audience:
      "For small catalogues moving off a marketplace or an abandoned Shopify theme.",
    timeline: "Set by scope",
    investment: "Quoted per project",
    stack: ["Shopify", "Next.js", "Stripe", "Klaviyo"],
    features: [
      { index: "001", label: "Shopify & Custom Solutions" },
      { index: "002", label: "Payment Integration" },
      { index: "003", label: "Conversion Instrumentation" },
    ],
    image: imageEcommerce,
    layout: "left",
  },
  {
    id: "startup-mvp",
    index: "04",
    title: "Startup MVP Development",
    description:
      "A working product for the first paying users: one core flow, real data, and an architecture that survives the next feature.",
    audience:
      "For founders who need to put something testable in front of customers this quarter.",
    timeline: "Set by scope",
    investment: "Quoted per project",
    stack: ["Next.js", "TypeScript", "Postgres", "Vercel"],
    features: [
      { index: "001", label: "Rapid Prototyping" },
      { index: "002", label: "Scalable Architecture" },
      { index: "003", label: "Auth & Billing Foundations" },
    ],
    image: imageWebDesign,
    layout: "right",
  },
  {
    id: "marketing-event",
    index: "05",
    title: "Marketing & Event Websites",
    description:
      "A launch or event site built to your fixed date, loading instantly under a campaign spike and capturing registrations properly.",
    audience:
      "For launches, conferences and campaigns with a fixed date and no room to slip.",
    timeline: "Set by scope",
    investment: "Quoted per project",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    features: [
      { index: "001", label: "Immersive Storytelling" },
      { index: "002", label: "Campaign Landing Pages" },
      { index: "003", label: "Registration & CRM Handoff" },
    ],
    image: imageMobileApp,
    layout: "left",
  },
];

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Brief and written scope",
    description:
      "One call, then a written scope with pages, features, dates and a fixed fee. Nothing starts until you approve it.",
  },
  {
    index: "02",
    title: "Design in the browser",
    description:
      "Wireframes become a working interface at real content sizes. You review on real devices, not static mockups.",
  },
  {
    index: "03",
    title: "Build in weekly increments",
    description:
      "A staging link from the first week. You see progress weekly and the scope does not move unless you approve a change.",
  },
  {
    index: "04",
    title: "Launch and handover",
    description:
      "Deployment, analytics, a written handover and a walkthrough recording. Thirty days of fixes included after launch.",
  },
];

export const engagementNotes: string[] = [
  "We quote each project individually instead of publishing a price list. A number set before the scope is known sets the wrong expectation, so the scoping conversation comes first and the quote follows in writing.",
  "Every project is a fixed fee agreed in writing before work starts: 50% to begin, 50% at launch.",
  "Ongoing work after launch is a monthly retainer, cancelled with 30 days' notice.",
];

export const studioProfile: StudioProfile = {
  introduction:
    "Lenard Designs is an independent design and engineering studio in Maryland. One senior designer-engineer leads every project, with a small bench of backend, motion and copy specialists brought in when the work calls for it.",
  founder: {
    name: "Lenard",
    role: "Founder · design and engineering",
    bio:
      "Lenard Designs is run by Lenard, a designer and front-end engineer working in Maryland. He runs strategy, interface design and the build on every engagement, which is why the studio can promise one person from first sketch to deployment. Backend, motion and copy specialists join per project when the scope needs them.",
    monogram: "L",
  },
  facts: [
    { label: "Based in", value: "Maryland, United States" },
    {
      label: "Serving",
      value: "Maryland, Washington DC and Northern Virginia, remote across the US",
    },
    { label: "Studio size", value: "One lead, two to three collaborators per project" },
    { label: "Reply time", value: "One business day, Monday to Friday" },
  ],
  principles: [
    {
      title: "You work with the person doing the work",
      description:
        "No account manager and no handoff to a junior team. The person who scopes the project designs it and builds it.",
    },
    {
      title: "Scope, dates and fee in writing",
      description:
        "A fixed fee and a dated plan before design starts. Changes are quoted, not quietly absorbed into the timeline.",
    },
    {
      title: "Design and engineering in one pass",
      description:
        "Interfaces are designed in the browser against real content, so the approved design is the shipped one.",
    },
  ],
  proofPoints: [
    "Every case study names the client, the role we held and the current status of the work.",
    "Every number states its baseline, period and method, and says when it is team-reported rather than audited.",
    "References from past clients and the underlying pilot data are available on request.",
  ],
};

export const footerConfigs: Record<string, FooterConfig> = {
  landing: {
    variant: "landing",
    links: [
      { label: "Studio", href: "/studio" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Contact", href: "/contact" },
    ],
    copyright: "© 2026 LENARD DESIGNS. ALL RIGHTS RESERVED.",
  },
  project: {
    variant: "project",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Studio", href: "/studio" },
      { label: "Contact", href: "/contact" },
    ],
    copyright: "© 2026 Lenard Designs. All rights reserved.",
  },
  services: {
    variant: "services",
    links: [
      { label: "Studio", href: "/studio" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Contact", href: "/contact" },
    ],
    copyright: "© 2026 LENARD DESIGNS. ALL RIGHTS RESERVED.",
  },
};
