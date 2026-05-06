import { ImagePlus } from "lucide-react";

import { cn } from "@/lib/utils";

type DropFrameSize = "lg" | "md" | "sm";

export function MediaDropFrame({
  size = "md",
  primary,
  secondary,
  className,
  style,
}: {
  size?: DropFrameSize;
  primary: string;
  secondary: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div style={style} className={cn("drop-frame", `drop-frame--${size}`, className)}>
      <div className="drop-frame__icon">
        <ImagePlus />
      </div>
      <p className="drop-frame__primary">{primary}</p>
      <p className="drop-frame__secondary">{secondary}</p>
    </div>
  );
}
