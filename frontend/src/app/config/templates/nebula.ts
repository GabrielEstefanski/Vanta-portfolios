import { TemplateConfig } from '@/app/types/TemplateConfig';

export const nebulaConfig: TemplateConfig = {
  id: 'nebula',
  name: 'Nebula',
  description: 'Template com design fluido e dinâmico inspirado em nebulosas espaciais, com gradientes suaves e efeitos visuais elegantes',
  thumbnail: '/nebula.png',
  props: {
    data: {
      name: 'João da Silva',
      title: 'Desenvolvedor Frontend',
      email: 'joao@email.com',
      phone: '(11) 98765-4321',
      location: 'São Paulo, Brasil',
      about: 'Desenvolvedor Frontend especializado em criar interfaces interativas e visualmente impressionantes. Apaixonado por animações fluidas e transições suaves para proporcionar a melhor experiência ao usuário.',
      experiences: [
        {
          company: 'Estúdio Digital Criativo',
          position: 'Desenvolvedor Frontend Senior',
          startDate: '2021',
          endDate: 'Presente',
          description: 'Desenvolvimento de interfaces interativas e responsivas para aplicações web, com foco em animações fluidas e transições suaves. Trabalho na otimização de performance e acessibilidade.',
          technologies: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'ThreeJS']
        },
        {
          company: 'Agência de Inovação',
          position: 'Desenvolvedor Fullstack',
          startDate: '2018',
          endDate: '2021',
          description: 'Responsável pelo desenvolvimento fullstack de aplicações web usando React, Node.js e MongoDB. Implementação de interfaces com animações e efeitos visuais avançados.',
          technologies: ['React', 'Node.js', 'MongoDB', 'GSAP', 'CSS Animations']
        }
      ],
      projects: [
        {
          title: 'Galeria Nebulosa',
          description: 'Galeria de imagens com efeitos de parallax e transições inspiradas em névoas espaciais. Inclui efeitos de partículas e gradientes fluidos.',
          technologies: ['React', 'ThreeJS', 'GSAP'],
          imageUrl: '/placeholder.jpg'
        },
        {
          title: 'Dashboard Fluido',
          description: 'Dashboard interativo com visualizações de dados e transições suaves entre diferentes visões. Animações responsivas que reagem às interações do usuário.',
          technologies: ['Next.js', 'D3.js', 'TailwindCSS'],
          imageUrl: '/placeholder.jpg'
        },
        {
          title: 'Portal Espacial',
          description: 'Website com temática espacial utilizando efeitos visuais de névoa e partículas para criar uma experiência imersiva para o usuário.',
          technologies: ['React', 'CSS Animations', 'ScrollTrigger'],
          imageUrl: '/placeholder.jpg'
        }
      ],
      skills: [
        { name: 'React', level: 90, category: 'Frontend' },
        { name: 'JavaScript/TypeScript', level: 85, category: 'Frontend' },
        { name: 'CSS/SASS', level: 90, category: 'Frontend' },
        { name: 'Animações CSS', level: 95, category: 'Frontend' },
        { name: 'Framer Motion', level: 80, category: 'Frontend' },
        { name: 'Node.js', level: 75, category: 'Backend' },
        { name: 'Express', level: 70, category: 'Backend' },
        { name: 'MongoDB', level: 65, category: 'Backend' },
        { name: 'UI/UX Design', level: 85, category: 'Design' },
        { name: 'Figma', level: 80, category: 'Design' },
        { name: 'ThreeJS', level: 70, category: 'Outros' },
        { name: 'GSAP', level: 75, category: 'Outros' }
      ],
      education: [
        {
          institution: 'Universidade Federal',
          degree: 'Mestrado em Design de Interação',
          period: '2019 - 2021',
          description: 'Especialização em animações digitais e interfaces fluidas para melhorar a experiência do usuário'
        },
        {
          institution: 'Instituto de Tecnologia',
          degree: 'Bacharelado em Ciência da Computação',
          period: '2015 - 2019',
          description: 'Foco em desenvolvimento web e aplicações interativas com destaque em inovação tecnológica'
        }
      ]
    },
    colors: {
      primary: '#8A2BE2', // Roxo vibrante
      secondary: '#00BFFF', // Azul elétrico
      accent: '#FF6B6B', // Coral
      background: '#0B0B1E', // Azul escuro profundo
      surface: '#13132B', // Azul escuro um pouco mais claro
      text: '#F0F8FF', // Branco com toque azulado
      border: '#2A2A5A' // Azul médio para bordas
    },
    sections: {
      header: { 
        id: 'header', 
        title: 'Header',
        type: 'header', 
        enabled: true, 
        order: 0 
      },
      about: { 
        id: 'about', 
        title: 'Sobre',
        type: 'about', 
        enabled: true, 
        order: 1 
      },
      experience: { 
        id: 'experience', 
        title: 'Experiência',
        type: 'experience', 
        enabled: true, 
        order: 2 
      },
      projects: { 
        id: 'projects', 
        title: 'Projetos',
        type: 'projects', 
        enabled: true, 
        order: 3 
      },
      skills: { 
        id: 'skills', 
        title: 'Habilidades',
        type: 'skills', 
        enabled: true, 
        order: 4 
      },
      education: { 
        id: 'education', 
        title: 'Educação',
        type: 'education', 
        enabled: true, 
        order: 5 
      },
      contact: { 
        id: 'contact', 
        title: 'Contato',
        type: 'contact', 
        enabled: true, 
        order: 6 
      }
    },
    layout: {
      maxWidth: '1200px',
      padding: 'p-6 md:p-8',
      spacing: 'space-y-24'
    },
    typography: {
      baseSize: 'text-base',
      bodyFont: 'font-sans',
      headingFont: 'font-display'
    }
  }
}; 