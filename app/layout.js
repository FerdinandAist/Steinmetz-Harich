export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <link rel="stylesheet" href="/assets/css/styles.css" />
      </head>
      <body>
        {children}
        <script src="/assets/js/site.js" defer />
      </body>
    </html>
  );
}
