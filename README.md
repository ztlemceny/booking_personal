# Ztlemceny — Tour Guide Website

Static marketing website for Hamza, a licensed tour guide based in **Tlemcen, Algeria**. Built with Astro + Tailwind CSS. Supports three languages: French, English, and Arabic (with full RTL layout).

## Pages

| Route | Description |
|---|---|
| `/fr/` `/en/` `/ar/` | Home — hero, tour highlights, stats, testimonials preview |
| `/[lang]/tours` | All 5 tours with descriptions, duration, what's included |
| `/[lang]/about` | Hamza's story and credentials |
| `/[lang]/gallery` | All photos with category filter + lightbox |
| `/[lang]/testimonials` | Guest reviews |
| `/[lang]/contact` | Contact form (Netlify), WhatsApp, FAQ |

## Prerequisites

- **Node.js** v18 or later — install via your package manager:
  ```bash
  # Arch / CachyOS
  sudo pacman -S nodejs npm
  ```

## Run locally

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open [http://localhost:4321/fr/](http://localhost:4321/fr/) in your browser. The site hot-reloads on any file change.

Other available commands:

```bash
npm run build    # Build for production → outputs to /dist/
npm run preview  # Preview the production build locally
```

## Updating content

All content is separated from code — no component files need to be touched for routine updates.

| What to change | Where |
|---|---|
| Button labels, nav, page titles | `src/i18n/fr.json` / `en.json` / `ar.json` |
| Tour descriptions | `src/content/tours/*.{fr,en,ar}.md` |
| About page text | `src/content/about/{fr,en,ar}.md` |
| Testimonials | `src/content/data/testimonials.json` |
| Gallery photos & captions | `src/content/data/gallery.json` + `public/images/shots/` |
| Booking URL, WhatsApp, email, socials | `src/config.ts` |

## Deploy to Netlify

1. Push the repository to GitHub
2. Connect the repo in the Netlify dashboard
3. Build command: `npm run build` — publish directory: `dist`
4. Netlify automatically handles the contact form (no backend needed)

## Tech stack

- [Astro](https://astro.build) — static site generator
- [Tailwind CSS](https://tailwindcss.com) — utility-first styling
- [Netlify](https://netlify.com) — hosting + form handling
