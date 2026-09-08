# Amarachi Blossom — Portfolio

Personal portfolio for [Amarachi Blossom](https://amarachiblossom.com), Product Designer.

## Stack

- **Next.js 16** (App Router, static generation)
- **React 19** + **TypeScript**
- **Tailwind CSS v4** with tokens sourced from the Figma design
- **Framer Motion** for scroll-reveal animations
- **Lucide React** for icons

## Local development

```bash
npm install
npm run dev
```

Site runs at http://localhost:3000. Case studies are at `/work/[slug]` — see `src/lib/case-studies.ts` for the four seeded ones (baby-haven, meerge, landbridge, eye-level).

## Editing case studies

Case study content is data — edit `src/lib/case-studies.ts` and the template at `src/app/(work)/work/[slug]/page.tsx` will pick it up automatically. Each case study is one typed object with hero, overview, problem, process, system, screens, impact, and a next-project pointer.

## Design tokens

Tokens live in two places:

- `src/app/globals.css` — CSS custom properties + Tailwind theme mapping (colors, fonts, tracking, radii)
- `src/lib/tokens.ts` — TypeScript reference for the type scale

Both are derived from the Figma file (`RZyd6n6XTQa2IUefG4iKPg`).

## Deploying to Vercel

The project is already configured for zero-config Vercel deployment.

1. Push this repo to GitHub.
2. In Vercel, click **Add New → Project** and import the repo.
3. Vercel auto-detects Next.js — no build config needed.
4. Set the env var `NEXT_PUBLIC_SITE_URL` to your production URL (used by `sitemap.xml` and OG metadata).
5. Deploy. Custom domain: **Project Settings → Domains**.

```bash
# Alternative: deploy from the CLI
npx vercel
```

## Structure

```
src/
├── app/
│   ├── layout.tsx           # Root — fonts, metadata, body shell
│   ├── globals.css          # Design tokens
│   ├── sitemap.ts           # /sitemap.xml
│   ├── robots.ts            # /robots.txt
│   ├── (home)/              # Home page group
│   │   ├── layout.tsx       # Home nav + footer
│   │   └── page.tsx         # / — composes all home sections
│   └── (work)/              # Case study group
│       ├── layout.tsx       # Footer only (case-study nav is per-page)
│       └── work/[slug]/
│           └── page.tsx     # Case study template
├── components/
│   ├── Container.tsx        # max-w wrapper
│   ├── Nav.tsx              # Home nav
│   ├── Footer.tsx           # Shared footer
│   ├── CaseStudyNav.tsx     # Sticky nav with scroll-spy
│   ├── SectionLabel.tsx     # 01 — Section number + label
│   ├── Reveal.tsx           # Scroll-reveal wrapper
│   └── sections/            # Home page sections
└── lib/
    ├── cn.ts                # class merger
    ├── tokens.ts            # type scale reference
    └── case-studies.ts      # case study data model + seeds
```
