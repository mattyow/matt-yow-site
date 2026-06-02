# Matt Yow — Portfolio Site

Next.js 15 (App Router) + TypeScript + CSS Modules + MDX for content. Deployed to Netlify.

## Quick start

```bash
# 1. Install dependencies (one time)
npm install

# 2. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Edit any file and the page reloads.

To build for production:
```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx           Root layout (HTML, body, sidebar wrapper)
  globals.css          Fonts, CSS variables, type utility classes
  page.tsx             Home page (/)
  work/
    page.tsx           Case study index (/work)
    [slug]/
      page.tsx         Dynamic case study route (/work/launchdarkly etc.)
      not-found.tsx    404 for missing case studies

components/            Reusable React components (Sidebar, Figure, PullQuote, …)
content/
  case-studies/        MDX files — one per case study. Add new ones here.
lib/
  case-studies.ts      Loads case study MDX files and parses frontmatter

public/
  fonts/               Self-hosted woff2 files
  images/              All site images
```

## Adding a new case study

1. Create `content/case-studies/<slug>.mdx`
2. Frontmatter at the top:

   ```mdx
   ---
   title: Census
   year: "2021–2025"
   agency: In-house
   services: Brand strategy, creative direction, visual identity, website
   blurb: Four years as founding designer.
   cover: /images/census/cover.png
   order: 1
   ---
   ```

3. Body in markdown + MDX components:

   ```mdx
   <Figure src="/images/census/cover.png" alt="…" caption="…" size="bleed" />

   ## Section heading

   <p className="lead">First paragraph (no indent).</p>

   Normal paragraph with first-line indent.

   <PullQuote attribution="Slavoj Žižek">
   The quote text here.
   </PullQuote>
   ```

4. Drop images into `public/images/<slug>/`
5. The case study is live at `/work/<slug>`

### MDX components available

- `<Figure src alt caption size />` — `size` is `"col" | "wide" | "bleed"`
- `<TwoUp>` — wrap two `<Figure>`s for a side-by-side grid
- `<PullQuote attribution="...">…</PullQuote>` — italic quote with left stroke

### Notes on markdown behavior

- Body paragraphs use a first-line indent. To start a section with a flush-left paragraph, write it as `<p className="lead">…</p>` instead of plain markdown.
- Section heads are `##` (h2) and `###` (h3) in MDX.

## Deploying to Netlify

1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import from GitHub** → pick the repo.
3. Netlify auto-detects Next.js. Defaults are correct:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Deploy. Subsequent pushes to `main` redeploy automatically.

## Local development tips

- Type errors show in the terminal and the browser overlay.
- CSS edits hot-reload instantly.
- Adding a new MDX file requires no server restart.
- Fonts are served from `/public/fonts/` and referenced via `@font-face` in `globals.css`.

## Things still to do (per design intent)

- [ ] Add real portrait image to home page (`public/images/matt-portrait.jpg`, then uncomment the `<img>` in `app/page.tsx`)
- [ ] Port remaining case studies: Census, Vela, Rows
- [ ] Build out `/archive`, `/books`, `/writing` pages
- [ ] Swap Lucide-style icon stand-ins for Matt's custom SVG icons in `components/Sidebar.tsx`
- [ ] Mobile layout polish for the sidebar (overlay vs. push)
