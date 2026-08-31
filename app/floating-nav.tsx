'use client';

import { useEffect, useState } from 'react';

const links = [
  ['About', '#about'],
  ['Case studies', '#work'],
  ['Process', '#process'],
  ['Services', '#services'],
  ['Contact', 'mailto:mahir.akash@gmail.com'],
];

export default function FloatingNav() {
  const [docked, setDocked] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hero = document.querySelector('.hero-editorial');
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) => setDocked(!entry.isIntersecting), { threshold: 0.08 });
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    observer.observe(hero);
    window.addEventListener('keydown', closeOnEscape);
    return () => { observer.disconnect(); window.removeEventListener('keydown', closeOnEscape); };
  }, []);

  return <div className={`floating-nav${docked ? ' is-docked' : ''}${open ? ' is-open' : ''}`}>
    <a className="nav-avatar" href="#top" aria-label="Back to the top"><img src="/mahir-portrait.png" alt=""/></a>
    <nav aria-label="Primary navigation">{links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav>
    <button className="nav-menu" type="button" aria-expanded={open} aria-controls="mobile-nav-links" onClick={() => setOpen(!open)}><span>{open ? 'Close' : 'Menu'}</span></button>
    <a className="nav-calendar" href="#meeting" aria-label="Schedule a call"><span aria-hidden="true">↗</span></a>
    <div className="mobile-nav-links" id="mobile-nav-links">{links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}</div>
  </div>;
}
