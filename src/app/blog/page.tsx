import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './components/BlogPost';

export const metadata: Metadata = {
  title: 'Blog | Shashank Bindal',
  description: 'Build notes, lessons, and engineering reflections from Shashank Bindal.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Blog | Shashank Bindal',
    description: 'Build notes, lessons, and engineering reflections from Shashank Bindal.',
    url: '/blog',
    siteName: 'Shashank Bindal — Software Engineer',
    type: 'article',
    images: [
      {
        url: '/assets/images/shashank_image.png',
        width: 1200,
        height: 630,
        alt: 'Shashank Bindal portrait',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Shashank Bindal',
    description: 'Build notes, lessons, and engineering reflections from Shashank Bindal.',
    images: ['/assets/images/shashank_image.png'],
  },
};

export default function BlogPage() {
  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <Header />
      <main id="main-content">
        <BlogPost />
      </main>
      <Footer />
    </>
  );
}
