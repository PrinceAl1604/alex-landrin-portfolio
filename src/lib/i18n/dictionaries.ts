/**
 * Dictionary per locale — the single source of truth for every visible string.
 * English is the default. DE and FR are full, idiomatic translations (not
 * word-for-word): active voice, natural phrasing, native conventions.
 *
 * Structural data (slugs, tools, dates, image filenames) stays in the content
 * files; everything a visitor reads lives here so the whole site switches
 * language from one toggle.
 */

export const locales = ["en", "de", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = { en: "EN", de: "DE", fr: "FR" };

const en = {
  nav: { work: "Work", about: "About", ventures: "Ventures", contact: "Contact", cv: "CV" },
  cta: {
    viewWork: "View work",
    downloadCv: "Download CV",
    emailMe: "Email me",
    viewCaseStudy: "View case study",
    viewAllWork: "All work",
    backHome: "Back to home",
    getInTouch: "Get in touch",
    copyEmail: "Copy email",
    copied: "Copied ✓",
    visitSite: "Visit site",
  },
  hero: {
    eyebrow: "Product Designer · Magdeburg, Germany",
    headlineA: "Systems thinker.",
    headlineB: "Product shipper.",
    lead: "I design product and brand for SaaS — from the brand mark to the shipped interface. A mathematics background gives me a logic-first, systematic approach; a builder's habit means I take work all the way to launch.",
    availability: "Open to senior Product Design roles across Germany & Europe",
    availabilityShort: "Open to senior roles",
  },
  work: {
    label: "Selected work",
    title: "Three projects, shown in depth.",
    lead: "Recruiters hire on case studies, not thumbnails. Each of these traces the real path — research, decisions, design, ship.",
  },
  capabilities: {
    label: "Capabilities",
    title: "What I do, and what I do it with.",
    disciplinesLabel: "Disciplines",
    toolsLabel: "Tools",
    disciplines: [
      "Product Design (UX/UI)",
      "Brand Identity",
      "Design Systems",
      "SaaS Product Thinking",
      "Front-end (React / Tailwind)",
      "Prototyping",
    ],
  },
  about: {
    label: "About",
    title: "A mathematics brain and a brand designer's eye.",
    p1: "I'm Alex Landrin — a product and brand designer based in Magdeburg, Germany. I hold a degree in Mathematics from the University of Buea and studied Media Informatics with a UI-Design focus at Technische Hochschule Brandenburg. That combination is the whole point: I think in systems, and I have the eye to make them feel human.",
    p2: "I don't just design screens. I build and ship products end to end — design, front-end, launch — most recently as Product Designer at aiio GmbH, and through my own product studio, Cozisoft. When a design leaves my hands, it's usually already code.",
    languagesLabel: "Languages",
    credentialsLabel: "Education",
    portraitCaption: "Alex Landrin",
    location: "Magdeburg, Germany",
    languages: [
      { name: "French", level: "Native" },
      { name: "German", level: "C1" },
      { name: "English", level: "Professional" },
    ],
    credentials: [
      { title: "Media Informatics — UI Design focus", org: "Technische Hochschule Brandenburg" },
      { title: "BSc Mathematics", org: "University of Buea" },
    ],
  },
  ventures: {
    label: "Ventures",
    title: "The wider ecosystem.",
    lead: "Beyond the design work, I build and run a small ecosystem. It's the supporting cast, not the star.",
    inDevelopment: "In development",
    // Same order as content/ventures.ts
    items: [
      { kind: "Education network", line: "A learning network for French-speaking creatives — 10,000+ community, 1,000+ students." },
      { kind: "Software & product", line: "The product studio where I build and ship SaaS end to end." },
      { kind: "Content SaaS + agency", line: "Francophone, expert-led content platform — in development." },
    ],
  },
  contact: {
    label: "Contact",
    title: "Let's talk.",
    lead: "Open to senior Product Design roles across Germany and Europe, and to select brand and product work. The fastest way to reach me is email.",
    locationLabel: "Based in",
    availabilityLabel: "Availability",
  },
  footer: {
    tagline: "Product & brand designer who thinks in systems and ships real products — from the brand mark to the shipped interface.",
    colophon: "Built with Next.js, Tailwind & Framer Motion. Type set in Helvetica Neue.",
    rights: "All rights reserved.",
    theme: "Theme",
    grid: "Grid",
    language: "Language",
    themeLight: "Light",
    themeDark: "Dark",
  },
  caseStudy: {
    problem: "The problem",
    process: "What I did",
    artifacts: "Selected screens",
    outcome: "Outcome",
    reflection: "What I'd do differently",
    role: "Role",
    timeframe: "Timeframe",
    tools: "Tools",
    prev: "Previous",
    next: "Next",
    gallery: "Selected identities",
  },
  experience: {
    label: "Experience",
    items: [
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
    ],
  },
  meta: {
    placeholderNote: "Placeholder — Alex to supply final asset",
  },
};

export type Dictionary = typeof en;

/* ------------------------------------------------------------------ *
 * German — full, idiomatic translation.
 * ------------------------------------------------------------------ */
const de: DeepPartial<Dictionary> = {
  nav: { work: "Arbeiten", about: "Über mich", ventures: "Projekte", contact: "Kontakt", cv: "Lebenslauf" },
  cta: {
    viewWork: "Arbeiten ansehen",
    downloadCv: "Lebenslauf herunterladen",
    emailMe: "E-Mail schreiben",
    viewCaseStudy: "Case Study ansehen",
    viewAllWork: "Alle Arbeiten",
    backHome: "Zur Startseite",
    getInTouch: "Kontakt aufnehmen",
    copyEmail: "E-Mail kopieren",
    copied: "Kopiert ✓",
    visitSite: "Zur Website",
  },
  hero: {
    eyebrow: "Produktdesigner · Magdeburg, Deutschland",
    headlineA: "Systeme denken.",
    headlineB: "Produkte liefern.",
    lead: "Ich gestalte Produkt und Marke für SaaS — vom Markenzeichen bis zur ausgelieferten Oberfläche. Mein Mathematik-Hintergrund gibt mir einen logischen, systematischen Ansatz; als Macher bringe ich jedes Projekt bis zum Launch.",
    availability: "Offen für Senior-Positionen im Produktdesign — in Deutschland und Europa",
    availabilityShort: "Offen für Senior-Rollen",
  },
  work: {
    label: "Ausgewählte Arbeiten",
    title: "Drei Projekte, in der Tiefe.",
    lead: "Recruiter stellen aufgrund von Case Studies ein, nicht wegen Thumbnails. Jede zeigt den echten Weg — Recherche, Entscheidungen, Design, Launch.",
  },
  capabilities: {
    label: "Fähigkeiten",
    title: "Was ich mache — und womit.",
    disciplinesLabel: "Disziplinen",
    toolsLabel: "Werkzeuge",
    disciplines: [
      "Produktdesign (UX/UI)",
      "Markenidentität",
      "Designsysteme",
      "SaaS-Produktdenken",
      "Frontend (React / Tailwind)",
      "Prototyping",
    ],
  },
  about: {
    label: "Über mich",
    title: "Ein Mathematiker-Kopf und das Auge eines Markendesigners.",
    p1: "Ich bin Alex Landrin — Produkt- und Markendesigner in Magdeburg. Ich habe einen Mathematik-Abschluss der Universität Buea und anschließend Medieninformatik mit Schwerpunkt UI-Design an der Technischen Hochschule Brandenburg studiert. Genau diese Kombination macht den Unterschied: Ich denke in Systemen — und habe den Blick dafür, sie menschlich wirken zu lassen.",
    p2: "Ich gestalte nicht nur Screens. Ich baue und liefere Produkte von A bis Z — Design, Frontend, Launch — zuletzt als Product Designer bei der aiio GmbH und über mein eigenes Produktstudio Cozisoft. Wenn ein Design meine Hände verlässt, ist es meist schon Code.",
    languagesLabel: "Sprachen",
    credentialsLabel: "Ausbildung",
    location: "Magdeburg, Deutschland",
    languages: [
      { name: "Französisch", level: "Muttersprache" },
      { name: "Deutsch", level: "C1" },
      { name: "Englisch", level: "Verhandlungssicher" },
    ],
    credentials: [
      { title: "Medieninformatik — Schwerpunkt UI-Design", org: "Technische Hochschule Brandenburg" },
      { title: "BSc Mathematik", org: "Universität Buea" },
    ],
  },
  ventures: {
    label: "Projekte",
    title: "Das größere Ökosystem.",
    lead: "Neben der Designarbeit baue und betreibe ich ein kleines Ökosystem. Die Nebenrolle, nicht der Star.",
    inDevelopment: "In Entwicklung",
    items: [
      { kind: "Bildungsnetzwerk", line: "Ein Lernnetzwerk für frankofone Kreative — über 10.000 Community, über 1.000 Studierende." },
      { kind: "Software & Produkt", line: "Das Produktstudio, in dem ich SaaS von A bis Z baue und ausliefere." },
      { kind: "Content-SaaS + Agentur", line: "Frankofone, expertengeführte Content-Plattform — in Entwicklung." },
    ],
  },
  contact: {
    label: "Kontakt",
    title: "Sprechen wir.",
    lead: "Offen für Senior-Positionen im Produktdesign in Deutschland und Europa — und für ausgewählte Marken- und Produktprojekte. Am schnellsten erreichst du mich per E-Mail.",
    locationLabel: "Ansässig in",
    availabilityLabel: "Verfügbarkeit",
  },
  footer: {
    tagline: "Produkt- und Markendesigner, der in Systemen denkt und echte Produkte ausliefert — vom Markenzeichen bis zur fertigen Oberfläche.",
    colophon: "Gebaut mit Next.js, Tailwind & Framer Motion. Gesetzt in Helvetica Neue.",
    rights: "Alle Rechte vorbehalten.",
    theme: "Design",
    grid: "Raster",
    language: "Sprache",
    themeLight: "Hell",
    themeDark: "Dunkel",
  },
  caseStudy: {
    problem: "Das Problem",
    process: "Was ich getan habe",
    artifacts: "Ausgewählte Screens",
    outcome: "Ergebnis",
    reflection: "Was ich anders machen würde",
    role: "Rolle",
    timeframe: "Zeitraum",
    tools: "Werkzeuge",
    prev: "Zurück",
    next: "Weiter",
    gallery: "Ausgewählte Identitäten",
  },
  experience: {
    label: "Werdegang",
    items: [
      {
        role: "Product Designer",
        org: "aiio GmbH",
        location: "Magdeburg, Deutschland",
        period: "2024 — heute",
        note: "Produktdesign (UX/UI) für eine B2B-SaaS-Plattform — Designsysteme, komplexe Daten-UX, ausgelieferte Features. [[TODO: Alex to refine]]",
      },
      {
        role: "Gründer & Lead Brand Designer",
        org: "LogoMint",
        location: "Remote",
        period: "2019 — heute",
        note: "Studio für Markenidentität — über 500 Identitäten für verschiedene Märkte ausgeliefert.",
      },
      {
        role: "Gründer",
        org: "Cozisoft",
        location: "Remote",
        period: "[[TODO: year]] — heute",
        note: "Produktstudio, das SaaS von A bis Z baut und ausliefert (Design → Frontend → Launch).",
      },
    ],
  },
  meta: { placeholderNote: "Platzhalter — finales Asset folgt von Alex" },
};

/* ------------------------------------------------------------------ *
 * French — full, idiomatic translation.
 * ------------------------------------------------------------------ */
const fr: DeepPartial<Dictionary> = {
  nav: { work: "Projets", about: "À propos", ventures: "Écosystème", contact: "Contact", cv: "CV" },
  cta: {
    viewWork: "Voir les projets",
    downloadCv: "Télécharger le CV",
    emailMe: "M'écrire",
    viewCaseStudy: "Voir l'étude de cas",
    viewAllWork: "Tous les projets",
    backHome: "Retour à l'accueil",
    getInTouch: "Me contacter",
    copyEmail: "Copier l'e-mail",
    copied: "Copié ✓",
    visitSite: "Voir le site",
  },
  hero: {
    eyebrow: "Designer produit · Magdebourg, Allemagne",
    headlineA: "Concevoir des systèmes.",
    headlineB: "Livrer des produits.",
    lead: "Je conçois le produit et la marque de logiciels SaaS — du logo à l'interface mise en ligne. Ma formation en mathématiques m'apporte une approche logique et systématique ; mon réflexe de bâtisseur me pousse à mener chaque projet jusqu'au lancement.",
    availability: "Ouvert aux postes senior en design produit, en Allemagne et en Europe",
    availabilityShort: "Ouvert aux postes senior",
  },
  work: {
    label: "Projets sélectionnés",
    title: "Trois projets, en profondeur.",
    lead: "On recrute sur des études de cas, pas sur des vignettes. Chacune retrace le vrai parcours — recherche, décisions, design, mise en ligne.",
  },
  capabilities: {
    label: "Compétences",
    title: "Ce que je fais, et avec quoi.",
    disciplinesLabel: "Disciplines",
    toolsLabel: "Outils",
    disciplines: [
      "Design produit (UX/UI)",
      "Identité de marque",
      "Design systems",
      "Vision produit SaaS",
      "Front-end (React / Tailwind)",
      "Prototypage",
    ],
  },
  about: {
    label: "À propos",
    title: "Un cerveau de mathématicien, un œil de designer de marque.",
    p1: "Je suis Alex Landrin, designer produit et de marque basé à Magdebourg, en Allemagne. Diplômé en mathématiques de l'université de Buea, j'ai ensuite étudié l'informatique média avec une spécialité UI Design à la Technische Hochschule Brandenburg. Cette combinaison, c'est tout l'intérêt : je pense en systèmes, et j'ai l'œil pour les rendre humains.",
    p2: "Je ne dessine pas que des écrans. Je construis et je livre des produits de bout en bout — design, front-end, lancement — récemment comme Product Designer chez aiio GmbH, et via mon propre studio produit, Cozisoft. Quand un design quitte mes mains, il est le plus souvent déjà en code.",
    languagesLabel: "Langues",
    credentialsLabel: "Formation",
    location: "Magdebourg, Allemagne",
    languages: [
      { name: "Français", level: "Langue maternelle" },
      { name: "Allemand", level: "C1" },
      { name: "Anglais", level: "Courant professionnel" },
    ],
    credentials: [
      { title: "Informatique média — spécialité UI Design", org: "Technische Hochschule Brandenburg" },
      { title: "Licence de mathématiques", org: "Université de Buea" },
    ],
  },
  ventures: {
    label: "Écosystème",
    title: "L'écosystème autour.",
    lead: "Au-delà du design, je construis et fais tourner un petit écosystème. Un second rôle, pas la vedette.",
    inDevelopment: "En développement",
    items: [
      { kind: "Réseau de formation", line: "Un réseau d'apprentissage pour les créatifs francophones — plus de 10 000 membres, plus de 1 000 étudiants." },
      { kind: "Logiciel & produit", line: "Le studio produit où je conçois et livre du SaaS de bout en bout." },
      { kind: "SaaS de contenu + agence", line: "Plateforme de contenu francophone portée par des experts — en développement." },
    ],
  },
  contact: {
    label: "Contact",
    title: "Parlons-en.",
    lead: "Ouvert aux postes senior en design produit, en Allemagne et en Europe, ainsi qu'à des projets choisis de marque et de produit. Le plus rapide pour me joindre, c'est l'e-mail.",
    locationLabel: "Basé à",
    availabilityLabel: "Disponibilité",
  },
  footer: {
    tagline: "Designer produit et de marque qui pense en systèmes et livre de vrais produits — du logo à l'interface mise en ligne.",
    colophon: "Réalisé avec Next.js, Tailwind & Framer Motion. Composé en Helvetica Neue.",
    rights: "Tous droits réservés.",
    theme: "Thème",
    grid: "Grille",
    language: "Langue",
    themeLight: "Clair",
    themeDark: "Sombre",
  },
  caseStudy: {
    problem: "Le problème",
    process: "Ce que j'ai fait",
    artifacts: "Écrans sélectionnés",
    outcome: "Résultat",
    reflection: "Ce que je ferais différemment",
    role: "Rôle",
    timeframe: "Période",
    tools: "Outils",
    prev: "Précédent",
    next: "Suivant",
    gallery: "Identités sélectionnées",
  },
  experience: {
    label: "Parcours",
    items: [
      {
        role: "Product Designer",
        org: "aiio GmbH",
        location: "Magdebourg, Allemagne",
        period: "2024 — aujourd'hui",
        note: "Design produit (UX/UI) pour une plateforme SaaS B2B — design systems, UX de données complexes, fonctionnalités livrées. [[TODO: Alex to refine]]",
      },
      {
        role: "Fondateur & Lead Brand Designer",
        org: "LogoMint",
        location: "À distance",
        period: "2019 — aujourd'hui",
        note: "Studio d'identité de marque — plus de 500 identités livrées sur différents marchés.",
      },
      {
        role: "Fondateur",
        org: "Cozisoft",
        location: "À distance",
        period: "[[TODO: year]] — aujourd'hui",
        note: "Studio produit qui conçoit et livre du SaaS de bout en bout (design → front-end → lancement).",
      },
    ],
  },
  meta: { placeholderNote: "Emplacement — visuel final à fournir par Alex" },
};

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends (infer _U)[]
    ? T[K]
    : T[K] extends object
      ? DeepPartial<T[K]>
      : T[K];
};

function deepMerge<T>(base: T, override: DeepPartial<T>): T {
  const out = { ...base } as Record<string, unknown>;
  for (const key of Object.keys(override) as (keyof T)[]) {
    const o = override[key];
    const b = (base as Record<string, unknown>)[key as string];
    if (o && typeof o === "object" && !Array.isArray(o) && b && typeof b === "object") {
      out[key as string] = deepMerge(b, o as DeepPartial<typeof b>);
    } else if (o !== undefined) {
      out[key as string] = o;
    }
  }
  return out as T;
}

const dictionaries: Record<Locale, Dictionary> = {
  en,
  de: deepMerge(en, de),
  fr: deepMerge(en, fr),
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
