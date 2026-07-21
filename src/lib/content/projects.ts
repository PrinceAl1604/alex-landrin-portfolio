/**
 * Case-study content model — one source of truth per project.
 * Edit copy here without touching components.
 *
 * Placeholder convention:
 *   [[TODO: Alex to supply]]  → copy Alex still needs to write
 *   [[metric]]                → a real number Alex will drop in (never invented)
 *   [[project-x-shot-1.png]]  → an image Alex will export; renders as a labelled block
 */

export type ProcessStep = {
  /** Sequential label — numbers are earned here (genuine process order). */
  phase: "Research" | "Decisions" | "Design" | "Ship";
  heading: string;
  body: string;
};

export type Artifact = {
  /** Filename shown on the placeholder block. */
  src: string;
  caption: string;
  /** Aspect ratio hint, e.g. "16/10", "4/3", "1/1". */
  ratio?: string;
};

export type Outcome = {
  /** Use [[metric]] for anything not yet confirmed. */
  value: string;
  label: string;
};

export type Project = {
  slug: string;
  /** Zero-padded index for the editorial catalogue. */
  index: string;
  title: string;
  summary: string;
  angle: string;
  role: string;
  timeframe: string;
  tools: string[];
  tags: string[];
  /** true → the gallery-style LogoMint case, rendered differently. */
  gallery?: boolean;
  cover: Artifact;
  problem: string;
  process: ProcessStep[];
  artifacts: Artifact[];
  outcomes: Outcome[];
  /** The honest reflection — signals seniority. */
  reflection: string;
  /** For the gallery case only. */
  galleryItems?: Artifact[];
};

export const projects: Project[] = [
  {
    slug: "ream",
    index: "01",
    title: "REAM",
    summary: "Real-estate agency management platform for seller-financed land sales in West Africa.",
    angle: "Complex domain, systems design, shipped product.",
    role: "Product Designer & Front-end — built via Cozisoft",
    timeframe: "2024 — present",
    tools: ["Figma", "shadcn/ui", "React", "TypeScript", "Design Tokens"],
    tags: ["SaaS", "FinTech", "Design System"],
    cover: {
      src: "ream-cover-full.jpg",
      caption: "REAM — client finance dashboard",
      ratio: "1600 / 1123", // exact image ratio — fits with no crop
    },
    problem:
      "Seller-financed land sales in Ghana run on long payment plans, partial instalments and manual reconciliation. Agencies were tracking six-figure balances across spreadsheets and WhatsApp — errors were expensive and trust was fragile. [[TODO: Alex to refine problem framing with a real anecdote]]",
    process: [
      {
        phase: "Research",
        heading: "Mapped the money, not just the screens",
        body: "Modelled the full lifecycle of a financed parcel — deposit, instalment schedule, arrears, reconciliation — with the finance team before drawing a single frame. The domain, not the UI, set the structure.",
      },
      {
        phase: "Decisions",
        heading: "A reconciliation workbench, not a table",
        body: "Chose a workbench pattern (built on shadcn/ui primitives) so an operator can match payments against schedules side-by-side, with running balances always visible. Kept the data model as the interface's backbone.",
      },
      {
        phase: "Design",
        heading: "Dense data made calm",
        body: "Designed a strict token system — spacing, tabular numerals, hairline dividers — so screens dense with figures stay legible. Status is carried by type and rule weight, not colour alone (accessibility + print parity).",
      },
      {
        phase: "Ship",
        heading: "Designed to the component, then shipped it",
        body: "Handed off as production React components rather than static frames, so the finance module went live without a design-to-code gap. [[TODO: Alex — note launch scope]]",
      },
    ],
    artifacts: [
      { src: "[[ream-shot-1.png]]", caption: "Reconciliation Workbench — payment matching", ratio: "16/10" },
      { src: "[[ream-shot-2.png]]", caption: "Amortization schedule + arrears view", ratio: "16/10" },
      { src: "[[ream-shot-3.png]]", caption: "Design tokens & tabular number system", ratio: "4/3" },
    ],
    outcomes: [
      { value: "[[metric]]", label: "Reconciliation time reduced" },
      { value: "[[metric]]", label: "Parcels under management" },
      { value: "[[metric]]", label: "Agencies onboarded" },
    ],
    reflection:
      "I front-loaded the finance model and under-invested early in the empty and error states — the first operators hit edge cases (over-payment, refunds) I hadn't designed for. Next time I'd storyboard the unhappy paths in the same breath as the happy one. [[TODO: Alex to confirm or rewrite in your voice]]",
  },
  {
    slug: "aiio",
    index: "02",
    title: "aiio",
    summary: "A BPMN platform for non-technical teams — evolving from a modelling tool into proactive, human-steered process intelligence.",
    angle: "First design hire — from no system to a shipped 2.0.",
    role: "Product Designer — first design hire, whole-product ownership",
    timeframe: "2024 — present",
    tools: ["Figma", "Design Systems", "Design Tokens", "Prototyping"],
    tags: ["SaaS", "BPMN", "Design System"],
    cover: {
      src: "aiio-cover.png",
      caption: "aiio — BPMN platform",
      ratio: "6440 / 4580", // exact image ratio — fits with no crop
    },
    problem:
      "aiio was a capable BPMN platform built by engineers — but every screen had been implemented ad-hoc, with no design system and no one owning the experience end to end. At the same time the company was making a bold bet: that classic BPM is dead, and aiio's future is proactive, agentic process intelligence that a human still steers. That reinvention had to stay legible to the people who actually use it — non-technical teams modelling real business processes, where a confusing screen or an unguarded action isn't a nuisance, it's a broken process. The product needed a design foundation strong enough to carry the bet — and it didn't have one.",
    process: [
      {
        phase: "Research",
        heading: "Mapped the domain and the debt at once",
        body: "I joined as aiio's first designer, so I read two things in parallel: the BPMN domain and its non-technical users, and the product exactly as engineers had built it. The audit made the gap plain — the software was capable, but inconsistent screen to screen, with no shared language holding it together.",
      },
      {
        phase: "Decisions",
        heading: "A new direction on the brand — and a real system beneath it",
        body: "I set a new design direction rooted in aiio's corporate identity: more innovative, more consistent, calmer than the developer-built UI it replaced. The larger call was to stop shipping one-off screens and commit to a system — the agentic, proactive 2.0 vision would only feel trustworthy on a foundation that behaved predictably everywhere.",
      },
      {
        phase: "Design",
        heading: "Built the system while redesigning the product",
        body: "I led the colour tokens and built aiio's first Figma component library — new components drawn from the brand — in parallel with the redesign itself. The guiding rule came straight from the users: BPMN for non-technical teams has to be genuinely easy, and error-intolerant by design — the interface guides you so the wrong move is hard to make in the first place.",
      },
      {
        phase: "Ship",
        heading: "Shipped as a live 2.0",
        body: "It went live. aiio 2.0 shipped and now runs under a new name — Process Collector — with the design foundation (tokens, components, direction) as what the product is built on, not a coat of paint over the old one.",
      },
    ],
    artifacts: [
      { src: "[[aiio-shot-1.png]]", caption: "New design direction — the redesigned core experience", ratio: "16/10" },
      { src: "[[aiio-shot-2.png]]", caption: "The design system — colour tokens & first component library", ratio: "4/3" },
      { src: "[[aiio-shot-3.png]]", caption: "Guided, error-intolerant flows for non-technical users", ratio: "4/3" },
    ],
    outcomes: [
      { value: "0 → 1", label: "aiio's first design system, built from scratch" },
      { value: "Live", label: "Shipped as 2.0 — now Process Collector" },
      { value: "End-to-end", label: "Sole design ownership of the product" },
    ],
    reflection:
      "Building the design system in parallel with the redesign meant the foundation kept shifting under the product — I'd ship a pattern, then revise it as the system matured. Next time I'd lock a small, strict token core first and grow the component library from that, rather than evolving both at once. Being the first designer also taught me the system only sticks when engineers own it with me — so I spent as much time aligning on the why as on the components themselves.",
  },
  {
    slug: "kassirh",
    index: "03",
    title: "kassiRH",
    summary: "An HR platform.",
    angle: "[[TODO: Alex — the one-line angle for kassiRH]]",
    role: "Product Designer",
    timeframe: "Nov 2025 — Feb 2026",
    tools: ["[[TODO: Alex — tools & stack]]"],
    tags: ["SaaS", "HR"],
    cover: {
      src: "kassirh-cover.png",
      caption: "kassiRH — HR platform",
      ratio: "7103 / 5574", // exact image ratio — fits with no crop
    },
    problem:
      "[[TODO: Alex — the problem kassiRH solves, for whom, and why it matters]]",
    process: [
      {
        phase: "Research",
        heading: "[[TODO: Alex — heading]]",
        body: "[[TODO: Alex — what you learned about the HR problem space]]",
      },
      {
        phase: "Decisions",
        heading: "[[TODO: Alex — heading]]",
        body: "[[TODO: Alex — the key product & design decisions]]",
      },
      {
        phase: "Design",
        heading: "[[TODO: Alex — heading]]",
        body: "[[TODO: Alex — the core flow you designed]]",
      },
      {
        phase: "Ship",
        heading: "[[TODO: Alex — heading]]",
        body: "[[TODO: Alex — what shipped and the outcome]]",
      },
    ],
    artifacts: [
      { src: "[[kassirh-shot-1.png]]", caption: "[[TODO: caption]]", ratio: "16/10" },
      { src: "[[kassirh-shot-2.png]]", caption: "[[TODO: caption]]", ratio: "16/10" },
      { src: "[[kassirh-shot-3.png]]", caption: "[[TODO: caption]]", ratio: "4/3" },
    ],
    outcomes: [
      { value: "[[metric]]", label: "[[TODO: outcome]]" },
      { value: "[[metric]]", label: "[[TODO: outcome]]" },
    ],
    reflection:
      "[[TODO: Alex — an honest reflection on kassiRH: what you'd do differently]]",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const projectSlugs = projects.map((p) => p.slug);

/** Prev / next navigation within the catalogue. */
export function getAdjacentProjects(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return { prev: undefined, next: undefined };
  return {
    prev: i > 0 ? projects[i - 1] : undefined,
    next: i < projects.length - 1 ? projects[i + 1] : undefined,
  };
}
