import { cn } from "@/lib/utils";

const VARIANTS = {
  ghost: "ui-button--ghost",
  secondary: "ui-button--secondary",
} as const;

const SIZES = {
  sm: "ui-button--sm",
  md: "ui-button--md",
  "icon-sm": "ui-button--icon-sm",
  "icon-md": "ui-button--icon-md",
} as const;

type Props = React.ComponentProps<"button"> & {
  variant?: keyof typeof VARIANTS;
  size?: keyof typeof SIZES;
};

export function Button({ className, variant = "ghost", size = "md", ...props }: Props) {
  return (
    <button className={cn("ui-button", VARIANTS[variant], SIZES[size], className)} {...props} />
  );
}
