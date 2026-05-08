"use client";

import Image from "next/image";
import { useState } from "react";

import { FrameTabPanel } from "@/components/frame-tab-panel";
import { MediaDropFrame } from "@/components/media-drop-frame";
import { Panel, PanelSection } from "@/components/panel";
import { SegmentedControl } from "@/components/segmented-control";
import {
  STYLE_SWATCHES,
  type BorderStyleId,
  type StyleSwatchOption,
} from "@/components/style-swatches";
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
  selectedBorderStyleId: BorderStyleId;
  onBorderStyleChange: (id: BorderStyleId) => void;
};

export function StylePanel({
  selectedMedia,
  onMediaFiles,
  frameBackgroundId,
  onFrameBackgroundChange,
  framePreset,
  onFramePresetChange,
  selectedBorderStyleId,
  onBorderStyleChange,
}: StylePanelProps) {
  const [activeMode, setActiveMode] = useState<(typeof BUILD_MODES)[number]>("Mockup");

  return (
    <Panel gap="compact">
      <SegmentedControl
        ariaLabel="Build mode"
        options={BUILD_MODES}
        value={activeMode}
        onValueChange={(value) => setActiveMode(value as (typeof BUILD_MODES)[number])}
      />

      {activeMode === "Mockup" ? (
        <MockupTabPanel
          selectedMedia={selectedMedia}
          onMediaFiles={onMediaFiles}
          selectedBorderStyleId={selectedBorderStyleId}
          onBorderStyleChange={onBorderStyleChange}
        />
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
  selectedBorderStyleId,
  onBorderStyleChange,
}: Pick<
  StylePanelProps,
  "selectedMedia" | "onMediaFiles" | "selectedBorderStyleId" | "onBorderStyleChange"
>) {
  return (
    <>
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

      <PanelSection label="Border">
        <div className="swatch-grid">
          {STYLE_SWATCHES.map((style) => (
            <StyleSwatch
              key={style.id}
              {...style}
              selected={style.id === selectedBorderStyleId}
              onSelect={onBorderStyleChange}
            />
          ))}
        </div>
      </PanelSection>
    </>
  );
}

function StyleSwatch({
  id,
  name,
  thumbnailUrl,
  selected,
  onSelect,
}: StyleSwatchOption & {
  onSelect: (id: BorderStyleId) => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={() => onSelect(id)}
      className={cn("style-swatch", selected && "is-selected")}
    >
      <div className={cn("style-swatch__preview", selected && "ring-selected")}>
        <Image
          src={thumbnailUrl}
          alt=""
          width={320}
          height={241}
          className="style-swatch__image"
          draggable={false}
        />
      </div>
      <span className="truncate">{name}</span>
    </button>
  );
}
