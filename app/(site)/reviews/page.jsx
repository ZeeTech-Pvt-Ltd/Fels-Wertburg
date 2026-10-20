import ReviewsPage from '../../../src/ReviewsPage.jsx';
import { pageMetadata } from '../../../src/lib/seo.js';

export const metadata = pageMetadata({
  title: 'Reviews | Fels Wertburg AI',
  description:
    'See the experience Fels Wertburg AI aims to deliver, and the feedback the platform is working to earn. Start free today.',
  path: '/reviews',
  ogDescription:
    'The experience Fels Wertburg AI aims to deliver, and the feedback it hopes to earn.',
});

export default function Page() {
  return <ReviewsPage />;
}
