import { Command, Maximize2, MessageSquareMore, Redo2, Undo2 } from "lucide-react";
import type { CSSProperties } from "react";
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
};

type MockupSurfaceProps = {
  selectedMedia: SelectedMedia | null;
  onMediaFiles?: (files: File[]) => void;
  frameBackgroundClassName: string;
  framePreset: FramePreset;
  surfaceRef?: RefObject<HTMLDivElement | null>;
  className?: string;
  style?: CSSProperties;
  interactive?: boolean;
  fitBounds?: { width: number; height: number } | null;
};

export function PreviewStage({
  selectedMedia,
  onMediaFiles,
  frameBackgroundClassName,
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

      <MockupSurface
        selectedMedia={selectedMedia}
        onMediaFiles={onMediaFiles}
        frameBackgroundClassName={frameBackgroundClassName}
        framePreset={framePreset}
        className="mockup-surface--stage"
        interactive
      />
    </main>
  );
}

export function MockupSurface({
  selectedMedia,
  onMediaFiles,
  frameBackgroundClassName,
  framePreset,
  surfaceRef,
  className,
  style,
  interactive = false,
  fitBounds,
}: MockupSurfaceProps) {
  const frameAspectRatio = getFrameAspectRatio(framePreset);

  return (
    <div
      ref={surfaceRef}
      style={{ aspectRatio: frameAspectRatio, ...style }}
      className={cn("mockup-surface", className, frameBackgroundClassName)}
    >
      <MediaDropFrame
        size="lg"
        primary="Select Media"
        secondary="Open Media Picker"
        interactive={interactive}
        ariaLabel="Select an image"
        previewUrl={selectedMedia?.previewUrl ?? null}
        selectedName={selectedMedia?.name ?? null}
        onFiles={interactive ? onMediaFiles : undefined}
        fitToContent
        fitMaxPercent={78}
        fitBounds={fitBounds}
        style={{ aspectRatio: frameAspectRatio }}
        className="w-[78%] rounded-2xl shadow-2xl"
      />
    </div>
  );
}
