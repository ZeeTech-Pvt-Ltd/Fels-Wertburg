import { LegalProvider } from '../src/components/LegalModal.jsx';
import './globals.css';

export const metadata = {
  metadataBase: new URL('https://fels-wertburgai.com'),
  title: 'Fels Wertburg AI | AI Crypto Research Assistant for Australia',
  description:
    'Fels Wertburg AI helps Australians research cryptocurrency markets with AI-assisted scanning, charts, alerts and education.',
  icons: { icon: '/favicon.svg' },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
  themeColor: '#123B5D',
};

// WebSite + Organization structured data, carried on every route.
const organisationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://fels-wertburgai.com/#website',
      url: 'https://fels-wertburgai.com/',
      name: 'Fels Wertburg AI',
      inLanguage: 'en-AU',
      description: 'An AI-assisted cryptocurrency research platform for Australians.',
      publisher: { '@id': 'https://fels-wertburgai.com/#organization' },
    },
    {
      '@type': 'Organization',
      '@id': 'https://fels-wertburgai.com/#organization',
      name: 'Fels Wertburg AI',
      url: 'https://fels-wertburgai.com/',
      email: 'support@fels-wertburgai.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Sydney',
        addressRegion: 'NSW',
        addressCountry: 'AU',
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organisationJsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <LegalProvider>{children}</LegalProvider>
      </body>
    </html>
  );
}
