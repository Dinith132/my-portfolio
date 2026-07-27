# Portfolio Repository Rules

This repository is Dinith Priyankara's portfolio, built with React, TypeScript, Vite, Tailwind CSS, Lucide React, and GitHub Pages.

## Deployment

- Preserve GitHub Pages compatibility.
- Keep the Vite `base` aligned with the repository path: `/my-portfolio`.
- Do not hardcode production URLs for local images. Use root-relative public paths such as `/img/img1.jpg`.

## Content accuracy

- Do not publish unverified dates, metrics, job achievements, degree details, GPA, awards, client names, or project results.
- Use visible placeholders for missing facts.
- Do not link to `public/M.M.D.P.Wijedasa-CV.pdf`; that filename does not match Dinith Priyankara and must remain unpublished until a correct CV is confirmed.
- Keep email as a clear placeholder until the preferred contact email is confirmed.

## Architecture

- Keep reusable content in typed data files under `src/data`.
- Keep page sections in `src/sections` and layout components in `src/layout`.
- Prefer small functional React components with TypeScript types.
- Avoid random values during render so the page is deterministic.

## Design and accessibility

- Build the static, responsive layout first.
- Add advanced animation only after the static experience is accessible and readable.
- Do not add GSAP, Lenis, pinned scrolling, loaders, or complex animation in the first redesign stage.
- Use semantic sections, real links/buttons, visible focus states, descriptive alt text, and reduced-motion friendly CSS.
