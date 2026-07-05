import Image from 'next/image';
import Link from 'next/link';
import { ContactForm, MapConsent, ReviewsCarousel } from './site-client';
import { company, regions, reviews } from './site-data';

export function PageRenderer({ page, route }) {
  if (page.template === 'home') return <HomePage page={page} />;
  if (page.template === 'productHub') return <ChooserPage page={page} tone="product" />;
  if (page.template === 'craftHub') return <ChooserPage page={page} tone="craft" />;
  if (page.template === 'overview') return <OverviewPage page={page} route={route} />;
  if (page.template === 'detail') return <DetailPage page={page} route={route} />;
  if (page.template === 'workshop') return <WorkshopPage page={page} />;
  if (page.template === 'article') return <ArticlePage page={page} />;
  if (page.template === 'contact') return <ContactPage page={page} />;
  if (page.template === 'legal') return <LegalPage page={page} />;
  return <DetailPage page={page} route={route} />;
}

function Hero({ page, quiet = false }) {
  return (
    <section className={'hero' + (quiet ? ' hero--quiet' : '')} data-motion="hero">
      <div className="hero__media"><Image src={page.hero?.image || page.image || '/assets/images/hero-werkstatt.jpg'} alt={page.hero?.alt || page.alt || ''} fill priority sizes="100vw" /></div>
      <div className="hero__shade" />
      <div className="container hero__content" data-motion="hero-copy">
        <p className="eyebrow">{page.hero?.eyebrow || page.eyebrow}</p>
        <h1>{page.hero?.h1 || page.h1}</h1>
        <p>{page.hero?.text || page.lead}</p>
        <div className="cta-row">
          <Link className="button button--primary" href="/kontakt/#formular">Beratung anfragen</Link>
          <a className="button button--secondary" href={company.phoneHref}>Direkt anrufen</a>
        </div>
      </div>
    </section>
  );
}

function ImageCard({ src, alt, label, href }) {
  const image = <Image src={src} alt={alt || label || ''} fill sizes="(max-width: 800px) 100vw, 33vw" />;
  return href ? <Link className="image-card" href={href}>{image}<span>{label}</span></Link> : <figure className="image-card">{image}<figcaption>{label}</figcaption></figure>;
}

function TrustStrip() {
  return (
    <section className="trust-band" aria-label="Vertrauenssignale" data-motion="trust-strip">
      <div className="container trust-strip">
        <div><strong>Seit 1958</strong><span>Werkstatt in Neunkirchen-Seelscheid/Eischeid</span></div>
        <div><strong>Meisterhandwerk</strong><span>Steinmetz- und Steinbildhauermeister</span></div>
        <div><strong>Persönlich</strong><span>Beratung direkt mit Bruno Johannes Harich</span></div>
        <div><strong>Regional</strong><span>Rhein-Sieg-Kreis bis Köln</span></div>
      </div>
    </section>
  );
}

function HomePage({ page }) {
  return (
    <>
      <Hero page={page} />
      <ReviewsCarousel reviews={reviews} />
      <TrustStrip />
      <section className="section intro-section" data-motion="section">
        <div className="container split split--wide">
          <div>
            <p className="eyebrow">Persönliche Meisterwerkstatt</p>
            <h2>Erinnerung braucht keine Standardlösung.</h2>
            <p>Viele Menschen kommen mit Unsicherheit: Welche Form passt? Welche Schrift ist würdevoll? Wie lässt sich Persönlichkeit zeigen, ohne laut zu werden? In der Werkstatt Harich beginnt die Antwort mit einem Gespräch.</p>
            <p>Aus Zuhören, Entwurf, Materialgefühl und handwerklicher Umsetzung entstehen Gedenksteine, Steinlichter, Findlinge, Basaltsäulen, Skulpturen und Steinobjekte mit eigener Bedeutung.</p>
          </div>
          <ImageCard src="/assets/images/bruno-johannes-harich.jpg" alt="Bruno Johannes Harich in der Werkstatt" label="Bruno Johannes Harich - persönliche Beratung und Meisterhandwerk" />
        </div>
      </section>
      <ServicesSection />
      <ProcessSection />
      <MeaningGallery />
      <MuehlsteinTeaser />
      <RegionSection />
      <FaqSection faq={page.faq} />
      <ContactBand />
    </>
  );
}

function ServicesSection() {
  const items = [
    ['Gedenksteine', '/gedenksteine/', 'Individuelle Grabmale, klassische Formen, Findlinge, Basaltsäulen und Steinlichter.', '/assets/images/gedenksteine.jpg'],
    ['Gestaltung', '/gestaltung/', 'Gespräch, Entwurf, Schrift, Symbol und Umsetzung aus einer ruhigen Hand.', '/assets/images/gestaltung-idee.jpg'],
    ['Steinobjekte', '/steinobjekte/', 'Brunnen, Schalen, Skulpturen und Accessoires aus Naturstein.', '/assets/images/steinobjekt-brunnen.jpg'],
    ['Werkstatt', '/werkstatt/', 'Seit 1958: Haltung, Herkunft und Meisterhandwerk in Eischeid.', '/assets/images/header-steinmetz-2.jpg'],
  ];
  return (
    <section className="section section--warm" data-motion="section">
      <div className="container section-head"><p className="eyebrow">Leistungen</p><h2>Steinwerke für Erinnerung, Haus und Garten</h2><p>Die Werkstatt gestaltet nicht aus einem Katalog heraus, sondern aus dem, was ein Mensch, ein Ort oder ein Material erzählen soll.</p></div>
      <div className="container card-grid">{items.map(([title, href, text, img]) => <Link className="service-card" href={href} key={href}><span className="service-card__media"><Image src={img} alt={title} fill sizes="(max-width: 800px) 100vw, 25vw" /></span><span className="service-card__body"><strong>{title}</strong><small>{text}</small></span></Link>)}</div>
    </section>
  );
}

function ProcessSection() {
  const steps = [['01', 'Gespräch', 'Wir hören zu, ordnen erste Gedanken und klären Wünsche sowie Friedhofsvorgaben.'], ['02', 'Entwurf', 'Form, Stein, Schrift und Symbol werden zu einer ruhigen Gestaltungsidee zusammengeführt.'], ['03', 'Auswahl', 'Material, Oberfläche und Details werden gemeinsam abgestimmt.'], ['04', 'Umsetzung', 'Das Steinwerk wird handwerklich gefertigt und fachgerecht umgesetzt.']];
  return <section className="section" data-motion="section"><div className="container split"><div><p className="eyebrow">Vom Gespräch zum Stein</p><h2>Ein klarer Ablauf nimmt Unsicherheit.</h2><p>Gerade in einer schweren Situation hilft ein ruhiger Prozess. Schritt für Schritt wird sichtbar, welche Gestaltung dem Menschen und dem Ort gerecht wird.</p></div><div className="steps">{steps.map(([num, title, text]) => <article key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>;
}

function MeaningGallery() {
  const items = [
    ['Ein Findling für einen naturverbundenen Menschen', '/assets/images/basaltsaeulen.jpg'],
    ['Ein Steinlicht als stilles Zeichen am Grab', '/assets/images/steinlicht.jpg'],
    ['Schrift und Symbol als persönliche Spur', '/assets/images/gestaltung-symbol.jpg'],
  ];
  return <section className="section gallery-section" data-motion="gallery"><div className="container section-head"><p className="eyebrow">Galerie mit Bedeutung</p><h2>Nicht nur Produkte, sondern Zeichen.</h2><p>Die Bildflächen zeigen exemplarisch, wie Naturstein Bedeutung tragen kann. Weitere echte Referenzen können später ergänzt werden.</p></div><div className="container meaning-grid">{items.map(([label, img]) => <ImageCard key={label} src={img} label={label} alt={label} />)}</div></section>;
}

function MuehlsteinTeaser() {
  return <section className="section proof-section" data-motion="proof"><div className="container proof"><Link className="proof__image" href="/mahnender-muehlstein-papst-franziskus/"><Image src="/assets/images/muehlstein-vatikan.jpg" alt="Bruno Johannes Harich bei Papst Franziskus mit dem Mahnenden Mühlstein" fill sizes="(max-width: 900px) 100vw, 50vw" /></Link><div><p className="eyebrow">Referenzprojekt</p><h2>Für den Papst Franziskus: der Mahnende Mühlstein von Bruno Johannes Harich</h2><p>Ein besonderes Projekt, das handwerkliche Präzision, künstlerische Aussagekraft und gesellschaftliche Verantwortung verbindet.</p><Link className="button button--primary" href="/mahnender-muehlstein-papst-franziskus/">Zum Referenzprojekt</Link></div></div></section>;
}

function RegionSection() {
  return <section className="section region-section" data-motion="region"><div className="container region-panel"><div><p className="eyebrow">Regionale Beratung</p><h2>Für Neunkirchen-Seelscheid, Rhein-Sieg-Kreis und Köln.</h2><p>Die Werkstatt ist in Eischeid verwurzelt und berät Menschen aus der Umgebung ebenso wie aus dem weiteren Raum Köln, wenn persönliche Gestaltung wichtiger ist als Standardware.</p></div><ul>{regions.map((region) => <li key={region}>{region}</li>)}</ul></div></section>;
}


function ChooserPage({ page, tone }) {
  return (
    <>
      <Hero page={page} quiet />
      <TrustStrip />
      <section className="section chooser-section" data-motion="section">
        <div className="container section-head">
          <p className="eyebrow">Gef?hrte Auswahl</p>
          <h2>{page.chooser.question}</h2>
          <p>{page.lead}</p>
        </div>
        <div className="container chooser-grid">
          {page.chooser.groups.map((group) => (
            <article className="chooser-card" key={group.title}>
              <div className="chooser-card__image">
                <Image src={group.image} alt={group.title} fill sizes="(max-width: 900px) 100vw, 50vw" />
              </div>
              <div className="chooser-card__body">
                <span>{tone === 'product' ? 'Auswahl' : 'Orientierung'}</span>
                <h3>{group.title}</h3>
                <p>{group.text}</p>
                <div className="chooser-links">
                  {group.links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      {tone === 'product' ? <MeaningGallery /> : <ProcessSection />}
      <FaqSection faq={page.faq} />
      <ContactBand />
    </>
  );
}

function OverviewPage({ page }) {
  return <><Hero page={page} quiet /><TrustStrip /><section className="section" data-motion="section"><div className="container card-grid card-grid--three">{page.cards.map(([title, href, text, img]) => <Link className="service-card" href={href} key={href}><span className="service-card__media"><Image src={img} alt={title} fill sizes="(max-width: 800px) 100vw, 33vw" /></span><span className="service-card__body"><strong>{title}</strong><small>{text}</small></span></Link>)}</div></section><ProcessSection /><FaqSection faq={page.faq} /><ContactBand /></>;
}

function DetailPage({ page }) {
  return <><Hero page={page} quiet /><section className="section" data-motion="section"><div className="container split split--wide"><div><p className="eyebrow">Beratung und Entwurf</p><h2>Was daraus entstehen kann</h2><p>{page.lead}</p><p>Die endgültige Gestaltung wird nicht vorgegeben, sondern im persönlichen Gespräch entwickelt. So bleibt der Stein ruhig, würdevoll und zugleich unverwechselbar.</p><div className="cta-row cta-row--left"><Link className="button button--primary" href="/kontakt/#formular">Beratung anfragen</Link><a className="button button--secondary" href={company.phoneHref}>Direkt anrufen</a></div></div><ImageCard src={page.image} alt={page.alt} label={page.navTitle} /></div></section><GalleryPlaceholders gallery={page.gallery} /><FaqSection faq={page.faq} /><ContactBand /></>;
}

function GalleryPlaceholders({ gallery }) {
  return <section className="section section--warm" data-motion="section"><div className="container section-head"><p className="eyebrow">Bildplätze</p><h2>Referenzen und Details ergänzen</h2><p>Diese Flächen sind bewusst für spätere echte Werkstatt- und Detailbilder vorbereitet.</p></div><div className="container placeholder-grid">{gallery.map(([label, img], index) => <figure className="placeholder-card" key={label}><div><Image src={img} alt={label} fill sizes="(max-width: 800px) 100vw, 25vw" /></div><figcaption><span>{index > 1 ? 'Platzhalter' : 'Beispielbild'}</span>{label}</figcaption></figure>)}</div></section>;
}

function WorkshopPage({ page }) {
  return <><Hero page={page} quiet /><section className="section" data-motion="section"><div className="container workshop-grid"><ImageCard src="/assets/images/bruno-johannes-harich.jpg" alt="Bruno Johannes Harich" label="Bruno Johannes Harich" /><div><p className="eyebrow">Haltung</p><h2>„Gedanken, Anschauungen und Persönlichkeit eines Menschen in Stein gestalten.“</h2><p>Die Werkstatt verbindet Herkunft, regionale Nähe und künstlerischen Anspruch. Bruno Johannes Harich ist seit 1986 ausgebildeter Steinmetz und Steinbildhauer und seit 2009 Geschäftsführer und alleiniger Inhaber der GmbH.</p><div className="timeline"><article><span>1958</span><h3>Gründung und Verwurzelung</h3><p>Die Werkstatt steht seit Jahrzehnten für Natursteinhandwerk in Eischeid.</p></article><article><span>Heute</span><h3>Persönliche Meisterwerkstatt</h3><p>Beratung, Entwurf und Umsetzung bleiben eng miteinander verbunden.</p></article></div></div></div></section><ContactBand /></>;
}

function ArticlePage({ page }) {
  return <><Hero page={page} quiet /><section className="section" data-motion="article"><div className="container article-layout"><article className="article-body"><p className="eyebrow">Bedeutung des Projekts</p><h2>Ein Werk mit Haltung</h2><p>Der Mahnende Mühlstein zeigt, welche Kraft ein Steinwerk entwickeln kann, wenn Material, Form, Schrift und Haltung zusammenkommen. Für die Steinmetzwerkstatt Harich ist das Projekt ein sichtbares Beispiel dafür, wie handwerkliche Arbeit gesellschaftliche Verantwortung tragen kann.</p><p>Die Übergabe an Papst Franziskus macht das Projekt zu einem besonderen Vertrauensanker: Es steht für Präzision, künstlerische Aussagekraft und die Fähigkeit, ein schwieriges Thema in eine klare, dauerhafte Form zu bringen.</p><h2>Dokumentierte Veröffentlichungen</h2><div className="source-list">{page.sources.map(([label, href]) => <a href={href} key={href} target="_blank" rel="noreferrer">{label}</a>)}</div></article><aside className="article-aside"><ImageCard src="/assets/images/muehlstein-projekt.jpg" alt="Mahnender Mühlstein" label="Der Mahnende Mühlstein als Steinmetzprojekt" /><ImageCard src="/assets/images/muehlstein-papst.jpg" alt="Papst Franziskus mit Bruno Johannes Harich" label="Übergabe an Papst Franziskus" /></aside></div></section><ContactBand /></>;
}

function ContactPage({ page }) {
  return <><Hero page={page} quiet /><section className="section" id="formular" data-motion="contact"><div className="container contact-page"><div className="contact-details"><p className="eyebrow">Kontakt aufnehmen</p><h2>Direkt zur Werkstatt</h2><p><strong>{company.name}</strong><br />{company.street}<br />{company.city}</p><p><a href={company.phoneHref}>{company.phone}</a><br /><a href={company.emailHref}>{company.email}</a></p><MapConsent /></div><div className="contact-panel"><h2>Kurze Anfrage senden</h2><p>Teilen Sie kurz mit, worum es geht. Die Werkstatt meldet sich persönlich zurück.</p><ContactForm source="kontaktseite" /></div></div></section></>;
}

function LegalPage({ page }) {
  return <><Hero page={page} quiet /><section className="section"><div className="container legal"><p className="notice">Bitte vor finaler Veröffentlichung rechtlich prüfen.</p>{page.sections.map(([title, items]) => <section key={title}><h2>{title}</h2>{items.map((item) => <p key={item}>{item}</p>)}</section>)}</div></section></>;
}

function FaqSection({ faq = [] }) {
  if (!faq.length) return null;
  return <section className="section faq-section" data-motion="faq"><div className="container section-head"><p className="eyebrow">Fragen</p><h2>Was vor dem ersten Gespräch oft wichtig ist</h2></div><div className="container faq-grid">{faq.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>;
}

function ContactBand() {
  return <section className="section contact-band" id="kontaktformular" data-motion="contact"><div className="container contact-panel contact-panel--wide"><div><p className="eyebrow">Nächster Schritt</p><h2>Beratung für Ihr Steinwerk anfragen</h2><p>Ein Anruf oder eine kurze Nachricht genügt. Das erste Gespräch darf offen beginnen - auch wenn Form, Stein oder Schrift noch unklar sind.</p><div className="contact-actions"><a href={company.phoneHref}><strong>{company.phone}</strong><span>Direkt anrufen</span></a><a href={company.emailHref}><strong>{company.email}</strong><span>E-Mail schreiben</span></a></div></div><ContactForm source="kontaktbereich" /></div></section>;
}
