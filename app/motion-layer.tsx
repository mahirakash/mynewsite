'use client';

import { useEffect } from 'react';

export default function MotionLayer() {
  useEffect(() => {
    const root = document.documentElement;
    const targets = Array.from(document.querySelectorAll('.section-head, .project, .service-list article, .principle-grid article, .contact, .intro-copy, .skill-cloud'));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.13 });
    targets.forEach((target) => observer.observe(target));

    let pointerFrame = 0;
    const move = (event: PointerEvent) => {
      cancelAnimationFrame(pointerFrame);
      pointerFrame = requestAnimationFrame(() => {
        root.style.setProperty('--mx', `${(event.clientX / window.innerWidth - 0.5).toFixed(3)}`);
        root.style.setProperty('--my', `${(event.clientY / window.innerHeight - 0.5).toFixed(3)}`);
      });
    };
    const scroll = () => root.toggleAttribute('data-scrolled', window.scrollY > 40);
    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('scroll', scroll, { passive: true });
    scroll();
    return () => {
      observer.disconnect();
      cancelAnimationFrame(pointerFrame);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('scroll', scroll);
    };
  }, []);
  return null;
}
