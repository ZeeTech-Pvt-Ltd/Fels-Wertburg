'use client';

import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { LEGAL_DOCS } from '../data/legal.js';

const LegalContext = createContext(null);

export function useLegal() {
  const ctx = useContext(LegalContext);
  if (!ctx) {
    throw new Error('useLegal must be used within a <LegalProvider>.');
  }
  return ctx;
}

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), textarea, select, [tabindex]:not([tabindex="-1"])';

function LegalDialog({ docKey, onClose }) {
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const doc = docKey ? LEGAL_DOCS[docKey] : null;

  useEffect(() => {
    if (!doc) return undefined;
    const previouslyFocused = document.activeElement;
    document.body.style.overflow = 'hidden';
    // Move focus into the dialog.
    const raf = requestAnimationFrame(() => closeRef.current?.focus());

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }
      // Simple focus trap so Tab stays inside the dialog.
      if (event.key === 'Tab' && panelRef.current) {
        const nodes = panelRef.current.querySelectorAll(FOCUSABLE);
        if (nodes.length === 0) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [doc, onClose]);

  if (!doc) return null;

  return (
    <div
      className="fixed inset-0 z-[60] grid place-items-center overflow-y-auto bg-ink/50 p-4 backdrop-blur-sm"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-title"
        className="my-6 w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-soft"
      >
        <div className="flex items-start justify-between gap-4 border-b border-ink/10 px-6 py-5 sm:px-8">
          <div>
            <h3 id="legal-title" className="text-xl font-bold text-primary">
              {doc.title}
            </h3>
            <p className="mt-1 text-sm text-steel">{doc.intro}</p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={`Close ${doc.title}`}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-steel transition hover:bg-canvas hover:text-ink"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="max-h-[60vh] space-y-5 overflow-y-auto px-6 py-6 sm:px-8">
          {doc.sections.map((section) => (
            <section key={section.heading}>
              <h4 className="mb-1 text-sm font-bold text-ink">{section.heading}</h4>
              <p className="text-sm leading-relaxed text-steel">{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export function LegalProvider({ children }) {
  const [docKey, setDocKey] = useState(null);
  const openLegal = useCallback((key) => setDocKey(key), []);
  const closeLegal = useCallback(() => setDocKey(null), []);

  return (
    <LegalContext.Provider value={{ openLegal, closeLegal }}>
      {children}
      <LegalDialog docKey={docKey} onClose={closeLegal} />
    </LegalContext.Provider>
  );
}
