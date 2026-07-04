import './globals.css';
import { SiteShell } from './site-client';

export const metadata = {
  metadataBase: new URL('https://www.steinmetzwerkstatt-harich.de'),
  applicationName: 'Steinmetzwerkstatt Harich',
  icons: { icon: '/assets/images/logo-harich.png' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
