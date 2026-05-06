"use client";

import { ImagePlus } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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
  onFiles,
}: MediaDropFrameProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const [localPreviewUrl, setLocalPreviewUrl] = useState<string | null>(null);
  const [localSelectedName, setLocalSelectedName] = useState<string | null>(null);
  const isPreviewControlled = previewUrl !== undefined;
  const isSelectedNameControlled = selectedName !== undefined;
  const displayedPreviewUrl = isPreviewControlled ? previewUrl : localPreviewUrl;
  const displayedSelectedName = isSelectedNameControlled ? selectedName : localSelectedName;

  useEffect(() => {
    return () => {
      if (localPreviewUrl) {
        URL.revokeObjectURL(localPreviewUrl);
      }
    };
  }, [localPreviewUrl]);

  const frameClassName = cn(
    "drop-frame",
    `drop-frame--${size}`,
    interactive && "drop-frame--interactive",
    isDragActive && "is-drag-active",
    className
  );

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
          type="button"
          style={style}
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
    <div style={style} className={frameClassName}>
      {content}
    </div>
  );
}
