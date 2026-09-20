/* ───────────────────────────────────────────────────────────────
   THEMES
   Each preset is a biome. Switching one applies its `vars` to
   :root as CSS custom properties, so every component re-colours
   without touching a single component file.

   To add a theme: copy a block, change the id/name/swatch and the
   HSL values, and it appears in the title-bar picker automatically.
   Values are bare HSL triples ("h s% l%") because the stylesheet
   wraps them in hsl(...) — that's what lets opacity modifiers like
   hsl(var(--accent) / .4) work.
   ─────────────────────────────────────────────────────────────── */

export interface ThemePreset {
  id: string;
  name: string;
  description: string;
  /** Three colours for the preview cubes in the picker. */
  swatch: [string, string, string];
  vars: Record<string, string>;
}

export const themes: ThemePreset[] = [
  {
    id: 'overworld',
    name: 'Overworld',
    description: 'Moss and lantern gold on damp stone.',
    swatch: ['108 43% 51%', '40 62% 50%', '140 8% 21%'],
    vars: {
      '--background': '140 18% 8%',
      '--surface-deep': '140 22% 5%',
      '--surface-stone': '140 8% 21%',
      '--surface-light': '125 5% 40%',
      '--surface-panel': '140 13% 12%',
      '--surface-console': '138 9% 16%',
      '--foreground': '105 14% 91%',
      '--muted-foreground': '110 8% 67%',
      '--border': '130 10% 26%',
      '--accent': '108 43% 51%',
      '--accent-light': '105 47% 67%',
      '--accent-dark': '110 45% 27%',
      '--accent-contrast': '140 26% 7%',
      '--highlight': '40 62% 52%',
    },
  },
  {
    id: 'deepslate',
    name: 'Deepslate',
    description: 'Cold stone with a diamond seam running through it.',
    swatch: ['187 62% 48%', '199 70% 62%', '215 12% 20%'],
    vars: {
      '--background': '215 22% 8%',
      '--surface-deep': '217 28% 5%',
      '--surface-stone': '215 12% 20%',
      '--surface-light': '214 9% 39%',
      '--surface-panel': '215 18% 12%',
      '--surface-console': '215 14% 16%',
      '--foreground': '210 16% 92%',
      '--muted-foreground': '212 10% 68%',
      '--border': '214 12% 27%',
      '--accent': '187 60% 46%',
      '--accent-light': '186 64% 66%',
      '--accent-dark': '190 58% 25%',
      '--accent-contrast': '215 32% 7%',
      '--highlight': '199 70% 64%',
    },
  },
  {
    id: 'nether',
    name: 'Nether',
    description: 'Crimson netherrack lit by something burning.',
    swatch: ['4 62% 52%', '28 78% 55%', '8 12% 19%'],
    vars: {
      '--background': '6 22% 8%',
      '--surface-deep': '5 32% 5%',
      '--surface-stone': '8 12% 19%',
      '--surface-light': '10 9% 38%',
      '--surface-panel': '6 18% 11%',
      '--surface-console': '6 13% 15%',
      '--foreground': '20 14% 92%',
      '--muted-foreground': '15 9% 68%',
      '--border': '8 13% 26%',
      '--accent': '4 60% 52%',
      '--accent-light': '6 68% 69%',
      '--accent-dark': '4 58% 28%',
      '--accent-contrast': '6 32% 7%',
      '--highlight': '28 78% 57%',
    },
  },
  {
    id: 'end',
    name: 'The End',
    description: 'Purpur and endstone, a long way from anywhere.',
    swatch: ['272 46% 58%', '48 58% 64%', '268 10% 20%'],
    vars: {
      '--background': '268 20% 8%',
      '--surface-deep': '270 28% 5%',
      '--surface-stone': '268 10% 20%',
      '--surface-light': '266 9% 39%',
      '--surface-panel': '268 16% 12%',
      '--surface-console': '268 12% 16%',
      '--foreground': '280 12% 92%',
      '--muted-foreground': '272 9% 69%',
      '--border': '268 12% 28%',
      '--accent': '272 46% 58%',
      '--accent-light': '272 56% 73%',
      '--accent-dark': '272 44% 31%',
      '--accent-contrast': '270 32% 7%',
      '--highlight': '48 58% 64%',
    },
  },
];

/** Which theme loads on a first visit. Must match an `id` above. */
export const defaultThemeId = 'overworld';

export const STORAGE_KEY = 'portfolio-theme';
