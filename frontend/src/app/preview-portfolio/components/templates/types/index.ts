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
  isCustom?: boolean;
  layout?: 'grid' | 'flex' | 'standard';
  columns?: number;
  gap?: string;
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

export interface CustomSection {
  id: string;
  title: string;
  elements: CustomElement[];
  layout: 'grid' | 'flex' | 'standard';
  columns?: number;
  gap?: string;
}

export interface CustomElement {
  id: string;
  type: 'card' | 'text' | 'image' | 'divider';
  content: any;
  styles?: Record<string, string>;
}

export interface CustomCard {
  title: string;
  subtitle?: string;
  content: string;
  imageUrl?: string;
  links?: { label: string; url: string }[];
}

export interface CustomText {
  content: string;
  isHeading?: boolean;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
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
  customSections?: CustomSection[];
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