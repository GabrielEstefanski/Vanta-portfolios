export type TemplateType = 'minimalist' | 'vanta' | 'professional' | 'modern' | 'zenith' | 'cosmos' | 'hyperion' | 'nebula';

export interface ColorScheme {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  accent: string;
  [key: string]: string;
}

export interface TypographyConfig {
  headingFont: string;
  bodyFont: string;
  baseSize: string;
  [key: string]: string;
}

export interface LayoutConfig {
  maxWidth: string;
  padding: string;
  spacing: string;
  [key: string]: string;
}

export interface Section {
  id: string;
  title: string;
  type: string;
  enabled: boolean;
  order: number;
}

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  about: string;
  email: string;
  phone: string;
  location: string;
  experiences: Experience[];
  projects: Project[];
  skills: Skill[];
  education?: Education[];
  certificates?: Certificate[];
}

export interface TemplateProps {
  data?: PortfolioData;
  colors: ColorScheme;
  typography: TypographyConfig;
  layout: LayoutConfig;
}

export interface TemplateConfig {
  id: string;
  name: string;
  description: string;
  template: TemplateType;
  sections: Section[];
  colors: ColorScheme;
  layout: LayoutConfig;
  typography: TypographyConfig;
} 