export type FrameBackgroundSwatch = {
  label: string;
  className: string;
};

export type FrameBackgroundGroup = {
  title: string;
  meta?: string;
  swatches: ReadonlyArray<FrameBackgroundSwatch>;
};
