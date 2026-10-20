const SITE_URL = 'https://fels-wertburgai.com';
const SITE_NAME = 'Fels Wertburg AI';
const OG_IMAGE = {
  url: '/og-cover.png',
  width: 1200,
  height: 630,
  type: 'image/png',
  alt: 'Fels Wertburg AI, crypto research platform for Australia',
};

/**
 * Build a complete metadata object for a page from the same values the old
 * per-route HTML files carried. Keeping this in one place means canonical,
 * Open Graph and Twitter data stay consistent across every route.
 */
export function pageMetadata({ title, description, path, ogTitle, ogDescription, robots }) {
  const url = `${SITE_URL}${path}`;
  const socialTitle = ogTitle || title;
  const socialDescription = ogDescription || description;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      locale: 'en_AU',
      url,
      title: socialTitle,
      description: socialDescription,
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description: socialDescription,
      images: ['/og-cover.png'],
    },
    ...(robots ? { robots } : {}),
  };
}
