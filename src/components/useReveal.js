import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    // small delay so DOM has painted before we observe
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
            }
          });
        },
        { threshold: 0.07, rootMargin: '0px 0px -30px 0px' }
      );

      const elements = document.querySelectorAll(
        '.reveal, .reveal-left, .reveal-right, .reveal-scale'
      );
      elements.forEach((el) => {
        el.classList.remove('revealed'); // reset on page change
        observer.observe(el);
      });

      return () => observer.disconnect();
    }, 60);

    return () => clearTimeout(timer);
  }, [pathname]);
}
