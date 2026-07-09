"use client";

import Image from "next/image";
import { useLocale } from "@/lib/i18n/LocaleProvider";

/**
 * Renders a real image when `src` is a supplied filename (served from
 * /public/work/<src>), or a clearly-labelled placeholder block when `src` is
 * still a `[[filename]]` marker. Drop a file in public/work and change the
 * project's cover/artifact `src` from `[[x.png]]` to `x.png` to go live.
 */
export function Placeholder({
  src,
  caption,
  alt,
  ratio = "16/10",
  className = "",
  sizes = "(max-width: 768px) 100vw, 60vw",
  fade = false,
}: {
  src: string;
  caption?: string;
  alt?: string;
  ratio?: string;
  className?: string;
  sizes?: string;
  /** Fade the bottom edge out (opacity gradient) so the image melts into the page. */
  fade?: boolean;
}) {
  const { t } = useLocale();
  const isPlaceholder = src.startsWith("[[");

  // Bottom opacity gradient via CSS mask (with -webkit- for Safari).
  const fadeMask = fade
    ? {
        maskImage: "linear-gradient(to bottom, #000 48%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, #000 48%, transparent 100%)",
      }
    : undefined;

  return (
    <figure className={className}>
      {isPlaceholder ? (
        <div
          className="relative flex items-center justify-center overflow-hidden rounded-sm border border-hairline bg-[repeating-linear-gradient(135deg,rgb(var(--hairline)/0.35)_0px,rgb(var(--hairline)/0.35)_1px,transparent_1px,transparent_10px)]"
          style={{ aspectRatio: ratio }}
        >
          <div className="px-4 text-center">
            <span className="block font-sans text-xs sm:text-sm text-ink/70 break-all">{src}</span>
            <span className="mt-2 block font-sans text-[0.625rem] uppercase tracking-[0.14em] text-muted">
              {t.meta.placeholderNote}
            </span>
          </div>
        </div>
      ) : (
        /* Bare image — no border, no background; optional bottom fade. */
        <div
          className={`relative overflow-hidden ${fade ? "rounded-t-lg" : "rounded-lg"}`}
          style={{ aspectRatio: ratio, ...fadeMask }}
        >
          <Image
            src={`/work/${src}`}
            alt={alt ?? caption ?? ""}
            fill
            sizes={sizes}
            className="object-cover object-center"
          />
        </div>
      )}
      {caption ? (
        <figcaption className="mt-3 font-sans text-xs text-muted">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
