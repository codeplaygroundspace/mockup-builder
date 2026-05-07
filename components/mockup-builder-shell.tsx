"use client";

import { useCallback, useMemo, useRef, useState } from "react";

import { ExportPanel } from "@/components/export-panel";
import {
  DEFAULT_FRAME_BACKGROUND_ID,
  getFrameBackgroundSwatchById,
} from "@/components/frame-tab-panel/frame-background-groups";
import { ExportMockupSurface } from "@/components/mockup-surfaces";
import { PreviewStage } from "@/components/preview-stage";
import { StylePanel } from "@/components/style-panel";
import { useObjectUrl } from "@/hooks/use-object-url";
import { DEFAULT_FRAME_PRESET } from "@/lib/frame-presets";
import { exportMockupPng } from "@/lib/mockup-export";
import { getImageFiles, type SelectedMedia } from "@/lib/media-types";

export function MockupBuilderShell() {
  const exportRef = useRef<HTMLDivElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const selectedPreviewUrl = useObjectUrl(selectedFile);
  const [frameBackgroundId, setFrameBackgroundId] = useState<string>(DEFAULT_FRAME_BACKGROUND_ID);
  const [framePreset, setFramePreset] = useState(DEFAULT_FRAME_PRESET);
  const frameBackground =
    getFrameBackgroundSwatchById(frameBackgroundId) ??
    getFrameBackgroundSwatchById(DEFAULT_FRAME_BACKGROUND_ID)!;
  const selectedMedia = useMemo<SelectedMedia | null>(() => {
    if (!selectedFile || !selectedPreviewUrl) {
      return null;
    }

    return { previewUrl: selectedPreviewUrl, name: selectedFile.name };
  }, [selectedFile, selectedPreviewUrl]);

  const handleMediaFiles = useCallback((files: File[]) => {
    const [file] = getImageFiles(files);

    if (!file) {
      return;
    }

    setSelectedFile(file);
  }, []);

  const handleExport = useCallback(async () => {
    const node = exportRef.current;
    if (!node) return;

    await exportMockupPng({ node, framePreset });
  }, [framePreset]);

  return (
    <>
      <div className="app-shell">
        <StylePanel
          selectedMedia={selectedMedia}
          onMediaFiles={handleMediaFiles}
          frameBackgroundId={frameBackgroundId}
          onFrameBackgroundChange={setFrameBackgroundId}
          framePreset={framePreset}
          onFramePresetChange={setFramePreset}
        />
        <PreviewStage
          selectedMedia={selectedMedia}
          onMediaFiles={handleMediaFiles}
          frameBackground={frameBackground}
          framePreset={framePreset}
        />
        <ExportPanel frameBackground={frameBackground} onExport={handleExport} />
      </div>
      <div aria-hidden="true" className="export-surface-host">
        <ExportMockupSurface
          selectedMedia={selectedMedia}
          frameBackground={frameBackground}
          framePreset={framePreset}
          surfaceRef={exportRef}
        />
      </div>
    </>
  );
}
