"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

import type { FrameBackgroundSwatch } from "./types";

import { cn } from "@/lib/utils";

const COLLAPSED_SWATCH_COUNT = 3;

type ExpandableSwatchGridProps = {
  swatches: ReadonlyArray<FrameBackgroundSwatch>;
  selectedClassName: string;
  onSelect: (className: string) => void;
};

export function ExpandableSwatchGrid({
  swatches,
  selectedClassName,
  onSelect,
}: ExpandableSwatchGridProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const previewSwatches = swatches.slice(0, COLLAPSED_SWATCH_COUNT);
  const expandedSwatches = swatches.slice(COLLAPSED_SWATCH_COUNT);

  return (
    <div className="frame-swatch-grid">
      {previewSwatches.map((swatch) => {
        const isSelected = swatch.className === selectedClassName;
        return (
          <SwatchButton
            key={swatch.label}
            swatch={swatch}
            isSelected={isSelected}
            onSelect={onSelect}
          />
        );
      })}
      <button
        type="button"
        aria-expanded={isExpanded}
        aria-label={isExpanded ? "Collapse background swatches" : "Expand background swatches"}
        onClick={() => setIsExpanded((current) => !current)}
        className="frame-swatch frame-swatch-toggle"
      >
        {isExpanded ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
      </button>
      {isExpanded
        ? expandedSwatches.map((swatch) => {
            const isSelected = swatch.className === selectedClassName;
            return (
              <SwatchButton
                key={swatch.label}
                swatch={swatch}
                isSelected={isSelected}
                onSelect={onSelect}
              />
            );
          })
        : null}
    </div>
  );
}

function SwatchButton({
  swatch,
  isSelected,
  onSelect,
}: {
  swatch: FrameBackgroundSwatch;
  isSelected: boolean;
  onSelect: (className: string) => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={isSelected}
      aria-label={swatch.label}
      onClick={() => onSelect(swatch.className)}
      className={cn(
        "frame-swatch p-1",
        isSelected && "is-selected shadow-[inset_0_0_0_2px_rgb(var(--color-text)/0.60)]"
      )}
    >
      <span className={cn("block h-full w-full rounded-md", swatch.className)} />
    </button>
  );
}
