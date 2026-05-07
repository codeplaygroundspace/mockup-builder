export type StyleSwatchOption = {
  name: string;
  swatchClassName: string;
  selected?: boolean;
};

export const STYLE_SWATCHES: ReadonlyArray<StyleSwatchOption> = [
  { name: "Default", swatchClassName: "bg-zinc-100", selected: true },
  { name: "Glass Light", swatchClassName: "bg-zinc-200/90" },
  { name: "Glass Dark", swatchClassName: "bg-zinc-700/90" },
  {
    name: "Liquid...",
    swatchClassName:
      "bg-[conic-gradient(from_0deg,#ff7e5f,#feb47b,#ff7e5f)] [&>div]:bg-zinc-200/30",
  },
  { name: "Inset Light", swatchClassName: "bg-zinc-100" },
  { name: "Inset Dark", swatchClassName: "bg-zinc-800" },
  { name: "Outline", swatchClassName: "bg-transparent border-2 border-zinc-200" },
  { name: "Border", swatchClassName: "bg-zinc-50 border border-zinc-300" },
];
