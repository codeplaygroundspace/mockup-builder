"use client";

import { FrameBackgroundLibrary } from "./frame-background-library";
import { FRAME_BACKGROUND_GROUPS } from "./frame-background-groups";
import { FrameOptionTile } from "./frame-option-tile";
import { FRAME_SCENES } from "./frame-scenes";

import { FrameRatioDropdown } from "@/components/frame-ratio-dropdown";
import { PanelSection, PanelStack } from "@/components/panel";
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
    <PanelStack className="frame-tab-content">
      <FrameRatioDropdown framePreset={framePreset} onFramePresetChange={onFramePresetChange} />

      <PanelSection label="Scene">
        <div className="frame-option-grid frame-option-grid--three">
          {FRAME_SCENES.map((scene) => (
            <FrameOptionTile key={scene.label} {...scene} compact />
          ))}
        </div>
      </PanelSection>

      <FrameBackgroundLibrary
        groups={FRAME_BACKGROUND_GROUPS}
        selectedId={frameBackgroundId}
        onSelect={onFrameBackgroundChange}
      />
    </PanelStack>
  );
}
