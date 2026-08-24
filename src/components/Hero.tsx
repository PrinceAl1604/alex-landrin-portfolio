"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "./Section";
import { staggerContainer, staggerItem } from "./Reveal";
import { useLocale } from "@/lib/i18n/LocaleProvider";

/**
 * Full-bleed video hero, laid out as an editorial "system" front page:
 * eyebrow pill, oversized headline + lead bottom-left, an availability +
 * CTA block bottom-right, and a row of technical corner micro-labels along
 * the base — the page presenting itself as a design system.
 *
 * The hero is a deliberately fixed-dark art-directed zone (bg #0d0d0c), so a
 * few values are set for that context regardless of theme: light text, and
 * #6FBEB0 (the brand pine lifted for dark surfaces) for the small accents.
 * Under prefers-reduced-motion the video doesn't autoplay — the poster stands in.
 */

/** Brand pine tuned for the always-dark hero surface (mirrors --accent in .dark). */
const PINE = "#6FBEB0";

export function Hero() {
  const { t } = useLocale();
  const reduce = useReducedMotion();

  const container = reduce ? undefined : staggerContainer;
  const item = reduce ? undefined : staggerItem;
  const initial = reduce ? undefined : "hidden";
  const animate = reduce ? undefined : "show";

  return (
    <section
      className="relative -mt-[72px] flex min-h-[100svh] w-full overflow-hidden bg-[#0d0d0c]"
      aria-labelledby="hero-heading"
    >
      {/* Video background */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        poster="/hero-poster.jpg"
        autoPlay={!reduce}
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
        tabIndex={-1}
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Scrim — bottom-weighted so the light text stays legible on any frame,
         while the top of the video stays clear. */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"
        aria-hidden
      />

      {/* Content */}
      <Container className="relative z-10 flex flex-col justify-end pb-10 pt-28 sm:pb-12">
        <motion.div variants={container} initial={initial} animate={animate}>
          {/* Eyebrow pill */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 backdrop-blur-sm">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: PINE }}
                aria-hidden
              />
              <span className="side-label !text-white/75">{t.hero.eyebrow}</span>
            </span>
          </motion.div>

          {/* Headline + lead (left) / availability + CTAs (right) */}
          <div className="mt-8 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <div className="lg:max-w-3xl">
              <h1
                id="hero-heading"
                className="font-display font-bold leading-[0.95] text-white text-[clamp(2.25rem,6vw,5.5rem)]"
              >
                <motion.span variants={item} className="block">
                  {t.hero.headlineA}
                </motion.span>
                <motion.span variants={item} className="block">
                  {t.hero.headlineB}
                </motion.span>
              </h1>

              <motion.p
                variants={item}
                className="mt-7 max-w-measure text-lg leading-relaxed text-white/80 sm:text-xl sm:leading-relaxed"
              >
                {t.hero.lead}
              </motion.p>
            </div>

            {/* Availability + CTAs */}
            <motion.div
              variants={item}
              className="flex shrink-0 flex-col gap-5 lg:items-end lg:text-right"
            >
              <p className="flex items-center gap-2 text-sm leading-relaxed text-white/70 lg:justify-end">
                <span
                  className="inline-block h-2 w-2 shrink-0 rounded-full"
                  style={{ backgroundColor: PINE }}
                  aria-hidden
                />
                <span className="max-w-[34ch]">{t.hero.availability}</span>
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="/#work"
                  className="press group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-[#0d0d0c] hover:brightness-105"
                  style={{ backgroundColor: PINE }}
                >
                  {t.cta.viewWork}
                  <span
                    aria-hidden
                    className="transition-transform duration-200 ease-editorial group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                  >
                    ↗
                  </span>
                </a>
                <a
                  href="/#contact"
                  className="press group inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10"
                >
                  {t.cta.getInTouch}
                  <span
                    aria-hidden
                    className="transition-transform duration-200 ease-editorial group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                  >
                    ↗
                  </span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Technical corner micro-labels — the page as a system */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-2 border-t border-white/15 pt-4 sm:justify-between"
          >
            {t.hero.tags.map((tag) => (
              <span key={tag} className="side-label !text-white/50">
                <span style={{ color: PINE }} aria-hidden>
                  +
                </span>{" "}
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
