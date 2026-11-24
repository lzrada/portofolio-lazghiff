export const projects = [
  {
    slug: "company-profile",
    title: "Company Profile",
    category: "Product Design",
    year: 2025,
    tagline: "A profile for your company.",
    description: "A modern profile page for companies to showcase their work, team, and values.",
    stack: ["Next.js", "TypeScript", "Tailwindcss", "Framer Motion"],
    color: "from-purple-500 to-blue-500",
    demo: "https://landingpgevite.netlify.app/",
    github: "https://github.com/lzrada/template-landing-page.git",
    image: "/images/company-profile.png",
  },
  {
    slug: "lumen-os",
    title: "Lumen OS",
    category: "Product Design",
    year: 2025,
    tagline: "An operating system for creative teams.",
    description: "Design system, planning, timeline, and async video in one immersive workspace.",
    stack: ["React", "Framer Motion", "tRPC", "Prisma"],
    color: "from-fuchsia-500 to-pink-500",
    demo: "#",
    github: "#",
  },
  {
    slug: "meridian-3d",
    title: "Meridian 3D",
    category: "WebGL",
    year: 2024,
    tagline: "3D product configurator on the web.",
    description: "GPU-accelerated 3D configurator with cinematic lighting and instant AR preview.",
    stack: ["Three.js", "React Three Fiber", "GLSL"],
    color: "from-cyan-400 to-blue-500",
    demo: "#",
    github: "#",
  },
  {
    slug: "pulse-fintech",
    title: "Pulse Fintech",
    category: "Fintech",
    year: 2024,
    tagline: "A modern banking experience.",
    description: "Consumer banking app with programmable rules, split budgeting, and animated insights.",
    stack: ["React Native", "GraphQL", "Rust"],
    color: "from-emerald-400 to-teal-500",
    demo: "#",
    github: "#",
  },
  {
    slug: "orbit-cms",
    title: "Orbit CMS",
    category: "Developer Tools",
    year: 2024,
    tagline: "Content platform built for speed.",
    description: "Headless CMS with a live preview grid and instant edge deploys.",
    stack: ["Astro", "Cloudflare Workers", "Turso"],
    color: "from-amber-400 to-rose-500",
    demo: "#",
    github: "#",
  },
  {
    slug: "helio-studio",
    title: "Helio Studio",
    category: "Agency Site",
    year: 2023,
    tagline: "Award-winning studio microsite.",
    description: "Interactive scroll-driven microsite with a WebGL shader hero and case studies.",
    stack: ["GSAP", "WebGL", "Sanity"],
    color: "from-indigo-500 to-violet-500",
    demo: "#",
    github: "#",
  },
];

export const services = [
  {
    title: "Product Design",
    price: "from $4k",
    features: ["End-to-end product design", "Design systems", "Interaction & motion", "Prototyping"],
  },
  {
    title: "Frontend Engineering",
    price: "from $6k",
    features: ["React / Next / TanStack", "Performance & animation", "Accessibility", "Design system builds"],
  },
  {
    title: "Creative Development",
    price: "from $8k",
    features: ["Awwwards-tier microsites", "WebGL & shaders", "Scroll storytelling", "Custom motion"],
  },
];

export const skills = [
  { name: "React & TS", level: 96 },
  { name: "Motion & GSAP", level: 92 },
  { name: "Design Systems", level: 90 },
  { name: "WebGL / Three", level: 78 },
  { name: "Node / Edge", level: 84 },
  { name: "Product Design", level: 88 },
];

export const timeline = [
  {
    year: "2025",
    title: "Lead Creative Developer",
    org: "Aurora Studio",
    desc: "Leading a squad of engineers & designers on flagship product launches.",
  },
  {
    year: "2023",
    title: "Senior Frontend Engineer",
    org: "Meridian Labs",
    desc: "Built the design system powering 20+ products and a WebGL microsite.",
  },
  {
    year: "2021",
    title: "Product Designer → Engineer",
    org: "Pulse",
    desc: "Made the jump from design into engineering, shipped the mobile rewrite.",
  },
  {
    year: "2019",
    title: "Design Intern",
    org: "Helio Studio",
    desc: "First taste of interactive storytelling & scroll-based case studies.",
  },
];

export const education = [
  { year: "2017 — 2021", title: "B.Sc. Human–Computer Interaction", org: "TU Delft" },
  { year: "2020", title: "Interaction Design Foundation Certificate", org: "IxDF" },
];

export const certifications = ["AWS Certified Developer — Associate", "Google UX Design Certificate", "Advanced React Patterns (Epic React)"];

export const posts = [
  {
    slug: "designing-motion-systems",
    title: "Designing motion systems that don't get in the way",
    category: "Design",
    date: "Nov 12, 2025",
    read: "6 min",
    excerpt: "How to build a motion vocabulary that reinforces hierarchy without stealing focus.",
  },
  {
    slug: "the-anatomy-of-a-hero",
    title: "The anatomy of a memorable hero section",
    category: "UI",
    date: "Oct 30, 2025",
    read: "8 min",
    excerpt: "Tearing down five heroes I've loved this year and the patterns behind them.",
  },
  {
    slug: "tanstack-in-anger",
    title: "TanStack Router in anger: a year in production",
    category: "Engineering",
    date: "Oct 04, 2025",
    read: "12 min",
    excerpt: "What holds up, what surprised me, and the patterns worth stealing.",
  },
  {
    slug: "scroll-storytelling",
    title: "Scroll storytelling without the seasickness",
    category: "Motion",
    date: "Sep 18, 2025",
    read: "7 min",
    excerpt: "Techniques for pinning, layering, and pacing scroll-driven scenes.",
  },
  {
    slug: "shipping-with-ai",
    title: "How I ship 3× faster with AI in the loop",
    category: "Workflow",
    date: "Aug 21, 2025",
    read: "5 min",
    excerpt: "The prompt patterns, tools, and guardrails I lean on daily.",
  },
  {
    slug: "css-oklch-guide",
    title: "A pragmatic guide to OKLCH in production",
    category: "Engineering",
    date: "Jul 09, 2025",
    read: "9 min",
    excerpt: "Why OKLCH beats HSL for design tokens and how to migrate incrementally.",
  },
];

export const categories = ["All", "Design", "UI", "Engineering", "Motion", "Workflow"];
