export type Dimensions = {
  width: number;
  height: number;
};

export type SelectedMedia = {
  previewUrl: string;
  name: string;
};

export function getImageFiles(fileList: FileList | File[] | null) {
  return Array.from(fileList ?? []).filter((file) => file.type.startsWith("image/"));
}
