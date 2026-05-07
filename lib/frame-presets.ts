export type FramePreset = {
  id: string;
  name: string;
  ratioLabel: string;
  width: number;
  height: number;
};

export const DEFAULT_FRAME_PRESET: FramePreset = {
  id: "default-16-9",
  name: "Default 16:9",
  ratioLabel: "16:9",
  width: 1920,
  height: 1080,
};

export const FRAME_PRESETS: ReadonlyArray<FramePreset> = [
  DEFAULT_FRAME_PRESET,
  {
    id: "default-3-2",
    name: "Default 3:2",
    ratioLabel: "3:2",
    width: 1800,
    height: 1200,
  },
  {
    id: "default-4-3",
    name: "Default 4:3",
    ratioLabel: "4:3",
    width: 1600,
    height: 1200,
  },
  {
    id: "default-5-4",
    name: "Default 5:4",
    ratioLabel: "5:4",
    width: 1500,
    height: 1200,
  },
  {
    id: "default-1-1",
    name: "Default 1:1",
    ratioLabel: "1:1",
    width: 1200,
    height: 1200,
  },
  {
    id: "default-4-5",
    name: "Default 4:5",
    ratioLabel: "4:5",
    width: 1200,
    height: 1500,
  },
  {
    id: "default-3-4",
    name: "Default 3:4",
    ratioLabel: "3:4",
    width: 1200,
    height: 1600,
  },
  {
    id: "default-2-3",
    name: "Default 2:3",
    ratioLabel: "2:3",
    width: 1200,
    height: 1800,
  },
  {
    id: "default-9-16",
    name: "Default 9:16",
    ratioLabel: "9:16",
    width: 1080,
    height: 1920,
  },
];
