# MarketPilot

MarketPilot is an original, single-page landing website for an Australian market insights,
analytics and education platform. It is built with **React + Vite + Tailwind CSS** and uses
**Lucide React** icons plus lightweight hand-written SVG charts - no image assets, no heavy
animation or UI libraries.

## Getting started

```bash
npm install     # install dependencies
npm run dev     # start the dev server (http://localhost:5173)
npm run build   # production build into /dist
npm run preview # preview the production build locally
```

## Stack

- [Vite](https://vitejs.dev/) + React 19 (JavaScript)
- [Tailwind CSS](https://tailwindcss.com/) v3 (custom MarketPilot design tokens)
- [Lucide React](https://lucide.dev/) icons
- Google Fonts: Inter (body) + Manrope (headings)

## Project structure

```
src/
├── components/
│   ├── Header.jsx            # Sticky navbar + mobile menu
│   ├── Hero.jsx              # Two-column hero with CSS/SVG dashboard mock
│   ├── TrustStrip.jsx        # Compact value strip
│   ├── Register.jsx          # Registration section wrapper
│   ├── RegistrationForm.jsx  # Reusable, validated registration form
│   ├── Platform.jsx          # Platform intro with interactive tab mock
│   ├── Features.jsx          # Six feature cards
│   ├── Stats.jsx             # Product-oriented statistics band
│   ├── HowItWorks.jsx        # 3-step timeline
│   ├── DashboardPreview.jsx  # Full dashboard preview panel
│   ├── Benefits.jsx          # "Built for Clarity" split section
│   ├── Testimonials.jsx      # Illustrative "What Users Value" cards
│   ├── FAQ.jsx               # Accessible single-open accordion
│   ├── FinalCTA.jsx          # Final call-to-action band
│   ├── Footer.jsx            # Contact, navigation, legal + risk disclaimer
│   ├── LegalModal.jsx        # Context provider + accessible legal modal
│   ├── Logo.jsx              # SVG wordmark
│   └── MiniChart.jsx         # Dependency-free SVG line/area chart
├── App.jsx
├── main.jsx
└── index.css                 # Tailwind layers + design tokens
```

## Key behaviours

- Smooth-scroll navigation across Home, Platform, Features, How It Works, FAQ and Contact.
- Registration form validates required fields, email format and Australian phone formats
  (`04XX XXX XXX`, `+61 4…`, landline area codes), shows inline errors, a loading state and a
  success message. Submission is simulated and ready to be wired to a backend in
  `handleSubmit`.
- FAQ accordion opens one item at a time; full keyboard support and ARIA wiring throughout.
- Legal documents (Privacy Policy, Terms & Conditions, Risk Disclosure) open in an accessible
  modal from the form and footer.

## Content notes

- All copy is original Australian English and written to be responsible about financial
  risk - no guaranteed-return claims. Product examples are clearly labelled illustrative.
- Contact details, social links and phone numbers are placeholders - update them before launch.
- Review `LegalModal.jsx` legal copy with a qualified professional before going live.
- Brand colours and fonts are configured in `tailwind.config.js`.

## Before you launch

1. Replace the placeholder contact/social details in `Footer.jsx`.
2. Point the OG URL, canonical URL and `og-cover.svg` in `index.html` at your real domain.
3. Wire the registration form to your backend in `RegistrationForm.jsx`.
