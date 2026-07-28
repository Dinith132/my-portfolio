import type { ProfileLink } from '../types/portfolio';

const assetPath = (path: string) => {
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  return `${base}${path.replace(/^\//, '')}`;
};

export const profile = {
  name: 'Dinith Priyankara',
  role: 'Computer Engineer',
  location: 'Sri Lanka',
  headline:
    'I build software that connects intelligence, systems, and the physical world.',
  summary:
    'Computer Engineer with experience in backend development, embedded systems, automation, control systems, and applied AI.',
  focusAreas: ['Embedded Systems', 'Backend Engineering', 'Explainable AI'],
  image: {
    src: assetPath('img/img1.jpg'),
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
    href: '#email-to-be-confirmed',
    value: 'Preferred email to be confirmed',
    isPlaceholder: true,
    isDisabled: true,
  },
  {
    name: 'cv',
    label: 'CV',
    href: '#cv-to-be-confirmed',
    value: 'CV file to be confirmed',
    isPlaceholder: true,
    isDisabled: true,
  },
];
