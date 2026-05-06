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
  onFiles,
}: MediaDropFrameProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [selectedName, setSelectedName] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const frameClassName = cn(
    "drop-frame",
    `drop-frame--${size}`,
    interactive && "drop-frame--interactive",
    isDragActive && "is-drag-active",
    previewUrl && "drop-frame--has-preview",
    className
  );

  function handleFiles(fileList: FileList | null) {
    const imageFiles = Array.from(fileList ?? []).filter((file) => file.type.startsWith("image/"));

    if (imageFiles.length === 0) {
      return;
    }

    const [firstFile] = imageFiles;
    setPreviewUrl(URL.createObjectURL(firstFile));
    setSelectedName(firstFile.name);
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

  const content = (
    <>
      {previewUrl ? (
        <Image
          className="drop-frame__preview"
          src={previewUrl}
          alt=""
          fill
          sizes="78vw"
          unoptimized
        />
      ) : null}
      <span className="drop-frame__content">
        <span className="drop-frame__icon">
          <ImagePlus aria-hidden="true" />
        </span>
        <span className="drop-frame__primary">{previewUrl ? "Image Selected" : primary}</span>
        <span className="drop-frame__secondary">{selectedName ?? secondary}</span>
      </span>
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
