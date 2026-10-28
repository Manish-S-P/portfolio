# Manish S P · Portfolio

Next.js (App Router) + TypeScript + Tailwind CSS v4 + framer-motion. Built from `../design_handoff_portfolio`.

```bash
npm run dev     # http://localhost:3000
npm run build
```

## Where things live

- `lib/content.ts`: all copy and data (projects, case studies, skills, interests, links)
- `app/page.tsx`: home, all sections in order
- `app/work/[slug]/page.tsx`: case studies, statically generated from `CASES`
- `app/globals.css`: design tokens (colours, hard shadows, easings, keyframes) and the custom cursor
- `components/`: one file per section, plus `Loader`, `NavPill`, `Sticker`, `HoverPreview`, `PixelSkull`, `Reveal`

## Notes

- The loader plays once per full page load (`lib/intro.ts`); coming back from a case study skips it.
- Voyages pins only at ≥700px with motion allowed. Otherwise the cards stack and show fully yellow.
- `prefers-reduced-motion` disables the loader, typewriter, marquee, and pinned voyage.

## TODO before launch

- Springer paper URL, contract explorer URL and real repo URLs in `lib/content.ts` (the `href: "#"` entries)
- Project screenshots: put them in `public/` and set `image` on each project for the hover preview
- Open Graph image
