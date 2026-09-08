import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import Logo from './Logo.jsx';

const EXPLORE_LINKS = [
  { label: 'Home', href: '/#home' },
  { label: 'About Us', href: '/about-us' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export const CONTACT_DETAILS = [
  { icon: Mail, label: 'Email us', value: 'support@fels-wertburgai.com', href: 'mailto:support@fels-wertburgai.com' },
  { icon: Phone, label: 'Call us', value: '1300 000 000 (example)', href: 'tel:1300000000' },
  { icon: MapPin, label: 'Based in', value: 'Sydney, NSW, Australia', href: undefined },
  { icon: Clock, label: 'Support hours', value: 'Mon–Fri, 9am–5pm AEST', href: undefined },
];

/* Brand icons are intentionally hand-rolled (lucide no longer ships brand logos). */
const SOCIALS = [
  {
    label: 'Fels Wertburg AI on LinkedIn',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452z',
  },
  {
    label: 'Fels Wertburg AI on X',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    label: 'Fels Wertburg AI on Instagram',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.15 0-3.523.012-4.767.069-1.04.047-1.605.222-1.981.369-.498.194-.854.427-1.227.8-.373.373-.606.729-.8 1.227-.147.376-.322.941-.369 1.981-.057 1.244-.069 1.617-.069 4.767s.012 3.523.069 4.767c.047 1.04.222 1.605.369 1.981.194.498.427.854.8 1.227.373.373.729.606 1.227.8.376.147.941.322 1.981.369 1.244.057 1.617.069 4.767.069s3.523-.012 4.767-.069c1.04-.047 1.605-.222 1.981-.369.498-.194.854-.427 1.227-.8.373-.373.606-.729.8-1.227.147-.376.322-.941.369-1.981.057-1.244.069-1.617.069-4.767s-.012-3.523-.069-4.767c-.047-1.04-.222-1.605-.369-1.981a3.302 3.302 0 0 0-.8-1.227 3.302 3.302 0 0 0-1.227-.8c-.376-.147-.941-.322-1.981-.369-1.244-.057-1.617-.069-4.767-.069zm0 3.063a5.14 5.14 0 1 1 0 10.28 5.14 5.14 0 0 1 0-10.28zm0 8.473a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666zm5.338-9.678a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z',
  },
  {
    label: 'Fels Wertburg AI on YouTube',
    path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  },
  {
    label: 'Fels Wertburg AI on Facebook',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
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
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
              'flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 transition hover:border-white/20 hover:bg-white/[0.07]';
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
              Fels Wertburg AI is an Australian crypto research platform — built to help you
              understand digital-asset markets and make more informed decisions with AI-assisted
              scanning, charts and education.
            </p>

            <div className="mt-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/50">Follow us</p>
              <div className="mt-3 flex items-center gap-2.5">
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href="#home"
                    aria-label={social.label}
                    title={social.label}
                    onClick={(event) => event.preventDefault()}
                    className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white/70 transition hover:border-accent/40 hover:bg-white/10 hover:text-white"
                  >
                    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
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
              {[
                { href: '/privacy-policy', label: 'Privacy Policy' },
                { href: '/terms-and-conditions', label: 'Terms & Conditions' },
                { href: '/risk-disclosure', label: 'Risk Disclosure' },
              ].map((doc) => (
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
            <p>Made in Australia 🇦🇺</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
