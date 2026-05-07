export type FrameBackgroundSwatch = {
  id?: string;
  label: string;
  className?: string;
  imageUrl?: string;
};

export type FrameBackgroundGroup = {
  title: string;
  meta?: string;
  swatches: ReadonlyArray<FrameBackgroundSwatch>;
};
