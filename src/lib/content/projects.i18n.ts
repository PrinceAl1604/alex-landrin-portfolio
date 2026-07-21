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
      summary:
        "Une plateforme BPMN pour des équipes non techniques — d'un outil de modélisation vers une intelligence des processus proactive, pilotée par l'humain.",
      angle: "Premier designer recruté — de l'absence de système à une 2.0 livrée.",
      role: "Designer produit — premier designer recruté, responsabilité produit de bout en bout",
      timeframe: "2024 — aujourd'hui",
      tags: ["SaaS", "BPMN", "Design system"],
      problem:
        "aiio était une plateforme BPMN solide, mais construite par des développeurs — chaque écran avait été implémenté au coup par coup, sans design system et sans personne pour porter l'expérience de bout en bout. En parallèle, l'entreprise faisait un pari audacieux : le BPM classique est mort, et l'avenir d'aiio est une intelligence des processus proactive et agentique, que l'humain continue de piloter. Cette réinvention devait rester lisible pour ceux qui l'utilisent vraiment — des équipes non techniques qui modélisent de vrais processus métier, où un écran confus ou une action non protégée n'est pas un désagrément, mais un processus cassé. Le produit avait besoin d'une fondation design assez solide pour porter ce pari — et elle n'existait pas.",
      process: [
        {
          heading: "Cartographier le domaine et la dette d'un même geste",
          body: "Je suis arrivé comme premier designer d'aiio ; j'ai donc lu deux choses en parallèle : le domaine BPMN et ses utilisateurs non techniques, et le produit tel que les développeurs l'avaient construit. L'audit a rendu l'écart évident — un logiciel capable, mais incohérent d'un écran à l'autre, sans langage commun pour le tenir ensemble.",
        },
        {
          heading: "Une nouvelle direction sur la marque — et un vrai système en dessous",
          body: "J'ai posé une nouvelle direction design ancrée dans l'identité visuelle d'aiio : plus innovante, plus cohérente, plus apaisée que l'UI des développeurs qu'elle remplaçait. La décision plus lourde a été d'arrêter de livrer des écrans isolés pour construire un système — la vision agentique de la 2.0 ne pouvait inspirer confiance que sur une fondation au comportement prévisible partout.",
        },
        {
          heading: "Construire le système tout en redessinant le produit",
          body: "J'ai piloté les tokens de couleur et bâti la première bibliothèque de composants Figma d'aiio — de nouveaux composants tirés de la marque — en parallèle de la refonte elle-même. La règle directrice venait des utilisateurs : un BPMN pour équipes non techniques doit être réellement simple, et sans tolérance à l'erreur par conception — l'interface vous guide pour rendre le mauvais geste difficile à faire.",
        },
        {
          heading: "Livré en 2.0, en production",
          body: "C'est parti en production. aiio 2.0 est livrée et tourne désormais sous un nouveau nom — Process Collector — avec la fondation design (tokens, composants, direction) comme socle du produit, et non comme une couche de peinture sur l'ancien.",
        },
      ],
      outcomes: [
        { label: "Le premier design system d'aiio, parti de zéro" },
        { label: "Livré en 2.0 — désormais Process Collector" },
        { label: "Responsabilité design du produit, de bout en bout" },
      ],
      reflection:
        "Construire le design system en parallèle de la refonte a fait bouger la fondation sous le produit — je livrais un pattern, puis devais le revoir à mesure que le système mûrissait. La prochaine fois, je figerais d'abord un petit noyau de tokens strict et ferais grandir la bibliothèque à partir de là, plutôt que de faire évoluer les deux à la fois. Être le premier designer m'a aussi appris qu'un système ne tient que si les développeurs se l'approprient avec moi — j'ai donc passé autant de temps à aligner sur le pourquoi que sur les composants eux-mêmes.",
    },
    de: {
      summary:
        "Eine BPMN-Plattform für nicht-technische Teams — vom Modellierungswerkzeug hin zu einer proaktiven, menschlich gesteuerten Prozessintelligenz.",
      angle: "Erster Designer im Haus — von keinem System zu einem ausgelieferten 2.0.",
      role: "Product Designer — erster Designer im Haus, Produktverantwortung von A bis Z",
      timeframe: "2024 — heute",
      tags: ["SaaS", "BPMN", "Designsystem"],
      problem:
        "aiio war eine leistungsfähige BPMN-Plattform, aber von Entwicklern gebaut — jeder Screen war ad hoc implementiert, ohne Designsystem und ohne jemanden, der die Experience durchgängig verantwortete. Zugleich wagte das Unternehmen eine kühne Wette: dass klassisches BPM tot ist und aiios Zukunft eine proaktive, agentische Prozessintelligenz ist, die der Mensch weiterhin steuert. Diese Neuerfindung musste für die Menschen lesbar bleiben, die sie wirklich nutzen — nicht-technische Teams, die echte Geschäftsprozesse modellieren, wo ein verwirrender Screen oder eine ungesicherte Aktion kein Ärgernis ist, sondern ein kaputter Prozess. Das Produkt brauchte ein Designfundament, das stark genug war, diese Wette zu tragen — und es hatte keines.",
      process: [
        {
          heading: "Domäne und Schuld in einem Zug kartiert",
          body: "Ich kam als aiios erster Designer und las daher zwei Dinge parallel: die BPMN-Domäne und ihre nicht-technischen Nutzer, und das Produkt genau so, wie Entwickler es gebaut hatten. Der Audit machte die Lücke klar — leistungsfähige Software, aber von Screen zu Screen inkonsistent, ohne gemeinsame Sprache, die sie zusammenhielt.",
        },
        {
          heading: "Eine neue Richtung auf der Marke — und ein echtes System darunter",
          body: "Ich setzte eine neue Designrichtung, verankert in aiios Corporate Identity: innovativer, konsistenter, ruhiger als die entwicklergebaute UI, die sie ersetzte. Die größere Entscheidung war, keine Einzel-Screens mehr auszuliefern, sondern ein System zu bauen — die agentische 2.0-Vision konnte nur auf einem Fundament vertrauenswürdig wirken, das sich überall vorhersehbar verhielt.",
        },
        {
          heading: "Das System bauen, während das Produkt neu gestaltet wird",
          body: "Ich verantwortete die Farbtokens und baute aiios erste Figma-Komponentenbibliothek — neue, aus der Marke abgeleitete Komponenten — parallel zur Neugestaltung selbst. Die Leitregel kam direkt von den Nutzern: BPMN für nicht-technische Teams muss wirklich einfach sein und per Design fehlerintolerant — die Oberfläche führt dich, damit der falsche Schritt schwer zu machen ist.",
        },
        {
          heading: "Als produktives 2.0 ausgeliefert",
          body: "Es ging live. aiio 2.0 ist ausgeliefert und läuft jetzt unter einem neuen Namen — Process Collector — mit dem Designfundament (Tokens, Komponenten, Richtung) als Basis des Produkts, nicht als Farbschicht über dem Alten.",
        },
      ],
      outcomes: [
        { label: "aiios erstes Designsystem, von Grund auf gebaut" },
        { label: "Als 2.0 ausgeliefert — jetzt Process Collector" },
        { label: "Alleinige Designverantwortung für das Produkt" },
      ],
      reflection:
        "Das Designsystem parallel zur Neugestaltung zu bauen, ließ das Fundament unter dem Produkt wandern — ich lieferte ein Pattern aus und musste es dann überarbeiten, während das System reifte. Nächstes Mal würde ich zuerst einen kleinen, strikten Token-Kern festzurren und die Bibliothek daraus wachsen lassen, statt beides zugleich zu entwickeln. Als erster Designer lernte ich außerdem: Ein System hält nur, wenn die Entwickler es mit mir tragen — also verbrachte ich ebenso viel Zeit damit, das Warum abzustimmen wie die Komponenten selbst.",
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
