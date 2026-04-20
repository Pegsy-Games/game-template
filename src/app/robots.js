// Update BASE to your game's URL (e.g. https://mygame.pegsy.uk)
const BASE = 'https://GAME_SUBDOMAIN.pegsy.uk';

export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/'] },
    ],
    sitemap: `${BASE}/sitemap.xml`,
  };
}
