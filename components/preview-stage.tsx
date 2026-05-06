import { Command, Expand, Info, MessageSquareMore, Redo2, Undo2 } from "lucide-react";

import { Button } from "@/components/button";
import { MediaDropFrame } from "@/components/media-drop-frame";

export function PreviewStage() {
  return (
    <main className="stage">
      <div className="command-bar">
        <Button variant="ghost" size="icon-sm" aria-label="Undo">
          <Undo2 />
        </Button>
        <Button variant="ghost" size="icon-sm" aria-label="Redo">
          <Redo2 />
        </Button>
        <Button variant="ghost" size="icon-sm" aria-label="Command palette">
          <Command />
        </Button>
        <Button variant="secondary" size="sm" className="rounded-full px-3">
          Start Over
        </Button>
        <Button variant="ghost" size="icon-sm" aria-label="Fullscreen">
          <Expand />
        </Button>
        <Button variant="ghost" size="icon-sm" aria-label="Comments">
          <MessageSquareMore />
        </Button>
        <Button variant="ghost" size="icon-sm" aria-label="Info">
          <Info />
        </Button>
      </div>

      <div className="mockup-surface mockup-surface--stage bg-mockup-gradient">
        <MediaDropFrame
          size="lg"
          primary="Select Media"
          secondary="Open Media Picker"
          className="aspect-[16/10] w-[78%] rounded-2xl shadow-2xl"
        />
      </div>
    </main>
  );
}
