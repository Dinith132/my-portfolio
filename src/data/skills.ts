import type { SkillGroup } from '../types/portfolio';

export const skillGroups: SkillGroup[] = [
  {
    id: 'languages-frameworks',
    title: 'Languages and frameworks',
    purpose: 'Application code across the interface and the service layer.',
    level: 'Strong working experience',
    skills: [
      'TypeScript',
      'NestJS',
      'Node.js',
      'React',
      'Java',
      'Spring Boot',
      'Python',
    ],
  },
  {
    id: 'backend-data',
    title: 'Backend and data',
    purpose: 'APIs, queues, and the data stores behind production services.',
    level: 'Strong working experience',
    skills: ['PostgreSQL', 'Redis', 'BullMQ', 'REST APIs', 'gRPC', 'protobuf'],
  },
  {
    id: 'architecture',
    title: 'Architecture',
    purpose: 'How services share work, permissions, and multi-step flows.',
    level: 'Working knowledge',
    skills: [
      'Microservices',
      'Event-driven systems',
      'Saga pattern',
      'Role-based access control',
    ],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud and DevOps',
    purpose: 'Shipping and running services beyond a local machine.',
    level: 'Working knowledge',
    skills: ['Firebase', 'Azure', 'AWS', 'Docker', 'GitHub Actions', 'Linux'],
  },
  {
    id: 'ai-automation',
    title: 'AI and automation',
    purpose: 'Agents, tool use, and workflow automation around software.',
    level: 'Working knowledge',
    skills: ['LangGraph', 'MCP', 'n8n', 'AI-assisted development'],
  },
];
