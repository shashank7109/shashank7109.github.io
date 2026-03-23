'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';

const ROLES = ['Full-Stack Engineer', 'AI-ML Builder', 'Open Source Contributor'];

export default function HeroSection() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);
  const [heroVisible, setHeroVisible] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const tiltRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  // Hero entrance
  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 120);
    return () => clearTimeout(t);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText.length < current.length) {
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 60);
    } else if (!isDeleting && displayText.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length - 1)), 35);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  // Custom cursor
  useEffect(() => {
    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return;

    const moveMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
    };

    const animateRing = () => {
      ringPos.current.x += (mouseRef.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (mouseRef.current.y - ringPos.current.y) * 0.12;
      ring.style.left = `${ringPos.current.x}px`;
      ring.style.top = `${ringPos.current.y}px`;
      requestAnimationFrame(animateRing);
    };
    animateRing();

    const addHover = () => document.body.classList.add('cursor-hover');
    const removeHover = () => document.body.classList.remove('cursor-hover');

    document.addEventListener('mousemove', moveMouse);
    document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    return () => {
      document.removeEventListener('mousemove', moveMouse);
    };
  }, []);

  // 3D tilt effect — smooth spring via rAF
  const handleImageMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = imageRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    tiltRef.current = { x: dy * -18, y: dx * 18 };
  }, []);

  const handleImageMouseLeave = useCallback(() => {
    setIsHoveringImage(false);
    tiltRef.current = { x: 0, y: 0 };
  }, []);

  const handleImageMouseEnter = useCallback(() => {
    setIsHoveringImage(true);
  }, []);

  // Spring animation loop for tilt
  useEffect(() => {
    let current = { x: 0, y: 0 };
    const animate = () => {
      const target = tiltRef.current;
      current.x += (target.x - current.x) * 0.1;
      current.y += (target.y - current.y) * 0.1;
      setTilt({ x: current.x, y: current.y });
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <>
      {/* Custom cursor */}
      <div className="cursor" aria-hidden="true">
        <div ref={cursorDotRef} className="cursor-dot absolute" style={{ willChange: 'left, top' }} />
        <div ref={cursorRingRef} className="cursor-ring absolute" style={{ willChange: 'left, top' }} />
      </div>

      {/* Hero section */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        aria-label="Hero"
        style={{ background: 'var(--bg)' }}
      >
        {/* Animated grain/noise overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px',
            opacity: 0.045,
            animation: 'grainShift 0.5s steps(1) infinite',
          }}
          aria-hidden="true"
        />

        {/* Subtle radial glow */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 65% 50%, rgba(200,255,0,0.04) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        {/* Main content — split layout */}
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-14 lg:px-20 pt-32 pb-28 flex flex-col lg:flex-row items-center lg:items-center gap-16 lg:gap-0">

          {/* LEFT — Text content */}
          <div className="flex-1 flex flex-col justify-center">

            {/* Eyebrow tag */}
            <div
              className={`flex items-center gap-3 mb-10 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '0.1s' }}
            >
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
              <span
                className="text-[10px] font-display font-600 uppercase tracking-[0.25em]"
                style={{ color: 'var(--fg-muted)' }}
              >
                Available for collaboration
              </span>
            </div>

            {/* Name — pixel display */}
            <h1
              className={`transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: '0.2s' }}
            >
              <span
                className="block font-pixel"
                style={{
                  fontSize: 'clamp(2.8rem, 7.5vw, 7.2rem)',
                  letterSpacing: '0.02em',
                  lineHeight: '1.05',
                  background: 'linear-gradient(170deg, #ffffff 0%, rgba(255,255,255,0.75) 40%, rgba(255,255,255,0.12) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Shashank
              </span>
              {/* Accent dot */}
              <span
                className="inline-block w-2 h-2 md:w-2.5 md:h-2.5 rounded-full mt-3"
                style={{ background: 'var(--accent)', display: 'block' }}
              />
            </h1>

            {/* Horizontal rule */}
            <div
              className={`mt-10 mb-8 h-[1px] transition-all duration-1000 ${heroVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{
                background: 'linear-gradient(90deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 60%, transparent 100%)',
                transitionDelay: '0.35s',
                width: heroVisible ? '100%' : '0%',
              }}
            />

            {/* Typewriter roles */}
            <div
              className={`flex items-center gap-3 mb-8 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '0.4s', minHeight: '2rem' }}
            >
              <span
                className="text-sm md:text-base font-display font-500 tracking-wide"
                style={{ color: 'var(--fg-muted)' }}
              >
                <span style={{ color: 'var(--accent)' }}>/ </span>
                {displayText}
                <span
                  className="inline-block w-[2px] h-[1.1em] ml-[2px] align-middle"
                  style={{
                    background: 'var(--accent)',
                    animation: 'blink 1.1s step-end infinite',
                    verticalAlign: 'middle',
                  }}
                />
              </span>
            </div>

            {/* Description */}
            <p
              className={`max-w-md font-body text-sm md:text-base leading-relaxed transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ color: 'var(--fg-muted)', transitionDelay: '0.5s', lineHeight: '1.75' }}
            >
              Building across web, mobile &amp;{' '}
              <span style={{ color: 'var(--accent)' }}>AI/ML</span>
              {' '}— from production RAG pipelines to cross-platform apps. Startup collaborator. Open source contributor.
            </p>

            {/* CTA row */}
            <div
              className={`mt-10 flex items-center gap-8 flex-wrap transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '0.62s' }}
            >
              <a
                href="https://github.com/shashank7109"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 cursor-none"
                data-cursor
              >
                <span className="text-[10px] font-display font-600 uppercase tracking-[0.18em] transition-colors duration-300" style={{ color: 'var(--fg-muted)' }}>
                  GitHub
                </span>
                <div className="h-[1px] w-6 transition-all duration-500 group-hover:w-12" style={{ background: 'var(--fg-muted)' }} />
              </a>
              <a
                href="https://linkedin.com/in/shashankbindal07"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 cursor-none"
                data-cursor
              >
                <span className="text-[10px] font-display font-600 uppercase tracking-[0.18em] transition-colors duration-300" style={{ color: 'var(--fg-muted)' }}>
                  LinkedIn
                </span>
                <div className="h-[1px] w-6 transition-all duration-500 group-hover:w-12" style={{ background: 'var(--fg-muted)' }} />
              </a>
              <a
                href="/assets/resume/Shashank_resume.pdf"
                download
                className="group flex items-center gap-2 cursor-none"
                data-cursor
              >
                <span className="text-[10px] font-display font-600 uppercase tracking-[0.18em] transition-colors duration-300 group-hover:text-white" style={{ color: 'var(--fg-muted)' }}>
                  Résumé
                </span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="transition-transform duration-300 group-hover:translate-y-0.5" style={{ color: 'var(--fg-muted)' }}>
                  <path d="M5 1v6M2 5l3 3 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT — 3D tilt portrait */}
          <div
            className={`lg:w-[420px] xl:w-[480px] flex-shrink-0 flex justify-center lg:justify-end transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '0.55s' }}
          >
            <div
              ref={imageRef}
              onMouseMove={handleImageMouseMove}
              onMouseEnter={handleImageMouseEnter}
              onMouseLeave={handleImageMouseLeave}
              style={{
                perspective: '900px',
                cursor: 'none',
              }}
              data-cursor
            >
              {/* Tilt wrapper */}
              <div
                style={{
                  transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isHoveringImage ? 1.03 : 1})`,
                  transition: 'transform 0.08s linear',
                  transformStyle: 'preserve-3d',
                  willChange: 'transform',
                  position: 'relative',
                }}
              >
                {/* Glow behind image */}
                <div
                  style={{
                    position: 'absolute',
                    inset: '-20px',
                    background: 'radial-gradient(ellipse at center, rgba(200,255,0,0.12) 0%, transparent 70%)',
                    opacity: isHoveringImage ? 1 : 0,
                    transition: 'opacity 0.5s ease',
                    borderRadius: '24px',
                    pointerEvents: 'none',
                    zIndex: 0,
                  }}
                />

                {/* Image container */}
                <div
                  style={{
                    position: 'relative',
                    width: '320px',
                    height: '400px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: isHoveringImage
                      ? '0 40px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(200,255,0,0.15), inset 0 1px 0 rgba(255,255,255,0.1)'
                      : '0 24px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)',
                    transition: 'box-shadow 0.4s ease',
                    zIndex: 1,
                  }}
                >
                  <Image
                    src="/assets/images/Gemini_Generated_Image_g713hcg713hcg713.png"
                    alt="Shashank Bindal — pixelated portrait"
                    fill
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      imageRendering: 'pixelated',
                      filter: `grayscale(${isHoveringImage ? 20 : 60}%) contrast(1.1) brightness(${isHoveringImage ? 0.95 : 0.8})`,
                      transition: 'filter 0.5s ease',
                    }}
                    priority
                  />

                  {/* Scanline overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.12) 4px)',
                      pointerEvents: 'none',
                      zIndex: 2,
                      opacity: isHoveringImage ? 0.4 : 0.7,
                      transition: 'opacity 0.4s ease',
                    }}
                  />

                  {/* Holographic shimmer on hover */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: `linear-gradient(
                        ${135 + tilt.y * 2}deg,
                        rgba(200,255,0,0.06) 0%,
                        transparent 40%,
                        rgba(100,200,255,0.04) 70%,
                        transparent 100%
                      )`,
                      pointerEvents: 'none',
                      zIndex: 3,
                      opacity: isHoveringImage ? 1 : 0,
                      transition: 'opacity 0.3s ease',
                    }}
                  />

                  {/* Bottom gradient fade */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '40%',
                      background: 'linear-gradient(to top, rgba(8,8,8,0.8) 0%, transparent 100%)',
                      pointerEvents: 'none',
                      zIndex: 2,
                    }}
                  />
                </div>

                {/* Floating label */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-14px',
                    right: '-14px',
                    background: 'rgba(8,8,8,0.9)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    padding: '8px 14px',
                    backdropFilter: 'blur(12px)',
                    zIndex: 4,
                    transform: 'translateZ(20px)',
                    opacity: isHoveringImage ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  <span
                    className="text-[10px] font-display font-600 uppercase tracking-[0.15em]"
                    style={{ color: 'var(--accent)' }}
                  >
                    B.Tech IT · RGIPT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator — bottom center */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 ${heroVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '1s' }}
          aria-hidden="true"
        >
          <div
            style={{
              width: '1px',
              height: '56px',
              position: 'relative',
              overflow: 'hidden',
              background: 'rgba(255,255,255,0.08)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '45%',
                background: 'rgba(200,255,0,0.5)',
                animation: 'scrollLine 2s ease-in-out infinite',
              }}
            />
          </div>
          <span
            className="text-[8px] font-display font-500 uppercase tracking-[0.25em]"
            style={{ color: 'var(--fg-subtle)' }}
          >
            scroll
          </span>
        </div>

        <style jsx>{`
          @keyframes scrollLine {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(300%); }
          }
          @keyframes grainShift {
            0%, 100% { transform: translate(0, 0); }
            10% { transform: translate(-1%, -1%); }
            20% { transform: translate(1%, 0); }
            30% { transform: translate(0, 1%); }
            40% { transform: translate(-1%, 1%); }
            50% { transform: translate(1%, -1%); }
            60% { transform: translate(0, 0); }
            70% { transform: translate(-1%, 0); }
            80% { transform: translate(1%, 1%); }
            90% { transform: translate(0, -1%); }
          }
        `}</style>
      </section>
    </>
  );
}