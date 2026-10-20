import Header from '../src/components/Header.jsx';
import Footer from '../src/components/Footer.jsx';
import NotFoundPage from '../src/NotFoundPage.jsx';

export const metadata = {
  title: 'Page Not Found | Fels Wertburg AI',
  description:
    'The page you are looking for could not be found. Head back to the Fels Wertburg AI homepage to explore our AI-assisted crypto research platform.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main">
        <NotFoundPage />
      </main>
      <Footer />
    </>
  );
}
