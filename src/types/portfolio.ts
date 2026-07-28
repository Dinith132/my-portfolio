export type LinkName = 'github' | 'linkedin' | 'email' | 'cv';

export interface ProfileLink {
  name: LinkName;
  label: string;
  href: string;
  value: string;
  isPlaceholder?: boolean;
  isDisabled?: boolean;
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
  isPlaceholder?: boolean;
}

export interface FeaturedProject {
  id: string;
  title: string;
  shortTitle: string;
  category: string;
  summary: string;
  problem: string;
  approach: string;
  contribution: string;
  technologies: string[];
  challenges: string[];
  results: string;
  images: ProjectImage[];
  github: string;
  live?: string;
  status: string;
  priority: number;
}

export interface ResearchProfile {
  title: string;
  status: string;
  researchQuestion: string;
  motivation: string;
  methodology: string[];
  modelArchitecture: string[];
  xaiTechniques: string[];
  visualResults: string[];
  thesisLink: string;
  teamMembers: string[];
  supervisor: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  dates: string;
  summary: string;
  workAreas: string[];
  technologies: string[];
  verificationNote: string;
}

export type SkillLevel =
  | 'Strong working experience'
  | 'Working knowledge'
  | 'Academic or project exposure';

export interface SkillGroup {
  id: string;
  title: string;
  purpose: string;
  level: SkillLevel;
  skills: string[];
}

export interface EducationItem {
  area: string;
  institution: string;
  location: string;
  details: string[];
}

export interface JourneyItem {
  id: string;
  title: string;
  description: string;
  status: string;
}
