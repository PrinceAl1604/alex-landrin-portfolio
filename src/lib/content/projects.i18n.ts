/**
 * DE / FR translations for case-study content. English stays the source of
 * truth in projects.ts; this file only holds the translated overrides, keyed
 * by slug. Idiomatic, not word-for-word. [[…]] placeholders are kept verbatim.
 */
import type { Project } from "./projects";

type ProjectTr = {
  summary?: string;
  angle?: string;
  role?: string;
  timeframe?: string;
  tags?: string[];
  problem?: string;
  process?: { heading: string; body: string }[];
  outcomes?: { label: string }[];
  reflection?: string;
};

type Lang = "de" | "fr";

export const projectTranslations: Record<string, Partial<Record<Lang, ProjectTr>>> = {
  ream: {
    fr: {
      summary:
        "Plateforme de gestion pour agences immobilières, dédiée à la vente de terrains en financement vendeur en Afrique de l'Ouest.",
      angle: "Domaine complexe, design de systèmes, produit livré.",
      role: "Designer produit & front-end — réalisé via Cozisoft",
      timeframe: "2024 — aujourd'hui",
      tags: ["SaaS", "FinTech", "Design system"],
      problem:
        "Au Ghana, la vente de terrains en financement vendeur repose sur des échéanciers longs, des versements partiels et un rapprochement manuel. Les agences suivaient des soldes à six chiffres entre tableurs et WhatsApp — les erreurs coûtaient cher et la confiance était fragile. [[TODO: Alex to refine problem framing with a real anecdote]]",
      process: [
        {
          heading: "J'ai cartographié l'argent, pas seulement les écrans",
          body: "Avant de dessiner la moindre maquette, j'ai modélisé tout le cycle de vie d'une parcelle financée — acompte, échéancier, arriérés, rapprochement — avec l'équipe finance. C'est le domaine, pas l'UI, qui a dicté la structure.",
        },
        {
          heading: "Un plan de travail de rapprochement, pas un simple tableau",
          body: "J'ai choisi un modèle de « workbench » (bâti sur les primitives shadcn/ui) pour qu'un opérateur puisse rapprocher paiements et échéanciers côte à côte, les soldes toujours visibles. Le modèle de données reste l'ossature de l'interface.",
        },
        {
          heading: "Des données denses, mais apaisées",
          body: "J'ai posé un système de tokens strict — espacements, chiffres tabulaires, filets — pour que des écrans chargés de chiffres restent lisibles. Le statut passe par la typo et l'épaisseur des filets, pas seulement par la couleur (accessibilité + parité à l'impression).",
        },
        {
          heading: "Conçu jusqu'au composant, puis livré",
          body: "Livré sous forme de composants React de production plutôt que de maquettes statiques : le module finance est parti en prod sans écart entre design et code. [[TODO: Alex — note launch scope]]",
        },
      ],
      outcomes: [
        { label: "Temps de rapprochement réduit" },
        { label: "Parcelles sous gestion" },
        { label: "Agences intégrées" },
      ],
      reflection:
        "J'ai priorisé le modèle financier et sous-investi trop tôt les états vides et d'erreur — les premiers opérateurs ont rencontré des cas limites (trop-perçu, remboursements) que je n'avais pas prévus. La prochaine fois, je scénariserais les parcours malheureux en même temps que le parcours idéal. [[TODO: Alex to confirm or rewrite in your voice]]",
    },
    de: {
      summary:
        "Management-Plattform für Immobilienagenturen — für verkäuferfinanzierte Grundstücksverkäufe in Westafrika.",
      angle: "Komplexe Domäne, Systemdesign, ausgeliefertes Produkt.",
      role: "Product Designer & Frontend — umgesetzt über Cozisoft",
      timeframe: "2024 — heute",
      tags: ["SaaS", "FinTech", "Designsystem"],
      problem:
        "In Ghana laufen verkäuferfinanzierte Grundstücksverkäufe über lange Zahlpläne, Teilraten und manuellen Abgleich. Agenturen verfolgten sechsstellige Salden zwischen Tabellen und WhatsApp — Fehler waren teuer, das Vertrauen fragil. [[TODO: Alex to refine problem framing with a real anecdote]]",
      process: [
        {
          heading: "Ich habe das Geld modelliert, nicht nur die Screens",
          body: "Bevor ich ein einziges Frame zeichnete, habe ich mit dem Finanzteam den gesamten Lebenszyklus einer finanzierten Parzelle abgebildet — Anzahlung, Ratenplan, Rückstände, Abgleich. Die Domäne bestimmte die Struktur, nicht die UI.",
        },
        {
          heading: "Ein Reconciliation-Workbench statt einer Tabelle",
          body: "Ich habe ein Workbench-Muster gewählt (auf shadcn/ui-Primitiven), damit ein Operator Zahlungen und Pläne nebeneinander abgleichen kann — mit stets sichtbaren Salden. Das Datenmodell bleibt das Rückgrat der Oberfläche.",
        },
        {
          heading: "Dichte Daten, ruhig gestaltet",
          body: "Ein striktes Token-System — Abstände, Tabellenziffern, Haarlinien — hält auch zahlenlastige Screens lesbar. Status wird über Typo und Linienstärke getragen, nicht nur über Farbe (Barrierefreiheit + Druckparität).",
        },
        {
          heading: "Bis zum Komponenten gedacht, dann ausgeliefert",
          body: "Übergeben als produktionsreife React-Komponenten statt statischer Frames — so ging das Finanzmodul ohne Design-Code-Lücke live. [[TODO: Alex — note launch scope]]",
        },
      ],
      outcomes: [
        { label: "Abgleichzeit reduziert" },
        { label: "Parzellen in Verwaltung" },
        { label: "Agenturen onboarded" },
      ],
      reflection:
        "Ich habe das Finanzmodell nach vorn gestellt und die Leer- und Fehlerzustände zu spät bedacht — die ersten Operatoren stießen auf Sonderfälle (Überzahlung, Rückerstattung), die ich nicht gestaltet hatte. Nächstes Mal würde ich die unglücklichen Pfade im selben Atemzug wie den glücklichen durchspielen. [[TODO: Alex to confirm or rewrite in your voice]]",
    },
  },

  "canton-getaway": {
    fr: {
      summary:
        "Application de gestion de parcelles — modales de paiement, visualiseur d'échéancier et barre de filtres dense, rendue utilisable.",
      angle: "UX de données denses, rendue utilisable.",
      role: "Designer produit",
      tags: ["UI applicative", "UX de données"],
      problem:
        "Gérer des centaines de parcelles, c'est filtrer, comparer et agir sur des lignes de données financières, sur des écrans parfois aussi petits qu'un téléphone. Le défi : la densité sans la surcharge. [[TODO: Alex to expand]]",
      process: [
        {
          heading: "J'ai observé le filtrage, pas les fonctionnalités",
          body: "Le vrai travail, c'était trouver-la-bonne-parcelle-vite. J'ai recensé les combinaisons de filtres réellement utilisées et supprimé celles qui n'existaient qu'en théorie.",
        },
        {
          heading: "Une seule barre de filtres, à révélation progressive",
          body: "J'ai préféré une barre de filtres unique et persistante à un mur de contrôles : le cas courant reste à un tap, le cas rare demeure accessible.",
        },
        {
          heading: "Une modale de paiement digne de confiance",
          body: "J'ai conçu la modale de paiement et le visualiseur d'échéancier autour de la clarté des conséquences — ce que vous devez, quand, et ce qui change si vous payez maintenant. Chiffres en chiffres tabulaires, hiérarchie nette.",
        },
        {
          heading: "Mobile d'abord, vérifié en petit",
          body: "J'ai éprouvé chaque mise en page à 360 px d'abord, avant d'agrandir — l'inverse de l'ordre habituel. [[TODO: Alex — note handoff/ship detail]]",
        },
      ],
      outcomes: [{ label: "Temps de recherche d'une parcelle" }, { label: "Écrans conçus" }],
      reflection:
        "Au départ, j'ai trop caché derrière la révélation progressive et les utilisateurs manquaient des fonctions dont ils avaient besoin. La leçon : la révélation progressive n'est bienveillante que si le point d'entrée annonce ce qui se cache dessous. [[TODO: Alex to confirm]]",
    },
    de: {
      summary:
        "App zur Verwaltung von Grundstücksparzellen — Zahlungs-Modals, Tilgungsplan-Viewer und eine dichte Filterleiste, nutzbar gemacht.",
      angle: "Dichte Daten-UX, nutzbar gemacht.",
      role: "Product Designer",
      tags: ["App-UI", "Daten-UX"],
      problem:
        "Hunderte Parzellen zu verwalten heißt, Zeilen voller Finanzdaten zu filtern, zu vergleichen und danach zu handeln — auf Screens so klein wie ein Handy. Die Herausforderung: Dichte ohne Überforderung. [[TODO: Alex to expand]]",
      process: [
        {
          heading: "Ich habe das Filtern beobachtet, nicht die Features",
          body: "Die Kernaufgabe war: die-richtige-Parzelle-schnell-finden. Ich habe die real genutzten Filterkombinationen erfasst und die gestrichen, die nur in der Theorie existierten.",
        },
        {
          heading: "Eine Filterleiste, progressiv ausklappbar",
          body: "Ich habe eine einzige, dauerhaft sichtbare Filterleiste einer Wand aus Bedienelementen vorgezogen: Der Normalfall bleibt einen Tap entfernt, der Sonderfall erreichbar.",
        },
        {
          heading: "Ein Zahlungs-Modal, dem man vertraut",
          body: "Zahlungs-Modal und Tilgungsplan-Viewer sind auf die Klarheit der Konsequenz ausgelegt — was du schuldest, wann, und was sich ändert, wenn du jetzt zahlst. Zahlen in Tabellenziffern, mit klarer Hierarchie.",
        },
        {
          heading: "Mobile first, im Kleinen geprüft",
          body: "Jedes Layout habe ich zuerst bei 360 px getestet und dann vergrößert — die umgekehrte Reihenfolge. [[TODO: Alex — note handoff/ship detail]]",
        },
      ],
      outcomes: [{ label: "Suchzeit pro Parzelle" }, { label: "Gestaltete Screens" }],
      reflection:
        "Anfangs habe ich zu viel hinter der progressiven Ausklappung versteckt, und Nutzer übersahen Funktionen, die sie brauchten. Die Lektion: Progressive Disclosure ist nur dann freundlich, wenn der Einstiegspunkt zeigt, was darunter liegt. [[TODO: Alex to confirm]]",
    },
  },

  "brandkit-studio": {
    fr: {
      summary:
        "Concept et prototype 0→1 d'un outil de brand system — transformer les règles de marque en logiciel utilisable.",
      angle: "Pensée produit 0→1.",
      role: "Designer produit & lead concept",
      tags: ["0→1", "Concept", "Pensée produit"],
      problem:
        "Les chartes de marque meurent dans des PDF. BrandKit part d'une question : et si un brand system était un outil vivant dans lequel les équipes conçoivent, plutôt qu'un document qu'elles ignorent ? [[TODO: Alex to sharpen the thesis]]",
      process: [
        {
          heading: "Là où les brand systems déraillent",
          body: "En m'appuyant sur plus de 500 livraisons LogoMint, j'ai recensé où les marques livrées échouent réellement sur le terrain — application incohérente, pas de source de vérité unique, aucune mise en application.",
        },
        {
          heading: "Les tokens comme produit, pas comme sous-produit",
          body: "J'ai bâti tout le concept autour de design tokens vivants : couleur, typo et espacements comme données que l'équipe compose — impossible pour la charte et le résultat de diverger.",
        },
        {
          heading: "Du logo à l'interface, au même endroit",
          body: "J'ai prototypé la boucle centrale — définir un logo et des tokens, puis composer des supports fidèles à la marque — en flux interactif, pour tester si des non-designers restaient dans les clous sans aide.",
        },
        {
          heading: "Un prototype qui plaide sa cause",
          body: "J'ai construit un prototype cliquable pour éprouver le concept auprès de vrais utilisateurs, avant tout engagement d'ingénierie. [[TODO: Alex — outcome of testing]]",
        },
      ],
      outcomes: [{ label: "Sessions de test du prototype" }, { label: "Du concept au prototype cliquable" }],
      reflection:
        "Je suis tombé amoureux de l'outil avant d'avoir tout à fait prouvé que la douleur était assez vive pour changer les habitudes. Si je recommençais, je validerais la disposition à payer avant de peaufiner l'interface. [[TODO: Alex to confirm]]",
    },
    de: {
      summary:
        "0→1-Produktkonzept und Prototyp für ein Brand-System-Tool — Markenregeln in nutzbare Software verwandeln.",
      angle: "0→1-Produktdenken.",
      role: "Product Designer & Concept Lead",
      tags: ["0→1", "Konzept", "Produktdenken"],
      problem:
        "Markenrichtlinien sterben in PDFs. BrandKit begann mit einer Frage: Was, wenn ein Brand System ein lebendiges Tool wäre, in dem Teams gestalten — statt eines Dokuments, das sie ignorieren? [[TODO: Alex to sharpen the thesis]]",
      process: [
        {
          heading: "Wo Brand Systems scheitern",
          body: "Auf Basis von über 500 LogoMint-Auslieferungen habe ich erfasst, wo übergebene Marken in der Praxis wirklich scheitern — inkonsistente Anwendung, keine einzige Quelle der Wahrheit, keine Durchsetzung.",
        },
        {
          heading: "Tokens als Produkt, nicht als Nebenprodukt",
          body: "Ich habe das ganze Konzept um lebendige Design-Tokens gebaut: Farbe, Typo und Abstände als Daten, mit denen ein Team komponiert — so können Richtlinie und Ergebnis nie auseinanderlaufen.",
        },
        {
          heading: "Vom Logo zur Oberfläche, an einem Ort",
          body: "Ich habe die Kernschleife prototypisiert — Logo und Tokens definieren, dann markenkonforme Artefakte komponieren — als interaktiven Flow, um zu testen, ob Nicht-Designer ohne Hilfe on-brand bleiben.",
        },
        {
          heading: "Ein Prototyp, der für sich selbst argumentiert",
          body: "Ich habe einen klickbaren Prototyp gebaut, um das Konzept mit echten Nutzern zu prüfen — vor jedem Engineering-Commitment. [[TODO: Alex — outcome of testing]]",
        },
      ],
      outcomes: [{ label: "Prototyp-Testsitzungen" }, { label: "Vom Konzept zum klickbaren Prototyp" }],
      reflection:
        "Ich habe mich in das Tool verliebt, bevor ich ganz bewiesen hatte, dass der Schmerz groß genug ist, um Verhalten zu ändern. Noch einmal würde ich die Zahlungsbereitschaft prüfen, bevor ich die Oberfläche poliere. [[TODO: Alex to confirm]]",
    },
  },

  "logomint-identities": {
    fr: {
      summary:
        "Une sélection d'identités de marque tirée de plus de 500 livraisons LogoMint — l'étendue et le métier réunis en une galerie.",
      angle: "Étendue + métier.",
      role: "Fondateur & lead brand designer — LogoMint",
      timeframe: "2019 — aujourd'hui",
      tags: ["Identité de marque", "Galerie"],
      problem:
        "Huit identités fortes valent mieux que quatre-vingts vignettes fades. L'objectif ici : montrer l'étendue et le métier en une galerie assumée — pas sur-expliquer un travail qui devrait parler de lui-même.",
      process: [
        {
          heading: "Le positionnement avant les pixels",
          body: "Chaque identité part du positionnement du client sur son marché — pour qui, et contre qui — avant qu'un seul logo ne soit dessiné.",
        },
        {
          heading: "Un système, pas juste un logo",
          body: "Chaque livraison part comme un petit système : logo, typo, couleur et règles d'usage, pour que la marque survive au contact du réel.",
        },
        {
          heading: "Le métier est dans le détail",
          body: "Espacement optique, lettres dessinées et non par défaut, et des logos qui tiennent du favicon au panneau publicitaire.",
        },
        {
          heading: "Plus de 500 livrées",
          body: "Une opération à l'échelle d'un studio, avec un processus reproductible — la rigueur derrière l'étendue montrée ici.",
        },
      ],
      outcomes: [{ label: "Clients livrés" }, { label: "Pays couverts" }],
      reflection:
        "Le volume m'a appris la vitesse, mais au début j'ai laissé partir des marques sans système d'usage — un beau logo mal appliqué est un logo gâché. Aujourd'hui, chaque identité repart avec ses règles. [[TODO: Alex to confirm]]",
    },
    de: {
      summary:
        "Eine kuratierte Auswahl an Markenidentitäten aus über 500 LogoMint-Auslieferungen — Bandbreite und Handwerk in einer Galerie.",
      angle: "Bandbreite + Handwerk.",
      role: "Gründer & Lead Brand Designer — LogoMint",
      timeframe: "2019 — heute",
      tags: ["Markenidentität", "Galerie"],
      problem:
        "Acht starke Identitäten schlagen achtzig dünne Thumbnails. Ziel hier: Bandbreite und Handwerk als eine selbstbewusste Galerie zeigen — Arbeit nicht zerreden, die für sich sprechen sollte.",
      process: [
        {
          heading: "Positionierung vor Pixeln",
          body: "Jede Identität beginnt mit der Marktposition des Kunden — für wen und gegen wen — bevor ein einziges Zeichen entsteht.",
        },
        {
          heading: "Ein System, nicht nur ein Logo",
          body: "Jede Auslieferung geht als kleines System raus: Zeichen, Typo, Farbe und Nutzungsregeln — damit die Marke den Kontakt mit der echten Welt übersteht.",
        },
        {
          heading: "Handwerk steckt im Detail",
          body: "Optische Abstände, gezeichnete statt voreingestellte Buchstaben und Zeichen, die vom Favicon bis zur Plakatwand halten.",
        },
        {
          heading: "Über 500 ausgeliefert",
          body: "Ein Betrieb in Studio-Größe mit reproduzierbarem Prozess — die Disziplin hinter der hier gezeigten Bandbreite.",
        },
      ],
      outcomes: [{ label: "Kunden ausgeliefert" }, { label: "Länder bedient" }],
      reflection:
        "Volumen hat mir Tempo beigebracht, aber anfangs ließ ich Marken ohne Nutzungssystem raus — ein schönes Zeichen, falsch angewandt, ist ein vergeudetes Zeichen. Heute verlässt jede Identität das Haus mit Regeln. [[TODO: Alex to confirm]]",
    },
  },
};

/** Resolve a project into the active locale (English falls through unchanged). */
export function localizeProject(p: Project, locale: string): Project {
  if (locale === "en") return p;
  const tr = projectTranslations[p.slug]?.[locale as Lang];
  if (!tr) return p;
  return {
    ...p,
    summary: tr.summary ?? p.summary,
    angle: tr.angle ?? p.angle,
    role: tr.role ?? p.role,
    timeframe: tr.timeframe ?? p.timeframe,
    tags: tr.tags ?? p.tags,
    problem: tr.problem ?? p.problem,
    process: tr.process
      ? p.process.map((s, i) => ({
          ...s,
          heading: tr.process?.[i]?.heading ?? s.heading,
          body: tr.process?.[i]?.body ?? s.body,
        }))
      : p.process,
    outcomes: tr.outcomes
      ? p.outcomes.map((o, i) => ({ ...o, label: tr.outcomes?.[i]?.label ?? o.label }))
      : p.outcomes,
    reflection: tr.reflection ?? p.reflection,
  };
}
