import type { FrameScene } from "./frame-scenes";

import { cn } from "@/lib/utils";

type FrameOptionTileProps = FrameScene & {
  compact?: boolean;
};

export function FrameOptionTile({
  label,
  icon,
  selected,
  compact,
  previewClassName,
}: FrameOptionTileProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      className={cn(
        "style-swatch",
        "frame-option-tile",
        compact && "frame-option-tile--compact",
        selected && "is-selected"
      )}
    >
      <span className={cn("frame-option-tile__preview", previewClassName)}>
        {icon ? <span className="frame-option-tile__icon">{icon}</span> : null}
      </span>
      <span className="frame-option-tile__label">{label}</span>
    </button>
  );
}
