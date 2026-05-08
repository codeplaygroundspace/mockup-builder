# Mockup Builder

A Next.js mockup-building interface for composing media previews, selecting styles, and preparing exports.

## Getting Started

Install dependencies, then run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in the browser.

## Agent Workflow

Before any AI assistant starts project work, it should read:

- `AGENTS.md` for repository-specific operating rules.
- `README.md` for setup notes and current project context.

During agent-assisted development, use `npm run dev` for HMR and avoid `npm run build` inside the agent session. See `AGENTS.md` for the full workflow rules.

## Useful Commands

```bash
npm run dev
npm run lint
npm run format:check
```

## Styling Notes

The app uses Tailwind CSS v4 plus a small project CSS layer in `app/globals.css`.

- Use global classes for shared product primitives such as panels, buttons, segmented controls, drop frames, and stage layout.
- Keep one-off sizing or content-specific layout in component markup when that is clearer than adding a new global class.
- Add new shared styling rules only when they remove real repetition or clarify a reusable UI pattern.

## Frame Background Architecture

Frame background options are split between typed configuration and CSS, depending on how the background is authored.

- `components/frame-tab-panel/frame-background-groups.ts` is the source of truth for picker groups and swatches.
- `components/frame-tab-panel/types.ts` defines each swatch as an id plus either a CSS `className`, an `imageUrl`, or both.
- `styles/frame-backgrounds.css` contains CSS-authored backgrounds such as solids, gradients, glass, cosmic, and mystic recipes.
- URL-only image categories such as Abstract live as TypeScript data and are rendered through inline background styles.

Selection state is stored as a stable background id in `components/mockup-builder-shell.tsx`. The selected id is resolved with `getFrameBackgroundSwatchById`, then passed to both the preview and export mockup surfaces. This keeps the picker, stage preview, and export surface using the same selected background object.

Swatches render through `components/frame-tab-panel/expandable-swatch-grid.tsx`. The grid uses `getFrameBackgroundSwatchId` for selection and `getFrameBackgroundStyle` to apply URL-backed image backgrounds. CSS-backed backgrounds still render by class name.

```mermaid
flowchart TD
  config["frame-background-groups.ts<br/>Groups + swatch data"]
  css["frame-backgrounds.css<br/>CSS-authored backgrounds"]
  picker["FrameBackgroundLibrary<br/>ExpandableSwatchGrid"]
  shell["MockupBuilderShell<br/>selected background id"]
  resolver["getFrameBackgroundSwatchById"]
  style["getFrameBackgroundStyle"]
  preview["PreviewMockupSurface"]
  export["ExportMockupSurface"]

  css -->|className references| config
  config --> picker
  picker -->|onSelect(id)| shell
  shell --> resolver
  resolver -->|selected swatch| preview
  resolver -->|selected swatch| export
  preview --> style
  export --> style
  style -->|imageUrl inline style or className| preview
  style -->|imageUrl inline style or className| export
```

When adding a new frame background:

- Add pure image backgrounds in `frame-background-groups.ts` with `imageSwatch(...)` or a URL array.
- Add simple reusable CSS-authored backgrounds in `styles/frame-backgrounds.css`, then reference the class from `frame-background-groups.ts`.
- Prefer stable ids for any data-backed swatch so future CSS class renames do not break saved selection state.

## Project Structure

```
app/              # App Router entry points (layout.tsx, page.tsx, globals.css)
components/       # UI components; co-locate sub-component folders (e.g. frame-tab-panel/)
hooks/            # Custom React hooks (e.g. use-contained-image-fit.ts)
lib/              # Pure utilities and configuration (frame-presets, mockup-export, layout helpers)
styles/           # Shared CSS layers imported via globals.css
public/           # Static assets served at the root URL
```

## State Management

No external state library. State lives in React `useState`/`useReducer` inside components, hoisted to the nearest common ancestor when shared. `MockupBuilderShell` (`components/mockup-builder-shell.tsx`) is the top-level stateful component that owns selected background, frame ratio, and media source.

## Assets

Static files go in `public/` and are referenced as root-relative URLs (e.g. `/test-06.png`). Test images (`test-06.png`, `test-landscape.png`, `test-portrait.png`) are used for local development only. Frame background image URLs are defined in `components/frame-tab-panel/frame-background-groups.ts`.

## Deployment

Designed to deploy on [Vercel](https://vercel.com) (the default Next.js host). No custom server required — `npm run build` + `npm run start` works for self-hosting. Do not run `npm run build` during agent sessions (see Agent Workflow above).

## Future Refactor Ideas

- Continue pruning and grouping the split files in `styles/` as shared UI patterns settle.
- Introduce CSS Modules for component-specific styles that should not be global.
- Replace remaining static mock UI state with real state for selected style, selected scene, zoom, and export settings.
- Convert remaining repeated mockup preview data into typed configuration objects shared between panels and the preview stage.
- Add accessible primitives for richer interactive controls, especially menus, popovers, dialogs, and file-picker flows.
- Improve the media drop flow with paste handling, loading states, and visible error states.
- Add responsive layout rules for tablet and mobile once the desktop structure is stable.
- Add tests for core UI state transitions when controls become interactive.
- Review color tokens and naming once the visual direction settles, then remove remaining one-off color utilities where practical.
