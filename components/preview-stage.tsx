import { Command, Maximize2, MessageSquareMore, Redo2, Undo2 } from "lucide-react";

import { Button } from "@/components/button";
import { MediaDropFrame } from "@/components/media-drop-frame";

type SelectedMedia = {
  previewUrl: string;
  name: string;
};

type PreviewStageProps = {
  selectedMedia: SelectedMedia | null;
  onMediaFiles: (files: File[]) => void;
};

export function PreviewStage({ selectedMedia, onMediaFiles }: PreviewStageProps) {
  return (
    <main className="stage">
      <div className="command-bar">
        <Button variant="ghost" size="icon-sm" aria-label="Undo" tooltip="Undo">
          <Undo2 />
        </Button>
        <Button variant="ghost" size="icon-sm" aria-label="Redo" tooltip="Redo">
          <Redo2 />
        </Button>
        <Button variant="ghost" size="icon-sm" aria-label="Command palette" tooltip="Commands">
          <Command />
        </Button>
        <Button variant="secondary" size="sm" className="rounded-full px-3">
          Start Over
        </Button>
        <Button variant="ghost" size="icon-sm" aria-label="Fullscreen" tooltip="Fullscreen">
          <Maximize2 />
        </Button>
        <Button variant="ghost" size="icon-sm" aria-label="Write feedback" tooltip="Write feedback">
          <MessageSquareMore />
        </Button>
      </div>

      <div className="mockup-surface mockup-surface--stage bg-mockup-gradient">
        <MediaDropFrame
          size="lg"
          primary="Select Media"
          secondary="Open Media Picker"
          interactive
          ariaLabel="Select an image"
          previewUrl={selectedMedia?.previewUrl ?? null}
          selectedName={selectedMedia?.name ?? null}
          onFiles={onMediaFiles}
          className="aspect-16/10 w-[78%] rounded-2xl shadow-2xl"
        />
      </div>
    </main>
  );
}
