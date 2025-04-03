import { TemplateConfig } from '@/app/types/TemplateConfig';

export const professionalConfig: TemplateConfig = {
  id: 'professional',
  name: 'Profissional',
  description: 'Layout tradicional adequado para ambientes corporativos',
  thumbnail: '/templates/professional.png',
  props: {
    data: {
      name: '',
      title: '',
      bio: '',
      email: '',
      objectives: '',
      experience: [],
      projects: [],
      skills: []
    },
    colors: {
      primary: '#0f766e',
      secondary: '#0369a1',
      background: '#f8fafc',
      text: '#334155',
      accent: '#dc2626',
      surface: '#F3F4F6',
      border: '#E5E7EB'
    },
    sections: {
      header: { id: 'header', title: 'Cabeçalho', type: 'header', enabled: true, order: 0 },
      about: { id: 'about', title: 'Sobre', type: 'about', enabled: true, order: 1 },
      experience: { id: 'experience', title: 'Experiência', type: 'experience', enabled: true, order: 2 },
      projects: { id: 'projects', title: 'Projetos', type: 'projects', enabled: true, order: 3 },
      skills: { id: 'skills', title: 'Habilidades', type: 'skills', enabled: true, order: 4 },
      education: { id: 'education', title: 'Educação', type: 'education', enabled: true, order: 5 },
      contact: { id: 'contact', title: 'Contato', type: 'contact', enabled: true, order: 6 }
    },
    layout: {
      maxWidth: 'max-w-5xl',
      padding: 'p-8',
      spacing: 'space-y-8'
    },
    typography: {
      headingFont: 'font-medium',
      bodyFont: 'font-normal',
      baseSize: 'text-base',
      fontFamily: 'Roboto, sans-serif',
      fontSize: {
        base: '16px',
        h1: '3.5rem',
        h2: '2.5rem',
        h3: '1.75rem',
        body: '1.125rem',
        small: '0.875rem'
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        bold: 700
      },
      lineHeight: {
        tight: '1.2',
        normal: '1.5',
        relaxed: '1.75'
      },
      letterSpacing: {
        tight: '-0.025em',
        normal: '0',
        wide: '0.025em'
      }
    }
  }
}; 