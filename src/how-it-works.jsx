import React from 'react';
import { createRoot } from 'react-dom/client';
import HowItWorksPage from './HowItWorksPage.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './index.css';

// How It Works page entry. Reuses the exact same <Header/> and <Footer/>
// components as the homepage, so site chrome stays identical by construction.
function HowItWorksApp() {
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
        <HowItWorksPage />
      </main>

      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HowItWorksApp />
  </React.StrictMode>,
);
