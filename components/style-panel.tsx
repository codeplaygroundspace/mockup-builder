"use client";

import { ChevronDown, ChevronRight, ImagePlus, MoreHorizontal, Sparkles } from "lucide-react";
import { useState } from "react";

import { FrameTabPanel } from "@/components/frame-tab-panel";
import { MediaDropFrame } from "@/components/media-drop-frame";
import { Panel, PanelRow, PanelSection } from "@/components/panel";
import { SegmentedControl } from "@/components/segmented-control";
import { STYLE_SWATCHES, type StyleSwatchOption } from "@/components/style-swatches";
import type { FramePreset } from "@/lib/frame-presets";
import type { SelectedMedia } from "@/lib/media-types";
import { cn } from "@/lib/utils";

const BUILD_MODES = ["Mockup", "Frame"] as const;

type StylePanelProps = {
  selectedMedia: SelectedMedia | null;
  onMediaFiles: (files: File[]) => void;
  frameBackgroundId: string;
  onFrameBackgroundChange: (id: string) => void;
  framePreset: FramePreset;
  onFramePresetChange: (preset: FramePreset) => void;
};

export function StylePanel({
  selectedMedia,
  onMediaFiles,
  frameBackgroundId,
  onFrameBackgroundChange,
  framePreset,
  onFramePresetChange,
}: StylePanelProps) {
  const [activeMode, setActiveMode] = useState<(typeof BUILD_MODES)[number]>("Mockup");

  return (
    <Panel gap="compact">
      <PanelRow>
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
      </PanelRow>

      <SegmentedControl
        ariaLabel="Build mode"
        options={BUILD_MODES}
        value={activeMode}
        onValueChange={(value) => setActiveMode(value as (typeof BUILD_MODES)[number])}
      />

      {activeMode === "Mockup" ? (
        <MockupTabPanel selectedMedia={selectedMedia} onMediaFiles={onMediaFiles} />
      ) : (
        <FrameTabPanel
          frameBackgroundId={frameBackgroundId}
          onFrameBackgroundChange={onFrameBackgroundChange}
          framePreset={framePreset}
          onFramePresetChange={onFramePresetChange}
        />
      )}
    </Panel>
  );
}

function MockupTabPanel({
  selectedMedia,
  onMediaFiles,
}: Pick<StylePanelProps, "selectedMedia" | "onMediaFiles">) {
  return (
    <>
      <button type="button" aria-label="Source type: Screenshot" className="source-button">
        <span aria-hidden className="source-button__thumb" />
        <span className="source-button__copy">
          <span className="text-sm font-medium">Screenshot</span>
          <span className="text-xs text-zinc-400">Adapts To Media</span>
        </span>
        <ChevronDown className="size-4 text-zinc-400" />
      </button>

      <PanelSection label="Media">
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
      </PanelSection>

      <PanelSection label="Style">
        <div className="swatch-grid">
          {STYLE_SWATCHES.map((style) => (
            <StyleSwatch key={style.name} {...style} />
          ))}
          <button type="button" aria-label="More styles" className="more-tile">
            <MoreHorizontal className="size-5" />
          </button>
        </div>
      </PanelSection>

      <PanelSection label="Effect">
        <div className="panel-card panel-card--padded text-xs text-zinc-400">
          <ImagePlus className="mb-2 size-4" />
          Adjust shadow, blur, and reflection.
        </div>
      </PanelSection>
    </>
  );
}

function StyleSwatch({ name, swatchClassName, selected }: StyleSwatchOption) {
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
