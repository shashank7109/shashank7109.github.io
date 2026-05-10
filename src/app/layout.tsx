import React from 'react';
import CustomCursor from '@/components/CustomCursor';
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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://shashankbindal.me';

// Geo coordinates for RGIPT, Amethi, Uttar Pradesh, India
const GEO_LATITUDE  = '26.1518';
const GEO_LONGITUDE = '81.8045';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),

  // ── Core identity ─────────────────────────────────────────────────────────
  title: 'Shashank Bindal | Software Engineer',
  description:
    'Shashank Bindal — Full-Stack & AI/ML Software Engineer building web, mobile, and AI products. ' +
    'B.Tech IT at RGIPT, Amethi. Specializing in RAG pipelines, LangChain, AWS Bedrock, Next.js, FastAPI, Flutter, and scalable cloud systems.',
  keywords: [
    // Identity
    'Shashank Bindal', 'Shashank Bindal RGIPT', 'Shashank Bindal Software Engineer',
    'Shashank Bindal Portfolio', 'Shashank Bindal LinkedIn', 'Shashank Bindal GitHub',
    // Role
    'Software Engineer', 'Full Stack Developer', 'AI ML Engineer',
    'Next.js Developer', 'FastAPI Developer', 'React Developer', 'Flutter Developer',
    // Tech
    'LangChain', 'RAG Pipeline', 'AWS Bedrock', 'AWS Lambda', 'DynamoDB',
    'Python Developer', 'TypeScript', 'Node.js', 'Docker', 'Kubernetes',
    // Education / location
    'RGIPT', 'Rajiv Gandhi Institute of Petroleum Technology', 'Amethi', 'Uttar Pradesh',
    // AI/ML
    'Machine Learning', 'NLP', 'Vector Search', 'Semantic Chunking',
    // DB / infra
    'MongoDB', 'PostgreSQL', 'Redis', 'WebSockets', 'GraphQL',
    // Projects
    'QuizerAI', 'AlertyAI', 'Myschord',
  ],
  authors: [
    { name: 'Shashank Bindal', url: 'https://linkedin.com/in/shashankbindal07' },
  ],
  creator:   'Shashank Bindal',
  publisher: 'Shashank Bindal',

  // ── Crawl / indexing ──────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: SITE_URL,
  },

  // ── OpenGraph — profile type for profile search appearance ────────────────
  openGraph: {
    type: 'profile',                     // ← profile type signals this is a person page
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Shashank Bindal — Software Engineer',
    title: 'Shashank Bindal | Software Engineer',
    description:
      'Full-Stack & AI/ML Engineer building web, mobile, and AI products. ' +
      'RAG pipelines, LangChain, AWS Bedrock, Next.js, FastAPI, Flutter.',
    images: [
      {
        url: '/assets/images/shashank_image.png',
        width: 1200,
        height: 630,
        alt: 'Shashank Bindal — Software Engineer',
      },
    ],
  },

  // ── Twitter Card ──────────────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    site: '@shashankbindal07',
    creator: '@shashankbindal07',
    title: 'Shashank Bindal | Software Engineer',
    description:
      'Full-Stack & AI/ML Engineer building web, mobile, and AI products. ' +
      'RAG pipelines, LangChain, AWS Bedrock, Next.js, FastAPI, Flutter.',
    images: ['/assets/images/shashank_image.png'],
  },

  // ── Icons ─────────────────────────────────────────────────────────────────
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },

  // ── Verification ──────────────────────────────────────────────────────────
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  },

  // ── Geo meta tags — for geo / local search appearance ────────────────────
  // These map to <meta name="ICBM" />, <meta name="geo.position" />, etc.
  other: {
    // Standard ICBM / W3C Geo
    'ICBM':             `${GEO_LATITUDE}, ${GEO_LONGITUDE}`,
    'geo.position':     `${GEO_LATITUDE};${GEO_LONGITUDE}`,
    'geo.region':       'IN-UP',          // ISO 3166-2: India – Uttar Pradesh
    'geo.placename':    'Amethi, Uttar Pradesh, India',
    // OpenGraph profile fields
    'profile:first_name': 'Shashank',
    'profile:last_name':  'Bindal',
    'profile:username':   'shashank7109',
    'profile:gender':     'male',
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
        {/* ── Comprehensive ProfilePage + Person + Geo structured data ──────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              // ProfilePage — tells Google this page is about a single person
              '@type': 'ProfilePage',
              '@id': `${process.env.NEXT_PUBLIC_SITE_URL || 'https://shashankbindal.me'}/#profilepage`,
              name: 'Shashank Bindal — Software Engineer Portfolio',
              url:  process.env.NEXT_PUBLIC_SITE_URL || 'https://shashankbindal.me',
              description:
                'Portfolio of Shashank Bindal, a Full-Stack & AI/ML Software Engineer based in Amethi, Uttar Pradesh, India.',
              inLanguage: 'en',
              dateModified: new Date().toISOString().split('T')[0],
              // ── The primary entity of this profile page ────────────────────
              mainEntity: {
                '@type': 'Person',
                '@id': `${process.env.NEXT_PUBLIC_SITE_URL || 'https://shashankbindal.me'}/#person`,
                name:        'Shashank Bindal',
                givenName:   'Shashank',
                familyName:  'Bindal',
                jobTitle:    'Software Engineer',
                description:
                  'Full-Stack & AI/ML Software Engineer building web, mobile, and AI products. ' +
                  'B.Tech IT student at RGIPT, Amethi. Specializing in RAG pipelines, LangChain, ' +
                  'AWS Bedrock, Next.js, FastAPI, and Flutter.',
                url:   process.env.NEXT_PUBLIC_SITE_URL || 'https://shashankbindal.me',
                image: {
                  '@type':     'ImageObject',
                  url:         `${process.env.NEXT_PUBLIC_SITE_URL || 'https://shashankbindal.me'}/assets/images/shashank_image.png`,
                  width:       800,
                  height:      1000,
                  contentUrl:  `${process.env.NEXT_PUBLIC_SITE_URL || 'https://shashankbindal.me'}/assets/images/shashank_image.png`,
                  description: 'Shashank Bindal — Software Engineer portrait',
                },
                // ── Social / authoritative profiles (sameAs) ──────────────────
                sameAs: [
                  'https://linkedin.com/in/shashankbindal07',
                  'https://github.com/shashank7109',
                  'https://twitter.com/shashankbindal07',
                  process.env.NEXT_PUBLIC_SITE_URL || 'https://shashankbindal.me',
                ],
                // ── Location / Geo — powers geo search appearance ─────────────
                homeLocation: {
                  '@type': 'Place',
                  name:    'Amethi, Uttar Pradesh, India',
                  address: {
                    '@type':            'PostalAddress',
                    addressLocality:    'Amethi',
                    addressRegion:      'Uttar Pradesh',
                    addressCountry:     'IN',
                    postalCode:         '227405',
                  },
                  geo: {
                    '@type':    'GeoCoordinates',
                    latitude:    26.1518,
                    longitude:   81.8045,
                  },
                },
                // ── Skills / knowledge areas ──────────────────────────────────
                knowsAbout: [
                  'Full-Stack Web Development',
                  'Artificial Intelligence',
                  'Machine Learning',
                  'RAG Pipelines',
                  'LangChain',
                  'AWS Bedrock',
                  'Next.js',
                  'React',
                  'FastAPI',
                  'Flutter',
                  'Python',
                  'TypeScript',
                  'Node.js',
                  'Docker',
                  'Kubernetes',
                  'MongoDB',
                  'PostgreSQL',
                  'Natural Language Processing',
                  'Vector Search',
                ],
                // ── Education ─────────────────────────────────────────────────
                alumniOf: [
                  {
                    '@type': 'EducationalOrganization',
                    name:    'Rajiv Gandhi Institute of Petroleum Technology',
                    alternateName: 'RGIPT',
                    url:     'https://www.rgipt.ac.in',
                    address: {
                      '@type':         'PostalAddress',
                      addressLocality: 'Amethi',
                      addressRegion:   'Uttar Pradesh',
                      addressCountry:  'IN',
                    },
                  },
                ],
                // ── Nationality ───────────────────────────────────────────────
                nationality: {
                  '@type': 'Country',
                  name:    'India',
                },
              },
            }).replace(/</g, '\\u003c'),
          }}
        />
      </head>
      <body>
        <CustomCursor />
        {children}

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fshashankpo8729back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.17" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" /></body>
    </html>
  );
}