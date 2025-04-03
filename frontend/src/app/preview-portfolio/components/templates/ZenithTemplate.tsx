'use client';

import React from 'react';
import { TemplateConfig } from '@/app/types/TemplateConfig';

interface ZenithTemplateProps {
  config: TemplateConfig;
}

export function ZenithTemplate({ config }: ZenithTemplateProps) {
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
      className="min-h-screen transition-all duration-500 relative overflow-hidden"
      style={{ 
        backgroundColor: colors.background,
        color: colors.text
      }}
    >
      {/* Elementos decorativos */}
      <div className="absolute right-0 top-0 w-1/3 h-1/3 opacity-5">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path 
            fill={colors.primary} 
            d="M47.7,-51.9C59.3,-42.1,64.8,-24.1,63.2,-8.1C61.7,7.9,53.1,21.8,41.5,32.4C29.9,43,15.4,50.2,-0.7,51C-16.9,51.8,-33.7,46.3,-45.9,35.5C-58.1,24.8,-65.6,8.8,-64.2,-6.7C-62.8,-22.2,-52.6,-37.3,-39.4,-47.1C-26.3,-56.9,-10.1,-61.4,4.2,-66.2C18.5,-70.9,36.1,-61.8,47.7,-51.9Z" 
            transform="translate(100 100)" 
          />
        </svg>
      </div>
      
      <div className="absolute left-0 bottom-0 w-1/4 h-1/4 opacity-5">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path 
            fill={colors.accent} 
            d="M53.7,-67.1C65.8,-53.6,69.4,-32.6,70.7,-12.8C72,7.1,70.9,26,61.3,38.6C51.7,51.2,33.6,57.5,14.5,63.3C-4.7,69.1,-24.9,74.4,-40.4,68.1C-55.9,61.8,-66.7,43.9,-71.6,25.2C-76.4,6.4,-75.4,-13.3,-67.6,-29C-59.7,-44.7,-45,-56.6,-30.1,-68.3C-15.2,-80.1,-0.1,-91.7,11,-87.2C22.1,-82.7,41.6,-80.6,53.7,-67.1Z" 
            transform="translate(100 100)" 
          />
        </svg>
      </div>
      
      {/* Container para o conteúdo */}
      <div 
        className={`container mx-auto ${layout.maxWidth} ${layout.padding} relative z-10`}
      >
        <div className={layout.spacing}>
          {orderedSections.map(sectionId => renderSection(sectionId))}
        </div>
      </div>
    </div>
  );
}

// Seções do Template Zenith
const HeaderSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  return (
    <section className="py-12 md:py-24 flex flex-col items-center text-center relative">
      {/* Elemento decorativo sutil atrás do header */}
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-5"
        style={{ background: `radial-gradient(circle, ${colors.primary}, transparent 70%)` }}
      ></div>
      
      <div className="w-20 h-1 mb-12 rounded-full" style={{ backgroundColor: colors.primary }}></div>
      
      <h1 
        className={`text-4xl md:text-5xl lg:text-6xl mb-6 ${typography.headingFont}`}
        style={{ color: colors.primary }}
      >
        {data?.name || 'João da Silva'}
      </h1>
      
      <h2 
        className={`text-xl md:text-2xl mb-8 tracking-wide ${typography.bodyFont}`}
        style={{ color: colors.secondary }}
      >
        {data?.title || 'Desenvolvedor Full Stack'}
      </h2>
      
      <p className="max-w-2xl text-lg leading-relaxed mb-8">
        {data?.about || 'Desenvolvedor apaixonado por criar soluções web eficientes e experiências digitais incríveis.'}
      </p>
      
      <div className="flex space-x-6">
        <button 
          className="px-8 py-3 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 shadow-sm"
          style={{ 
            backgroundColor: colors.primary, 
            color: colors.background
          }}
        >
          Meu Trabalho
        </button>
        <button 
          className="px-8 py-3 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 border-2"
          style={{ 
            borderColor: colors.primary,
            color: colors.primary
          }}
        >
          Contato
        </button>
      </div>
    </section>
  );
};

const AboutSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  return (
    <section className="py-20 relative">
      <div className="flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2 order-2 md:order-1">
          <div className="w-20 h-1 mb-8 rounded-full" style={{ backgroundColor: colors.primary }}></div>
          <h2 
            className={`text-3xl mb-8 ${typography.headingFont}`} 
            style={{ color: colors.primary }}
          >
            Sobre Mim
          </h2>
          
          <div className="space-y-4">
            <p>
              {data?.about || 'Com mais de 5 anos de experiência em desenvolvimento web, tenho trabalhado com as mais variadas tecnologias para criar produtos digitais de alto impacto.'}
            </p>
            <p>
              Sou especializado em React, Next.js, Node.js e bancos de dados SQL/NoSQL, sempre buscando as melhores práticas e arquiteturas escaláveis para cada projeto.
            </p>
          </div>
          
          <div className="mt-10 flex flex-wrap gap-3">
            {['Inovador', 'Criativo', 'Analítico', 'Proativo', 'Adaptável'].map(trait => (
              <span 
                key={trait} 
                className="px-4 py-2 rounded-md inline-block text-sm transition-colors"
                style={{ 
                  background: colors.background, 
                  border: `1px solid ${colors.border}`,
                  color: colors.text
                }}
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
        
        <div className="md:w-1/2 order-1 md:order-2 relative">
          <div 
            className="absolute inset-0 rounded-2xl opacity-5"
            style={{ 
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
              transform: 'rotate(2deg) scale(0.95)'
            }}
          ></div>
          <div 
            className="relative aspect-square max-w-sm mx-auto overflow-hidden rounded-2xl border"
            style={{ borderColor: colors.border }}
          >
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Foto</span>
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
    <section className="py-20">
      <div className="w-20 h-1 mb-8 rounded-full" style={{ backgroundColor: colors.primary }}></div>
      <h2 
        className={`text-3xl mb-12 ${typography.headingFont}`} 
        style={{ color: colors.primary }}
      >
        Experiência Profissional
      </h2>
      
      <div className="space-y-12">
        {(data?.experiences || []).map((exp, index) => (
          <div 
            key={index} 
            className="relative group"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div 
                  className="mb-4 inline-block px-4 py-1 rounded-full text-sm shadow-sm"
                  style={{ 
                    backgroundColor: colors.background, 
                    border: `1px solid ${colors.border}`,
                    color: colors.text
                  }}
                >
                  {exp.startDate} - {exp.endDate}
                </div>
                <h3 
                  className={`text-xl mb-1 ${typography.headingFont} group-hover:underline transition-all underline-offset-4`} 
                  style={{ color: colors.secondary }}
                >
                  {exp.position}
                </h3>
                <p className="text-base opacity-90">{exp.company}</p>
              </div>
              
              <div className="md:w-2/3">
                <p className="mb-6">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-sm rounded-md"
                      style={{ 
                        backgroundColor: `${colors.accent}15`, 
                        color: colors.accent
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Linha decorativa entre itens, exceto o último */}
            {index < (data?.experiences?.length || 1) - 1 && (
              <div 
                className="absolute bottom-0 left-0 right-0 h-px mt-8 opacity-20 translate-y-8"
                style={{ backgroundColor: colors.text }}
              ></div>
            )}
          </div>
        ))}
        
        {!data?.experiences?.length && (
          <div className="relative group">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div 
                  className="mb-4 inline-block px-4 py-1 rounded-full text-sm shadow-sm"
                  style={{ 
                    backgroundColor: colors.background, 
                    border: `1px solid ${colors.border}`,
                    color: colors.text
                  }}
                >
                  2021 - Presente
                </div>
                <h3 
                  className={`text-xl mb-1 ${typography.headingFont} group-hover:underline transition-all underline-offset-4`} 
                  style={{ color: colors.secondary }}
                >
                  Desenvolvedor Full Stack Sênior
                </h3>
                <p className="text-base opacity-90">Tech Solutions</p>
              </div>
              
              <div className="md:w-2/3">
                <p className="mb-6">
                  Desenvolvimento de aplicações web usando React, Next.js e Node.js. Implementação de APIs RESTful e integração com diversos serviços.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'Node.js', 'TypeScript'].map(tech => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 text-sm rounded-md"
                      style={{ 
                        backgroundColor: `${colors.accent}15`, 
                        color: colors.accent
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
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
    <section className="py-20">
      <div className="w-20 h-1 mb-8 rounded-full" style={{ backgroundColor: colors.primary }}></div>
      <h2 
        className={`text-3xl mb-12 ${typography.headingFont}`} 
        style={{ color: colors.primary }}
      >
        Projetos Recentes
      </h2>
      
      <div className="grid md:grid-cols-2 gap-12">
        {(data?.projects || []).map((project, index) => (
          <div 
            key={index} 
            className="group"
          >
            <div className="overflow-hidden rounded-xl mb-6 aspect-video relative">
              {project.imageUrl ? (
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Imagem do Projeto</span>
                </div>
              )}
              
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                style={{ backgroundColor: `${colors.primary}90` }}
              >
                <div className="flex space-x-4">
                  <a 
                    href={project.liveUrl || '#'} 
                    className="p-3 rounded-full transform transition-transform hover:scale-110"
                    style={{ backgroundColor: colors.background }}
                    aria-label="Ver projeto"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </a>
                  <a 
                    href={project.githubUrl || '#'} 
                    className="p-3 rounded-full transform transition-transform hover:scale-110"
                    style={{ backgroundColor: colors.background }}
                    aria-label="Ver código"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <h3 
              className={`text-xl mb-2 ${typography.headingFont} group-hover:underline transition-all underline-offset-4`} 
              style={{ color: colors.secondary }}
            >
              {project.title}
            </h3>
            <p className="mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 text-sm rounded-md"
                  style={{ 
                    backgroundColor: `${colors.accent}15`, 
                    color: colors.accent
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
        
        {!data?.projects?.length && (
          <div className="group">
            <div className="overflow-hidden rounded-xl mb-6 aspect-video relative">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Imagem do Projeto</span>
              </div>
            </div>
            
            <h3 
              className={`text-xl mb-2 ${typography.headingFont} group-hover:underline transition-all underline-offset-4`} 
              style={{ color: colors.secondary }}
            >
              Portfolio Generator
            </h3>
            <p className="mb-4">
              Ferramenta para criação de portfólios personalizados com diferentes templates e opções de customização.
            </p>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'TailwindCSS'].map(tech => (
                <span 
                  key={tech} 
                  className="px-3 py-1 text-sm rounded-md"
                  style={{ 
                    backgroundColor: `${colors.accent}15`, 
                    color: colors.accent
                  }}
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

const SkillsSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  // Helper para agrupar habilidades por categoria
  const groupedSkills = (data?.skills || []).reduce((acc, skill) => {
    const category = skill.category || 'Outras';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, typeof data.skills>);
  
  return (
    <section className="py-20">
      <div className="w-20 h-1 mb-8 rounded-full" style={{ backgroundColor: colors.primary }}></div>
      <h2 
        className={`text-3xl mb-12 ${typography.headingFont}`} 
        style={{ color: colors.primary }}
      >
        Habilidades
      </h2>
      
      {Object.keys(groupedSkills).length > 0 ? (
        <div className="space-y-16">
          {Object.entries(groupedSkills).map(([category, skills]) => (
            <div key={category} className="space-y-6">
              <h3 
                className={`text-xl ${typography.headingFont}`}
                style={{ color: colors.secondary }}
              >
                {category}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {skills.map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between">
                      <span className={`${typography.bodyFont}`}>{skill.name}</span>
                      <span 
                        className="text-sm px-2 rounded-full"
                        style={{ color: colors.primary }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div 
                      className="h-2 w-full rounded-full overflow-hidden bg-opacity-10"
                      style={{ backgroundColor: colors.text + '10' }}
                    >
                      <div 
                        className="h-full rounded-full"
                        style={{ 
                          width: `${skill.level}%`,
                          background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'TailwindCSS'].map(skill => (
            <div 
              key={skill} 
              className="p-6 rounded-lg border-2 text-center transition-all hover:-translate-y-1"
              style={{ borderColor: colors.border }}
            >
              <div 
                className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.primary}30, ${colors.primary}10)`,
                  color: colors.primary
                }}
              >
                <span className="text-xl font-semibold">{skill.charAt(0)}</span>
              </div>
              <h3 className={`text-lg ${typography.headingFont}`}>{skill}</h3>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

const EducationSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  return (
    <section className="py-20">
      <div className="w-20 h-1 mb-8 rounded-full" style={{ backgroundColor: colors.primary }}></div>
      <h2 
        className={`text-3xl mb-12 ${typography.headingFont}`} 
        style={{ color: colors.primary }}
      >
        Educação
      </h2>
      
      <div className="space-y-12">
        {(data?.education || []).map((edu, index) => (
          <div key={index} className="relative pl-8 group">
            {/* Elemento visual na timeline */}
            <div 
              className="absolute left-0 top-0 w-4 h-4 rounded-full border-2 group-hover:scale-125 transition-transform"
              style={{ 
                backgroundColor: colors.background,
                borderColor: colors.primary
              }}
            ></div>
            
            {/* Linha vertical */}
            {index < (data?.education?.length || 1) - 1 && (
              <div 
                className="absolute left-2 top-4 bottom-0 w-px -mb-8"
                style={{ backgroundColor: colors.border }}
              ></div>
            )}
            
            <div className="mb-2 flex items-center gap-4">
              <h3 
                className={`text-xl ${typography.headingFont} group-hover:underline transition-all underline-offset-4`}
                style={{ color: colors.secondary }}
              >
                {edu.degree}
              </h3>
              <div 
                className="px-3 py-1 text-sm rounded-full"
                style={{ 
                  backgroundColor: colors.background, 
                  border: `1px solid ${colors.border}`,
                  color: colors.text
                }}
              >
                {edu.period}
              </div>
            </div>
            
            <p 
              className="mb-3 font-medium"
              style={{ color: colors.accent }}
            >
              {edu.institution}
            </p>
            
            {edu.description && <p>{edu.description}</p>}
          </div>
        ))}
        
        {!data?.education?.length && (
          <div className="relative pl-8 group">
            <div 
              className="absolute left-0 top-0 w-4 h-4 rounded-full border-2 group-hover:scale-125 transition-transform"
              style={{ 
                backgroundColor: colors.background,
                borderColor: colors.primary
              }}
            ></div>
            
            <div className="mb-2 flex items-center gap-4">
              <h3 
                className={`text-xl ${typography.headingFont} group-hover:underline transition-all underline-offset-4`}
                style={{ color: colors.secondary }}
              >
                Bacharelado em Ciência da Computação
              </h3>
              <div 
                className="px-3 py-1 text-sm rounded-full"
                style={{ 
                  backgroundColor: colors.background, 
                  border: `1px solid ${colors.border}`,
                  color: colors.text
                }}
              >
                2015 - 2019
              </div>
            </div>
            
            <p 
              className="mb-3 font-medium"
              style={{ color: colors.accent }}
            >
              Universidade Federal do Brasil
            </p>
            
            <p>
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
    <section className="py-20">
      <div className="w-20 h-1 mb-8 rounded-full" style={{ backgroundColor: colors.primary }}></div>
      <h2 
        className={`text-3xl mb-12 ${typography.headingFont}`} 
        style={{ color: colors.primary }}
      >
        Contato
      </h2>
      
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h3 
            className={`text-xl mb-6 ${typography.headingFont}`}
            style={{ color: colors.secondary }}
          >
            Vamos Conversar
          </h3>
          <p className="mb-8">
            Estou sempre aberto a novas oportunidades. Se você tem um projeto, uma ideia ou uma pergunta, 
            não hesite em entrar em contato.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.primary}20, ${colors.primary}05)`,
                  color: colors.primary
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div>
                <p className="text-sm opacity-70 mb-1">Email</p>
                <a 
                  href={`mailto:${data?.email || 'joao@exemplo.com'}`} 
                  className="text-lg hover:underline"
                  style={{ color: colors.accent }}
                >
                  {data?.email || 'joao@exemplo.com'}
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.primary}20, ${colors.primary}05)`,
                  color: colors.primary
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div>
                <p className="text-sm opacity-70 mb-1">Telefone</p>
                <a 
                  href={`tel:${data?.phone || '(11) 98765-4321'}`} 
                  className="text-lg hover:underline"
                  style={{ color: colors.accent }}
                >
                  {data?.phone || '(11) 98765-4321'}
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.primary}20, ${colors.primary}05)`,
                  color: colors.primary
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-sm opacity-70 mb-1">Localização</p>
                <p className="text-lg" style={{ color: colors.accent }}>
                  {data?.location || 'São Paulo, Brasil'}
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-10 flex space-x-5">
            {['github', 'linkedin', 'twitter', 'instagram'].map(social => (
              <a 
                href="#" 
                key={social} 
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors border-2"
                style={{ 
                  borderColor: colors.border,
                  color: colors.primary
                }}
                aria-label={`Link para ${social}`}
              >
                <span>{social.charAt(0).toUpperCase()}</span>
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <form className="space-y-6">
            <div>
              <label 
                className={`block text-sm mb-2 ${typography.bodyFont}`}
                style={{ color: colors.text }}
              >
                Nome
              </label>
              <input 
                type="text" 
                className="w-full p-3 rounded-lg bg-transparent border-2 transition-colors focus:outline-none"
                style={{ borderColor: colors.border }}
                placeholder="Seu nome"
                disabled
              />
            </div>
            <div>
              <label 
                className={`block text-sm mb-2 ${typography.bodyFont}`}
                style={{ color: colors.text }}
              >
                Email
              </label>
              <input 
                type="email" 
                className="w-full p-3 rounded-lg bg-transparent border-2 transition-colors focus:outline-none"
                style={{ borderColor: colors.border }}
                placeholder="Seu email"
                disabled
              />
            </div>
            <div>
              <label 
                className={`block text-sm mb-2 ${typography.bodyFont}`}
                style={{ color: colors.text }}
              >
                Mensagem
              </label>
              <textarea 
                className="w-full p-3 rounded-lg bg-transparent border-2 transition-colors focus:outline-none resize-none"
                style={{ borderColor: colors.border }}
                rows={5}
                placeholder="Sua mensagem"
                disabled
              ></textarea>
            </div>
            <button 
              type="button"
              className="px-6 py-3 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2"
              style={{ 
                backgroundColor: colors.primary, 
                color: colors.background
              }}
              disabled
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}; 