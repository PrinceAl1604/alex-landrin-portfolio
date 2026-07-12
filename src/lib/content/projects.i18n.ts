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

  aiio: {
    fr: {
      summary: "Une plateforme BPMN pour modéliser et gérer des processus métier.",
      angle: "Design produit pour un SaaS d'entreprise en production.",
      role: "Designer produit",
      timeframe: "2024 — aujourd'hui",
      tags: ["SaaS", "BPMN"],
    },
    de: {
      summary: "Eine BPMN-Plattform zum Modellieren und Verwalten von Geschäftsprozessen.",
      angle: "Produktdesign für ein produktives Enterprise-SaaS.",
      role: "Product Designer",
      timeframe: "2024 — heute",
      tags: ["SaaS", "BPMN"],
    },
  },

  kassirh: {
    fr: {
      summary: "Une plateforme RH.",
      angle: "[[TODO: Alex — l'angle en une ligne pour kassiRH]]",
      role: "Designer produit",
      timeframe: "Nov. 2025 — févr. 2026",
      tags: ["SaaS", "RH"],
    },
    de: {
      summary: "Eine HR-Plattform.",
      angle: "[[TODO: Alex — der Ein-Zeilen-Angle für kassiRH]]",
      role: "Product Designer",
      timeframe: "Nov. 2025 — Feb. 2026",
      tags: ["SaaS", "HR"],
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
