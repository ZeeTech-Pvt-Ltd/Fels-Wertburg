import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/*
 * Clean-URL routing for the multi-page site.
 *
 * Every secondary page lives in its own folder with an index.html (e.g.
 * about-us/index.html), so the built site serves clean URLs like /about-us
 * and /faq on ordinary static hosts. In dev and `vite preview` those clean
 * paths are rewritten to the underlying index.html, while legacy .html links
 * are redirected to their clean form so the address bar never shows .html.
 */
const CLEAN_ROUTES = {
  '/about-us': '/about-us/index.html',
  '/faq': '/faq/index.html',
  '/contact': '/contact/index.html',
  '/privacy-policy': '/privacy-policy/index.html',
  '/cookie-policy': '/cookie-policy/index.html',
  '/terms-and-conditions': '/terms-and-conditions/index.html',
  '/risk-disclosure': '/risk-disclosure/index.html',
  '/disclaimer': '/disclaimer/index.html',
  '/thank-you': '/thank-you/index.html',
  '/404': '/404.html',
};

const LEGACY_REDIRECTS = {
  '/about-us.html': '/about-us',
  '/faq.html': '/faq',
  '/contact-us.html': '/contact',
  '/privacy-policy.html': '/privacy-policy',
  '/cookie-policy.html': '/cookie-policy',
  '/terms-and-conditions.html': '/terms-and-conditions',
  '/risk-disclosure.html': '/risk-disclosure',
  '/disclaimer.html': '/disclaimer',
  '/thank-you.html': '/thank-you',
  '/404.html': '/404',
};

function cleanUrlRoutes() {
  return {
    name: 'clean-url-routes',
    configureServer(server) {
      server.middlewares.use(cleanUrlHandler);
    },
    configurePreviewServer(server) {
      server.middlewares.use(cleanUrlHandler);
    },
  };
}

function cleanUrlHandler(req, res, next) {
  const url = new URL(req.url, 'http://localhost');
  const path = url.pathname;

  // Old .html bookmarks/links -> permanent redirect to the clean URL.
  if (LEGACY_REDIRECTS[path]) {
    res.statusCode = 308;
    res.setHeader('Location', LEGACY_REDIRECTS[path] + url.search);
    res.end();
    return;
  }

  // /about-us and /about-us/ both resolve to the page's index.html.
  const key = path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path;
  if (CLEAN_ROUTES[key]) {
    req.url = CLEAN_ROUTES[key] + url.search;
  }

  next();
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), cleanUrlRoutes()],
  // Multi-page app: no SPA history fallback, so only real routes render.
  appType: 'mpa',
  server: {
    port: 5173,
    open: false,
  },
  build: {
    // Keep the bundle lean and widely compatible.
    target: 'es2018',
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about-us/index.html',
        faq: 'faq/index.html',
        contact: 'contact/index.html',
        privacy: 'privacy-policy/index.html',
        cookie: 'cookie-policy/index.html',
        terms: 'terms-and-conditions/index.html',
        risk: 'risk-disclosure/index.html',
        disclaimer: 'disclaimer/index.html',
        notfound: '404.html',
      },
    },
  },
});
