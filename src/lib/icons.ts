import * as si from 'simple-icons';

type SimpleIcon = { title: string; hex: string; path: string };

export type Tech = { label: string; path?: string; color?: string };

// Brand colours too dark to read on a dark background fall back to the text colour.
function readable(hex: string): string | undefined {
  const n = parseInt(hex, 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return lum < 0.18 ? undefined : `#${hex}`;
}

export function tech(item: string): Tech {
  const key = 'si' + item.charAt(0).toUpperCase() + item.slice(1);
  const icon = (si as unknown as Record<string, SimpleIcon | undefined>)[key];
  if (!icon) return { label: item };
  return { label: icon.title, path: icon.path, color: readable(icon.hex) };
}
