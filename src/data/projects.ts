import type { FeaturedProject } from '../types/portfolio';

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'adventure-companion-wearable',
    title: 'Adventure Companion Wearable',
    shortTitle: 'Adventure Wearable',
    category: 'Embedded Systems, PCB Design, Wireless Communication',
    summary:
      'An ESP32-based wearable designed for outdoor safety, health monitoring, navigation, communication, and real-time status display.',
    problem:
      'Outdoor activity can require health awareness, location visibility, alerts, and lightweight communication without relying on a single device.',
    approach:
      'Combined ESP32 control, GPS positioning, pulse-oximetry sensing, NRF24L01 wireless communication, OLED display output, audio components, haptics, and custom circuit design.',
    contribution:
      'Designed the wearable system concept, circuit integration, PCB workflow, and embedded feature set around sensing, display, notification, and communication modules.',
    technologies: [
      'ESP32',
      'ESP-IDF',
      'C/C++',
      'EasyEDA',
      'Altium Designer',
      'GPS',
      'NRF24L01',
      'I2C',
      'PCB design',
    ],
    challenges: [
      'Integrating mixed sensor, display, audio, and wireless modules in a compact wearable circuit',
      'Coordinating power, communication, and user feedback requirements across hardware modules',
    ],
    results:
      'Repository confirms circuit diagrams, schematic/PCB design assets, ESP-IDF usage, and the listed wearable modules. Field-test results to be added when verified.',
    images: [
      {
        src: 'https://raw.githubusercontent.com/Dinith132/ALL-IN-ONE-ADVENTURE-COMPANION-WEARABLE/87509a178b6350792eec762ce333d4cd9c8d5785/design/3D%20view.PNG',
        alt: '3D PCB render for the Adventure Companion Wearable',
        caption: 'PCB render from the project repository',
      },
    ],
    github:
      'https://github.com/Dinith132/ALL-IN-ONE-ADVENTURE-COMPANION-WEARABLE',
    status: 'Prototype documentation available',
    priority: 1,
  },
  {
    id: 'lstm-xai',
    title: 'Understanding LSTM Behaviour Using XAI',
    shortTitle: 'LSTM XAI',
    category: 'Research, Deep Learning, Explainable AI',
    summary:
      'A research project investigating how LSTM networks use temporal information by analysing internal states, gate activations, and feature attribution across input windows.',
    problem:
      'LSTM models can perform well on time-series tasks, but it is difficult to understand what information they remember, forget, or rely on.',
    approach:
      'Study hidden and cell states, input/forget/output gates, time-step importance, Integrated Gradients, and normalised time representations across model or dataset variants.',
    contribution:
      'Research design, model-behaviour analysis, XAI visualisation planning, and thesis-oriented interpretation workflow.',
    technologies: [
      'Python',
      'LSTM',
      'Deep learning',
      'Explainable AI',
      'Integrated Gradients',
      'Time-series analysis',
      'Jupyter Notebook',
      'Matplotlib',
    ],
    challenges: [
      'Connecting internal recurrent-state dynamics to human-readable explanations',
      'Avoiding unsupported conclusions before final thesis results are verified',
    ],
    results: 'Final result to be added from thesis.',
    images: [
      {
        src: '',
        alt: 'Placeholder for LSTM gate activation and time-step importance diagrams',
        caption: 'Research diagrams to be added',
        isPlaceholder: true,
      },
    ],
    github: 'https://github.com/Dinith132',
    status: 'Research details pending verification',
    priority: 2,
  },
  {
    id: 'inverted-pendulum',
    title: 'Inverted Pendulum Control System',
    shortTitle: 'Pendulum Control',
    category: 'Control Systems, Embedded Systems, Mechatronics',
    summary:
      'A real-time inverted-pendulum platform using an ESP32, stepper motor, magnetic encoder, and PID control to measure angular error and drive the mechanism.',
    problem:
      'Balancing a pendulum requires fast sensing, reliable motor control, repeatable data capture, and careful PID tuning.',
    approach:
      'Built a sensing and actuation pipeline around encoder feedback, stepper control, serial data logging, and iterative PID tuning support.',
    contribution:
      'Designed and tested the sensing, motor-control, data-logging, and PID-tuning pipeline for an inverted-pendulum platform.',
    technologies: [
      'ESP32',
      'C/C++',
      'NEMA 17 stepper motor',
      'DRV8825',
      'AS5600 encoder',
      'PID control',
      'MATLAB',
      'Python',
      'Serial data analysis',
    ],
    challenges: [
      'Capturing angular feedback at a useful rate for control decisions',
      'Tuning a real-time control loop without claiming unverified balancing performance',
    ],
    results:
      'Balancing result and final test data to be added when verified.',
    images: [
      {
        src: '',
        alt: 'Placeholder for inverted pendulum hardware and control-loop diagrams',
        caption: 'Hardware images to be added',
        isPlaceholder: true,
      },
    ],
    github: 'https://github.com/Dinith132',
    status: 'Verification pending',
    priority: 3,
  },
  {
    id: 'audiomuse-ai',
    title: 'AudioMuse AI',
    shortTitle: 'AudioMuse AI',
    category: 'AI Audio Understanding, Model Training, Audio Processing',
    summary:
      'An experimental AI audio system involving CLAP-based audio representation learning, dataset preparation, training optimisation, caching, duplicate handling, and audio preprocessing.',
    problem:
      'Audio intelligence systems need reliable representations, clean datasets, and repeatable preprocessing before useful search or recommendation behaviour can be trusted.',
    approach:
      'Explored audio representation workflows, preprocessing, caching, duplicate handling, and model-oriented training optimisation.',
    contribution:
      'Contribution details need repository-specific confirmation before stronger claims are published.',
    technologies: [
      'Python',
      'CLAP',
      'Audio preprocessing',
      'Dataset preparation',
      'Caching',
      'Duplicate handling',
    ],
    challenges: [
      'Keeping audio data preparation repeatable',
      'Separating verified contribution details from broader upstream project behaviour',
    ],
    results: 'Project outcomes to be added after repository verification.',
    images: [
      {
        src: '',
        alt: 'Placeholder for audio representation and clustering visuals',
        caption: 'Audio system visuals to be added',
        isPlaceholder: true,
      },
    ],
    github: 'https://github.com/Dinith132/AudioMuse-AI',
    status: 'Repository details partially verified',
    priority: 4,
  },
  {
    id: 'sams',
    title: 'Student Attendance Management System',
    shortTitle: 'SAMS',
    category: 'Full-Stack Development, Database Design',
    summary:
      'A role-based university attendance-management system supporting course administration, student approval, lecturer scheduling, attendance recording, and student reports.',
    problem:
      'Attendance workflows need structured roles, course data, lecturer assignments, and per-course reporting to stay manageable.',
    approach:
      'Built around administrator, lecturer, and student workflows with relational data, scheduling, attendance recording, reports, and AJAX-based interactions.',
    contribution:
      'Developed full-stack attendance-management workflows and database-backed interactions based on the project brief.',
    technologies: [
      'PHP',
      'MySQL or MariaDB',
      'JavaScript',
      'AJAX',
      'jQuery',
      'HTML',
      'CSS',
      'XAMPP',
    ],
    challenges: [
      'Coordinating multiple role-specific workflows',
      'Keeping attendance records and course relationships consistent',
    ],
    results: 'Repository README details to be confirmed.',
    images: [
      {
        src: '',
        alt: 'Placeholder for attendance-management interface screenshots',
        caption: 'Screenshots to be added',
        isPlaceholder: true,
      },
    ],
    github: 'https://github.com/Dinith132/SAMS',
    status: 'Repository link available',
    priority: 5,
  },
  {
    id: 'automated-examination-system',
    title: 'Automated Examination System',
    shortTitle: 'Exam System',
    category: 'Full-Stack Application',
    summary:
      'A full-stack examination-related application. Final feature description is intentionally limited until the repository can be inspected.',
    problem:
      'Educational assessment software needs clear verified workflows before publishing claims about grading, scheduling, roles, or results.',
    approach:
      'Project architecture and final capabilities to be described after repository inspection.',
    contribution:
      'Contribution details to be added after repository verification.',
    technologies: ['Technology stack to be verified'],
    challenges: ['Project constraints to be added after verification'],
    results: 'Results to be added after repository verification.',
    images: [
      {
        src: '',
        alt: 'Placeholder for automated examination system screenshots',
        caption: 'Screenshots to be added',
        isPlaceholder: true,
      },
    ],
    github: 'https://github.com/Dinith132/Automated-Examination-System',
    status: 'Repository link available',
    priority: 6,
  },
].sort((a, b) => a.priority - b.priority);
