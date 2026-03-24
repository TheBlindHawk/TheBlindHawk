# TheBlindHawk — Personal Website

Personal portfolio site for **BlindHawk**: digital artist, developer, traveler.

Built with **Astro 6**, **React 19**, **Tailwind CSS v4**, deployed to **Vercel**.

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero and section previews |
| `/gallery` | Artwork, drawings, and manga |
| `/projects` | IT projects with GitHub links |
| `/travel` | Travel journal and photos |

---

## Stack

- **[Astro 6](https://astro.build)** — static site generator, file-based routing
- **[React 19](https://react.dev)** — interactive UI islands (gallery lightbox, etc.)
- **[Tailwind CSS v4](https://tailwindcss.com)** — utility-first styling
- **[Motion](https://motion.dev)** — animations
- **TypeScript** — strict mode
- **pnpm** — package manager

---

## Development

```bash
pnpm install       # install dependencies
pnpm dev           # start dev server at localhost:4321
pnpm build         # production build → dist/
pnpm preview       # preview production build locally
```

---

## Project Structure

```
src/
  layouts/
    BaseLayout.astro     # shared HTML shell (Nav + Footer)
  components/
    Nav.astro            # navigation bar
    Footer.astro         # footer with social links
    gallery/
      GalleryGrid.tsx    # React island: image grid + lightbox
  content/
    config.ts            # content collection schemas
    projects/            # .md files — one per project
    travel/              # .md files — one per travel entry
  pages/
    index.astro
    gallery.astro
    projects.astro
    travel.astro
    404.astro
  styles/
    global.css           # Tailwind import + base styles
public/
  images/                # static image assets
```

---

## Content

### Adding a Project

Create `src/content/projects/my-project.md`:

```markdown
---
title: "My Project"
description: "Short description"
github: "https://github.com/TheBlindHawk/my-project"
tags: ["typescript", "rust"]
featured: true
---

Longer description of the project...
```

### Adding a Travel Entry

Create `src/content/travel/japan-2025.md`:

```markdown
---
title: "Japan — Spring 2025"
date: 2025-04-10
location: "Tokyo, Japan"
coverImage: "/images/travel/japan-cover.jpg"
---

Write about the trip here...
```

---

## Deployment

Connected to **Vercel** via GitHub. Every push to `main` triggers a production deploy. PRs get preview URLs automatically.
