import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

/* ------------------------------------------------------------------ */
/* Legal document content (original, Australian English)               */
/* ------------------------------------------------------------------ */

export const LEGAL_DOCS = {
  privacy: {
    title: 'Privacy Policy',
    intro:
      'This policy explains how Fels Wertburg AI collects, uses and protects your personal information, in line with the Australian Privacy Principles under the Privacy Act 1988 (Cth).',
    sections: [
      {
        heading: 'Information we collect',
        body: 'When you register, we collect only the basic details you provide — your first name, last name, email address and phone number. We do not ask for passwords, credit card details, bank account numbers, wallet keys or other sensitive financial information as part of registration.',
      },
      {
        heading: 'How we use it',
        body: 'We use your details to set up your account, keep you informed about platform updates and respond to support enquiries. We do not sell your personal information to third parties.',
      },
      {
        heading: 'Storage and security',
        body: 'We apply reasonable administrative, technical and physical safeguards to protect personal information, and we retain it only for as long as needed for the purposes described in this policy or as required by law.',
      },
      {
        heading: 'Your rights',
        body: 'You may request access to, correction of, or deletion of your personal information at any time by contacting us. If you have a concern about how we handle your information, you may also contact the Office of the Australian Information Commissioner (OAIC).',
      },
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    intro:
      'These terms govern your use of the Fels Wertburg AI website and platform. By registering, you agree to be bound by them.',
    sections: [
      {
        heading: 'Who can use the platform',
        body: 'The platform is intended for Australian residents aged 18 years and over. By registering you confirm that you meet these requirements and that the details you provide are accurate.',
      },
      {
        heading: 'What the platform provides',
        body: 'Fels Wertburg AI provides market information, analytics tools, data visualisation and educational resources. Content is provided for general information and education only and should not be treated as a recommendation, offer or solicitation to buy or sell any financial product.',
      },
      {
        heading: 'Your responsibilities',
        body: 'You are responsible for how you use the information on the platform and for any decisions you make based on it. You agree not to misuse the platform, attempt to access other users’ accounts, or use automated means to scrape content.',
      },
      {
        heading: 'Availability and changes',
        body: 'We aim to keep the platform available and information current, but we do not guarantee uninterrupted access or that all data will be free from error or delay. We may update these terms or the platform from time to time.',
      },
      {
        heading: 'Governing law',
        body: 'These terms are governed by the laws of New South Wales, Australia. Nothing in these terms limits any rights you may have under Australian consumer law.',
      },
    ],
  },
  risk: {
    title: 'Risk Disclosure',
    intro:
      'Please read this disclosure carefully before using Fels Wertburg AI.',
    sections: [
      {
        heading: 'Financial markets involve risk',
        body: 'The value of investments and any income from them can go down as well as up. You may not get back the amount you invested. Past performance is not a reliable indicator of future performance.',
      },
      {
        heading: 'General information only',
        body: 'Information provided on this website is general in nature and does not constitute personal financial advice. It does not take into account your personal objectives, financial situation or needs. Consider your circumstances and seek professional advice where appropriate.',
      },
      {
        heading: 'No financial product advice',
        body: 'Fels Wertburg AI is not a financial adviser and does not hold an Australian financial services licence. We do not provide personal financial product advice, recommendations or portfolio management services. Any tools, charts or data are provided to support your own research.',
      },
      {
        heading: 'Examples are illustrative',
        body: 'Example dashboards, figures and market scenarios shown on this website are illustrative only. They are not promises, forecasts or guarantees of future returns or platform performance.',
      },
    ],
  },
};

/* ------------------------------------------------------------------ */
/* Context                                                             */
/* ------------------------------------------------------------------ */

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
          <p className="border-t border-ink/10 pt-4 text-xs leading-relaxed text-muted">
            These documents are a starting template. Please review and finalise them with a
            qualified legal professional before publishing.
          </p>
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
