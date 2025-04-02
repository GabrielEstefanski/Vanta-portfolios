export interface ColorScheme {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  textSecondary: string;
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
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  link: string;
}

export interface Certificate {
  id: number;
  name: string;
  issuer: string;
  date: string;
  link: string;
}

export interface PortfolioData {
  basicInfo: BasicInfo;
  experiences: Experience[];
  projects: Project[];
  certificates: Certificate[];
}

export interface SectionConfig {
  id: string;
  enabled: boolean;
  title?: string;
  order: number;
  customFields?: Record<string, any>;
}

export interface LayoutConfig {
  maxWidth: string;
  padding: string;
  spacing: string;
}

export interface TypographyConfig {
  headingFont: string;
  bodyFont: string;
  baseSize: string;
}

export interface TemplateProps {
  data: PortfolioData;
  colors: ColorScheme;
  sections: SectionConfig[];
  layout: LayoutConfig;
  typography: TypographyConfig;
} 