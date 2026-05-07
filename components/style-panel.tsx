"use client";

import { ChevronDown, ChevronRight, ImagePlus, MoreHorizontal, Sparkles } from "lucide-react";
import { useState } from "react";

import { FrameTabPanel } from "@/components/frame-tab-panel";
import { MediaDropFrame } from "@/components/media-drop-frame";
import { Section } from "@/components/section";
import { SegmentedControl } from "@/components/segmented-control";
import type { FramePreset } from "@/lib/frame-presets";
import type { SelectedMedia } from "@/lib/media-types";
import { cn } from "@/lib/utils";

const BUILD_MODES = ["Mockup", "Frame"] as const;

type StylePanelProps = {
  selectedMedia: SelectedMedia | null;
  onMediaFiles: (files: File[]) => void;
  frameBackgroundClassName: string;
  onFrameBackgroundChange: (className: string) => void;
  framePreset: FramePreset;
  onFramePresetChange: (preset: FramePreset) => void;
};

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

export function StylePanel({
  selectedMedia,
  onMediaFiles,
  frameBackgroundClassName,
  onFrameBackgroundChange,
  framePreset,
  onFramePresetChange,
}: StylePanelProps) {
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

      {activeMode === "Mockup" ? (
        <MockupTabPanel selectedMedia={selectedMedia} onMediaFiles={onMediaFiles} />
      ) : (
        <FrameTabPanel
          frameBackgroundClassName={frameBackgroundClassName}
          onFrameBackgroundChange={onFrameBackgroundChange}
          framePreset={framePreset}
          onFramePresetChange={onFramePresetChange}
        />
      )}
    </aside>
  );
}

function MockupTabPanel({
  selectedMedia,
  onMediaFiles,
}: Pick<StylePanelProps, "selectedMedia" | "onMediaFiles">) {
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

      <Section label="Media">
        <div className="panel-card media-picker-card">
          <div className="flex h-24 w-full items-center justify-center">
            <MediaDropFrame
              size="md"
              primary="Drop Media"
              secondary="Click To Choose"
              interactive
              ariaLabel="Drop media or click to choose"
              previewUrl={selectedMedia?.previewUrl ?? null}
              selectedName={selectedMedia?.name ?? null}
              onFiles={onMediaFiles}
              fitToContent
              className="h-24 w-full rounded-xl"
            />
          </div>
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
