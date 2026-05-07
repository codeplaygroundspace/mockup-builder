"use client";

import { FrameBackgroundLibrary } from "./frame-background-library";
import { FRAME_BACKGROUND_GROUPS } from "./frame-background-groups";
import { FrameOptionTile } from "./frame-option-tile";
import { FRAME_SCENES } from "./frame-scenes";

import { FrameRatioDropdown } from "@/components/frame-ratio-dropdown";
import { Section } from "@/components/section";
import type { FramePreset } from "@/lib/frame-presets";

type FrameTabPanelProps = {
  frameBackgroundId: string;
  onFrameBackgroundChange: (id: string) => void;
  framePreset: FramePreset;
  onFramePresetChange: (preset: FramePreset) => void;
};

export function FrameTabPanel({
  frameBackgroundId,
  onFrameBackgroundChange,
  framePreset,
  onFramePresetChange,
}: FrameTabPanelProps) {
  return (
    <div className="frame-tab-content">
      <FrameRatioDropdown framePreset={framePreset} onFramePresetChange={onFramePresetChange} />

      <Section label="Scene">
        <div className="frame-option-grid frame-option-grid--three">
          {FRAME_SCENES.map((scene) => (
            <FrameOptionTile key={scene.label} {...scene} compact />
          ))}
        </div>
      </Section>

      <FrameBackgroundLibrary
        groups={FRAME_BACKGROUND_GROUPS}
        selectedId={frameBackgroundId}
        onSelect={onFrameBackgroundChange}
      />
    </div>
  );
}
