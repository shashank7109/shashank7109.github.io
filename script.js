document.addEventListener('DOMContentLoaded', () => {

  /* ── Custom Cursor ──────────────────────────────────────────────────────── */
  const dot  = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  if (dot && ring && window.innerWidth > 768) {
    const mouse = { x: 0, y: 0 };
    const ringPos = { x: 0, y: 0 };

    document.addEventListener('mousemove', e => {
      mouse.x = e.clientX; mouse.y = e.clientY;
      dot.style.left = e.clientX + 'px';
      dot.style.top  = e.clientY + 'px';
    });

    (function animRing() {
      ringPos.x += (mouse.x - ringPos.x) * 0.12;
      ringPos.y += (mouse.y - ringPos.y) * 0.12;
      ring.style.left = ringPos.x + 'px';
      ring.style.top  = ringPos.y + 'px';
      requestAnimationFrame(animRing);
    })();

    document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }

  /* ── Nav scroll blur ────────────────────────────────────────────────────── */
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  /* ── Smooth scroll from nav ─────────────────────────────────────────────── */
  document.querySelectorAll('[data-scroll]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-scroll');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* ── Hero entrance ──────────────────────────────────────────────────────── */
  setTimeout(() => {
    document.querySelectorAll('.hero-anim').forEach(el => el.classList.add('visible'));
  }, 120);

  /* ── Typewriter ─────────────────────────────────────────────────────────── */
  const ROLES = ['Full-Stack Engineer', 'AI-ML Builder', 'Open Source Contributor'];
  const roleEl = document.getElementById('typewriter');
  if (roleEl) {
    let roleIdx = 0, charIdx = 0, deleting = false;
    function type() {
      const current = ROLES[roleIdx];
      if (!deleting && charIdx < current.length) {
        roleEl.textContent = current.slice(0, ++charIdx);
        setTimeout(type, 60);
      } else if (!deleting && charIdx === current.length) {
        setTimeout(() => { deleting = true; type(); }, 2200);
      } else if (deleting && charIdx > 0) {
        roleEl.textContent = current.slice(0, --charIdx);
        setTimeout(type, 35);
      } else {
        deleting = false;
        roleIdx = (roleIdx + 1) % ROLES.length;
        setTimeout(type, 100);
      }
    }
    type();
  }

  /* ── 3D Tilt portrait ───────────────────────────────────────────────────── */
  const tiltWrap  = document.querySelector('.tilt-wrap');
  const tiltInner = document.querySelector('.tilt-inner');
  if (tiltWrap && tiltInner) {
    const tiltTarget = { x: 0, y: 0 };
    const tiltCurrent = { x: 0, y: 0 };

    tiltWrap.addEventListener('mousemove', e => {
      const r  = tiltWrap.getBoundingClientRect();
      const dx = (e.clientX - r.left  - r.width  / 2) / (r.width  / 2);
      const dy = (e.clientY - r.top   - r.height / 2) / (r.height / 2);
      tiltTarget.x = dy * -18;
      tiltTarget.y = dx *  18;
    });
    tiltWrap.addEventListener('mouseleave', () => { tiltTarget.x = 0; tiltTarget.y = 0; });

    (function animTilt() {
      tiltCurrent.x += (tiltTarget.x - tiltCurrent.x) * 0.1;
      tiltCurrent.y += (tiltTarget.y - tiltCurrent.y) * 0.1;
      tiltInner.style.transform = `rotateX(${tiltCurrent.x}deg) rotateY(${tiltCurrent.y}deg)`;
      requestAnimationFrame(animTilt);
    })();
  }

  /* ── Mouse-tracking glow on project cards ───────────────────────────────── */
  document.querySelectorAll('.project-card').forEach(card => {
    const glow = card.querySelector('.card-glow');
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      glow.style.left = (e.clientX - r.left) + 'px';
      glow.style.top  = (e.clientY - r.top)  + 'px';
    });
  });

  /* ── Work accordion ─────────────────────────────────────────────────────── */
  document.querySelectorAll('.accordion-item').forEach((item, i) => {
    const btn  = item.querySelector('.accordion-btn');
    const body = item.querySelector('.accordion-body');
    // open first by default
    if (i === 0) { item.classList.add('open'); body.classList.add('open'); }

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // close all
      document.querySelectorAll('.accordion-item').forEach(a => {
        a.classList.remove('open');
        a.querySelector('.accordion-body').classList.remove('open');
      });
      // open clicked if it was closed
      if (!isOpen) {
        item.classList.add('open');
        body.classList.add('open');
      }
    });
  });

  /* ── Project card expand ────────────────────────────────────────────────── */
  document.querySelectorAll('.card-expand-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const card   = btn.closest('.project-card');
      const detail = card.querySelector('.card-detail');
      const isOpen = detail.classList.contains('open');
      detail.classList.toggle('open', !isOpen);
      btn.classList.toggle('active', !isOpen);
    });
  });

  /* ── Scroll reveal ──────────────────────────────────────────────────────── */
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.querySelectorAll('.reveal-up').forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), i * 70);
      });
      // section lines
      entry.target.querySelectorAll('.about-header-line').forEach(el => el.classList.add('visible'));
      revealObs.unobserve(entry.target);
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('section, footer').forEach(s => revealObs.observe(s));

  /* ── Contact card hover (inline style override) ─────────────────────────── */
  document.querySelectorAll('.contact-link-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.borderColor = 'var(--border-hov)';
      card.style.background  = '#161616';
    });
    card.addEventListener('mouseleave', () => {
      card.style.borderColor = 'var(--border)';
      card.style.background  = 'var(--bg-card)';
    });
  });

});
