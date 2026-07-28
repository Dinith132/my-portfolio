import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { RefObject } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function useGsapSectionTransitions(scope: RefObject<HTMLElement>) {
  useGSAP(
    () => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

      if (reduceMotion.matches) {
        return;
      }

      const sections = gsap.utils
        .toArray<HTMLElement>('main > section')
        .filter((section) => !['home', 'work'].includes(section.id));

      sections.forEach((section) => {
        const eyebrow = section.querySelector('p');
        const heading = section.querySelector('h2');
        const cards = section.querySelectorAll('article, [data-gsap-card]');

        if (eyebrow || heading) {
          gsap.from([eyebrow, heading].filter(Boolean), {
            y: 44,
            autoAlpha: 0,
            filter: 'blur(12px)',
            duration: 1,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 72%',
              toggleActions: 'play none none reverse',
            },
          });
        }

        if (cards.length > 0) {
          gsap.from(cards, {
            y: 46,
            autoAlpha: 0,
            rotateX: 4,
            duration: 0.9,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 62%',
              toggleActions: 'play none none reverse',
            },
          });
        }
      });

      ScrollTrigger.refresh();
    },
    { scope },
  );
}
