/**
 * Single source of truth for identity, links and site-wide constants.
 * Edit here — every component reads from this file.
 */

export const site = {
  name: "Alex Landrin",
  fullName: "Alex Landrin Njonkoua",
  role: "Product Designer",
  company: "aiio GmbH",
  location: "Magdeburg, Germany",
  // Used for absolute URLs (OG, sitemap, JSON-LD). [[TODO: set your real domain]]
  url: "https://alexlandrin.com",
  positioning:
    "Product & brand designer who thinks in systems and ships real products — from the brand mark to the shipped interface.",
  availability: "Open to senior Product Design roles across Germany & Europe",
} as const;

export const contact = {
  email: "alexlandrin203@gmail.com",
  // [[TODO: Alex to confirm LinkedIn handle]]
  linkedin: "https://www.linkedin.com/in/alexlandrin",
  linkedinLabel: "LinkedIn",
  // [[TODO: Alex to drop the real PDF at public/cv/alex-landrin-cv.pdf]]
  cv: "/cv/alex-landrin-cv.pdf",
} as const;

export const languages = [
  { name: "French", level: "Native" },
  { name: "German", level: "C1" },
  { name: "English", level: "Professional" },
] as const;

export const credentials = [
  {
    title: "Media Informatics — UI Design focus",
    org: "Technische Hochschule Brandenburg",
  },
  {
    title: "BSc Mathematics",
    org: "University of Buea",
  },
] as const;

/** Capabilities strip — set typographically, never as skill bars. */
export const disciplines = [
  "Product Design (UX/UI)",
  "Brand Identity",
  "Design Systems",
  "SaaS Product Thinking",
  "Front-end (React / Tailwind)",
  "Prototyping",
] as const;

export const tools = [
  "Figma",
  "shadcn/ui",
  "Framer Motion",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Illustrator",
  "Design Tokens",
] as const;

/** Experience timeline — powers /about and /cv. Edit freely. */
export const experience = [
  {
    role: "Product Designer",
    org: "aiio GmbH",
    location: "Magdeburg, Germany",
    period: "2024 — present",
    note: "Product design (UX/UI) for a B2B SaaS platform — design systems, complex data UX, shipped features. [[TODO: Alex to refine]]",
  },
  {
    role: "Founder & Lead Brand Designer",
    org: "LogoMint",
    location: "Remote",
    period: "2019 — present",
    note: "Brand identity studio — 500+ identities delivered across markets.",
  },
  {
    role: "Founder",
    org: "Cozisoft",
    location: "Remote",
    period: "[[TODO: year]] — present",
    note: "Product studio building and shipping SaaS end to end (design → front-end → launch).",
  },
] as const;

export type NavItem = { href: string; label: string };

export const nav: NavItem[] = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#ventures", label: "Ventures" },
  { href: "/#contact", label: "Contact" },
];
