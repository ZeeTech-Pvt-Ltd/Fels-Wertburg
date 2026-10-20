import FeaturesPage from '../../../src/FeaturesPage.jsx';
import { pageMetadata } from '../../../src/lib/seo.js';

export const metadata = pageMetadata({
  title: 'Features | Fels Wertburg AI',
  description:
    'Explore the Fels Wertburg AI features: market scanning, clear charts, watchlists, alerts and plain English education. See what is included today.',
  path: '/features',
  ogDescription:
    'Market scanning, clear charts, watchlists, alerts and plain English education in one workspace.',
});

export default function Page() {
  return <FeaturesPage />;
}
