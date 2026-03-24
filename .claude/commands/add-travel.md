Add a new travel entry to the website's content collection.

Ask the user for the following details:

1. **title** — descriptive title for the trip (e.g. "Japan — Spring 2025")
2. **date** — date of the trip in YYYY-MM-DD format (use the start date)
3. **location** — city and country (e.g. "Tokyo, Japan")
4. **coverImage** — optional path to a cover image (e.g. `/images/travel/japan-cover.jpg`). If not provided, omit the field entirely.

Then:
- Derive a `slug` from the title: lowercase, spaces and special characters replaced with hyphens (e.g. "Japan — Spring 2025" → `japan-spring-2025`)
- Create the file at `src/content/travel/<slug>.md` with this frontmatter:

```markdown
---
title: "<title>"
date: <YYYY-MM-DD>
location: "<location>"
coverImage: "<path>"   # omit this line if no cover image
---
```

- Leave the body empty — the user can fill in the narrative later
- Remind the user: if they provided a coverImage path, make sure the image file exists at `public<path>` (e.g. `public/images/travel/japan-cover.jpg`)
- Confirm the file was created and show the path
