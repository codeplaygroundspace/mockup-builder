"use client";

import { Ban } from "lucide-react";

import { FrameRatioDropdown } from "@/components/frame-ratio-dropdown";
import { Section } from "@/components/section";
import type { FramePreset } from "@/lib/frame-presets";
import { cn } from "@/lib/utils";

type Tile = {
  label: string;
  icon: React.ReactNode;
  selected?: boolean;
  previewClassName?: string;
};

type Swatch = {
  label: string;
  className: string;
};

const SCENES: ReadonlyArray<Tile> = [
  { label: "None", icon: <Ban className="size-5" />, selected: true },
  {
    label: "Shadow",
    icon: null,
    previewClassName:
      "bg-[url('https://picsum.photos/seed/frame-shadow-scene/120/90')] bg-cover bg-center",
  },
  {
    label: "Shapes",
    icon: null,
    previewClassName:
      "bg-[radial-gradient(circle_at_25%_25%,#2563eb_0_18%,transparent_19%),radial-gradient(circle_at_72%_38%,#22d3ee_0_13%,transparent_14%),linear-gradient(135deg,#111827,#172554_55%,#2563eb)]",
  },
];

const SWATCH_GROUPS: ReadonlyArray<{
  title: string;
  meta?: string;
  swatches: ReadonlyArray<Swatch>;
}> = [
  {
    title: "Solid",
    swatches: [
      { label: "Blank", className: "bg-zinc-50" },
      {
        label: "Fog",
        className: "bg-[radial-gradient(circle_at_28%_35%,#f8fafc,#e7dfcf_42%,#78716c)]",
      },
      {
        label: "Smoke",
        className: "bg-[radial-gradient(circle_at_70%_35%,#f4f4f5,#d0c6b4_38%,#4b4238)]",
      },
      {
        label: "Cedar",
        className: "bg-[linear-gradient(135deg,#cbb294,#70533b_58%,#312116)]",
      },
    ],
  },
  {
    title: "Gradient",
    swatches: [
      { label: "Rouge", className: "bg-mockup-gradient" },
      { label: "Violet", className: "bg-[linear-gradient(135deg,#fb0f7a,#5b21b6)]" },
      { label: "Blush", className: "bg-[linear-gradient(135deg,#fecdd3,#a855f7)]" },
      {
        label: "Clay",
        className: "bg-[linear-gradient(135deg,#e4b6a7,#8b5f4a_58%,#443125)]",
      },
    ],
  },
  {
    title: "Glass",
    meta: "By Paper",
    swatches: [
      {
        label: "Ripple",
        className:
          "bg-[repeating-radial-gradient(circle_at_35%_50%,#eef2ff_0_2px,#1e3a8a_3px_5px,#0f172a_6px_8px)]",
      },
      { label: "Amber", className: "bg-[linear-gradient(135deg,#fed7aa,#f97316,#22d3ee)]" },
      {
        label: "Prism",
        className:
          "bg-[repeating-conic-gradient(from_10deg,#fef08a_0_8deg,#f97316_9deg_18deg,#020617_19deg_26deg)]",
      },
      {
        label: "Current",
        className:
          "bg-[repeating-linear-gradient(12deg,#0f172a_0_6px,#0891b2_7px_9px,#111827_10px_16px)]",
      },
    ],
  },
  {
    title: "Cosmic",
    swatches: [
      { label: "Aurora", className: "bg-[linear-gradient(135deg,#111827,#6d28d9,#fafafa)]" },
      { label: "Dusk", className: "bg-[linear-gradient(180deg,#0f172a,#1f2937_55%,#f472b6)]" },
      { label: "Pearl", className: "bg-[linear-gradient(135deg,#0f172a,#334155_48%,#fdf2f8)]" },
      {
        label: "Night",
        className: "bg-[linear-gradient(135deg,#1e1b4b,#581c87,#111827)]",
      },
    ],
  },
  {
    title: "Mystic",
    swatches: [
      {
        label: "Arc",
        className: "bg-[radial-gradient(ellipse_at_bottom,#4338ca_0_30%,#f8fafc_31%)]",
      },
      { label: "Glow", className: "bg-[radial-gradient(ellipse_at_bottom,#7c3aed,#f5f3ff_42%)]" },
      {
        label: "Wave",
        className:
          "bg-[repeating-radial-gradient(ellipse_at_bottom,#7c3aed_0_8px,#c4b5fd_9px_15px)]",
      },
      {
        label: "Mauve",
        className: "bg-[linear-gradient(135deg,#9ca3af,#4338ca,#4b5563)]",
      },
    ],
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
    swatches: [
      { label: "Fold", className: "bg-[linear-gradient(135deg,#4f46e5,#7c3aed,#312e81)]" },
      { label: "Terrain", className: "bg-[linear-gradient(135deg,#0284c7,#f97316,#7c2d12)]" },
      { label: "Flame", className: "bg-[linear-gradient(135deg,#f59e0b,#ec4899,#020617)]" },
      {
        label: "Copper",
        className: "bg-[linear-gradient(135deg,#0f172a,#92400e,#f97316)]",
      },
    ],
  },
  {
    title: "Earth",
    swatches: [
      { label: "Sky", className: "bg-[linear-gradient(180deg,#0ea5e9,#f8fafc)]" },
      { label: "Salt", className: "bg-[linear-gradient(180deg,#e2e8f0,#fecaca,#94a3b8)]" },
      { label: "Dune", className: "bg-[linear-gradient(180deg,#dbeafe,#fed7aa,#f8fafc)]" },
      {
        label: "Dust",
        className: "bg-[linear-gradient(135deg,#d1d5db,#a16207,#78350f)]",
      },
    ],
  },
  {
    title: "Radiant",
    swatches: [
      { label: "Plum", className: "bg-[linear-gradient(180deg,#e0f2fe,#be185d)]" },
      { label: "Blue", className: "bg-[linear-gradient(135deg,#ddd6fe,#4338ca,#be123c)]" },
      { label: "Coral", className: "bg-[linear-gradient(135deg,#ffffff,#ffffff_45%,#ef4444)]" },
      {
        label: "Terra",
        className: "bg-[linear-gradient(135deg,#f8fafc,#b45309,#7f1d1d)]",
      },
    ],
  },
  {
    title: "Texture",
    swatches: [
      {
        label: "Linen",
        className: "bg-[repeating-linear-gradient(90deg,#e7e5e4_0_3px,#f5f5f4_4px_8px)]",
      },
      {
        label: "Stripe",
        className: "bg-[repeating-linear-gradient(90deg,#d6d3d1_0_5px,#f5f5f4_6px_12px)]",
      },
      {
        label: "Wood",
        className:
          "bg-[repeating-linear-gradient(0deg,#40281c_0_3px,#8b5e3c_4px_7px,#2d1f18_8px_10px)]",
      },
      {
        label: "Bark",
        className: "bg-[linear-gradient(135deg,#a16207,#78350f,#292524)]",
      },
    ],
  },
];

type FrameTabPanelProps = {
  frameBackgroundClassName: string;
  onFrameBackgroundChange: (className: string) => void;
  framePreset: FramePreset;
  onFramePresetChange: (preset: FramePreset) => void;
};

export function FrameTabPanel({
  frameBackgroundClassName,
  onFrameBackgroundChange,
  framePreset,
  onFramePresetChange,
}: FrameTabPanelProps) {
  return (
    <div className="frame-tab-content">
      <FrameRatioDropdown framePreset={framePreset} onFramePresetChange={onFramePresetChange} />

      <Section label="Scene">
        <div className="frame-option-grid frame-option-grid--three">
          {SCENES.map((scene) => (
            <FrameOptionTile key={scene.label} {...scene} compact />
          ))}
        </div>
      </Section>

      <div className="frame-library">
        {SWATCH_GROUPS.map((group) => (
          <div key={group.title} className="frame-library-group">
            <div className="frame-library-group__header">
              <h3>{group.title}</h3>
              {group.title === "Glass" ? <span className="frame-badge">New</span> : null}
              {group.meta ? <span className="frame-library-group__meta">{group.meta}</span> : null}
            </div>
            <SwatchGrid
              swatches={group.swatches}
              selectedClassName={frameBackgroundClassName}
              onSelect={onFrameBackgroundChange}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function FrameOptionTile({
  label,
  icon,
  selected,
  compact,
  previewClassName,
}: Tile & { compact?: boolean }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      className={cn(
        "style-swatch",
        "frame-option-tile",
        compact && "frame-option-tile--compact",
        selected && "is-selected"
      )}
    >
      <span className={cn("frame-option-tile__preview", previewClassName)}>
        {icon ? <span className="frame-option-tile__icon">{icon}</span> : null}
      </span>
      <span className="frame-option-tile__label">{label}</span>
    </button>
  );
}

function SwatchGrid({
  swatches,
  selectedClassName,
  onSelect,
}: {
  swatches: ReadonlyArray<Swatch>;
  selectedClassName: string;
  onSelect: (className: string) => void;
}) {
  return (
    <div className="frame-swatch-grid">
      {swatches.map((swatch) => {
        const isSelected = swatch.className === selectedClassName;
        return (
          <button
            key={swatch.label}
            type="button"
            aria-pressed={isSelected}
            aria-label={swatch.label}
            onClick={() => onSelect(swatch.className)}
            className={cn("frame-swatch", swatch.className, isSelected && "is-selected")}
          />
        );
      })}
    </div>
  );
}
