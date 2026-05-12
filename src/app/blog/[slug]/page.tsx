import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BLOG_POSTS, getBlogPost } from '@/lib/blog-data';
import BlogPost from './components/BlogPost';
import Blog2Post from './components/Blog2Post';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://shashankbindal.me';

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: 'Shashank Bindal', url: BASE_URL }],
    alternates: {
      canonical: `${BASE_URL}/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Shashank Bindal`,
      description: post.description,
      url: `${BASE_URL}/blog/${post.slug}`,
      siteName: 'Shashank Bindal — Software Engineer',
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: ['Shashank Bindal'],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@shashankbindal07',
      creator: '@shashankbindal07',
      title: `${post.title} | Shashank Bindal`,
      description: post.description,
      images: [post.coverImage],
    },
  };
}

function buildJsonLd(slug: string) {
  const post = getBlogPost(slug);
  if (!post) return null;

  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${BASE_URL}/blog/${post.slug}`,
    headline: post.title,
    description: post.description,
    url: `${BASE_URL}/blog/${post.slug}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    inLanguage: 'en',
    image: post.coverImage,
    keywords: post.keywords.join(', '),
    author: {
      '@type': 'Person',
      '@id': `${BASE_URL}/#person`,
      name: 'Shashank Bindal',
      url: BASE_URL,
      sameAs: [
        'https://linkedin.com/in/shashankbindal07',
        'https://github.com/shashank7109',
      ],
    },
    publisher: {
      '@type': 'Person',
      '@id': `${BASE_URL}/#person`,
      name: 'Shashank Bindal',
      url: BASE_URL,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blog/${post.slug}`,
    },
    isPartOf: {
      '@type': 'Blog',
      '@id': `${BASE_URL}/blog`,
      name: 'Shashank Bindal — Blog',
      url: `${BASE_URL}/blog`,
    },
  }).replace(/</g, '\\u003c');
}

function BlogContent({ slug }: { slug: string }) {
  switch (slug) {
    case 'engineering-student-waiting-to-build':
      return <BlogPost />;
    case 'summer-promise':
      return <Blog2Post />;
    default:
      return notFound();
  }
}

export default async function BlogSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const jsonLd = buildJsonLd(slug);

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
      )}
      <div className="noise-overlay" aria-hidden="true" />
      <Header />
      <main id="main-content">
        <BlogContent slug={slug} />
      </main>
      <Footer />
    </>
  );
}
