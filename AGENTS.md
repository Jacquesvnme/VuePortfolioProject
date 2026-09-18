# Project Rules

## Architecture

- Keep the site as one scrolling portfolio composed from page-level sections in `src/pages`.
- Keep kebab-case section IDs stable because they are public URL anchors.
- Put reusable presentation in `src/components`; keep page components focused on composition.
- Keep replaceable portfolio content in `src/data/portfolio.ts` and its contracts in `src/types/portfolio.ts`.
- Prefer adding data entries over duplicating page markup.

## UI and styling

- Use shadcn-vue primitives from `src/components/ui` for common controls.
- Use SVG icons through `@lucide/vue`; do not introduce raster icons or icon fonts.
- Prefer named CSS classes over inline styles.
- Put recurring CSS in the relevant file under `src/styles`; leave truly page-specific styling local to its page.
- Preserve the typography-led editorial layout, dark glass treatment, green accent, and light/dark themes.
- Maintain responsive behaviour, keyboard navigation, visible focus states, and reduced-motion support.

## Content and quality

- Keep committed example content generic until the owner provides final copy.
- Do not add a blog section unless the project scope changes explicitly.
- Run `npm run format:check`, `npm run lint`, and `npm run build` before handing off changes.
