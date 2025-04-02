import { ColorScheme } from './types';

export interface SectionConfig {
  id: string;
  enabled: boolean;
  title?: string;
  order: number;
  customFields?: Record<string, any>;
}

export interface TemplateConfig {
  id: string;
  name: string;
  description: string;
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
    description: 'Design corporativo e tradicional',
    sections: [
      {
        id: 'header',
        enabled: true,
        order: 1,
        customFields: {
          showAvatar: false,
          showSocialLinks: true
        }
      },
      {
        id: 'about',
        enabled: true,
        title: 'Sobre Mim',
        order: 2,
        customFields: {
          maxLength: 500
        }
      },
      {
        id: 'experiences',
        enabled: true,
        title: 'Experiência Profissional',
        order: 3,
        customFields: {
          showTimeline: false,
          showCompanyLogo: false
        }
      },
      {
        id: 'projects',
        enabled: true,
        title: 'Projetos',
        order: 4,
        customFields: {
          showTechnologies: true,
          showLiveDemo: true
        }
      },
      {
        id: 'certificates',
        enabled: true,
        title: 'Certificados',
        order: 5,
        customFields: {
          showDate: true,
          showIssuer: true
        }
      },
      {
        id: 'skills',
        enabled: false,
        title: 'Habilidades',
        order: 6,
        customFields: {
          showLevel: true,
          showCategory: true
        }
      },
      {
        id: 'education',
        enabled: false,
        title: 'Formação Acadêmica',
        order: 7,
        customFields: {
          showGPA: false,
          showThesis: false
        }
      }
    ],
    colors: {
      primary: '#2563eb',
      secondary: '#4f46e5',
      accent: '#f59e0b',
      background: '#ffffff',
      text: '#1f2937',
      textSecondary: '#6b7280'
    },
    layout: {
      maxWidth: '6xl',
      padding: 'px-8 md:px-16',
      spacing: 'space-y-8'
    },
    typography: {
      headingFont: 'font-bold',
      bodyFont: 'font-normal',
      baseSize: 'text-base'
    }
  },
  modern: {
    id: 'modern',
    name: 'Moderno',
    description: 'Design contemporâneo com efeitos visuais',
    sections: [
      {
        id: 'header',
        enabled: true,
        order: 1,
        customFields: {
          showGradient: true,
          showParticles: true
        }
      },
      {
        id: 'about',
        enabled: true,
        title: 'Sobre',
        order: 2,
        customFields: {
          maxLength: 400,
          showImage: true
        }
      },
      {
        id: 'experiences',
        enabled: true,
        title: 'Experiência',
        order: 3,
        customFields: {
          showTimeline: true,
          showCompanyLogo: true
        }
      },
      {
        id: 'projects',
        enabled: true,
        title: 'Projetos',
        order: 4,
        customFields: {
          showTechnologies: true,
          showLiveDemo: true,
          showGithub: true
        }
      },
      {
        id: 'certificates',
        enabled: true,
        title: 'Certificados',
        order: 5,
        customFields: {
          showDate: true,
          showIssuer: true,
          showBadge: true
        }
      },
      {
        id: 'skills',
        enabled: true,
        title: 'Habilidades',
        order: 6,
        customFields: {
          showLevel: true,
          showCategory: true,
          showProgress: true
        }
      }
    ],
    colors: {
      primary: '#3b82f6',
      secondary: '#8b5cf6',
      accent: '#f43f5e',
      background: '#0f172a',
      text: '#f8fafc',
      textSecondary: '#94a3b8'
    },
    layout: {
      maxWidth: '6xl',
      padding: 'px-8 md:px-16',
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
    description: 'Design limpo e minimalista',
    sections: [
      {
        id: 'header',
        enabled: true,
        order: 1,
        customFields: {
          showAvatar: false,
          showSocialLinks: false
        }
      },
      {
        id: 'about',
        enabled: true,
        title: 'Sobre',
        order: 2,
        customFields: {
          maxLength: 300
        }
      },
      {
        id: 'experiences',
        enabled: true,
        title: 'Experiência',
        order: 3,
        customFields: {
          showTimeline: false,
          showCompanyLogo: false
        }
      },
      {
        id: 'projects',
        enabled: true,
        title: 'Projetos',
        order: 4,
        customFields: {
          showTechnologies: false,
          showLiveDemo: true
        }
      },
      {
        id: 'certificates',
        enabled: true,
        title: 'Certificados',
        order: 5,
        customFields: {
          showDate: true,
          showIssuer: true
        }
      }
    ],
    colors: {
      primary: '#18181b',
      secondary: '#3f3f46',
      accent: '#71717a',
      background: '#ffffff',
      text: '#18181b',
      textSecondary: '#71717a'
    },
    layout: {
      maxWidth: '3xl',
      padding: 'px-8 md:px-16',
      spacing: 'space-y-12'
    },
    typography: {
      headingFont: 'font-light',
      bodyFont: 'font-normal',
      baseSize: 'text-base'
    }
  }
}; 