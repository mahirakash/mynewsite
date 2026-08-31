'use client';
import { useEffect } from 'react';
import $ from 'jquery';

export default function MotionLayer() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const selector = '.orange .inner > *, .work .inner > *, .process .inner > *, .offer .inner > *, .meeting .inner > *, .footcard';
    const items = Array.from(document.querySelectorAll(selector));
    $(selector).addClass('reveal-item');
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      $(entry.target).addClass('is-visible');
      observer.unobserve(entry.target);
    }), { threshold: .12, rootMargin: '0px 0px -7% 0px' });
    items.forEach((item) => observer.observe(item));

    $('.button').on('pointermove.motion', function (event) {
      const native = event.originalEvent as PointerEvent;
      const rect = this.getBoundingClientRect();
      $(this).css('transform', `translate(${(native.clientX - rect.left - rect.width / 2) * .12}px,${(native.clientY - rect.top - rect.height / 2) * .12}px)`);
    }).on('pointerleave.motion', function () { $(this).css('transform', ''); });

    $('.case').on('pointermove.motion', function (event) {
      const native = event.originalEvent as PointerEvent;
      const rect = this.getBoundingClientRect();
      this.style.setProperty('--px', ((native.clientX - rect.left) / rect.width * 100).toFixed(1) + '%');
      this.style.setProperty('--py', ((native.clientY - rect.top) / rect.height * 100).toFixed(1) + '%');
    });

    let frame = 0;
    const parallax = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--mx', ((event.clientX / innerWidth) - .5).toFixed(3));
        document.documentElement.style.setProperty('--my', ((event.clientY / innerHeight) - .5).toFixed(3));
      });
    };
    window.addEventListener('pointermove', parallax, { passive: true });
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', parallax);
      $('.button').off('.motion');
      $('.case').off('.motion');
    };
  }, []);
  return null;
}
