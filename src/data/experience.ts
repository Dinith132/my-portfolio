import type { EducationItem, ExperienceItem } from '../types/portfolio';

export const experience: ExperienceItem[] = [
  {
    id: 'kingteza-internship',
    role: 'Software Engineering Intern',
    company: 'Kingteza Software Solutions',
    location: 'Colombo, Sri Lanka',
    dates: 'Nov 2025 – Oct 2026',
    summary:
      'One-year full-stack internship on a live production platform, covering React, NestJS services, third-party integrations, event-driven messaging, gRPC microservices, and cloud CI/CD.',
    workAreas: [
      'Built the Exely channel manager integration in NestJS and TypeScript with PostgreSQL and Redis/BullMQ: property configuration, room and rate mapping, and automated booking ingestion with queued scheduling, retries, and failure recovery, keeping OTA bookings in sync for 50+ bookings/day per live hotel deployment.',
      'Developed event-driven staff messaging and task workflows with Firebase Cloud Functions, Pub/Sub, WhatsApp, and Telegram so staff can complete tasks by message reply.',
      'Built a task management agent with an MCP server, n8n, and WhatsApp so housekeeping and floor staff can manage tasks through chat without logging into the PMS dashboard.',
      'Deployed an event-driven audit logging pipeline with Azure Functions and GitHub Actions CI/CD to capture operation events for production diagnostics and compliance tracking.',
      'Designed gRPC/protobuf service contracts across property, booking, and billing microservices, and applied the Saga pattern to coordinate multi-step workflows.',
      'Contributed to CI/CD automation: Remote Config-as-code deployments via the Firebase CLI and automated multi-site Firebase Hosting releases on merge to production.',
    ],
    technologies: [
      'React',
      'NestJS',
      'TypeScript',
      'PostgreSQL',
      'Redis',
      'BullMQ',
      'Firebase',
      'Azure Functions',
      'GitHub Actions',
      'gRPC',
    ],
  },
];

export const education: EducationItem[] = [
  {
    area: 'BSc. Engineering (Hons.) in Computer Engineering',
    institution: 'University of Jaffna',
    location: 'Sri Lanka',
    details: ['2022 – 2026'],
  },
];
