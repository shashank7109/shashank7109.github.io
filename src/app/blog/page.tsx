import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BLOG_POSTS } from '@/lib/blog-data';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://shashankbindal.me';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Build notes, engineering reflections, and personal stories from Shashank Bindal — Full-Stack & AI Engineer at RGIPT Amethi.',
  alternates: {
    canonical: `${BASE_URL}/blog`,
  },
  openGraph: {
    title: 'Blog | Shashank Bindal',
    description:
      'Build notes, engineering reflections, and personal stories from Shashank Bindal.',
    url: `${BASE_URL}/blog`,
    siteName: 'Shashank Bindal — Software Engineer',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Shashank Bindal — Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@shashankbindal07',
    creator: '@shashankbindal07',
    title: 'Blog | Shashank Bindal',
    description:
      'Build notes, engineering reflections, and personal stories from Shashank Bindal.',
    images: ['/og-image.png'],
  },
};

const BLOG_LIST_JSON_LD = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Blog',
  '@id': `${BASE_URL}/blog`,
  name: 'Shashank Bindal — Blog',
  description:
    'Build notes, engineering reflections, and personal stories from Shashank Bindal — Full-Stack & AI Engineer.',
  url: `${BASE_URL}/blog`,
  inLanguage: 'en',
  author: {
    '@type': 'Person',
    '@id': `${BASE_URL}/#person`,
    name: 'Shashank Bindal',
    url: BASE_URL,
  },
  blogPost: BLOG_POSTS.map((post) => ({
    '@type': 'BlogPosting',
    '@id': `${BASE_URL}/blog/${post.slug}`,
    headline: post.title,
    description: post.description,
    url: `${BASE_URL}/blog/${post.slug}`,
    datePublished: post.publishedAt,
    image: post.coverImage,
  })),
}).replace(/</g, '\\u003c');

const COVER_IMAGES: Record<string, string> = {
  'engineering-student-waiting-to-build':
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&h=700&fit=crop&q=80',
  'summer-promise':
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=900&h=700&fit=crop&q=80',
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });
}

export default function BlogPage() {
  const sorted = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: BLOG_LIST_JSON_LD }}
      />
      <div className="noise-overlay" aria-hidden="true" />
      <Header />
      <main id="main-content">
        <section className="pt-24 md:pt-32 pb-20 px-5 sm:px-8 md:px-12" aria-label="Blog posts">
          <div className="max-w-[780px] mx-auto">
            {/* Header */}
            <div className="mb-12">
              <span
                className="text-[10px] font-display font-600 uppercase tracking-[0.25em]"
                style={{ color: 'var(--fg-muted)' }}
              >
                Blog
              </span>
              <h1
                className="mt-3 font-display font-800"
                style={{
                  color: 'var(--fg)',
                  fontSize: 'clamp(1.6rem, 4.2vw, 3rem)',
                  letterSpacing: '-0.03em',
                }}
              >
                Build Notes
              </h1>
              <p
                className="mt-4 text-base leading-7"
                style={{ color: 'var(--fg-muted)' }}
              >
                Engineering reflections, personal stories, and lessons from building in public.
              </p>
            </div>

            {/* Post list */}
            <div className="flex flex-col gap-6">
              {sorted.map((post) => (
                <article
                  key={post.slug}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-5 rounded-3xl border p-4 sm:p-6"
                  style={{ borderColor: 'var(--border)', background: 'var(--bg-card)' }}
                >
                  {/* Cover image */}
                  <div
                    className="sm:col-span-4 overflow-hidden rounded-2xl border"
                    style={{ borderColor: 'var(--border)' }}
                  >
                    <div className="aspect-[4/3]">
                      <img
                        src={COVER_IMAGES[post.slug] ?? post.coverImage}
                        alt={post.title}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="sm:col-span-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className="text-[10px] font-display font-600 uppercase tracking-[0.2em]"
                          style={{ color: 'var(--fg-subtle)' }}
                        >
                          {formatDate(post.publishedAt)}
                        </span>
                        <span style={{ color: 'var(--border-hover)' }}>·</span>
                        <span
                          className="text-[10px] font-display font-600 uppercase tracking-[0.2em]"
                          style={{ color: 'var(--fg-subtle)' }}
                        >
                          {post.category}
                        </span>
                      </div>
                      <h2
                        className="font-display font-700 text-xl leading-tight"
                        style={{ color: 'var(--fg)' }}
                      >
                        {post.title}
                      </h2>
                      <p
                        className="mt-3 text-sm leading-7"
                        style={{ color: 'var(--fg-muted)' }}
                      >
                        {post.description}
                      </p>
                    </div>
                    <div className="mt-5">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-[11px] font-display font-600 uppercase tracking-[0.14em] border rounded-full px-4 py-2 transition-colors"
                        style={{ color: 'var(--fg)', borderColor: 'var(--border)' }}
                      >
                        Read this
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
