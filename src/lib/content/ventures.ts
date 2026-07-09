/** The ecosystem — supporting cast to the design work. One tight line each. */

export type Venture = {
  name: string;
  kind: string;
  line: string;
  href: string;
  /** null = no public link yet; renders as a non-link with a marked status. */
  external: boolean;
  status?: string;
};

export const ventures: Venture[] = [
  {
    name: "LogoMint",
    kind: "Brand identity studio",
    line: "500+ brand identities delivered — the studio behind the identity work.",
    href: "https://logomint.co", // [[TODO: Alex to confirm LogoMint URL]]
    external: true,
  },
  {
    name: "ACADEMIA",
    kind: "Education network",
    line: "A learning network for French-speaking creatives — 10,000+ community, 1,000+ students.",
    href: "#", // [[TODO: Alex to supply ACADEMIA link]]
    external: false,
    status: "[[TODO: link]]",
  },
  {
    name: "Cozisoft",
    kind: "Software & product",
    line: "The product studio where I build and ship SaaS end to end.",
    href: "#", // [[TODO: Alex to supply Cozisoft link]]
    external: false,
    status: "[[TODO: link]]",
  },
  {
    name: "Landtone",
    kind: "Content SaaS + agency",
    line: "Francophone, expert-led content platform — in development.",
    href: "https://landtone.io",
    external: true,
    status: "In development",
  },
];
