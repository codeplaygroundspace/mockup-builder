import type { FrameBackgroundGroup, FrameBackgroundSwatch } from "./types";

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

const ABSTRACT_SWATCHES: ReadonlyArray<FrameBackgroundSwatch> = [
  { label: "Abstract Image 1", className: "bg-frame-abstract-image-1" },
  { label: "Abstract Image 2", className: "bg-frame-abstract-image-2" },
  { label: "Abstract Image 3", className: "bg-frame-abstract-image-3" },
  { label: "Abstract Image 4", className: "bg-frame-abstract-image-4" },
  { label: "Abstract Image 5", className: "bg-frame-abstract-image-5" },
  { label: "Abstract Image 6", className: "bg-frame-abstract-image-6" },
  { label: "Abstract Image 7", className: "bg-frame-abstract-image-7" },
  { label: "Abstract Image 8", className: "bg-frame-abstract-image-8" },
  { label: "Abstract Image 9", className: "bg-frame-abstract-image-9" },
  { label: "Abstract Image 10", className: "bg-frame-abstract-image-10" },
  { label: "Abstract Image 11", className: "bg-frame-abstract-image-11" },
  { label: "Abstract Image 12", className: "bg-frame-abstract-image-12" },
  { label: "Abstract Image 13", className: "bg-frame-abstract-image-13" },
  { label: "Abstract Image 14", className: "bg-frame-abstract-image-14" },
  { label: "Abstract Image 15", className: "bg-frame-abstract-image-15" },
  { label: "Abstract Image 16", className: "bg-frame-abstract-image-16" },
  { label: "Abstract Image 17", className: "bg-frame-abstract-image-17" },
  { label: "Abstract Image 18", className: "bg-frame-abstract-image-18" },
  { label: "Abstract Image 19", className: "bg-frame-abstract-image-19" },
  { label: "Abstract Image 20", className: "bg-frame-abstract-image-20" },
  { label: "Abstract Image 21", className: "bg-frame-abstract-image-21" },
  { label: "Abstract Image 22", className: "bg-frame-abstract-image-22" },
  { label: "Abstract Image 23", className: "bg-frame-abstract-image-23" },
  { label: "Abstract Image 24", className: "bg-frame-abstract-image-24" },
  { label: "Abstract Image 25", className: "bg-frame-abstract-image-25" },
  { label: "Abstract Image 26", className: "bg-frame-abstract-image-26" },
  { label: "Abstract Image 27", className: "bg-frame-abstract-image-27" },
];

const EARTH_SWATCHES: ReadonlyArray<FrameBackgroundSwatch> = [
  { label: "Earth Image 1", className: "bg-frame-earth-image-1" },
  { label: "Earth Image 2", className: "bg-frame-earth-image-2" },
  { label: "Earth Image 3", className: "bg-frame-earth-image-3" },
  { label: "Earth Image 4", className: "bg-frame-earth-image-4" },
  { label: "Earth Image 5", className: "bg-frame-earth-image-5" },
  { label: "Earth Image 6", className: "bg-frame-earth-image-6" },
  { label: "Earth Image 7", className: "bg-frame-earth-image-7" },
  { label: "Earth Image 8", className: "bg-frame-earth-image-8" },
  { label: "Earth Image 9", className: "bg-frame-earth-image-9" },
  { label: "Earth Image 10", className: "bg-frame-earth-image-10" },
  { label: "Earth Image 11", className: "bg-frame-earth-image-11" },
  { label: "Earth Image 12", className: "bg-frame-earth-image-12" },
  { label: "Earth Image 13", className: "bg-frame-earth-image-13" },
  { label: "Earth Image 14", className: "bg-frame-earth-image-14" },
  { label: "Earth Image 15", className: "bg-frame-earth-image-15" },
  { label: "Earth Image 16", className: "bg-frame-earth-image-16" },
  { label: "Earth Image 17", className: "bg-frame-earth-image-17" },
  { label: "Earth Image 18", className: "bg-frame-earth-image-18" },
  { label: "Earth Image 19", className: "bg-frame-earth-image-19" },
  { label: "Earth Image 20", className: "bg-frame-earth-image-20" },
  { label: "Earth Image 21", className: "bg-frame-earth-image-21" },
  { label: "Earth Image 22", className: "bg-frame-earth-image-22" },
  { label: "Earth Image 23", className: "bg-frame-earth-image-23" },
  { label: "Earth Image 24", className: "bg-frame-earth-image-24" },
  { label: "Earth Image 25", className: "bg-frame-earth-image-25" },
  { label: "Earth Image 26", className: "bg-frame-earth-image-26" },
  { label: "Earth Image 27", className: "bg-frame-earth-image-27" },
];

const TEXTURE_SWATCHES: ReadonlyArray<FrameBackgroundSwatch> = [
  { label: "Texture Image 1", className: "bg-frame-texture-image-1" },
  { label: "Texture Image 2", className: "bg-frame-texture-image-2" },
  { label: "Texture Image 3", className: "bg-frame-texture-image-3" },
  { label: "Texture Image 4", className: "bg-frame-texture-image-4" },
  { label: "Texture Image 5", className: "bg-frame-texture-image-5" },
  { label: "Texture Image 6", className: "bg-frame-texture-image-6" },
  { label: "Texture Image 7", className: "bg-frame-texture-image-7" },
  { label: "Texture Image 8", className: "bg-frame-texture-image-8" },
  { label: "Texture Image 9", className: "bg-frame-texture-image-9" },
  { label: "Texture Image 10", className: "bg-frame-texture-image-10" },
  { label: "Texture Image 11", className: "bg-frame-texture-image-11" },
  { label: "Texture Image 12", className: "bg-frame-texture-image-12" },
  { label: "Texture Image 13", className: "bg-frame-texture-image-13" },
  { label: "Texture Image 14", className: "bg-frame-texture-image-14" },
  { label: "Texture Image 15", className: "bg-frame-texture-image-15" },
  { label: "Texture Image 16", className: "bg-frame-texture-image-16" },
  { label: "Texture Image 17", className: "bg-frame-texture-image-17" },
  { label: "Texture Image 18", className: "bg-frame-texture-image-18" },
  { label: "Texture Image 19", className: "bg-frame-texture-image-19" },
  { label: "Texture Image 20", className: "bg-frame-texture-image-20" },
  { label: "Texture Image 21", className: "bg-frame-texture-image-21" },
];

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
    title: "Solid",
    swatches: SOLID_SWATCHES,
  },
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
    title: "Desktop",
    swatches: [
      {
        label: "Coast",
        className: "bg-frame-desktop-coast",
      },
      {
        label: "Mountain",
        className: "bg-frame-desktop-mountain",
      },
      {
        label: "Water",
        className: "bg-frame-desktop-water",
      },
      {
        label: "Road",
        className: "bg-frame-desktop-road",
      },
    ],
  },
  {
    title: "Abstract",
    swatches: ABSTRACT_SWATCHES,
  },
  {
    title: "Earth",
    swatches: EARTH_SWATCHES,
  },
  {
    title: "Texture",
    swatches: TEXTURE_SWATCHES,
  },
];
