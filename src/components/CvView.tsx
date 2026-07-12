"use client";

import { Container } from "./Section";
import { Reveal } from "./Reveal";
import { Experience } from "./Experience";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { contact, site, tools } from "@/lib/content/profile";

export function CvView() {
  const { t } = useLocale();
  const disciplines = t.capabilities.disciplines;
  const { languages, credentials } = t.about;
  return (
    <article className="py-12">
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-hairline pb-8">
            <div>
              <p className="side-label">{t.nav.cv}</p>
              <h1 className="mt-3 font-display text-display-md font-bold tracking-tight">
                {site.fullName}
              </h1>
              <p className="mt-2 font-sans text-sm text-muted">
                {site.role} · {t.about.location}
              </p>
            </div>
            <a
              href={contact.cv}
              download
              className="rounded-full bg-ink px-5 py-3 font-sans text-sm text-paper transition-colors hover:bg-accent"
            >
              {t.cta.downloadCv} (PDF) ↓
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mt-8 max-w-measure text-lg leading-relaxed text-ink/90">{t.footer.tagline}</p>
        </Reveal>

        <div className="mt-16 grid gap-16 md:grid-cols-12">
          <div className="md:col-span-8">
            <Experience />
          </div>

          <aside className="md:col-span-4 md:border-l md:border-hairline md:pl-8">
            <div className="space-y-12">
              <div>
                <p className="side-label">{t.capabilities.disciplinesLabel}</p>
                <ul className="mt-4 space-y-1.5 font-sans text-sm text-ink/90">
                  {disciplines.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="side-label">{t.capabilities.toolsLabel}</p>
                <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5 font-sans text-sm text-muted">
                  {tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="side-label">{t.about.languagesLabel}</p>
                <ul className="mt-4 space-y-1.5 font-sans text-sm">
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
              <div>
                <p className="side-label">{t.contact.label}</p>
                <ul className="mt-4 space-y-1.5 font-sans text-sm">
                  <li>
                    <a href={`mailto:${contact.email}`} className="link">
                      {contact.email}
                    </a>
                  </li>
                  <li>
                    <a href={contact.linkedin} target="_blank" rel="noreferrer" className="link">
                      {contact.linkedinLabel} ↗
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </article>
  );
}
