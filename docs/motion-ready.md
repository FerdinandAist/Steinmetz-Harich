# Motion-Erweiterungen

Die Website ist so vorbereitet, dass moderne Animationen später gezielt ergänzt werden können, ohne die Seitenstruktur neu zu bauen.

## Stabile Hooks
Wichtige Abschnitte tragen data-motion-Marker, zum Beispiel:

- data-motion="hero"
- data-motion="hero-copy"
- data-motion="section"
- data-motion="gallery"
- data-motion="proof"
- data-motion="region"
- data-motion="faq"
- data-motion="contact"

Diese Marker können später von CSS, IntersectionObserver, Framer Motion oder Remotion-nahen React-Komponenten genutzt werden.

## Empfehlung
Für Website-Micro-Animationen eignet sich zunächst eine leichte Web-Animation mit CSS oder Framer Motion besser als Remotion. Remotion ist besonders stark, wenn aus React-Komponenten Videos oder aufwendige Motion-Sequenzen gerendert werden sollen.

## Wichtig
Animationen sollten ruhig bleiben: langsames Einblenden, dezente Verschiebung, Bild-Parallax nur sehr zurückhaltend. Keine hektischen Effekte, da die Website würdevoll und vertrauensbildend bleiben soll.
