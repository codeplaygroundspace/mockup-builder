import type { FramePreset } from "@/lib/frame-presets";

export function getFrameAspectRatio(preset: FramePreset) {
  return `${preset.width} / ${preset.height}`;
}

export function getFrameDimensionsLabel(preset: FramePreset) {
  return `${preset.width} x ${preset.height}`;
}
