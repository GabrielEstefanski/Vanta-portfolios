'use client';

import React from 'react';
import { TemplateConfig } from '@/app/types/TemplateConfig';

interface MinimalistTemplateProps {
  config: TemplateConfig;
}

export function MinimalistTemplate({ config }: MinimalistTemplateProps) {
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
      {/* Design minimalista: container com largura limitada, espaçamento generoso */}
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

// Seções com estilo minimalista - tipografia limpa, espaços em branco, linhas sutis
const HeaderSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  return (
    <section className="py-16 text-center border-b border-gray-100 dark:border-gray-800">
      <h1 
        className={`text-4xl md:text-5xl lg:text-6xl font-light mb-4 ${typography.headingFont}`}
        style={{ color: colors.primary }}
      >
        {data?.name || 'João da Silva'}
      </h1>
      <h2 
        className={`text-xl md:text-2xl font-extralight tracking-wide mb-8 ${typography.bodyFont}`}
        style={{ color: colors.secondary }}
      >
        {data?.title || 'Desenvolvedor Full Stack'}
      </h2>
      <p className="max-w-2xl mx-auto text-lg font-light leading-relaxed">
        {data?.about || 'Desenvolvedor apaixonado por criar soluções web eficientes e experiências digitais incríveis.'}
      </p>
    </section>
  );
};

const AboutSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  return (
    <section className="py-16 border-b border-gray-100 dark:border-gray-800">
      <h2 
        className={`text-2xl md:text-3xl font-light tracking-wide mb-8 ${typography.headingFont}`} 
        style={{ color: colors.primary }}
      >
        Sobre Mim
      </h2>
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-2/3">
          <p className="mb-6 font-light leading-relaxed text-lg">
            {data?.about || 'Com mais de 5 anos de experiência em desenvolvimento web, tenho trabalhado com as mais variadas tecnologias para criar produtos digitais de alto impacto.'}
          </p>
          <p className="font-light leading-relaxed text-lg">
            Sou especializado em React, Next.js, Node.js e bancos de dados SQL/NoSQL, sempre buscando as melhores práticas e arquiteturas escaláveis para cada projeto.
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <div 
            className="w-64 h-64 rounded-full overflow-hidden border" 
            style={{ borderColor: colors.accent }}
          >
            <div className="w-full h-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <span className="text-gray-400">Foto</span>
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
    <section className="py-16 border-b border-gray-100 dark:border-gray-800">
      <h2 
        className={`text-2xl md:text-3xl font-light tracking-wide mb-8 ${typography.headingFont}`} 
        style={{ color: colors.primary }}
      >
        Experiência
      </h2>
      <div className="space-y-12">
        {(data?.experiences || []).map((exp, index) => (
          <div key={index} className="border-l-2 pl-8 py-2" style={{ borderColor: colors.accent }}>
            <h3 className={`text-xl font-light mb-2 ${typography.headingFont}`} style={{ color: colors.secondary }}>
              {exp.position}
            </h3>
            <div className="text-sm font-light mb-4" style={{ color: colors.secondary }}>
              {exp.company} • {exp.startDate} - {exp.endDate}
            </div>
            <p className="mb-4 font-light">{exp.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {exp.technologies.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 text-xs border rounded-full"
                  style={{ borderColor: colors.accent, color: colors.secondary }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
        
        {!data?.experiences?.length && (
          <div className="border-l-2 pl-8 py-2" style={{ borderColor: colors.accent }}>
            <h3 className={`text-xl font-light mb-2 ${typography.headingFont}`} style={{ color: colors.secondary }}>
              Desenvolvedor Full Stack Sênior
            </h3>
            <div className="text-sm font-light mb-4" style={{ color: colors.secondary }}>
              Tech Solutions • 2021 - Presente
            </div>
            <p className="mb-4 font-light">
              Desenvolvimento de aplicações web usando React, Next.js e Node.js. Implementação de APIs RESTful e integração com diversos serviços.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

const ProjectsSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  return (
    <section className="py-16 border-b border-gray-100 dark:border-gray-800">
      <h2 
        className={`text-2xl md:text-3xl font-light tracking-wide mb-8 ${typography.headingFont}`} 
        style={{ color: colors.primary }}
      >
        Projetos
      </h2>
      <div className="grid md:grid-cols-2 gap-10">
        {(data?.projects || []).map((project, index) => (
          <div 
            key={index} 
            className="group border rounded-none overflow-hidden transition-all hover:shadow-lg"
            style={{ borderColor: 'transparent' }}
          >
            <div className="h-48 bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
              {project.imageUrl ? (
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
              ) : (
                <span className="text-gray-400">Imagem do Projeto</span>
              )}
            </div>
            <div className="p-6">
              <h3 
                className={`text-xl font-light mb-3 ${typography.headingFont}`}
                style={{ color: colors.secondary }}
              >
                {project.title}
              </h3>
              <p className="mb-4 font-light">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 text-xs border rounded-full"
                    style={{ borderColor: colors.accent, color: colors.secondary }}
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
            className="group border rounded-none overflow-hidden transition-all hover:shadow-lg"
            style={{ borderColor: 'transparent' }}
          >
            <div className="h-48 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <span className="text-gray-400">Imagem do Projeto</span>
            </div>
            <div className="p-6">
              <h3 
                className={`text-xl font-light mb-3 ${typography.headingFont}`}
                style={{ color: colors.secondary }}
              >
                Portfolio Generator
              </h3>
              <p className="mb-4 font-light">
                Ferramenta para criação de portfólios personalizados com diferentes templates e opções de customização.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TailwindCSS'].map(tech => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 text-xs border rounded-full"
                    style={{ borderColor: colors.accent, color: colors.secondary }}
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
    <section className="py-16 border-b border-gray-100 dark:border-gray-800">
      <h2 
        className={`text-2xl md:text-3xl font-light tracking-wide mb-8 ${typography.headingFont}`} 
        style={{ color: colors.primary }}
      >
        Habilidades
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {(data?.skills || ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'TailwindCSS']).map((skill, index) => (
          <div 
            key={typeof skill === 'string' ? skill : index} 
            className="p-4 text-center transition-all hover:transform hover:translate-y-[-5px]"
          >
            {typeof skill !== 'string' && (
              <div 
                className="mb-2 h-1 rounded-full overflow-hidden"
                style={{ backgroundColor: colors.secondary + '20' }}
              >
                <div 
                  className="h-full rounded-full" 
                  style={{ 
                    backgroundColor: colors.secondary,
                    width: `${skill.level}%`
                  }}
                ></div>
              </div>
            )}
            <h3 className={`${typography.headingFont} font-light text-lg`}>
              {typeof skill === 'string' ? skill : skill.name}
            </h3>
            {typeof skill !== 'string' && skill.category && (
              <p className="text-sm opacity-70 mt-1 font-light">{skill.category}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const EducationSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  return (
    <section className="py-16 border-b border-gray-100 dark:border-gray-800">
      <h2 
        className={`text-2xl md:text-3xl font-light tracking-wide mb-8 ${typography.headingFont}`} 
        style={{ color: colors.primary }}
      >
        Educação
      </h2>
      <div className="space-y-10">
        {(data?.education || []).map((edu, index) => (
          <div key={index} className="border-l-2 pl-8 py-2" style={{ borderColor: colors.accent }}>
            <h3 className={`text-xl font-light mb-2 ${typography.headingFont}`} style={{ color: colors.secondary }}>
              {edu.degree}
            </h3>
            <div className="text-sm font-light mb-4" style={{ color: colors.secondary }}>
              {edu.institution} • {edu.period}
            </div>
            <p className="font-light">{edu.description}</p>
          </div>
        ))}
        
        {!data?.education?.length && (
          <div className="border-l-2 pl-8 py-2" style={{ borderColor: colors.accent }}>
            <h3 className={`text-xl font-light mb-2 ${typography.headingFont}`} style={{ color: colors.secondary }}>
              Bacharelado em Ciência da Computação
            </h3>
            <div className="text-sm font-light mb-4" style={{ color: colors.secondary }}>
              Universidade Federal do Brasil • 2015 - 2019
            </div>
            <p className="font-light">
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
    <section className="py-16">
      <h2 
        className={`text-2xl md:text-3xl font-light tracking-wide mb-8 ${typography.headingFont}`} 
        style={{ color: colors.primary }}
      >
        Contato
      </h2>
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2">
          <p className="mb-6 font-light leading-relaxed">
            Estou sempre aberto a novas oportunidades e parcerias. Se você gostaria de trabalhar comigo ou apenas trocar uma ideia, entre em contato!
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-light" style={{ color: colors.secondary }}>Email:</span>
              <span className="font-light">{data?.email || 'joao@exemplo.com'}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-light" style={{ color: colors.secondary }}>Telefone:</span>
              <span className="font-light">{data?.phone || '(11) 98765-4321'}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-light" style={{ color: colors.secondary }}>Localização:</span>
              <span className="font-light">{data?.location || 'São Paulo, Brasil'}</span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <form className="space-y-4">
            <div>
              <label className="block mb-2 font-light" style={{ color: colors.secondary }}>Nome</label>
              <input 
                type="text" 
                className="w-full p-3 border bg-transparent font-light" 
                style={{ borderColor: colors.accent }}
                placeholder="Seu nome"
                disabled
              />
            </div>
            <div>
              <label className="block mb-2 font-light" style={{ color: colors.secondary }}>Email</label>
              <input 
                type="email" 
                className="w-full p-3 border bg-transparent font-light" 
                style={{ borderColor: colors.accent }}
                placeholder="Seu email"
                disabled
              />
            </div>
            <div>
              <label className="block mb-2 font-light" style={{ color: colors.secondary }}>Mensagem</label>
              <textarea 
                className="w-full p-3 border bg-transparent font-light" 
                style={{ borderColor: colors.accent }}
                rows={4}
                placeholder="Sua mensagem"
                disabled
              ></textarea>
            </div>
            <button 
              type="button"
              className="px-6 py-3 border font-light"
              style={{ borderColor: colors.accent, color: colors.text }}
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