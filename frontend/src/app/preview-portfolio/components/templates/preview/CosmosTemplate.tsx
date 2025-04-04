'use client';

import React, { useEffect, useRef } from 'react';
import { TemplateConfig } from '@/app/types/TemplateConfig';
import { CustomSections } from '../common/CustomSections';

interface CosmosTemplateProps {
  config: TemplateConfig;
}

export function CosmosTemplate({ config }: CosmosTemplateProps) {
  const starsRef = useRef<HTMLDivElement>(null);
  const planetsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (starsRef.current) {
        starsRef.current.style.transform = `translateY(${window.scrollY * 0.2}px)`;
      }
      if (planetsRef.current) {
        planetsRef.current.style.transform = `translateY(${window.scrollY * -0.1}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      case 'custom':
        return data?.customSections && Array.isArray(data.customSections) && data.customSections.length > 0 ? (
          <section className="py-16 relative" key={sectionId}>
            <div className="absolute w-24 h-24 rounded-full opacity-10 left-20 top-20" 
              style={{ 
                background: `radial-gradient(circle, ${colors.secondary}, transparent 70%)` 
              }}
            />
            
            <CustomSections 
              sections={data.customSections} 
              className=""
              config={config}
            />
          </section>
        ) : null;
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
        color: colors.text,
        backgroundImage: `linear-gradient(${colors.background}, ${colors.background}E0)`
      }}
    >
      {/* Camada de estrelas (efeito parallax) */}
      <div 
        ref={starsRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      >
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              opacity: Math.random() * 0.7 + 0.3,
              backgroundColor: i % 5 === 0 ? colors.accent : colors.text,
              boxShadow: i % 8 === 0 ? `0 0 ${Math.random() * 5 + 3}px ${colors.primary}` : 'none',
              animation: `twinkle ${Math.random() * 5 + 3}s infinite alternate`
            }}
          />
        ))}
      </div>
      
      {/* Planetas decorativos */}
      <div 
        ref={planetsRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      >
        {/* Planeta 1 */}
        <div 
          className="absolute rounded-full opacity-10"
          style={{
            width: '300px',
            height: '300px',
            top: '15%',
            right: '-100px',
            background: `radial-gradient(circle, ${colors.secondary}, ${colors.primary})`,
            boxShadow: `0 0 60px ${colors.primary}60`
          }}
        />
        
        {/* Planeta 2 */}
        <div 
          className="absolute rounded-full opacity-5"
          style={{
            width: '200px',
            height: '200px',
            bottom: '10%',
            left: '-80px',
            background: `radial-gradient(circle, ${colors.accent}, ${colors.primary})`,
            boxShadow: `0 0 40px ${colors.accent}40`
          }}
        />
      </div>
      
      {/* Container para o conteúdo */}
      <div 
        className={`container mx-auto ${layout.maxWidth} ${layout.padding} relative`}
        style={{ zIndex: 1 }}
      >
        <div className={layout.spacing}>
          {orderedSections.map(sectionId => renderSection(sectionId))}
        </div>
      </div>
      
      {/* Estilos para animações */}
      <style jsx global>{`
        @keyframes twinkle {
          0% { opacity: 0.3; }
          100% { opacity: 1; }
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(20px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(20px) rotate(-360deg); }
        }
      `}</style>
    </div>
  );
}

// Seção Header com estilo espacial
const HeaderSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  return (
    <section className="min-h-[90vh] py-16 flex flex-col items-center justify-center relative text-center">
      {/* Efeito decorativo ao redor do título */}
      <div className="relative mb-6">
        <div 
          className="absolute inset-0 rounded-full opacity-20 animate-pulse"
          style={{ 
            transform: 'scale(1.2)',
            background: `radial-gradient(circle, ${colors.primary}60, transparent 70%)` 
          }}
        />
        <h1 
          className={`text-5xl md:text-6xl lg:text-7xl mb-4 ${typography.headingFont} tracking-wider`}
          style={{ color: colors.text }}
        >
          {data?.name || 'João da Silva'}
        </h1>
      </div>
      
      <h2 
        className={`text-xl md:text-2xl lg:text-3xl mb-8 ${typography.bodyFont} tracking-widest`}
        style={{ color: colors.secondary }}
      >
        {data?.title || 'Desenvolvedor Full Stack'}
      </h2>
      
      <p className="max-w-2xl text-lg mb-12 leading-relaxed">
        {data?.about || 'Desenvolvedor apaixonado por criar soluções web eficientes e experiências digitais incríveis.'}
      </p>
      
      <div className="flex flex-wrap gap-4 justify-center">
        <button 
          className="px-8 py-3 rounded-full transition-all transform hover:scale-105 focus:outline-none"
          style={{ 
            background: `linear-gradient(45deg, ${colors.primary}, ${colors.secondary})`,
            color: colors.text,
            boxShadow: `0 4px 20px ${colors.primary}50`
          }}
        >
          Meus Projetos
        </button>
        <button 
          className="px-8 py-3 rounded-full transition-all transform hover:scale-105 focus:outline-none border-2"
          style={{ 
            borderColor: colors.primary,
            color: colors.text,
            boxShadow: `0 4px 20px ${colors.primary}30`
          }}
        >
          Contato
        </button>
      </div>
      
      {/* Ícone de scroll down animado */}
      <div 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce"
        style={{ color: colors.text }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

// As demais seções seguem o mesmo padrão, com o estilo espacial...
const AboutSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  return (
    <section className="py-16 relative">
      <div className="absolute w-20 h-20 rounded-full opacity-10 right-0 top-0" 
        style={{ 
          background: `radial-gradient(circle, ${colors.accent}, transparent 70%)` 
        }}
      />
      
      <h2 
        className={`text-3xl mb-12 ${typography.headingFont} text-center relative inline-block`}
        style={{ color: colors.secondary }}
      >
        <span className="relative z-10">Sobre Mim</span>
        <div 
          className="absolute bottom-0 left-0 w-full h-1 rounded"
          style={{ 
            background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})`,
            boxShadow: `0 0 10px ${colors.primary}` 
          }}
        />
      </h2>
      
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="mb-6 text-lg leading-relaxed">
            {data?.about || 'Com mais de 5 anos de experiência em desenvolvimento web, tenho trabalhado com as mais variadas tecnologias para criar produtos digitais de alto impacto.'}
          </p>
          <p className="text-lg leading-relaxed">
            Sou especializado em React, Next.js, Node.js e bancos de dados SQL/NoSQL, sempre buscando as melhores práticas e arquiteturas escaláveis para cada projeto.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-3">
            {['Inovador', 'Criativo', 'Analítico', 'Proativo', 'Adaptável'].map(trait => (
              <span 
                key={trait} 
                className="px-4 py-2 rounded-full inline-block text-sm"
                style={{ 
                  backgroundColor: colors.surface,
                  color: colors.text,
                  border: `1px solid ${colors.border}`
                }}
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
        
        <div className="relative">
          <div 
            className="w-full aspect-square rounded-full overflow-hidden border-4 relative max-w-sm mx-auto"
            style={{ 
              borderColor: colors.primary,
              boxShadow: `0 0 20px ${colors.primary}50` 
            }}
          >
            <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
              <span className="text-gray-400">Foto</span>
            </div>
            
            {/* Órbita decorativa */}
            <div 
              className="absolute inset-0 rounded-full border-2 border-dashed"
              style={{ 
                borderColor: `${colors.accent}40`,
                transform: 'scale(1.2)' 
              }}
            />
            
            {/* Pequeno planeta em órbita */}
            <div 
              className="absolute w-6 h-6 rounded-full top-0 left-1/2"
              style={{ 
                backgroundColor: colors.accent,
                boxShadow: `0 0 10px ${colors.accent}`,
                animation: 'orbit 12s linear infinite'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Seção de Experiência com tema espacial
const ExperienceSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  return (
    <section className="py-16 relative">
      <div className="absolute w-32 h-32 rounded-full opacity-10 left-0 top-10" 
        style={{ 
          background: `radial-gradient(circle, ${colors.primary}, transparent 70%)` 
        }}
      />
      
      <h2 
        className={`text-3xl mb-12 ${typography.headingFont} text-center relative inline-block`}
        style={{ color: colors.secondary }}
      >
        <span className="relative z-10">Experiência</span>
        <div 
          className="absolute bottom-0 left-0 w-full h-1 rounded"
          style={{ 
            background: `linear-gradient(to right, ${colors.accent}, ${colors.primary})`,
            boxShadow: `0 0 10px ${colors.primary}` 
          }}
        />
      </h2>
      
      <div className="space-y-12">
        {(data?.experiences || [
          {
            company: "Empresa Espacial",
            role: "Desenvolvedor Frontend Senior",
            period: "2020 - Presente",
            description: "Desenvolvimento de interfaces interativas utilizando React e Next.js para aplicações web de alta performance."
          },
          {
            company: "Galáxia Tech",
            role: "Desenvolvedor Fullstack",
            period: "2018 - 2020",
            description: "Responsável pelo desenvolvimento fullstack de aplicações web usando React, Node.js e MongoDB."
          }
        ]).map((exp, index) => (
          <div 
            key={index} 
            className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px"
            style={{ 
              borderLeft: `2px solid ${colors.border}`,
              boxShadow: `-3px 0 10px ${colors.primary}40`
            }}
          >
            {/* Ponto luminoso no timeline */}
            <div 
              className="absolute left-[-7px] top-2 w-3 h-3 rounded-full"
              style={{ 
                backgroundColor: colors.accent,
                boxShadow: `0 0 10px ${colors.accent}`
              }}
            />
            
            <div className="mb-2 flex justify-between flex-wrap">
              <h3 
                className={`text-xl ${typography.headingFont}`}
                style={{ color: colors.text }}
              >
                {exp.role}
              </h3>
              <span 
                className="px-3 py-1 rounded-full text-sm"
                style={{ 
                  backgroundColor: `${colors.surface}80`,
                  color: colors.secondary,
                  backdropFilter: 'blur(4px)'
                }}
              >
                {exp.period}
              </span>
            </div>
            
            <h4 
              className="text-lg mb-3"
              style={{ color: colors.secondary }}
            >
              {exp.company}
            </h4>
            
            <p className="leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Seção de Projetos com tema espacial
const ProjectsSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  return (
    <section className="py-16 relative">
      <div className="absolute w-40 h-40 rounded-full opacity-5 right-0 bottom-0" 
        style={{ 
          background: `radial-gradient(circle, ${colors.accent}, transparent 70%)` 
        }}
      />
      
      <h2 
        className={`text-3xl mb-12 ${typography.headingFont} text-center relative inline-block`}
        style={{ color: colors.secondary }}
      >
        <span className="relative z-10">Projetos</span>
        <div 
          className="absolute bottom-0 left-0 w-full h-1 rounded"
          style={{ 
            background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})`,
            boxShadow: `0 0 10px ${colors.primary}` 
          }}
        />
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(data?.projects || [
          {
            title: "Explorador Estelar",
            description: "Aplicação web que mostra dados em tempo real de missões espaciais usando a API da NASA.",
            tech: ["React", "TypeScript", "TailwindCSS"]
          },
          {
            title: "Portal Interestelar",
            description: "Plataforma de e-commerce com sistema de pagamentos integrado e painel administrativo.",
            tech: ["Next.js", "Node.js", "MongoDB"]
          },
          {
            title: "Cosmos Dashboard",
            description: "Dashboard para visualização e análise de dados com gráficos interativos.",
            tech: ["React", "D3.js", "Material UI"]
          }
        ]).map((project, index) => (
          <div 
            key={index} 
            className="relative rounded-lg p-6 transition-all transform hover:-translate-y-2"
            style={{ 
              backgroundColor: `${colors.surface}90`,
              backdropFilter: 'blur(10px)',
              border: `1px solid ${colors.border}`,
              boxShadow: `0 5px 20px ${colors.primary}30`
            }}
          >
            {/* Elemento decorativo */}
            <div 
              className="absolute -top-3 -right-3 w-12 h-12 rounded-full opacity-70"
              style={{ 
                background: `radial-gradient(circle, ${colors.accent}40, transparent 70%)` 
              }}
            />
            
            <h3 
              className={`text-xl mb-4 ${typography.headingFont}`}
              style={{ color: colors.text }}
            >
              {project.title}
            </h3>
            
            <p className="mb-4">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {(project.tech || []).map((tech, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 rounded-full text-xs"
                  style={{ 
                    backgroundColor: `${colors.primary}30`,
                    color: colors.text,
                    border: `1px solid ${colors.primary}50`
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <button 
              className="mt-6 px-4 py-2 rounded-full text-sm transition-all hover:pl-6"
              style={{ 
                background: `linear-gradient(45deg, ${colors.primary}90, ${colors.secondary}90)`,
                color: colors.text,
                boxShadow: `0 2px 10px ${colors.primary}30`
              }}
            >
              Ver Projeto →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

// Seção de Habilidades com tema espacial
const SkillsSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  const skillCategories = [
    {
      name: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "TailwindCSS"]
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express", "Python", "MongoDB"]
    },
    {
      name: "Ferramentas",
      skills: ["Git", "Docker", "AWS", "Figma"]
    }
  ];
  
  return (
    <section className="py-16 relative">
      <div className="absolute w-24 h-24 rounded-full opacity-10 left-20 top-20" 
        style={{ 
          background: `radial-gradient(circle, ${colors.secondary}, transparent 70%)` 
        }}
      />
      
      <h2 
        className={`text-3xl mb-12 ${typography.headingFont} text-center relative inline-block`}
        style={{ color: colors.secondary }}
      >
        <span className="relative z-10">Habilidades</span>
        <div 
          className="absolute bottom-0 left-0 w-full h-1 rounded"
          style={{ 
            background: `linear-gradient(to right, ${colors.secondary}, ${colors.accent})`,
            boxShadow: `0 0 10px ${colors.secondary}` 
          }}
        />
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {(data?.skillCategories || skillCategories).map((category, idx) => (
          <div 
            key={idx} 
            className="relative"
          >
            <div 
              className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full opacity-20"
              style={{ 
                border: `1px solid ${colors.border}`,
                animation: 'orbit 10s linear infinite'
              }}
            />
            
            <h3 
              className={`text-xl mb-6 text-center ${typography.headingFont}`}
              style={{ color: colors.text }}
            >
              {category.name}
            </h3>
            
            <div className="flex flex-wrap justify-center gap-3">
              {(category.skills || []).map((skill, i) => (
                <div 
                  key={i} 
                  className="relative px-4 py-2 rounded-lg text-center transition-all transform hover:scale-110"
                  style={{ 
                    backgroundColor: `${colors.surface}60`,
                    backdropFilter: 'blur(5px)',
                    border: `1px solid ${colors.border}`,
                    boxShadow: `0 2px 10px ${colors.primary}20`
                  }}
                >
                  <div 
                    className="absolute -inset-px rounded-lg opacity-0 hover:opacity-100 transition-opacity"
                    style={{ 
                      background: `linear-gradient(45deg, ${colors.primary}30, ${colors.accent}30)`,
                      boxShadow: `0 0 15px ${colors.primary}` 
                    }}
                  />
                  
                  <span className="relative z-10">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Seção de Educação com tema espacial
const EducationSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  return (
    <section className="py-16 relative">
      <div className="absolute w-32 h-32 rounded-full opacity-10 right-10 top-10" 
        style={{ 
          background: `radial-gradient(circle, ${colors.primary}, transparent 70%)` 
        }}
      />
      
      <h2 
        className={`text-3xl mb-12 ${typography.headingFont} text-center relative inline-block`}
        style={{ color: colors.secondary }}
      >
        <span className="relative z-10">Educação</span>
        <div 
          className="absolute bottom-0 left-0 w-full h-1 rounded"
          style={{ 
            background: `linear-gradient(to right, ${colors.accent}, ${colors.primary})`,
            boxShadow: `0 0 10px ${colors.accent}` 
          }}
        />
      </h2>
      
      <div className="space-y-10">
        {(data?.education || [
          {
            institution: "Universidade Estelar",
            degree: "Mestrado em Ciência da Computação",
            period: "2018 - 2020",
            description: "Especialização em Inteligência Artificial e Processamento de Dados"
          },
          {
            institution: "Academia Galáctica",
            degree: "Bacharelado em Engenharia de Software",
            period: "2014 - 2018",
            description: "Foco em desenvolvimento web e mobile com destaque em inovação tecnológica"
          }
        ]).map((edu, index) => (
          <div 
            key={index} 
            className="relative rounded-lg p-6"
            style={{ 
              backgroundColor: `${colors.surface}50`,
              backdropFilter: 'blur(8px)',
              border: `1px solid ${colors.border}`,
              boxShadow: `0 4px 15px ${colors.primary}20`
            }}
          >
            <div 
              className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full"
              style={{ 
                backgroundColor: colors.accent,
                boxShadow: `0 0 15px ${colors.accent}` 
              }}
            />
            
            <div className="flex justify-between flex-wrap mb-3">
              <h3 
                className={`text-xl ${typography.headingFont}`}
                style={{ color: colors.text }}
              >
                {edu.degree}
              </h3>
              <span 
                className="px-3 py-1 rounded-full text-sm"
                style={{ 
                  backgroundColor: `${colors.primary}30`,
                  color: colors.text
                }}
              >
                {edu.period}
              </span>
            </div>
            
            <h4 
              className="text-lg mb-3"
              style={{ color: colors.secondary }}
            >
              {edu.institution}
            </h4>
            
            <p className="leading-relaxed">
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

const ContactSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              opacity: Math.random() * 0.5 + 0.2,
              backgroundColor: i % 2 === 0 ? colors.accent : colors.primary,
              boxShadow: `0 0 ${Math.random() * 10 + 5}px ${i % 2 === 0 ? colors.accent : colors.primary}`,
              animation: `twinkle ${Math.random() * 5 + 3}s infinite alternate`
            }}
          />
        ))}
      </div>
      
      <h2 
        className={`text-3xl mb-12 ${typography.headingFont} text-center relative inline-block`}
        style={{ color: colors.secondary }}
      >
        <span className="relative z-10">Contato</span>
        <div 
          className="absolute bottom-0 left-0 w-full h-1 rounded"
          style={{ 
            background: `linear-gradient(to right, ${colors.secondary}, ${colors.primary})`,
            boxShadow: `0 0 10px ${colors.secondary}` 
          }}
        />
      </h2>
      
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <p className="text-lg mb-6 leading-relaxed">
            Fique à vontade para entrar em contato se quiser colaborar em projetos, discutir ideias ou simplesmente trocar uma mensagem.
          </p>
          
          <div className="space-y-4">
            {[
              { icon: "✉️", text: data?.email || "seuemail@exemplo.com", label: "Email" },
              { icon: "📱", text: data?.phone || "(11) 98765-4321", label: "Telefone" },
              { icon: "📍", text: data?.location || "São Paulo, Brasil", label: "Localização" }
            ].map((contact, idx) => (
              <div key={idx} className="flex items-center">
                <div 
                  className="mr-4 w-12 h-12 flex items-center justify-center rounded-full text-xl"
                  style={{ 
                    backgroundColor: `${colors.surface}80`,
                    border: `1px solid ${colors.border}`,
                    boxShadow: `0 2px 10px ${colors.primary}30`
                  }}
                >
                  {contact.icon}
                </div>
                <div>
                  <p className="text-sm mb-1" style={{ color: colors.secondary }}>{contact.label}</p>
                  <p className="text-lg">{contact.text}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex gap-4">
            {["Twitter", "LinkedIn", "GitHub", "Instagram"].map((social, idx) => (
              <a 
                key={idx}
                href="#" 
                className="w-10 h-10 flex items-center justify-center rounded-full transition-all transform hover:scale-110"
                style={{ 
                  backgroundColor: `${colors.surface}80`,
                  border: `1px solid ${colors.border}`,
                  boxShadow: `0 2px 10px ${colors.primary}30`
                }}
              >
                {social.substring(0, 1)}
              </a>
            ))}
          </div>
        </div>
        
        <div 
          className="rounded-lg p-6"
          style={{ 
            backgroundColor: `${colors.surface}70`,
            backdropFilter: 'blur(10px)',
            border: `1px solid ${colors.border}`,
            boxShadow: `0 8px 30px ${colors.primary}20`
          }}
        >
          <form className="space-y-4">
            <div>
              <label className="block mb-2" style={{ color: colors.secondary }}>Nome</label>
              <input 
                type="text" 
                className="w-full p-3 rounded-lg bg-transparent"
                style={{ 
                  border: `1px solid ${colors.border}`,
                  color: colors.text
                }}
              />
            </div>
            
            <div>
              <label className="block mb-2" style={{ color: colors.secondary }}>Email</label>
              <input 
                type="email" 
                className="w-full p-3 rounded-lg bg-transparent"
                style={{ 
                  border: `1px solid ${colors.border}`,
                  color: colors.text
                }}
              />
            </div>
            
            <div>
              <label className="block mb-2" style={{ color: colors.secondary }}>Mensagem</label>
              <textarea 
                rows={5}
                className="w-full p-3 rounded-lg bg-transparent"
                style={{ 
                  border: `1px solid ${colors.border}`,
                  color: colors.text
                }}
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="w-full py-3 rounded-lg transition-all transform hover:translate-y-[-2px]"
              style={{ 
                background: `linear-gradient(45deg, ${colors.primary}, ${colors.accent})`,
                color: colors.text,
                boxShadow: `0 4px 15px ${colors.primary}50`
              }}
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
