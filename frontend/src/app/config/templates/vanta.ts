import { TemplateConfig } from '@/app/types/TemplateConfig';

export const vantaConfig: TemplateConfig = {
  id: 'vanta',
  name: 'Vanta',
  description: 'Layout noir com efeitos de partículas em estilo monocromático',
  props: {
    sections: {
      header: { id: 'header', title: 'Cabeçalho', type: 'header', enabled: true, order: 0 },
      about: { id: 'about', title: 'Sobre', type: 'about', enabled: true, order: 1 },
      experience: { id: 'experience', title: 'Experiência', type: 'experience', enabled: true, order: 2 },
      projects: { id: 'projects', title: 'Projetos', type: 'projects', enabled: true, order: 3 },
      skills: { id: 'skills', title: 'Habilidades', type: 'skills', enabled: true, order: 4 },
      education: { id: 'education', title: 'Educação', type: 'education', enabled: true, order: 5 },
      contact: { id: 'contact', title: 'Contato', type: 'contact', enabled: true, order: 6 }
    },
    colors: {
      primary: '#ffffff',
      secondary: '#a3a3a3',
      background: '#000000',
      text: '#f8f8f8',
      accent: '#d4d4d4'
    },
    layout: {
      maxWidth: 'max-w-7xl',
      padding: 'p-8',
      spacing: 'space-y-16'
    },
    typography: {
      headingFont: 'font-light',
      bodyFont: 'font-light',
      baseSize: 'text-base'
    }
  }
}; 