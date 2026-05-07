import type { CSSProperties, RefObject } from "react";

import { MediaDropFrame } from "@/components/media-drop-frame";
import { getFrameAspectRatio, type FramePreset } from "@/lib/frame-presets";
import type { Dimensions, SelectedMedia } from "@/lib/media-types";
import { MOCKUP_MEDIA_FIT_PERCENT, MOCKUP_MEDIA_PREVIEW_SIZES } from "@/lib/mockup-layout";
import { cn } from "@/lib/utils";

type PreviewMockupSurfaceProps = {
  selectedMedia: SelectedMedia | null;
  onMediaFiles: (files: File[]) => void;
  frameBackgroundClassName: string;
  framePreset: FramePreset;
};

type ExportMockupSurfaceProps = {
  selectedMedia: SelectedMedia | null;
  frameBackgroundClassName: string;
  framePreset: FramePreset;
  surfaceRef: RefObject<HTMLDivElement | null>;
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
  fitBounds?: Dimensions | null;
};

export function PreviewMockupSurface({
  selectedMedia,
  onMediaFiles,
  frameBackgroundClassName,
  framePreset,
}: PreviewMockupSurfaceProps) {
  return (
    <MockupSurface
      selectedMedia={selectedMedia}
      onMediaFiles={onMediaFiles}
      frameBackgroundClassName={frameBackgroundClassName}
      framePreset={framePreset}
      className="mockup-surface--stage"
      interactive
    />
  );
}

export function ExportMockupSurface({
  selectedMedia,
  frameBackgroundClassName,
  framePreset,
  surfaceRef,
}: ExportMockupSurfaceProps) {
  return (
    <MockupSurface
      selectedMedia={selectedMedia}
      frameBackgroundClassName={frameBackgroundClassName}
      framePreset={framePreset}
      surfaceRef={surfaceRef}
      className="mockup-surface--export"
      style={{ width: `${framePreset.width}px`, height: `${framePreset.height}px` }}
      fitBounds={framePreset}
    />
  );
}

function MockupSurface({
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
        previewSizes={MOCKUP_MEDIA_PREVIEW_SIZES}
        onFiles={interactive ? onMediaFiles : undefined}
        fitToContent
        fitMaxPercent={MOCKUP_MEDIA_FIT_PERCENT}
        fitBounds={fitBounds}
        style={{ aspectRatio: frameAspectRatio, width: `${MOCKUP_MEDIA_FIT_PERCENT}%` }}
        className="rounded-2xl shadow-2xl"
      />
    </div>
  );
}
