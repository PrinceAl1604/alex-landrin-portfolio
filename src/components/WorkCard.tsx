"use client";

import Link from "next/link";
import { Placeholder } from "./Placeholder";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import type { Project } from "@/lib/content/projects";
import { localizeProject } from "@/lib/content/projects.i18n";

/**
 * Editorial index card — behaves like an entry in a well-set catalogue.
 * The whole card is one link: on hover the folio index + title lift to accent,
 * the cover eases up under a soft shadow, and the arrow shifts.
 */
export function WorkCard({ project, reversed = false }: { project: Project; reversed?: boolean }) {
  const { t, locale } = useLocale();
  const p = localizeProject(project, locale);

  return (
    <Link
      href={`/work/${p.slug}`}
      className="group block border-t border-hairline py-10 outline-offset-4 first:border-t-0 sm:py-14"
      aria-label={`${t.cta.viewCaseStudy}: ${p.title}`}
    >
      <div className="grid gap-6 md:grid-cols-12 md:items-center md:gap-12 lg:gap-16">
        {/* Text column — moves to the right on reversed (even) rows */}
        <div className={`md:col-span-6 lg:col-span-5 ${reversed ? "md:order-2" : ""}`}>
          {/* Folio index + tags */}
          <div className="flex items-baseline gap-4">
            <span className="font-display text-2xl font-semibold leading-none tnum text-muted/60 transition-colors group-hover:text-accent">
              {p.index}
            </span>
            <span className="side-label">{p.tags.join(" · ")}</span>
          </div>

          <h3 className="mt-5 font-display text-display-sm font-semibold tracking-tight transition-colors group-hover:text-accent">
            {p.title}
          </h3>

          <p className="mt-3 max-w-measure text-base leading-relaxed text-muted">
            {p.summary}
          </p>

          {/* Meta — role + timeframe, set off by a hairline */}
          <dl className="mt-6 grid grid-cols-[5rem_1fr] gap-x-4 gap-y-2 border-t border-hairline pt-5 text-sm">
            <dt className="side-label pt-px">{t.caseStudy.role}</dt>
            <dd className="text-ink/85">{p.role}</dd>
            <dt className="side-label pt-px">{t.caseStudy.timeframe}</dt>
            <dd className="tnum text-ink/85">{p.timeframe}</dd>
          </dl>

          {/* CTA */}
          <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors group-hover:text-accent">
            <span className="border-b border-transparent pb-px transition-colors group-hover:border-accent/40">
              {t.cta.viewCaseStudy}
            </span>
            <span
              aria-hidden
              className="transition-transform duration-200 ease-editorial group-hover:translate-x-1"
            >
              →
            </span>
          </span>
        </div>

        {/* Visual column — moves to the left on reversed (even) rows */}
        <div className={`md:col-span-6 lg:col-span-7 ${reversed ? "md:order-1" : ""}`}>
          <div className="overflow-hidden rounded-md bg-paper shadow-[0_1px_2px_rgb(0_0_0/0.04)] ring-1 ring-hairline transition-shadow duration-500 ease-editorial group-hover:shadow-[0_18px_48px_-16px_rgb(0_0_0/0.22)]">
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
