import React from 'react';
import Link from 'next/link';

const BLOG_POSTS = [
  {
    id: 'blog-1',
    href: '/blog',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&h=700&fit=crop&q=80',
    imageAlt: 'Misty mountain landscape at dawn',
    date: 'April 2026',
    tag: 'Personal',
    title: 'The engineering student who got tired of waiting to build something real',
    excerpt:
      'On the words that stop you, the words that keep you going, and trying to build something people actually use. Open the full article and upvote it if it resonates.',
  },
  {
    id: 'blog-2',
    href: '/blog/summer-promise',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=900&h=700&fit=crop&q=80',
    imageAlt: 'Golden hour light over an open road',
    date: 'May 2025',
    tag: 'Personal',
    title: "I promised myself I wouldn't go home this summer.",
    excerpt:
      'On chasing internships, getting humbled by silence, and what nobody warns you about the gap between ambition and reality.',
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 md:py-32 px-5 sm:px-8 md:px-12" aria-label="Blog section">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between gap-5 mb-10">
          <div>
            <span
              className="text-[10px] font-display font-600 uppercase tracking-[0.25em]"
              style={{ color: 'var(--fg-muted)' }}
            >
              Blog
            </span>
            <h2
              className="mt-3 font-display font-800"
              style={{
                color: 'var(--fg)',
                fontSize: 'clamp(1.6rem, 4.2vw, 3rem)',
                letterSpacing: '-0.03em',
              }}
            >
              Build Notes
            </h2>
          </div>
        </div>

        {/* Blog posts grid */}
        <div className="flex flex-col gap-6">
          {BLOG_POSTS.map((post, index) => (
            <article
              key={post.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 rounded-3xl border p-4 md:p-6"
              style={{ borderColor: 'var(--border)', background: 'var(--bg-card)' }}
            >
              {/* Image */}
              <div className="md:col-span-5 overflow-hidden rounded-2xl border" style={{ borderColor: 'var(--border)' }}>
                <div className="aspect-[4/3] md:aspect-[5/4]">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="text-[10px] font-display font-600 uppercase tracking-[0.2em]"
                      style={{ color: 'var(--fg-subtle)' }}
                    >
                      {post.date}
                    </span>
                    <span style={{ color: 'var(--border-hover)' }}>·</span>
                    <span
                      className="text-[10px] font-display font-600 uppercase tracking-[0.2em]"
                      style={{ color: 'var(--fg-subtle)' }}
                    >
                      {post.tag}
                    </span>
                  </div>
                  <h3
                    className="font-display font-700 text-xl md:text-2xl leading-tight"
                    style={{ color: 'var(--fg)' }}
                  >
                    {post.title}
                  </h3>
                  <p
                    className="mt-4 text-sm md:text-base leading-7"
                    style={{ color: 'var(--fg-muted)' }}
                  >
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <Link
                    href={post.href}
                    className="text-[11px] font-display font-600 uppercase tracking-[0.14em] border rounded-full px-4 py-2 transition-colors"
                    style={{ color: 'var(--fg)', borderColor: 'var(--border)' }}
                  >
                    Read this
                  </Link>
                  <span
                    className="text-[10px] uppercase tracking-[0.15em] font-display"
                    style={{ color: 'var(--fg-subtle)' }}
                  >
                    One upvote per person
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
