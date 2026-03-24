# CLAUDE.md — TheBlindHawk Website

This file documents conventions, tech decisions, and patterns for Claude to follow in this project.

---

## Tech Decisions

- **Astro 6** for all pages and layouts — zero JS by default, file-based routing
- **React** only for interactive islands (gallery lightbox, anything needing useState/useEffect)
- **Tailwind CSS v4** — CSS-first config via `@import "tailwindcss"` in `global.css`; no `tailwind.config` needed for most things
- **Motion** for animations in React islands and page transitions
- **TypeScript strict mode** — all files must be typed; no `any`

---

## Conventions

### File naming
- Astro components: `PascalCase.astro` (e.g. `Nav.astro`, `BaseLayout.astro`)
- React components: `PascalCase.tsx` (e.g. `GalleryGrid.tsx`)
- Pages: `lowercase.astro` (e.g. `index.astro`, `gallery.astro`)
- Content files: `kebab-case.md` (e.g. `my-project.md`)

### Astro vs React
- Default to `.astro` — use React (`.tsx`) only when client-side interactivity is required
- React islands must have `client:load` or `client:visible` directive in the `.astro` parent
- Keep islands small and focused

### Styling
- Use Tailwind utility classes directly in templates
- Avoid inline styles
- Use `@apply` in `global.css` sparingly — only for truly repeated patterns
- Dark theme by default; background is `#0d0d0d`, text is `#e5e5e5`
- Accent color: cyan (`#06b6d4` / `cyan-500`)

### Content Collections
- `src/content/projects/` — project entries, schema in `config.ts`
- `src/content/travel/` — travel entries, schema in `config.ts`
- Always validate new entries against the schema before building

---

## Commands

```bash
pnpm dev           # start dev server
pnpm build         # build to dist/
pnpm preview       # preview dist/
pnpm astro check   # TypeScript + Astro type check
```

---

## Directory Layout

```
src/
  layouts/BaseLayout.astro   # imports global.css, renders Nav + slot + Footer
  components/
    Nav.astro                # top navigation
    Footer.astro             # social links
    gallery/GalleryGrid.tsx  # React island
  content/
    config.ts
    projects/*.md
    travel/*.md
  pages/
    index.astro
    gallery.astro
    projects.astro
    travel.astro
    404.astro
  styles/global.css
public/
  images/
    gallery/   # artwork files
    travel/    # travel photos
```
