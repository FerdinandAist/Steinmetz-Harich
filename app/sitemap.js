import { baseUrl, routePath, routes } from './site-data';

export default function sitemap() {
  return Object.keys(routes).map((route) => ({
    url: baseUrl + routePath(route),
    lastModified: new Date(),
  }));
}
