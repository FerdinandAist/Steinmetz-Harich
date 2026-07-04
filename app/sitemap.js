const BASE_URL = 'https://www.steinmetzwerkstatt-harich.de';

const urls = [
  '/',
  '/gedenksteine/',
  '/gedenksteine/innovative-gedenksteine/',
  '/gedenksteine/klassische-gedenksteine/',
  '/gedenksteine/findlinge-basaltsaeulen/',
  '/gedenksteine/steinlichter/',
  '/gestaltung/',
  '/steinobjekte/',
  '/steinobjekte/brunnen/',
  '/steinobjekte/schalen/',
  '/steinobjekte/skulpturen/',
  '/steinobjekte/accessoires/',
  '/werkstatt/',
  '/mahnender-muehlstein-papst-franziskus/',
  '/kontakt/',
  '/impressum/',
  '/datenschutz/',
];

export default function sitemap() {
  return urls.map((url) => ({
    url: BASE_URL + url,
    lastModified: new Date(),
  }));
}
