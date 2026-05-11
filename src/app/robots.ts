import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://shashankbindal.me';
  return {
    rules: [
      {
        // Standard crawlers + all AI crawlers — allow everything
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        // GPT / OpenAI crawler — explicit allow for GEO
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        // Claude / Anthropic crawler
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      {
        // Perplexity AI crawler
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        // Google Bard / Gemini
        userAgent: 'Google-Extended',
        allow: '/',
      },
      {
        // Meta AI crawler
        userAgent: 'FacebookBot',
        allow: '/',
      },
      {
        // Cohere crawler
        userAgent: 'cohere-ai',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}