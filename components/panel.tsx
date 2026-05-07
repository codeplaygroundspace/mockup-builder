import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type PanelProps = HTMLAttributes<HTMLElement> & {
  gap?: "default" | "compact";
};

type PanelSectionProps = HTMLAttributes<HTMLElement> & {
  label: string;
  children: ReactNode;
};

export function Panel({ gap = "default", className, children, ...props }: PanelProps) {
  return (
    <aside className={cn("panel", gap === "compact" && "panel--compact", className)} {...props}>
      {children}
    </aside>
  );
}

export function PanelRow({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("panel-row", className)} {...props}>
      {children}
    </div>
  );
}

export function PanelSection({ label, className, children, ...props }: PanelSectionProps) {
  return (
    <section className={cn("panel-section", className)} {...props}>
      <h3 className="panel-section__label">{label}</h3>
      {children}
    </section>
  );
}

export function PanelStack({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("panel-stack", className)} {...props}>
      {children}
    </div>
  );
}
