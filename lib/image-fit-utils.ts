import type { Dimensions } from "@/lib/media-types";

export function getContainedDimensions(
  aspectRatio: number,
  bounds: Dimensions,
  maxPercent: number
): Dimensions {
  const scale = maxPercent / 100;
  const maxWidth = bounds.width * scale;
  const maxHeight = bounds.height * scale;
  const widthFromMaxHeight = maxHeight * aspectRatio;

  if (widthFromMaxHeight <= maxWidth) {
    return { width: widthFromMaxHeight, height: maxHeight };
  }

  return { width: maxWidth, height: maxWidth / aspectRatio };
}
