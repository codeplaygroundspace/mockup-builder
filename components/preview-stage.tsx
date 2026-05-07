import { Command, Maximize2, MessageSquareMore, Redo2, Undo2 } from "lucide-react";

import { Button } from "@/components/button";
import { PreviewMockupSurface } from "@/components/mockup-surfaces";
import type { FrameBackgroundSwatch } from "@/components/frame-tab-panel/types";
import type { FramePreset } from "@/lib/frame-presets";
import type { SelectedMedia } from "@/lib/media-types";

type PreviewStageProps = {
  selectedMedia: SelectedMedia | null;
  onMediaFiles: (files: File[]) => void;
  frameBackground: FrameBackgroundSwatch;
  framePreset: FramePreset;
};

export function PreviewStage({
  selectedMedia,
  onMediaFiles,
  frameBackground,
  framePreset,
}: PreviewStageProps) {
  return (
    <main className="stage">
      <div className="command-bar">
        <Button variant="ghost" size="icon-sm" aria-label="Undo" tooltip="Undo">
          <Undo2 />
        </Button>
        <Button variant="ghost" size="icon-sm" aria-label="Redo" tooltip="Redo">
          <Redo2 />
        </Button>
        <Button variant="ghost" size="icon-sm" aria-label="Command palette" tooltip="Commands">
          <Command />
        </Button>
        <Button variant="secondary" size="sm" className="rounded-full px-3">
          Start Over
        </Button>
        <Button variant="ghost" size="icon-sm" aria-label="Fullscreen" tooltip="Fullscreen">
          <Maximize2 />
        </Button>
        <Button variant="ghost" size="icon-sm" aria-label="Write feedback" tooltip="Write feedback">
          <MessageSquareMore />
        </Button>
      </div>

      <PreviewMockupSurface
        selectedMedia={selectedMedia}
        onMediaFiles={onMediaFiles}
        frameBackground={frameBackground}
        framePreset={framePreset}
      />
    </main>
  );
}
