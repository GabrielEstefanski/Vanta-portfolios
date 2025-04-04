'use client';

import React, { useEffect, useRef } from 'react';
import { TemplateConfig } from '@/app/types/TemplateConfig';
import { CustomSections } from '../common/CustomSections';

interface VantaTemplateProps {
  config: TemplateConfig;
}

export function VantaTemplate({ config }: VantaTemplateProps) {
  const bgRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (bgRef.current) {
        const x = e.clientX / window.innerWidth * 15;
        const y = e.clientY / window.innerHeight * 15;
        bgRef.current.style.transform = `translate3d(${-x}px, ${-y}px, 0)`;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
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
          <section className="py-20" key={sectionId}>
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
        backgroundImage: `radial-gradient(circle at 10% 20%, ${colors.primary}08, transparent 35%)`,
      }}
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
        <div 
          ref={bgRef}
          className="w-[120%] h-[120%] -ml-[10%] -mt-[10%] bg-grid-pattern transition-transform duration-700 ease-out"
        ></div>
      </div>
      
      <div 
        className="absolute top-0 left-0 right-0 h-64 opacity-20 pointer-events-none"
        style={{ 
          background: `linear-gradient(to bottom, ${colors.primary}40, transparent)` 
        }}
      ></div>
      
      <div 
        className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full opacity-[0.04] blur-3xl pointer-events-none"
        style={{ 
          background: `radial-gradient(circle, ${colors.accent}, transparent 70%)` 
        }}
      ></div>
      
      <div 
        className={`container mx-auto ${layout.maxWidth} ${layout.padding} relative z-10`}
        style={{ color: colors.text }}
      >
        <div className={layout.spacing}>
          {orderedSections.map(sectionId => renderSection(sectionId))}
        </div>
      </div>
      
      <style jsx global>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, ${colors.primary}10 1px, transparent 1px),
            linear-gradient(to bottom, ${colors.primary}10 1px, transparent 1px);
          background-size: 60px 60px;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes slideDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .luxury-border {
          position: relative;
          overflow: hidden;
        }
        
        .luxury-border:after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          border: 1px solid ${colors.primary}30;
          pointer-events: none;
        }
        
        .luxury-border:before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 1px;
          background: linear-gradient(90deg, transparent, ${colors.primary}, transparent);
          animation: shimmer 3s infinite;
        }
      `}</style>
    </div>
  );
}

// Header com estilo luxuoso e minimalista
const HeaderSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  return (
    <section className="py-28 flex flex-col items-center justify-center min-h-[85vh]">
      <div 
        className="text-center max-w-4xl relative"
        style={{ animation: 'fadeIn 1s ease-out' }}
      >
        <h1 
          className={`text-5xl md:text-7xl lg:text-8xl tracking-tight mb-8 ${typography.headingFont}`}
          style={{ 
            color: colors.primary,
            letterSpacing: '-.02em',
            fontWeight: 'lighter',
            textShadow: `0 0 40px ${colors.primary}30`
          }}
        >
          {data?.name || 'João da Silva'}
        </h1>
        
        <div 
          className="h-[1px] w-24 mx-auto mb-10 relative overflow-hidden" 
        >
          <div className="absolute inset-0" style={{ backgroundColor: colors.accent }}></div>
          <div 
            className="absolute inset-0 opacity-50"
            style={{ 
              background: `linear-gradient(90deg, transparent, ${colors.primary}, transparent)`,
              animation: 'shimmer 3s infinite' 
            }}
          ></div>
        </div>
        
        <h2 
          className={`text-base md:text-xl tracking-[0.25em] uppercase mb-14 ${typography.bodyFont}`}
          style={{ 
            color: colors.secondary,
            fontWeight: 'lighter',
            letterSpacing: '0.3em'
          }}
        >
          {data?.title || 'Desenvolvedor Full Stack'}
        </h2>
        
        <p 
          className="max-w-2xl mx-auto text-lg tracking-wide leading-relaxed opacity-80 font-light"
          style={{ animation: 'slideUp 0.8s ease-out' }}
        >
          {data?.about || 'Desenvolvedor apaixonado por criar soluções web eficientes e experiências digitais incríveis.'}
        </p>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div 
          className="w-[1px] h-10 relative overflow-hidden"
          style={{ backgroundColor: `${colors.primary}40` }}
        >
          <div 
            className="w-full absolute top-0 animate-[scrollIndicator_1.5s_ease-in-out_infinite]"
            style={{ 
              height: '30%', 
              backgroundColor: colors.accent,
              animation: 'slideDown 1.5s infinite' 
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  return (
    <section className="py-28">
      <div className="grid md:grid-cols-12 gap-16">
        <div className="md:col-span-5 lg:col-span-4 order-2 md:order-1">
          <div 
            className="w-full aspect-square overflow-hidden relative luxury-border"
            style={{ 
              background: `linear-gradient(${colors.background}, ${colors.background})`,
              boxShadow: `0 20px 60px -20px ${colors.primary}15`
            }}
          >
            <div className="absolute inset-0 opacity-30 z-0"
              style={{ 
                background: `radial-gradient(circle at 30% 20%, ${colors.primary}20, transparent 70%)` 
              }}
            ></div>
            <div className="w-full h-full bg-gray-900 flex items-center justify-center relative z-10">
              <span className="text-gray-700 uppercase tracking-[0.2em] font-light">Foto</span>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-7 lg:col-span-8 order-1 md:order-2">
          <h2 
            className={`text-2xl md:text-3xl tracking-tight mb-8 uppercase ${typography.headingFont}`} 
            style={{ 
              color: colors.primary,
              fontWeight: 'lighter',
              letterSpacing: '0.1em'
            }}
          >
            Sobre Mim
          </h2>
          
          <div 
            className="h-[1px] w-16 mb-14 relative overflow-hidden" 
          >
            <div className="absolute inset-0" style={{ backgroundColor: colors.accent }}></div>
            <div 
              className="absolute inset-0 opacity-50"
              style={{ 
                background: `linear-gradient(90deg, transparent, ${colors.primary}, transparent)`,
                animation: 'shimmer 3s infinite' 
              }}
            ></div>
          </div>
          
          <p className="mb-10 leading-loose text-lg font-light opacity-90">
            {data?.about || 'Com mais de 5 anos de experiência em desenvolvimento web, tenho trabalhado com as mais variadas tecnologias para criar produtos digitais de alto impacto.'}
          </p>
          
          <p className="leading-loose text-lg font-light opacity-90">
            Sou especializado em React, Next.js, Node.js e bancos de dados SQL/NoSQL, sempre buscando as melhores práticas e arquiteturas escaláveis para cada projeto.
          </p>
          
          <div className="mt-14 flex items-center gap-8">
            <a 
              href="#contact" 
              className="px-6 py-2 inline-flex items-center uppercase text-xs tracking-[0.2em] relative overflow-hidden transition-all"
              style={{ 
                color: colors.accent,
                borderBottom: `1px solid ${colors.accent}40`
              }}
            >
              <span>Entre em contato</span>
              <span className="ml-3">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  return (
    <section className="py-28">
      <h2 
        className={`text-2xl md:text-3xl tracking-tight mb-8 uppercase ${typography.headingFont}`} 
        style={{ 
          color: colors.primary,
          fontWeight: 'lighter',
          letterSpacing: '0.1em'
        }}
      >
        Experiência
      </h2>
      
      <div 
        className="h-[1px] w-16 mb-14 relative overflow-hidden" 
      >
        <div className="absolute inset-0" style={{ backgroundColor: colors.accent }}></div>
        <div 
          className="absolute inset-0 opacity-50"
          style={{ 
            background: `linear-gradient(90deg, transparent, ${colors.primary}, transparent)`,
            animation: 'shimmer 3s infinite' 
          }}
        ></div>
      </div>
      
      <div className="space-y-24">
        {(data?.experiences || []).map((exp, index) => (
          <div 
            key={index} 
            className="grid md:grid-cols-12 gap-10 relative"
          >
            {index < (data?.experiences || []).length - 1 && (
              <div 
                className="absolute left-[40px] md:left-[50%] top-[90px] md:top-[30px] w-[1px] h-[calc(100%+4rem)] md:transform md:-translate-x-[50%] opacity-20 hidden md:block" 
                style={{ 
                  background: `linear-gradient(to bottom, ${colors.accent}60, transparent)` 
                }}
              ></div>
            )}
            
            <div className="md:col-span-5 md:text-right">
              <h3 
                className={`text-xl tracking-tight mb-3 ${typography.headingFont}`} 
                style={{ 
                  color: colors.secondary,
                  fontWeight: 'lighter' 
                }}
              >
                {exp.position}
              </h3>
              
              <div 
                className="text-sm tracking-wider mb-4 uppercase opacity-90" 
                style={{ 
                  color: colors.secondary,
                  letterSpacing: '0.15em'
                }}
              >
                {exp.company}
              </div>
              
              <div 
                className="text-sm opacity-60 font-light tracking-wider"
                style={{ letterSpacing: '0.05em' }}
              >
                {exp.startDate} — {exp.endDate}
              </div>
            </div>
            
            <div className="md:col-span-7 relative">
              <div 
                className="w-2 h-2 rounded-full absolute left-[-31px] top-3 hidden md:block"
                style={{ backgroundColor: colors.accent }}
              >
                <div 
                  className="absolute w-6 h-6 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ping opacity-30"
                  style={{ backgroundColor: colors.accent }}
                ></div>
              </div>
              
              <p className="mb-8 font-light leading-relaxed opacity-90">{exp.description}</p>
              
              <div className="flex flex-wrap gap-6 mt-6">
                {exp.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="py-1 text-xs uppercase tracking-widest font-light"
                    style={{ 
                      color: colors.accent,
                      letterSpacing: '0.1em'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
        
        {!data?.experiences?.length && (
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5 md:text-right">
              <h3 
                className={`text-xl tracking-tight mb-3 ${typography.headingFont}`} 
                style={{ 
                  color: colors.secondary,
                  fontWeight: 'lighter' 
                }}
              >
                Desenvolvedor Full Stack Sênior
              </h3>
              
              <div 
                className="text-sm tracking-wider mb-4 uppercase opacity-90" 
                style={{ 
                  color: colors.secondary,
                  letterSpacing: '0.15em'
                }}
              >
                Tech Solutions
              </div>
              
              <div 
                className="text-sm opacity-60 font-light tracking-wider"
                style={{ letterSpacing: '0.05em' }}
              >
                2021 — Presente
              </div>
            </div>
            
            <div className="md:col-span-7 relative">
              <div 
                className="w-2 h-2 rounded-full absolute left-[-31px] top-3 hidden md:block"
                style={{ backgroundColor: colors.accent }}
              >
                <div 
                  className="absolute w-6 h-6 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ping opacity-30"
                  style={{ backgroundColor: colors.accent }}
                ></div>
              </div>
              
              <p className="mb-6 font-light leading-relaxed opacity-90">
                Desenvolvimento de aplicações web usando React, Next.js e Node.js. Implementação de APIs RESTful e integração com diversos serviços.
              </p>
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
    <section className="py-28">
      <h2 
        className={`text-2xl md:text-3xl tracking-tight mb-8 uppercase ${typography.headingFont}`} 
        style={{ 
          color: colors.primary,
          fontWeight: 'lighter',
          letterSpacing: '0.1em'
        }}
      >
        Projetos
      </h2>
      
      <div 
        className="h-[1px] w-16 mb-14 relative overflow-hidden" 
      >
        <div className="absolute inset-0" style={{ backgroundColor: colors.accent }}></div>
        <div 
          className="absolute inset-0 opacity-50"
          style={{ 
            background: `linear-gradient(90deg, transparent, ${colors.primary}, transparent)`,
            animation: 'shimmer 3s infinite' 
          }}
        ></div>
      </div>
      
      <div className="grid md:grid-cols-12 gap-x-10 gap-y-20">
        {(data?.projects || []).map((project, index) => (
          <div 
            key={index} 
            className="md:col-span-6 group relative"
          >
            <div className="relative mb-8 overflow-hidden">
              <div 
                className="absolute inset-0 z-10 opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-center justify-center luxury-border"
                style={{ backgroundColor: colors.background + 'f0' }}
              >
                <span 
                  className="text-sm uppercase tracking-widest relative py-2 px-4 overflow-hidden transition-transform duration-500 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100"
                  style={{ 
                    color: colors.accent,
                    letterSpacing: '0.2em'
                  }}
                >
                  <span className="relative z-10">Ver Projeto</span>
                  <span 
                    className="absolute bottom-0 left-0 h-[1px] w-full"
                    style={{ backgroundColor: colors.accent + '50' }}
                  ></span>
                </span>
              </div>
              
              <div 
                className="aspect-video bg-gray-900 flex items-center justify-center overflow-hidden"
              >
                {project.imageUrl ? (
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                ) : (
                  <div 
                    className="w-full h-full flex items-center justify-center"
                    style={{ backgroundColor: colors.background }}
                  >
                    <span className="text-gray-700 uppercase tracking-widest font-light">Imagem do Projeto</span>
                  </div>
                )}
              </div>
            </div>
            
            <h3 
              className={`text-xl tracking-tight mb-3 ${typography.headingFont} transition-all duration-300 group-hover:text-accent`}
              style={{ 
                color: colors.secondary,
                fontWeight: 'lighter'
              }}
            >
              {project.title}
            </h3>
            
            <p className="mb-6 font-light leading-relaxed opacity-80 line-clamp-3">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-6">
              {project.technologies.map((tech, i) => (
                <span 
                  key={i} 
                  className="text-xs uppercase tracking-widest font-light"
                  style={{ 
                    color: colors.accent,
                    letterSpacing: '0.1em'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
        
        {!data?.projects?.length && (
          <div 
            className="md:col-span-6 group relative"
          >
            <div className="relative mb-8 overflow-hidden">
              <div 
                className="absolute inset-0 z-10 opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-center justify-center luxury-border"
                style={{ backgroundColor: colors.background + 'f0' }}
              >
                <span 
                  className="text-sm uppercase tracking-widest relative py-2 px-4 overflow-hidden transition-transform duration-500 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100"
                  style={{ 
                    color: colors.accent,
                    letterSpacing: '0.2em'
                  }}
                >
                  <span className="relative z-10">Ver Projeto</span>
                  <span 
                    className="absolute bottom-0 left-0 h-[1px] w-full"
                    style={{ backgroundColor: colors.accent + '50' }}
                  ></span>
                </span>
              </div>
              
              <div 
                className="aspect-video bg-gray-900 flex items-center justify-center overflow-hidden"
              >
                <div 
                  className="w-full h-full flex items-center justify-center"
                  style={{ backgroundColor: colors.background }}
                >
                  <span className="text-gray-700 uppercase tracking-widest font-light">Imagem do Projeto</span>
                </div>
              </div>
            </div>
            
            <h3 
              className={`text-xl tracking-tight mb-3 ${typography.headingFont} transition-all duration-300 group-hover:text-accent`}
              style={{ 
                color: colors.secondary,
                fontWeight: 'lighter'
              }}
            >
              Portfolio Generator
            </h3>
            
            <p className="mb-6 font-light leading-relaxed opacity-80">
              Ferramenta para criação de portfólios personalizados com diferentes templates e opções de customização.
            </p>
            
            <div className="flex flex-wrap gap-6">
              {['React', 'Next.js', 'TailwindCSS'].map(tech => (
                <span 
                  key={tech} 
                  className="text-xs uppercase tracking-widest font-light"
                  style={{ 
                    color: colors.accent,
                    letterSpacing: '0.1em'
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
  
  return (
    <section className="py-28">
      <h2 
        className={`text-2xl md:text-3xl tracking-tight mb-8 uppercase ${typography.headingFont}`} 
        style={{ 
          color: colors.primary,
          fontWeight: 'lighter',
          letterSpacing: '0.1em'
        }}
      >
        Habilidades
      </h2>
      
      <div 
        className="h-[1px] w-16 mb-14 relative overflow-hidden" 
      >
        <div className="absolute inset-0" style={{ backgroundColor: colors.accent }}></div>
        <div 
          className="absolute inset-0 opacity-50"
          style={{ 
            background: `linear-gradient(90deg, transparent, ${colors.primary}, transparent)`,
            animation: 'shimmer 3s infinite' 
          }}
        ></div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-x-10 gap-y-16">
        {(data?.skills || ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'TailwindCSS']).map((skill, index) => (
          <div 
            key={typeof skill === 'string' ? skill : index} 
            className="group"
          >
            {typeof skill !== 'string' && (
              <div className="flex justify-between mb-3">
                <span 
                  className="text-sm uppercase tracking-widest font-light"
                  style={{ letterSpacing: '0.1em' }}
                >
                  {skill.name}
                </span>
                <span 
                  className="text-sm font-light"
                  style={{ color: colors.accent }}
                >
                  {skill.level}%
                </span>
              </div>
            )}
            
            <div 
              className="h-[1px] mb-6 w-full overflow-hidden relative"
              style={{ backgroundColor: colors.secondary + '15' }}
            >
              {typeof skill !== 'string' && (
                <div 
                  className="h-full absolute top-0 left-0 transition-all duration-1000 group-hover:opacity-80" 
                  style={{ 
                    backgroundColor: colors.accent,
                    width: `${typeof skill !== 'string' ? skill.level : 75}%`
                  }}
                >
                  <div 
                    className="absolute inset-0"
                    style={{ 
                      background: `linear-gradient(90deg, transparent, ${colors.primary}80, transparent)`,
                      animation: 'shimmer 2s infinite',
                      opacity: 0.3 
                    }}
                  ></div>
                </div>
              )}
            </div>
            
            {typeof skill === 'string' && (
              <div className="flex justify-between mb-3">
                <span 
                  className="text-sm uppercase tracking-widest font-light"
                  style={{ letterSpacing: '0.1em' }}
                >
                  {skill}
                </span>
              </div>
            )}
            
            {typeof skill !== 'string' && skill.category && (
              <p 
                className="text-xs opacity-60 uppercase tracking-wider font-light"
                style={{ letterSpacing: '0.05em' }}
              >
                {skill.category}
              </p>
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
    <section className="py-28">
      <h2 
        className={`text-2xl md:text-3xl tracking-tight mb-8 uppercase ${typography.headingFont}`} 
        style={{ 
          color: colors.primary,
          fontWeight: 'lighter',
          letterSpacing: '0.1em'
        }}
      >
        Educação
      </h2>
      
      <div 
        className="h-[1px] w-16 mb-14 relative overflow-hidden" 
      >
        <div className="absolute inset-0" style={{ backgroundColor: colors.accent }}></div>
        <div 
          className="absolute inset-0 opacity-50"
          style={{ 
            background: `linear-gradient(90deg, transparent, ${colors.primary}, transparent)`,
            animation: 'shimmer 3s infinite' 
          }}
        ></div>
      </div>
      
      <div className="space-y-20">
        {(data?.education || []).map((edu, index) => (
          <div key={index} className="grid md:grid-cols-12 gap-10 relative">
            {/* Linha de conexão entre educações */}
            {index < (data?.education || []).length - 1 && (
              <div 
                className="absolute left-[40px] md:left-[50%] top-[90px] md:top-[30px] w-[1px] h-[calc(100%+3rem)] md:transform md:-translate-x-[50%] opacity-20 hidden md:block" 
                style={{ 
                  background: `linear-gradient(to bottom, ${colors.accent}60, transparent)` 
                }}
              ></div>
            )}
            
            <div className="md:col-span-5 md:text-right">
              <h3 
                className={`text-xl tracking-tight mb-3 ${typography.headingFont}`} 
                style={{ 
                  color: colors.secondary,
                  fontWeight: 'lighter'
                }}
              >
                {edu.degree}
              </h3>
              
              <div 
                className="text-sm tracking-wider mb-4 uppercase opacity-90" 
                style={{ 
                  color: colors.secondary,
                  letterSpacing: '0.15em'
                }}
              >
                {edu.institution}
              </div>
              
              <div 
                className="text-sm opacity-60 font-light tracking-wider"
                style={{ letterSpacing: '0.05em' }}
              >
                {edu.period}
              </div>
            </div>
            
            <div className="md:col-span-7 relative">
              <div 
                className="w-2 h-2 rounded-full absolute left-[-31px] top-3 hidden md:block"
                style={{ backgroundColor: colors.accent }}
              >
                <div 
                  className="absolute w-6 h-6 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ping opacity-30"
                  style={{ backgroundColor: colors.accent }}
                ></div>
              </div>
              
              <p className="font-light leading-relaxed opacity-80">{edu.description}</p>
            </div>
          </div>
        ))}
        
        {!data?.education?.length && (
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5 md:text-right">
              <h3 
                className={`text-xl tracking-tight mb-3 ${typography.headingFont}`} 
                style={{ 
                  color: colors.secondary,
                  fontWeight: 'lighter'
                }}
              >
                Bacharelado em Ciência da Computação
              </h3>
              
              <div 
                className="text-sm tracking-wider mb-4 uppercase opacity-90" 
                style={{ 
                  color: colors.secondary,
                  letterSpacing: '0.15em'
                }}
              >
                Universidade Federal do Brasil
              </div>
              
              <div 
                className="text-sm opacity-60 font-light tracking-wider"
                style={{ letterSpacing: '0.05em' }}
              >
                2015 — 2019
              </div>
            </div>
            
            <div className="md:col-span-7 relative">
              <div 
                className="w-2 h-2 rounded-full absolute left-[-31px] top-3 hidden md:block"
                style={{ backgroundColor: colors.accent }}
              >
                <div 
                  className="absolute w-6 h-6 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ping opacity-30"
                  style={{ backgroundColor: colors.accent }}
                ></div>
              </div>
              
              <p className="font-light leading-relaxed opacity-80">
                Formação completa em computação com foco em engenharia de software, algoritmos avançados e desenvolvimento full stack.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const ContactSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  return (
    <section className="py-28" id="contact">
      <h2 
        className={`text-2xl md:text-3xl tracking-tight mb-8 uppercase ${typography.headingFont}`} 
        style={{ 
          color: colors.primary,
          fontWeight: 'lighter',
          letterSpacing: '0.1em'
        }}
      >
        Contato
      </h2>
      
      <div 
        className="h-[1px] w-16 mb-14 relative overflow-hidden" 
      >
        <div className="absolute inset-0" style={{ backgroundColor: colors.accent }}></div>
        <div 
          className="absolute inset-0 opacity-50"
          style={{ 
            background: `linear-gradient(90deg, transparent, ${colors.primary}, transparent)`,
            animation: 'shimmer 3s infinite' 
          }}
        ></div>
      </div>
      
      <div className="grid md:grid-cols-12 gap-16">
        <div className="md:col-span-5">
          <p className="mb-16 text-lg leading-relaxed font-light opacity-90">
            Estou sempre aberto a novas oportunidades e parcerias. Se você gostaria de trabalhar comigo ou apenas trocar uma ideia, entre em contato!
          </p>
          
          <div className="space-y-12">
            <div>
              <h4 
                className="text-xs uppercase tracking-widest mb-3 opacity-70 font-light"
                style={{ letterSpacing: '0.2em' }}
              >
                Email
              </h4>
              <p 
                className="text-lg"
                style={{ 
                  color: colors.primary,
                  fontWeight: 'lighter'
                }}
              >
                {data?.email || 'joao@exemplo.com'}
              </p>
            </div>
            
            <div>
              <h4 
                className="text-xs uppercase tracking-widest mb-3 opacity-70 font-light"
                style={{ letterSpacing: '0.2em' }}
              >
                Telefone
              </h4>
              <p 
                className="text-lg"
                style={{ 
                  color: colors.primary,
                  fontWeight: 'lighter'
                }}
              >
                {data?.phone || '(11) 98765-4321'}
              </p>
            </div>
            
            <div>
              <h4 
                className="text-xs uppercase tracking-widest mb-3 opacity-70 font-light"
                style={{ letterSpacing: '0.2em' }}
              >
                Localização
              </h4>
              <p 
                className="text-lg"
                style={{ 
                  color: colors.primary,
                  fontWeight: 'lighter'
                }}
              >
                {data?.location || 'São Paulo, Brasil'}
              </p>
            </div>
          </div>
          
          {/* Social links */}
          <div className="mt-16">
            <div className="flex space-x-6">
              {['LinkedIn', 'GitHub', 'Twitter', 'Instagram'].map((social, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-10 h-10 flex items-center justify-center relative group"
                >
                  <div 
                    className="absolute inset-0 rounded-full opacity-10 transition-opacity group-hover:opacity-20"
                    style={{ 
                      backgroundColor: colors.primary
                    }}
                  ></div>
                  <span 
                    className="text-sm uppercase transition-colors duration-300 group-hover:text-accent"
                    style={{ fontSize: '0.7rem' }}
                  >
                    {social.charAt(0)}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="md:col-span-7">
          <form className="space-y-8">
            <div>
              <label 
                className="block mb-3 text-xs uppercase tracking-widest opacity-70 font-light"
                style={{ letterSpacing: '0.2em' }}
              >
                Nome
              </label>
              <input 
                type="text" 
                className="w-full py-3 px-4 bg-transparent focus:outline-none transition-colors"
                style={{ 
                  borderBottom: `1px solid ${colors.secondary}30`,
                  color: colors.text
                }}
                placeholder="Seu nome"
                disabled
              />
            </div>
            
            <div>
              <label 
                className="block mb-3 text-xs uppercase tracking-widest opacity-70 font-light"
                style={{ letterSpacing: '0.2em' }}
              >
                Email
              </label>
              <input 
                type="email" 
                className="w-full py-3 px-4 bg-transparent focus:outline-none transition-colors"
                style={{ 
                  borderBottom: `1px solid ${colors.secondary}30`,
                  color: colors.text
                }}
                placeholder="Seu email"
                disabled
              />
            </div>
            
            <div>
              <label 
                className="block mb-3 text-xs uppercase tracking-widest opacity-70 font-light"
                style={{ letterSpacing: '0.2em' }}
              >
                Mensagem
              </label>
              <textarea 
                className="w-full py-3 px-4 bg-transparent focus:outline-none transition-colors"
                style={{ 
                  borderBottom: `1px solid ${colors.secondary}30`,
                  color: colors.text
                }}
                rows={4}
                placeholder="Sua mensagem"
                disabled
              ></textarea>
            </div>
            
            <div className="pt-8">
              <button 
                type="button"
                className="px-8 py-3 uppercase tracking-widest text-sm transition-all duration-300 relative overflow-hidden group disabled:opacity-70"
                style={{ 
                  letterSpacing: '0.2em',
                  fontWeight: 'lighter',
                  border: `1px solid ${colors.primary}80`,
                }}
                disabled
              >
                <span 
                  className="relative z-10 transition-colors duration-300 group-hover:text-background"
                  style={{ color: colors.text }}
                >
                  Enviar Mensagem
                </span>
                <div 
                  className="absolute inset-0 bg-gradient-to-r transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                  style={{ 
                    background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})`,
                  }}
                ></div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}; 