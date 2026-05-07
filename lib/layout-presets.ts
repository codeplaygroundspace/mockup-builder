export type LayoutPreset = {
  rotate: number;
  scale: number;
  selected?: boolean;
};

export const LAYOUT_PRESETS: ReadonlyArray<LayoutPreset> = [
  { rotate: 0, scale: 0.78, selected: true },
  { rotate: -8, scale: 0.72 },
  { rotate: 6, scale: 0.7 },
  { rotate: 0, scale: 0.85 },
];
