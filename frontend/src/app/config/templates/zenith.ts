import { TemplateConfig } from '@/app/types/TemplateConfig';

export const zenithConfig: TemplateConfig = {
  id: 'zenith',
  name: 'Zenith',
  description: 'Design minimalista e claro com detalhes refinados e elementos geométricos sutis',
  thumbnail: '/templates/zenith.png',
  props: {
    data: {
      name: 'João da Silva',
      title: 'Desenvolvedor Full Stack',
      about: 'Desenvolvedor apaixonado por criar soluções web e mobile inovadoras.',
      email: 'joao@exemplo.com',
      phone: '(11) 98765-4321',
      location: 'São Paulo, SP',
      experiences: [
        {
          company: 'Tech Solutions',
          position: 'Desenvolvedor Full Stack Sênior',
          startDate: '2021',
          endDate: 'Presente',
          description: 'Desenvolvimento de aplicações web usando React, Next.js e Node.js. Implementação de APIs RESTful e integração com diversos serviços.',
          technologies: ['React', 'Next.js', 'Node.js', 'TypeScript']
        }
      ],
      projects: [
        {
          title: 'Portfolio Generator',
          description: 'Ferramenta para criação de portfólios personalizados com diferentes templates e opções de customização.',
          technologies: ['React', 'Next.js', 'TailwindCSS'],
          imageUrl: '/placeholder.jpg'
        }
      ],
      skills: [
        { name: 'JavaScript', level: 90, category: 'Frontend' },
        { name: 'TypeScript', level: 85, category: 'Frontend' },
        { name: 'React', level: 90, category: 'Frontend' },
        { name: 'Next.js', level: 85, category: 'Frontend' },
        { name: 'Node.js', level: 80, category: 'Backend' },
        { name: 'TailwindCSS', level: 95, category: 'Frontend' }
      ],
      education: [
        {
          institution: 'Universidade Federal do Brasil',
          degree: 'Bacharelado em Ciência da Computação',
          period: '2015 - 2019',
          description: 'Formação completa em computação com foco em engenharia de software, algoritmos avançados e desenvolvimento full stack.'
        }
      ]
    },
    colors: {
      primary: '#2563eb',
      secondary: '#6366f1',
      background: '#ffffff',
      text: '#1e293b',
      accent: '#f97316',
      surface: '#f8fafc',
      border: '#e2e8f0'
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
      maxWidth: 'max-w-6xl',
      padding: 'p-6 md:p-8',
      spacing: 'space-y-20'
    },
    typography: {
      headingFont: 'font-medium',
      bodyFont: 'font-light',
      baseSize: 'text-base'
    }
  }
}; 