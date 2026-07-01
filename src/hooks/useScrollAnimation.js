/* FILE: src/hooks/useScrollAnimation.js */
import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Once visible, stop observing to prevent flickering
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const elementsToReveal = document.querySelectorAll(
      '.reveal, .reveal-fade, .reveal-left, .reveal-right'
    );

    elementsToReveal.forEach((el) => observer.observe(el));

    // Cleanup observer on unmount
    return () => {
      elementsToReveal.forEach((el) => observer.unobserve(el));
    };
  }, []); // Empty dependency array means this runs once on mount
};
