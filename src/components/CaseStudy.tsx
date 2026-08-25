"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Container } from "./Section";
import { Reveal } from "./Reveal";
import { Placeholder } from "./Placeholder";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import type { Project } from "@/lib/content/projects";
import { getAdjacentProjects } from "@/lib/content/projects";
import { localizeProject } from "@/lib/content/projects.i18n";

/** Section label with the pine "+" systems motif, on a top hairline. */
function SectionLabel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`side-label border-t border-hairline pt-4 ${className}`}>
      <span className="text-accent" aria-hidden>
        +{" "}
      </span>
      {children}
    </h2>
  );
}

export function CaseStudy({ project }: { project: Project }) {
  const { t, locale } = useLocale();
  const p = localizeProject(project, locale);
  const { prev, next } = getAdjacentProjects(p.slug);

  return (
    <article className="pb-24 pt-12">
      <Container>
        <Reveal>
          <Link href="/#work" className="font-sans text-sm text-muted transition-colors hover:text-accent">
            ← {t.cta.viewAllWork}
          </Link>
        </Reveal>

        {/* Header */}
        <header className="mt-10 border-t border-hairline pt-8">
          <Reveal>
            <div className="flex items-baseline gap-4">
              <span className="font-display text-2xl font-semibold leading-none tnum text-muted/70">
                §{p.index}
              </span>
              <span className="side-label">{p.tags.join(" · ")}</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-display-md font-bold tracking-tight">
              {p.title}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-measure text-xl leading-relaxed text-muted">{p.summary}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <dl className="mt-10 grid gap-6 border-t border-hairline pt-6 font-sans text-sm sm:grid-cols-3">
              <div>
                <dt className="side-label">{t.caseStudy.role}</dt>
                <dd className="mt-2 text-ink/90">{p.role}</dd>
              </div>
              <div>
                <dt className="side-label">{t.caseStudy.timeframe}</dt>
                <dd className="mt-2 tnum text-ink/90">{p.timeframe}</dd>
              </div>
              <div>
                <dt className="side-label">{t.caseStudy.tools}</dt>
                <dd className="mt-2 text-ink/90">{p.tools.join(", ")}</dd>
              </div>
            </dl>
          </Reveal>
        </header>

        {/* Cover */}
        <Reveal delay={0.1}>
          <div className="mt-12">
            <Placeholder
              src={p.cover.src}
              ratio={p.cover.ratio}
              caption={p.cover.caption}
              framed
              quality={95}
              sizes="(min-width: 1024px) 1150px, 100vw"
            />
          </div>
        </Reveal>

        {/* Problem */}
        <section className="mt-20">
          <Reveal>
            <SectionLabel>{t.caseStudy.problem}</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-8 md:grid md:grid-cols-12">
              <p className="max-w-measure text-lg leading-relaxed text-ink/90 md:col-span-9 md:col-start-4">
                {p.problem}
              </p>
            </div>
          </Reveal>
        </section>

        {/* Process — numbers earned here (sequential) */}
        <section className="mt-20">
          <Reveal>
            <SectionLabel>{t.caseStudy.process}</SectionLabel>
          </Reveal>
          <ol className="mt-8 space-y-px overflow-hidden rounded-sm border border-hairline bg-hairline">
            {p.process.map((step, i) => (
              <Reveal as="li" key={step.phase} delay={i * 0.04}>
                <div className="grid gap-4 bg-paper p-6 sm:grid-cols-12 sm:gap-8 sm:p-8">
                  <div className="sm:col-span-3">
                    <span className="font-display text-xl font-semibold leading-none tnum text-muted/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-3 side-label !text-accent">{step.phase}</p>
                  </div>
                  <div className="sm:col-span-9">
                    <h3 className="font-display text-xl font-semibold tracking-tight">{step.heading}</h3>
                    <p className="mt-2 max-w-measure leading-relaxed text-muted">{step.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* Artifacts / gallery */}
        <section className="mt-20">
          <Reveal>
            <SectionLabel>{p.gallery ? t.caseStudy.gallery : t.caseStudy.artifacts}</SectionLabel>
          </Reveal>
          {p.gallery && p.galleryItems ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {p.galleryItems.map((item, i) => (
                <Reveal key={item.src} delay={i * 0.03}>
                  <Placeholder src={item.src} ratio={item.ratio} caption={item.caption} framed />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {p.artifacts.map((item, i) => (
                <Reveal key={item.src} delay={i * 0.04} className={i === 0 ? "md:col-span-2" : ""}>
                  <Placeholder src={item.src} ratio={item.ratio} caption={item.caption} framed />
                </Reveal>
              ))}
            </div>
          )}
        </section>

        {/* Outcome */}
        <section className="mt-20">
          <Reveal>
            <SectionLabel>{t.caseStudy.outcome}</SectionLabel>
          </Reveal>
          <dl className="mt-8 grid gap-8 sm:grid-cols-3">
            {p.outcomes.map((o, i) => (
              <Reveal key={o.label} delay={i * 0.05}>
                <div className="border-t border-hairline pt-5">
                  <dt className="font-display text-display-sm font-bold tracking-tight text-accent tnum">
                    {o.value}
                  </dt>
                  <dd className="mt-2 max-w-[24ch] text-sm leading-relaxed text-muted">{o.label}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </section>

        {/* Reflection — the payoff, given a touch more weight */}
        <section className="mt-20">
          <Reveal>
            <SectionLabel>{t.caseStudy.reflection}</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-8 md:grid md:grid-cols-12">
              <p className="max-w-measure text-xl leading-relaxed text-ink md:col-span-9 md:col-start-4">
                {p.reflection}
              </p>
            </div>
          </Reveal>
        </section>

        {/* Prev / next */}
        <nav className="mt-24 grid gap-px overflow-hidden rounded-sm border border-hairline bg-hairline sm:grid-cols-2" aria-label="Case studies">
          {prev ? (
            <Link href={`/work/${prev.slug}`} className="group bg-paper p-6 transition-colors hover:bg-accent/[0.04] sm:p-8">
              <span className="font-sans text-xs text-muted">← {t.caseStudy.prev}</span>
              <span className="mt-2 block font-display text-xl font-semibold tracking-tight transition-colors group-hover:text-accent">
                {prev.title}
              </span>
            </Link>
          ) : (
            <span className="bg-paper p-6 sm:p-8" />
          )}
          {next ? (
            <Link href={`/work/${next.slug}`} className="group bg-paper p-6 text-right transition-colors hover:bg-accent/[0.04] sm:p-8">
              <span className="font-sans text-xs text-muted">{t.caseStudy.next} →</span>
              <span className="mt-2 block font-display text-xl font-semibold tracking-tight transition-colors group-hover:text-accent">
                {next.title}
              </span>
            </Link>
          ) : (
            <span className="bg-paper p-6 sm:p-8" />
          )}
        </nav>
      </Container>
    </article>
  );
}
