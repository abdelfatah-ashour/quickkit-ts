# quickkit-ts

A zero-dependency, tree-shakeable TypeScript date utility library built with Vite in library mode.
Published to **npm** and served via **CDN** (unpkg, jsdelivr, esm.sh).

---

## Project Overview

quickkit-ts currently provides one module:

| Module | Entry | Purpose |
|------------|-------------------------|----------------------------------------------|
| `QuickkitDate` | `src/quickkit-date/index.ts` | Date helpers — locale-aware relative time, preset-based formatting, and time difference calculations |

The main entry point (`src/index.ts`) re-exports the date module:

```ts
import { format, fromNow, getDuration } from "quickkit-ts/date";
// or import from root
import { format, fromNow, getDuration } from "quickkit-ts";
```

---

## Hard Constraints

1. **TypeScript only** — all source lives in `src/`, written in strict TypeScript.
2. **Zero third-party dependencies** — no runtime `dependencies` in `package.json`. Dev dependencies (Vite, TypeScript, Biome, vitest) are fine.
3. **Tree-shakeable** — every export must be a named export from a pure, side-effect-free module. Never use default exports. Never cause top-level side effects. Mark `"sideEffects": false` in `package.json`.
4. **Smallest possible output** — prefer simple functions over classes. Avoid closures that capture large scopes. No polyfills. Target ES2023. Use Vite's `build.minify: "esbuild"` (default). Avoid `enum` (use union types or `as const` objects). Keep each function focused and small.
5. **Biome** — use `@biomejs/biome` for all linting and formatting. No ESLint, no Prettier.

---

## Directory Structure

```txt
quickkit-ts/
├── src/
│   ├── index.ts              # barrel — re-exports QuickkitDate
│   └── quickkit-date/
│       ├── index.ts          # barrel for QuickkitDate
│       ├── format.ts
│       ├── from-now.ts
│       ├── get-duration.ts
│       ├── resolve-locale.ts
│       └── type-format.ts
├── __tests__/
│   └── quickkit-date/
├── biome.json
├── tsconfig.json
├── tsconfig.build.json
├── vite.config.ts
├── package.json
├── CLAUDE.md
└── README.md
```

### File Rules

- **One function per file** where practical for tree-shaking and clean diffs.
- **barrel `index.ts`** in each module re-exports only the public API.
- **No circular imports**.
- **Filenames**: kebab-case (`get-duration.ts`) matching the primary export (`getDuration`).

---

## Build & Package Configuration

### Vite Library Mode (`vite.config.ts`)

Library entries:

- `index`: `src/index.ts`
- `date`: `src/quickkit-date/index.ts`

Formats:

- ES modules (`.js`)
- CommonJS (`.cjs`)
- UMD (`vite.umd.config.ts`)

### package.json Exports

Keep only:

- `"."`
- `"./date"`

---

## Coding Standards

### TypeScript

- **Strict mode** — no `any`; prefer `unknown` + narrowing.
- **No `enum`** — use union literals or `as const`.
- **No default exports** — always named exports.
- **Explicit return types** on exported functions.
- **JSDoc** on every exported function with summary, `@param`, `@returns`, and `@example`.

### Biome

- Format: `npm run format`
- Lint: `npm run lint`
- Fix lint: `npm run lint:fix`

---

## Testing

- Use **vitest**.
- Test files in `__tests__/quickkit-date/`.
- Each exported function must have at least one happy-path and one edge-case test.

---

## Git & Commits

- Follow **Conventional Commits**: `feat:`, `fix:`, `refactor:`, `test:`, `docs:`, `chore:`.
- Keep messages under 70 characters, imperative tense.
- One logical change per commit.

---

## Commands Quick Reference

| Task | Command |
|------|---------|
| Dev server | `npm run dev` |
| Build | `npm run build` |
| Lint | `npm run lint` |
| Lint + fix | `npm run lint:fix` |
| Format | `npm run format` |
| Test | `npm run test` |
| Test (watch) | `npm run test:watch` |
