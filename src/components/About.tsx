"use client";

import Image from "next/image";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function About() {
  const { t } = useLocale();
  const { languages, credentials } = t.about;
  return (
    <Section id="about" index="04" label={t.about.label} title={t.about.title}>
      <div className="grid gap-12 md:grid-cols-12 md:gap-8">
        {/* Portrait */}
        <div className="md:col-span-5 lg:col-span-4">
          <Reveal>
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-hairline bg-hairline">
                <Image
                  src="/portrait.jpg"
                  alt={t.about.portraitCaption}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 42vw, 33vw"
                  className="object-cover object-[center_28%]"
                />
              </div>
              <figcaption className="mt-3 font-sans text-xs text-muted">
                {t.about.portraitCaption}
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* Story + facts */}
        <div className="md:col-span-7 lg:col-span-7 lg:col-start-6">
          <div className="max-w-measure space-y-5 text-lg leading-relaxed text-ink/90">
            <Reveal>
              <p>{t.about.p1}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <p>{t.about.p2}</p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-10 border-t border-hairline pt-8 sm:grid-cols-2">
            <div>
              <p className="side-label">{t.about.languagesLabel}</p>
              <ul className="mt-4 space-y-2 font-sans text-sm">
                {languages.map((l) => (
                  <li key={l.name} className="flex justify-between gap-4">
                    <span className="text-ink">{l.name}</span>
                    <span className="text-muted">{l.level}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="side-label">{t.about.credentialsLabel}</p>
              <ul className="mt-4 space-y-3 text-sm">
                {credentials.map((c) => (
                  <li key={c.title}>
                    <span className="block text-ink">{c.title}</span>
                    <span className="block font-sans text-xs text-muted">{c.org}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
