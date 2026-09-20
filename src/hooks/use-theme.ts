import { useCallback, useEffect, useState } from 'react';
import { STORAGE_KEY, defaultThemeId, themes, type ThemePreset } from '@/content/theme';

const resolve = (id: string | null): ThemePreset =>
  themes.find((theme) => theme.id === id) ??
  themes.find((theme) => theme.id === defaultThemeId) ??
  themes[0];

const readStored = (): string | null => {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    // Private windows and blocked site data both throw here; the default
    // theme is a perfectly good fallback.
    return null;
  }
};

const apply = (theme: ThemePreset) => {
  const root = document.documentElement;
  Object.entries(theme.vars).forEach(([key, value]) => root.style.setProperty(key, value));
  root.dataset.theme = theme.id;
};

/**
 * Applies a biome preset from src/content/theme.ts to :root and remembers
 * the choice for this browser.
 */
export const useTheme = () => {
  const [themeId, setThemeId] = useState<string>(() => resolve(readStored()).id);

  useEffect(() => {
    apply(resolve(themeId));
    try {
      window.localStorage.setItem(STORAGE_KEY, themeId);
    } catch {
      // Not being able to remember the choice is not worth breaking over.
    }
  }, [themeId]);

  const setTheme = useCallback((id: string) => setThemeId(resolve(id).id), []);

  return { theme: resolve(themeId), themeId, setTheme, themes };
};
