"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { ExportPanel } from "@/components/export-panel";
import { PreviewStage } from "@/components/preview-stage";
import { StylePanel } from "@/components/style-panel";

type SelectedMedia = {
  previewUrl: string;
  name: string;
};

const DEFAULT_FRAME_BACKGROUND_CLASS = "bg-mockup-gradient";

export function MockupBuilderShell() {
  const selectedPreviewUrlRef = useRef<string | null>(null);
  const [selectedMedia, setSelectedMedia] = useState<SelectedMedia | null>(null);
  const [frameBackgroundClassName, setFrameBackgroundClassName] = useState<string>(
    DEFAULT_FRAME_BACKGROUND_CLASS
  );

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

  return (
    <div className="app-shell">
      <StylePanel
        selectedMedia={selectedMedia}
        onMediaFiles={handleMediaFiles}
        frameBackgroundClassName={frameBackgroundClassName}
        onFrameBackgroundChange={setFrameBackgroundClassName}
      />
      <PreviewStage
        selectedMedia={selectedMedia}
        onMediaFiles={handleMediaFiles}
        frameBackgroundClassName={frameBackgroundClassName}
      />
      <ExportPanel />
    </div>
  );
}
