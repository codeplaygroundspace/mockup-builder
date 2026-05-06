"use client";

import { toPng } from "html-to-image";
import { useCallback, useEffect, useRef, useState } from "react";

import { ExportPanel } from "@/components/export-panel";
import { PreviewStage } from "@/components/preview-stage";
import { StylePanel } from "@/components/style-panel";
import { DEFAULT_FRAME_PRESET } from "@/lib/frame-presets";

type SelectedMedia = {
  previewUrl: string;
  name: string;
};

const DEFAULT_FRAME_BACKGROUND_CLASS = "bg-mockup-gradient";

export function MockupBuilderShell() {
  const selectedPreviewUrlRef = useRef<string | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);
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
    const node = stageRef.current;
    if (!node) return;

    const dataUrl = await toPng(node, { cacheBust: false, pixelRatio: 1 });
    const link = document.createElement("a");
    link.download = "mockup.png";
    link.href = dataUrl;
    link.click();
  }, []);

  return (
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
        stageRef={stageRef}
      />
      <ExportPanel onExport={handleExport} />
    </div>
  );
}
