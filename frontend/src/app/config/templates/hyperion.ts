
import { TemplateConfig } from '@/app/types/TemplateConfig';

export const hyperionConfig: TemplateConfig = {
  id: 'hyperion',
  name: 'Hyperion',
  description: 'Design futurista e angular com estilo high-tech inspirado na lua de Saturno',
  thumbnail: '/templates/hyperion.png',
  props: {
    data: {
      name: 'João da Silva',
      title: 'Desenvolvedor Full Stack',
      about: 'Especialista em desenvolvimento web com foco em aplicações de alta performance e experiências digitais inovadoras.',
      email: 'joao@exemplo.com',
      phone: '(11) 98765-4321',
      location: 'São Paulo, SP',
      experiences: [
        {
          company: 'Tech Innovations',
          position: 'Desenvolvedor Frontend Senior',
          startDate: '2021',
          endDate: 'Presente',
          description: 'Desenvolvimento de interfaces interativas e responsivas utilizando React, TypeScript e Next.js para aplicações web de alta performance.',
          technologies: ['React', 'TypeScript', 'Next.js', 'TailwindCSS']
        },
        {
          company: 'Digital Systems',
          position: 'Desenvolvedor Fullstack',
          startDate: '2018',
          endDate: '2021',
          description: 'Responsável pelo desenvolvimento fullstack de aplicações web usando React, Node.js e MongoDB, com foco em escalabilidade e arquitetura.',
          technologies: ['React', 'Node.js', 'MongoDB', 'Express']
        }
      ],
      projects: [
        {
          title: 'Sistema Nexus',
          description: 'Plataforma de e-commerce com sistema de pagamentos integrado e painel administrativo avançado.',
          technologies: ['React', 'Next.js', 'Node.js', 'MongoDB'],
          imageUrl: '/placeholder.jpg'
        },
        {
          title: 'Hyperion Analytics',
          description: 'Dashboard para visualização e análise de dados em tempo real com gráficos interativos.',
          technologies: ['React', 'D3.js', 'TypeScript', 'GraphQL'],
          imageUrl: '/placeholder.jpg'
        },
        {
          title: 'Interface Quantum',
          description: 'Aplicação web que utiliza IA para análise de dados e visualização em tempo real.',
          technologies: ['React', 'Python', 'TensorFlow', 'Flask'],
          imageUrl: '/placeholder.jpg'
        }
      ],
      skills: [
        { name: 'React', level: 95, category: 'Frontend' },
        { name: 'TypeScript', level: 90, category: 'Frontend' },
        { name: 'Next.js', level: 92, category: 'Frontend' },
        { name: 'Node.js', level: 85, category: 'Backend' },
        { name: 'GraphQL', level: 80, category: 'Backend' },
        { name: 'MongoDB', level: 78, category: 'Backend' },
        { name: 'TailwindCSS', level: 88, category: 'Frontend' },
        { name: 'Docker', level: 75, category: 'DevOps' },
        { name: 'AWS', level: 70, category: 'DevOps' }
      ],
      education: [
        {
          institution: 'Universidade Tecnológica',
          degree: 'Mestrado em Ciência da Computação',
          period: '2018 - 2020',
          description: 'Especialização em Inteligência Artificial e Processamento de Dados, com foco em algoritmos de aprendizado de máquina.'
        },
        {
          institution: 'Instituto de Tecnologia',
          degree: 'Bacharelado em Engenharia de Software',
          period: '2014 - 2018',
          description: 'Formação em desenvolvimento de software, com ênfase em web e mobile, destacando-se em projetos de inovação.'
        }
      ]
    },
    colors: {
      primary: '#6d28d9',    // roxo escuro
      secondary: '#10b981',  // verde-esmeralda
      background: '#0f172a', // azul muito escuro
      text: '#e2e8f0',       // cinza claro
      accent: '#f43f5e',     // vermelho-rosa
      surface: '#1e293b',    // azul escuro (para cards)
      border: '#334155'      // cinza azulado (bordas)
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
      padding: 'p-6 md:p-8',
      spacing: 'space-y-20'
    },
    typography: {
      headingFont: 'font-bold',
      bodyFont: 'font-normal',
      baseSize: 'text-base'
    }
  }
};