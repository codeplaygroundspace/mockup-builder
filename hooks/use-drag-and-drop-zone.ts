"use client";

import { useCallback, useState } from "react";
import type { DragEvent } from "react";

type UseDragAndDropZoneOptions = {
  onDropFiles: (files: FileList) => void;
  dropEffect?: DataTransfer["dropEffect"];
};

export function useDragAndDropZone<TElement extends HTMLElement = HTMLElement>({
  onDropFiles,
  dropEffect = "copy",
}: UseDragAndDropZoneOptions) {
  const [isDragActive, setIsDragActive] = useState(false);

  const handleDragEnter = useCallback((event: DragEvent<TElement>) => {
    event.preventDefault();
    setIsDragActive(true);
  }, []);

  const handleDragOver = useCallback(
    (event: DragEvent<TElement>) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = dropEffect;
    },
    [dropEffect]
  );

  const handleDragLeave = useCallback((event: DragEvent<TElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setIsDragActive(false);
    }
  }, []);

  const handleDrop = useCallback(
    (event: DragEvent<TElement>) => {
      event.preventDefault();
      setIsDragActive(false);
      onDropFiles(event.dataTransfer.files);
    },
    [onDropFiles]
  );

  return {
    isDragActive,
    handleDragEnter,
    handleDragOver,
    handleDragLeave,
    handleDrop,
  };
}
