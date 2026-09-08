import React from 'react';
import { createRoot } from 'react-dom/client';
import LegalPage from './LegalPage.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './index.css';

// Shared legal-page entry. Which document renders depends on the page URL,
// so the three page folders (privacy-policy / terms-and-conditions /
// risk-disclosure) mount this same file. The trailing slash is tolerated so
// /privacy-policy and /privacy-policy/ both select the right document.
const DOC_BY_PATH = {
  '/privacy-policy': 'privacy',
  '/terms-and-conditions': 'terms',
  '/risk-disclosure': 'risk',
};

function LegalApp() {
  const clean = (path) => (path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path);
  const docKey = DOC_BY_PATH[clean(window.location.pathname)] || 'privacy';
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[70] rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <Header />

      <main id="main">
        <LegalPage docKey={docKey} />
      </main>

      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LegalApp />
  </React.StrictMode>,
);
