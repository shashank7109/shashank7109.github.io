import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  return [
    {
      url: `${baseUrl}/homepage`,
      lastModified: new Date('2026-03-15'),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];
}