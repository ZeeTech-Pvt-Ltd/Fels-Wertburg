# Fels Wertburg AI

Fels Wertburg AI is an original marketing site for an Australian cryptocurrency research
platform. It is built with **Next.js (App Router)**, **React 19**, **Tailwind CSS** and
**Lucide React** icons, with lightweight hand-written SVG charts and no chart library.

## Getting started

```bash
npm install     # install dependencies
npm run dev     # start the dev server (http://localhost:3000)
npm run build   # production build
npm start       # serve the production build
```

## Stack

- [Next.js](https://nextjs.org/) 16 with the App Router (all routes statically prerendered)
- React 19
- Tailwind CSS 3 with custom brand tokens in `tailwind.config.js`
- Lucide React icons
- Self-hosted variable fonts: Inter (body) and Manrope (headings), loaded with
  `next/font/local` from `app/fonts`

## Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/about-us` | About Us |
| `/how-it-works` | How It Works |
| `/features` | Features |
| `/reviews` | Reviews |
| `/faq` | FAQ |
| `/contact` | Contact Us (carries the same registration form as the homepage) |
| `/privacy-policy` | Privacy Policy |
| `/cookie-policy` | Cookie Policy |
| `/terms-and-conditions` | Terms & Conditions |
| `/risk-disclosure` | Risk Disclosure |
| `/disclaimer` | Disclaimer |
| `/thank-you` | Post-registration confirmation (noindex, nofollow, no canonical) |

Unknown routes render `app/not-found.jsx` with a real 404 status. Legacy `.html` URLs are
redirected to their clean equivalents in `next.config.mjs`.

## Project structure

```
app/
├── layout.jsx                 # <html>, fonts, metadata, legal provider, site JSON-LD
├── fonts/                     # Self-hosted Inter and Manrope variable woff2 files
├── globals.css                # Tailwind layers + design tokens
├── not-found.jsx              # Branded 404 with site chrome
├── thank-you/page.jsx         # Standalone confirmation page
└── (site)/
    ├── layout.jsx             # Header, main landmark, Footer
    ├── page.jsx               # Homepage
    └── <route>/page.jsx       # Every interior route + its metadata
src/
├── components/                # Header, Footer, forms, charts, section components
├── data/                      # FAQ and legal document content (single source)
├── lib/seo.js                 # Shared metadata builder
├── HomePage.jsx               # Homepage section composition
├── AboutPage.jsx
├── HowItWorksPage.jsx
├── FeaturesPage.jsx
├── ReviewsPage.jsx
├── FAQPage.jsx
├── ContactPage.jsx
├── LegalPage.jsx
└── NotFoundPage.jsx
public/                        # favicon, OG image, platform image, robots, sitemap
```

## Key behaviours

- The registration form (`src/components/RegistrationForm.jsx`) is rendered on both the
  homepage `#register` section and the contact page, so the two can never drift.
- The FAQ accordion starts fully closed and opens one item at a time. The FAQ page generates
  `FAQPage` structured data from the same `src/data/faqs.js` content.
- Legal documents are served as full pages and also open in an accessible quick-view dialog;
  both read from `src/data/legal.js`.
- `sitemap.xml` lists indexable routes only. `/thank-you` is excluded and carries its own
  `noindex, nofollow` metadata.
- Header and footer navigation use Next.js `Link` for client-side navigation. Header active
  state comes from `usePathname`.

## Content notes

- All copy is original Australian English and written to be responsible about financial risk.
  There are no guaranteed-return claims and no invented statistics.
- Contact details live in `src/components/Footer.jsx` and `src/components/ContactPage.jsx`
  (via the shared `CONTACT_DETAILS` export).
- Review the legal copy in `src/data/legal.js` with a qualified professional before launch.

## Deployment

Deploy to Vercel with the default Next.js preset. `npm run build` prerenders every route as
static HTML; no server runtime is required beyond Next's static serving.
