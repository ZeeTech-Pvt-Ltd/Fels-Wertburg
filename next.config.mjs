/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // Preserve the permanent redirects the old site issued for legacy .html
  // bookmarks, so old links keep resolving to the clean URLs.
  async redirects() {
    return [
      { source: '/about-us.html', destination: '/about-us', permanent: true },
      { source: '/how-it-works.html', destination: '/how-it-works', permanent: true },
      { source: '/features.html', destination: '/features', permanent: true },
      { source: '/reviews.html', destination: '/reviews', permanent: true },
      { source: '/faq.html', destination: '/faq', permanent: true },
      { source: '/contact-us.html', destination: '/contact', permanent: true },
      { source: '/privacy-policy.html', destination: '/privacy-policy', permanent: true },
      { source: '/cookie-policy.html', destination: '/cookie-policy', permanent: true },
      { source: '/terms-and-conditions.html', destination: '/terms-and-conditions', permanent: true },
      { source: '/risk-disclosure.html', destination: '/risk-disclosure', permanent: true },
      { source: '/disclaimer.html', destination: '/disclaimer', permanent: true },
      { source: '/thank-you.html', destination: '/thank-you', permanent: true },
      { source: '/404.html', destination: '/404', permanent: true },
    ];
  },
};

export default nextConfig;
