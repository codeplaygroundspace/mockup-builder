"use client";

import { toPng } from "html-to-image";
import { useCallback, useEffect, useRef, useState } from "react";

import { ExportPanel } from "@/components/export-panel";
import { MockupSurface, PreviewStage } from "@/components/preview-stage";
import { StylePanel } from "@/components/style-panel";
import { DEFAULT_FRAME_PRESET } from "@/lib/frame-presets";

type SelectedMedia = {
  previewUrl: string;
  name: string;
};

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

    await waitForExportRender(node);

    const dataUrl = await toPng(node, {
      cacheBust: false,
      pixelRatio: 1,
      width: framePreset.width,
      height: framePreset.height,
      canvasWidth: framePreset.width,
      canvasHeight: framePreset.height,
    });
    const link = document.createElement("a");
    link.download = `${framePreset.width}x${framePreset.height}_1X_mockup_builder.png`;
    link.href = dataUrl;
    link.click();
  }, [framePreset.height, framePreset.width]);

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
        <MockupSurface
          selectedMedia={selectedMedia}
          frameBackgroundClassName={frameBackgroundClassName}
          framePreset={framePreset}
          surfaceRef={exportRef}
          className="mockup-surface--export"
          style={{ width: `${framePreset.width}px`, height: `${framePreset.height}px` }}
          fitBounds={{ width: framePreset.width, height: framePreset.height }}
        />
      </div>
    </>
  );
}

async function waitForExportRender(node: HTMLElement) {
  await nextAnimationFrame();

  const images = Array.from(node.querySelectorAll("img"));
  await Promise.all(
    images.map((image) =>
      image.complete
        ? Promise.resolve()
        : new Promise<void>((resolve) => {
            image.addEventListener("load", () => resolve(), { once: true });
            image.addEventListener("error", () => resolve(), { once: true });
          })
    )
  );

  await nextAnimationFrame();
}

function nextAnimationFrame() {
  return new Promise<void>((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
  });
}
