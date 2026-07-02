# Ravinder Pandey — Portfolio

Production portfolio for **Ravinder Pandey**, Backend Architect & AI Voice Infrastructure engineer. A fast, accessible, SEO-complete marketing-grade site — built like a product, not a template.

> Live design reference: the whole site is driven by typed data in `content/`. Change the data, the UI follows. No repeated markup, no hardcoded copy in components.

---

## Stack

| Concern | Choice |
|---|---|
| Framework | **Next.js 14** (App Router, React Server Components) |
| Language | **TypeScript** (strict) |
| Styling | **Tailwind CSS** with PUL$E design tokens |
| Animation | **Framer Motion** (reduced-motion aware via `MotionConfig`) |
| UI primitives | **shadcn/ui** (`Button`, `Badge`) + Radix Slot |
| Icons | **lucide-react** |
| Fonts | **next/font** — Space Grotesk (display), Inter (body), JetBrains Mono |
| SEO | Metadata API, JSON-LD (`Person` + `WebSite`), dynamic OpenGraph image, `sitemap.ts`, `robots.ts` |

---

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # next lint
npm run typecheck  # tsc --noEmit
```

Requires Node 18.17+ (Node 20 LTS recommended).

---

## Architecture

```
app/                     # App Router routes + SEO files
  layout.tsx             # fonts, providers, nav/footer shell, metadata
  page.tsx               # Home
  projects/              # index + [slug] detail (AVA ONE = full case study)
  architecture/          # system map + request-lifecycle player
  experience/  about/  writing/  contact/  resume/
  sitemap.ts  robots.ts  opengraph-image.tsx
  globals.css
components/              # reusable UI — every section is a component
  ui/                    # shadcn primitives (button, badge)
  site-nav · site-footer · command-palette · mouse-glow
  reveal · pipeline · architecture-map · flow-player · code-tabs
  project-card · project-row · projects-list · decision-card
  stat-strip · tech-stack · section-heading · contact-cta
  ava-one-case-study · providers · copy-email-button
content/                 # ← the single source of truth (typed data)
  site.ts                # identity, nav, socials, URLs
  site-content.ts        # stats, principles, stack, bio, writing
  projects.ts            # all projects + filters
  experience.ts          # timeline + facts
  architecture.ts        # system map, flow stages, decisions, pipeline
  code-samples.ts        # the real code in the case study
lib/                     # utils (cn, formatDate), seo (metadata + JSON-LD)
hooks/                   # use-command-palette, use-mouse-glow, use-prefers-reduced-motion
types/                   # all domain types
public/                  # favicon.svg, resume.pdf
```

### Editing content

Everything visible is data. To update the site you almost never touch a component:

- **Add a project** → append to `content/projects.ts` (typed as `Project`). It appears on Home, in the filtered Projects index, and gets its own `/projects/<slug>` route automatically.
- **Update experience** → `content/experience.ts`.
- **Change the case study** → `content/architecture.ts` (map, flow stages, decisions) and `content/code-samples.ts`.
- **Publish a post** → add to `writing` in `content/site-content.ts` and set `status: "published"` with an `href`.
- **Identity / links / email** → `content/site.ts`.

The AVA ONE flagship renders the full engineering case study (`components/ava-one-case-study.tsx`); every other project uses the clean generated detail view. To promote another project to a full case study, branch on its slug in `app/projects/[slug]/page.tsx`.

---

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `footer`), skip-to-content link.
- Keyboard-operable command palette (⌘K / Ctrl-K) with arrow-key navigation, `aria-current` on active nav.
- `prefers-reduced-motion` respected globally: Framer via `MotionConfig reducedMotion="user"`, CSS animations neutralized in `globals.css`, mouse-glow listener not attached.
- AA-contrast palette on near-black; focus-visible rings on interactive elements.

---

## Performance (Lighthouse target: 100)

- Server Components by default; only interactive islands (`nav`, palette, flow player, code tabs, projects filter, copy button, providers) are `"use client"`.
- `next/font` self-hosts fonts with `display: swap` — no layout shift, no third-party request.
- Static generation for all routes incl. `generateStaticParams` on project detail pages.
- No image dependencies in the core UI; when you add imagery use `next/image` (already configured in `next.config.mjs`).

---

## Before you ship

1. **Set the canonical origin** — edit `url` in `content/site.ts` (used by metadata, canonical tags, sitemap, robots, JSON-LD).
2. **Replace the résumé** — drop your latest PDF at `public/resume.pdf`.
3. **Verify contact details** in `content/site.ts` (email, phone, socials).
4. *(Optional)* Add a **GitHub activity** section — a `content/github.ts` loader against the `@ravin972` GitHub API (repos + contributions) is the intended next step; the design already reserves space for it.

---

## Deploy

Optimized for **Vercel**:

```bash
vercel        # preview
vercel --prod # production
```

Any Node host works too: `npm run build && npm run start`. The dynamic OpenGraph image uses the Edge runtime — on non-Vercel hosts ensure Edge/Node compatibility or swap `app/opengraph-image.tsx` for a static `public/og.png` referenced from `content/site.ts`.

---

## License

MIT © Ravinder Pandey
