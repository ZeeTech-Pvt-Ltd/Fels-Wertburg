import LegalPage from '../../../src/LegalPage.jsx';
import { pageMetadata } from '../../../src/lib/seo.js';

export const metadata = pageMetadata({
  title: 'Privacy Policy | Fels Wertburg AI',
  description:
    'How Fels Wertburg AI collects, uses and protects your personal information, in line with the Australian Privacy Principles under the Privacy Act 1988 (Cth).',
  path: '/privacy-policy',
  ogDescription:
    'How Fels Wertburg AI collects, uses and protects your personal information.',
});

export default function Page() {
  return <LegalPage docKey="privacy" />;
}
