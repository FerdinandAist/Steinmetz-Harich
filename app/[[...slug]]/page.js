import { notFound } from 'next/navigation';
import { PageRenderer } from '../site-components';
import { baseUrl, breadcrumbSchema, faqSchema, localBusinessSchema, routePath, routes } from '../site-data';

function normalize(slug = []) {
  return slug.join('/').replace(/^\/+|\/+$/g, '');
}

export function generateStaticParams() {
  return Object.keys(routes).map((route) => ({ slug: route ? route.split('/') : [] }));
}

export async function generateMetadata({ params }) {
  const { slug = [] } = await params;
  const route = normalize(slug);
  const page = routes[route];
  if (!page) return {};
  const url = baseUrl + routePath(route);
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: routePath(route) },
    openGraph: {
      title: page.title,
      description: page.description,
      type: 'website',
      url,
      images: [{ url: page.hero?.image || page.image || '/assets/images/hero-werkstatt.jpg' }],
    },
  };
}

export default async function RoutePage({ params }) {
  const { slug = [] } = await params;
  const route = normalize(slug);
  const page = routes[route];
  if (!page) notFound();

  const schemas = [localBusinessSchema(), breadcrumbSchema(route, page), faqSchema(page)].filter(Boolean);
  return (
    <>
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <PageRenderer page={page} route={route} />
    </>
  );
}
