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

export const navItems: NavItem[] = [
  { label: "Work", href: "/" },
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
    meta: "A PropTech, a real estate platform for diaspora buyers. ",
    title: "Zizi",
    description:
      "A real estate platform enabling diaspora buyers to purchase properties securly in Africa. ",
    image: {
      src: "/Zizi.png",
      alt: "A highly detailed, cinematic rendering of a futuristic mobile operating system interface floating in a dark, atmospheric void. The UI features ultra-sharp glassmorphic elements, glowing neon accents in deep blues and purples, and sophisticated technical readouts.",
    },
    href: "#",
    layout: "left",
  },
  {
    id: "project-sitesense",
    meta: "AI Platform / Data Visualization",
    title: "SiteSense",
    description:
      "An immersive analytical command center designed to process complex data streams. Utilizing cinematic depth and high-contrast material layering to transform abstract metrics into actionable, spatially aware intelligence.",
    image: {
      src: "/SiteSense.png",
      alt: "A cinematic rendering of an AI analytics command center with layered, high-contrast UI panels processing complex data streams in a dark space.",
    },
    href: "#",
    layout: "right",
  },
  
];

export const testimonial: Testimonial = {
  quote:
    "\u201cLenard Designs transformed our vision into a polished reality. Their intersection of design and engineering is truly unique, delivering a product that feels both technologically advanced and deeply human.\u201d",
  attribution: "Founder, Tech Ventures",
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
    copyright: "© 2024 LENARD DESIGNS. ALL RIGHTS RESERVED.",
  },
  project: {
    variant: "project",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "Instagram", href: "#" },
    ],
    copyright: "© 2024 Lenard Designs. All rights reserved.",
  },
  services: {
    variant: "services",
    links: [
      { label: "Instagram", href: "#" },
      { label: "Dribbble", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "Twitter", href: "#" },
    ],
    copyright: "© 2024 LENARD DESIGNS. ALL RIGHTS RESERVED.",
  },
};