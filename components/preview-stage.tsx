import { Command, Maximize2, MessageSquareMore, Redo2, Undo2 } from "lucide-react";
import type { RefObject } from "react";

import { Button } from "@/components/button";
import { MediaDropFrame } from "@/components/media-drop-frame";
import { getFrameAspectRatio, type FramePreset } from "@/lib/frame-presets";
import { cn } from "@/lib/utils";

type SelectedMedia = {
  previewUrl: string;
  name: string;
};

type PreviewStageProps = {
  selectedMedia: SelectedMedia | null;
  onMediaFiles: (files: File[]) => void;
  frameBackgroundClassName: string;
  framePreset: FramePreset;
  stageRef?: RefObject<HTMLDivElement | null>;
};

export function PreviewStage({
  selectedMedia,
  onMediaFiles,
  frameBackgroundClassName,
  framePreset,
  stageRef,
}: PreviewStageProps) {
  const frameAspectRatio = getFrameAspectRatio(framePreset);

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

      <div
        ref={stageRef}
        style={{ aspectRatio: frameAspectRatio }}
        className={cn("mockup-surface mockup-surface--stage", frameBackgroundClassName)}
      >
        <MediaDropFrame
          size="lg"
          primary="Select Media"
          secondary="Open Media Picker"
          interactive
          ariaLabel="Select an image"
          previewUrl={selectedMedia?.previewUrl ?? null}
          selectedName={selectedMedia?.name ?? null}
          onFiles={onMediaFiles}
          fitToContent
          fitMaxPercent={78}
          style={{ aspectRatio: frameAspectRatio }}
          className="w-[78%] rounded-2xl shadow-2xl"
        />
      </div>
    </main>
  );
}
