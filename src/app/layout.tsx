import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Manrope, DM_Sans, Pixelify_Sans } from 'next/font/google';
import '../styles/tailwind.css';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
});

const pixelifySans = Pixelify_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-pixel',
  display: 'swap',
});
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Shashank Bindal | Software Engineer',
  description: 'Shashank Bindal — Full-Stack & AI/ML Software Engineer building web, mobile, and AI products. B.Tech IT at RGIPT. Specializing in RAG pipelines, LangChain, AWS Bedrock, Next.js, FastAPI, Flutter, and scalable cloud systems.',
  keywords: [
    'Shashank Bindal', 'Software Engineer', 'Full Stack Developer', 'AI ML Engineer',
    'Next.js Developer', 'FastAPI', 'React Developer', 'Flutter Developer',
    'LangChain', 'RAG Pipeline', 'AWS Bedrock', 'AWS Lambda', 'DynamoDB',
    'Python Developer', 'TypeScript', 'Node.js', 'Docker', 'Kubernetes',
    'RGIPT', 'Rajiv Gandhi Institute of Petroleum Technology',
    'Machine Learning', 'NLP', 'Vector Search', 'Semantic Chunking',
    'MongoDB', 'PostgreSQL', 'Redis', 'WebSockets', 'GraphQL',
    'Portfolio', 'Software Engineering Intern', 'QuizerAI', 'AlertyAI'
  ],
  authors: [{ name: 'Shashank Bindal', url: 'https://linkedin.com/in/shashankbindal07' }],
  creator: 'Shashank Bindal',
  publisher: 'Shashank Bindal',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://shashankbindal.me',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://shashankbindal.me',
    siteName: 'Shashank Bindal — Software Engineer',
    title: 'Shashank Bindal | Software Engineer',
    description: 'Full-Stack & AI/ML Engineer building web, mobile, and AI products. RAG pipelines, LangChain, AWS Bedrock, Next.js, FastAPI, Flutter.',
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
    title: 'Shashank Bindal | Software Engineer',
    description: 'Full-Stack & AI/ML Engineer building web, mobile, and AI products. RAG pipelines, LangChain, AWS Bedrock, Next.js, FastAPI, Flutter.',
    images: ['/assets/images/shashank_image.png'],
    creator: '@shashankbindal07',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
  },
  verification: {
    google: 'your-google-site-verification-id-here', // Replace with your actual GSC verification ID
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${dmSans.variable} ${pixelifySans.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var saved=localStorage.getItem('portfolio-theme');var theme=(saved==='light'||saved==='dark')?saved:(window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');document.documentElement.setAttribute('data-theme',theme);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Shashank Bindal',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'https://shashankpo8729.builtwithrocket.new',
              jobTitle: 'Software Engineer',
              sameAs: ['https://linkedin.com/in/shashankbindal07'],
            }),
          }}
        />
      </head>
      <body>{children}

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fshashankpo8729back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.17" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" /></body>
    </html>
  );
}