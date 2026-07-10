"use client";

import Link from "next/link";
import { Placeholder } from "./Placeholder";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import type { Project } from "@/lib/content/projects";
import { localizeProject } from "@/lib/content/projects.i18n";

/**
 * Editorial index card — behaves like a card in a well-set catalogue.
 * Whole card is one link; hover lifts the title to accent and shifts the arrow.
 */
export function WorkCard({ project, reversed = false }: { project: Project; reversed?: boolean }) {
  const { t, locale } = useLocale();
  const p = localizeProject(project, locale);

  return (
    <Link
      href={`/work/${p.slug}`}
      className="group block border-t border-hairline py-8 outline-offset-4 first:border-t-0 sm:py-10"
      aria-label={`${t.cta.viewCaseStudy}: ${p.title}`}
    >
      <div className="grid gap-6 md:grid-cols-12 md:gap-8">
        {/* Text column — moves to the right on reversed (even) rows */}
        <div className={`md:col-span-6 lg:col-span-5 ${reversed ? "md:order-2" : ""}`}>
          <div className="flex items-baseline gap-4">
            <span className="side-label tnum">{p.index}</span>
            <span className="side-label">{p.tags.join(" · ")}</span>
          </div>

          <h3 className="mt-4 font-display text-display-sm font-semibold tracking-tight transition-colors group-hover:text-accent">
            {p.title}
          </h3>

          <p className="mt-3 max-w-measure text-base leading-relaxed text-muted">
            {p.summary}
          </p>

          <dl className="mt-6 space-y-1.5 font-sans text-xs text-muted">
            <div className="flex gap-3">
              <dt className="w-20 shrink-0 uppercase tracking-[0.1em]">{t.caseStudy.role}</dt>
              <dd className="text-ink/80">{p.role}</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-20 shrink-0 uppercase tracking-[0.1em]">{t.caseStudy.timeframe}</dt>
              <dd className="text-ink/80">{p.timeframe}</dd>
            </div>
          </dl>

          <span className="mt-6 inline-flex items-center gap-2 font-sans text-sm text-ink transition-colors group-hover:text-accent">
            {t.cta.viewCaseStudy}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </span>
        </div>

        {/* Visual column — moves to the left on reversed (even) rows */}
        <div className={`md:col-span-6 lg:col-span-7 ${reversed ? "md:order-1" : ""}`}>
          <div className="overflow-hidden rounded-sm">
            <div className="transition-transform duration-500 ease-editorial group-hover:scale-[1.015] motion-reduce:transform-none">
              <Placeholder
                src={p.cover.src}
                ratio={p.cover.ratio}
                alt={`${p.title} — ${p.cover.caption}`}
                fade
                quality={95}
                sizes="(min-width: 1024px) 780px, (min-width: 768px) 55vw, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
