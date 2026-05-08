import type { CSSProperties } from "react";

import type { FrameBackgroundGroup, FrameBackgroundSwatch } from "./types";

export const DEFAULT_FRAME_BACKGROUND_ID = "bg-frame-gradient-rouge";

const SHARED_IMAGE_SWATCH_URL =
  "https://images.unsplash.com/photo-1705447551093-7f1f038a313b?q=80&w=1139&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3";
let frameBackgroundCache: Map<string, FrameBackgroundSwatch> | null = null;

export function getFrameBackgroundSwatchId(swatch: FrameBackgroundSwatch) {
  return swatch.id ?? swatch.className ?? swatch.label;
}

export function getFrameBackgroundSwatchById(id: string): FrameBackgroundSwatch | null {
  return getFrameBackgroundCache().get(id) ?? null;
}

export function getCachedFrameBackground(id: string): FrameBackgroundSwatch {
  const swatch =
    getFrameBackgroundSwatchById(id) ?? getFrameBackgroundSwatchById(DEFAULT_FRAME_BACKGROUND_ID);

  if (!swatch) {
    throw new Error(`Default frame background "${DEFAULT_FRAME_BACKGROUND_ID}" was not found.`);
  }

  return swatch;
}

function getFrameBackgroundCache() {
  if (frameBackgroundCache) {
    return frameBackgroundCache;
  }

  frameBackgroundCache = new Map<string, FrameBackgroundSwatch>();

  for (const group of FRAME_BACKGROUND_GROUPS) {
    for (const swatch of group.swatches) {
      frameBackgroundCache.set(getFrameBackgroundSwatchId(swatch), swatch);
    }
  }

  return frameBackgroundCache;
}

export function getFrameBackgroundStyle(swatch: FrameBackgroundSwatch): CSSProperties | undefined {
  if (!swatch.imageUrl) {
    return undefined;
  }

  return {
    backgroundImage: `url("${swatch.imageUrl}")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
}

function imageSwatch(label: string, id: string, imageUrl: string): FrameBackgroundSwatch {
  return { label, id, imageUrl };
}

function createNumberedImageSwatches(
  labelPrefix: string,
  idPrefix: string,
  urls: ReadonlyArray<string>
): ReadonlyArray<FrameBackgroundSwatch> {
  return urls.map((imageUrl, index) =>
    imageSwatch(`${labelPrefix} ${index + 1}`, `${idPrefix}-${index + 1}`, imageUrl)
  );
}

const SOLID_SWATCHES: ReadonlyArray<FrameBackgroundSwatch> = [
  { label: "Soft White", className: "bg-frame-solid-soft-white" },
  { label: "Pale Gray", className: "bg-frame-solid-pale-gray" },
  { label: "Cool Gray", className: "bg-frame-solid-cool-gray" },
  { label: "Slate Gray", className: "bg-frame-solid-slate-gray" },
  { label: "Charcoal", className: "bg-frame-solid-charcoal" },
  { label: "Near Black", className: "bg-frame-solid-near-black" },
  { label: "Coral Red", className: "bg-frame-solid-coral-red" },
  { label: "Tangerine Solid", className: "bg-frame-solid-tangerine-solid" },
  { label: "Marigold", className: "bg-frame-solid-marigold" },
  { label: "Acid Lime", className: "bg-frame-solid-acid-lime" },
  { label: "Grass", className: "bg-frame-solid-grass" },
  { label: "Clover", className: "bg-frame-solid-clover" },
  { label: "Rose Milk", className: "bg-frame-solid-rose-milk" },
  { label: "Apricot", className: "bg-frame-solid-apricot" },
  { label: "Sand", className: "bg-frame-solid-sand" },
  { label: "Lemon Chiffon", className: "bg-frame-solid-lemon-chiffon" },
  { label: "Soft Mint", className: "bg-frame-solid-soft-mint" },
  { label: "Pistachio", className: "bg-frame-solid-pistachio" },
  { label: "Teal", className: "bg-frame-solid-teal" },
  { label: "Azure Solid", className: "bg-frame-solid-azure-solid" },
  { label: "Steel Blue", className: "bg-frame-solid-steel-blue" },
  { label: "Slate Violet", className: "bg-frame-solid-slate-violet" },
  { label: "Plum Solid", className: "bg-frame-solid-plum-solid" },
  { label: "Raspberry", className: "bg-frame-solid-raspberry" },
  { label: "Seafoam", className: "bg-frame-solid-seafoam" },
  { label: "Powder Cyan", className: "bg-frame-solid-powder-cyan" },
  { label: "Cornflower", className: "bg-frame-solid-cornflower" },
  { label: "Lavender", className: "bg-frame-solid-lavender" },
  { label: "Lilac", className: "bg-frame-solid-lilac" },
  { label: "Blossom", className: "bg-frame-solid-blossom" },
];

const GLASS_SWATCHES: ReadonlyArray<FrameBackgroundSwatch> = [
  {
    label: "Blue Ripple",
    className: "bg-frame-glass-blue-ripple",
  },
  {
    label: "Amber Aqua",
    className: "bg-frame-glass-amber-aqua",
  },
  {
    label: "Solar Flare",
    className: "bg-frame-glass-solar-flare",
  },
  {
    label: "Cyan Current",
    className: "bg-frame-glass-cyan-current",
  },
  {
    label: "Ultraviolet",
    className: "bg-frame-glass-ultraviolet",
  },
  {
    label: "Graphite Rib",
    className: "bg-frame-glass-graphite-rib",
  },
  {
    label: "Copper Rib",
    className: "bg-frame-glass-copper-rib",
  },
  {
    label: "Ember",
    className: "bg-frame-glass-ember",
  },
  {
    label: "Violet Static",
    className: "bg-frame-glass-violet-static",
  },
  {
    label: "Blue Static",
    className: "bg-frame-glass-blue-static",
  },
  {
    label: "Orange Vein",
    className: "bg-frame-glass-orange-vein",
  },
];

const COSMIC_SWATCHES: ReadonlyArray<FrameBackgroundSwatch> = [
  {
    label: "Nebula Violet",
    className: "bg-frame-cosmic-nebula-violet",
  },
  {
    label: "Dusk Bloom",
    className: "bg-frame-cosmic-dusk-bloom",
  },
  {
    label: "Rose Eclipse",
    className: "bg-frame-cosmic-rose-eclipse",
  },
  {
    label: "Purple Horizon",
    className: "bg-frame-cosmic-purple-horizon",
  },
  {
    label: "Blue Void",
    className: "bg-frame-cosmic-blue-void",
  },
  {
    label: "Violet Void",
    className: "bg-frame-cosmic-violet-void",
  },
  {
    label: "Magenta Rim",
    className: "bg-frame-cosmic-magenta-rim",
  },
  {
    label: "Plasma Violet",
    className: "bg-frame-cosmic-plasma-violet",
  },
  {
    label: "Aqua Event",
    className: "bg-frame-cosmic-aqua-event",
  },
  {
    label: "Blue Comet",
    className: "bg-frame-cosmic-blue-comet",
  },
];

const MYSTIC_SWATCHES: ReadonlyArray<FrameBackgroundSwatch> = [
  {
    label: "Indigo Lift",
    className: "bg-frame-mystic-indigo-lift",
  },
  {
    label: "Violet Halo",
    className: "bg-frame-mystic-violet-halo",
  },
  {
    label: "Violet Bands",
    className: "bg-frame-mystic-violet-bands",
  },
  {
    label: "Blue Wash",
    className: "bg-frame-mystic-blue-wash",
  },
  {
    label: "Pastel Orbit",
    className: "bg-frame-mystic-pastel-orbit",
  },
  {
    label: "Green Tide",
    className: "bg-frame-mystic-green-tide",
  },
  {
    label: "Candy Cloud",
    className: "bg-frame-mystic-candy-cloud",
  },
  {
    label: "Peach Core",
    className: "bg-frame-mystic-peach-core",
  },
  {
    label: "Blush Dots",
    className: "bg-frame-mystic-blush-dots",
  },
  {
    label: "Rose Glow",
    className: "bg-frame-mystic-rose-glow",
  },
  {
    label: "Peach Drift",
    className: "bg-frame-mystic-peach-drift",
  },
  {
    label: "Lilac Pool",
    className: "bg-frame-mystic-lilac-pool",
  },
  {
    label: "Rose Slant",
    className: "bg-frame-mystic-rose-slant",
  },
  {
    label: "Aqua Pearl",
    className: "bg-frame-mystic-aqua-pearl",
  },
  {
    label: "Golden Eclipse",
    className: "bg-frame-mystic-golden-eclipse",
  },
];

const ABSTRACT_IMAGE_URLS = [
  "https://images.unsplash.com/photo-1758843407996-3596058bd71d?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1723329049559-54c95d0c9ef5?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1694205116354-e2b3c9df820b?q=80&w=1337&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1662948496853-8ddd8cbcbab3?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1663208841736-f7da2ec6703c?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1667202374063-3c995a7517ae?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1667475593802-8d4e117a042f?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1668450433152-e56d7e8fe4ee?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1706045368128-b697e67b9c93?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1735575721650-f451a4d26db3?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1618367588411-d9a90fefa881?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1698044048214-541be00537c5?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1719090024525-667c8fcf5bb9?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1676594037921-3d9f43a0e375?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1717810135803-830d2c4e0d43?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1665624220803-dc3587a06c43?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3",
  "https://images.unsplash.com/photo-1665624184782-811c2b28d954?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1777789062011-5f57f624058e?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1777886290107-ef2e5b5ee047?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1739582458700-64e2c1ef702e?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3",
  "https://images.unsplash.com/photo-1679822081971-1686a65e775c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1702390649777-e2e6feee095f?q=80&w=1396&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1702390652030-d2ae9c613086?q=80&w=1247&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3",
  "https://images.unsplash.com/photo-1673526759319-57811d44b600?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1723329190727-f39d502c28a2?q=80&w=1214&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3",
  "https://images.unsplash.com/photo-1705445143459-068609678cfb?q=80&w=1139&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  SHARED_IMAGE_SWATCH_URL,
];

const ABSTRACT_SWATCHES = createNumberedImageSwatches(
  "Abstract Image",
  "abstract-image",
  ABSTRACT_IMAGE_URLS
);

const GRADIENT_SWATCHES: ReadonlyArray<FrameBackgroundSwatch> = [
  { label: "Rouge", className: "bg-frame-gradient-rouge" },
  {
    label: "Magenta",
    className: "bg-frame-gradient-magenta",
  },
  { label: "Blush", className: "bg-frame-gradient-blush" },
  {
    label: "Sky Clay",
    className: "bg-frame-gradient-sky-clay",
  },
  {
    label: "Mint Rose",
    className: "bg-frame-gradient-mint-rose",
  },
  {
    label: "Aqua Coral",
    className: "bg-frame-gradient-aqua-coral",
  },
  {
    label: "Lilac Grass",
    className: "bg-frame-gradient-lilac-grass",
  },
  { label: "Slate", className: "bg-frame-gradient-slate" },
  {
    label: "Charcoal",
    className: "bg-frame-gradient-charcoal",
  },
  { label: "Cyan", className: "bg-frame-gradient-cyan" },
  { label: "Azure", className: "bg-frame-gradient-azure" },
  {
    label: "Indigo",
    className: "bg-frame-gradient-indigo",
  },
  {
    label: "Sun Mint",
    className: "bg-frame-gradient-sun-mint",
  },
  { label: "Peach", className: "bg-frame-gradient-peach" },
  {
    label: "Tangerine",
    className: "bg-frame-gradient-tangerine",
  },
  { label: "Lime", className: "bg-frame-gradient-lime" },
  {
    label: "Spring",
    className: "bg-frame-gradient-spring",
  },
  { label: "Leaf", className: "bg-frame-gradient-leaf" },
  {
    label: "Iris Mist",
    className: "bg-frame-gradient-iris-mist",
  },
];

export const FRAME_BACKGROUND_GROUPS: ReadonlyArray<FrameBackgroundGroup> = [
  {
    title: "Gradient",
    swatches: GRADIENT_SWATCHES,
  },
  {
    title: "Glass",
    swatches: GLASS_SWATCHES,
  },
  {
    title: "Cosmic",
    swatches: COSMIC_SWATCHES,
  },
  {
    title: "Mystic",
    swatches: MYSTIC_SWATCHES,
  },
  {
    title: "Abstract",
    swatches: ABSTRACT_SWATCHES,
  },
  {
    title: "Solid",
    swatches: SOLID_SWATCHES,
  },
];
