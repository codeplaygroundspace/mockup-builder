import type { FrameBackgroundGroup, FrameBackgroundSwatch } from "./types";

const SOLID_SWATCHES: ReadonlyArray<FrameBackgroundSwatch> = [
  { label: "Graphite", className: "bg-[#4b555b]" },
  { label: "Coal", className: "bg-[#20262a]" },
  { label: "Ink", className: "bg-[#111315]" },
  { label: "Coral Red", className: "bg-[#ff5a62]" },
  { label: "Tangerine Solid", className: "bg-[#ff9145]" },
  { label: "Marigold", className: "bg-[#ffc641]" },
  { label: "Acid Lime", className: "bg-[#cbd32d]" },
  { label: "Grass", className: "bg-[#82cd24]" },
  { label: "Clover", className: "bg-[#38c968]" },
  { label: "Rose Milk", className: "bg-[#f5a3a5]" },
  { label: "Apricot", className: "bg-[#f8bfa8]" },
  { label: "Sand", className: "bg-[#f8d1a1]" },
  { label: "Lemon Chiffon", className: "bg-[#f6ffa6]" },
  { label: "Soft Mint", className: "bg-[#c6f8bc]" },
  { label: "Pistachio", className: "bg-[#c2f5cd]" },
  { label: "Teal", className: "bg-[#3d9ba2]" },
  { label: "Azure Solid", className: "bg-[#238ac5]" },
  { label: "Steel Blue", className: "bg-[#486baf]" },
  { label: "Slate Violet", className: "bg-[#5b61a3]" },
  { label: "Plum Solid", className: "bg-[#75529c]" },
  { label: "Raspberry", className: "bg-[#e8468a]" },
  { label: "Seafoam", className: "bg-[#a0edcf]" },
  { label: "Powder Cyan", className: "bg-[#a4dae5]" },
  { label: "Cornflower", className: "bg-[#98bdf0]" },
  { label: "Lavender", className: "bg-[#b4a6f1]" },
  { label: "Lilac", className: "bg-[#efb5f2]" },
  { label: "Blossom", className: "bg-[#f2b7d8]" },
];

const GLASS_SWATCHES: ReadonlyArray<FrameBackgroundSwatch> = [
  {
    label: "Blue Ripple",
    className:
      "bg-[repeating-linear-gradient(120deg,#c8d6ff_0_1px,transparent_1px_3px),radial-gradient(circle_at_30%_30%,#9fb4ff_0%,#293d92_48%,#06051e_100%)]",
  },
  {
    label: "Amber Aqua",
    className:
      "bg-[repeating-linear-gradient(115deg,transparent_0_3px,#ffb24d_4px_5px),linear-gradient(135deg,#ff7b12_0%,#ffb54a_45%,#00b9c9_100%)]",
  },
  {
    label: "Solar Flare",
    className:
      "bg-[repeating-linear-gradient(25deg,#fff169_0_2px,transparent_2px_5px),radial-gradient(circle_at_20%_45%,#ffe84b_0%,#f15100_45%,#070400_100%)]",
  },
  {
    label: "Cyan Current",
    className:
      "bg-[repeating-linear-gradient(15deg,#00c4de_0_2px,#05133e_3px_5px,#03050b_6px_8px),linear-gradient(135deg,#07275c,#00b8c5)]",
  },
  {
    label: "Ultraviolet",
    className:
      "bg-[radial-gradient(circle_at_75%_72%,#4530d9_0%,#1200d8_35%,#090013_70%),linear-gradient(135deg,#030209,#1a04cf)]",
  },
  {
    label: "Graphite Rib",
    className:
      "bg-[repeating-linear-gradient(90deg,#090909_0_2px,#d2d2d2_3px_5px,#090909_6px_8px),linear-gradient(180deg,#050505,#8b8b8b)]",
  },
  {
    label: "Copper Rib",
    className:
      "bg-[repeating-linear-gradient(105deg,#ffb56f_0_2px,#4b1800_3px_5px,#f37a1c_6px_8px),linear-gradient(135deg,#ffc082,#7a2600)]",
  },
  {
    label: "Ember",
    className:
      "bg-[repeating-linear-gradient(140deg,transparent_0_4px,#ff4a00_5px_7px),linear-gradient(135deg,#120700_0%,#7f1300_48%,#050100_100%)]",
  },
  {
    label: "Violet Static",
    className:
      "bg-[repeating-linear-gradient(100deg,#f1d5ff_0_1px,#2a1590_2px_3px,#0c1240_4px_6px),radial-gradient(circle_at_65%_35%,#f1c5ff,#28148b_58%,#030416)]",
  },
  {
    label: "Blue Static",
    className:
      "bg-[repeating-linear-gradient(80deg,#b8cfff_0_1px,#20348d_2px_4px,#01001f_5px_7px),radial-gradient(circle_at_35%_30%,#b9c6ff,#263e92_55%,#02001c)]",
  },
  {
    label: "Orange Vein",
    className:
      "bg-[repeating-linear-gradient(170deg,transparent_0_7px,#4b1200_8px_10px),radial-gradient(circle_at_70%_30%,#ff8b00_0%,#f44300_46%,#3c0500_100%)]",
  },
];

const COSMIC_SWATCHES: ReadonlyArray<FrameBackgroundSwatch> = [
  {
    label: "Nebula Violet",
    className: "bg-[linear-gradient(145deg,#161318_0%,#4232be_48%,#e2dcf7_100%)]",
  },
  {
    label: "Dusk Bloom",
    className: "bg-[linear-gradient(145deg,#171717_0%,#463e63_52%,#f185ce_100%)]",
  },
  {
    label: "Rose Eclipse",
    className: "bg-[linear-gradient(145deg,#161a20_0%,#775b8c_52%,#f7e0e0_100%)]",
  },
  {
    label: "Purple Horizon",
    className: "bg-[linear-gradient(145deg,#1e0128_0%,#3f0279_48%,#ce84f2_100%)]",
  },
  {
    label: "Blue Void",
    className: "bg-[radial-gradient(circle_at_80%_30%,#6266f1_0%,#1c2a84_38%,#010102_76%)]",
  },
  {
    label: "Violet Void",
    className: "bg-[radial-gradient(circle_at_22%_32%,#2a1c6b_0%,#050505_54%,#291248_100%)]",
  },
  {
    label: "Magenta Rim",
    className:
      "bg-[radial-gradient(circle_at_50%_-20%,#101017_0%,#050505_48%,#ec26b1_78%,#f306e8_100%)]",
  },
  {
    label: "Plasma Violet",
    className: "bg-[linear-gradient(145deg,#010101_0%,#350b52_52%,#cb24fe_100%)]",
  },
  {
    label: "Aqua Event",
    className:
      "bg-[radial-gradient(circle_at_54%_12%,#020202_0%,#030306_48%,#0ea2a9_78%,#056064_100%)]",
  },
  {
    label: "Blue Comet",
    className: "bg-[linear-gradient(35deg,#42ceff_0%,#19486b_44%,#3b48d4_100%)]",
  },
];

const MYSTIC_SWATCHES: ReadonlyArray<FrameBackgroundSwatch> = [
  {
    label: "Indigo Lift",
    className:
      "bg-[radial-gradient(ellipse_at_bottom,#6064d0_0%,#8c95e5_22%,transparent_43%),linear-gradient(180deg,#e2e1e6_0%,#e2e1e6_58%,#6669d4_100%)]",
  },
  {
    label: "Violet Halo",
    className:
      "bg-[radial-gradient(ellipse_at_center,#7f51c0_0%,#f1e3eb_38%,transparent_62%),linear-gradient(180deg,#eee4ec_0%,#eee4ec_60%,#eadfe9_100%)]",
  },
  {
    label: "Violet Bands",
    className:
      "bg-[repeating-radial-gradient(ellipse_at_top,#784ed0_0_5px,#b78dd6_6px_11px,#f0cbd5_12px_17px)]",
  },
  {
    label: "Blue Wash",
    className:
      "bg-[linear-gradient(135deg,#ffffff_0%,#ffffff_24%,#696bd0_50%,#6f5ab1_72%,#f0d8dd_100%)]",
  },
  {
    label: "Pastel Orbit",
    className:
      "bg-[radial-gradient(circle_at_50%_50%,#b49ee2_0%,#f6cbd7_22%,#e7effc_45%,#f2e6eb_100%)]",
  },
  {
    label: "Green Tide",
    className:
      "bg-[repeating-radial-gradient(ellipse_at_top,#45d872_0_9px,#5ddc8f_10px_18px,#82bea0_19px_26px)]",
  },
  {
    label: "Candy Cloud",
    className:
      "bg-[radial-gradient(circle_at_34%_40%,#ff9fbb_0%,transparent_32%),radial-gradient(circle_at_68%_55%,#b872c5_0%,transparent_32%),radial-gradient(circle_at_80%_20%,#dff5fa_0%,transparent_36%),linear-gradient(135deg,#ffd1e4,#fff2da)]",
  },
  {
    label: "Peach Core",
    className: "bg-[radial-gradient(circle_at_50%_48%,#fd9c91_0%,#ffd4df_34%,#fff3ef_70%)]",
  },
  {
    label: "Blush Dots",
    className:
      "bg-[radial-gradient(circle_at_28%_30%,#ffccd6_0_9%,transparent_10%),radial-gradient(circle_at_70%_66%,#f68ab7_0_10%,transparent_11%),linear-gradient(135deg,#fff5ee,#f9e5fb)]",
  },
  {
    label: "Rose Glow",
    className: "bg-[radial-gradient(circle_at_55%_48%,#f55780_0%,#f891ca_45%,#ffe0e2_100%)]",
  },
  {
    label: "Peach Drift",
    className: "bg-[linear-gradient(180deg,#ffd9be_0%,#ffa886_52%,#b86f9a_100%)]",
  },
  {
    label: "Lilac Pool",
    className: "bg-[radial-gradient(circle_at_55%_70%,#e9a8ed_0%,#b8a6ec_44%,#dce9ff_100%)]",
  },
  {
    label: "Rose Slant",
    className: "bg-[linear-gradient(135deg,#895fd6_0%,#ed98da_48%,#f7e1ec_100%)]",
  },
  {
    label: "Aqua Pearl",
    className: "bg-[linear-gradient(135deg,#a9ffc8_0%,#4bd7d7_52%,#b5bccd_100%)]",
  },
  {
    label: "Golden Eclipse",
    className:
      "bg-[radial-gradient(circle_at_14%_72%,#232222_0%,#242323_34%,transparent_36%),radial-gradient(circle_at_82%_50%,#f3aa22_0%,#d36f28_35%,transparent_58%),linear-gradient(135deg,#282526,#ab7045)]",
  },
];

const ABSTRACT_SWATCHES: ReadonlyArray<FrameBackgroundSwatch> = [
  { label: "Abstract Image 1", className: "bg-abstract-image-1" },
  { label: "Abstract Image 2", className: "bg-abstract-image-2" },
  { label: "Abstract Image 3", className: "bg-abstract-image-3" },
  { label: "Abstract Image 4", className: "bg-abstract-image-4" },
  { label: "Abstract Image 5", className: "bg-abstract-image-5" },
  { label: "Abstract Image 6", className: "bg-abstract-image-6" },
  { label: "Abstract Image 7", className: "bg-abstract-image-7" },
  { label: "Abstract Image 8", className: "bg-abstract-image-8" },
  { label: "Abstract Image 9", className: "bg-abstract-image-9" },
  { label: "Abstract Image 10", className: "bg-abstract-image-10" },
  { label: "Abstract Image 11", className: "bg-abstract-image-11" },
  { label: "Abstract Image 12", className: "bg-abstract-image-12" },
  { label: "Abstract Image 13", className: "bg-abstract-image-13" },
  { label: "Abstract Image 14", className: "bg-abstract-image-14" },
  { label: "Abstract Image 15", className: "bg-abstract-image-15" },
  { label: "Abstract Image 16", className: "bg-abstract-image-16" },
  { label: "Abstract Image 17", className: "bg-abstract-image-17" },
  { label: "Abstract Image 18", className: "bg-abstract-image-18" },
  { label: "Abstract Image 19", className: "bg-abstract-image-19" },
  { label: "Abstract Image 20", className: "bg-abstract-image-20" },
  { label: "Abstract Image 21", className: "bg-abstract-image-21" },
  { label: "Abstract Image 22", className: "bg-abstract-image-22" },
  { label: "Abstract Image 23", className: "bg-abstract-image-23" },
  { label: "Abstract Image 24", className: "bg-abstract-image-24" },
  { label: "Abstract Image 25", className: "bg-abstract-image-25" },
  { label: "Abstract Image 26", className: "bg-abstract-image-26" },
  { label: "Abstract Image 27", className: "bg-abstract-image-27" },
];

const EARTH_SWATCHES: ReadonlyArray<FrameBackgroundSwatch> = [
  { label: "Earth Image 1", className: "bg-earth-image-1" },
  { label: "Earth Image 2", className: "bg-earth-image-2" },
  { label: "Earth Image 3", className: "bg-earth-image-3" },
  { label: "Earth Image 4", className: "bg-earth-image-4" },
  { label: "Earth Image 5", className: "bg-earth-image-5" },
  { label: "Earth Image 6", className: "bg-earth-image-6" },
  { label: "Earth Image 7", className: "bg-earth-image-7" },
  { label: "Earth Image 8", className: "bg-earth-image-8" },
  { label: "Earth Image 9", className: "bg-earth-image-9" },
  { label: "Earth Image 10", className: "bg-earth-image-10" },
  { label: "Earth Image 11", className: "bg-earth-image-11" },
  { label: "Earth Image 12", className: "bg-earth-image-12" },
  { label: "Earth Image 13", className: "bg-earth-image-13" },
  { label: "Earth Image 14", className: "bg-earth-image-14" },
  { label: "Earth Image 15", className: "bg-earth-image-15" },
  { label: "Earth Image 16", className: "bg-earth-image-16" },
  { label: "Earth Image 17", className: "bg-earth-image-17" },
  { label: "Earth Image 18", className: "bg-earth-image-18" },
  { label: "Earth Image 19", className: "bg-earth-image-19" },
  { label: "Earth Image 20", className: "bg-earth-image-20" },
  { label: "Earth Image 21", className: "bg-earth-image-21" },
  { label: "Earth Image 22", className: "bg-earth-image-22" },
  { label: "Earth Image 23", className: "bg-earth-image-23" },
  { label: "Earth Image 24", className: "bg-earth-image-24" },
  { label: "Earth Image 25", className: "bg-earth-image-25" },
  { label: "Earth Image 26", className: "bg-earth-image-26" },
  { label: "Earth Image 27", className: "bg-earth-image-27" },
];

const TEXTURE_SWATCHES: ReadonlyArray<FrameBackgroundSwatch> = [
  { label: "Texture Image 1", className: "bg-texture-image-1" },
  { label: "Texture Image 2", className: "bg-texture-image-2" },
  { label: "Texture Image 3", className: "bg-texture-image-3" },
  { label: "Texture Image 4", className: "bg-texture-image-4" },
  { label: "Texture Image 5", className: "bg-texture-image-5" },
  { label: "Texture Image 6", className: "bg-texture-image-6" },
  { label: "Texture Image 7", className: "bg-texture-image-7" },
  { label: "Texture Image 8", className: "bg-texture-image-8" },
  { label: "Texture Image 9", className: "bg-texture-image-9" },
  { label: "Texture Image 10", className: "bg-texture-image-10" },
  { label: "Texture Image 11", className: "bg-texture-image-11" },
  { label: "Texture Image 12", className: "bg-texture-image-12" },
  { label: "Texture Image 13", className: "bg-texture-image-13" },
  { label: "Texture Image 14", className: "bg-texture-image-14" },
  { label: "Texture Image 15", className: "bg-texture-image-15" },
  { label: "Texture Image 16", className: "bg-texture-image-16" },
  { label: "Texture Image 17", className: "bg-texture-image-17" },
  { label: "Texture Image 18", className: "bg-texture-image-18" },
  { label: "Texture Image 19", className: "bg-texture-image-19" },
  { label: "Texture Image 20", className: "bg-texture-image-20" },
  { label: "Texture Image 21", className: "bg-texture-image-21" },
];

const GRADIENT_SWATCHES: ReadonlyArray<FrameBackgroundSwatch> = [
  { label: "Rouge", className: "bg-mockup-gradient" },
  {
    label: "Magenta",
    className: "bg-[linear-gradient(135deg,#ec87cb_0%,#a01cb3_48%,#3b057c_100%)]",
  },
  { label: "Blush", className: "bg-[linear-gradient(135deg,#eec2db_0%,#ee9bb9_55%,#9554b3_100%)]" },
  {
    label: "Sky Clay",
    className: "bg-[linear-gradient(135deg,#53bce3_0%,#d6a1ac_54%,#e68f66_100%)]",
  },
  {
    label: "Mint Rose",
    className: "bg-[linear-gradient(135deg,#59e19f_0%,#d5a89b_48%,#e65198_100%)]",
  },
  {
    label: "Aqua Coral",
    className: "bg-[linear-gradient(135deg,#59d8e0_0%,#d3a8ad_52%,#e76c6a_100%)]",
  },
  {
    label: "Lilac Grass",
    className: "bg-[linear-gradient(135deg,#bd8be0_0%,#a9cbb1_52%,#a2e487_100%)]",
  },
  { label: "Slate", className: "bg-[linear-gradient(135deg,#c5c9da_0%,#a5aac1_52%,#858ca8_100%)]" },
  {
    label: "Charcoal",
    className: "bg-[linear-gradient(135deg,#2a2a2a_0%,#202020_48%,#161616_100%)]",
  },
  { label: "Cyan", className: "bg-[linear-gradient(135deg,#40b9fe_0%,#27d0fe_52%,#0ee5fe_100%)]" },
  { label: "Azure", className: "bg-[linear-gradient(135deg,#15b9fe_0%,#2a94ff_52%,#3d70ff_100%)]" },
  {
    label: "Indigo",
    className: "bg-[linear-gradient(135deg,#666fe4_0%,#5756cb_52%,#47509c_100%)]",
  },
  {
    label: "Sun Mint",
    className: "bg-[linear-gradient(135deg,#dbf0bc_0%,#fbd586_54%,#f89b80_100%)]",
  },
  { label: "Peach", className: "bg-[linear-gradient(135deg,#f7c176_0%,#f3a35f_50%,#f08e4e_100%)]" },
  {
    label: "Tangerine",
    className: "bg-[linear-gradient(135deg,#f9b61c_0%,#f98311_50%,#f95307_100%)]",
  },
  { label: "Lime", className: "bg-[linear-gradient(135deg,#c9f881_0%,#b6f18c_52%,#a2ea9a_100%)]" },
  {
    label: "Spring",
    className: "bg-[linear-gradient(135deg,#41ec8d_0%,#3df1a9_52%,#3af6c6_100%)]",
  },
  { label: "Leaf", className: "bg-[linear-gradient(135deg,#cdec49_0%,#87e44b_52%,#39dc4e_100%)]" },
  {
    label: "Iris Mist",
    className: "bg-[linear-gradient(135deg,#9cdedd_0%,#e3c6f7_55%,#9680f4_100%)]",
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
        className: "bg-[url('https://picsum.photos/seed/frame-coast/120/90')] bg-cover bg-center",
      },
      {
        label: "Mountain",
        className:
          "bg-[url('https://picsum.photos/seed/frame-mountain/120/90')] bg-cover bg-center",
      },
      {
        label: "Water",
        className: "bg-[url('https://picsum.photos/seed/frame-water/120/90')] bg-cover bg-center",
      },
      {
        label: "Road",
        className: "bg-[url('https://picsum.photos/seed/frame-road/120/90')] bg-cover bg-center",
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
