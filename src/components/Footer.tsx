import React from 'react';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="footer-minimal py-8 px-8 md:px-12">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Logo + copyright */}
        <div className="flex items-center gap-3">
          <AppLogo size={22} />
          <span className="font-display text-[11px] font-500 text-white/25 tracking-[0.06em] uppercase">
            © 2026 Shashank Bindal
          </span>
        </div>

        {/* Right: Legal */}
        <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com/in/shashankbindal07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-display font-500 uppercase tracking-[0.08em] text-white/25 hover:text-white/60 transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/shashank7109"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-display font-500 uppercase tracking-[0.08em] text-white/25 hover:text-white/60 transition-colors duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}