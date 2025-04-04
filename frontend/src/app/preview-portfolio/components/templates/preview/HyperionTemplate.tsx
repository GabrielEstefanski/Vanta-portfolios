'use client';

import React, { useEffect, useRef } from 'react';
import { TemplateConfig } from '@/app/types/TemplateConfig';

interface HyperionTemplateProps {
  config: TemplateConfig;
}

export function HyperionTemplate({ config }: HyperionTemplateProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Efeito de parallax e movimento do grid de fundo
    const handleMouseMove = (e: MouseEvent) => {
      if (gridRef.current) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        gridRef.current.style.transform = `translate(${x * -15}px, ${y * -15}px)`;
      }
      
      if (glowRef.current) {
        const x = e.clientX;
        const y = e.clientY;
        glowRef.current.style.background = `radial-gradient(circle at ${x}px ${y}px, ${config.props.colors.primary}10, transparent 40%)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [config.props.colors.primary]);

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
      className="min-h-screen transition-all duration-300 relative overflow-hidden"
      style={{ 
        backgroundColor: colors.background,
        color: colors.text
      }}
    >
      {/* Grid futurista de fundo */}
      <div 
        ref={gridRef}
        className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
        style={{ opacity: 0.07 }}
      >
        <div className="absolute inset-0" 
          style={{ 
            backgroundImage: `
              linear-gradient(to right, ${colors.primary}20 1px, transparent 1px),
              linear-gradient(to bottom, ${colors.primary}20 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Linhas angulares */}
        <div className="absolute inset-0" 
          style={{ 
            backgroundImage: `
              linear-gradient(45deg, ${colors.secondary}10 25%, transparent 25%, transparent 50%, ${colors.secondary}10 50%, ${colors.secondary}10 75%, transparent 75%, transparent)
            `,
            backgroundSize: '100px 100px'
          }}
        />
      </div>
      
      {/* Efeito de brilho que segue o cursor */}
      <div 
        ref={glowRef}
        className="fixed inset-0 z-0 pointer-events-none"
      />
      
      {/* Elementos angulares decorativos */}
      <div className="fixed top-0 right-0 h-80 w-80 opacity-10 z-0 transform rotate-45" 
        style={{ 
          borderRight: `2px solid ${colors.primary}`,
          borderBottom: `2px solid ${colors.primary}`,
          transform: 'translate(20%, -20%) rotate(45deg)'
        }}
      />
      
      <div className="fixed bottom-0 left-0 h-96 w-96 opacity-10 z-0" 
        style={{ 
          borderLeft: `2px solid ${colors.accent}`,
          borderTop: `2px solid ${colors.accent}`,
          transform: 'translate(-20%, 20%) rotate(45deg)'
        }}
      />
      
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
        @keyframes pulse {
          0% { opacity: 0.8; }
          50% { opacity: 1; }
          100% { opacity: 0.8; }
        }
        
        @keyframes glow {
          0% { box-shadow: 0 0 5px ${colors.primary}50; }
          50% { box-shadow: 0 0 20px ${colors.primary}80; }
          100% { box-shadow: 0 0 5px ${colors.primary}50; }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
}

// Componente de Header com estilo Hyperion
const HeaderSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  return (
    <section className="min-h-[90vh] py-16 flex items-center relative">
      <div className="w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            {/* Tag decorativa */}
            <div 
              className="inline-block px-4 py-1 mb-6 text-sm tracking-wider"
              style={{ 
                background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`,
                color: colors.text,
                clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)'
              }}
            >
              PORTFOLIO
            </div>
            
            <h1 
              className={`text-5xl md:text-6xl lg:text-7xl mb-6 ${typography.headingFont} tracking-tight leading-none`}
              style={{ color: colors.text }}
            >
              <div className="relative">
                <span className="relative z-10">{data?.name || 'João da Silva'}</span>
                <div 
                  className="absolute -bottom-2 left-0 h-3 w-1/3"
                  style={{ backgroundColor: colors.primary, opacity: 0.3 }}
                />
              </div>
            </h1>
            
            <h2 
              className={`text-xl md:text-2xl mb-8 ${typography.bodyFont} relative inline-block`}
              style={{ 
                color: colors.secondary,
                paddingBottom: '0.5rem'
              }}
            >
              <span className="relative z-10">{data?.title || 'Desenvolvedor Full Stack'}</span>
              <div 
                className="absolute bottom-0 left-0 h-[1px] w-full"
                style={{ 
                  background: `linear-gradient(to right, ${colors.accent}, transparent)` 
                }}
              />
            </h2>
            
            <p className="max-w-xl text-lg mb-10 leading-relaxed">
              {data?.about || 'Desenvolvedor apaixonado por criar soluções web eficientes e experiências digitais incríveis.'}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                className="px-6 py-3 transition-all transform hover:translate-y-[-2px] focus:outline-none relative overflow-hidden"
                style={{ 
                  backgroundColor: colors.primary,
                  color: colors.text,
                  clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)',
                }}
              >
                <span className="relative z-10">Meus Projetos</span>
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{ 
                    background: `linear-gradient(45deg, transparent 25%, ${colors.secondary} 25%, ${colors.secondary} 50%, transparent 50%, transparent 75%, ${colors.secondary} 75%)`,
                    backgroundSize: '5px 5px'
                  }}
                />
              </button>
              
              <button 
                className="px-6 py-3 transition-all transform hover:translate-y-[-2px] focus:outline-none relative overflow-hidden"
                style={{ 
                  backgroundColor: 'transparent',
                  color: colors.text,
                  boxShadow: `inset 0 0 0 1px ${colors.primary}`,
                  clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)'
                }}
              >
                <span className="relative z-10">Contato</span>
                <div 
                  className="absolute -inset-px scale-x-0 transition-transform origin-left hover:scale-x-100"
                  style={{ 
                    background: `linear-gradient(90deg, ${colors.primary}30, ${colors.primary}10)`,
                    transitionDuration: '0.5s' 
                  }}
                />
              </button>
            </div>
          </div>
          
          <div className="relative">
            {/* Decoração em hexágono */}
            <div 
              className="aspect-square relative max-w-md mx-auto"
              style={{ 
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
              }}
            >
              <div 
                className="absolute inset-2 z-10"
                style={{ 
                  backgroundColor: colors.surface || colors.background,
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  boxShadow: `0 0 10px ${colors.primary}50 inset`
                }}
              />
              
              <div 
                className="absolute inset-0"
                style={{ 
                  background: `linear-gradient(45deg, ${colors.primary}, ${colors.accent})`,
                  animation: 'pulse 3s infinite'
                }}
              />
              
              <div className="absolute inset-4 flex items-center justify-center bg-gray-800 z-20"
                style={{ 
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                }}
              >
                <span className="text-gray-400">Foto</span>
              </div>
              
              {/* Linhas angulares decorativas */}
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute inset-0 opacity-30"
                  style={{ 
                    border: `2px solid ${colors.primary}`,
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    transform: `scale(${1.1 + i * 0.1})`,
                    transition: 'all 0.5s',
                    animation: `pulse ${3 + i * 0.5}s infinite alternate`
                  }}
                />
              ))}
            </div>
            
            {/* Elemento decorativo angular */}
            <div 
              className="absolute -bottom-8 -right-8 w-16 h-16 opacity-80"
              style={{ 
                borderRight: `2px solid ${colors.primary}`, 
                borderBottom: `2px solid ${colors.primary}`
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Componente de About com estilo Hyperion
const AboutSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  return (
    <section className="py-16 relative">
      {/* Forma decorativa angular */}
      <div className="absolute -top-10 right-0 w-32 h-32 opacity-10"
        style={{ 
          borderTop: `2px solid ${colors.primary}`,
          borderRight: `2px solid ${colors.primary}`,
          clipPath: 'polygon(0 0, 100% 0, 100% 100%)'
        }}
      />
      
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div 
            className="h-px flex-grow" 
            style={{ 
              background: `linear-gradient(to right, ${colors.primary}, transparent)` 
            }}
          />
          <h2 
            className={`text-3xl ${typography.headingFont} relative inline-block`}
            style={{ color: colors.secondary }}
          >
            Sobre Mim
          </h2>
          <div 
            className="h-px flex-grow" 
            style={{ 
              background: `linear-gradient(to left, ${colors.primary}, transparent)` 
            }}
          />
        </div>
        
        <div 
          className="h-1 w-20 mx-auto"
          style={{ 
            background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})`,
            clipPath: 'polygon(0 0, 100% 0, 90% 100%, 10% 100%)'
          }}
        />
      </div>
      
      <div className="grid md:grid-cols-5 gap-10 items-center">
        <div className="md:col-span-3 order-2 md:order-1">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              {data?.about || 'Com mais de 5 anos de experiência em desenvolvimento web, tenho trabalhado com as mais variadas tecnologias para criar produtos digitais de alto impacto.'}
            </p>
            
            <p className="text-lg leading-relaxed">
              Sou especializado em React, Next.js, Node.js e bancos de dados SQL/NoSQL, sempre buscando as melhores práticas e arquiteturas escaláveis para cada projeto.
            </p>
            
            {/* Barras de características */}
            <div className="pt-6 space-y-3">
              {[
                { label: 'Inovação', value: 95 },
                { label: 'Criatividade', value: 90 },
                { label: 'Resolução de Problemas', value: 85 }
              ].map((trait, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-1">
                    <span style={{ color: colors.text }}>{trait.label}</span>
                    <span style={{ color: colors.primary }}>{trait.value}%</span>
                  </div>
                  <div 
                    className="h-1 w-full relative"
                    style={{ 
                      backgroundColor: `${colors.primary}30`,
                      clipPath: 'polygon(0 0, 100% 0, 98% 100%, 2% 100%)'
                    }}
                  >
                    <div 
                      className="absolute top-0 left-0 h-full"
                      style={{ 
                        width: `${trait.value}%`,
                        background: `linear-gradient(90deg, ${colors.primary}, ${colors.accent})`,
                        clipPath: 'polygon(0 0, 100% 0, 98% 100%, 2% 100%)'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2 order-1 md:order-2">
          <div className="relative">
            {/* Moldura tech angular */}
            <div 
              className="relative aspect-square max-w-sm mx-auto"
              style={{ 
                clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)',
                background: `linear-gradient(45deg, ${colors.primary}, ${colors.accent})`,
                padding: '3px'
              }}
            >
              <div 
                className="absolute inset-0 opacity-20"
                style={{ 
                  background: `repeating-linear-gradient(45deg, ${colors.text}, ${colors.text} 5px, transparent 5px, transparent 10px)`
                }}
              />
              
              <div className="absolute inset-[3px] bg-gray-800 flex items-center justify-center"
                style={{ 
                  clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)'
                }}
              >
                <span className="text-gray-400">Foto</span>
              </div>
            </div>
            
            {/* Elementos decorativos angulares */}
            {[...Array(2)].map((_, i) => (
              <div 
                key={i}
                className="absolute opacity-50"
                style={{ 
                  top: `${10 + i * 15}px`,
                  right: `${10 + i * 15}px`,
                  width: '30px',
                  height: '30px',
                  border: `1px solid ${colors.primary}`,
                  transform: 'rotate(45deg)',
                  animation: `pulse ${2 + i}s infinite alternate`
                }}
              />
            ))}
            
            {/* Linhas de código decorativas */}
            <div className="absolute -bottom-4 -left-4 opacity-70">
              <div 
                className="h-1 w-10 mb-1"
                style={{ backgroundColor: colors.accent }}
              />
              <div 
                className="h-1 w-6"
                style={{ backgroundColor: colors.primary }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Componente de Experience com estilo Hyperion
const ExperienceSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  return (
    <section className="py-16 relative">
      {/* Forma decorativa angular */}
      <div className="absolute -bottom-10 left-0 w-32 h-32 opacity-10"
        style={{ 
          borderBottom: `2px solid ${colors.accent}`,
          borderLeft: `2px solid ${colors.accent}`,
          clipPath: 'polygon(0 0, 100% 100%, 0 100%)'
        }}
      />
      
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div 
            className="h-px flex-grow" 
            style={{ 
              background: `linear-gradient(to right, ${colors.primary}, transparent)` 
            }}
          />
          <h2 
            className={`text-3xl ${typography.headingFont} relative inline-block`}
            style={{ color: colors.secondary }}
          >
            Experiência
          </h2>
          <div 
            className="h-px flex-grow" 
            style={{ 
              background: `linear-gradient(to left, ${colors.primary}, transparent)` 
            }}
          />
        </div>
        
        <div 
          className="h-1 w-20 mx-auto"
          style={{ 
            background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})`,
            clipPath: 'polygon(0 0, 100% 0, 90% 100%, 10% 100%)'
          }}
        />
      </div>
      
      <div className="relative">
        {/* Linha de timeline futurista */}
        <div 
          className="absolute top-0 bottom-0 left-0 md:left-1/2 w-px"
          style={{ 
            background: `linear-gradient(to bottom, transparent, ${colors.primary}, transparent)`,
            boxShadow: `0 0 10px ${colors.primary}`
          }}
        />
        
        <div className="space-y-12">
          {(data?.experiences || [
            {
              company: "Empresa Tech",
              position: "Desenvolvedor Frontend Senior",
              startDate: "2020",
              endDate: "Presente",
              description: "Desenvolvimento de interfaces interativas utilizando React e Next.js para aplicações web de alta performance.",
              technologies: ["React", "TypeScript", "TailwindCSS"]
            },
            {
              company: "Digital Solutions",
              position: "Desenvolvedor Fullstack",
              startDate: "2018",
              endDate: "2020",
              description: "Responsável pelo desenvolvimento fullstack de aplicações web usando React, Node.js e MongoDB.",
              technologies: ["React", "Node.js", "MongoDB"]
            }
          ]).map((exp, index) => (
            <div 
              key={index} 
              className="grid md:grid-cols-2 relative"
              style={{ paddingLeft: index % 2 === 0 ? '0' : '2rem', paddingRight: index % 2 === 1 ? '0' : '2rem' }}
            >
              {/* Nó na timeline */}
              <div 
                className="absolute top-0 left-[-5px] md:left-1/2 md:ml-[-5px] w-2.5 h-2.5 transform rotate-45"
                style={{ 
                  backgroundColor: colors.accent,
                  boxShadow: `0 0 10px ${colors.accent}`,
                  animation: 'pulse 2s infinite'
                }}
              />
              
              <div 
                className={`p-6 relative ${index % 2 === 0 ? 'md:mr-6 text-left' : 'md:order-2 md:ml-6 text-left'}`}
                style={{ 
                  backgroundColor: `${colors.surface || colors.background}70`,
                  backdropFilter: 'blur(5px)',
                  border: `1px solid ${colors.border || colors.primary}30`,
                  clipPath: index % 2 === 0 
                    ? 'polygon(0 0, 100% 0, 95% 100%, 0% 100%)' 
                    : 'polygon(0 0, 100% 0, 100% 100%, 5% 100%)'
                }}
              >
                {/* Destaque angular */}
                <div 
                  className="absolute top-0 right-0 w-10 h-10 opacity-30"
                  style={{ 
                    borderTop: `1px solid ${colors.primary}`,
                    borderRight: `1px solid ${colors.primary}`
                  }}
                />
                
                <h3 
                  className={`text-xl mb-2 ${typography.headingFont}`}
                  style={{ color: colors.text }}
                >
                  {exp.position}
                </h3>
                
                <h4 
                  className="text-lg mb-3"
                  style={{ color: colors.secondary }}
                >
                  {exp.company}
                </h4>
                
                <div 
                  className="inline-block px-3 py-1 mb-4 text-sm"
                  style={{ 
                    backgroundColor: `${colors.primary}20`,
                    border: `1px solid ${colors.primary}50`,
                    clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)'
                  }}
                >
                  {exp.startDate} - {exp.endDate}
                </div>
                
                <p className="mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {(exp.technologies || []).map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 text-xs"
                      style={{ 
                        backgroundColor: `${colors.primary}20`,
                        color: colors.text,
                        border: `1px solid ${colors.primary}40`,
                        clipPath: 'polygon(0 0, 100% 0, 90% 100%, 10% 100%)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className={`${index % 2 === 0 ? 'md:order-2' : ''} hidden md:block`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Componente de Projects com estilo Hyperion
const ProjectsSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  return (
    <section className="py-16 relative">
      {/* Forma decorativa angular */}
      <div className="absolute top-0 right-1/4 w-32 h-32 opacity-10 transform -rotate-45"
        style={{ 
          border: `2px solid ${colors.primary}`,
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
        }}
      />
      
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div 
            className="h-px flex-grow" 
            style={{ 
              background: `linear-gradient(to right, ${colors.primary}, transparent)` 
            }}
          />
          <h2 
            className={`text-3xl ${typography.headingFont} relative inline-block`}
            style={{ color: colors.secondary }}
          >
            Projetos
          </h2>
          <div 
            className="h-px flex-grow" 
            style={{ 
              background: `linear-gradient(to left, ${colors.primary}, transparent)` 
            }}
          />
        </div>
        
        <div 
          className="h-1 w-20 mx-auto"
          style={{ 
            background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})`,
            clipPath: 'polygon(0 0, 100% 0, 90% 100%, 10% 100%)'
          }}
        />
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {(data?.projects || [
          {
            title: "Projeto Hyperion",
            description: "Aplicação web que utiliza IA para análise de dados e visualização em tempo real.",
            technologies: ["React", "Python", "TensorFlow"]
          },
          {
            title: "Sistema Nexus",
            description: "Plataforma de e-commerce com sistema de pagamentos integrado e painel administrativo.",
            technologies: ["Next.js", "Node.js", "MongoDB"]
          },
          {
            title: "Interface Quantum",
            description: "Dashboard para visualização e análise de dados com gráficos interativos.",
            technologies: ["React", "D3.js", "GraphQL"]
          }
        ]).map((project, index) => (
          <div 
            key={index} 
            className="group relative transition-all duration-300 hover:-translate-y-2"
          >
            {/* Card futurista */}
            <div 
              className="relative p-6 h-full"
              style={{ 
                backgroundColor: `${colors.surface || colors.background}80`,
                backdropFilter: 'blur(10px)',
                border: `1px solid ${colors.border || colors.primary}30`,
                clipPath: 'polygon(0 0, 100% 0, 100% 95%, 95% 100%, 0 100%)'
              }}
            >
              {/* Detalhes angulares */}
              <div 
                className="absolute top-0 right-0 w-20 h-20 opacity-10"
                style={{ 
                  borderTop: `2px solid ${colors.primary}`,
                  borderRight: `2px solid ${colors.primary}`,
                  clipPath: 'polygon(0 0, 100% 0, 100% 100%)'
                }}
              />
              
              <div 
                className="absolute bottom-0 left-0 w-16 h-16 opacity-10"
                style={{ 
                  borderBottom: `2px solid ${colors.accent}`,
                  borderLeft: `2px solid ${colors.accent}`,
                  clipPath: 'polygon(0 0, 100% 100%, 0 100%)'
                }}
              />
              
              {/* Número do projeto em estilo tech */}
              <div 
                className="absolute -top-3 -left-3 w-10 h-10 flex items-center justify-center text-xs font-bold opacity-80 transition-all group-hover:opacity-100"
                style={{ 
                  backgroundColor: colors.primary,
                  color: colors.text,
                  clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                  transform: 'rotate(45deg)',
                  boxShadow: `0 0 10px ${colors.primary}50`
                }}
              >
                <span style={{ transform: 'rotate(-45deg)' }}>{index + 1}</span>
              </div>
              
              <div className="mb-4">
                <h3 
                  className={`text-xl mb-4 ${typography.headingFont} relative inline-block`}
                  style={{ color: colors.text }}
                >
                  {project.title}
                  <div 
                    className="absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full"
                    style={{ 
                      background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})`,
                    }}
                  />
                </h3>
              </div>
              
              <p className="mb-6">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {(project.technologies || []).map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-2 py-1 text-xs"
                    style={{ 
                      backgroundColor: `${colors.primary}20`,
                      color: colors.text,
                      border: `1px solid ${colors.primary}40`,
                      clipPath: 'polygon(0 0, 100% 0, 90% 100%, 10% 100%)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between items-center">
                <a 
                  href="#" 
                  className="flex items-center gap-2 text-sm transition-all hover:gap-3"
                  style={{ color: colors.primary }}
                >
                  <span>Ver Projeto</span>
                  <span>&rarr;</span>
                </a>
                
                <div className="flex gap-2">
                  <a 
                    href="#" 
                    className="w-8 h-8 flex items-center justify-center"
                    style={{ 
                      backgroundColor: `${colors.primary}20`,
                      border: `1px solid ${colors.primary}40`,
                      clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
                    }}
                  >
                    <span className="text-xs">GH</span>
                  </a>
                  <a 
                    href="#" 
                    className="w-8 h-8 flex items-center justify-center"
                    style={{ 
                      backgroundColor: `${colors.primary}20`,
                      border: `1px solid ${colors.primary}40`,
                      clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
                    }}
                  >
                    <span className="text-xs">URL</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Efeito de hover */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none z-[-1] transition-opacity"
              style={{ 
                boxShadow: `0 10px 30px ${colors.primary}40`,
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

const SkillsSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "CSS/SASS", level: 85 },
        { name: "Next.js", level: 90 }
      ]
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "GraphQL", level: 70 }
      ]
    },
    {
      name: "Ferramentas",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Figma", level: 85 }
      ]
    }
  ];
  
  return (
    <section className="py-16 relative">
      <div className="absolute -top-10 right-1/3 w-24 h-24 opacity-10 transform rotate-45"
        style={{ 
          border: `2px solid ${colors.secondary}`,
        }}
      />
      
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div 
            className="h-px flex-grow" 
            style={{ 
              background: `linear-gradient(to right, ${colors.primary}, transparent)` 
            }}
          />
          <h2 
            className={`text-3xl ${typography.headingFont} relative inline-block`}
            style={{ color: colors.secondary }}
          >
            Habilidades
          </h2>
          <div 
            className="h-px flex-grow" 
            style={{ 
              background: `linear-gradient(to left, ${colors.primary}, transparent)` 
            }}
          />
        </div>
        
        <div 
          className="h-1 w-20 mx-auto"
          style={{ 
            background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})`,
            clipPath: 'polygon(0 0, 100% 0, 90% 100%, 10% 100%)'
          }}
        />
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {(data?.skills && data.skills.length > 0 
          ? Object.entries(data.skills.reduce((acc, skill) => {
              if (!acc[skill.category]) {
                acc[skill.category] = [];
              }
              acc[skill.category].push(skill);
              return acc;
            }, {} as Record<string, typeof data.skills>))
              .map(([category, skills]) => ({ name: category, skills }))
          : skillCategories
        ).map((category, catIndex) => (
          <div 
            key={catIndex} 
            className="relative"
          >
            <div 
              className="mb-6 p-2 text-center relative"
              style={{ 
                backgroundColor: `${colors.primary}20`,
                clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)'
              }}
            >
              <h3 
                className={`text-xl ${typography.headingFont}`}
                style={{ color: colors.text }}
              >
                {category.name}
              </h3>
              
              {/* Elementos decorativos */}
              <div 
                className="absolute top-0 bottom-0 left-0 w-1"
                style={{ 
                  background: `linear-gradient(to bottom, ${colors.primary}, transparent)` 
                }}
              />
              <div 
                className="absolute top-0 bottom-0 right-0 w-1"
                style={{ 
                  background: `linear-gradient(to bottom, ${colors.primary}, transparent)` 
                }}
              />
            </div>
            
            <div className="space-y-6">
              {category.skills.map((skill, skillIndex) => {
                const skillName = typeof skill === 'object' ? skill.name : skill;
                const skillLevel = typeof skill === 'object' ? skill.level : Math.floor(Math.random() * 30) + 70;
                
                return (
                  <div key={skillIndex} className="relative">
                    <div className="flex justify-between mb-1 items-center">
                      <span 
                        className="relative pl-3 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-primary"
                        style={{ 
                          color: colors.text
                        }}
                      >
                        {skillName}
                      </span>
                      
                      <div 
                        className="px-2 py-0.5 text-xs"
                        style={{ 
                          backgroundColor: `${colors.primary}30`,
                          color: colors.text,
                          clipPath: 'polygon(0 0, 100% 0, 90% 100%, 10% 100%)'
                        }}
                      >
                        {skillLevel}%
                      </div>
                    </div>
                    
                    <div className="relative">
                      {/* Barra de progresso com estilo tech */}
                      <div 
                        className="h-1 w-full relative overflow-hidden"
                        style={{ 
                          backgroundColor: `${colors.surface || colors.background}`,
                          border: `1px solid ${colors.border || colors.primary}30`,
                          clipPath: 'polygon(0 0, 100% 0, 98% 100%, 2% 100%)'
                        }}
                      >
                        <div 
                          className="absolute top-0 left-0 h-full transition-all duration-1000"
                          style={{ 
                            width: `${skillLevel}%`,
                            background: `linear-gradient(90deg, ${colors.primary}, ${colors.accent})`,
                          }}
                        />
                        
                        {/* Efeito de brilho */}
                        <div 
                          className="absolute top-0 left-0 h-full w-20 opacity-30"
                          style={{ 
                            background: `linear-gradient(90deg, transparent, ${colors.text}, transparent)`,
                            animation: 'shimmer 2s infinite',
                            transform: 'skewX(-20deg)'
                          }}
                        />
                      </div>
                      
                      {/* Marcadores de níveis */}
                      {[25, 50, 75].map((mark) => (
                        <div 
                          key={mark}
                          className="absolute top-0 bottom-0 w-px"
                          style={{ 
                            left: `${mark}%`,
                            backgroundColor: `${colors.border || colors.text}30`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Componente de Education com estilo Hyperion
const EducationSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  return (
    <section className="py-16 relative">
      {/* Forma decorativa angular */}
      <div className="absolute bottom-0 left-1/4 w-32 h-32 opacity-10 transform -rotate-12"
        style={{ 
          border: `2px solid ${colors.accent}`,
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 30% 100%, 0 70%)'
        }}
      />
      
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div 
            className="h-px flex-grow" 
            style={{ 
              background: `linear-gradient(to right, ${colors.primary}, transparent)` 
            }}
          />
          <h2 
            className={`text-3xl ${typography.headingFont} relative inline-block`}
            style={{ color: colors.secondary }}
          >
            Educação
          </h2>
          <div 
            className="h-px flex-grow" 
            style={{ 
              background: `linear-gradient(to left, ${colors.primary}, transparent)` 
            }}
          />
        </div>
        
        <div 
          className="h-1 w-20 mx-auto"
          style={{ 
            background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})`,
            clipPath: 'polygon(0 0, 100% 0, 90% 100%, 10% 100%)'
          }}
        />
      </div>
      
      <div className="space-y-8">
        {(data?.education || [
          {
            institution: "Universidade Tecnológica",
            degree: "Mestrado em Ciência da Computação",
            period: "2018 - 2020",
            description: "Especialização em Inteligência Artificial e Processamento de Dados"
          },
          {
            institution: "Instituto de Tecnologia",
            degree: "Bacharelado em Engenharia de Software",
            period: "2014 - 2018",
            description: "Foco em desenvolvimento web e mobile com destaque em inovação tecnológica"
          }
        ]).map((edu, index) => (
          <div 
            key={index} 
            className="grid md:grid-cols-3 gap-6 relative group hover:-translate-y-1 transition-all duration-300"
          >
            {/* Linha conectora */}
            {index < (data?.education || []).length - 1 && (
              <div 
                className="absolute left-5 top-full h-8 w-px"
                style={{ 
                  background: `linear-gradient(to bottom, ${colors.primary}, transparent)` 
                }}
              />
            )}
            
            {/* Categoria e período em destaque */}
            <div className="relative">
              <div 
                className="absolute top-0 left-0 w-2 h-2 transform -translate-x-1/2 -translate-y-1/2"
                style={{ 
                  backgroundColor: colors.primary,
                  clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                  boxShadow: `0 0 10px ${colors.primary}`,
                  animation: 'glow 2s infinite alternate'
                }}
              />
              
              <div 
                className="h-full pt-5 pb-5 pl-6 flex flex-col justify-between relative"
                style={{ 
                  borderLeft: `1px dashed ${colors.border || colors.primary}50` 
                }}
              >
                <h4 
                  className={`text-xl ${typography.headingFont}`}
                  style={{ color: colors.secondary }}
                >
                  {edu.degree}
                </h4>
                
                <div 
                  className="mt-auto inline-block px-3 py-1 text-sm"
                  style={{ 
                    backgroundColor: `${colors.primary}20`,
                    border: `1px solid ${colors.primary}30`,
                    clipPath: 'polygon(0 0, 100% 0, 90% 100%, 10% 100%)'
                  }}
                >
                  {edu.period}
                </div>
              </div>
            </div>
            
            {/* Detalhes */}
            <div 
              className="md:col-span-2 p-5 relative group-hover:shadow-lg transition-shadow"
              style={{ 
                backgroundColor: `${colors.surface || colors.background}50`,
                backdropFilter: 'blur(5px)',
                border: `1px solid ${colors.border || colors.primary}20`,
                clipPath: 'polygon(0 0, 100% 0, 100% 90%, 95% 100%, 0 100%)'
              }}
            >
              <div 
                className="absolute top-0 right-0 w-10 h-10 opacity-30"
                style={{ 
                  borderTop: `1px solid ${colors.primary}`,
                  borderRight: `1px solid ${colors.primary}`
                }}
              />
              
              <h3 
                className={`text-lg ${typography.headingFont} mb-3`}
                style={{ color: colors.text }}
              >
                {edu.institution}
              </h3>
              
              <p className="leading-relaxed">
                {edu.description}
              </p>
              
              <div 
                className="absolute -bottom-px right-0 w-1/3 h-px opacity-50"
                style={{ 
                  background: `linear-gradient(to right, transparent, ${colors.primary})` 
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Componente de Contact com estilo Hyperion
const ContactSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  return (
    <section className="py-16 relative">
      {/* Formas decorativas angulares */}
      <div className="absolute top-0 right-0 w-40 h-40 opacity-10"
        style={{ 
          borderTop: `2px solid ${colors.primary}`,
          borderRight: `2px solid ${colors.primary}`,
          clipPath: 'polygon(100% 0, 100% 100%, 0 0)'
        }}
      />
      
      <div className="absolute bottom-0 left-0 w-40 h-40 opacity-10"
        style={{ 
          borderBottom: `2px solid ${colors.accent}`,
          borderLeft: `2px solid ${colors.accent}`,
          clipPath: 'polygon(0 100%, 100% 100%, 0 0)'
        }}
      />
      
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div 
            className="h-px flex-grow" 
            style={{ 
              background: `linear-gradient(to right, ${colors.primary}, transparent)` 
            }}
          />
          <h2 
            className={`text-3xl ${typography.headingFont} relative inline-block`}
            style={{ color: colors.secondary }}
          >
            Contato
          </h2>
          <div 
            className="h-px flex-grow" 
            style={{ 
              background: `linear-gradient(to left, ${colors.primary}, transparent)` 
            }}
          />
        </div>
        
        <div 
          className="h-1 w-20 mx-auto"
          style={{ 
            background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})`,
            clipPath: 'polygon(0 0, 100% 0, 90% 100%, 10% 100%)'
          }}
        />
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <div 
            className="p-1 mb-8 relative"
            style={{ 
              background: `linear-gradient(45deg, ${colors.primary}, ${colors.accent})`,
              clipPath: 'polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)'
            }}
          >
            <div 
              className="p-6 h-full"
              style={{ 
                backgroundColor: colors.background,
                clipPath: 'polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)'
              }}
            >
              <h3 
                className={`text-xl mb-6 ${typography.headingFont}`}
                style={{ color: colors.text }}
              >
                Informações de Contato
              </h3>
              
              <div className="space-y-4">
                {[
                  { icon: "📧", label: "Email", value: data?.email || "contato@exemplo.com" },
                  { icon: "📱", label: "Telefone", value: data?.phone || "(11) 98765-4321" },
                  { icon: "📍", label: "Localização", value: data?.location || "São Paulo, Brasil" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <div 
                      className="mr-4 w-10 h-10 flex items-center justify-center shrink-0"
                      style={{ 
                        backgroundColor: `${colors.primary}20`,
                        border: `1px solid ${colors.primary}40`,
                        clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
                      }}
                    >
                      <span>{item.icon}</span>
                    </div>
                    
                    <div>
                      <p 
                        className="text-sm mb-1"
                        style={{ color: colors.secondary }}
                      >
                        {item.label}
                      </p>
                      <p>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 
                  className={`text-lg mb-4 ${typography.headingFont}`}
                  style={{ color: colors.text }}
                >
                  Redes Sociais
                </h4>
                
                <div className="flex gap-3">
                  {[
                    { label: "LI", name: "LinkedIn" },
                    { label: "GH", name: "GitHub" },
                    { label: "TW", name: "Twitter" },
                    { label: "IG", name: "Instagram" }
                  ].map((social, idx) => (
                    <a 
                      key={idx}
                      href="#" 
                      className="w-10 h-10 flex items-center justify-center transition-transform hover:scale-110"
                      style={{ 
                        backgroundColor: `${colors.primary}20`,
                        border: `1px solid ${colors.primary}40`,
                        clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
                      }}
                      title={social.name}
                    >
                      <span className="text-xs">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative pl-4">
            <div 
              className="absolute top-0 left-0 bottom-0 w-1"
              style={{ 
                background: `linear-gradient(to bottom, ${colors.primary}, transparent)` 
              }}
            />
            <p className="mb-2" style={{ color: colors.secondary }}>Horário de Disponibilidade</p>
            <p className="mb-4">Segunda a Sexta: 9h às 18h</p>
            
            <p className="mb-2" style={{ color: colors.secondary }}>Projetos</p>
            <p>Disponível para novos projetos a partir de Julho de 2023</p>
          </div>
        </div>
        
        <div>
          <div 
            className="p-1 relative"
            style={{ 
              background: `linear-gradient(45deg, ${colors.primary}, ${colors.accent})`,
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 80%)'
            }}
          >
            <div 
              className="p-6"
              style={{ 
                backgroundColor: colors.background,
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 80%)'
              }}
            >
              <h3 
                className={`text-xl mb-6 ${typography.headingFont}`}
                style={{ color: colors.text }}
              >
                Envie uma Mensagem
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label 
                      className="block mb-2 text-sm"
                      style={{ color: colors.secondary }}
                    >
                      Nome
                    </label>
                    <div 
                      className="p-px"
                      style={{ 
                        background: `linear-gradient(90deg, ${colors.primary}80, transparent)`,
                        clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 100%)'
                      }}
                    >
                      <input 
                        type="text" 
                        className="w-full p-2 bg-transparent"
                        style={{ 
                          border: `1px solid ${colors.border || colors.primary}30`,
                          color: colors.text,
                          clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 100%)'
                        }}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label 
                      className="block mb-2 text-sm"
                      style={{ color: colors.secondary }}
                    >
                      Email
                    </label>
                    <div 
                      className="p-px"
                      style={{ 
                        background: `linear-gradient(90deg, ${colors.primary}80, transparent)`,
                        clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 100%)'
                      }}
                    >
                      <input 
                        type="email" 
                        className="w-full p-2 bg-transparent"
                        style={{ 
                          border: `1px solid ${colors.border || colors.primary}30`,
                          color: colors.text,
                          clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 100%)'
                        }}
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label 
                    className="block mb-2 text-sm"
                    style={{ color: colors.secondary }}
                  >
                    Assunto
                  </label>
                  <div 
                    className="p-px"
                    style={{ 
                      background: `linear-gradient(90deg, ${colors.primary}80, transparent)`,
                      clipPath: 'polygon(0 0, 100% 0, 98% 100%, 0% 100%)'
                    }}
                  >
                    <input 
                      type="text" 
                      className="w-full p-2 bg-transparent"
                      style={{ 
                        border: `1px solid ${colors.border || colors.primary}30`,
                        color: colors.text,
                        clipPath: 'polygon(0 0, 100% 0, 98% 100%, 0% 100%)'
                      }}
                    />
                  </div>
                </div>
                
                <div>
                  <label 
                    className="block mb-2 text-sm"
                    style={{ color: colors.secondary }}
                  >
                    Mensagem
                  </label>
                  <div 
                    className="p-px"
                    style={{ 
                      background: `linear-gradient(90deg, ${colors.primary}80, transparent)`,
                      clipPath: 'polygon(0 0, 100% 0, 100% 95%, 95% 100%, 0% 100%)'
                    }}
                  >
                    <textarea 
                      rows={5}
                      className="w-full p-2 bg-transparent"
                      style={{ 
                        border: `1px solid ${colors.border || colors.primary}30`,
                        color: colors.text,
                        clipPath: 'polygon(0 0, 100% 0, 100% 95%, 95% 100%, 0% 100%)'
                      }}
                    />
                  </div>
                </div>
                
                <button 
                  type="submit"
                  className="px-6 py-3 transition-all transform hover:translate-y-[-2px] focus:outline-none relative overflow-hidden"
                  style={{ 
                    backgroundColor: colors.primary,
                    color: colors.text,
                    clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)',
                  }}
                >
                  <span className="relative z-10">Enviar Mensagem</span>
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{ 
                      background: `linear-gradient(45deg, transparent 25%, ${colors.secondary} 25%, ${colors.secondary} 50%, transparent 50%, transparent 75%, ${colors.secondary} 75%)`,
                      backgroundSize: '5px 5px'
                    }}
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 