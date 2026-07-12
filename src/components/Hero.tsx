"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "./Section";
import { staggerContainer, staggerItem } from "./Reveal";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { contact } from "@/lib/content/profile";

export function Hero() {
  const { t } = useLocale();
  const reduce = useReducedMotion();

  const container = reduce ? undefined : staggerContainer;
  const item = reduce ? undefined : staggerItem;
  const initial = reduce ? undefined : "hidden";
  const animate = reduce ? undefined : "show";

  return (
    <section className="relative pt-16 sm:pt-24 lg:pt-28" aria-labelledby="hero-heading">
      <Container>
        <motion.div variants={container} initial={initial} animate={animate}>
          <motion.p variants={item} className="side-label flex items-center gap-3">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            {t.hero.eyebrow}
          </motion.p>

          <h1 id="hero-heading" className="mt-8 font-display font-bold text-hero leading-[0.9]">
            <motion.span variants={item} className="block">
              {t.hero.headlineA}
            </motion.span>
            <motion.span variants={item} className="block text-accent">
              {t.hero.headlineB}
            </motion.span>
          </h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-measure text-lg leading-relaxed text-muted sm:text-xl sm:leading-relaxed"
          >
            {t.hero.lead}
          </motion.p>

          {/* Availability — quiet status line */}
          <motion.p variants={item} className="mt-6 flex items-center gap-2 font-sans text-sm text-ink">
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/50 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {t.hero.availability}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="press group rounded-full bg-ink px-5 py-3 font-sans text-sm text-paper hover:bg-accent"
            >
              {t.cta.viewWork}{" "}
              <span className="inline-block transition-transform duration-300 ease-editorial group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href={contact.cv}
              download
              className="press group rounded-full border border-ink px-5 py-3 font-sans text-sm text-ink hover:border-accent hover:text-accent"
            >
              {t.cta.downloadCv}{" "}
              <span className="inline-block transition-transform duration-300 ease-editorial group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
          </motion.div>

          {/* Direct contact — always visible in hero */}
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-sans text-sm text-muted">
            <a href={`mailto:${contact.email}`} className="link">
              {contact.email}
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="link">
              {contact.linkedinLabel} ↗
            </a>
            <span>{t.about.location}</span>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
