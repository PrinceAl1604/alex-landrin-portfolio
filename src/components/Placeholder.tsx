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
  framed = false,
  quality = 90,
}: {
  src: string;
  caption?: string;
  alt?: string;
  ratio?: string;
  className?: string;
  sizes?: string;
  /** Fade the bottom edge out (opacity gradient) so the image melts into the page. */
  fade?: boolean;
  /** Frame the image as a deliberate object — rounded, a hairline ring and a soft
   *  shadow — so screenshot-style shots sit on the paper (overrides `fade`). */
  framed?: boolean;
  /** next/image encode quality (higher = crisper, esp. for UI screenshots). */
  quality?: number;
}) {
  const { t } = useLocale();
  const isPlaceholder = src.startsWith("[[");
  const useFade = fade && !framed;

  // Bottom opacity gradient via CSS mask (with -webkit- for Safari).
  const fadeMask = useFade
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
        /* Real image — framed (ring + soft shadow) or bare with an optional bottom fade. */
        <div
          className={`relative overflow-hidden ${
            framed
              ? "rounded-lg bg-paper shadow-[0_1px_2px_rgb(0_0_0/0.04)] ring-1 ring-hairline"
              : useFade
                ? "rounded-t-lg"
                : "rounded-lg"
          }`}
          style={{ aspectRatio: ratio, ...fadeMask }}
        >
          <Image
            src={`/work/${src}`}
            alt={alt ?? caption ?? ""}
            fill
            sizes={sizes}
            quality={quality}
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
