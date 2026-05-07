"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

import type { Dimensions } from "@/lib/media-types";

type UseContainedImageFitOptions = {
  enabled: boolean;
  previewUrl: string | null;
  maxPercent: number;
  explicitBounds?: Dimensions | null;
};

export function useContainedImageFit({
  enabled,
  previewUrl,
  maxPercent,
  explicitBounds,
}: UseContainedImageFitOptions) {
  const frameRef = useRef<HTMLElement | null>(null);
  const [measuredImage, setMeasuredImage] = useState<{
    previewUrl: string;
    aspectRatio: number;
  } | null>(null);
  const [observedBounds, setObservedBounds] = useState<Dimensions | null>(null);
  const imageAspectRatio =
    measuredImage?.previewUrl === previewUrl ? measuredImage.aspectRatio : null;
  const shouldMeasureImage = enabled && previewUrl !== null;
  const shouldObserveBounds = shouldMeasureImage && explicitBounds == null;

  const setFrameElement = useCallback((node: HTMLElement | null) => {
    frameRef.current = node;
  }, []);

  useEffect(() => {
    if (!shouldMeasureImage || previewUrl === null) {
      return;
    }

    let isCurrent = true;
    const img = new window.Image();
    img.onload = () => {
      if (isCurrent && img.naturalWidth && img.naturalHeight) {
        setMeasuredImage({
          previewUrl,
          aspectRatio: img.naturalWidth / img.naturalHeight,
        });
      }
    };
    img.src = previewUrl;

    return () => {
      isCurrent = false;
    };
  }, [previewUrl, shouldMeasureImage]);

  useEffect(() => {
    if (!shouldObserveBounds) {
      return;
    }

    const parentElement = frameRef.current?.parentElement;
    if (!parentElement || typeof ResizeObserver === "undefined") {
      return;
    }

    const resizeObserver = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;

      if (width <= 0 || height <= 0) {
        return;
      }

      setObservedBounds((currentBounds) => {
        if (currentBounds?.width === width && currentBounds.height === height) {
          return currentBounds;
        }

        return { width, height };
      });
    });

    resizeObserver.observe(parentElement);

    return () => {
      resizeObserver.disconnect();
    };
  }, [shouldObserveBounds]);

  const resolvedBounds = explicitBounds ?? observedBounds;
  const fitDimensions =
    enabled && imageAspectRatio !== null && resolvedBounds !== null
      ? getContainedDimensions(imageAspectRatio, resolvedBounds, maxPercent)
      : null;
  const fitStyle: CSSProperties =
    enabled && imageAspectRatio !== null
      ? {
          aspectRatio: String(imageAspectRatio),
          ...(fitDimensions !== null
            ? { width: `${fitDimensions.width}px`, height: `${fitDimensions.height}px` }
            : {}),
        }
      : {};

  return {
    fitStyle,
    setFrameElement,
  };
}

function getContainedDimensions(aspectRatio: number, bounds: Dimensions, maxPercent: number) {
  const scale = maxPercent / 100;
  const maxWidth = bounds.width * scale;
  const maxHeight = bounds.height * scale;
  const widthFromMaxHeight = maxHeight * aspectRatio;

  if (widthFromMaxHeight <= maxWidth) {
    return { width: widthFromMaxHeight, height: maxHeight };
  }

  return { width: maxWidth, height: maxWidth / aspectRatio };
}
