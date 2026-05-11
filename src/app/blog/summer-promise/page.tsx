import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Blog2Post from './components/Blog2Post';

export const metadata: Metadata = {
  title: 'The Summer I Promised Myself',
  description:
    'On chasing internships, getting humbled by silence, and what nobody warns you about the gap between ambition and reality.',
  alternates: {
    canonical: 'https://shashankbindal.me/blog/summer-promise',
  },
  openGraph: {
    title: 'The Summer I Promised Myself | Shashank Bindal',
    description:
      'On chasing internships, getting humbled by silence, and what nobody warns you about the gap between ambition and reality.',
    url: 'https://shashankbindal.me/blog/summer-promise',
    siteName: 'Shashank Bindal — Software Engineer',
    type: 'article',
    publishedTime: '2025-05-01T00:00:00Z',
    authors: ['Shashank Bindal'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&h=630&fit=crop&q=80',
        width: 1200,
        height: 630,
        alt: 'Golden hour light over an open road',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@shashankbindal07',
    creator: '@shashankbindal07',
    title: 'The Summer I Promised Myself | Shashank Bindal',
    description:
      'On chasing internships, getting humbled by silence, and what nobody warns you about the gap between ambition and reality.',
    images: ['https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&h=630&fit=crop&q=80'],
  },
};

const ARTICLE_JSON_LD = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  '@id': 'https://shashankbindal.me/blog/summer-promise',
  headline: 'The Summer I Promised Myself',
  description:
    'On chasing internships, getting humbled by silence, and what nobody warns you about the gap between ambition and reality.',
  url: 'https://shashankbindal.me/blog/summer-promise',
  datePublished: '2025-05-01T00:00:00Z',
  dateModified: '2025-05-01T00:00:00Z',
  inLanguage: 'en',
  image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&h=630&fit=crop&q=80',
  author: {
    '@type': 'Person',
    '@id': 'https://shashankbindal.me/#person',
    name: 'Shashank Bindal',
    url: 'https://shashankbindal.me',
    sameAs: [
      'https://linkedin.com/in/shashankbindal07',
      'https://github.com/shashank7109',
    ],
  },
  publisher: {
    '@type': 'Person',
    '@id': 'https://shashankbindal.me/#person',
    name: 'Shashank Bindal',
    url: 'https://shashankbindal.me',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://shashankbindal.me/blog/summer-promise',
  },
  keywords: [
    'internship search India', 'RGIPT student', 'Shashank Bindal blog',
    'software engineering internship', 'cold emailing', 'startup internship India',
  ],
}).replace(/</g, '\\u003c');

export default function SummerPromisePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: ARTICLE_JSON_LD }}
      />
      <div className="noise-overlay" aria-hidden="true" />
      <Header />
      <main id="main-content">
        <Blog2Post />
      </main>
      <Footer />
    </>
  );
}
