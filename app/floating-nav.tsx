'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

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
  const [docked, setDocked] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const sections = ['about', 'work', 'process', 'services'].map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) setActive(`#${entry.target.id}`);
    }), { rootMargin: '-38% 0px -52% 0px' });
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    const updateDock = () => setDocked(window.scrollY > 48);
    sections.forEach((section) => observer.observe(section));
    window.addEventListener('keydown', closeOnEscape);
    window.addEventListener('scroll', updateDock, { passive: true });
    updateDock();
    return () => { observer.disconnect(); window.removeEventListener('keydown', closeOnEscape); window.removeEventListener('scroll', updateDock); };
  }, []);

  if (!mounted) return null;

  return createPortal(<><header className={`top-navigation${docked ? ' is-hidden' : ''}`}>
    <a className="top-nav-logo" href="#top" aria-label="Mahir — back to top">MAHIR</a>
    <nav aria-label="Hero navigation">{links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav>
    <a className="top-nav-call" href="#meeting"><span aria-hidden="true">▦</span> Schedule a call</a>
  </header><div className={`floating-nav${open ? ' is-open' : ''}${docked ? ' is-docked' : ' is-top'}`}>
    <a className="nav-avatar" href="#top" aria-label="Back to the top"><img src="/mahir-hero-cutout.png" alt=""/></a>
    <nav aria-label="Primary navigation">{links.map(([label, href]) => <a className={active === href ? 'is-active' : ''} aria-current={active === href ? 'location' : undefined} key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav>
    <button className="nav-menu" type="button" aria-expanded={open} aria-controls="mobile-nav-links" onClick={() => setOpen(!open)}><span>{open ? 'Close' : 'Menu'}</span></button>
    <a className="nav-calendar" href="#meeting" aria-label="Schedule a call"><span aria-hidden="true">↗</span></a>
    <div className="mobile-nav-links" id="mobile-nav-links">{links.map(([label, href]) => <a className={active === href ? 'is-active' : ''} aria-current={active === href ? 'location' : undefined} key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}</div>
  </div></>, document.body);
}
