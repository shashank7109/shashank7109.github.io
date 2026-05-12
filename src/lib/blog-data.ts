const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://shashankbindal.me';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  coverImage: string;
  keywords: string[];
  category: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'engineering-student-waiting-to-build',
    title: 'The engineering student who got tired of waiting to build something real',
    description:
      'On the words that stop you, the words that keep you going, and trying to build something people actually use.',
    publishedAt: '2026-04-01T00:00:00Z',
    updatedAt: '2026-04-01T00:00:00Z',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=630&fit=crop&q=80',
    keywords: [
      'engineering student India', 'RGIPT student', 'Shashank Bindal blog',
      'AlertyAI', 'QuizerAI', 'student builder', 'startup India',
      'validation imposter syndrome', 'software engineering college India',
    ],
    category: 'Personal',
  },
  {
    slug: 'summer-promise',
    title: 'The Summer I Promised Myself',
    description:
      'On chasing internships, getting humbled by silence, and what nobody warns you about the gap between ambition and reality.',
    publishedAt: '2025-05-01T00:00:00Z',
    updatedAt: '2025-05-01T00:00:00Z',
    coverImage: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&h=630&fit=crop&q=80',
    keywords: [
      'internship search India', 'RGIPT student', 'Shashank Bindal blog',
      'software engineering internship', 'cold emailing', 'startup internship India',
    ],
    category: 'Personal',
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getBlogPostUrl(slug: string): string {
  return `${BASE_URL}/blog/${slug}`;
}
