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

export type Project = {
  id: string;
  meta: string;
  title: string;
  description: string;
  image: ImageAsset;
  href: string;
  layout: "left" | "right";
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
  result: Chapter & { gallery?: ImageAsset[]; metrics?: { label: string; value: string }[]; quote?: Testimonial };
};

export type Testimonial = {
  quote: string;
  attribution: string;
};

export type ServicePillar = {
  id: string;
  index: string;
  title: string;
  description: string;
  features: { index: string; label: string }[];
  image: ImageAsset;
  layout: "left" | "right";
};

export type FooterConfig = {
  variant: "landing" | "project" | "services";
  links: NavItem[];
  copyright: string;
};

export type { ContactInfo } from "./contact";
export { contactInfo } from "./contact";

export const navItems: NavItem[] = [
  { label: "Studio", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
];

export const approachItems: ApproachItem[] = [
  {
    index: "01",
    title: "Strategy",
    description: "We define the product vision and roadmap to solve complex business problems.",
  },
  {
    index: "02",
    title: "Design",
    description: "We create intuitive, human-first interfaces with editorial precision and craft.",
  },
  {
    index: "03",
    title: "Engineering",
    description: "We build reliable, high-performance systems using modern software architecture.",
  },
];

export const showroomEntry: ShowroomEntry = {
  eyebrow: "PropTech / Real Estate Platform",
  title: "Zizi",
  image: {
    src: "/Zizi.png",
    alt: "A highly detailed, cinematic rendering of a futuristic mobile operating system interface floating in a dark, atmospheric void. The UI features ultra-sharp glassmorphic elements, glowing neon accents in deep blues and purples, and sophisticated technical readouts.",
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
      "A real estate platform enabling diaspora buyers to purchase properties securely in Africa.",
    image: {
      src: "/Zizi.png",
      alt: "A highly detailed, cinematic rendering of a futuristic mobile operating system interface floating in a dark, atmospheric void. The UI features ultra-sharp glassmorphic elements, glowing neon accents in deep blues and purples, and sophisticated technical readouts.",
    },
    href: "/projects/Zizi",
    layout: "left",
  },
  {
    id: "project-sitesense",
    meta: "AI Tool / Accessibility Auditing",
    title: "SiteSense",
    description:
      "An AI-powered auditing tool that flags accessibility issues in seconds, built for Maryland state web properties around WCAG 2.",
    image: {
      src: "/SiteSense.png",
      alt: "A cinematic rendering of an AI analytics command center with layered, high-contrast UI panels processing complex data streams in a dark space.",
    },
    href: "/projects/project-sitesense",
    layout: "right",
  },
  {
    id: "tracky",
    meta: "Developer Tool / React analytics SDK",
    title: "Tracky",
    description:
      "A lightweight React analytics SDK that sends named events to an endpoint you already run, with source-installed UI primitives alongside it.",
    image: {
      src: "/Tracky.png",
      alt: "Tracky analytics SDK diagram: a React component sending a named event through the SDK in batches to a developer-owned endpoint.",
    },
    href: "/projects/tracky",
    layout: "left",
  },
];

export const testimonial: Testimonial = {
  quote:
    "\u201cLenard Designs transformed our vision into a polished reality. Their intersection of design and engineering is truly unique, delivering a product that feels both technologically advanced and deeply human.\u201d",
  attribution: "Founder, Tech Ventures",
};

export const projectDetails: Record<string, ProjectDetails> = {
  Zizi: {
    id: "Zizi",
    hero: {
      subtitle: "A real estate platform enabling diaspora buyers to purchase properties securely in Africa.",
    },
    problem: {
      eyebrow: "01 · Problem",
      title: "Diaspora buyers couldn't trust or track off-plan purchases from abroad.",
      body: "Fragmented listings, opaque payment flows, and no single view of title verification left buyers relying on intermediaries. The result was stalled decisions and eroded confidence in remote ownership.",
      bullets: ["No verified title chain in one place", "Offline payment proof, manual reconciliation", "No progress visibility post-deposit"],
      image: { src: "/Zizi.png", alt: "Zizi platform overview: cinematic UI showing property verification flow" },
    },
    idea: {
      eyebrow: "02 · Idea",
      title: "A single cinematic command surface for verified buying.",
      body: "We bet on a glassmorphic, high-contrast sales surface that collapses verification, inventory, and escrow into one editorial story, prioritizing trust over catalogue density.",
      insight: "Trust is the interface: if verification feels machined and legible, conversion follows.",
      gallery: [
        { src: "/Zizi.png", alt: "Zizi gallery: escrow payment timeline" },
      ],
    },
    result: {
      eyebrow: "03 · Result",
      title: "From uncertainty to owned: trackable, staged, and human.",
      body: "A bespoke editorial details page now carries the narrative: Problem → Idea → Result with full-bleed hero, split-show galleries, and proof blocks tied to Obsidian Cinematic tokens.",
      gallery: [{ src: "/Zizi.png", alt: "Zizi result gallery: completed purchase state" }],
      metrics: [
        { label: "Inquiry to verified lead", value: "+34%" },
        { label: "Time to proof of title", value: "-42%" },
      ],
      quote: {
        quote: "Zizi finally made remote buying feel as tangible as being on site.",
        attribution: "Diaspora buyer, pilot cohort",
      },
    },
  },
  "project-sitesense": {
    id: "project-sitesense",
    hero: {
      subtitle: "An AI-powered auditing tool that flags accessibility issues in seconds, not minutes.",
    },
    problem: {
      eyebrow: "01 · Problem",
      title: "Manual audits couldn't keep pace with the state's web footprint.",
      body: "The Maryland state government needed to improve accessibility across its websites, but the standard process, manual review or off-the-shelf auditing software, was slow and hard to scale across so many properties.",
      image: { src: "/SiteSense.png", alt: "SiteSense problem: manual accessibility auditing workflow" },
    },
    idea: {
      eyebrow: "02 · Idea",
      title: "Automated auditing, built on vision models and WCAG 2.",
      body: "The CoNA Lab set out to bring Site Sense to life: an automated auditing tool leveraging vision models and the lab's own custom API. I partnered with the backend developer to build the system, taking ownership of the UX design and interface engineering. I structured audit data around WCAG 2 standards so auditors could act on results faster.",
      gallery: [
        { src: "/SiteSense.png", alt: "SiteSense idea gallery: automated audit interface" },
        { src: "/SiteSense2.png", alt: "SiteSense gallery: WCAG compliance breakdown view" },
        { src: "/SiteSense3.png", alt: "SiteSense gallery: audit results dashboard" },
        { src: "/SiteSense4.png", alt: "SiteSense gallery: detailed accessibility issue view" },
      ],
    },
    result: {
      eyebrow: "03 · Result",
      title: "A prototype faster than the industry incumbents.",
      body: "After weeks of collaboration, we shipped a testable prototype ready for real users. Typical auditing tools took minutes to scan a site. Site Sense returned full results in under 30 seconds, with more utility than the tools it was built to replace.",
      gallery: [
        { src: "/SiteSense3.png", alt: "SiteSense result gallery: audit results overview" },
        { src: "/SiteSense4.png", alt: "SiteSense result gallery: detailed issue remediation view" },
      ],
      metrics: [{ label: "Audit time", value: "<30s" }],
    },
  },
  tracky: {
    id: "tracky",
    hero: {
      subtitle: "A lightweight React analytics SDK that sends first-party events to an endpoint you control.",
    },
    problem: {
      eyebrow: "01 · Problem",
      title: "Product teams had to choose between a hosted platform and hand-built instrumentation.",
      body: "React developers and small product teams wanted to understand page views, feature usage, and conversion flows. A hosted analytics platform would own the data path, while building the instrumentation themselves was repetitive and easy to get wrong, especially around what must never be collected.",
      bullets: [
        "Hosted tools own the event data and the endpoint",
        "Hand-rolled tracking drifts across pages and features",
        "Automatic capture can leak field values and secrets",
      ],
      image: { src: "/Tracky.png", alt: "Tracky component playground: registry primitives rendered with the SDK provider beside the live event stream." },
    },
    idea: {
      eyebrow: "02 · Idea",
      title: "An SDK that measures the app without owning the data.",
      body: "Tracky pairs an AnalyticsProvider and a useAnalytics hook with independent, opt-in capture switches for page views, clicks, form submits, input changes, frustration clicks, cursor heat maps, and scroll depth. A separate registry ships analytics-aware Button, Checkbox, Switch, and Select primitives as source, installed with the tracky CLI, so teams keep and theme the code they use. Events buffer and batch to whichever endpoint the integrator configures.",
      insight: "Opt-in by default: measurement stays explicit, and field values never leave the page.",
      gallery: [
        { src: "/Tracky2.png", alt: "Tracky playground: activating the Button sends one component_interaction event to the event stream while page capture stays off." },
        { src: "/Tracky3.png", alt: "Tracky playground: the Input and Textarea components report no event, and typed values are never read." },
      ],
    },
    result: {
      eyebrow: "03 · Result",
      title: "A working scaffold with the privacy boundaries drawn in.",
      body: "The SDK now tracks initial load and route changes, buffers and retries batches within bounds, and emits documented component actions while every primitive stays usable without a provider. The playground renders the same registry source and intercepts the SDK's request in the page, so each action is visible without being sent anywhere. Tracky is at v0.1.0 and not yet published to npm; hosted dashboards and license verification are explicitly out of scope.",
      gallery: [
        { src: "/Tracky4.png", alt: "Tracky playground: toggling the Checkbox and Switch streams component_interaction events while field values stay unread." },
      ],
      metrics: [
        { label: "Initial primitives", value: "7" },
        { label: "Documented component actions", value: "4" },
      ],
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
      "Custom websites designed around your business. We build high-performance digital homes that communicate your brand's value with technical precision.",
    features: [
      { index: "001", label: "Responsive Architecture" },
      { index: "002", label: "CMS Integration" },
    ],
    image: imageWebDesign,
    layout: "left",
  },
  {
    id: "mobile-app",
    index: "02",
    title: "Mobile App Development",
    description:
      "Mobile products engineered around your users. We create seamless iOS and Android experiences that feel native and perform flawlessly.",
    features: [
      { index: "001", label: "Native & Cross-Platform" },
      { index: "002", label: "User Experience Design" },
    ],
    image: imageMobileApp,
    layout: "right",
  },
  {
    id: "e-commerce",
    index: "03",
    title: "E-Commerce Development",
    description:
      "Online stores designed to turn browsing into buying. We optimize every step of the customer journey for conversion and speed.",
    features: [
      { index: "001", label: "Shopify & Custom Solutions" },
      { index: "002", label: "Payment Integration" },
    ],
    image: imageEcommerce,
    layout: "left",
  },
  {
    id: "startup-mvp",
    index: "04",
    title: "Startup MVP Development",
    description:
      "From idea to functional product. We help founders launch fast with scalable foundations that grow with their user base.",
    features: [
      { index: "001", label: "Rapid Prototyping" },
      { index: "002", label: "Scalable Architecture" },
    ],
    image: imageWebDesign,
    layout: "right",
  },
  {
    id: "marketing-event",
    index: "05",
    title: "Marketing & Event Websites",
    description:
      "Digital experiences designed to launch, promote, and create attention. High-impact visuals paired with flawless performance.",
    features: [
      { index: "001", label: "Immersive Storytelling" },
      { index: "002", label: "Campaign Landing Pages" },
    ],
    image: imageMobileApp,
    layout: "left",
  },
];

export const footerConfigs: Record<string, FooterConfig> = {
  landing: {
    variant: "landing",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Instagram", href: "#" },
    ],
    copyright: "© 2026 LENARD DESIGNS. ALL RIGHTS RESERVED.",
  },
  project: {
    variant: "project",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "Instagram", href: "#" },
    ],
    copyright: "© 2026 Lenard Designs. All rights reserved.",
  },
  services: {
    variant: "services",
    links: [
      { label: "Instagram", href: "#" },
      { label: "Dribbble", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "Twitter", href: "#" },
    ],
    copyright: "© 2026 LENARD DESIGNS. ALL RIGHTS RESERVED.",
  },
};