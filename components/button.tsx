import { cn } from "@/lib/utils";

const VARIANTS = {
  ghost: "ui-button--ghost",
  secondary: "ui-button--secondary",
} as const satisfies Record<string, string>;

const SIZES = {
  sm: "ui-button--sm",
  md: "ui-button--md",
  "icon-sm": "ui-button--icon-sm",
  "icon-md": "ui-button--icon-md",
} as const satisfies Record<string, string>;

type ButtonVariant = keyof typeof VARIANTS;
type ButtonSize = keyof typeof SIZES;

type Props = React.ComponentProps<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  tooltip?: string;
};

export function Button({
  className,
  variant = "ghost",
  size = "md",
  tooltip,
  children,
  ...props
}: Props) {
  return (
    <button className={cn("ui-button", VARIANTS[variant], SIZES[size], className)} {...props}>
      {children}
      {tooltip ? (
        <span aria-hidden="true" className="ui-button__tooltip">
          {tooltip}
        </span>
      ) : null}
    </button>
  );
}
