"use client";

import { Reveal } from "./Reveal";
import { useLocale } from "@/lib/i18n/LocaleProvider";

/** Experience timeline — hairline-ruled rows, editorial rhythm. */
export function Experience({ label }: { label?: string }) {
  const { t } = useLocale();
  const experience = t.experience.items;
  return (
    <div>
      <p className="side-label">{label ?? t.experience.label}</p>
      <ul className="mt-6">
        {experience.map((job, i) => (
          <Reveal as="li" key={`${job.org}-${i}`} delay={i * 0.04}>
            <div className="grid gap-2 border-t border-hairline py-6 sm:grid-cols-12 sm:gap-6">
              <p className="font-sans text-xs text-muted sm:col-span-3">{job.period}</p>
              <div className="sm:col-span-9">
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  {job.role} <span className="text-muted">— {job.org}</span>
                </h3>
                <p className="mt-1 font-sans text-xs text-muted">{job.location}</p>
                <p className="mt-3 max-w-measure leading-relaxed text-muted">{job.note}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
