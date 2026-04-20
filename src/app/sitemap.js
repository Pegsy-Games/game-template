// Update BASE to your game's URL and list your routes below.
const BASE = 'https://GAME_SUBDOMAIN.pegsy.uk';

export default function sitemap() {
  const now = new Date();
  return [
    { url: `${BASE}/`, lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
    // Add more routes here as your game grows
  ];
}
