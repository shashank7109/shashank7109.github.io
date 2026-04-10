'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const pathname = usePathname();
  const isBlogPage = pathname?.startsWith('/blog');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme');
    if (current === 'light' || current === 'dark') {
      setTheme(current);
      return;
    }
    setTheme('dark');
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] px-5 md:px-12 py-4 md:py-5 flex justify-between items-center transition-all duration-500 ${scrolled ? 'nav-blur' : ''}`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <AppLogo size={28} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
        <Link
          href="/"
          className="font-display font-bold text-sm tracking-tight cursor-none"
          style={{ color: 'var(--fg)', letterSpacing: '-0.02em' }}
        >
          SHASHANK<span style={{ color: 'var(--fg-subtle)' }}>.</span>
        </Link>
      </div>

      {/* Nav links */}
      <div className="flex items-center gap-3 sm:gap-5 md:gap-8">
        {!isBlogPage && (
          <button
            onClick={() => scrollTo('work')}
            className="text-[11px] font-display font-500 uppercase tracking-[0.12em] transition-colors duration-300 cursor-none hidden sm:block"
            style={{ color: 'var(--fg-subtle)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--fg)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--fg-subtle)')}
          >
            Work
          </button>
        )}

        {!isBlogPage && (
          <button
            onClick={() => scrollTo('blog')}
            className="text-[11px] font-display font-500 uppercase tracking-[0.12em] transition-colors duration-300 cursor-none"
            style={{ color: 'var(--fg-subtle)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--fg)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--fg-subtle)')}
          >
            Blog
          </button>
        )}

        {isBlogPage && (
          <Link
            href="/"
            className="text-[11px] font-display font-500 uppercase tracking-[0.12em] transition-colors duration-300 cursor-none"
            style={{ color: 'var(--fg-subtle)' }}
          >
            Portfolio
          </Link>
        )}

        <button
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          className="text-[11px] font-display font-600 uppercase tracking-[0.12em] transition-colors duration-300 cursor-none border px-3 py-1.5 rounded-full"
          style={{ color: 'var(--fg-muted)', borderColor: 'var(--border-hover)' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--fg)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--fg-muted)')}
        >
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>

        <button
          onClick={() => (isBlogPage ? window.scrollTo({ top: 0, behavior: 'smooth' }) : scrollTo('contact'))}
          className="group flex items-center gap-2 md:gap-3 cursor-none"
          style={{ color: 'var(--fg)' }}
        >
          <span className="text-[11px] font-display font-600 uppercase tracking-[0.12em] transition-colors duration-300 hidden sm:block" style={{ color: 'var(--fg-muted)' }}>
            {isBlogPage ? 'Top' : 'Contact'}
          </span>
          <div className="w-8 h-[1px] group-hover:w-12 transition-all duration-400" style={{ background: 'var(--border-hover)' }} />
        </button>
      </div>
    </nav>
  );
}
