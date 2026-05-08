import { PreviewMockupSurface } from "@/components/mockup-surfaces";
import type { FrameBackgroundSwatch } from "@/components/frame-tab-panel/types";
import type { StyleSwatchOption } from "@/components/style-swatches";
import type { FramePreset } from "@/lib/frame-presets";
import type { LayoutPreset } from "@/lib/layout-presets";
import type { SelectedMedia } from "@/lib/media-types";

type PreviewStageProps = {
  selectedMedia: SelectedMedia | null;
  onMediaFiles: (files: File[]) => void;
  frameBackground: FrameBackgroundSwatch;
  framePreset: FramePreset;
  layoutPreset: LayoutPreset;
  borderStyle: StyleSwatchOption;
};

export function PreviewStage({
  selectedMedia,
  onMediaFiles,
  frameBackground,
  framePreset,
  layoutPreset,
  borderStyle,
}: PreviewStageProps) {
  return (
    <main className="stage">
      <PreviewMockupSurface
        selectedMedia={selectedMedia}
        onMediaFiles={onMediaFiles}
        frameBackground={frameBackground}
        framePreset={framePreset}
        layoutPreset={layoutPreset}
        borderStyle={borderStyle}
      />
    </main>
  );
}
