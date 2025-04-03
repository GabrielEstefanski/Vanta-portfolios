import { ReactNode } from 'react';

export interface ColorScheme {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  accent: string;
  surface?: string;
  border?: string;
  [key: string]: string | undefined;
}

export interface BasicInfo {
  name: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
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

export interface Typography {
  headingFont: string;
  bodyFont: string;
  baseSize: string;
  [key: string]: string;
}

export interface Layout {
  maxWidth: string;
  spacing: string;
  padding?: string;
  gap?: string;
  columns?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
}

export interface SectionConfig {
  enabled: boolean;
  order: number;
  title?: string;
  subtitle?: string;
  layout?: {
    columns?: number;
    gap?: string;
    padding?: string;
  };
  style?: {
    background?: string;
    borderRadius?: string;
    shadow?: string;
  };
  animations?: {
    entrance?: string;
    hover?: string;
    scroll?: string;
  };
}

export interface Section {
  id: string;
  title: string;
  enabled: boolean;
  order: number;
  type?: string;
  [key: string]: any;
}

export interface Sections {
  [key: string]: Section;
}

export interface TemplateProps {
  colors: ColorScheme;
  typography: Typography;
  layout: {
    maxWidth: string;
    padding: string;
    spacing: string;
    [key: string]: string;
  };
  sections: {
    [key: string]: Section;
  };
  data?: PortfolioData;
}

export interface TemplateBase {
  props: TemplateProps;
  renderBackground(): ReactNode;
  renderNavigation(): ReactNode;
  renderHeader(): ReactNode;
  renderHero(): ReactNode;
  renderAbout(): ReactNode;
  renderExperience(): ReactNode;
  renderProjects(): ReactNode;
  renderSkills(): ReactNode;
  renderContact(): ReactNode;
  renderFooter(): ReactNode;
  render(): ReactNode;
}

export interface TemplateConfig {
  id: string;
  name: string;
  description?: string;
  thumbnail?: string;
  props: TemplateProps;
} 