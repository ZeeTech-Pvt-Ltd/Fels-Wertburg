import FAQPage from '../../../src/FAQPage.jsx';
import { pageMetadata } from '../../../src/lib/seo.js';

export const metadata = pageMetadata({
  title: 'FAQ | Fels Wertburg AI',
  description:
    'Frequently asked questions about Fels Wertburg AI: what the platform is, who it is for, how registration works and how your information is protected.',
  path: '/faq',
  ogDescription:
    'Straight answers about Fels Wertburg AI, the AI-assisted crypto research platform for Australians.',
});

export default function Page() {
  return <FAQPage />;
}
