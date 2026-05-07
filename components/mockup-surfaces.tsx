import type { CSSProperties, RefObject } from "react";

import { getFrameBackgroundStyle } from "@/components/frame-tab-panel/frame-background-groups";
import type { FrameBackgroundSwatch } from "@/components/frame-tab-panel/types";
import { getFrameAspectRatio } from "@/components/frame-preset-ui";
import { MediaDropFrame } from "@/components/media-drop-frame";
import type { FramePreset } from "@/lib/frame-presets";
import { getLayoutPresetTransform, type LayoutPreset } from "@/lib/layout-presets";
import type { Dimensions, SelectedMedia } from "@/lib/media-types";
import { MOCKUP_MEDIA_FIT_PERCENT, MOCKUP_MEDIA_PREVIEW_SIZES } from "@/lib/mockup-layout";
import { cn } from "@/lib/utils";

type PreviewMockupSurfaceProps = {
  selectedMedia: SelectedMedia | null;
  onMediaFiles: (files: File[]) => void;
  frameBackground: FrameBackgroundSwatch;
  framePreset: FramePreset;
  layoutPreset: LayoutPreset;
};

type ExportMockupSurfaceProps = {
  selectedMedia: SelectedMedia | null;
  frameBackground: FrameBackgroundSwatch;
  framePreset: FramePreset;
  layoutPreset: LayoutPreset;
  surfaceRef: RefObject<HTMLDivElement | null>;
};

type MockupSurfaceProps = {
  selectedMedia: SelectedMedia | null;
  onMediaFiles?: (files: File[]) => void;
  frameBackground: FrameBackgroundSwatch;
  framePreset: FramePreset;
  layoutPreset: LayoutPreset;
  surfaceRef?: RefObject<HTMLDivElement | null>;
  className?: string;
  style?: CSSProperties;
  interactive?: boolean;
  fitBounds?: Dimensions | null;
};

export function PreviewMockupSurface({
  selectedMedia,
  onMediaFiles,
  frameBackground,
  framePreset,
  layoutPreset,
}: PreviewMockupSurfaceProps) {
  return (
    <MockupSurface
      selectedMedia={selectedMedia}
      onMediaFiles={onMediaFiles}
      frameBackground={frameBackground}
      framePreset={framePreset}
      layoutPreset={layoutPreset}
      className="mockup-surface--stage"
      interactive
    />
  );
}

export function ExportMockupSurface({
  selectedMedia,
  frameBackground,
  framePreset,
  layoutPreset,
  surfaceRef,
}: ExportMockupSurfaceProps) {
  return (
    <MockupSurface
      selectedMedia={selectedMedia}
      frameBackground={frameBackground}
      framePreset={framePreset}
      layoutPreset={layoutPreset}
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
  frameBackground,
  framePreset,
  layoutPreset,
  surfaceRef,
  className,
  style,
  interactive = false,
  fitBounds,
}: MockupSurfaceProps) {
  const frameAspectRatio = getFrameAspectRatio(framePreset);
  const frameBackgroundStyle = getFrameBackgroundStyle(frameBackground);
  const transform = getLayoutPresetTransform(layoutPreset);

  return (
    <div
      ref={surfaceRef}
      style={{ aspectRatio: frameAspectRatio, ...frameBackgroundStyle, ...style }}
      className={cn("mockup-surface", className, frameBackground.className)}
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
        style={{
          aspectRatio: frameAspectRatio,
          width: `${MOCKUP_MEDIA_FIT_PERCENT}%`,
          transform,
          transformOrigin: "center center",
          transition: "transform 0.125s linear",
          willChange: "transform",
        }}
        className="rounded-2xl shadow-2xl"
      />
    </div>
  );
}
