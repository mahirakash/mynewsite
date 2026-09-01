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
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const sections = ['about', 'work', 'process', 'services'].map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) setActive(`#${entry.target.id}`);
    }), { rootMargin: '-38% 0px -52% 0px' });
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    sections.forEach((section) => observer.observe(section));
    window.addEventListener('keydown', closeOnEscape);
    return () => { observer.disconnect(); window.removeEventListener('keydown', closeOnEscape); };
  }, []);

  return <div className={`floating-nav${open ? ' is-open' : ''}`}>
    <a className="nav-avatar" href="#top" aria-label="Back to the top"><img src="/mahir-hero-portrait.png" alt=""/></a>
    <nav aria-label="Primary navigation">{links.map(([label, href]) => <a className={active === href ? 'is-active' : ''} aria-current={active === href ? 'location' : undefined} key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav>
    <button className="nav-menu" type="button" aria-expanded={open} aria-controls="mobile-nav-links" onClick={() => setOpen(!open)}><span>{open ? 'Close' : 'Menu'}</span></button>
    <a className="nav-calendar" href="#meeting" aria-label="Schedule a call"><span aria-hidden="true">↗</span></a>
    <div className="mobile-nav-links" id="mobile-nav-links">{links.map(([label, href]) => <a className={active === href ? 'is-active' : ''} aria-current={active === href ? 'location' : undefined} key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}</div>
  </div>;
}
