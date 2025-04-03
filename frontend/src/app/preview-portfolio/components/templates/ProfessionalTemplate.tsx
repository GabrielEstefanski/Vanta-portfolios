'use client';

import React from 'react';
import { TemplateConfig } from '@/app/types/TemplateConfig';

interface ProfessionalTemplateProps {
  config: TemplateConfig;
}

export function ProfessionalTemplate({ config }: ProfessionalTemplateProps) {
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
      style={{ backgroundColor: colors.background }}
    >
      <div 
        className={`container mx-auto ${layout.maxWidth} ${layout.padding}`}
        style={{ color: colors.text }}
      >
        <div className={layout.spacing}>
          {orderedSections.map(sectionId => renderSection(sectionId))}
        </div>
      </div>
    </div>
  );
}

// Seções com estilo profissional/corporativo
const HeaderSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  return (
    <section className="py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${typography.headingFont}`}
            style={{ color: colors.primary }}
          >
            {data?.name || 'João da Silva'}
          </h1>
          <h2 
            className={`text-xl md:text-2xl mb-6 ${typography.bodyFont}`}
            style={{ color: colors.secondary }}
          >
            {data?.title || 'Desenvolvedor Full Stack'}
          </h2>
          <p className="text-lg leading-relaxed">
            {data?.about || 'Desenvolvedor apaixonado por criar soluções web eficientes e experiências digitais incríveis.'}
          </p>
          <div className="mt-8">
            <button 
              className="px-6 py-3 rounded-md shadow-md mr-4 transition-colors duration-300"
              style={{ 
                backgroundColor: colors.primary, 
                color: '#fff' 
              }}
            >
              Meu CV
            </button>
            <button 
              className="px-6 py-3 rounded-md border transition-colors duration-300"
              style={{ 
                borderColor: colors.primary,
                color: colors.primary
              }}
            >
              Contato
            </button>
          </div>
        </div>
        <div className="hidden md:flex justify-end">
          <div 
            className="w-64 h-64 rounded-lg overflow-hidden shadow-lg" 
            style={{ borderColor: colors.accent }}
          >
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Foto</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  return (
    <section className="py-12 bg-opacity-5 rounded-xl" style={{ backgroundColor: colors.primary + '0a' }}>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 mb-6 md:mb-0">
          <h2 
            className={`text-2xl font-semibold ${typography.headingFont}`} 
            style={{ color: colors.primary }}
          >
            Sobre Mim
          </h2>
          <div 
            className="h-1 w-12 mt-4 rounded-full" 
            style={{ backgroundColor: colors.accent }}
          ></div>
        </div>
        <div className="md:w-3/4">
          <div className="prose max-w-none">
            <p className="mb-4">
              {data?.about || 'Com mais de 5 anos de experiência em desenvolvimento web, tenho trabalhado com as mais variadas tecnologias para criar produtos digitais de alto impacto.'}
            </p>
            <p>
              Sou especializado em React, Next.js, Node.js e bancos de dados SQL/NoSQL, sempre buscando as melhores práticas e arquiteturas escaláveis para cada projeto.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Proativo', 'Colaborativo', 'Orientado a resultados', 'Ágil', 'Aprendizado contínuo'].map(trait => (
                <span 
                  key={trait} 
                  className="px-3 py-1 text-sm rounded-full"
                  style={{ backgroundColor: colors.primary + '15', color: colors.primary }}
                >
                  {trait}
                </span>
              ))}
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
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 mb-6 md:mb-0">
          <h2 
            className={`text-2xl font-semibold ${typography.headingFont}`} 
            style={{ color: colors.primary }}
          >
            Experiência
          </h2>
          <div 
            className="h-1 w-12 mt-4 rounded-full" 
            style={{ backgroundColor: colors.accent }}
          ></div>
        </div>
        <div className="md:w-3/4">
          <div className="relative">
            {/* Timeline central */}
            <div 
              className="absolute top-0 bottom-0 left-0 w-0.5 ml-2.5" 
              style={{ backgroundColor: colors.primary + '30' }}
            ></div>
            
            <div className="space-y-10">
              {(data?.experiences || []).map((exp, index) => (
                <div key={index} className="relative pl-10">
                  {/* Círculo do timeline */}
                  <div 
                    className="absolute left-0 top-1.5 w-5 h-5 rounded-full" 
                    style={{ backgroundColor: colors.primary }}
                  ></div>
                  
                  <div className="bg-white bg-opacity-5 p-6 rounded-lg shadow-sm">
                    <div className="flex justify-between items-start flex-wrap mb-2">
                      <h3 className={`text-xl font-medium ${typography.headingFont}`} style={{ color: colors.secondary }}>
                        {exp.position}
                      </h3>
                      <span 
                        className="text-sm px-3 py-1 rounded-full"
                        style={{ backgroundColor: colors.primary + '15', color: colors.primary }}
                      >
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                    
                    <p className="text-sm font-medium mb-4" style={{ color: colors.secondary }}>
                      {exp.company}
                    </p>
                    
                    <p className="mb-4">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-2 py-1 text-xs rounded-md"
                          style={{ backgroundColor: colors.accent + '20', color: colors.accent }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              
              {!data?.experiences?.length && (
                <div className="relative pl-10">
                  <div 
                    className="absolute left-0 top-1.5 w-5 h-5 rounded-full" 
                    style={{ backgroundColor: colors.primary }}
                  ></div>
                  
                  <div className="bg-white bg-opacity-5 p-6 rounded-lg shadow-sm">
                    <div className="flex justify-between items-start flex-wrap mb-2">
                      <h3 className={`text-xl font-medium ${typography.headingFont}`} style={{ color: colors.secondary }}>
                        Desenvolvedor Full Stack Sênior
                      </h3>
                      <span 
                        className="text-sm px-3 py-1 rounded-full"
                        style={{ backgroundColor: colors.primary + '15', color: colors.primary }}
                      >
                        2021 - Presente
                      </span>
                    </div>
                    
                    <p className="text-sm font-medium mb-4" style={{ color: colors.secondary }}>
                      Tech Solutions
                    </p>
                    
                    <p className="mb-4">
                      Desenvolvimento de aplicações web usando React, Next.js e Node.js. Implementação de APIs RESTful e integração com diversos serviços.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  return (
    <section className="py-12">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 mb-6 md:mb-0">
          <h2 
            className={`text-2xl font-semibold ${typography.headingFont}`} 
            style={{ color: colors.primary }}
          >
            Projetos
          </h2>
          <div 
            className="h-1 w-12 mt-4 rounded-full" 
            style={{ backgroundColor: colors.accent }}
          ></div>
          <p className="mt-6 text-sm leading-relaxed">
            Uma seleção dos projetos mais recentes e relevantes que demonstram minhas habilidades e competências.
          </p>
        </div>
        <div className="md:w-3/4">
          <div className="grid md:grid-cols-2 gap-6">
            {(data?.projects || []).map((project, index) => (
              <div 
                key={index} 
                className="group overflow-hidden rounded-xl shadow-md transition-all hover:shadow-lg"
                style={{ backgroundColor: colors.background + '30' }}
              >
                <div className="h-48 overflow-hidden relative">
                  {project.imageUrl ? (
                    <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Imagem do Projeto</span>
                    </div>
                  )}
                  
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                    style={{ backgroundColor: colors.primary + '80' }}
                  >
                    <div className="flex space-x-4">
                      <button className="p-2 rounded-full bg-white text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <button className="p-2 rounded-full bg-white text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 
                    className={`text-lg font-medium mb-2 ${typography.headingFont}`}
                    style={{ color: colors.secondary }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 text-xs rounded-md"
                        style={{ backgroundColor: colors.accent + '20', color: colors.accent }}
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
                className="group overflow-hidden rounded-xl shadow-md transition-all hover:shadow-lg"
                style={{ backgroundColor: colors.background + '30' }}
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Imagem do Projeto</span>
                  </div>
                  
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                    style={{ backgroundColor: colors.primary + '80' }}
                  >
                    <div className="flex space-x-4">
                      <button className="p-2 rounded-full bg-white text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <button className="p-2 rounded-full bg-white text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 
                    className={`text-lg font-medium mb-2 ${typography.headingFont}`}
                    style={{ color: colors.secondary }}
                  >
                    Portfolio Generator
                  </h3>
                  <p className="text-sm mb-4">
                    Ferramenta para criação de portfólios personalizados com diferentes templates e opções de customização.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'TailwindCSS'].map(tech => (
                      <span 
                        key={tech} 
                        className="px-2 py-1 text-xs rounded-md"
                        style={{ backgroundColor: colors.accent + '20', color: colors.accent }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillsSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  return (
    <section className="py-12">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 mb-6 md:mb-0">
          <h2 
            className={`text-2xl font-semibold ${typography.headingFont}`} 
            style={{ color: colors.primary }}
          >
            Habilidades
          </h2>
          <div 
            className="h-1 w-12 mt-4 rounded-full" 
            style={{ backgroundColor: colors.accent }}
          ></div>
        </div>
        <div className="md:w-3/4">
          <div className="grid md:grid-cols-2 gap-6">
            {(data?.skills || ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'TailwindCSS']).map((skill, index) => (
              <div 
                key={typeof skill === 'string' ? skill : index} 
                className="bg-white bg-opacity-5 p-6 rounded-lg shadow-sm"
              >
                {typeof skill !== 'string' ? (
                  <>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className={`text-lg font-medium ${typography.headingFont}`} style={{ color: colors.secondary }}>
                        {skill.name}
                      </h3>
                      <span 
                        className="px-2 py-1 text-xs rounded-full"
                        style={{ backgroundColor: colors.primary + '15', color: colors.primary }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div 
                      className="h-2 w-full rounded-full overflow-hidden"
                      style={{ backgroundColor: colors.accent + '20' }}
                    >
                      <div 
                        className="h-full rounded-full" 
                        style={{ 
                          backgroundColor: colors.primary, 
                          width: `${skill.level}%` 
                        }}
                      ></div>
                    </div>
                    {skill.category && (
                      <p className="text-sm mt-2 opacity-70">{skill.category}</p>
                    )}
                  </>
                ) : (
                  <div className="flex items-center justify-between">
                    <h3 className={`text-lg font-medium ${typography.headingFont}`} style={{ color: colors.secondary }}>
                      {skill}
                    </h3>
                    <div 
                      className="w-2 h-2 rounded-full" 
                      style={{ backgroundColor: colors.primary }}
                    ></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const EducationSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  return (
    <section className="py-12">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 mb-6 md:mb-0">
          <h2 
            className={`text-2xl font-semibold ${typography.headingFont}`} 
            style={{ color: colors.primary }}
          >
            Educação
          </h2>
          <div 
            className="h-1 w-12 mt-4 rounded-full" 
            style={{ backgroundColor: colors.accent }}
          ></div>
        </div>
        <div className="md:w-3/4">
          <div className="space-y-8">
            {(data?.education || []).map((edu, index) => (
              <div key={index} className="bg-white bg-opacity-5 p-6 rounded-lg shadow-sm">
                <div className="mb-4">
                  <h3 className={`text-xl font-medium ${typography.headingFont}`} style={{ color: colors.secondary }}>
                    {edu.degree}
                  </h3>
                  <div className="flex justify-between items-start flex-wrap">
                    <p className="text-sm font-medium" style={{ color: colors.secondary }}>
                      {edu.institution}
                    </p>
                    <span 
                      className="text-sm px-3 py-1 rounded-full"
                      style={{ backgroundColor: colors.primary + '15', color: colors.primary }}
                    >
                      {edu.period}
                    </span>
                  </div>
                </div>
                <p>{edu.description}</p>
              </div>
            ))}
            
            {!data?.education?.length && (
              <div className="bg-white bg-opacity-5 p-6 rounded-lg shadow-sm">
                <div className="mb-4">
                  <h3 className={`text-xl font-medium ${typography.headingFont}`} style={{ color: colors.secondary }}>
                    Bacharelado em Ciência da Computação
                  </h3>
                  <div className="flex justify-between items-start flex-wrap">
                    <p className="text-sm font-medium" style={{ color: colors.secondary }}>
                      Universidade Federal do Brasil
                    </p>
                    <span 
                      className="text-sm px-3 py-1 rounded-full"
                      style={{ backgroundColor: colors.primary + '15', color: colors.primary }}
                    >
                      2015 - 2019
                    </span>
                  </div>
                </div>
                <p>
                  Formação completa em computação com foco em engenharia de software, algoritmos avançados e desenvolvimento full stack.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  return (
    <section className="py-12">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 mb-6 md:mb-0">
          <h2 
            className={`text-2xl font-semibold ${typography.headingFont}`} 
            style={{ color: colors.primary }}
          >
            Contato
          </h2>
          <div 
            className="h-1 w-12 mt-4 rounded-full" 
            style={{ backgroundColor: colors.accent }}
          ></div>
          <p className="mt-6 text-sm leading-relaxed">
            Fique à vontade para entrar em contato comigo para discutir oportunidades de colaboração ou projetos interessantes.
          </p>
        </div>
        <div className="md:w-3/4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-5 p-6 rounded-lg shadow-sm">
              <h3 className={`text-lg font-medium mb-4 ${typography.headingFont}`} style={{ color: colors.secondary }}>
                Informações de Contato
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div 
                    className="w-8 h-8 mt-1 rounded-full flex items-center justify-center mr-4" 
                    style={{ backgroundColor: colors.primary + '15' }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: colors.primary }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm opacity-70 mb-1">Email</p>
                    <p className="text-lg">{data?.email || 'joao@exemplo.com'}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div 
                    className="w-8 h-8 mt-1 rounded-full flex items-center justify-center mr-4" 
                    style={{ backgroundColor: colors.primary + '15' }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: colors.primary }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm opacity-70 mb-1">Telefone</p>
                    <p className="text-lg">{data?.phone || '(11) 98765-4321'}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div 
                    className="w-8 h-8 mt-1 rounded-full flex items-center justify-center mr-4" 
                    style={{ backgroundColor: colors.primary + '15' }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: colors.primary }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm opacity-70 mb-1">Localização</p>
                    <p className="text-lg">{data?.location || 'São Paulo, Brasil'}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white bg-opacity-5 p-6 rounded-lg shadow-sm">
              <h3 className={`text-lg font-medium mb-4 ${typography.headingFont}`} style={{ color: colors.secondary }}>
                Envie uma Mensagem
              </h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    className="w-full p-3 rounded-lg bg-transparent border" 
                    style={{ borderColor: colors.accent + '30' }}
                    placeholder="Seu nome"
                    disabled
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    className="w-full p-3 rounded-lg bg-transparent border" 
                    style={{ borderColor: colors.accent + '30' }}
                    placeholder="Seu email"
                    disabled
                  />
                </div>
                <div>
                  <textarea 
                    className="w-full p-3 rounded-lg bg-transparent border resize-none" 
                    style={{ borderColor: colors.accent + '30' }}
                    rows={3}
                    placeholder="Sua mensagem"
                    disabled
                  ></textarea>
                </div>
                <button 
                  type="button"
                  className="w-full p-3 rounded-lg text-center transition-colors duration-300"
                  style={{ backgroundColor: colors.primary, color: '#fff' }}
                  disabled
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 