import React from 'react';
import { createRoot } from 'react-dom/client';
import ContactPage from './ContactPage.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { LegalProvider } from './components/LegalModal.jsx';
import './index.css';

// Contact page entry. Reuses the exact same <Header/> and <Footer/> components
// as the homepage, so site chrome stays identical on every page by construction.
// LegalProvider is required here because the page embeds the homepage's
// <RegistrationForm/>, which opens the legal quick-view dialog.
function ContactApp() {
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
        <ContactPage />
      </main>

      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LegalProvider>
      <ContactApp />
    </LegalProvider>
  </React.StrictMode>,
);
