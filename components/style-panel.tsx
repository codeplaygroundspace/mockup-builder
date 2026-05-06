"use client";

import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ImagePlus,
  MoreHorizontal,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/button";
import { FrameTabPanel } from "@/components/frame-tab-panel";
import { Section } from "@/components/section";
import { SegmentedControl } from "@/components/segmented-control";
import { cn } from "@/lib/utils";

const BUILD_MODES = ["Mockup", "Frame"] as const;

const STYLES: ReadonlyArray<{
  name: string;
  swatchClassName: string;
  selected?: boolean;
}> = [
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

export function StylePanel() {
  const [activeMode, setActiveMode] = useState<(typeof BUILD_MODES)[number]>("Mockup");

  return (
    <aside className="app-panel style-panel">
      <div className="panel-row style-panel__topbar">
        <button type="button" aria-label="Workspace" className="workspace-button">
          <span className="workspace-avatar">MB</span>
          <ChevronRight className="size-4 text-zinc-400" />
        </button>
        <button type="button" aria-label="Templates" className="template-button">
          <span className="template-button__label">
            <span aria-hidden className="template-button__icon">
              <Sparkles className="size-4" />
            </span>
            <span className="text-sm font-medium">Templates</span>
          </span>
          <ChevronRight className="size-4 text-zinc-400" />
        </button>
      </div>

      <SegmentedControl
        ariaLabel="Build mode"
        options={BUILD_MODES}
        value={activeMode}
        className="style-panel__tabs"
        onValueChange={(value) => setActiveMode(value as (typeof BUILD_MODES)[number])}
      />

      {activeMode === "Mockup" ? <MockupTabPanel /> : <FrameTabPanel />}
    </aside>
  );
}

function MockupTabPanel() {
  return (
    <>
      <button
        type="button"
        aria-label="Source type: Screenshot"
        className="source-button style-panel__tab-header"
      >
        <span aria-hidden className="source-button__thumb" />
        <span className="source-button__copy">
          <span className="text-sm font-medium">Screenshot</span>
          <span className="text-xs text-zinc-400">Adapts To Media</span>
        </span>
        <ChevronDown className="size-4 text-zinc-400" />
      </button>

      <div className="control-row-card">
        <span aria-hidden className="icon-swatch size-9">
          <Sparkles className="accent-icon size-4" />
        </span>
        <span className="flex-1 text-sm">Magic Preset</span>
        <Button variant="ghost" size="icon-sm" aria-label="Previous preset">
          <ChevronLeft />
        </Button>
        <Button variant="ghost" size="icon-sm" aria-label="Next preset">
          <ChevronRight />
        </Button>
      </div>

      <Section label="Media">
        <div className="panel-card media-picker-card">
          <button type="button" aria-label="Choose media" className="media-picker-button">
            <span aria-hidden className="media-picker-button__icon">
              +
            </span>
          </button>
          <p className="text-xs text-zinc-400">Drop media or click to choose</p>
        </div>
      </Section>

      <Section label="Style">
        <div className="swatch-grid">
          {STYLES.map((style) => (
            <StyleSwatch key={style.name} {...style} />
          ))}
          <button type="button" aria-label="More styles" className="more-tile">
            <MoreHorizontal className="size-5" />
          </button>
        </div>
      </Section>

      <Section label="Effect">
        <div className="panel-card panel-card--padded text-xs text-zinc-400">
          <ImagePlus className="mb-2 size-4" />
          Adjust shadow, blur, and reflection.
        </div>
      </Section>
    </>
  );
}

function StyleSwatch({
  name,
  swatchClassName,
  selected,
}: {
  name: string;
  swatchClassName: string;
  selected?: boolean;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      className={cn("style-swatch", selected && "is-selected")}
    >
      <div className={cn("style-swatch__preview", selected && "ring-selected")}>
        <div className={cn("style-swatch__inner", swatchClassName)}>
          <div className="style-swatch__reflection" />
        </div>
      </div>
      <span className="truncate">{name}</span>
    </button>
  );
}
