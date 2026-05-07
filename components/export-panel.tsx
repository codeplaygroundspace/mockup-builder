import { Upload } from "lucide-react";

import { Button } from "@/components/button";
import { getFrameBackgroundStyle } from "@/components/frame-tab-panel/frame-background-groups";
import type { FrameBackgroundSwatch } from "@/components/frame-tab-panel/types";
import { MediaDropFrame } from "@/components/media-drop-frame";
import { Panel, PanelRow, PanelSection, PanelStack } from "@/components/panel";
import {
  getLayoutPresetTransform,
  LAYOUT_PRESETS,
  type LayoutPreset,
  type LayoutPresetId,
} from "@/lib/layout-presets";
import type { SelectedMedia } from "@/lib/media-types";
import { EXPORT_PANEL_MEDIA_WIDTH, MOCKUP_MEDIA_FIT_PERCENT } from "@/lib/mockup-layout";
import { cn } from "@/lib/utils";

type ExportPanelProps = {
  selectedMedia: SelectedMedia | null;
  frameBackground: FrameBackgroundSwatch;
  selectedLayoutPresetId: LayoutPresetId;
  onLayoutPresetChange: (presetId: LayoutPresetId) => void;
  onExport?: () => void;
};

export function ExportPanel({
  selectedMedia,
  frameBackground,
  selectedLayoutPresetId,
  onLayoutPresetChange,
  onExport,
}: ExportPanelProps) {
  const frameBackgroundStyle = getFrameBackgroundStyle(frameBackground);

  return (
    <Panel>
      <PanelRow>
        <Button
          variant="secondary"
          onClick={onExport}
          className="flex-1 justify-start rounded-2xl bg-zinc-100 text-zinc-950 hover:bg-white"
        >
          <Upload className="size-4" />
          <span className="font-medium">Export</span>
          <span className="ml-auto text-xs text-zinc-600">1x · PNG</span>
        </Button>
      </PanelRow>

      <div
        style={frameBackgroundStyle}
        className={cn("mockup-surface mockup-surface--panel", frameBackground.className)}
      >
        <MediaDropFrame
          size="md"
          primary="Drop or Paste"
          secondary="Images & Videos"
          className={cn("aspect-4/3 rounded-xl", EXPORT_PANEL_MEDIA_WIDTH)}
        />
      </div>

      <PanelSection label="Layout Presets">
        <PanelStack>
          {LAYOUT_PRESETS.map((preset) => (
            <LayoutPresetCard
              key={preset.id}
              preset={preset}
              selectedMedia={selectedMedia}
              frameBackground={frameBackground}
              selected={preset.id === selectedLayoutPresetId}
              onSelect={onLayoutPresetChange}
            />
          ))}
        </PanelStack>
      </PanelSection>
    </Panel>
  );
}

function LayoutPresetCard({
  preset,
  selectedMedia,
  frameBackground,
  selected,
  onSelect,
}: {
  preset: LayoutPreset;
  selectedMedia: SelectedMedia | null;
  frameBackground: FrameBackgroundSwatch;
  selected: boolean;
  onSelect: (presetId: LayoutPresetId) => void;
}) {
  const frameBackgroundStyle = getFrameBackgroundStyle(frameBackground);
  const transform = getLayoutPresetTransform(preset);
  const mediaFrameStyle = {
    width: `${MOCKUP_MEDIA_FIT_PERCENT}%`,
    height: "auto",
    transform,
    transformOrigin: "center center",
    transition: "transform 0.125s linear",
    willChange: "transform",
    zIndex: 1,
  };

  return (
    <button
      type="button"
      aria-pressed={selected}
      aria-label={`Layout preset: ${preset.label}`}
      onClick={() => onSelect(preset.id)}
      style={frameBackgroundStyle}
      className={cn(
        "layout-preset-card",
        frameBackground.className,
        selected ? "ring-selected" : "ring-1 ring-zinc-800 hover:ring-zinc-700"
      )}
    >
      {selectedMedia ? (
        <MediaDropFrame
          size="md"
          primary=""
          secondary=""
          previewUrl={selectedMedia.previewUrl}
          selectedName={selectedMedia.name}
          fitToContent
          fitMaxPercent={MOCKUP_MEDIA_FIT_PERCENT}
          className="absolute aspect-4/3 rounded-lg shadow-md"
          style={mediaFrameStyle}
        />
      ) : (
        <div
          aria-hidden="true"
          className="drop-frame drop-frame--md absolute aspect-4/3 rounded-lg shadow-md"
          style={mediaFrameStyle}
        />
      )}
    </button>
  );
}
