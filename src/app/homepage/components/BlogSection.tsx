import React from 'react';
import Link from 'next/link';

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 md:py-32 px-5 sm:px-8 md:px-12" aria-label="Blog section">
      <div className="max-w-[1200px] mx-auto">
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

          <Link
            href="/blog"
            className="text-[11px] font-display font-600 uppercase tracking-[0.14em] border rounded-full px-4 py-2 transition-colors"
            style={{ color: 'var(--fg)', borderColor: 'var(--border)' }}
          >
            Read Blog
          </Link>
        </div>

        <article className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 rounded-3xl border p-4 md:p-6" style={{ borderColor: 'var(--border)', background: 'var(--bg-card)' }}>
          <div className="md:col-span-5 overflow-hidden rounded-2xl border" style={{ borderColor: 'var(--border)' }}>
            <div className="aspect-[4/3] md:aspect-[5/4]">
              <img
                src="https://picsum.photos/seed/student-builder/900/700"
                alt="Blog preview stock image"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-7 flex flex-col justify-between">
            <div>
              <h3 className="font-display font-700 text-xl md:text-2xl leading-tight" style={{ color: 'var(--fg)' }}>
                The engineering student who got tired of waiting to build something real
              </h3>
              <p className="mt-4 text-sm md:text-base leading-7" style={{ color: 'var(--fg-muted)' }}>
                On the words that stop you, the words that keep you going, and trying to build something people actually use.
                Open the full article and upvote it if it resonates.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <Link
                href="/blog"
                className="text-[11px] font-display font-600 uppercase tracking-[0.14em] border rounded-full px-4 py-2 transition-colors"
                style={{ color: 'var(--fg)', borderColor: 'var(--border)' }}
              >
                Read this
              </Link>
              <span className="text-[10px] uppercase tracking-[0.15em] font-display" style={{ color: 'var(--fg-subtle)' }}>
                One upvote per person
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
