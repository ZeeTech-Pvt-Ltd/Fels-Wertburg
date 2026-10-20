import ContactPage from '../../../src/ContactPage.jsx';
import { pageMetadata } from '../../../src/lib/seo.js';

export const metadata = pageMetadata({
  title: 'Contact Us | Fels Wertburg AI',
  description:
    'Contact the Fels Wertburg AI team. Questions about the platform, your account or our research tools? Reach us during Australian business hours.',
  path: '/contact',
  ogDescription: 'Reach the Fels Wertburg AI team during Australian business hours.',
});

const contactJsonLd = {
  '@context': 'https://schema.org',
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
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'support@fels-wertburgai.com',
    areaServed: 'AU',
    availableLanguage: 'en',
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactJsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <ContactPage />
    </>
  );
}
