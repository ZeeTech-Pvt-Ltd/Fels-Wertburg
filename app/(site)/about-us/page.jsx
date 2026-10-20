import AboutPage from '../../../src/AboutPage.jsx';
import { pageMetadata } from '../../../src/lib/seo.js';
import '../../../src/about-page.css';

export const metadata = pageMetadata({
  title: 'About Us | Fels Wertburg AI',
  description:
    'Fels Wertburg AI, an Australian AI-assisted crypto research platform with market scanning, charts, alerts and education, for more context and less guesswork.',
  path: '/about-us',
  ogDescription:
    'An Australian AI-assisted crypto research platform built on clarity, education and honest information.',
});

export default function Page() {
  return <AboutPage />;
}
