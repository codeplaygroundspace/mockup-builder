import { Columns2, Columns3, Copy, Settings2, Square, Upload } from "lucide-react";

import { Button } from "@/components/button";
import { MediaDropFrame } from "@/components/media-drop-frame";
import { Panel, PanelRow, PanelSection, PanelStack } from "@/components/panel";
import { SegmentedControl } from "@/components/segmented-control";
import { EXPORT_PANEL_MEDIA_WIDTH, LAYOUT_PRESET_MEDIA_WIDTH } from "@/lib/mockup-layout";
import { cn } from "@/lib/utils";

const LAYOUT_PRESETS: ReadonlyArray<{
  rotate: number;
  scale: number;
  selected?: boolean;
}> = [
  { rotate: 0, scale: 0.78, selected: true },
  { rotate: -8, scale: 0.72 },
  { rotate: 6, scale: 0.7 },
  { rotate: 0, scale: 0.85 },
];

type ExportPanelProps = {
  onExport?: () => void;
};

export function ExportPanel({ onExport }: ExportPanelProps) {
  return (
    <Panel>
      <PanelRow>
        <Button
          variant="secondary"
          onClick={onExport}
          className="flex-1 justify-start rounded-2xl bg-zinc-900 hover:bg-zinc-800"
        >
          <Upload className="size-4" />
          <span className="font-medium">Export</span>
          <span className="ml-auto text-xs text-zinc-400">1x · PNG</span>
        </Button>
        <Button variant="ghost" size="icon-md" aria-label="Copy">
          <Copy />
        </Button>
        <Button variant="ghost" size="icon-md" aria-label="Export settings">
          <Settings2 />
        </Button>
      </PanelRow>

      <div role="radiogroup" aria-label="Layout mode" className="layout-mode-group">
        <LayoutModeOption label="Single" icon={<Square className="size-4" />} active />
        <LayoutModeOption label="Two-up" icon={<Columns2 className="size-4" />} />
        <LayoutModeOption label="Three-up" icon={<Columns3 className="size-4" />} />
      </div>

      <SegmentedControl
        ariaLabel="Transform"
        variant="underline"
        options={["Zoom", "Tilt"]}
        value="Zoom"
        className="justify-start"
      />

      <div className="mockup-surface mockup-surface--panel bg-frame-gradient-rouge">
        <MediaDropFrame
          size="md"
          primary="Drop or Paste"
          secondary="Images & Videos"
          className={cn("aspect-4/3 rounded-xl", EXPORT_PANEL_MEDIA_WIDTH)}
        />
      </div>

      <div className="progress-row">
        <span className="text-xs font-medium text-zinc-400">Zoom</span>
        <div className="progress-track">
          <div className="progress-fill" />
        </div>
        <span className="text-xs text-zinc-300 tabular-nums">100%</span>
      </div>

      <PanelSection label="Layout Presets">
        <PanelStack>
          {LAYOUT_PRESETS.map((preset, index) => (
            <LayoutPresetCard key={index} {...preset} />
          ))}
        </PanelStack>
      </PanelSection>
    </Panel>
  );
}

function LayoutModeOption({
  icon,
  label,
  active,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <button
      role="radio"
      aria-checked={active}
      aria-label={label}
      className={cn("layout-mode-option", active && "is-active")}
    >
      {icon}
    </button>
  );
}

function LayoutPresetCard({
  rotate,
  scale,
  selected,
}: {
  rotate: number;
  scale: number;
  selected?: boolean;
}) {
  return (
    <button
      aria-pressed={selected}
      aria-label="Layout preset"
      className={cn(
        "layout-preset-card bg-frame-gradient-rouge",
        selected ? "ring-selected" : "ring-1 ring-zinc-800 hover:ring-zinc-700"
      )}
    >
      <MediaDropFrame
        size="md"
        primary="Drop or Paste"
        secondary="Images & Videos"
        className={cn("aspect-4/3 rounded-lg shadow-md", LAYOUT_PRESET_MEDIA_WIDTH)}
        style={{ transform: `rotate(${rotate}deg) scale(${scale})` }}
      />
    </button>
  );
}
