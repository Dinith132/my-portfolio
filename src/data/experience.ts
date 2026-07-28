import type { EducationItem, ExperienceItem } from '../types/portfolio';

export const experience: ExperienceItem[] = [
  {
    id: 'kingteza-internship',
    role: 'Software Engineering Intern',
    company: 'Kingteza',
    location: 'Sri Lanka',
    dates: 'Dates to be confirmed',
    summary:
      'Software engineering internship focused on backend and systems-oriented development work. Specific responsibilities and achievements will be added after verification.',
    workAreas: [
      'Backend services',
      'REST APIs',
      'Database operations',
      'Debugging',
      'Automation workflows',
      'Linux-based development',
    ],
    technologies: [
      'NestJS',
      'Redis',
      'BullMQ',
      'TypeScript',
      'Linux',
      'CI/CD',
    ],
    verificationNote:
      'Technologies and work areas are marked as pending confirmation before publishing stronger claims.',
  },
];

export const education: EducationItem[] = [
  {
    area: 'Computer Engineering',
    institution: 'Faculty of Engineering, University of Jaffna',
    location: 'Sri Lanka',
    details: [
      'Official degree title to be confirmed',
      'Start date to be confirmed',
      'Graduation date to be confirmed',
      'GPA, class, and awards not listed until verified',
    ],
  },
];
