'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const moveMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
    };

    let rafId: number;
    const animateRing = () => {
      ringPos.current.x += (mouseRef.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (mouseRef.current.y - ringPos.current.y) * 0.12;
      ring.style.left = `${ringPos.current.x}px`;
      ring.style.top = `${ringPos.current.y}px`;
      rafId = requestAnimationFrame(animateRing);
    };
    animateRing();

    const addHover = () => document.body.classList.add('cursor-hover');
    const removeHover = () => document.body.classList.remove('cursor-hover');

    document.addEventListener('mousemove', moveMouse);

    // Attach hover listeners to all interactive elements
    const attachHover = () => {
      document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
        el.addEventListener('mouseenter', addHover);
        el.addEventListener('mouseleave', removeHover);
      });
    };
    attachHover();

    // Re-attach on DOM changes (handles client-side navigation)
    const observer = new MutationObserver(attachHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', moveMouse);
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="cursor" aria-hidden="true">
      <div ref={dotRef} className="cursor-dot absolute" style={{ willChange: 'left, top' }} />
      <div ref={ringRef} className="cursor-ring absolute" style={{ willChange: 'left, top' }} />
    </div>
  );
}
