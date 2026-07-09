import type { Config } from "tailwindcss";

/**
 * Design tokens live here — palette + type scale.
 * Colours are driven by CSS variables (see globals.css) so light/dark swap
 * cleanly. Never hardcode hex in components; use these token names.
 */
const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "rgb(var(--paper) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        hairline: "rgb(var(--hairline) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
      },
      fontFamily: {
        // Single typeface — Helvetica Neue (native on Apple; graceful
        // fallbacks elsewhere). Hierarchy comes from size + weight only.
        display: ['"Helvetica Neue"', "Helvetica", "Arial", '"Segoe UI"', "sans-serif"],
        sans: ['"Helvetica Neue"', "Helvetica", "Arial", '"Segoe UI"', "sans-serif"],
      },
      fontSize: {
        // Opinionated, fluid type scale — not default browser sizing.
        label: ["0.6875rem", { lineHeight: "1", letterSpacing: "0.14em" }],
        eyebrow: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.02em" }],
        "display-sm": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2.25rem, 5vw, 4rem)", { lineHeight: "0.98", letterSpacing: "-0.025em" }],
        hero: ["clamp(2.75rem, 9vw, 8.5rem)", { lineHeight: "0.9", letterSpacing: "-0.035em" }],
      },
      maxWidth: {
        measure: "64ch", // reading measure — ~64 chars, near the 66 optimum
        shell: "88rem",
      },
      spacing: {
        gutter: "clamp(1.25rem, 5vw, 5rem)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.2, 0.65, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
