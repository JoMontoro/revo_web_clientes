import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    const el = ref.current;
    if (el) {
      const targets = el.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
      targets.forEach((target) => observer.observe(target));
      if (el.classList.contains('reveal') || el.classList.contains('reveal-left') || el.classList.contains('reveal-right') || el.classList.contains('reveal-scale')) {
        observer.observe(el);
      }
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}
