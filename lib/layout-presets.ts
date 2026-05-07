export type LayoutPresetId =
  | "straight"
  | "flat-tilt-left"
  | "left-lean"
  | "right-lean"
  | "top-down"
  | "diagonal-twist"
  | "studio-angle";

export type LayoutPreset = {
  id: LayoutPresetId;
  label: string;
  perspective: string;
  translateX: number;
  translateY: number;
  rotateX: number;
  rotateY: number;
  rotateZ: number;
  scale: number;
};

export const DEFAULT_LAYOUT_PRESET_ID: LayoutPresetId = "straight";

export const LAYOUT_PRESETS: ReadonlyArray<LayoutPreset> = [
  {
    id: "straight",
    label: "Straight",
    perspective: "150em",
    translateX: 0,
    translateY: 0,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    scale: 1,
  },
  {
    id: "flat-tilt-left",
    label: "Flat tilt left",
    perspective: "150em",
    translateX: 0,
    translateY: 0,
    rotateX: 0,
    rotateY: 0,
    rotateZ: -8,
    scale: 0.95,
  },
  {
    id: "left-lean",
    label: "3D left lean",
    perspective: "150em",
    translateX: -4,
    translateY: -2,
    rotateX: 10,
    rotateY: -20,
    rotateZ: 8,
    scale: 0.95,
  },
  {
    id: "right-lean",
    label: "3D right lean",
    perspective: "150em",
    translateX: 4,
    translateY: -2,
    rotateX: 10,
    rotateY: 20,
    rotateZ: -8,
    scale: 0.95,
  },
  {
    id: "top-down",
    label: "Top-down tilt",
    perspective: "150em",
    translateX: 0,
    translateY: -5,
    rotateX: 40,
    rotateY: 0,
    rotateZ: 0,
    scale: 0.95,
  },
  {
    id: "diagonal-twist",
    label: "Diagonal twist",
    perspective: "150em",
    translateX: 0,
    translateY: -5,
    rotateX: 45,
    rotateY: 0,
    rotateZ: -45,
    scale: 0.9,
  },
  {
    id: "studio-angle",
    label: "Studio angle",
    perspective: "150em",
    translateX: 0,
    translateY: 0,
    rotateX: 38.4,
    rotateY: -6.4,
    rotateZ: 25,
    scale: 1,
  },
];

export function getLayoutPresetById(id: LayoutPresetId) {
  return LAYOUT_PRESETS.find((preset) => preset.id === id) ?? (LAYOUT_PRESETS[0] as LayoutPreset);
}

export function getLayoutPresetTransform({
  perspective,
  translateX,
  translateY,
  rotateX,
  rotateY,
  rotateZ,
  scale,
}: LayoutPreset) {
  return `perspective(${perspective}) translate(${translateX}%, ${translateY}%) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`;
}
