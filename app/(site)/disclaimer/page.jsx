import LegalPage from '../../../src/LegalPage.jsx';
import { pageMetadata } from '../../../src/lib/seo.js';

export const metadata = pageMetadata({
  title: 'Disclaimer | Fels Wertburg AI',
  description:
    'Fels Wertburg AI disclaimer: the information on this website is general in nature, provided for education only and is not personal financial advice.',
  path: '/disclaimer',
  ogDescription:
    'The information on this website is general in nature and is not personal financial advice.',
});

export default function Page() {
  return <LegalPage docKey="disclaimer" />;
}
