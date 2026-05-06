import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Blog2Post from './components/Blog2Post';

export const metadata: Metadata = {
  title: 'The Summer I Promised Myself | Shashank Bindal',
  description:
    'On chasing internships, getting humbled by silence, and what nobody warns you about the gap between ambition and reality.',
  alternates: {
    canonical: '/blog/summer-promise',
  },
  openGraph: {
    title: 'The Summer I Promised Myself | Shashank Bindal',
    description:
      'On chasing internships, getting humbled by silence, and what nobody warns you about the gap between ambition and reality.',
    url: '/blog/summer-promise',
    siteName: 'Shashank Bindal — Software Engineer',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Person working at laptop — internship hustle',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Summer I Promised Myself | Shashank Bindal',
    description:
      'On chasing internships, getting humbled by silence, and what nobody warns you about the gap between ambition and reality.',
    images: ['https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=630&fit=crop'],
  },
};

export default function SummerPromisePage() {
  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <Header />
      <main id="main-content">
        <Blog2Post />
      </main>
      <Footer />
    </>
  );
}
