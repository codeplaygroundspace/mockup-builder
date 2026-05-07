import { ExpandableSwatchGrid } from "./expandable-swatch-grid";
import type { FrameBackgroundGroup } from "./types";

type FrameBackgroundLibraryProps = {
  groups: ReadonlyArray<FrameBackgroundGroup>;
  selectedClassName: string;
  onSelect: (className: string) => void;
};

export function FrameBackgroundLibrary({
  groups,
  selectedClassName,
  onSelect,
}: FrameBackgroundLibraryProps) {
  return (
    <div className="frame-library">
      {groups.map((group) => (
        <div key={group.title} className="frame-library-group">
          <div className="frame-library-group__header">
            <h3>{group.title}</h3>
            {group.meta ? <span className="frame-library-group__meta">{group.meta}</span> : null}
          </div>
          <ExpandableSwatchGrid
            swatches={group.swatches}
            selectedClassName={selectedClassName}
            onSelect={onSelect}
          />
        </div>
      ))}
    </div>
  );
}
