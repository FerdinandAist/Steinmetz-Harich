export const baseUrl = 'https://www.steinmetzwerkstatt-harich.de';

export const company = {
  name: 'Steinmetzwerkstatt Bruno Johannes Harich GmbH',
  shortName: 'Steinmetzwerkstatt Harich',
  owner: 'Bruno Johannes Harich',
  street: 'Zum Nüchel 17',
  city: '53819 Neunkirchen-Seelscheid',
  phone: '02247 2386',
  phoneHref: 'tel:+4922472386',
  email: 'kontakt@steinmetzwerkstatt-harich.de',
  emailHref: 'mailto:kontakt@steinmetzwerkstatt-harich.de',
};

export const regions = ['Neunkirchen-Seelscheid', 'Rhein-Sieg-Kreis', 'Siegburg', 'Hennef', 'Lohmar', 'Much', 'Troisdorf', 'Rösrath', 'Overath', 'Köln'];

export const reviews = [
  { person: 'Platzhalter Rezension 1', quote: 'Wir fühlten uns im Gespräch ernst genommen. Aus ersten Gedanken entstand ein Entwurf, der ruhig, persönlich und genau passend wirkte.' },
  { person: 'Platzhalter Rezension 2', quote: 'Die Beratung war sehr menschlich. Besonders hilfreich war, dass Schrift, Symbol und Stein gemeinsam gedacht wurden.' },
  { person: 'Platzhalter Rezension 3', quote: 'Keine Standardlösung, sondern ein Stein mit Bedeutung. Genau diese ruhige und sorgfältige Art hatten wir gesucht.' },
];

const commonFaq = [
  ['Muss ich schon eine genaue Idee haben?', 'Nein. Viele Gespräche beginnen mit wenigen Gedanken oder Erinnerungen. Daraus entsteht Schritt für Schritt ein stimmiger Entwurf.'],
  ['Beraten Sie auch Kunden aus K\u00f6ln?', 'Ja. Die Werkstatt liegt in Neunkirchen-Seelscheid und berät Kunden aus dem Rhein-Sieg-Kreis bis Köln.'],
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
      text: 'Bruno Johannes Harich gestaltet Gedenksteine und Steinobjekte, die Erinnerung, Persönlichkeit und Beständigkeit sichtbar machen - in der Region Köln/Bonn, insbesondere im Rhein-Sieg-Kreis.',
      image: '/assets/images/hero-stein.jpg',
      alt: 'Ruhige Naturstein- und Landschaftsaufnahme als Hintergrund der Steinmetzwerkstatt Harich',
    },
    faq: commonFaq,
  },

  'gedenksteine-steinwerke': {
    template: 'decisionHub',
    title: 'Gedenksteine & Steinwerke | Harich Rhein-Sieg-Kreis bis Köln',
    description: 'Gedenksteine, Steinlichter, Findlinge, Basaltsäulen, Brunnen, Schalen, Skulpturen und Steinobjekte der Steinmetzwerkstatt Harich.',
    navTitle: 'Gedenksteine & Steinwerke',
    eyebrow: 'Auswahl finden',
    h1: 'Welche Steinlösung suchen Sie?',
    lead: 'Wählen Sie die Lösung, die am besten zu Ihrem Anliegen passt.',
    decision: {
      question: 'Was möchten Sie gestalten lassen?',
      options: [
        ['Erinnerung & Grabmal', 'Gedenksteine, Grabmale, Steinlichter, Findlinge und Basaltsäulen.', '/gedenksteine-steinwerke/erinnerung-grabmal/'],
        ['Haus, Garten & besondere Orte', 'Brunnen, Schalen, Skulpturen, Accessoires und freie Steinobjekte.', '/gedenksteine-steinwerke/haus-garten/'],
      ],
    },
    faq: commonFaq,
  },
  'handwerk-gestaltung': {
    template: 'decisionHub',
    title: 'Handwerk & Gestaltung | Beratung und Werkstatt Harich',
    description: 'Persönliche Beratung, Entwurf, Schrift, Symbol, Umsetzung, Werkstattgeschichte und Bruno Johannes Harich im Überblick.',
    navTitle: 'Handwerk & Gestaltung',
    eyebrow: 'Auswahl finden',
    h1: 'Wobei suchen Sie Orientierung?',
    lead: 'Verstehen Sie den Gestaltungsprozess oder lernen Sie unsere Werkstatt kennen.',
    decision: {
      question: 'Was möchten Sie zuerst ansehen?',
      options: [
        ['Gestaltung verstehen', 'Gespräch, Idee, Entwurf, Schrift, Symbol und handwerkliche Umsetzung.', '/handwerk-gestaltung/gestaltung-verstehen/'],
        ['Werkstatt kennenlernen', 'Haltung, Geschichte, Bruno Johannes Harich und das Referenzprojekt Mahnender Mühlstein.', '/handwerk-gestaltung/werkstatt-kennenlernen/'],
      ],
    },
    faq: [
      ['Wie hilft diese Auswahlseite?', 'Sie trennt Gestaltung, Entwurf und Werkstattgeschichte, damit Sie schneller den passenden Einstieg finden.'],
      ['Kann ich direkt zur Werkstatt Kontakt aufnehmen?', 'Ja. Die Kontaktmöglichkeiten bleiben jederzeit über Header, mobile Leiste und Kontaktbereiche erreichbar.'],
      ['Warum ist der Gestaltungsprozess wichtig?', 'Er zeigt, wie aus Gespräch, Material, Schrift und Symbol ein persönliches Steinwerk entsteht.'],
    ],
  },

  'gedenksteine-steinwerke/erinnerung-grabmal': {
    template: 'choiceDetail',
    title: 'Erinnerung & Grabmal | Gedenksteine Harich',
    description: 'Auswahl für Gedenksteine, Grabmale, Steinlichter, Findlinge und Basaltsäulen der Steinmetzwerkstatt Harich.',
    navTitle: 'Erinnerung & Grabmal',
    eyebrow: 'Gedenksteine & Steinwerke',
    h1: 'Was soll als Erinnerung gestaltet werden?',
    lead: 'Wählen Sie die Kategorie, die am besten passt.',
    choices: [
      ['Innovative Gedenksteine', 'Freie Formen, persönliche Symbole und individuelle Entwürfe.', '/gedenksteine/innovative-gedenksteine/', '/assets/images/innovative-gedenksteine.jpg'],
      ['Klassische Gedenksteine', 'Ruhige, bewährte Formen mit handwerklicher Präzision.', '/gedenksteine/klassische-gedenksteine/', '/assets/images/klassische-gedenksteine.jpg'],
      ['Findlinge & Basaltsäulen', 'Natürliche Steinformen für naturverbundene Erinnerungszeichen.', '/gedenksteine/findlinge-basaltsaeulen/', '/assets/images/basaltsaeulen.jpg'],
      ['Steinlichter', 'Licht, Stein und Erinnerung als stilles Zeichen am Grab.', '/gedenksteine/steinlichter/', '/assets/images/steinlicht.jpg'],
    ],
    backHref: '/gedenksteine-steinwerke/',
  },
  'gedenksteine-steinwerke/haus-garten': {
    template: 'choiceDetail',
    title: 'Haus, Garten & besondere Orte | Steinwerke Harich',
    description: 'Auswahl für Brunnen, Schalen, Skulpturen, Accessoires und freie Steinobjekte aus Naturstein.',
    navTitle: 'Haus, Garten & besondere Orte',
    eyebrow: 'Gedenksteine & Steinwerke',
    h1: 'Welches Steinwerk passt zu Ihrem Ort?',
    lead: 'Wählen Sie die Kategorie, die am besten passt.',
    choices: [
      ['Brunnen', 'Wasser und Stein als ruhiger Mittelpunkt im Garten.', '/steinobjekte/brunnen/', '/assets/images/steinobjekt-brunnen.jpg'],
      ['Schalen', 'Handwerkliche Steinformen für Innen- und Außenräume.', '/steinobjekte/schalen/', '/assets/images/steinobjekt-steinlicht.jpg'],
      ['Skulpturen', 'Künstlerische Arbeiten aus Naturstein.', '/steinobjekte/skulpturen/', '/assets/images/steinobjekt-skulptur.jpg'],
      ['Accessoires', 'Kleine Steinobjekte mit besonderer Materialwirkung.', '/steinobjekte/accessoires/', '/assets/images/skulptur.jpg'],
    ],
    backHref: '/gedenksteine-steinwerke/',
  },
  'handwerk-gestaltung/gestaltung-verstehen': {
    template: 'choiceDetail',
    title: 'Gestaltung verstehen | Beratung, Entwurf, Schrift und Symbol',
    description: 'Auswahl für Beratung, Idee, Entwurf, Entstehung, Umsetzung, Schrift und Symbol bei Steinmetzwerkstatt Harich.',
    navTitle: 'Gestaltung verstehen',
    eyebrow: 'Handwerk & Gestaltung',
    h1: 'Welcher Teil der Gestaltung interessiert Sie?',
    lead: 'Wählen Sie die Kategorie, die am besten passt.',
    choices: [
      ['Idee & Entwurf', 'Aus Erinnerungen, Worten und Bildern entsteht eine klare Richtung.', '/gestaltung/idee-und-entwurf/', '/assets/images/gestaltung-idee.jpg'],
      ['Entstehung & Umsetzung', 'Vom ausgewählten Stein bis zur handwerklichen Fertigung.', '/gestaltung/entstehung-und-umsetzung/', '/assets/images/gestaltung-umsetzung.jpg'],
      ['Schrift & Symbol', 'Persönliche Zeichen, Schriften und Oberflächen mit Bedeutung.', '/gestaltung/schrift-und-symbol/', '/assets/images/gestaltung-symbol.jpg'],
    ],
    backHref: '/handwerk-gestaltung/',
  },
  'handwerk-gestaltung/werkstatt-kennenlernen': {
    template: 'choiceDetail',
    title: 'Werkstatt kennenlernen | Bruno Johannes Harich',
    description: 'Auswahl zu Philosophie, Chronik, Bruno Johannes Harich und dem Referenzprojekt Mahnender Mühlstein.',
    navTitle: 'Werkstatt kennenlernen',
    eyebrow: 'Handwerk & Gestaltung',
    h1: 'Was möchten Sie über die Werkstatt erfahren?',
    lead: 'Wählen Sie die Kategorie, die am besten passt.',
    choices: [
      ['Philosophie', 'Warum ein Steinwerk mit Aufmerksamkeit beginnt.', '/werkstatt/philosophie/', '/assets/images/header-steinmetz-2.jpg'],
      ['Chronik', 'Seit 1958 regional verwurzelt.', '/werkstatt/chronik/', '/assets/images/chronik.jpg'],
      ['Bruno Johannes Harich', 'Steinmetz- und Steinbildhauermeister mit persönlicher Handschrift.', '/werkstatt/bruno-johannes-harich/', '/assets/images/bruno-johannes-harich.jpg'],
      ['Mahnender Mühlstein', 'Referenzprojekt für Papst Franziskus.', '/mahnender-muehlstein-papst-franziskus/', '/assets/images/muehlstein-vatikan.jpg'],
    ],
    backHref: '/handwerk-gestaltung/',
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
    description: 'Vom Gespräch üüber Entwurf, Schrift und Symbol bis zur Umsetzung: persönliche Grabmalgestaltung durch Steinmetzmeister Bruno Johannes Harich.',
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
    faq: [['Kann ein Steinobjekt individuell entworfen werden?', 'Ja. Größe, Material, Oberfläche und Einsatzort werden gemeinsam abgestimmt.'], ['Sind Steinobjekte auch f\u00fcr G\u00e4rten in K\u00f6ln geeignet?', 'Ja. Die Werkstatt fertigt Steinobjekte für Kunden im Rhein-Sieg-Kreis und bis Köln.'], ...commonFaq.slice(0, 1)],
  },
  'steinobjekte/brunnen': detail('Brunnen', 'Ein Brunnen bringt Bewegung in die Ruhe des Steins.', 'Natursteinbrunnen werden auf Ort, Proportion und gewünschte Wirkung abgestimmt - für Garten, Eingang oder besondere Plätze.', '/assets/images/steinobjekt-brunnen.jpg', 'Brunnen aus Naturstein'),
  'steinobjekte/schalen': detail('Schalen', 'Schalen aus Stein wirken schlicht, schwer und klar.', 'Sie können als Wasserobjekt, Pflanzschale oder freies Steinobjekt gestaltet werden.', '/assets/images/steinobjekt-steinlicht.jpg', 'Schale und Steinobjekt aus Naturstein'),
  'steinobjekte/skulpturen': detail('Skulpturen', 'Steinskulpturen geben einem Ort eine eigene Haltung.', 'Als freie Arbeit oder im Dialog mit einem Garten entsteht eine Skulptur aus Materialgefühl, Form und handwerklicher Präzision.', '/assets/images/steinobjekt-skulptur.jpg', 'Steinskulptur aus Naturstein'),
  'steinobjekte/accessoires': detail('Accessoires', 'Kleine Steinobjekte können einem Ort Beständigkeit geben.', 'Accessoires aus Naturstein eignen sich für Haus, Garten, Grabstätte oder besondere Erinnerungsorte.', '/assets/images/skulptur.jpg', 'kleines Steinobjekt und Accessoire'),
  'werkstatt': {
    template: 'workshop',
    title: 'Steinmetzwerkstatt Harich seit 1958 | Bruno Johannes Harich',
    description: 'Meisterwerkstatt in Neunkirchen-Seelscheid: Bruno Johannes Harich, Steinmetz- und Steinbildhauermeister, persönliche Beratung und Handwerk seit 1958.',
    navTitle: 'Werkstatt',
    eyebrow: 'Werkstatt',
    h1: 'Eine Meisterwerkstatt, in der Gespräch und Handwerk zusammenkommen.',
    lead: 'Seit 1958 steht die Steinmetzwerkstatt Harich in Neunkirchen-Seelscheid für Naturstein, persönliche Beratung und künstlerisch-handwerkliche Gestaltung.',
    image: '/assets/images/bruno-johannes-harich.jpg',
    alt: 'Bruno Johannes Harich in der Steinmetzwerkstatt',
    faq: commonFaq,
  },
  'werkstatt/philosophie': detail('Philosophie', 'Ein Steinwerk beginnt mit Aufmerksamkeit.', 'Die Werkstatt versteht Stein nicht als Standardprodukt, sondern als Material für Erinnerung, Haltung und persönliche Zeichen.', '/assets/images/header-steinmetz-2.jpg', 'Naturstein in der Werkstatt'),
  'werkstatt/chronik': detail('Chronik', 'Seit 1958 ist die Werkstatt in Neunkirchen-Seelscheid verwurzelt.', 'Die Geschichte der Werkstatt verbindet regionale Nähe, Meisterhandwerk und die kontinuierliche Weitergabe von Erfahrung.', '/assets/images/chronik.jpg', 'historischer Bezug der Steinmetzwerkstatt'),
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
    articleSections: [
      ['Ein Stein als Mahnung', [
        'Der Mahnende Mühlstein ist ein Steinmetzprojekt, das weit über handwerkliche Fertigung hinausgeht. Bruno Johannes Harich fertigte den rund 1,4 Tonnen schweren Mühlstein im Auftrag der Initiative gegen Gewalt und sexuellen Missbrauch an Kindern und Jugendlichen.',
        'In den Stein wurde ein Vers aus dem Matthäus-Evangelium eingearbeitet. Die Form des Mühlsteins, das biblische Motiv und die schwere Materialität verdichten sich zu einem Mahnmal: Erwachsene sollen an ihre Verantwortung gegenüber Kindern erinnert werden.',
        'Gerade diese Verbindung aus Naturstein, Schrift und gesellschaftlicher Aussage macht das Projekt für die Werkstatt Harich zu einer besonderen Referenz. Der Stein ist kein dekoratives Objekt, sondern ein Werk mit klarer Haltung.'
      ]],
      ['Von deutschen Städten bis nach Rom', [
        'Bevor der Mühlstein nach Rom gebracht wurde, war er über viele Jahre in Deutschland unterwegs. Die Initiative stellte ihn auf öffentlichen Plätzen aus, um Aufmerksamkeit für den Schutz von Kindern und Jugendlichen zu schaffen.',
        'Der Fachartikel in Naturstein berichtet, dass der Mahnende Mühlstein über zehn Jahre durch Deutschland tourte und in mehr als 31 Städten für jeweils mehrere Wochen auf Marktplätzen stand. Auch der General-Anzeiger beschreibt den Weg des Steins als lange öffentliche Mahnung.',
        'Aus einem handwerklich bearbeiteten Naturstein wurde damit ein wiederkehrender Gesprächsanlass: Menschen sollten stehen bleiben, lesen, nachdenken und die Botschaft nicht übersehen.'
      ]],
      ['Die Übergabe an Papst Franziskus', [
        'Gemeinsam mit Johannes Heibel, dem Vorsitzenden der Initiative, brachte Bruno Johannes Harich den Mühlstein nach Rom. Die Reise mit Transporter und Anhänger führte über rund 1.450 Kilometer bis zum Petersplatz.',
        'Am 27. November 2019 wurde der Mühlstein Papst Franziskus übergeben. In den Berichten wird geschildert, dass der Stein direkt auf den Petersplatz gebracht und dort mit technischer Hilfe platziert wurde.',
        'Die Übergabe war deshalb besonders, weil Papst Franziskus selbst wiederholt auf die Verantwortung der Kirche im Umgang mit Missbrauch verwiesen hatte. Der Stein machte diese Mahnung sichtbar, schwer und dauerhaft.'
      ]],
      ['Handwerkliche und menschliche Bedeutung', [
        'Für Bruno Johannes Harich verbindet das Projekt Steinmetzhandwerk, künstlerische Aussage und gesellschaftliche Verantwortung. Die Bearbeitung eines solchen Steins verlangt nicht nur Präzision, sondern auch Respekt vor dem Thema.',
        'Die eingemeißelte Schrift, das Gewicht des Materials und der öffentliche Weg des Mahnmals zeigen, wie Naturstein eine Botschaft tragen kann, die über den Moment hinaus Bestand hat.',
        'Auf der Website dient dieses Referenzprojekt deshalb nicht als Nachricht, sondern als Vertrauensanker: Es zeigt, dass die Steinmetzwerkstatt Harich schwierige, persönliche und gesellschaftlich bedeutsame Themen in eine würdige Form aus Stein übersetzen kann.'
      ]]
    ],
    sources: [
      ['General-Anzeiger Bonn/Rhein-Sieg: Mühlstein gegen Missbrauch', 'https://ga.de/region/rhein-sieg-kreis/neunkirchen-seelscheid/muehlstein-gegen-missbrauch_aid-43219407'],
      ['Fachzeitschrift Naturstein: Artikel zum Mahnenden Mühlstein', 'https://www.natursteinonline.de/'],
    ],
  },
  'kontakt': {
    template: 'contact',
    title: 'Kontakt Steinmetzwerkstatt Harich | Beratung Rhein-Sieg bis Köln',
    description: 'Kontakt zur Steinmetzwerkstatt Harich in Neunkirchen-Seelscheid: Telefon, E-Mail, Anfrageformular und datensparsame Anfahrt.',
    navTitle: 'Kontakt',
    eyebrow: 'Kontakt',
    h1: 'Sprechen wir üüber Ihr Steinwerk.',
    lead: 'Ob erster Gedanke, konkrete Frage oder Wunsch nach einem Entwurf: Sie erreichen die Werkstatt telefonisch, per E-Mail oder üüber das kurze Formular.',
    image: '/assets/images/header-steinmetz-1.jpg',
    alt: 'Naturstein und Werkstatt als Kontaktmotiv',
  },
  'impressum': {
    template: 'legal',
    title: 'Impressum | Steinmetzwerkstatt Harich GmbH',
    description: 'Impressum der Steinmetzwerkstatt Bruno Johannes Harich GmbH in Neunkirchen-Seelscheid.',
    navTitle: 'Impressum',
    eyebrow: 'Rechtliches',
    h1: 'Impressum',
    lead: 'Rechtliche Anbieterkennzeichnung der Website.',
    sections: [
      ['Angaben gemäß Anbieterkennzeichnung', ['Steinmetzwerkstatt Bruno Johannes Harich GmbH', 'Zum Nüchel 17', '53819 Neunkirchen-Seelscheid']],
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
      ['Kontaktformular', ['Wenn Sie das Formular nutzen, werden Name, Kontaktmöglichkeit, Anliegen, Nachricht und Einwilligung zur Bearbeitung Ihrer Anfrage verarbeitet.', 'Die technische Weiterleitung per E-Mail erfolgt üüber eine Vercel Route und einen E-Mail-Dienst nur nach Konfiguration üüber Environment Variables.']],
      ['Verantwortlicher', ['Steinmetzwerkstatt Bruno Johannes Harich GmbH', 'Zum Nüchel 17, 53819 Neunkirchen-Seelscheid', 'Telefon: 02247 2386', 'E-Mail: kontakt@steinmetzwerkstatt-harich.de']],
      ['Betroffenenrechte', ['Sie haben nach Maßgabe der DSGVO Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch und Widerruf einer Einwilligung.']],
      ['Server-Logfiles', ['Beim Aufruf der Website können technisch notwendige Zugriffsdaten durch den Hostinganbieter verarbeitet werden, um die Website sicher auszuliefern.']],
      ['Rechtlicher Hinweis', ['Diese Datenschutzerklärung ist als prüfbare Grundlage strukturiert und muss vor finaler Veröffentlichung rechtlich geprüft und bei späteren Integrationen ergänzt werden.']],
    ],
  },
};

function detail(navTitle, h1, lead, image, alt) {
  return {
    template: 'detail',
    title: navTitle + ' | Steinmetzwerkstatt Harich Rhein-Sieg bis K\u00f6ln',
    description: lead + ' Pers\u00f6nliche Beratung in Neunkirchen-Seelscheid, Rhein-Sieg-Kreis und bis K\u00f6ln.',
    navTitle,
    eyebrow: 'Pers\u00f6nliche Gestaltung in Stein',
    h1,
    lead,
    image,
    alt,
    seoIntro: [
      navTitle + ' entstehen in der Steinmetzwerkstatt Harich nicht als Standardware, sondern aus pers\u00f6nlicher Beratung, Materialgef\u00fchl und handwerklicher Umsetzung.',
      'F\u00fcr Kundinnen und Kunden aus Neunkirchen-Seelscheid, dem Rhein-Sieg-Kreis und dem Raum K\u00f6ln werden Form, Stein, Oberfl\u00e4che, Schrift und Symbol so abgestimmt, dass das Ergebnis zum Menschen, zum Ort und zur gew\u00fcnschten Wirkung passt.',
      'Im Mittelpunkt steht eine ruhige, verst\u00e4ndliche Begleitung: vom ersten Gespr\u00e4ch \u00fcber den Entwurf bis zur Ausf\u00fchrung in Naturstein.',
      'Gerade bei ' + navTitle + ' hilft es, zun\u00e4chst nicht an fertige Produkte zu denken, sondern an Wirkung, Ort und Bedeutung. Daraus entsteht eine klare Richtung f\u00fcr Material, Proportion, Bearbeitung und Details.',
      'Die Beratung eignet sich f\u00fcr Menschen aus Neunkirchen-Seelscheid, Siegburg, Hennef, Lohmar, Much, Troisdorf, R\u00f6srath, Overath und K\u00f6ln, die eine individuelle Arbeit aus Naturstein suchen.'
    ],
    gallery: [
      ['Werkst\u00fcck Gesamtansicht', image],
      ['Detail von Schrift, Oberfl\u00e4che oder Symbol', '/assets/images/gestaltung-symbol.jpg'],
      ['Platzhalter f\u00fcr weiteres Referenzbild', '/assets/images/header-steinmetz-3.jpg'],
      ['Platzhalter f\u00fcr Material- oder Werkstattdetail', '/assets/images/header-steinmetz-4.jpg'],
    ],
    faq: [
      ['Wie beginnt die Beratung für ' + navTitle + '?', 'Am Anfang reicht ein erster Gedanke. Im Gespr\u00e4ch wird gekl\u00e4rt, welcher Ort, welche Wirkung und welche Gestaltung zu Ihrem Anliegen passen.'],
      ['Was ist beim Thema ' + navTitle + ' besonders wichtig?', 'Wichtig sind eine klare Gestaltungsidee, passendes Material, gute Proportionen und eine pers\u00f6nliche Beratung, die Ihre Vorstellungen ernst nimmt.'],
      ['Welche Rolle spielen Material und Oberfl\u00e4che?', 'Naturstein wirkt je nach Farbe, Struktur und Bearbeitung sehr unterschiedlich. Deshalb werden Steinart, Oberfl\u00e4che, Schrift und Details gemeinsam betrachtet.'],
      ['Kann eine Arbeit im Bereich ' + navTitle + ' individuell gestaltet werden?', 'Ja. Form, Oberfl\u00e4che, Schrift, Symbol und Details werden im Gespr\u00e4ch entwickelt und auf den jeweiligen Ort abgestimmt.'],
      ['Kann ich Fotos, Beispiele oder eigene Ideen mitbringen?', 'Ja. Bilder, Worte, Erinnerungen oder Skizzen helfen dabei, eine pers\u00f6nliche Richtung zu finden. Eine fertige Vorstellung ist nicht notwendig.'],
      ['Beraten Sie auch Kunden aus K\u00f6ln und dem Rhein-Sieg-Kreis?', 'Ja. Die Werkstatt liegt in Neunkirchen-Seelscheid und ber\u00e4t Menschen aus der Region bis K\u00f6ln.'],
    ],
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
