"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { locales, localeNames } from "@/lib/i18n/dictionaries";
import { contact, site } from "@/lib/content/profile";

/** Compact segmented EN/DE/FR toggle — switches the whole site's language. */
function LangToggle({ onDark = false, className = "" }: { onDark?: boolean; className?: string }) {
  const { t, locale, setLocale } = useLocale();
  return (
    <div
      role="group"
      aria-label={t.footer.language}
      className={`flex items-center gap-0.5 rounded-full border p-0.5 font-sans text-xs ${
        onDark ? "border-white/30" : "border-hairline"
      } ${className}`}
    >
      {locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
          className={`press rounded-full px-2.5 py-1 ${
            locale === l
              ? onDark
                ? "bg-white text-black"
                : "bg-ink text-paper"
              : onDark
                ? "text-white/60 hover:text-white"
                : "text-muted hover:text-ink"
          }`}
        >
          {localeNames[l]}
        </button>
      ))}
    </div>
  );
}

export function Nav() {
  const { t } = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Only the home page has the dark video hero; while pinned at the top there,
  // the nav floats over it as dark glass with light content.
  const overHero = pathname === "/" && !scrolled && !open;

  const links = [
    { href: "/#work", label: t.nav.work },
    { href: "/#about", label: t.nav.about },
    { href: "/#ventures", label: t.nav.ventures },
    { href: "/#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        overHero
          ? "border-transparent"
          : `glass ${scrolled ? "border-hairline" : "border-transparent"}`
      }`}
    >
      <nav
        className={`mx-auto flex max-w-shell items-center justify-between px-gutter py-4 ${
          overHero ? "[filter:drop-shadow(0_1px_3px_rgb(0_0_0_/_0.6))]" : ""
        }`}
        aria-label="Primary"
      >
        <Link
          href="/"
          aria-label={`${site.name} — home`}
          className="group -my-1 block rounded-full outline-offset-4"
        >
          <Image
            src="/avatar.png"
            alt={site.name}
            width={40}
            height={40}
            priority
            className={`h-10 w-10 rounded-full ring-1 transition-transform duration-300 ease-editorial group-hover:scale-105 ${
              overHero ? "ring-white/30" : "ring-hairline"
            }`}
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7 font-sans text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`link-underline transition-colors ${
                    overHero ? "text-white/75 hover:text-white" : "text-muted hover:text-ink"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <LangToggle onDark={overHero} />
          <a
            href={contact.cv}
            download
            className={`press rounded-full border px-4 py-2 font-sans text-sm ${
              overHero
                ? "border-white/40 text-white hover:bg-white/10"
                : "border-ink bg-ink text-paper hover:bg-transparent hover:text-ink"
            }`}
          >
            {t.cta.downloadCv} ↓
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className={`font-sans text-sm md:hidden ${overHero ? "text-white" : "text-ink"}`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close ✕" : "Menu ☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {open ? (
        <div id="mobile-menu" className="glass border-t border-hairline md:hidden">
          <ul className="mx-auto flex max-w-shell flex-col gap-1 px-gutter py-4 font-sans text-base">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="block py-2 text-ink" onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="flex items-center justify-between gap-4 pt-3">
              <a
                href={contact.cv}
                download
                className="inline-block rounded-full border border-ink bg-ink px-4 py-2 text-paper"
                onClick={() => setOpen(false)}
              >
                {t.cta.downloadCv} ↓
              </a>
              <LangToggle />
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
