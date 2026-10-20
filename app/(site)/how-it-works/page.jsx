import HowItWorksPage from '../../../src/HowItWorksPage.jsx';
import { pageMetadata } from '../../../src/lib/seo.js';

export const metadata = pageMetadata({
  title: 'How It Works | Fels Wertburg AI',
  description:
    'See how Fels Wertburg AI takes you from sign up to clearer crypto research in three simple steps. Start free today.',
  path: '/how-it-works',
  ogDescription: 'A clear path from sign up to a research routine you can trust.',
});

export default function Page() {
  return <HowItWorksPage />;
}
