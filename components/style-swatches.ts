export type StyleSwatchOption = {
  id: string;
  name: string;
  thumbnailUrl: string;
  frameClassName?: string;
  selected?: boolean;
};

export const STYLE_SWATCHES: ReadonlyArray<StyleSwatchOption> = [
  {
    id: "default",
    name: "Default",
    thumbnailUrl: "/border-styles/default.png",
    frameClassName: "mockup-border-default",
    selected: true,
  },
  {
    id: "card",
    name: "Card",
    thumbnailUrl: "/border-styles/card.png",
    frameClassName: "mockup-border-card",
  },
  {
    id: "glass-light",
    name: "Glass Light",
    thumbnailUrl: "/border-styles/glass-light.png",
    frameClassName: "mockup-border-glass-light",
  },
  {
    id: "glass-dark",
    name: "Glass Dark",
    thumbnailUrl: "/border-styles/glass-dark.png",
    frameClassName: "mockup-border-glass-dark",
  },
  {
    id: "liquid-glass",
    name: "Liquid Glass",
    thumbnailUrl: "/border-styles/liquid-glass.png",
    frameClassName: "mockup-border-liquid-glass",
  },
  {
    id: "inset-light",
    name: "Inset Light",
    thumbnailUrl: "/border-styles/inset-light.png",
    frameClassName: "mockup-border-inset-light",
  },
  {
    id: "inset-dark",
    name: "Inset Dark",
    thumbnailUrl: "/border-styles/inset-dark.png",
    frameClassName: "mockup-border-inset-dark",
  },
  {
    id: "outline",
    name: "Outline",
    thumbnailUrl: "/border-styles/outline.png",
    frameClassName: "mockup-border-outline",
  },
  {
    id: "border",
    name: "Border",
    thumbnailUrl: "/border-styles/border.png",
    frameClassName: "mockup-border-border",
  },
  {
    id: "retro",
    name: "Retro",
    thumbnailUrl: "/border-styles/retro.png",
    frameClassName: "mockup-border-retro",
  },
];

export type BorderStyleId = (typeof STYLE_SWATCHES)[number]["id"];

export const DEFAULT_BORDER_STYLE_ID: BorderStyleId = "default";

export function getBorderStyleById(id: BorderStyleId): StyleSwatchOption {
  return (
    STYLE_SWATCHES.find((style) => style.id === id) ?? (STYLE_SWATCHES[0] as StyleSwatchOption)
  );
}
