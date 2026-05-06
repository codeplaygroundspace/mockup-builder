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

## Future Refactor Ideas

- Split the large `app/globals.css` component layer into smaller files if the CSS keeps growing, for example `styles/tokens.css`, `styles/primitives.css`, and `styles/app-shell.css`.
- Introduce CSS Modules for component-specific styles that should not be global.
- Replace static mock UI state with real state for selected mode, selected style, layout preset, zoom, and export settings.
- Convert repeated mockup preview data into typed configuration objects shared between panels and the preview stage.
- Add accessible primitives for richer interactive controls, especially menus, popovers, dialogs, and file-picker flows.
- Improve the media drop flow with real file input, drag-and-drop handling, paste handling, empty, loading, and error states.
- Add responsive layout rules for tablet and mobile once the desktop structure is stable.
- Add tests for core UI state transitions when controls become interactive.
- Review color tokens and naming once the visual direction settles, then remove remaining one-off color utilities where practical.
