"use client";

import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { tools } from "@/lib/content/profile";

/** Capabilities set typographically — never skill bars or percentages. */
export function Capabilities() {
  const { t } = useLocale();
  const disciplines = t.capabilities.disciplines;
  return (
    <Section id="capabilities" index="03" label={t.capabilities.label} title={t.capabilities.title}>
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="side-label">{t.capabilities.disciplinesLabel}</p>
          <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-4">
            {disciplines.map((d, i) => (
              <Reveal as="li" key={d} delay={i * 0.03}>
                <span className="font-display text-xl font-medium tracking-tight sm:text-2xl">
                  {d}
                </span>
                {i < disciplines.length - 1 ? (
                  <span className="ml-3 text-hairline" aria-hidden>
                    /
                  </span>
                ) : null}
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="md:col-span-5">
          <p className="side-label">{t.capabilities.toolsLabel}</p>
          <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 font-sans text-sm text-muted">
            {tools.map((tool, i) => (
              <Reveal as="li" key={tool} delay={i * 0.02} className="flex items-center gap-2">
                <span className="text-accent" aria-hidden>
                  —
                </span>
                <span className="text-ink/80">{tool}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
