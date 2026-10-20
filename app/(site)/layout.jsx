import Header from '../../src/components/Header.jsx';
import Footer from '../../src/components/Footer.jsx';

export default function SiteLayout({ children }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[70] rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <Header />

      <main id="main">{children}</main>

      <Footer />
    </>
  );
}
