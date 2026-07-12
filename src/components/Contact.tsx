"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { contact } from "@/lib/content/profile";

export function Contact() {
  const { t } = useLocale();

  // Copy-email microinteraction: trigger → copy → "Copied" feedback → reset.
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const onCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current); // handle repeat taps
      timer.current = setTimeout(() => setCopied(false), 2000); // closed loop
    } catch {
      // Clipboard blocked — the mailto link above still works as a fallback.
    }
  }, []);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  return (
    <Section id="contact" index="06" label={t.contact.label} title={t.contact.title} lead={t.contact.lead}>
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <Reveal>
            <a
              href={`mailto:${contact.email}`}
              className="group inline-flex items-baseline gap-3 font-display text-display-sm font-semibold tracking-tight transition-colors hover:text-accent"
            >
              {contact.email}
              <span className="text-2xl transition-transform group-hover:translate-x-1">→</span>
            </a>
          </Reveal>

          <Reveal delay={0.03}>
            <button
              type="button"
              onClick={onCopy}
              className="press mt-4 inline-flex items-center gap-2 font-sans text-sm text-muted hover:text-ink"
            >
              <span aria-hidden className="text-base leading-none">
                {copied ? "✓" : "⧉"}
              </span>
              <span aria-live="polite" className={copied ? "text-accent" : ""}>
                {copied ? t.cta.copied : t.cta.copyEmail}
              </span>
            </button>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${contact.email}`}
                className="press group rounded-full bg-ink px-5 py-3 font-sans text-sm text-paper hover:bg-accent"
              >
                {t.cta.emailMe}{" "}
                <span className="inline-block transition-transform duration-300 ease-editorial group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="press rounded-full border border-ink px-5 py-3 font-sans text-sm text-ink hover:border-accent hover:text-accent"
              >
                {contact.linkedinLabel} ↗
              </a>
              <a
                href={contact.cv}
                download
                className="press rounded-full border border-ink px-5 py-3 font-sans text-sm text-ink hover:border-accent hover:text-accent"
              >
                {t.cta.downloadCv} ↓
              </a>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-5">
          <Reveal delay={0.1}>
            <dl className="space-y-6 border-t border-hairline pt-6 font-sans text-sm sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
              <div>
                <dt className="side-label">{t.contact.locationLabel}</dt>
                <dd className="mt-2 text-ink">{t.about.location}</dd>
              </div>
              <div>
                <dt className="side-label">{t.contact.availabilityLabel}</dt>
                <dd className="mt-2 flex items-center gap-2 text-ink">
                  <span className="relative flex h-2 w-2" aria-hidden>
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/50 motion-reduce:hidden" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  {t.hero.availabilityShort}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
