import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './components/BlogPost';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Build notes, engineering reflections, and personal stories from Shashank Bindal — Full-Stack & AI Engineer at RGIPT Amethi.',
  alternates: {
    canonical: 'https://shashankbindal.me/blog',
  },
  openGraph: {
    title: 'Blog | Shashank Bindal',
    description: 'Build notes, engineering reflections, and personal stories from Shashank Bindal.',
    url: 'https://shashankbindal.me/blog',
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
    description: 'Build notes, engineering reflections, and personal stories from Shashank Bindal.',
    images: ['/og-image.png'],
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
