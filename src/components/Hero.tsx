"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "./Section";
import { staggerContainer, staggerItem } from "./Reveal";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { contact } from "@/lib/content/profile";

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
      className="relative -mt-[72px] flex min-h-[56vh] w-full overflow-hidden bg-[#0d0d0c] sm:min-h-[68vh]"
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

      {/* Scrim — darker at the bottom where the text sits */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20"
        aria-hidden
      />

      {/* Content */}
      <Container className="relative z-10 flex flex-col justify-end pb-10 pt-24 sm:pb-14">
        <motion.div variants={container} initial={initial} animate={animate}>
          <motion.p variants={item} className="side-label flex items-center gap-3 !text-white/70">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#6FBEB0]" aria-hidden />
            {t.hero.eyebrow}
          </motion.p>

          <h1 id="hero-heading" className="mt-5 font-display font-bold leading-[0.92] text-white text-[clamp(2.25rem,6.5vw,6rem)]">
            <motion.span variants={item} className="block">
              {t.hero.headlineA}
            </motion.span>
            <motion.span variants={item} className="block text-[#6FBEB0]">
              {t.hero.headlineB}
            </motion.span>
          </h1>

          <motion.p
            variants={item}
            className="mt-5 max-w-measure text-lg leading-relaxed text-white/80 sm:text-xl sm:leading-relaxed"
          >
            {t.hero.lead}
          </motion.p>

          {/* Availability — quiet status line */}
          <motion.p variants={item} className="mt-5 flex items-center gap-2 font-sans text-sm text-white/90">
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#6FBEB0]/60 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#6FBEB0]" />
            </span>
            {t.hero.availability}
          </motion.p>

          {/* CTAs — light variants for contrast on the video */}
          <motion.div variants={item} className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="press group rounded-full bg-white px-5 py-3 font-sans text-sm text-black hover:bg-[#6FBEB0]"
            >
              {t.cta.viewWork}{" "}
              <span className="inline-block transition-transform duration-300 ease-editorial group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href={contact.cv}
              download
              className="press group rounded-full border border-white/40 px-5 py-3 font-sans text-sm text-white backdrop-blur-sm hover:border-white hover:bg-white/10"
            >
              {t.cta.downloadCv}{" "}
              <span className="inline-block transition-transform duration-300 ease-editorial group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
          </motion.div>

          {/* Direct contact — always visible in hero */}
          <motion.div variants={item} className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-sans text-sm text-white/70">
            <a
              href={`mailto:${contact.email}`}
              className="underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              {contact.email}
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              {contact.linkedinLabel} ↗
            </a>
            <span>{t.about.location}</span>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
