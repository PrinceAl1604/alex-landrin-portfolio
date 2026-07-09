"use client";

import { useTheme } from "@/lib/theme/ThemeProvider";

/**
 * Signature element — the modular grid made visible.
 * Renders a fixed 12-column + baseline overlay, toggled from the footer.
 * Purely decorative + non-interactive; hidden from assistive tech.
 */
export function GridOverlay() {
  const { gridVisible } = useTheme();
  return (
    <div className="grid-overlay" data-visible={gridVisible} aria-hidden="true">
      <div className="baseline" />
      <div className="cols">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>
    </div>
  );
}
