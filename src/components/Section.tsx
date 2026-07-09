import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/** Page shell — consistent max width + responsive gutter, the fixed measure. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-shell px-gutter ${className}`}>{children}</div>
  );
}

/** A top-level home section with a hairline top rule and §-labelled header. */
export function Section({
  id,
  index,
  label,
  title,
  lead,
  children,
}: {
  id?: string;
  index?: string;
  label: string;
  title?: string;
  lead?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-24 lg:py-32">
      <Container>
        <Reveal>
          <div className="flex items-baseline gap-4 border-t border-hairline pt-4">
            {index ? <span className="side-label tnum">§{index}</span> : null}
            <span className="side-label">{label}</span>
          </div>
        </Reveal>

        {title ? (
          <Reveal delay={0.05}>
            <h2 className="mt-8 max-w-[20ch] font-display text-display-md font-semibold text-balance">
              {title}
            </h2>
          </Reveal>
        ) : null}

        {lead ? (
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-measure text-lg leading-relaxed text-muted">{lead}</p>
          </Reveal>
        ) : null}

        <div className="mt-12 sm:mt-16">{children}</div>
      </Container>
    </section>
  );
}
