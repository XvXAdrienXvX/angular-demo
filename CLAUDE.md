# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm start` — dev server at http://localhost:4200 (`ng serve`, development config)
- `npm run build` — production build to `dist/` (budgets: 500kB warn / 1MB error initial; 4kB warn / 8kB error per component style)
- `npm run watch` — development build in watch mode
- `npm test` — unit tests with Vitest via the `@angular/build:unit-test` builder (jsdom environment)
- Single test file: `npx ng test --include src/app/app.spec.ts`; filter by test name: `npx ng test --filter "should render title"`
- `npm run mock-server` — json-server on port 3000 serving `db.json` (note: `db.json` does not exist yet at the repo root; create it before running)
- `npm run dev:mock` — runs mock server and dev server together via `concurrently`
- Formatting: Prettier (`npx prettier --write .`) — 100 char width, single quotes, Angular parser for `.html`. No linter is configured.

## Architecture

Angular 21 standalone application (no NgModules), freshly scaffolded:

- `src/main.ts` bootstraps the root `App` component (`src/app/app.ts`) with `appConfig` from `src/app/app.config.ts`. App-wide providers (router, HTTP client, etc.) go in `appConfig`.
- Routing is defined in `src/app/app.routes.ts` (currently empty); `App` renders a `<router-outlet>`.
- `src/app/app.html` is still the CLI placeholder template; `app.spec.ts` asserts its `<h1>` text, so update the spec when replacing the template.
- Styling: Tailwind CSS v4 via PostCSS (`.postcssrc.json`), imported in `src/styles.css` with `@import 'tailwindcss'`.
- Static assets live in `public/` and are copied to the build output root.
- Component selector prefix is `app`. TypeScript is strict, with Angular `strictTemplates`, `strictInjectionParameters`, and `strictInputAccessModifiers` enabled.
- File naming follows the Angular 20+ convention without type suffixes (`app.ts`, not `app.component.ts`); components use signals for state.

The `angular-developer` skill (vendored under `.agents/skills/`) contains Angular best-practice guidance — load it when generating Angular code.
