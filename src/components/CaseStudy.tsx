"use client";

import Link from "next/link";
import { Container } from "./Section";
import { Reveal } from "./Reveal";
import { Placeholder } from "./Placeholder";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import type { Project } from "@/lib/content/projects";
import { getAdjacentProjects } from "@/lib/content/projects";
import { localizeProject } from "@/lib/content/projects.i18n";

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
              <span className="side-label tnum">§{p.index}</span>
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
                <dd className="mt-2 text-ink/90">{p.timeframe}</dd>
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
            <Placeholder src={p.cover.src} ratio={p.cover.ratio} caption={p.cover.caption} fade />
          </div>
        </Reveal>

        {/* Problem */}
        <Reveal>
          <section className="mt-20 grid gap-6 md:grid-cols-12">
            <h2 className="side-label md:col-span-3">{t.caseStudy.problem}</h2>
            <p className="max-w-measure text-lg leading-relaxed text-ink/90 md:col-span-9">
              {p.problem}
            </p>
          </section>
        </Reveal>

        {/* Process — numbers earned here (sequential) */}
        <section className="mt-20">
          <Reveal>
            <h2 className="side-label border-t border-hairline pt-4">{t.caseStudy.process}</h2>
          </Reveal>
          <ol className="mt-8 space-y-px overflow-hidden rounded-sm border border-hairline bg-hairline">
            {p.process.map((step, i) => (
              <Reveal as="li" key={step.phase} delay={i * 0.04}>
                <div className="grid gap-4 bg-paper p-6 sm:grid-cols-12 sm:gap-8 sm:p-8">
                  <div className="sm:col-span-3">
                    <span className="side-label tnum">{String(i + 1).padStart(2, "0")}</span>
                    <p className="mt-2 font-sans text-xs uppercase tracking-[0.1em] text-accent">
                      {step.phase}
                    </p>
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
            <h2 className="side-label border-t border-hairline pt-4">
              {p.gallery ? t.caseStudy.gallery : t.caseStudy.artifacts}
            </h2>
          </Reveal>
          {p.gallery && p.galleryItems ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {p.galleryItems.map((item, i) => (
                <Reveal key={item.src} delay={i * 0.03}>
                  <Placeholder src={item.src} ratio={item.ratio} caption={item.caption} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {p.artifacts.map((item, i) => (
                <Reveal key={item.src} delay={i * 0.04} className={i === 0 ? "md:col-span-2" : ""}>
                  <Placeholder src={item.src} ratio={item.ratio} caption={item.caption} />
                </Reveal>
              ))}
            </div>
          )}
        </section>

        {/* Outcome */}
        <section className="mt-20">
          <Reveal>
            <h2 className="side-label border-t border-hairline pt-4">{t.caseStudy.outcome}</h2>
          </Reveal>
          <dl className="mt-8 grid gap-8 sm:grid-cols-3">
            {p.outcomes.map((o, i) => (
              <Reveal key={o.label} delay={i * 0.05}>
                <dt className="font-display text-display-sm font-bold tracking-tight text-accent tnum">
                  {o.value}
                </dt>
                <dd className="mt-2 max-w-[24ch] text-sm leading-relaxed text-muted">{o.label}</dd>
              </Reveal>
            ))}
          </dl>
        </section>

        {/* Reflection */}
        <Reveal>
          <section className="mt-20 grid gap-6 md:grid-cols-12">
            <h2 className="side-label md:col-span-3">{t.caseStudy.reflection}</h2>
            <p className="max-w-measure text-lg leading-relaxed text-ink/90 md:col-span-9">
              {p.reflection}
            </p>
          </section>
        </Reveal>

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
