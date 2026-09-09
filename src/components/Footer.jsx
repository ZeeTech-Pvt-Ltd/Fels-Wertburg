import { Clock, Mail, MapPin } from 'lucide-react';
import Logo from './Logo.jsx';
import { LEGAL_LINKS } from './LegalModal.jsx';

const EXPLORE_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export const CONTACT_DETAILS = [
  { icon: Mail, label: 'Email us', value: 'support@fels-wertburgai.com', href: 'mailto:support@fels-wertburgai.com' },
  { icon: MapPin, label: 'Based in', value: 'Sydney, NSW, Australia', href: undefined },
  { icon: Clock, label: 'Support hours', value: 'Mon–Fri, 9am–5pm AEST', href: undefined },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-primary-deep text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -bottom-32 -right-16 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="shell relative pt-16 sm:pt-20">
        <h2 className="sr-only">Contact and legal information</h2>

        {/* Contact band */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CONTACT_DETAILS.map(({ icon: Icon, label, value, href }) => {
            const inner = (
              <>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-accent">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-wider text-white/50">{label}</span>
                  <span className="mt-0.5 block truncate text-sm font-medium text-white/90">{value}</span>
                </span>
              </>
            );
            const classes =
              'flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-2.5 py-4 transition hover:border-white/20 hover:bg-white/[0.07]';
            return href ? (
              <a key={label} href={href} className={classes}>
                {inner}
              </a>
            ) : (
              <div key={label} className={classes}>
                {inner}
              </div>
            );
          })}
        </div>

        {/* Main columns */}
        <div className="mt-14 grid gap-12 border-t border-white/10 pt-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Logo tone="dark" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              Fels Wertburg AI is an Australian crypto research platform, built to help you
              understand digital-asset markets and make more informed decisions with AI-assisted
              scanning, charts and education.
            </p>
          </div>

          {/* Explore */}
          <nav aria-label="Footer navigation" className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/60">Explore</h3>
            <ul className="mt-4 space-y-2.5">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/75 transition hover:text-accent">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Legal" className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/60">Legal</h3>
            <ul className="mt-4 space-y-2.5">
              {LEGAL_LINKS.map((doc) => (
                <li key={doc.href}>
                  <a href={doc.href} className="text-sm text-white/75 transition hover:text-accent">
                    {doc.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact summary */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/60">Get in touch</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li>
                <a href="mailto:support@fels-wertburgai.com" className="transition hover:text-accent">
                  support@fels-wertburgai.com
                </a>
              </li>
              <li>Sydney, NSW, Australia</li>
              <li>Support hours: Mon–Fri, 9am–5pm AEST</li>
            </ul>
          </div>
        </div>

        {/* Disclaimer + bottom bar */}
        <div className="mt-5 border-t border-white/10 pb-10 pt-10">
          <p className="text-xs leading-relaxed text-white/50">
            <strong className="font-semibold text-white/70">Risk warning:</strong> Financial markets
            involve risk. Information provided on this website is general in nature and does not
            constitute personal financial advice. Consider your circumstances and seek professional
            advice where appropriate. Fels Wertburg AI does not provide personal financial product advice
            under the Corporations Act 2001 (Cth). All examples shown are illustrative only.
          </p>
          <div className="mt-6 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
            <p>© 2026 Fels Wertburg AI. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
