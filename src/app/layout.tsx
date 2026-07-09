import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider, themeInitScript } from "@/lib/theme/ThemeProvider";
import { LocaleProvider } from "@/lib/i18n/LocaleProvider";
import { GridOverlay } from "@/components/GridOverlay";
import { site, contact } from "@/lib/content/profile";

// Helvetica Neue is a system/licensed face (native on Apple), loaded as a CSS
// font stack (see tailwind.config.ts) — no web-font request, no layout shift.
// To render it identically on non-Apple devices, drop the .woff2 files in and
// switch to next/font/local.

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.positioning,
  keywords: [
    "Product Designer",
    "UX/UI Designer",
    "Design Systems",
    "Brand Identity",
    "SaaS Design",
    "Magdeburg",
    "Germany",
    site.name,
  ],
  authors: [{ name: site.fullName }],
  creator: site.fullName,
  openGraph: {
    type: "website",
    locale: "en",
    url: site.url,
    siteName: `${site.name} — Portfolio`,
    title: `${site.name} — ${site.role}`,
    description: site.positioning,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.positioning,
  },
  alternates: {
    canonical: "/",
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.fullName,
  alternateName: site.name,
  jobTitle: site.role,
  worksFor: { "@type": "Organization", name: site.company },
  url: site.url,
  email: `mailto:${contact.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Magdeburg", addressCountry: "DE" },
  knowsLanguage: ["fr", "de", "en"],
  sameAs: [contact.linkedin],
  description: site.positioning,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>
          <LocaleProvider>
            <a href="#main" className="skip-link">
              Skip to content
            </a>
            {children}
            <GridOverlay />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
