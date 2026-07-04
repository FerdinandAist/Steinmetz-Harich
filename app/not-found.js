export const metadata = {
  title: 'Seite nicht gefunden | Steinmetzwerkstatt Harich',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="section">
      <div className="container legal">
        <h1>Seite nicht gefunden</h1>
        <p>Die gewünschte Seite wurde nicht gefunden.</p>
        <p><a className="button button--primary" href="/">Zur Startseite</a></p>
      </div>
    </main>
  );
}
