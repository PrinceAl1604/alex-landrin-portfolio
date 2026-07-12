"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/lib/theme/ThemeProvider";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { locales, localeNames } from "@/lib/i18n/dictionaries";
import { contact, site } from "@/lib/content/profile";

export function Footer() {
  const { theme, toggleTheme, gridVisible, toggleGrid } = useTheme();
  const { t, locale, setLocale } = useLocale();

  const links = [
    { href: "/#work", label: t.nav.work },
    { href: "/#about", label: t.nav.about },
    { href: "/cv", label: t.nav.cv },
  ];

  return (
    <footer className="on-brand border-t border-hairline">
      <div className="mx-auto max-w-shell px-gutter py-16">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Avatar + positioning */}
          <div className="md:col-span-5">
            <Link
              href="/"
              aria-label={`${site.name} — home`}
              className="inline-block rounded-full outline-offset-4"
            >
              <Image
                src="/avatar.png"
                alt={site.name}
                width={56}
                height={56}
                className="h-14 w-14 rounded-full ring-1 ring-ink/25"
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">{t.footer.tagline}</p>
          </div>

          {/* Nav */}
          <nav className="md:col-span-3" aria-label="Footer">
            <p className="side-label">Index</p>
            <ul className="mt-4 space-y-2 font-sans text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-ink transition-colors hover:text-accent">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div className="md:col-span-4">
            <p className="side-label">Connect</p>
            <ul className="mt-4 space-y-2 font-sans text-sm">
              <li>
                <a href={`mailto:${contact.email}`} className="text-ink transition-colors hover:text-accent">
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={contact.linkedin} target="_blank" rel="noreferrer" className="text-ink transition-colors hover:text-accent">
                  {contact.linkedinLabel} ↗
                </a>
              </li>
              <li>
                <a href={contact.cv} download className="text-ink transition-colors hover:text-accent">
                  {t.cta.downloadCv} ↓
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Controls row */}
        <div className="mt-14 flex flex-col gap-6 border-t border-hairline pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 font-sans text-xs">
            {/* Language toggle */}
            <div className="flex items-center gap-2">
              <span className="side-label">{t.footer.language}</span>
              <div className="flex items-center gap-1" role="group" aria-label={t.footer.language}>
                {locales.map((l) => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => setLocale(l)}
                    aria-pressed={locale === l}
                    className={`press rounded-full px-2 py-1 ${
                      locale === l ? "bg-ink text-paper" : "text-muted hover:text-ink"
                    }`}
                  >
                    {localeNames[l]}
                  </button>
                ))}
              </div>
            </div>

            {/* Theme toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="press group flex items-center gap-2 text-muted hover:text-ink"
              aria-pressed={theme === "dark"}
            >
              <span className="side-label">{t.footer.theme}</span>
              <span aria-hidden className="inline-block transition-transform duration-300 ease-editorial group-active:-rotate-45">
                {theme === "dark" ? "☾" : "☀"}
              </span>
              <span>{theme === "dark" ? t.footer.themeDark : t.footer.themeLight}</span>
            </button>

            {/* Grid toggle — the signature; active state makes the mode visible */}
            <button
              type="button"
              onClick={toggleGrid}
              className={`press group flex items-center gap-2 hover:text-ink ${
                gridVisible ? "text-accent" : "text-muted"
              }`}
              aria-pressed={gridVisible}
            >
              <span className={gridVisible ? "side-label !text-accent" : "side-label"}>{t.footer.grid}</span>
              <span aria-hidden className="inline-block transition-transform duration-300 ease-editorial group-active:rotate-90">⊞</span>
            </button>
          </div>

          <p className="font-sans text-xs text-muted">
            © {2026} {site.fullName}. {t.footer.rights}
          </p>
        </div>

        <p className="mt-8 max-w-measure font-sans text-[0.6875rem] leading-relaxed text-muted/80">
          {t.footer.colophon}
        </p>
      </div>
    </footer>
  );
}
