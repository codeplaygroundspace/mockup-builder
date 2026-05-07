# Claude Instructions

@AGENTS.md

## Environment

```json
{
  "env": {
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
  }
}
```

## Next.js Setup

- **Version:** Next.js 16.2.4 with React 19.2.4
- **Router:** App Router (`app/` directory) — use `app/layout.tsx` and `app/page.tsx` conventions
- **Styling:** Tailwind CSS v4 via `@tailwindcss/postcss`; global styles in `app/globals.css`
- **Language:** TypeScript 5 — all new files should be `.tsx` or `.ts`
- **Linting/Formatting:** ESLint 9 (`npm run lint`) + Prettier with `prettier-plugin-tailwindcss` (`npm run format`)
- **Key libraries:** `lucide-react` for icons, `html-to-image` for export
- **Config file:** `next.config.ts` (TypeScript config, not `.js`)
- **Server vs Client components:** Default to Server Components; add `"use client"` only when needed (event handlers, hooks, browser APIs)
- **Routing:** File-based via `app/` — new pages go in `app/<route>/page.tsx`, layouts in `app/<route>/layout.tsx`

## Project-Specific Rules

- Always read `AGENTS.md` and `README.md` before making changes or running commands.
- Use `npm run dev` for development — never run `npm run build` during agent sessions.
- Prefer TypeScript (`.tsx`/`.ts`) for new components and utilities.
- Co-locate component-specific styles in the same folder as the component.
- After adding or updating dependencies, update the lockfile and restart the dev server.
- When in doubt, restart the dev server rather than running the production build.
