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
