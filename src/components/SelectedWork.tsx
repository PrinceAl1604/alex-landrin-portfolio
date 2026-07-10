"use client";

import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { WorkCard } from "./WorkCard";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { projects } from "@/lib/content/projects";

export function SelectedWork() {
  const { t } = useLocale();
  return (
    <Section id="work" index="02" label={t.work.label} title={t.work.title} lead={t.work.lead}>
      <div>
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.04} as="div">
            <WorkCard project={project} reversed={i % 2 === 1} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
