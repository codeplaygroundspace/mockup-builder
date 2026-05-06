"use client";

import { ImagePlus } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ChangeEvent, CSSProperties, DragEvent } from "react";

import { cn } from "@/lib/utils";

type DropFrameSize = "lg" | "md" | "sm";

type MediaDropFrameProps = {
  size?: DropFrameSize;
  primary: string;
  secondary: string;
  className?: string;
  style?: CSSProperties;
  interactive?: boolean;
  accept?: string;
  ariaLabel?: string;
  previewUrl?: string | null;
  selectedName?: string | null;
  fitToContent?: boolean;
  fitMaxPercent?: number;
  onFiles?: (files: File[]) => void;
};

export function MediaDropFrame({
  size = "md",
  primary,
  secondary,
  className,
  style,
  interactive = false,
  accept = "image/*",
  ariaLabel,
  previewUrl,
  selectedName,
  fitToContent = false,
  fitMaxPercent = 100,
  onFiles,
}: MediaDropFrameProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const frameRef = useRef<HTMLElement | null>(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const [localPreviewUrl, setLocalPreviewUrl] = useState<string | null>(null);
  const [localSelectedName, setLocalSelectedName] = useState<string | null>(null);
  const [measuredImage, setMeasuredImage] = useState<{
    previewUrl: string;
    aspectRatio: number;
  } | null>(null);
  const [fitBounds, setFitBounds] = useState<{ width: number; height: number } | null>(null);
  const isPreviewControlled = previewUrl !== undefined;
  const isSelectedNameControlled = selectedName !== undefined;
  const displayedPreviewUrl = isPreviewControlled ? previewUrl : localPreviewUrl;
  const displayedSelectedName = isSelectedNameControlled ? selectedName : localSelectedName;
  const imgAspectRatio =
    measuredImage?.previewUrl === displayedPreviewUrl ? measuredImage.aspectRatio : null;
  const setFrameElement = useCallback((node: HTMLButtonElement | HTMLDivElement | null) => {
    frameRef.current = node;
  }, []);

  useEffect(() => {
    return () => {
      if (localPreviewUrl) {
        URL.revokeObjectURL(localPreviewUrl);
      }
    };
  }, [localPreviewUrl]);

  useEffect(() => {
    if (!fitToContent || !displayedPreviewUrl) {
      return;
    }

    let isCurrent = true;
    const img = new window.Image();
    img.onload = () => {
      if (isCurrent && img.naturalWidth && img.naturalHeight) {
        setMeasuredImage({
          previewUrl: displayedPreviewUrl,
          aspectRatio: img.naturalWidth / img.naturalHeight,
        });
      }
    };
    img.src = displayedPreviewUrl;

    return () => {
      isCurrent = false;
    };
  }, [fitToContent, displayedPreviewUrl]);

  useEffect(() => {
    if (!fitToContent || !displayedPreviewUrl) {
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

      setFitBounds((currentBounds) => {
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
  }, [fitToContent, displayedPreviewUrl]);

  const fitDimensions =
    fitToContent && imgAspectRatio !== null && fitBounds !== null
      ? getContainedDimensions(imgAspectRatio, fitBounds, fitMaxPercent)
      : null;

  const frameClassName = cn(
    "drop-frame",
    `drop-frame--${size}`,
    fitToContent && "drop-frame--fit-to-content",
    interactive && "drop-frame--interactive",
    isDragActive && "is-drag-active",
    className
  );

  const containerStyle: CSSProperties = {
    ...style,
    ...(fitToContent && imgAspectRatio !== null
      ? {
          aspectRatio: String(imgAspectRatio),
          ...(fitDimensions !== null
            ? { width: `${fitDimensions.width}px`, height: `${fitDimensions.height}px` }
            : {}),
        }
      : {}),
  };

  function handleFiles(fileList: FileList | null) {
    const imageFiles = Array.from(fileList ?? []).filter((file) => file.type.startsWith("image/"));

    if (imageFiles.length === 0) {
      return;
    }

    const [firstFile] = imageFiles;
    if (!isPreviewControlled) {
      setLocalPreviewUrl(URL.createObjectURL(firstFile));
      setLocalSelectedName(firstFile.name);
    }
    onFiles?.(imageFiles);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    handleFiles(event.currentTarget.files);
    event.currentTarget.value = "";
  }

  function handleDragEnter(event: DragEvent<HTMLButtonElement>) {
    event.preventDefault();
    setIsDragActive(true);
  }

  function handleDragOver(event: DragEvent<HTMLButtonElement>) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
  }

  function handleDragLeave(event: DragEvent<HTMLButtonElement>) {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setIsDragActive(false);
    }
  }

  function handleDrop(event: DragEvent<HTMLButtonElement>) {
    event.preventDefault();
    setIsDragActive(false);
    handleFiles(event.dataTransfer.files);
  }

  const emptyContent = (
    <span className="drop-frame__content">
      <span className="drop-frame__icon">
        <ImagePlus aria-hidden="true" />
      </span>
      <span className="drop-frame__primary">{primary}</span>
      <span className="drop-frame__secondary">{displayedSelectedName ?? secondary}</span>
    </span>
  );

  const content = (
    <>
      {displayedPreviewUrl ? (
        <Image
          className="drop-frame__preview"
          src={displayedPreviewUrl}
          alt=""
          fill
          sizes="78vw"
          unoptimized
        />
      ) : null}
      {displayedPreviewUrl ? null : emptyContent}
    </>
  );

  if (interactive) {
    return (
      <>
        <button
          ref={setFrameElement}
          type="button"
          style={containerStyle}
          className={frameClassName}
          aria-label={ariaLabel ?? primary}
          onClick={() => inputRef.current?.click()}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {content}
        </button>
        <input ref={inputRef} type="file" accept={accept} hidden onChange={handleInputChange} />
      </>
    );
  }

  return (
    <div ref={setFrameElement} style={containerStyle} className={frameClassName}>
      {content}
    </div>
  );
}

function getContainedDimensions(
  aspectRatio: number,
  bounds: { width: number; height: number },
  maxPercent: number
) {
  const scale = maxPercent / 100;
  const maxWidth = bounds.width * scale;
  const maxHeight = bounds.height * scale;
  const widthFromMaxHeight = maxHeight * aspectRatio;

  if (widthFromMaxHeight <= maxWidth) {
    return { width: widthFromMaxHeight, height: maxHeight };
  }

  return { width: maxWidth, height: maxWidth / aspectRatio };
}
