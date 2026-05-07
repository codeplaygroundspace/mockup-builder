"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { ExportPanel } from "@/components/export-panel";
import { ExportMockupSurface } from "@/components/mockup-surfaces";
import { PreviewStage } from "@/components/preview-stage";
import { StylePanel } from "@/components/style-panel";
import { DEFAULT_FRAME_PRESET } from "@/lib/frame-presets";
import { exportMockupPng } from "@/lib/mockup-export";
import type { SelectedMedia } from "@/lib/media-types";

const DEFAULT_FRAME_BACKGROUND_CLASS = "bg-mockup-gradient";

export function MockupBuilderShell() {
  const selectedPreviewUrlRef = useRef<string | null>(null);
  const exportRef = useRef<HTMLDivElement>(null);
  const [selectedMedia, setSelectedMedia] = useState<SelectedMedia | null>(null);
  const [frameBackgroundClassName, setFrameBackgroundClassName] = useState<string>(
    DEFAULT_FRAME_BACKGROUND_CLASS
  );
  const [framePreset, setFramePreset] = useState(DEFAULT_FRAME_PRESET);

  const handleMediaFiles = useCallback((files: File[]) => {
    const [file] = files;

    if (!file) {
      return;
    }

    if (selectedPreviewUrlRef.current) {
      URL.revokeObjectURL(selectedPreviewUrlRef.current);
    }

    const previewUrl = URL.createObjectURL(file);
    selectedPreviewUrlRef.current = previewUrl;
    setSelectedMedia({ previewUrl, name: file.name });
  }, []);

  useEffect(() => {
    return () => {
      if (selectedPreviewUrlRef.current) {
        URL.revokeObjectURL(selectedPreviewUrlRef.current);
      }
    };
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
          frameBackgroundClassName={frameBackgroundClassName}
          onFrameBackgroundChange={setFrameBackgroundClassName}
          framePreset={framePreset}
          onFramePresetChange={setFramePreset}
        />
        <PreviewStage
          selectedMedia={selectedMedia}
          onMediaFiles={handleMediaFiles}
          frameBackgroundClassName={frameBackgroundClassName}
          framePreset={framePreset}
        />
        <ExportPanel onExport={handleExport} />
      </div>
      <div aria-hidden="true" className="export-surface-host">
        <ExportMockupSurface
          selectedMedia={selectedMedia}
          frameBackgroundClassName={frameBackgroundClassName}
          framePreset={framePreset}
          surfaceRef={exportRef}
        />
      </div>
    </>
  );
}
