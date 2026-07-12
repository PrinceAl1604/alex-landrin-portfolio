"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "./Section";
import { staggerContainer, staggerItem } from "./Reveal";
import { useLocale } from "@/lib/i18n/LocaleProvider";

/**
 * Full-bleed video hero. The Cover Home video autoplays (muted, looped) behind
 * the content, with a bottom-weighted scrim so the light text stays legible on
 * any frame. Under prefers-reduced-motion the video doesn't autoplay — the
 * poster frame stands in.
 */
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

      {/* Scrim — only at the bottom where the text sits; the top stays clear
         so the video is fully visible. */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"
        aria-hidden
      />

      {/* Content */}
      <Container className="relative z-10 flex flex-col justify-end pb-16 pt-28 sm:pb-20">
        <motion.div variants={container} initial={initial} animate={animate}>
          <motion.p variants={item} className="side-label flex items-center gap-3 !text-white/70">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" aria-hidden />
            {t.hero.eyebrow}
          </motion.p>

          <h1 id="hero-heading" className="mt-6 font-display font-bold leading-[0.95] text-white text-[clamp(2.25rem,6vw,5.5rem)]">
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
        </motion.div>
      </Container>
    </section>
  );
}
