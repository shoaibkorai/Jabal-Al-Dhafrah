# AC & Appliance Repair — Oman (EN / AR)

Static bilingual site built with Astro 7 + Tailwind 4. English at `/`, Arabic (RTL) at `/ar/`.

## Commands
- `npm run dev` — local dev server (http://localhost:4321)
- `npm run build` — build static site to `dist/`
- `npm run preview` — serve the built site

## Where things live
| What | File |
|---|---|
| Brand name, phone, WhatsApp, address, hours, domain | `src/config/site.ts` |
| Services (EN + AR copy, FAQs) | `src/data/services.ts` |
| Cities, neighbourhoods, response times | `src/data/cities.ts` |
| UI text (buttons, headings) | `src/i18n/ui.ts` |
| Page layouts | `src/views/*.astro` |

## Deployment (AWS Amplify Hosting)
Amplify is connected to this GitHub repo; every push to `main` rebuilds and deploys automatically.
- Build settings: `amplify.yml` (Node 22, `npm ci`, `npm run build`, output `dist/`)
- Response headers (caching, security): `customHttp.yml`
- Custom 404: in Amplify → Hosting → Rewrites and redirects, add
  source `/<*>` → target `/404.html` → type **404 (Rewrite)**.
- Custom domain: Amplify → Hosting → Custom domains. After it's live, set the same domain in
  `src/config/site.ts` (`url`) and `public/robots.txt`, then push.

## Go-live checklist
1. Fill in `src/config/site.ts` (real name, domain, phone, WhatsApp, address, map pin).
2. Update the domain in `public/robots.txt`.
3. Replace `public/logo.svg` and `public/og.png` with your real logo / share image.
4. Confirm response times in `src/data/cities.ts` match what you can actually deliver.
5. Add real photos of your team, vans and work (biggest trust and ranking boost).
6. Deploy `dist/` to Cloudflare Pages / Netlify / Vercel (build: `npm run build`, output: `dist`).
7. Create a **Google Business Profile** with the same name, phone and address; add its URL to `sameAs`.
8. Submit `/sitemap-index.xml` in Google Search Console and Bing Webmaster Tools.
9. Collect genuine Google reviews; once you have them, set `rating` in `site.ts`.

Don't copy text from competitors' sites — duplicate content hurts rankings.
