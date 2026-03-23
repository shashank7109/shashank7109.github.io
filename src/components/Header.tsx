'use client';

import React, { useEffect, useState } from 'react';
import AppLogo from '@/components/ui/AppLogo';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] px-8 md:px-12 py-5 flex justify-between items-center transition-all duration-500 ${scrolled ? 'nav-blur' : ''}`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <AppLogo size={28} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display font-bold text-sm tracking-tight text-white cursor-none"
          style={{ letterSpacing: '-0.02em' }}
        >
          SHASHANK<span className="text-white/30">.</span>
        </button>
      </div>

      {/* Nav links */}
      <div className="flex items-center gap-8 md:gap-10">
        <button
          onClick={() => scrollTo('work')}
          className="text-[11px] font-display font-500 uppercase tracking-[0.12em] text-white/40 hover:text-white/90 transition-colors duration-300 cursor-none hidden sm:block"
        >
          Work
        </button>
        <button
          onClick={() => scrollTo('open-source')}
          className="text-[11px] font-display font-500 uppercase tracking-[0.12em] text-white/40 hover:text-white/90 transition-colors duration-300 cursor-none hidden sm:block"
        >
          Open Source
        </button>
        <button
          onClick={() => scrollTo('contact')}
          className="group flex items-center gap-3 text-white cursor-none"
        >
          <span className="text-[11px] font-display font-600 uppercase tracking-[0.12em] text-white/60 group-hover:text-white transition-colors duration-300">
            Contact
          </span>
          <div className="w-8 h-[1px] bg-white/30 group-hover:w-12 group-hover:bg-white transition-all duration-400" />
        </button>
      </div>
    </nav>
  );
}
