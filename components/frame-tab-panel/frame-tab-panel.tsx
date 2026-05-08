"use client";

import { FrameBackgroundLibrary } from "./frame-background-library";
import { FRAME_BACKGROUND_GROUPS } from "./frame-background-groups";

import { FrameRatioDropdown } from "@/components/frame-ratio-dropdown";
import { PanelStack } from "@/components/panel";
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

      <FrameBackgroundLibrary
        groups={FRAME_BACKGROUND_GROUPS}
        selectedId={frameBackgroundId}
        onSelect={onFrameBackgroundChange}
      />
    </PanelStack>
  );
}
