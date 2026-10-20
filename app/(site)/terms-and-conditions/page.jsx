import LegalPage from '../../../src/LegalPage.jsx';
import { pageMetadata } from '../../../src/lib/seo.js';

export const metadata = pageMetadata({
  title: 'Terms & Conditions | Fels Wertburg AI',
  description:
    'The terms governing your use of the Fels Wertburg AI website and platform, including who can use the platform and your responsibilities.',
  path: '/terms-and-conditions',
  ogDescription: 'The terms governing your use of the Fels Wertburg AI website and platform.',
});

export default function Page() {
  return <LegalPage docKey="terms" />;
}
