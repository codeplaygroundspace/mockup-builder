import { cn } from "@/lib/utils";

type Variant = "filled" | "underline";

export function SegmentedControl({
  options,
  value,
  variant = "filled",
  className,
  ariaLabel,
}: {
  options: ReadonlyArray<string>;
  value: string;
  variant?: Variant;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <div
      role="radiogroup"
      aria-label={ariaLabel}
      className={cn(
        "segmented-control",
        variant === "filled" && "segmented-control--filled",
        variant === "underline" && "segmented-control--underline",
        className
      )}
    >
      {options.map((option) => {
        const active = option === value;
        return (
          <button
            key={option}
            role="radio"
            aria-checked={active}
            className={cn("segmented-control__option", active && "is-active")}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
