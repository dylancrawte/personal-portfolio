# React + TypeScript + Vite
test

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## `src` layout

Application code lives under `src`. The Vite entry mounts the app from `main.tsx`; `App.tsx` wires the shell and page sections together.

```
src/
├── main.tsx           # Vite/React DOM entry
├── App.tsx            # Root layout: navbar + main + sections
├── index.css          # Global styles
├── assets/            # Static files (e.g. SVGs)
├── components/        # Shared UI primitives (e.g. Button)
├── layout/            # Site-wide chrome (e.g. Navbar)
└── sections/          # One folder per major page block
    ├── Hero.tsx
    ├── About.tsx
    ├── Experience.tsx
    ├── Projects.tsx
    └── Testimonials.tsx
```

## Styles and `className`

Styling uses **Tailwind CSS v4** with the **Vite plugin** (`@tailwindcss/vite` in `vite.config.ts`). Global styles are defined in `src/index.css`, which is imported once from `src/main.tsx` so every component can use Tailwind utilities.

**Tailwind entry and theme.** The file (src/index.css) starts with `@import "tailwindcss"`. The `@theme { ... }` block declares design tokens (colours, radius, etc.) as CSS custom properties. Tailwind turns those into utility classes you use in JSX—for example `bg-primary`, `text-foreground`, `rounded-*` (from `--radius`), and `border-border`.

**Layers.** `@layer base` sets document defaults (`html` smooth scrolling, `body` background, text colour, and the Inter font) and a `.font-serif` helper. `@layer components` defines reusable classes such as `.glass` and `.glass-strong` (used in the navbar for the frosted pill) alongside utilities.

**`className` in components.** Most elements use a `className` string of Tailwind utilities directly. For shared components that need overrides, the pattern is to accept an optional `className` prop and concatenate it with fixed base styles—for example `Button` merges a base string, size-specific classes, and the caller’s `className` into one string passed to the native `<button>`. There is no `clsx` / `cn` helper yet; extend the string if you add conditional classes.

## Mobile and responsive layout

`index.html` includes the standard viewport meta tag (`width=device-width`, `initial-scale=1`) so layout and typography scale correctly on phones and tablets.

Layout uses **Tailwind responsive prefixes** (default styles apply to small screens; `md:` and up target larger viewports). The root wrapper in `App.tsx` uses `overflow-x-hidden` to limit accidental horizontal scrolling on narrow screens.

The **navbar** switches behaviour by breakpoint: the inline “pill” links and desktop contact button use `hidden md:flex` / `hidden md:block`, while a **menu icon** (`md:hidden`) toggles a **mobile menu** (stacked links and contact action) with local React state. Add similar `sm:` / `lg:` utilities in sections as you refine breakpoints.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
