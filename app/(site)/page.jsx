import HomePage from '../../src/HomePage.jsx';
import { pageMetadata } from '../../src/lib/seo.js';

export const metadata = pageMetadata({
  title: 'Fels Wertburg AI | AI Crypto Research Assistant for Australia',
  description:
    'Fels Wertburg AI helps Australians research cryptocurrency markets with AI-assisted scanning, charts, alerts and education.',
  path: '/',
  ogDescription:
    'AI-assisted crypto market scanning, charts, alerts and education in one accessible platform for Australians.',
});

export default function Page() {
  return <HomePage />;
}
