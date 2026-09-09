import { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import Logo from './Logo.jsx';

// Hrefs are cross-page safe (root-relative clean URLs, no .html): they work
// both from the homepage (same-document scroll) and from sub-pages.
const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Current path for highlighting the active nav link. This is a multi-page
  // site (no SPA router), so the value is stable for the life of each page.
  const [pathname] = useState(() => (typeof window === 'undefined' ? '' : window.location.pathname));
  const isActive = (href) => {
    const linkPath = href.split('#')[0];
    return linkPath === pathname || (pathname === '/' && href.startsWith('/#'));
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu when resizing up to desktop.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Close the menu on Escape.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-40 w-full backdrop-blur transition-shadow duration-300 ${
        scrolled || open
          ? 'border-b border-ink/5 bg-white/90 shadow-card'
          : 'border-b border-transparent bg-white/70'
      }`}
    >
      <div className="shell-wide flex h-16 items-center justify-between gap-6 lg:h-20">
        <Logo />

        {/* Desktop navigation */}
        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    className={`group relative text-sm font-medium transition hover:text-primary ${
                      active ? 'text-primary' : 'text-steel'
                    }`}
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-accent transition-all duration-300 ${
                        active ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a href="/#register" className="btn-primary hidden !px-5 lg:inline-flex">
            Get Started
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-11 w-11 place-items-center rounded-xl border border-ink/10 bg-white text-primary transition hover:border-ink/25 lg:hidden"
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown navigation */}
      <div id="mobile-menu" className={`lg:hidden ${open ? 'block' : 'hidden'}`}>
        <nav aria-label="Mobile navigation" className="border-t border-ink/5 bg-white/95 px-5 pb-6 pt-2 shadow-card">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    aria-current={active ? 'page' : undefined}
                    className={`flex items-center justify-between border-b border-ink/5 py-3.5 text-[15px] font-medium transition hover:text-secondary ${
                      active ? 'font-semibold text-accent-dark' : 'text-primary'
                    }`}
                  >
                    {link.label}
                    <ArrowRight className="h-4 w-4 text-muted/70" aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
          <a href="/#register" onClick={closeMenu} className="btn-primary mt-5 w-full">
            Get Started
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}
