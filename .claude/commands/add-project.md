Add a new project entry to the website's content collection.

Ask the user for the following details (one at a time or all at once if they've already provided them):

1. **title** — display name of the project
2. **description** — one sentence summary (shown on the projects card)
3. **github** — full GitHub URL (must be a valid URL starting with https://)
4. **tags** — comma-separated list of tech tags (e.g. "typescript, react, npm")
5. **category** — one of: `game-dev`, `package`, `challenge`
6. **status** — one of: `ongoing`, `completed`, `dropped`, or leave blank (default: none)

Then:
- Derive a `slug` from the title: lowercase, spaces replaced with hyphens, no special characters (e.g. "My Cool Tool" → `my-cool-tool`)
- Create the file at `src/content/projects/<slug>.md` with this exact frontmatter structure:

```markdown
---
title: "<title>"
description: "<description>"
github: "<github url>"
tags: [<"tag1", "tag2", ...>]
category: "<game-dev|package|challenge>"
status: "<ongoing|completed|dropped>"   # omit this line if no status
---
```

- Leave the body empty (no content below the frontmatter)
- Confirm the file was created and show the path
