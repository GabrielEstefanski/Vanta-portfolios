'use client';

import React from 'react';
import { TemplateConfig } from '@/app/types/TemplateConfig';

interface ModernTemplateProps {
  config: TemplateConfig;
}

export function ModernTemplate({ config }: ModernTemplateProps) {
  if (!config || !config.props) {
    return null;
  }

  const { colors, typography, layout, sections, data } = config.props;

  const renderSection = (sectionId: string) => {
    const section = sections[sectionId];
    if (!section || !section.enabled) return null;

    switch (sectionId) {
      case 'header':
        return <HeaderSection config={config} key={sectionId} />;
      case 'about':
        return <AboutSection config={config} key={sectionId} />;
      case 'experience':
        return <ExperienceSection config={config} key={sectionId} />;
      case 'projects':
        return <ProjectsSection config={config} key={sectionId} />;
      case 'skills':
        return <SkillsSection config={config} key={sectionId} />;
      case 'education':
        return <EducationSection config={config} key={sectionId} />;
      case 'contact':
        return <ContactSection config={config} key={sectionId} />;
      default:
        return null;
    }
  };

  const orderedSections = Object.keys(sections || {})
    .sort((a, b) => {
      const orderA = sections[a]?.order || 0;
      const orderB = sections[b]?.order || 0;
      return orderA - orderB;
    });

  return (
    <div 
      className="min-h-screen transition-all duration-500"
      style={{ 
        backgroundColor: colors.background,
        background: `linear-gradient(135deg, ${colors.background}, ${colors.primary}30)`
      }}
    >
      {/* Círculos decorativos característicos do design moderno */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" 
        style={{ 
          background: `radial-gradient(circle, ${colors.primary}, transparent 70%)`,
          zIndex: 0
        }}
      />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10" 
        style={{ 
          background: `radial-gradient(circle, ${colors.accent}, transparent 70%)`,
          zIndex: 0
        }}
      />
      
      <div 
        className={`container mx-auto ${layout.maxWidth} ${layout.padding} relative z-10`}
        style={{ color: colors.text }}
      >
        <div className={layout.spacing}>
          {orderedSections.map(sectionId => renderSection(sectionId))}
        </div>
      </div>
    </div>
  );
}

// Versão temporária simplificada para demonstrar o funcionamento
const HeaderSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  return (
    <section className="py-20 flex flex-col items-center justify-center text-center">
      <h1 
        className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 ${typography.headingFont}`}
        style={{ color: colors.primary }}
      >
        {data?.name || 'João da Silva'}
      </h1>
      <h2 
        className={`text-xl md:text-2xl mb-8 ${typography.bodyFont}`}
        style={{ color: colors.secondary }}
      >
        {data?.title || 'Desenvolvedor Full Stack'}
      </h2>
      <p className="max-w-2xl mx-auto text-lg">
        {data?.about || 'Desenvolvedor apaixonado por criar soluções web eficientes e experiências digitais incríveis.'}
      </p>
    </section>
  );
};

// Seções com estilo moderno
const AboutSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  return (
    <section className="py-12">
      <div className="bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
        style={{ backgroundColor: colors.primary + '08' }}>
        <h2 
          className={`text-3xl font-bold mb-6 text-center ${typography.headingFont}`} 
          style={{ color: colors.primary }}
        >
          Sobre Mim
        </h2>
        <div 
          className="h-1 w-24 mx-auto rounded-full mb-10" 
          style={{ background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})` }}
        ></div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                {data?.about || 'Com mais de 5 anos de experiência em desenvolvimento web, tenho trabalhado com as mais variadas tecnologias para criar produtos digitais de alto impacto.'}
              </p>
              <p className="text-lg">
                Sou especializado em React, Next.js, Node.js e bancos de dados SQL/NoSQL, sempre buscando as melhores práticas e arquiteturas escaláveis para cada projeto.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {['Inovador', 'Criativo', 'Analítico', 'Proativo', 'Adaptável'].map(trait => (
                  <span 
                    key={trait} 
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
                    style={{ backgroundColor: colors.primary + '20', color: colors.primary }}
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div 
              className="w-64 h-64 rounded-full overflow-hidden border-4 shadow-lg relative"
              style={{ borderColor: colors.accent }}
            >
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Foto</span>
              </div>
              <div 
                className="absolute inset-0 opacity-20" 
                style={{ 
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  return (
    <section className="py-12">
      <h2 
        className={`text-3xl font-bold mb-6 text-center ${typography.headingFont}`} 
        style={{ color: colors.primary }}
      >
        Experiência Profissional
      </h2>
      <div 
        className="h-1 w-24 mx-auto rounded-full mb-10" 
        style={{ background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})` }}
      ></div>
      
      <div className="grid gap-8">
        {(data?.experiences || []).map((exp, index) => (
          <div 
            key={index} 
            className="bg-opacity-5 backdrop-blur-sm rounded-2xl p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
            style={{ backgroundColor: colors.primary + '08' }}
          >
            <div className="flex flex-col md:flex-row md:items-center mb-4">
              <h3 
                className={`text-xl font-bold ${typography.headingFont} md:flex-1`} 
                style={{ color: colors.secondary }}
              >
                {exp.position}
              </h3>
              <div 
                className="mt-2 md:mt-0 px-4 py-1 rounded-full text-sm inline-block w-max"
                style={{ backgroundColor: colors.primary + '20', color: colors.primary }}
              >
                {exp.startDate} - {exp.endDate}
              </div>
            </div>
            
            <div 
              className="text-sm font-medium mb-4 pb-4 border-b border-opacity-10" 
              style={{ borderColor: colors.accent }}
            >
              {exp.company}
            </div>
            
            <p className="mb-6">{exp.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 text-xs rounded-lg"
                  style={{ backgroundColor: colors.accent + '15', color: colors.accent }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
        
        {!data?.experiences?.length && (
          <div 
            className="bg-opacity-5 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
            style={{ backgroundColor: colors.primary + '08' }}
          >
            <div className="flex flex-col md:flex-row md:items-center mb-4">
              <h3 
                className={`text-xl font-bold ${typography.headingFont} md:flex-1`} 
                style={{ color: colors.secondary }}
              >
                Desenvolvedor Full Stack Sênior
              </h3>
              <div 
                className="mt-2 md:mt-0 px-4 py-1 rounded-full text-sm inline-block w-max"
                style={{ backgroundColor: colors.primary + '20', color: colors.primary }}
              >
                2021 - Presente
              </div>
            </div>
            
            <div 
              className="text-sm font-medium mb-4 pb-4 border-b border-opacity-10" 
              style={{ borderColor: colors.accent }}
            >
              Tech Solutions
            </div>
            
            <p className="mb-6">
              Desenvolvimento de aplicações web usando React, Next.js e Node.js. Implementação de APIs RESTful e integração com diversos serviços.
            </p>
            
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'Node.js', 'TailwindCSS', 'MongoDB'].map(tech => (
                <span 
                  key={tech} 
                  className="px-3 py-1 text-xs rounded-lg"
                  style={{ backgroundColor: colors.accent + '15', color: colors.accent }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const ProjectsSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  return (
    <section className="py-12">
      <h2 
        className={`text-3xl font-bold mb-6 text-center ${typography.headingFont}`} 
        style={{ color: colors.primary }}
      >
        Projetos Recentes
      </h2>
      <div 
        className="h-1 w-24 mx-auto rounded-full mb-10" 
        style={{ background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})` }}
      ></div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {(data?.projects || []).map((project, index) => (
          <div 
            key={index} 
            className="group rounded-2xl overflow-hidden shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl"
            style={{ backgroundColor: colors.primary + '08' }}
          >
            <div className="h-56 overflow-hidden relative">
              {project.imageUrl ? (
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Imagem do Projeto</span>
                </div>
              )}
              
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm"
                style={{ backgroundColor: colors.primary + '60' }}
              >
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="p-3 rounded-full transition-transform hover:scale-110"
                    style={{ backgroundColor: colors.background, color: colors.primary }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="p-3 rounded-full transition-transform hover:scale-110"
                    style={{ backgroundColor: colors.background, color: colors.primary }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h3 
                className={`text-xl font-bold mb-3 ${typography.headingFont}`}
                style={{ color: colors.secondary }}
              >
                {project.title}
              </h3>
              <p className="mb-6 text-base">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 text-xs rounded-full transition-all hover:scale-105"
                    style={{ backgroundColor: colors.accent + '15', color: colors.accent }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
        
        {!data?.projects?.length && (
          <div 
            className="group rounded-2xl overflow-hidden shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl"
            style={{ backgroundColor: colors.primary + '08' }}
          >
            <div className="h-56 overflow-hidden relative">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Imagem do Projeto</span>
              </div>
            </div>
            
            <div className="p-8">
              <h3 
                className={`text-xl font-bold mb-3 ${typography.headingFont}`}
                style={{ color: colors.secondary }}
              >
                Portfolio Generator
              </h3>
              <p className="mb-6 text-base">
                Ferramenta para criação de portfólios personalizados com diferentes templates e opções de customização.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TailwindCSS'].map(tech => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 text-xs rounded-full transition-all hover:scale-105"
                    style={{ backgroundColor: colors.accent + '15', color: colors.accent }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const SkillsSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  return (
    <section className="py-12">
      <h2 
        className={`text-3xl font-bold mb-6 text-center ${typography.headingFont}`} 
        style={{ color: colors.primary }}
      >
        Habilidades
      </h2>
      <div 
        className="h-1 w-24 mx-auto rounded-full mb-10" 
        style={{ background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})` }}
      ></div>
      
      <div className="bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
        <div className="grid md:grid-cols-3 gap-8">
          {(data?.skills || ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'TailwindCSS']).map((skill, index) => (
            <div 
              key={typeof skill === 'string' ? skill : index} 
              className="group flex flex-col items-center text-center p-4 rounded-xl transition-all hover:-translate-y-1"
              style={{ backgroundColor: colors.primary + '05' }}
            >
              {typeof skill !== 'string' ? (
                <>
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                    style={{ 
                      background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`, 
                    }}
                  >
                    <span className="text-white text-xl font-bold">{skill.level}%</span>
                  </div>
                  <h3 className={`text-lg font-semibold mb-2 ${typography.headingFont}`} style={{ color: colors.secondary }}>
                    {skill.name}
                  </h3>
                  {skill.category && (
                    <p className="text-sm opacity-70">{skill.category}</p>
                  )}
                </>
              ) : (
                <>
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                    style={{ 
                      background: `linear-gradient(135deg, ${colors.primary}80, ${colors.accent}60)`,
                    }}
                  >
                    <span className="text-white text-2xl font-bold">{skill.charAt(0)}</span>
                  </div>
                  <h3 className={`text-lg font-semibold ${typography.headingFont}`} style={{ color: colors.secondary }}>
                    {skill}
                  </h3>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EducationSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  return (
    <section className="py-12">
      <h2 
        className={`text-3xl font-bold mb-6 text-center ${typography.headingFont}`} 
        style={{ color: colors.primary }}
      >
        Educação
      </h2>
      <div 
        className="h-1 w-24 mx-auto rounded-full mb-10" 
        style={{ background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})` }}
      ></div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {(data?.education || []).map((edu, index) => (
          <div 
            key={index} 
            className="bg-opacity-5 backdrop-blur-sm rounded-2xl p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
            style={{ backgroundColor: colors.primary + '08' }}
          >
            <div 
              className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
              style={{ backgroundColor: colors.primary + '20', color: colors.primary }}
            >
              {edu.period}
            </div>
            <h3 
              className={`text-xl font-bold mb-2 ${typography.headingFont}`} 
              style={{ color: colors.secondary }}
            >
              {edu.degree}
            </h3>
            <p 
              className="text-base font-medium mb-4" 
              style={{ color: colors.accent }}
            >
              {edu.institution}
            </p>
            <p className="text-base">{edu.description}</p>
          </div>
        ))}
        
        {!data?.education?.length && (
          <div 
            className="bg-opacity-5 backdrop-blur-sm rounded-2xl p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
            style={{ backgroundColor: colors.primary + '08' }}
          >
            <div 
              className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
              style={{ backgroundColor: colors.primary + '20', color: colors.primary }}
            >
              2015 - 2019
            </div>
            <h3 
              className={`text-xl font-bold mb-2 ${typography.headingFont}`} 
              style={{ color: colors.secondary }}
            >
              Bacharelado em Ciência da Computação
            </h3>
            <p 
              className="text-base font-medium mb-4" 
              style={{ color: colors.accent }}
            >
              Universidade Federal do Brasil
            </p>
            <p className="text-base">
              Formação completa em computação com foco em engenharia de software, algoritmos avançados e desenvolvimento full stack.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

const ContactSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  return (
    <section className="py-12">
      <h2 
        className={`text-3xl font-bold mb-6 text-center ${typography.headingFont}`} 
        style={{ color: colors.primary }}
      >
        Contato
      </h2>
      <div 
        className="h-1 w-24 mx-auto rounded-full mb-10" 
        style={{ background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})` }}
      ></div>
      
      <div className="bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
        style={{ backgroundColor: colors.primary + '08' }}>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 
              className={`text-xl font-bold mb-6 ${typography.headingFont}`} 
              style={{ color: colors.secondary }}
            >
              Fale Comigo
            </h3>
            <p className="mb-8">
              Estou sempre aberto a novas oportunidades e colaborações. Fique à vontade para entrar em contato comigo.
            </p>
            
            <div className="space-y-6">
              <a href={`mailto:${data?.email || 'joao@exemplo.com'}`} className="flex items-center group">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 transition-transform group-hover:scale-110"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm opacity-70">Email</p>
                  <p className="text-lg font-medium group-hover:underline transition-all" style={{ color: colors.accent }}>
                    {data?.email || 'joao@exemplo.com'}
                  </p>
                </div>
              </a>
              
              <a href={`tel:${data?.phone || '(11) 98765-4321'}`} className="flex items-center group">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 transition-transform group-hover:scale-110"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm opacity-70">Telefone</p>
                  <p className="text-lg font-medium group-hover:underline transition-all" style={{ color: colors.accent }}>
                    {data?.phone || '(11) 98765-4321'}
                  </p>
                </div>
              </a>
              
              <div className="flex items-center">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mr-4"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm opacity-70">Localização</p>
                  <p className="text-lg font-medium" style={{ color: colors.accent }}>
                    {data?.location || 'São Paulo, Brasil'}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form className="space-y-4">
              <div>
                <label 
                  className={`block text-sm font-medium mb-2 ${typography.bodyFont}`}
                  style={{ color: colors.secondary }}
                >
                  Nome
                </label>
                <input 
                  type="text" 
                  className="w-full p-4 rounded-xl bg-transparent border transition-colors focus:outline-none focus:ring-2" 
                  style={{ 
                    borderColor: colors.accent + '30',
                    color: colors.text,
                    '--tw-ring-color': colors.primary + '50'
                  } as React.CSSProperties}
                  placeholder="Seu nome"
                  disabled
                />
              </div>
              <div>
                <label 
                  className={`block text-sm font-medium mb-2 ${typography.bodyFont}`}
                  style={{ color: colors.secondary }}
                >
                  Email
                </label>
                <input 
                  type="email" 
                  className="w-full p-4 rounded-xl bg-transparent border transition-colors focus:outline-none focus:ring-2" 
                  style={{ 
                    borderColor: colors.accent + '30',
                    color: colors.text,
                    '--tw-ring-color': colors.primary + '50'
                  } as React.CSSProperties}
                  placeholder="Seu email"
                  disabled
                />
              </div>
              <div>
                <label 
                  className={`block text-sm font-medium mb-2 ${typography.bodyFont}`}
                  style={{ color: colors.secondary }}
                >
                  Mensagem
                </label>
                <textarea 
                  className="w-full p-4 rounded-xl bg-transparent border transition-colors focus:outline-none focus:ring-2 resize-none" 
                  style={{ 
                    borderColor: colors.accent + '30',
                    color: colors.text,
                    '--tw-ring-color': colors.primary + '50'
                  } as React.CSSProperties}
                  rows={5}
                  placeholder="Sua mensagem"
                  disabled
                ></textarea>
              </div>
              <button 
                type="button"
                className="w-full p-4 rounded-xl text-center font-medium text-white transition-all hover:shadow-lg hover:-translate-y-1"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                }}
                disabled
              >
                Enviar Mensagem
              </button>
            </form>
            
            <div className="mt-8 flex justify-center space-x-4">
              {['github', 'linkedin', 'twitter', 'instagram'].map(social => (
                <a 
                  key={social}
                  href="#" 
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                  }}
                >
                  <span className="text-white text-xs">{social.charAt(0).toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};