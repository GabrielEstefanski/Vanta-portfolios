import { ColorScheme, LayoutConfig, Section, TemplateConfig, TypographyConfig } from '@/app/preview-portfolio/components/templates/types';

export interface SectionConfig {
  id: string;
  enabled: boolean;
  title?: string;
  order: number;
  customFields?: Record<string, any>;
}

export type TemplateType = 'minimalist' | 'vanta' | 'professional' | 'modern';

export interface TemplateConfig {
  id: string;
  name: string;
  description: string;
  template: TemplateType;
  sections: SectionConfig[];
  colors: ColorScheme;
  layout: {
    maxWidth: string;
    padding: string;
    spacing: string;
  };
  typography: {
    headingFont: string;
    bodyFont: string;
    baseSize: string;
  };
}

export const defaultConfigs: Record<string, TemplateConfig> = {
  professional: {
    id: 'professional',
    name: 'Profissional',
    description: 'Layout tradicional adequado para ambientes corporativos',
    template: 'professional',
    sections: [
      { id: 'header', title: 'Cabeçalho', type: 'header', enabled: true, order: 0 },
      { id: 'about', title: 'Sobre', type: 'about', enabled: true, order: 1 },
      { id: 'experience', title: 'Experiência', type: 'experience', enabled: true, order: 2 },
      { id: 'projects', title: 'Projetos', type: 'projects', enabled: true, order: 3 },
      { id: 'skills', title: 'Habilidades', type: 'skills', enabled: true, order: 4 },
      { id: 'education', title: 'Educação', type: 'education', enabled: true, order: 5 },
      { id: 'contact', title: 'Contato', type: 'contact', enabled: true, order: 6 }
    ],
    colors: {
      primary: '#0f766e',
      secondary: '#0369a1',
      background: '#f8fafc',
      text: '#334155',
      accent: '#dc2626'
    },
    layout: {
      maxWidth: '5xl',
      padding: 'p-8',
      spacing: 'space-y-8'
    },
    typography: {
      headingFont: 'font-medium',
      bodyFont: 'font-normal',
      baseSize: 'text-base'
    }
  },
  modern: {
    id: 'modern',
    name: 'Moderno',
    description: 'Design contemporâneo com elementos visuais criativos',
    template: 'modern',
    sections: [
      { id: 'header', title: 'Cabeçalho', type: 'header', enabled: true, order: 0 },
      { id: 'about', title: 'Sobre', type: 'about', enabled: true, order: 1 },
      { id: 'experience', title: 'Experiência', type: 'experience', enabled: true, order: 2 },
      { id: 'projects', title: 'Projetos', type: 'projects', enabled: true, order: 3 },
      { id: 'skills', title: 'Habilidades', type: 'skills', enabled: true, order: 4 },
      { id: 'education', title: 'Educação', type: 'education', enabled: true, order: 5 },
      { id: 'contact', title: 'Contato', type: 'contact', enabled: true, order: 6 }
    ],
    colors: {
      primary: '#ec4899',
      secondary: '#7e22ce',
      background: '#131313',
      text: '#f3f4f6',
      accent: '#10b981'
    },
    layout: {
      maxWidth: '7xl',
      padding: 'p-8',
      spacing: 'space-y-12'
    },
    typography: {
      headingFont: 'font-bold',
      bodyFont: 'font-normal',
      baseSize: 'text-base'
    }
  },
  minimalist: {
    id: 'minimalist',
    name: 'Minimalista',
    description: 'Design limpo e minimalista com foco no conteúdo',
    template: 'minimalist',
    sections: [
      { id: 'header', title: 'Cabeçalho', type: 'header', enabled: true, order: 0 },
      { id: 'about', title: 'Sobre', type: 'about', enabled: true, order: 1 },
      { id: 'experience', title: 'Experiência', type: 'experience', enabled: true, order: 2 },
      { id: 'projects', title: 'Projetos', type: 'projects', enabled: true, order: 3 },
      { id: 'skills', title: 'Habilidades', type: 'skills', enabled: true, order: 4 },
      { id: 'education', title: 'Educação', type: 'education', enabled: true, order: 5 },
      { id: 'contact', title: 'Contato', type: 'contact', enabled: true, order: 6 }
    ],
    colors: {
      primary: '#2563eb',
      secondary: '#4338ca',
      background: '#ffffff',
      text: '#1f2937',
      accent: '#f59e0b'
    },
    layout: {
      maxWidth: '5xl',
      padding: 'p-8',
      spacing: 'space-y-12'
    },
    typography: {
      headingFont: 'font-semibold',
      bodyFont: 'font-normal',
      baseSize: 'text-base'
    }
  },
  vanta: {
    id: 'vanta',
    name: 'Vanta',
    description: 'Layout moderno com efeitos de fundo dinâmicos',
    template: 'vanta',
    sections: [
      { id: 'header', title: 'Cabeçalho', type: 'header', enabled: true, order: 0 },
      { id: 'about', title: 'Sobre', type: 'about', enabled: true, order: 1 },
      { id: 'experience', title: 'Experiência', type: 'experience', enabled: true, order: 2 },
      { id: 'projects', title: 'Projetos', type: 'projects', enabled: true, order: 3 },
      { id: 'skills', title: 'Habilidades', type: 'skills', enabled: true, order: 4 },
      { id: 'education', title: 'Educação', type: 'education', enabled: true, order: 5 },
      { id: 'contact', title: 'Contato', type: 'contact', enabled: true, order: 6 }
    ],
    colors: {
      primary: '#8b5cf6',
      secondary: '#6366f1',
      background: '#0f172a',
      text: '#f1f5f9',
      accent: '#22d3ee'
    },
    layout: {
      maxWidth: '7xl',
      padding: 'p-8',
      spacing: 'space-y-16'
    },
    typography: {
      headingFont: 'font-bold',
      bodyFont: 'font-light',
      baseSize: 'text-base'
    }
  }
};

export const defaultConfig: TemplateConfig = {
  template: 'minimalist',
  colors: {
    primary: '#3B82F6',
    secondary: '#10B981',
    accent: '#8B5CF6',
    background: '#FFFFFF',
    text: '#1F2937',
    textSecondary: '#6B7280',
  },
  sections: [
    {
      id: 'about',
      title: 'Sobre',
      enabled: true,
      order: 1,
    },
    {
      id: 'experience',
      title: 'Experiência',
      enabled: true,
      order: 2,
    },
    {
      id: 'projects',
      title: 'Projetos',
      enabled: true,
      order: 3,
    },
    {
      id: 'skills',
      title: 'Habilidades',
      enabled: true,
      order: 4,
    },
    {
      id: 'contact',
      title: 'Contato',
      enabled: true,
      order: 5,
    },
  ],
  layout: {
    maxWidth: 'max-w-7xl',
    padding: 'px-4 sm:px-6 lg:px-8',
    spacing: 'py-20',
  },
  typography: {
    headingFont: 'Inter',
    bodyFont: 'Inter',
    baseSize: 'text-base',
  },
}; 