import type { FeaturedProject } from '../types/portfolio';
import { assetPath } from './profile';

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'cogniterm',
    title: 'Cogniterm',
    shortTitle: 'Cogniterm',
    category: 'Desktop, Electron, Python',
    summary:
      'A Linux desktop terminal assistant with an Electron front end and a Python backend on AWS EC2.',
    problem:
      'Shell tasks are easier to automate when a desktop terminal can run commands through a dedicated backend instead of a manual session.',
    approach:
      'Built an Electron front end and a Python backend on AWS EC2, using IPC-based command execution and Linux system integration.',
    contribution:
      'Built the desktop terminal assistant, including the Electron front end, Python backend, and IPC command execution.',
    technologies: ['Electron', 'Python', 'AWS EC2', 'IPC', 'Linux'],
    challenges: [
      'Connecting the Electron front end to the Python backend through IPC while executing commands on Linux.',
    ],
    results:
      'A Linux desktop terminal that automates shell tasks through IPC-based command execution and Linux system integration.',
    images: [
      {
        src: assetPath('img/projects/cogniterm.png'),
        alt: 'Cogniterm desktop window showing a Linux terminal and system summary',
        caption: 'Cogniterm desktop',
      },
    ],
    video: assetPath('video/cogniterm.mp4'),
    github: 'https://github.com/Dinith132/Cogniterm',
    status: 'Jul – Nov 2025',
    priority: 1,
  },
  {
    id: 'lang-tool-builder',
    title: 'AI Reasoning Agent with Tool Integration',
    shortTitle: 'Reasoning Agent',
    category: 'Python, LangGraph',
    summary:
      'A LangGraph agent that routes multi-step questions to symbolic math, web search, and other tool APIs.',
    problem:
      'Multi-step questions need different tools, and a failed or unusable tool response should not end the run.',
    approach:
      'Routed questions to symbolic math, web search, and other tool APIs, with retry-once and fallback handling when a tool fails or returns unusable data.',
    contribution:
      'Built the LangGraph agent and the tool-routing flow, including retry and fallback behaviour.',
    technologies: ['Python', 'LangGraph'],
    challenges: [
      'Recovering when a tool fails or returns data the agent cannot use.',
    ],
    results:
      'The agent routes multi-step questions to the right tool and falls back after a single retry when that tool fails.',
    images: [
      {
        src: assetPath('img/projects/lang-tool-builder.jpg'),
        alt: 'Preview image for the LangGraph reasoning agent',
        caption: 'Preview image',
      },
    ],
    github: 'https://github.com/Dinith132/Lang_Tool-Builder',
    status: 'Jun – Jul 2025',
    priority: 2,
  },
  {
    id: 'music-jam',
    title: 'WebRTC Music Jam Platform',
    shortTitle: 'Music Jam',
    category: 'Node.js, Socket.IO, WebRTC',
    summary:
      'A real-time platform for multi-user audio and video jam sessions.',
    problem:
      'A jam session needs rooms that can be created and cleaned up, plus signaling so participants can connect.',
    approach:
      'Handled room creation and cleanup on the server, and used Socket.IO signaling between participants.',
    contribution:
      'Built the real-time platform, including server-side rooms and Socket.IO signaling for audio and video sessions.',
    technologies: ['Node.js', 'Socket.IO', 'WebRTC'],
    challenges: [
      'Keeping room lifecycle and participant signaling aligned for live audio and video.',
    ],
    results:
      'Participants join multi-user audio and video jam sessions through server-managed rooms and Socket.IO signaling.',
    images: [
      {
        src: assetPath('img/projects/music-jam.jpg'),
        alt: 'Preview image for the WebRTC music jam platform',
        caption: 'Preview image',
      },
    ],
    github: 'https://github.com/Dinith132/music-jam-platform',
    status: 'Mar – Jun 2025',
    priority: 3,
  },
  {
    id: 'automated-examination-system',
    title: 'Automated Examination System',
    shortTitle: 'Exam System',
    category: 'Full-Stack, Spring Boot, PostgreSQL',
    summary:
      'A full-stack exam platform with authentication, role-based access, a normalized PostgreSQL schema, and REST APIs.',
    problem:
      'An exam platform needs authenticated roles for administrators, lecturers, and students, with consistent stored data behind the API.',
    approach:
      'Built authentication and role-based access for administrators, lecturers, and students on a normalized PostgreSQL schema with REST APIs.',
    contribution:
      'Built the full-stack exam platform, including authentication, role-based access, the database schema, and the REST API.',
    technologies: ['Spring Boot', 'PostgreSQL', 'REST APIs'],
    challenges: [
      'Keeping administrator, lecturer, and student access consistent with a normalized schema.',
    ],
    results:
      'Administrators, lecturers, and students use authenticated roles against a normalized PostgreSQL schema and REST APIs.',
    images: [
      {
        src: assetPath('img/projects/exam-system.jpg'),
        alt: 'Preview image for the automated examination system',
        caption: 'Preview image',
      },
    ],
    github: 'https://github.com/Dinith132/Automated-Examination-System',
    status: 'Jan – Jun 2025',
    priority: 4,
  },
].sort((a, b) => a.priority - b.priority);
