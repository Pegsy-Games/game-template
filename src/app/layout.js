import './globals.css';

// === Fill these in for your game ===
const TITLE = 'GAME_NAME — short tagline';
const DESCRIPTION = 'One-line pitch for your game. Shows in search results and social previews.';
const SITE_URL = 'https://GAME_SUBDOMAIN.pegsy.uk';
const APP_NAME = 'GAME_NAME';
// =====================================

// Shared Pegsy Games logo, hosted on pegsy.uk so all games stay in sync.
const PEG_LOGO = 'https://pegsy.uk/pegsy.webp';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s · ${APP_NAME}`,
  },
  description: DESCRIPTION,
  applicationName: APP_NAME,
  authors: [{ name: 'Pegsy Games', url: 'https://pegsy.uk' }],
  creator: 'Pegsy Games',
  publisher: 'Pegsy Games',
  alternates: { canonical: '/' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: APP_NAME,
    locale: 'en_GB',
    type: 'website',
    images: [{ url: PEG_LOGO, width: 450, height: 450, alt: 'Pegsy Games peg' }],
  },
  twitter: {
    card: 'summary',
    title: TITLE,
    description: DESCRIPTION,
    images: [PEG_LOGO],
  },
  robots: { index: true, follow: true },
  icons: { icon: PEG_LOGO },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Fixed back-link to the Pegsy Games studio site — keep on every game. */}
        <a className="brand-link" href="https://pegsy.uk" aria-label="Back to Pegsy Games">
          <img src={PEG_LOGO} alt="" />
          <span>Pegsy Games</span>
        </a>
        {children}
      </body>
    </html>
  );
}
