import { ExportPanel } from "@/components/export-panel";
import { PreviewStage } from "@/components/preview-stage";
import { StylePanel } from "@/components/style-panel";

export default function Home() {
  return (
    <div className="app-shell">
      <StylePanel />
      <PreviewStage />
      <ExportPanel />
    </div>
  );
}
