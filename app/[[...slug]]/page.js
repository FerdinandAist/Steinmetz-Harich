import fs from 'node:fs';
import path from 'node:path';
import { notFound } from 'next/navigation';

const ROOT = process.cwd();

function pageFileFromSlug(slug = []) {
  if (!slug.length) return path.join(ROOT, 'index.html');
  return path.join(ROOT, ...slug, 'index.html');
}

function readPage(slug = []) {
  const file = pageFileFromSlug(slug);
  if (!fs.existsSync(file)) return null;
  return fs.readFileSync(file, 'utf8');
}

function extractBody(html) {
  const body = /<body[^>]*>([\s\S]*?)<\/body>/i.exec(html)?.[1] || html;
  return body.replace(/<script[\s\S]*?<\/script>/gi, '');
}

function extractMeta(html, name) {
  return new RegExp('<meta name="' + name + '" content="([^"]*)"', 'i').exec(html)?.[1] || '';
}

function extractJsonLd(html) {
  const scripts = [];
  const pattern = /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = pattern.exec(html)) !== null) {
    const json = match[1].trim();
    if (json) scripts.push(json);
  }
  return scripts;
}

function titleOf(html) {
  return /<title>([^<]*)<\/title>/i.exec(html)?.[1] || 'Steinmetzwerkstatt Harich';
}

function discoverPages() {
  const pages = [[]];
  function walk(dir, parts = []) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      if (['.git', '.next', 'node_modules', 'app', 'assets', 'public', 'tmp', 'nicht in github laden'].includes(entry.name)) continue;
      const nextParts = [...parts, entry.name];
      const indexFile = path.join(dir, entry.name, 'index.html');
      if (fs.existsSync(indexFile)) pages.push(nextParts);
      walk(path.join(dir, entry.name), nextParts);
    }
  }
  walk(ROOT);
  return pages;
}

export function generateStaticParams() {
  return discoverPages().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug = [] } = await params;
  const html = readPage(slug);
  if (!html) return {};
  const description = extractMeta(html, 'description');
  return {
    title: titleOf(html),
    description,
    alternates: { canonical: '/' + slug.join('/') + (slug.length ? '/' : '') },
    openGraph: {
      title: titleOf(html),
      description,
      type: 'website',
    },
  };
}

export default async function LegacyPage({ params }) {
  const { slug = [] } = await params;
  const html = readPage(slug);
  if (!html) notFound();
  const jsonLd = extractJsonLd(html);

  return (
    <>
      {jsonLd.map((json, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: json }}
        />
      ))}
      <div dangerouslySetInnerHTML={{ __html: extractBody(html) }} />
    </>
  );
}
