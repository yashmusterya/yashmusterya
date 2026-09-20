import type { ThemePreset } from '@/content/theme';

/**
 * A row of biome blocks in the title bar. Each one swaps the palette.
 * Presets come from src/content/theme.ts — add one there and it shows
 * up here without any change to this file.
 */
export const ThemePicker = ({
  themes,
  themeId,
  onSelect,
}: {
  themes: ThemePreset[];
  themeId: string;
  onSelect: (id: string) => void;
}) => (
  <div className="theme-picker" role="group" aria-label="Colour theme">
    <span className="theme-picker__label" aria-hidden="true">
      Biome
    </span>
    {themes.map((theme) => (
      <button
        key={theme.id}
        type="button"
        className="theme-swatch"
        aria-pressed={theme.id === themeId}
        title={`${theme.name} — ${theme.description}`}
        onClick={() => onSelect(theme.id)}
      >
        <span className="sr-only">{theme.name}</span>
        <span aria-hidden="true" style={{ background: `hsl(${theme.swatch[0]})` }} />
        <span aria-hidden="true" style={{ background: `hsl(${theme.swatch[1]})` }} />
        <span aria-hidden="true" style={{ background: `hsl(${theme.swatch[2]})` }} />
        <span aria-hidden="true" style={{ background: `hsl(${theme.swatch[0]})` }} />
      </button>
    ))}
  </div>
);
