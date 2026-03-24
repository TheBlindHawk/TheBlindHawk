Run a full validation of the website: type-check all Astro and TypeScript files, then do a production build.

Execute these two commands in sequence from the repo root:

```bash
pnpm astro check
pnpm build
```

Report the results clearly:
- If both pass: confirm everything is clean and ready to commit/deploy
- If `astro check` fails: show the type errors and suggest fixes
- If `build` fails: show the build errors and suggest fixes

Do not proceed to `pnpm build` if `astro check` fails.
