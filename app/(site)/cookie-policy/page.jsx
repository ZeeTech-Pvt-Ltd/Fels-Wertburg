import LegalPage from '../../../src/LegalPage.jsx';
import { pageMetadata } from '../../../src/lib/seo.js';

export const metadata = pageMetadata({
  title: 'Cookie Policy | Fels Wertburg AI',
  description:
    'What cookies are, how Fels Wertburg AI uses them and the choices you have, read alongside the Privacy Policy.',
  path: '/cookie-policy',
  ogDescription: 'What cookies are, how Fels Wertburg AI uses them and the choices you have.',
});

export default function Page() {
  return <LegalPage docKey="cookie" />;
}
