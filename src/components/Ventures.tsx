"use client";

import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { ventures } from "@/lib/content/ventures";

/** The ecosystem — a compact, confident row. Supporting cast, not the star. */
export function Ventures() {
  const { t } = useLocale();
  return (
    <Section id="ventures" index="05" label={t.ventures.label} title={t.ventures.title} lead={t.ventures.lead}>
      <ul className="grid gap-px overflow-hidden rounded-sm border border-hairline bg-hairline sm:grid-cols-2">
        {ventures.map((v, i) => {
          const item = t.ventures.items[i];
          const kind = item?.kind ?? v.kind;
          const line = item?.line ?? v.line;
          const status = v.status === "In development" ? t.ventures.inDevelopment : v.status;
          const inner = (
            <div className="flex h-full flex-col bg-paper p-6 transition-colors group-hover:bg-accent/[0.04] sm:p-8">
              {/* Name leads */}
              <h3 className="font-display text-xl font-semibold tracking-tight transition-colors group-hover:text-accent">
                {v.name}
              </h3>
              {/* Category — quiet label, not competing */}
              <p className="side-label mt-2">{kind}</p>
              {/* Description — constrained measure */}
              <p className="mt-4 max-w-[42ch] text-sm leading-relaxed text-muted">{line}</p>
              {/* Footer anchored to the bottom: CTA (accent) or status */}
              <div className="mt-auto pt-6">
                {v.external ? (
                  <span className="inline-flex items-center gap-1.5 font-sans text-sm text-accent">
                    {t.cta.visitSite}
                    <span className="transition-transform group-hover:translate-x-0.5">↗</span>
                  </span>
                ) : status ? (
                  <span className="side-label">{status}</span>
                ) : null}
              </div>
            </div>
          );

          return (
            <Reveal as="li" key={v.name} delay={i * 0.04}>
              {v.external ? (
                <a href={v.href} target="_blank" rel="noreferrer" className="group block h-full">
                  {inner}
                </a>
              ) : (
                <div className="block h-full">{inner}</div>
              )}
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
