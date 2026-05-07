"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

import { getFrameAspectRatio, getFrameDimensionsLabel } from "@/components/frame-preset-ui";
import { FRAME_PRESETS, type FramePreset } from "@/lib/frame-presets";
import { cn } from "@/lib/utils";

type FrameRatioDropdownProps = {
  framePreset: FramePreset;
  onFramePresetChange: (preset: FramePreset) => void;
};

export function FrameRatioDropdown({ framePreset, onFramePresetChange }: FrameRatioDropdownProps) {
  const dropdownId = useId();
  const ratioControlRef = useRef<HTMLDivElement>(null);
  const [isRatioMenuOpen, setIsRatioMenuOpen] = useState(false);

  useEffect(() => {
    if (!isRatioMenuOpen) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      if (!ratioControlRef.current?.contains(event.target as Node)) {
        setIsRatioMenuOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsRatioMenuOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isRatioMenuOpen]);

  return (
    <div ref={ratioControlRef} className="frame-ratio-control">
      <button
        type="button"
        aria-label={`Frame size preset: ${framePreset.name}`}
        aria-expanded={isRatioMenuOpen}
        aria-controls={dropdownId}
        className="source-button frame-ratio-button"
        onClick={() => setIsRatioMenuOpen((isOpen) => !isOpen)}
      >
        <span
          aria-hidden
          className="frame-ratio-button__icon"
          style={{ aspectRatio: getFrameAspectRatio(framePreset) }}
        />
        <span className="frame-ratio-button__copy">
          <span className="text-sm font-medium">{framePreset.name}</span>
          <span className="text-xs text-zinc-500 tabular-nums">
            {getFrameDimensionsLabel(framePreset)}
          </span>
        </span>
        <ChevronDown className="size-4 text-zinc-500" />
      </button>

      {isRatioMenuOpen ? (
        <div
          id={dropdownId}
          role="listbox"
          aria-label="Frame aspect ratio"
          className="frame-ratio-menu"
        >
          <div className="frame-ratio-menu__size-row">
            <label className="frame-size-field">
              <span>W</span>
              <input aria-label="Frame width" readOnly value={framePreset.width} />
            </label>
            <label className="frame-size-field">
              <span>H</span>
              <input aria-label="Frame height" readOnly value={framePreset.height} />
            </label>
          </div>

          <div className="frame-ratio-grid">
            {FRAME_PRESETS.map((preset) => {
              const isSelected = preset.id === framePreset.id;

              return (
                <button
                  key={preset.id}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  className={cn("frame-ratio-option", isSelected && "is-selected")}
                  onClick={() => onFramePresetChange(preset)}
                >
                  <span
                    aria-hidden
                    className="frame-ratio-option__preview"
                    style={{ aspectRatio: getFrameAspectRatio(preset) }}
                  />
                  <span className="frame-ratio-option__label">{preset.ratioLabel}</span>
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
