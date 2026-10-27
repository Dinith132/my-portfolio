import type { ProfileLink } from '../types/portfolio';

export const assetPath = (path: string) => {
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  return `${base}${path.replace(/^\//, '')}`;
};

export const profile = {
  name: 'Dinith Priyankara',
  role: 'Software Engineer',
  location: 'Badulla, Sri Lanka',
  headline: 'I build full-stack software for real products.',
  summary:
    'Software engineer and full-stack developer with a one-year internship on a live production platform: React, NestJS, event-driven services, and cloud CI/CD.',
  focusAreas: ['Full-Stack Development', 'Backend Engineering', 'Cloud and Automation'],
  image: {
    src: assetPath('img/profile.jpg'),
    alt: 'Portrait of Dinith Priyankara',
  },
};

export const profileLinks: ProfileLink[] = [
  {
    name: 'github',
    label: 'GitHub',
    href: 'https://github.com/Dinith132',
    value: 'github.com/Dinith132',
  },
  {
    name: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dinith-priyankara-782b2420b',
    value: 'linkedin.com/in/dinith-priyankara-782b2420b',
  },
  {
    name: 'email',
    label: 'Email',
    href: 'mailto:dinithp132@gmail.com',
    value: 'dinithp132@gmail.com',
  },
  {
    name: 'phone',
    label: 'Phone',
    href: 'tel:+94769006586',
    value: '+94 76 900 6586',
  },
  {
    name: 'cv',
    label: 'CV',
    href: assetPath('Dinith-Priyankara-CV.pdf'),
    value: 'Download CV',
  },
];
