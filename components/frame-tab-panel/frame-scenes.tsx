import { Ban } from "lucide-react";

export type FrameScene = {
  label: string;
  icon: React.ReactNode;
  selected?: boolean;
  previewClassName?: string;
};

export const FRAME_SCENES: ReadonlyArray<FrameScene> = [
  { label: "None", icon: <Ban className="size-5" />, selected: true },
  {
    label: "Shadow",
    icon: null,
    previewClassName:
      "bg-[url('https://picsum.photos/seed/frame-shadow-scene/120/90')] bg-cover bg-center",
  },
  {
    label: "Shapes",
    icon: null,
    previewClassName:
      "bg-[radial-gradient(circle_at_25%_25%,#2563eb_0_18%,transparent_19%),radial-gradient(circle_at_72%_38%,#22d3ee_0_13%,transparent_14%),linear-gradient(135deg,#111827,#172554_55%,#2563eb)]",
  },
];
