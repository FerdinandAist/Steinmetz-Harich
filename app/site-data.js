export const baseUrl = 'https://www.steinmetzwerkstatt-harich.de';

export const company = {
  name: 'Steinmetzwerkstatt Bruno Johannes Harich GmbH',
  shortName: 'Steinmetzwerkstatt Harich',
  owner: 'Bruno Johannes Harich',
  street: 'Zum Nüchel 17',
  city: '53819 Neunkirchen-Seelscheid, Eischeid',
  phone: '02247 2386',
  phoneHref: 'tel:+4922472386',
  email: 'kontakt@steinmetzwerkstatt-harich.de',
  emailHref: 'mailto:kontakt@steinmetzwerkstatt-harich.de',
};

export const regions = ['Neunkirchen-Seelscheid', 'Eischeid', 'Rhein-Sieg-Kreis', 'Siegburg', 'Hennef', 'Lohmar', 'Much', 'Troisdorf', 'Rösrath', 'Overath', 'Köln'];

export const reviews = [
  { person: 'Platzhalter Rezension 1', quote: 'Wir fühlten uns im Gespräch ernst genommen. Aus ersten Gedanken entstand ein Entwurf, der ruhig, persönlich und genau passend wirkte.' },
  { person: 'Platzhalter Rezension 2', quote: 'Die Beratung war sehr menschlich. Besonders hilfreich war, dass Schrift, Symbol und Stein gemeinsam gedacht wurden.' },
  { person: 'Platzhalter Rezension 3', quote: 'Keine Standardlösung, sondern ein Stein mit Bedeutung. Genau diese ruhige und sorgfältige Art hatten wir gesucht.' },
];

const commonFaq = [
  ['Muss ich schon eine genaue Idee haben?', 'Nein. Viele Gespräche beginnen mit wenigen Gedanken oder Erinnerungen. Daraus entsteht Schritt für Schritt ein stimmiger Entwurf.'],
  ['Beraten Sie auch Kunden aus Köln?', 'Ja. Die Werkstatt liegt in Neunkirchen-Seelscheid/Eischeid und berät Kunden aus dem Rhein-Sieg-Kreis bis Köln.'],
  ['Kann ein Grabmal modern und schlicht sein?', 'Ja. Ein würdevoller Gedenkstein kann sehr reduziert, natürlich, klassisch oder künstlerisch gestaltet sein. Entscheidend ist die persönliche Aussage.'],
];

export const routes = {
  '': {
    template: 'home',
    title: 'Steinmetz Neunkirchen-Seelscheid bis Köln | Steinmetzwerkstatt Harich',
    description: 'Persönliche Meisterwerkstatt für individuelle Gedenksteine, Steinlichter, Findlinge, Basaltsäulen und Steinobjekte im Rhein-Sieg-Kreis bis Köln.',
    navTitle: 'Startseite',
    hero: {
      eyebrow: 'Steinmetz- und Steinbildhauer-Meister seit 1958',
      h1: 'Ein Stein wird persönlich, wenn er aus einem Gespräch entsteht.',
      text: 'Bruno Johannes Harich gestaltet Gedenksteine und Steinobjekte, die Erinnerung, Persönlichkeit und Beständigkeit sichtbar machen - in Neunkirchen-Seelscheid/Eischeid, im Rhein-Sieg-Kreis und bis Köln.',
      image: '/assets/images/hero-werkstatt.jpg',
      alt: 'Ruhige Werkstattaufnahme mit Naturstein der Steinmetzwerkstatt Harich',
    },
    faq: commonFaq,
  },

  'gedenksteine-steinwerke': {
    template: 'productHub',
    title: 'Gedenksteine & Steinwerke | Harich Rhein-Sieg-Kreis bis K?ln',
    description: '?bersicht f?r Gedenksteine, Steinlichter, Findlinge, Basalts?ulen, Brunnen, Schalen, Skulpturen und Steinobjekte der Steinmetzwerkstatt Harich.',
    navTitle: 'Gedenksteine & Steinwerke',
    eyebrow: 'Auswahl finden',
    h1: 'Welche Steinl?sung suchen Sie?',
    lead: 'W?hlen Sie zuerst, ob es um Erinnerung und Grabmal oder um Steinwerke f?r Haus, Garten und besondere Orte geht. Danach f?hrt die Auswahl zu den passenden Unterseiten.',
    image: '/assets/images/gedenksteine.jpg',
    alt: 'Naturstein-Gedenkstein und Steinwerk der Steinmetzwerkstatt Harich',
    chooser: {
      question: 'Was m?chten Sie gestalten lassen?',
      groups: [
        {
          title: 'Erinnerung & Grabmal',
          text: 'F?r Gedenksteine, Grabmale, Steinlichter, Findlinge und Basalts?ulen.',
          image: '/assets/images/gedenksteine.jpg',
          links: [
            ['Gedenksteine ?bersicht', '/gedenksteine/'],
            ['Innovative Gedenksteine', '/gedenksteine/innovative-gedenksteine/'],
            ['Klassische Gedenksteine', '/gedenksteine/klassische-gedenksteine/'],
            ['Findlinge & Basalts?ulen', '/gedenksteine/findlinge-basaltsaeulen/'],
            ['Steinlichter', '/gedenksteine/steinlichter/'],
          ],
        },
        {
          title: 'Haus, Garten & besondere Orte',
          text: 'F?r Brunnen, Schalen, Skulpturen, Accessoires und freie Steinobjekte.',
          image: '/assets/images/steinobjekt-brunnen.jpg',
          links: [
            ['Steinobjekte ?bersicht', '/steinobjekte/'],
            ['Brunnen', '/steinobjekte/brunnen/'],
            ['Schalen', '/steinobjekte/schalen/'],
            ['Skulpturen', '/steinobjekte/skulpturen/'],
            ['Accessoires', '/steinobjekte/accessoires/'],
          ],
        },
      ],
    },
    faq: commonFaq,
  },
  'handwerk-gestaltung': {
    template: 'craftHub',
    title: 'Handwerk & Gestaltung | Beratung und Werkstatt Harich',
    description: 'Pers?nliche Beratung, Entwurf, Schrift, Symbol, Umsetzung, Werkstattgeschichte und Bruno Johannes Harich im ?berblick.',
    navTitle: 'Handwerk & Gestaltung',
    eyebrow: 'Beratung, Entwurf und Werkstatt',
    h1: 'Wie wird aus einem Gedanken ein Steinwerk?',
    lead: 'Diese Seite f?hrt durch Beratung, Gestaltung und Werkstatt. W?hlen Sie, ob Sie den Entstehungsprozess verstehen oder die Meisterwerkstatt kennenlernen m?chten.',
    image: '/assets/images/gestaltung-idee.jpg',
    alt: 'Entwurf und handwerkliche Gestaltung in Stein',
    chooser: {
      question: 'Wobei m?chten Sie Orientierung?',
      groups: [
        {
          title: 'Gestaltung verstehen',
          text: 'F?r Gespr?ch, Idee, Entwurf, Schrift, Symbol und handwerkliche Umsetzung.',
          image: '/assets/images/gestaltung-idee.jpg',
          links: [
            ['Gestaltung ?bersicht', '/gestaltung/'],
            ['Idee & Entwurf', '/gestaltung/idee-und-entwurf/'],
            ['Entstehung & Umsetzung', '/gestaltung/entstehung-und-umsetzung/'],
            ['Schrift & Symbol', '/gestaltung/schrift-und-symbol/'],
          ],
        },
        {
          title: 'Werkstatt kennenlernen',
          text: 'F?r Haltung, Geschichte, Bruno Johannes Harich und das Referenzprojekt Mahnender M?hlstein.',
          image: '/assets/images/bruno-johannes-harich.jpg',
          links: [
            ['Werkstatt ?bersicht', '/werkstatt/'],
            ['Philosophie', '/werkstatt/philosophie/'],
            ['Chronik', '/werkstatt/chronik/'],
            ['Bruno Johannes Harich', '/werkstatt/bruno-johannes-harich/'],
            ['Mahnender M?hlstein', '/mahnender-muehlstein-papst-franziskus/'],
          ],
        },
      ],
    },
    faq: commonFaq,
  },
  'gedenksteine': {
    template: 'overview',
    title: 'Individuelle Gedenksteine Rhein-Sieg-Kreis bis Köln | Harich',
    description: 'Individuelle Gedenksteine, Grabmale, Steinlichter, Findlinge und Basaltsäulen mit persönlicher Beratung in Neunkirchen-Seelscheid und Umgebung.',
    navTitle: 'Gedenksteine',
    eyebrow: 'Gedenksteine',
    h1: 'Grabmale, die Erinnerung persönlich sichtbar machen.',
    lead: 'Ein Gedenkstein muss nicht laut sein, um viel zu sagen. In der Steinmetzwerkstatt Harich entsteht er aus Gespräch, Entwurf, Material, Schrift und Symbol.',
    image: '/assets/images/gedenksteine.jpg',
    alt: 'Individueller Gedenkstein aus Naturstein',
    cards: [
      ['Innovative Gedenksteine', '/gedenksteine/innovative-gedenksteine/', 'Freie Formen, persönliche Symbole und individuelle Entwürfe.', '/assets/images/innovative-gedenksteine.jpg'],
      ['Klassische Gedenksteine', '/gedenksteine/klassische-gedenksteine/', 'Ruhige, bewährte Formen mit handwerklicher Präzision.', '/assets/images/klassische-gedenksteine.jpg'],
      ['Findlinge & Basaltsäulen', '/gedenksteine/findlinge-basaltsaeulen/', 'Natürliche Steinformen für naturverbundene Erinnerungszeichen.', '/assets/images/basaltsaeulen.jpg'],
      ['Steinlichter', '/gedenksteine/steinlichter/', 'Licht, Stein und Erinnerung als stilles Zeichen am Grab.', '/assets/images/steinlicht.jpg'],
    ],
    faq: commonFaq,
  },
  'gedenksteine/innovative-gedenksteine': detail('Innovative Gedenksteine', 'Ein Gedenkstein darf die Persönlichkeit eines Menschen sichtbar machen.', 'Individuelle Formen, besondere Oberflächen, Schriftbilder und Symbole entstehen aus dem Gespräch. So wird aus Naturstein ein Zeichen, das nicht beliebig wirkt.', '/assets/images/innovative-gedenksteine.jpg', 'moderner individueller Gedenkstein'),
  'gedenksteine/klassische-gedenksteine': detail('Klassische Gedenksteine', 'Klassische Formen können ruhig, würdevoll und sehr persönlich sein.', 'Auch ein klassisches Grabmal gewinnt durch Proportion, Material, Schrift und handwerkliche Details eine eigene Haltung.', '/assets/images/klassische-gedenksteine.jpg', 'klassischer Gedenkstein aus Naturstein'),
  'gedenksteine/findlinge-basaltsaeulen': detail('Findlinge & Basaltsäulen', 'Naturstein in seiner ursprünglichen Form kann eine besondere Nähe ausdrücken.', 'Findlinge und Basaltsäulen eignen sich für Menschen, deren Erinnerung mit Natur, Bodenständigkeit oder einer klaren Form verbunden ist.', '/assets/images/basaltsaeulen.jpg', 'Basaltsäulen und Findlinge als Grabmal'),
  'gedenksteine/steinlichter': detail('Steinlichter', 'Ein Steinlicht verbindet Material, Licht und stille Gegenwart.', 'Steinlichter schaffen einen ruhigen Ort des Erinnerns und können als eigenständiges Zeichen oder ergänzend zu einem Grabmal gestaltet werden.', '/assets/images/steinlicht.jpg', 'Steinlicht aus Naturstein'),
  'gestaltung': {
    template: 'overview',
    title: 'Grabmal Gestaltung, Schrift und Symbol | Harich Rhein-Sieg bis Köln',
    description: 'Vom Gespräch über Entwurf, Schrift und Symbol bis zur Umsetzung: persönliche Grabmalgestaltung durch Steinmetzmeister Bruno Johannes Harich.',
    navTitle: 'Gestaltung',
    eyebrow: 'Gestaltung',
    h1: 'Aus Gedanken entsteht ein Stein mit Bedeutung.',
    lead: 'Viele Angehörige wissen am Anfang nicht, wie Erinnerung in Stein aussehen kann. Die Gestaltung beginnt deshalb mit Zuhören, Ordnen und behutsamem Entwerfen.',
    image: '/assets/images/gestaltung-idee.jpg',
    alt: 'Entwurfsarbeit für ein individuelles Grabmal',
    cards: [
      ['Idee und Entwurf', '/gestaltung/idee-und-entwurf/', 'Aus Erinnerungen, Worten und Bildern entsteht eine klare Richtung.', '/assets/images/gestaltung-idee.jpg'],
      ['Entstehung und Umsetzung', '/gestaltung/entstehung-und-umsetzung/', 'Vom ausgewählten Stein bis zur handwerklichen Fertigung.', '/assets/images/gestaltung-umsetzung.jpg'],
      ['Schrift und Symbol', '/gestaltung/schrift-und-symbol/', 'Persönliche Zeichen, Schriften und Oberflächen mit Bedeutung.', '/assets/images/gestaltung-symbol.jpg'],
    ],
    faq: commonFaq,
  },
  'gestaltung/idee-und-entwurf': detail('Idee und Entwurf', 'Der Entwurf übersetzt Erinnerung in Form.', 'Im Gespräch werden Persönlichkeit, Lebensspuren und Friedhofsvorgaben zusammengeführt. Daraus entsteht ein Entwurf, der ruhig, verständlich und individuell ist.', '/assets/images/gestaltung-idee.jpg', 'Skizze und Entwurf für ein Steinwerk'),
  'gestaltung/entstehung-und-umsetzung': detail('Entstehung und Umsetzung', 'Handwerk macht aus dem Entwurf ein dauerhaftes Zeichen.', 'Materialauswahl, Bearbeitung, Oberfläche, Schrift und Setzen werden sorgfältig abgestimmt und in der Meisterwerkstatt umgesetzt.', '/assets/images/gestaltung-umsetzung.jpg', 'Steinmetzarbeit in der Umsetzung'),
  'gestaltung/schrift-und-symbol': detail('Schrift und Symbol', 'Schrift und Symbol geben dem Stein seine persönliche Stimme.', 'Eine Schrift kann zurückhaltend, klassisch, frei oder kraftvoll wirken. Symbole werden nicht dekorativ, sondern aus der Bedeutung heraus entwickelt.', '/assets/images/gestaltung-symbol.jpg', 'Schrift und Symbol auf Naturstein'),
  'steinobjekte': {
    template: 'overview',
    title: 'Steinskulpturen und Steinobjekte Rhein-Sieg bis Köln | Harich',
    description: 'Brunnen, Schalen, Skulpturen und Accessoires aus Naturstein für Haus, Garten und besondere Orte.',
    navTitle: 'Steinobjekte',
    eyebrow: 'Steinobjekte',
    h1: 'Steinwerke für Haus, Garten und besondere Orte.',
    lead: 'Naturstein kann Räume beruhigen, Wasser führen, einen Garten gliedern oder als Skulptur einen Ort prägen. Jede Arbeit entsteht handwerklich und individuell.',
    image: '/assets/images/steinobjekt-brunnen.jpg',
    alt: 'Natursteinbrunnen als Steinobjekt',
    cards: [
      ['Brunnen', '/steinobjekte/brunnen/', 'Wasser und Stein als ruhiger Mittelpunkt im Garten.', '/assets/images/steinobjekt-brunnen.jpg'],
      ['Schalen', '/steinobjekte/schalen/', 'Handwerkliche Steinformen für Innen- und Außenräume.', '/assets/images/steinobjekt-steinlicht.jpg'],
      ['Skulpturen', '/steinobjekte/skulpturen/', 'Künstlerische Arbeiten aus Naturstein.', '/assets/images/steinobjekt-skulptur.jpg'],
      ['Accessoires', '/steinobjekte/accessoires/', 'Kleine Steinobjekte mit besonderer Materialwirkung.', '/assets/images/skulptur.jpg'],
    ],
    faq: [['Kann ein Steinobjekt individuell entworfen werden?', 'Ja. Größe, Material, Oberfläche und Einsatzort werden gemeinsam abgestimmt.'], ['Sind Steinobjekte auch für Gärten in Köln geeignet?', 'Ja. Die Werkstatt fertigt Steinobjekte für Kunden im Rhein-Sieg-Kreis und bis Köln.'], ...commonFaq.slice(0, 1)],
  },
  'steinobjekte/brunnen': detail('Brunnen', 'Ein Brunnen bringt Bewegung in die Ruhe des Steins.', 'Natursteinbrunnen werden auf Ort, Proportion und gewünschte Wirkung abgestimmt - für Garten, Eingang oder besondere Plätze.', '/assets/images/steinobjekt-brunnen.jpg', 'Brunnen aus Naturstein'),
  'steinobjekte/schalen': detail('Schalen', 'Schalen aus Stein wirken schlicht, schwer und klar.', 'Sie können als Wasserobjekt, Pflanzschale oder freies Steinobjekt gestaltet werden.', '/assets/images/steinobjekt-steinlicht.jpg', 'Schale und Steinobjekt aus Naturstein'),
  'steinobjekte/skulpturen': detail('Skulpturen', 'Steinskulpturen geben einem Ort eine eigene Haltung.', 'Als freie Arbeit oder im Dialog mit einem Garten entsteht eine Skulptur aus Materialgefühl, Form und handwerklicher Präzision.', '/assets/images/steinobjekt-skulptur.jpg', 'Steinskulptur aus Naturstein'),
  'steinobjekte/accessoires': detail('Accessoires', 'Kleine Steinobjekte können einem Ort Beständigkeit geben.', 'Accessoires aus Naturstein eignen sich für Haus, Garten, Grabstätte oder besondere Erinnerungsorte.', '/assets/images/skulptur.jpg', 'kleines Steinobjekt und Accessoire'),
  'werkstatt': {
    template: 'workshop',
    title: 'Steinmetzwerkstatt Harich seit 1958 | Bruno Johannes Harich',
    description: 'Meisterwerkstatt in Neunkirchen-Seelscheid/Eischeid: Bruno Johannes Harich, Steinmetz- und Steinbildhauermeister, persönliche Beratung und Handwerk seit 1958.',
    navTitle: 'Werkstatt',
    eyebrow: 'Werkstatt',
    h1: 'Eine Meisterwerkstatt, in der Gespräch und Handwerk zusammenkommen.',
    lead: 'Seit 1958 steht die Steinmetzwerkstatt Harich in Eischeid für Naturstein, persönliche Beratung und künstlerisch-handwerkliche Gestaltung.',
    image: '/assets/images/bruno-johannes-harich.jpg',
    alt: 'Bruno Johannes Harich in der Steinmetzwerkstatt',
    faq: commonFaq,
  },
  'werkstatt/philosophie': detail('Philosophie', 'Ein Steinwerk beginnt mit Aufmerksamkeit.', 'Die Werkstatt versteht Stein nicht als Standardprodukt, sondern als Material für Erinnerung, Haltung und persönliche Zeichen.', '/assets/images/header-steinmetz-2.jpg', 'Naturstein in der Werkstatt'),
  'werkstatt/chronik': detail('Chronik', 'Seit 1958 ist die Werkstatt in Eischeid verwurzelt.', 'Die Geschichte der Werkstatt verbindet regionale Nähe, Meisterhandwerk und die kontinuierliche Weitergabe von Erfahrung.', '/assets/images/chronik.jpg', 'historischer Bezug der Steinmetzwerkstatt'),
  'werkstatt/bruno-johannes-harich': detail('Im Profil: Bruno Johannes Harich', 'Steinmetz- und Steinbildhauermeister mit persönlicher Handschrift.', 'Bruno Johannes Harich ist seit 1986 ausgebildeter Steinmetz und Steinbildhauer und seit 2009 Geschäftsführer und alleiniger Inhaber der GmbH.', '/assets/images/bruno-johannes-harich.jpg', 'Bruno Johannes Harich'),
  'mahnender-muehlstein-papst-franziskus': {
    template: 'article',
    title: 'Für Papst Franziskus: der Mahnende Mühlstein | Bruno Johannes Harich',
    description: 'Das Referenzprojekt Mahnender Mühlstein von Bruno Johannes Harich: Übergabe an Papst Franziskus, Bedeutung und mediale Veröffentlichungen.',
    navTitle: 'Referenzprojekt',
    eyebrow: 'Referenzprojekt',
    h1: 'Für den Papst Franziskus: der Mahnende Mühlstein von Bruno Johannes Harich',
    lead: 'Ein Steinmetzprojekt, das handwerkliche Präzision, künstlerische Aussagekraft und gesellschaftliche Verantwortung verbindet.',
    image: '/assets/images/muehlstein-vatikan.jpg',
    alt: 'Bruno Johannes Harich bei der Übergabe des Mahnenden Mühlsteins an Papst Franziskus',
    sources: [
      ['General-Anzeiger Bonn/Rhein-Sieg: Mühlstein gegen Missbrauch', 'https://ga.de/region/rhein-sieg-kreis/neunkirchen-seelscheid/muehlstein-gegen-missbrauch_aid-43219407'],
      ['Fachzeitschrift Naturstein: Artikel zum Mahnenden Mühlstein', 'https://www.natursteinonline.de/'],
    ],
  },
  'kontakt': {
    template: 'contact',
    title: 'Kontakt Steinmetzwerkstatt Harich | Beratung Rhein-Sieg bis Köln',
    description: 'Kontakt zur Steinmetzwerkstatt Harich in Neunkirchen-Seelscheid/Eischeid: Telefon, E-Mail, Anfrageformular und datensparsame Anfahrt.',
    navTitle: 'Kontakt',
    eyebrow: 'Kontakt',
    h1: 'Sprechen wir über Ihr Steinwerk.',
    lead: 'Ob erster Gedanke, konkrete Frage oder Wunsch nach einem Entwurf: Sie erreichen die Werkstatt telefonisch, per E-Mail oder über das kurze Formular.',
    image: '/assets/images/header-steinmetz-1.jpg',
    alt: 'Naturstein und Werkstatt als Kontaktmotiv',
  },
  'impressum': {
    template: 'legal',
    title: 'Impressum | Steinmetzwerkstatt Harich GmbH',
    description: 'Impressum der Steinmetzwerkstatt Bruno Johannes Harich GmbH in Neunkirchen-Seelscheid/Eischeid.',
    navTitle: 'Impressum',
    eyebrow: 'Rechtliches',
    h1: 'Impressum',
    lead: 'Rechtliche Anbieterkennzeichnung der Website.',
    sections: [
      ['Angaben gemäß Anbieterkennzeichnung', ['Steinmetzwerkstatt Bruno Johannes Harich GmbH', 'Zum Nüchel 17', '53819 Neunkirchen-Seelscheid, Eischeid']],
      ['Vertreten durch', ['Bruno Johannes Harich']],
      ['Kontakt', ['Telefon: 02247 2386', 'E-Mail: kontakt@steinmetzwerkstatt-harich.de']],
      ['Umsatzsteuer-ID', ['Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE264015431']],
      ['Hinweis zur rechtlichen Prüfung', ['Die Rechtstexte sind als strukturierte, prüfbare Grundlage übernommen und sollten vor finaler Veröffentlichung anwaltlich geprüft werden.']],
      ['Bildnachweise', ['Bildmaterial stammt aus dem vorhandenen Bildbestand der Steinmetzwerkstatt Bruno Johannes Harich GmbH. Nutzungsrechte vor Veröffentlichung final prüfen.']],
      ['Verbraucherstreitbeilegung', ['Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.']],
    ],
  },
  'datenschutz': {
    template: 'legal',
    title: 'Datenschutzerklärung | Steinmetzwerkstatt Harich',
    description: 'Datenschutzerklärung der Steinmetzwerkstatt Harich mit datensparsamer Umsetzung, Kontaktformular und Betroffenenrechten.',
    navTitle: 'Datenschutz',
    eyebrow: 'Datenschutz',
    h1: 'Datenschutzerklärung',
    lead: 'Diese Website ist bewusst datensparsam umgesetzt und lädt keine unnötigen Drittanbieter-Inhalte automatisch.',
    sections: [
      ['Aktueller Stand dieser Website', ['Keine Google Analytics Integration.', 'Keine extern geladenen Google Fonts.', 'Kein Meta Pixel.', 'Keine unnötigen Cookies.', 'Eine Karte wird erst nach aktivem Klick geladen.']],
      ['Kontaktformular', ['Wenn Sie das Formular nutzen, werden Name, Kontaktmöglichkeit, Anliegen, Nachricht und Einwilligung zur Bearbeitung Ihrer Anfrage verarbeitet.', 'Die technische Weiterleitung per E-Mail erfolgt über eine Vercel Route und einen E-Mail-Dienst nur nach Konfiguration über Environment Variables.']],
      ['Verantwortlicher', ['Steinmetzwerkstatt Bruno Johannes Harich GmbH', 'Zum Nüchel 17, 53819 Neunkirchen-Seelscheid, Eischeid', 'Telefon: 02247 2386', 'E-Mail: kontakt@steinmetzwerkstatt-harich.de']],
      ['Betroffenenrechte', ['Sie haben nach Maßgabe der DSGVO Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch und Widerruf einer Einwilligung.']],
      ['Server-Logfiles', ['Beim Aufruf der Website können technisch notwendige Zugriffsdaten durch den Hostinganbieter verarbeitet werden, um die Website sicher auszuliefern.']],
      ['Rechtlicher Hinweis', ['Diese Datenschutzerklärung ist als prüfbare Grundlage strukturiert und muss vor finaler Veröffentlichung rechtlich geprüft und bei späteren Integrationen ergänzt werden.']],
    ],
  },
};

function detail(navTitle, h1, lead, image, alt) {
  return {
    template: 'detail',
    title: navTitle + ' | Steinmetzwerkstatt Harich Rhein-Sieg bis Köln',
    description: lead + ' Persönliche Beratung in Neunkirchen-Seelscheid, Rhein-Sieg-Kreis und bis Köln.',
    navTitle,
    eyebrow: 'Persönliche Gestaltung in Stein',
    h1,
    lead,
    image,
    alt,
    gallery: [
      ['Werkstück Gesamtansicht', image],
      ['Detail von Schrift, Oberfläche oder Symbol', '/assets/images/gestaltung-symbol.jpg'],
      ['Platzhalter für weiteres Referenzbild', '/assets/images/header-steinmetz-3.jpg'],
      ['Platzhalter für Material- oder Werkstattdetail', '/assets/images/header-steinmetz-4.jpg'],
    ],
    faq: commonFaq,
  };
}

export function routePath(route) {
  return route ? '/' + route + '/' : '/';
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Organization'],
    name: company.name,
    alternateName: company.shortName,
    url: baseUrl,
    image: baseUrl + '/assets/images/logo-harich.png',
    telephone: '+4922472386',
    email: company.email,
    foundingDate: '1958',
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.street,
      postalCode: '53819',
      addressLocality: 'Neunkirchen-Seelscheid',
      addressRegion: 'Nordrhein-Westfalen',
      addressCountry: 'DE',
    },
    areaServed: regions,
    priceRange: '$$',
    description: 'Steinmetz- und Steinbildhauer-Meisterbetrieb für individuelle Gedenksteine, Grabmale, Steinlichter, Skulpturen und Steinobjekte.',
  };
}

export function breadcrumbSchema(route, page) {
  const parts = route ? route.split('/') : [];
  const items = [{ '@type': 'ListItem', position: 1, name: 'Startseite', item: baseUrl + '/' }];
  if (parts.length) items.push({ '@type': 'ListItem', position: 2, name: page.navTitle, item: baseUrl + routePath(route) });
  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items };
}

export function faqSchema(page) {
  if (!page.faq?.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faq.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })),
  };
}
