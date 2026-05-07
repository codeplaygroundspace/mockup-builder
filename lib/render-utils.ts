export function nextAnimationFrame() {
  return new Promise<void>((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
  });
}

export function waitForImageLoad(image: HTMLImageElement) {
  if (image.complete) {
    return Promise.resolve();
  }

  return new Promise<void>((resolve) => {
    image.addEventListener("load", () => resolve(), { once: true });
    image.addEventListener("error", () => resolve(), { once: true });
  });
}
