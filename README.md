# Local Site Factory

Local Site Factory is a reusable Astro template for rapidly producing polished, personalized websites for local-service businesses. It keeps each prospect’s content, imagery, calls to action, and colors separate from the reusable UI so a strong demo can be prepared without rebuilding the site.

The template is intentionally a static website—not a CMS, SaaS product, or lead-generation platform.

## Development

Requirements: Node.js 22.12 or newer and npm 9.6 or newer.

```bash
npm install
cp .env.example .env
npm run dev
```

Useful commands:

```bash
npm run dev       # Local development server
npm run check     # Astro and TypeScript checks
npm run build     # Static production build in dist/
npm run preview   # Preview the production build
```

## Configuration

All active business content lives in [`src/config/business.config.ts`](src/config/business.config.ts). Reusable components receive this typed object rather than containing prospect-specific copy.

The configuration controls:

- business name, category, and contact details;
- SEO title, description, canonical base URL, and social image;
- hero copy and calls to action;
- services, verified reviews, about content, and optional gallery;
- optional contact-form endpoint and social links;
- the core color palette.

Image references use an object containing `src`, `alt`, `width`, and `height`. Update all four values when replacing an image so the page remains accessible and avoids layout shift.

### Theme

Change `theme.primary`, `theme.secondary`, `theme.accent`, and the optional background, foreground, and surface colors. `BaseLayout.astro` exposes them as CSS variables consumed by the reusable styles.

### Canonical URLs and social images

Set `siteUrl` to the final production origin, including `https://`, when the site has a stable domain. Canonical and absolute Open Graph URLs are omitted until that value exists, which prevents preview URLs from being treated as production URLs.

## Images

Each business uses its own folder:

```text
public/images/<business-slug>/
  hero.jpg
  about.jpg
  gallery-1.jpg
```

Components never depend on these filenames directly; the active business configuration supplies every path. Optional service images and the gallery can be omitted.

The generic images in `public/images/demo/` were generated specifically for this template and contain no real prospect content.

## Creating a prospect

Always start from an up-to-date `main` branch and create a dedicated prospect branch:

```bash
git checkout main
git pull
git checkout -b prospect/vmel
npm run prospect -- vmel
npm run dev
```

The command accepts lowercase kebab-case slugs, creates `public/images/vmel/`, copies the generic images so the site still renders, and replaces the active business configuration with a prospect starter. It refuses to run directly on `main` and refuses to overwrite an existing image folder.

Customize:

1. accurate business details and contact information;
2. verified copy, services, reviews, and calls to action;
3. the theme colors;
4. the copied images and their alt text/dimensions;
5. `siteUrl` only when a stable production domain exists.

Commit and push the prospect branch:

```bash
git add .
git commit -m "Create VMEL prospect demo"
git push -u origin prospect/vmel
```

With Vercel Git integration enabled, the pushed branch receives its own preview deployment.

## Demo mode

Set the public environment variable locally and in the Vercel preview environment:

```env
PUBLIC_DEMO_MODE=true
```

Demo mode shows a clear “created for demonstration purposes” notice and emits `noindex, nofollow`. Set it to `false` for an approved production website.

Because this is an Astro public variable, it is embedded at build time and must not contain secrets.

## Contact-form integration

The initial form intentionally does not claim to submit anything. Until `contact.formEndpoint` is configured, the submit button is disabled and the site directs visitors to call or email.

To connect Formspree, a Vercel function, Netlify Forms, a CRM, or an email API, set `contact.formEndpoint` to its POST endpoint and add any provider-specific hidden fields or server validation in `src/sections/Contact.astro`. Never place secret API keys in the business configuration or any `PUBLIC_` environment variable.

## Deploying with Vercel

1. In Vercel, choose **Add New → Project** and import this GitHub repository.
2. Vercel should detect Astro automatically.
3. Use `npm run build` as the build command and `dist` as the output directory if detection does not populate them.
4. Add `PUBLIC_DEMO_MODE=true` for Preview environments. Use `false` for Production after client approval.
5. Deploy `main` as the master template or choose the appropriate production branch for a client.

Every pushed `prospect/*` branch will receive a Vercel preview URL when automatic preview deployments are enabled.

### Custom demo subdomains

Later, add `moneymarc.com` to the Vercel project, configure the DNS records Vercel requests, and assign a branch-specific domain such as `vmel.moneymarc.com` to the matching prospect branch. DNS and branch-domain mapping are intentionally manual so a prospect is never published under the wrong name.

## Reusable improvements

Prospect-specific copy and assets stay on the prospect branch. When work produces a genuinely reusable component, accessibility fix, or performance improvement:

1. isolate that improvement in its own commit;
2. cherry-pick or reimplement it on `main` without prospect content;
3. verify `main` still renders the generic demo;
4. merge or rebase it into active prospect branches only when useful.

## When a prospect becomes a client

1. Replace all sample copy, images, reviews, contact details, and legal information with approved production content.
2. Connect and test the real form delivery path.
3. Set `PUBLIC_DEMO_MODE=false`.
4. Set `siteUrl` to the real domain and verify metadata.
5. Add production analytics only with client approval and an appropriate privacy policy.
6. Connect the client domain in Vercel.
7. Keep the branch in this repository or create a dedicated private repository when separate ownership, billing, or long-term maintenance makes that cleaner.

This workflow does not automate repository extraction yet. Reusable template improvements should return to `main` before the client code diverges.

## Project structure

```text
public/
  images/demo/
  favicon.svg
  robots.txt
scripts/
  create-prospect.mjs
src/
  components/
  config/
    business.config.ts
    types.ts
  layouts/BaseLayout.astro
  pages/
  sections/
  styles/
  utils/
```

## Intentionally not included

There is no CMS, database, authentication, client portal, billing, CRM, scraping, automated lead generation, AI copy generator, analytics dashboard, visual page builder, or multi-tenant infrastructure.
