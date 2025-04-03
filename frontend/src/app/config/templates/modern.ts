import { TemplateConfig } from '@/app/types/TemplateConfig';

export const modernConfig: TemplateConfig = {
  id: 'modern',
  name: 'Moderno',
  description: 'Design contemporâneo com elementos visuais criativos',
  thumbnail: '/templates/modern.png',
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
      primary: '#ec4899',
      secondary: '#7e22ce',
      background: '#131313',
      text: '#f3f4f6',
      accent: '#10b981'
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
      maxWidth: 'max-w-7xl',
      padding: 'p-8',
      spacing: 'space-y-12'
    },
    typography: {
      headingFont: 'font-bold',
      bodyFont: 'font-normal',
      baseSize: 'text-base'
    }
  }
}; 