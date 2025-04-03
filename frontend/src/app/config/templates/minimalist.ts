import { TemplateConfig } from '@/app/types/TemplateConfig';

export const minimalistConfig: TemplateConfig = {
  id: 'minimalist',
  name: 'Minimalista',
  description: 'Design limpo e minimalista com foco no conteúdo',
  thumbnail: '/templates/minimalist.png',
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
        },
        {
          company: 'WebDev Agency',
          position: 'Desenvolvedor Front-end Pleno',
          startDate: '2019',
          endDate: '2021',
          description: 'Criação de interfaces responsivas e performáticas utilizando React e styled-components. Implementação de testes automatizados e CI/CD.',
          technologies: ['React', 'CSS', 'JavaScript']
        }
      ],
      projects: [
        {
          title: 'Portfolio Generator',
          description: 'Ferramenta para criação de portfólios personalizados com diferentes templates e opções de customização.',
          technologies: ['React', 'Next.js', 'TailwindCSS'],
          imageUrl: '/placeholder.jpg'
        },
        {
          title: 'E-commerce Platform',
          description: 'Plataforma completa de e-commerce com integração de pagamentos, gestão de produtos e área de administração.',
          technologies: ['Node.js', 'Express', 'MongoDB'],
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
      ],
      certificates: []
    },
    colors: {
      primary: '#2563eb',
      secondary: '#4338ca',
      background: '#ffffff',
      text: '#1f2937',
      accent: '#f59e0b'
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
      spacing: 'space-y-12'
    },
    typography: {
      headingFont: 'font-semibold',
      bodyFont: 'font-normal',
      baseSize: 'text-base'
    }
  }
}; 