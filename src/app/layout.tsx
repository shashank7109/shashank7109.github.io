import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/tailwind.css';

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
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://shashankpo8729.builtwithrocket.new',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://shashankpo8729.builtwithrocket.new',
    siteName: 'Shashank Bindal — Software Engineer',
    title: 'Shashank Bindal | Software Engineer',
    description: 'Full-Stack & AI/ML Engineer building web, mobile, and AI products. RAG pipelines, LangChain, AWS Bedrock, Next.js, FastAPI, Flutter.',
    images: [
      {
        url: '/assets/images/app_logo.png',
        width: 1200,
        height: 630,
        alt: 'Shashank Bindal — Software Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shashank Bindal | Software Engineer',
    description: 'Full-Stack & AI/ML Engineer building web, mobile, and AI products. RAG pipelines, LangChain, AWS Bedrock, Next.js, FastAPI, Flutter.',
    images: ['/assets/images/app_logo.png'],
    creator: '@shashankbindal07',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fshashankpo8729back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.17" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" /></body>
    </html>
  );
}