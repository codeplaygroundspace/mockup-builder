import { toPng } from "html-to-image";

import type { FramePreset } from "@/lib/frame-presets";
import { MOCKUP_EXPORT_BASENAME, MOCKUP_EXPORT_SCALE } from "@/lib/mockup-layout";
import { nextAnimationFrame, waitForImageLoad } from "@/lib/render-utils";

type ExportMockupPngOptions = {
  node: HTMLElement;
  framePreset: FramePreset;
};

export async function exportMockupPng({ node, framePreset }: ExportMockupPngOptions) {
  await waitForExportRender(node);

  const dataUrl = await toPng(node, {
    cacheBust: false,
    pixelRatio: MOCKUP_EXPORT_SCALE,
    width: framePreset.width,
    height: framePreset.height,
    canvasWidth: framePreset.width,
    canvasHeight: framePreset.height,
  });

  downloadDataUrl(dataUrl, getMockupExportFileName(framePreset));
}

export function getMockupExportFileName(framePreset: FramePreset) {
  return `${framePreset.width}x${framePreset.height}_${MOCKUP_EXPORT_SCALE}X_${MOCKUP_EXPORT_BASENAME}.png`;
}

async function waitForExportRender(node: HTMLElement) {
  // The first double-rAF lets React paint the export surface. Image loading can
  // update layout or pixels afterward, so wait for all images and then give the
  // browser one more paint/composite boundary before html-to-image snapshots it.
  await nextAnimationFrame();

  const images = Array.from(node.querySelectorAll("img"));
  await Promise.all(images.map(waitForImageLoad));

  await nextAnimationFrame();
}

function downloadDataUrl(dataUrl: string, fileName: string) {
  const link = document.createElement("a");
  link.download = fileName;
  link.href = dataUrl;
  link.click();
}
