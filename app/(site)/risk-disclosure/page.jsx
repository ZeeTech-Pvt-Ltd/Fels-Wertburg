import LegalPage from '../../../src/LegalPage.jsx';
import { pageMetadata } from '../../../src/lib/seo.js';

export const metadata = pageMetadata({
  title: 'Risk Disclosure | Fels Wertburg AI',
  description:
    'Important risk information for using Fels Wertburg AI. Financial markets involve risk and information on this site is general in nature, not personal financial advice.',
  path: '/risk-disclosure',
  ogDescription:
    'Important risk information for using Fels Wertburg AI. Information on this site is general in nature, not personal financial advice.',
});

export default function Page() {
  return <LegalPage docKey="risk" />;
}
