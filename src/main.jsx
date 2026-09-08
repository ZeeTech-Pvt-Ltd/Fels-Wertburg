import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { LegalProvider } from './components/LegalModal.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LegalProvider>
      <App />
    </LegalProvider>
  </React.StrictMode>,
);
