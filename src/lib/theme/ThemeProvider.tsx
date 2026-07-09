"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
  /** Signature element: reveal the underlying modular grid. */
  gridVisible: boolean;
  toggleGrid: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const THEME_KEY = "al-theme";

/**
 * Inline script (rendered in <head>) that sets the theme class before paint,
 * so there is no flash of the wrong theme. Keep in sync with logic below.
 */
export const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('${THEME_KEY}');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.style.colorScheme = theme;
  } catch (e) {}
})();
`;

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [gridVisible, setGridVisible] = useState(false);

  // Read the class the init script already applied.
  useEffect(() => {
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
  }, []);

  const applyTheme = useCallback((next: Theme) => {
    const root = document.documentElement;
    // Briefly enable a colour transition so the mode switch crossfades
    // instead of snapping. Skipped automatically under reduced motion.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce) {
      root.classList.add("theme-transition");
      window.setTimeout(() => root.classList.remove("theme-transition"), 400);
    }
    setTheme(next);
    root.classList.toggle("dark", next === "dark");
    root.style.colorScheme = next;
    window.localStorage.setItem(THEME_KEY, next);
  }, []);

  const toggleTheme = useCallback(() => {
    applyTheme(document.documentElement.classList.contains("dark") ? "light" : "dark");
  }, [applyTheme]);

  const toggleGrid = useCallback(() => setGridVisible((v) => !v), []);

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, toggleTheme, gridVisible, toggleGrid }),
    [theme, toggleTheme, gridVisible, toggleGrid],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
