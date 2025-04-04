'use client';

import React, { useEffect, useRef } from 'react';
import { TemplateConfig } from '@/app/types/TemplateConfig';

interface NebulaTemplateProps {
  config: TemplateConfig;
}

export function NebulaTemplate({ config }: NebulaTemplateProps) {
  const nebulaRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (nebulaRef.current) {
        const x = (e.clientX / window.innerWidth) * 10;
        const y = (e.clientY / window.innerHeight) * 10;
        nebulaRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    const handleScroll = () => {
      if (particlesRef.current) {
        particlesRef.current.style.transform = `translateY(${window.scrollY * 0.1}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
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
        <div 
        ref={nebulaRef}
        className="fixed inset-0 z-0 opacity-30 pointer-events-none transition-transform duration-1000 ease-out"
      >
        <div className="absolute left-0 top-0 w-full h-full opacity-20"
          style={{ 
            background: `radial-gradient(circle at 30% 20%, ${colors.primary}30, transparent 60%)`,
            filter: 'blur(80px)'
          }}
        />
        <div className="absolute right-0 bottom-0 w-full h-full opacity-20"
          style={{ 
            background: `radial-gradient(circle at 70% 80%, ${colors.secondary}30, transparent 60%)`,
            filter: 'blur(80px)'
          }}
        />
        <div className="absolute left-1/2 top-1/2 w-full h-full opacity-15 transform -translate-x-1/2 -translate-y-1/2"
          style={{ 
            background: `radial-gradient(ellipse at center, ${colors.accent}20, transparent 60%)`,
            filter: 'blur(100px)'
          }}
        />
      </div>

      <div 
        ref={particlesRef}
        className="fixed inset-0 z-0 pointer-events-none"
      >
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              backgroundColor: i % 3 === 0 ? colors.accent : i % 3 === 1 ? colors.primary : colors.secondary,
              opacity: Math.random() * 0.4 + 0.1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: i % 10 === 0 ? `0 0 ${Math.random() * 3 + 2}px ${colors.primary}` : 'none',
              animation: `twinkle ${Math.random() * 5 + 3}s infinite alternate`
            }}
          />
        ))}
      </div>
      
      <div 
        className={`container mx-auto ${layout.maxWidth} ${layout.padding} relative`}
        style={{ zIndex: 1 }}
      >
        <div className={layout.spacing}>
          {orderedSections.map(sectionId => renderSection(sectionId))}
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes twinkle {
          0% { opacity: 0.1; }
          100% { opacity: 0.6; }
        }
        
        @keyframes moveBackground {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        @keyframes float {
          0% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-8px) translateX(4px);
          }
          100% {
            transform: translateY(0px) translateX(0px);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-150%) skewX(-15deg);
          }
          100% {
            transform: translateX(350%) skewX(-15deg);
          }
        }

        @keyframes pulse {
          0% {
            opacity: 0.3;
            transform: scale(0.99);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.01);
          }
          100% {
            opacity: 0.3;
            transform: scale(0.99);
          }
        }
        
        @keyframes orbit {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) translateX(100px) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) translateX(100px) rotate(-360deg);
          }
        }
        
        .particle {
          position: absolute;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.1);
          animation: float 8s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}

const HeaderSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  return (
    <header className="py-20 relative overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-20"
          style={{ 
            background: `radial-gradient(circle at 30% 30%, ${colors.primary}30, transparent 60%)`,
            filter: 'blur(60px)'
          }}
        />
        <div className="absolute bottom-0 right-0 w-full h-full opacity-20"
          style={{ 
            background: `radial-gradient(circle at 70% 70%, ${colors.accent}30, transparent 60%)`,
            filter: 'blur(70px)'
          }}
        />
        
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-50"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              backgroundColor: i % 3 === 0 ? `${colors.primary}30` : i % 3 === 1 ? `${colors.secondary}30` : `${colors.accent}30`,
              filter: 'blur(5px)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
              transform: 'translate(-50%, -50%)'
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full gap-10">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div 
            className="nebula-heading mb-6 inline-block"
            style={{
              position: 'relative',
              backgroundImage: `linear-gradient(90deg, ${colors.accent}, ${colors.primary})`,
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              fontSize: 'calc(2.8rem + 1vw)',
              fontFamily: typography.headingFont,
              lineHeight: '1.1',
              textShadow: `0 0 30px ${colors.primary}50`
            }}
          >
            {data?.name || 'Seu Nome'}
          </div>
          
          <h2 
            className="mb-6 text-2xl relative"
            style={{
              fontFamily: typography.bodyFont,
              color: colors.secondary,
              textShadow: `0 0 20px ${colors.secondary}30`
            }}
          >
            {data?.title || 'Desenvolvedor Full Stack'}
          </h2>
          
          <p 
            className="mb-8 text-lg leading-relaxed max-w-xl"
            style={{ 
              fontFamily: typography.bodyFont,
              color: `${colors.text}ee`
            }}
          >
            {data?.about ? data.about.substring(0, 150) + (data.about.length > 150 ? '...' : '') : 'Desenvolvedor apaixonado por criar soluções web eficientes e experiências digitais incríveis.'}
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a 
              href={`mailto:${data?.email || 'exemplo@email.com'}`}
              className="relative px-6 py-3 overflow-hidden group rounded-lg"
              style={{
                background: `linear-gradient(90deg, ${colors.primary}90, ${colors.accent}90)`,
                color: colors.text,
                fontFamily: typography.bodyFont,
                fontWeight: 'bold',
                backdropFilter: 'blur(5px)',
                boxShadow: `0 0 20px ${colors.primary}30`
              }}
            >
              <span className="absolute top-0 left-0 w-full h-full transition-all duration-300 ease-out rounded-lg opacity-0 group-hover:opacity-100" 
                style={{
                  background: `linear-gradient(90deg, ${colors.accent}, ${colors.primary})`,
                }}
              />
              <span className="relative z-10 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Contato
              </span>
            </a>
            
            <a 
              href="#projects"
              className="relative px-6 py-3 overflow-hidden group rounded-lg"
              style={{
                background: `${colors.background}90`,
                border: `1px solid ${colors.primary}50`,
                color: colors.text,
                fontFamily: typography.bodyFont,
                fontWeight: 'bold',
                backdropFilter: 'blur(5px)'
              }}
            >
              <span className="absolute top-0 left-0 w-full h-full transition-all duration-300 ease-out rounded-lg opacity-0 group-hover:opacity-30" 
                style={{
                  background: colors.primary,
                }}
              />
              <span className="relative z-10 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1" />
                  <path d="M17 3h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1" />
                  <path d="M12 12v9" />
                  <path d="m5 12 7-9 7 9" />
                </svg>
                Projetos
              </span>
            </a>
          </div>
        </div>
        
        {(data?.showProfilePicture !== false) && (
          <div 
            className="relative w-60 h-60 md:w-[320px] md:h-[320px] rounded-full overflow-hidden"
          >
            <div className="absolute -inset-3 rounded-full opacity-40" style={{
              background: `radial-gradient(circle at center, ${colors.primary}40, transparent 70%)`,
              filter: 'blur(20px)'
            }} />
            
            <div className="absolute inset-0 rounded-full overflow-hidden z-10 border-2" style={{
              borderColor: `${colors.accent}40`,
              boxShadow: `0 0 20px ${colors.primary}40`
            }}>
              <img 
                src={data?.profilePictureUrl || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"} 
                alt={data?.name || "Perfil"}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute inset-0 z-20">
              <div 
                className="w-full h-full animate-spin"
                style={{ 
                  animationDuration: '15s',
                  animationTimingFunction: 'linear',
                  animationIterationCount: 'infinite'
                }}
              >
                <div 
                  className="absolute rounded-full w-2 h-2"
                  style={{
                    backgroundColor: colors.accent,
                    boxShadow: `0 0 8px ${colors.accent}`,
                    top: '20%',
                    right: '10%'
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};


const AboutSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  return (
    <section className="py-16 relative">
      <div className="absolute top-0 right-0 w-full h-full opacity-10"
        style={{ 
          background: `radial-gradient(ellipse at top right, ${colors.accent}, transparent 70%)`,
          filter: 'blur(80px)',
          animation: 'pulse 15s infinite ease-in-out'
        }}
      />
      
      <div className="absolute bottom-0 left-0 w-full h-full opacity-10"
        style={{ 
          background: `radial-gradient(ellipse at bottom left, ${colors.primary}, transparent 70%)`,
          filter: 'blur(80px)',
          animation: 'pulse 15s infinite alternate ease-in-out'
        }}
      />
      
      <div className="text-center mb-16">
        <h2 
          className={`text-3xl md:text-4xl ${typography.headingFont} inline-block relative`}
          style={{ 
            color: colors.secondary,
            textShadow: `0 0 20px ${colors.secondary}40`
          }}
        >
          Sobre Mim
          <div className="h-1 w-full mt-2 rounded-full"
            style={{ 
              background: `linear-gradient(to right, transparent, ${colors.primary}, ${colors.accent}, transparent)`,
              boxShadow: `0 0 10px ${colors.primary}90`
            }}
          />
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <div 
            className="p-8 rounded-xl relative group"
            style={{ 
              background: `linear-gradient(to bottom right, ${colors.surface || colors.background}95, ${colors.surface || colors.background}75)`,
              backdropFilter: 'blur(15px)',
              border: `1px solid ${colors.primary}30`,
              boxShadow: `0 10px 40px ${colors.primary}15`
            }}
          >
            <div 
              className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-700"
              style={{ 
                background: `radial-gradient(circle at 50% 0%, ${colors.primary}, transparent 70%)`,
                filter: 'blur(20px)'
              }}
            />
            
            <div className="mb-8">
              <h3 
                className={`text-2xl mb-4 ${typography.headingFont} relative inline-block`}
                style={{ 
                  color: colors.primary,
                  textShadow: `0 0 10px ${colors.primary}30`
                }}
              >
                Biografia
                <div className="h-px w-full absolute -bottom-1 left-0"
                  style={{ 
                    background: `linear-gradient(to right, ${colors.primary}, transparent)`,
                  }}
                />
              </h3>
              <p className="text-lg leading-relaxed">
                {data?.about || 'Com mais de 5 anos de experiência em desenvolvimento web, tenho trabalhado com as mais variadas tecnologias para criar produtos digitais de alto impacto. Sou especializado em React, Next.js, Node.js e bancos de dados SQL/NoSQL, sempre buscando as melhores práticas e arquiteturas escaláveis para cada projeto.'}
              </p>
            </div>
            
            <div className="mb-8">
              <h3 
                className={`text-2xl mb-4 ${typography.headingFont} relative inline-block`}
                style={{ 
                  color: colors.primary,
                  textShadow: `0 0 10px ${colors.primary}30`
                }}
              >
                Informações de Contato
                <div className="h-px w-full absolute -bottom-1 left-0"
                  style={{ 
                    background: `linear-gradient(to right, ${colors.primary}, transparent)`,
                  }}
                />
              </h3>
              <ul className="space-y-4">
                {data?.email && (
                  <li className="flex items-center gap-4 group/item">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full transition-transform group-hover/item:scale-110"
                      style={{ 
                        background: `linear-gradient(135deg, ${colors.primary}60, ${colors.secondary}60)`,
                        boxShadow: `0 0 15px ${colors.primary}30`,
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm" style={{ color: colors.secondary }}>Email</div>
                      <span className="text-base">{data.email}</span>
                    </div>
                  </li>
                )}
                {data?.phone && (
                  <li className="flex items-center gap-4 group/item">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full transition-transform group-hover/item:scale-110"
                      style={{ 
                        background: `linear-gradient(135deg, ${colors.primary}60, ${colors.secondary}60)`,
                        boxShadow: `0 0 15px ${colors.primary}30`,
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm" style={{ color: colors.secondary }}>Telefone</div>
                      <span className="text-base">{data.phone}</span>
                    </div>
                  </li>
                )}
                {data?.location && (
                  <li className="flex items-center gap-4 group/item">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full transition-transform group-hover/item:scale-110"
                      style={{ 
                        background: `linear-gradient(135deg, ${colors.primary}60, ${colors.secondary}60)`,
                        boxShadow: `0 0 15px ${colors.primary}30`,
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm" style={{ color: colors.secondary }}>Localização</div>
                      <span className="text-base">{data.location}</span>
                    </div>
                  </li>
                )}
              </ul>
            </div>
            
            <div className="mt-8">
              <h3 
                className={`text-2xl mb-4 ${typography.headingFont} relative inline-block`}
                style={{ 
                  color: colors.primary,
                  textShadow: `0 0 10px ${colors.primary}30`
                }}
              >
                Características
                <div className="h-px w-full absolute -bottom-1 left-0"
                  style={{ 
                    background: `linear-gradient(to right, ${colors.primary}, transparent)`,
                  }}
                />
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Criativo', 'Analítico', 'Colaborativo', 'Proativo', 'Adaptável'].map(trait => (
                  <span 
                    key={trait} 
                    className="px-4 py-2 rounded-full text-sm font-medium transition-transform hover:scale-105"
                    style={{ 
                      background: `linear-gradient(45deg, ${colors.primary}30, ${colors.secondary}30)`,
                      backdropFilter: 'blur(5px)',
                      border: `1px solid ${colors.primary}30`,
                      color: colors.text,
                      boxShadow: `0 5px 15px ${colors.primary}10`
                    }}
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-6 rounded-full"
              style={{ 
                background: `radial-gradient(circle, ${colors.primary}50, ${colors.secondary}30, transparent 70%)`,
                filter: 'blur(35px)',
                animation: 'pulse 10s infinite alternate ease-in-out'
              }}
            />
            
            <div 
              className="w-64 h-64 md:w-80 md:h-80 rounded-full relative overflow-hidden border-4"
              style={{ 
                borderColor: `${colors.primary}50`,
                boxShadow: `0 0 40px ${colors.primary}40, inset 0 0 20px ${colors.primary}30`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br animate-pulse" 
                style={{ 
                  background: `radial-gradient(ellipse at center, ${colors.secondary}30, ${colors.background})`,
                  animationDuration: '8s'
                }}
              >
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                      width: `${Math.random() * 2 + 1}px`,
                      height: `${Math.random() * 2 + 1}px`,
                      backgroundColor: i % 3 === 0 ? colors.primary : colors.accent,
                      opacity: Math.random() * 0.6 + 0.2,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      boxShadow: `0 0 ${Math.random() * 3 + 1}px ${colors.primary}`,
                      animation: `twinkle ${Math.random() * 3 + 2}s infinite alternate`
                    }}
                  />
                ))}
              </div>
              
              {data?.profilePictureUrl && data.showProfilePicture !== false && (
                <img 
                  src={data.profilePictureUrl} 
                  alt={data?.name || "Perfil"}
                  className="w-full h-full object-cover z-10 relative"
                />
              )}
              
              <div className="absolute inset-0 z-20 opacity-30" style={{
                background: `linear-gradient(45deg, ${colors.primary}40, transparent, ${colors.accent}40)`,
                mixBlendMode: 'overlay'
              }}/>
            </div>
            
            {[...Array(5)].map((_, i) => (
              <div 
                key={i}
                className="absolute w-3 h-3 rounded-full"
                style={{ 
                  backgroundColor: i % 2 === 0 ? colors.primary : colors.accent,
                  boxShadow: `0 0 15px ${i % 2 === 0 ? colors.primary : colors.accent}`,
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  animation: `orbit ${8 + i * 3}s linear infinite`,
                  opacity: 0.8,
                  filter: 'blur(1px)'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


const ExperienceSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  return (
    <section className="py-16 relative">
      <div className="absolute -bottom-20 -right-20 w-80 h-80 opacity-10"
        style={{ 
          background: `radial-gradient(circle, ${colors.primary}, transparent)`,
          filter: 'blur(60px)',
          animation: 'pulse 12s infinite ease-in-out alternate'
        }}
      />
      
      <div className="text-center mb-16">
        <h2 
          className={`text-3xl md:text-4xl ${typography.headingFont} inline-block relative`}
          style={{ color: colors.secondary }}
        >
          Experiência
          <div className="h-1 w-full mt-2 rounded-full"
            style={{ 
              background: `linear-gradient(to right, transparent, ${colors.primary}, ${colors.accent}, transparent)`,
              boxShadow: `0 0 6px ${colors.primary}50`
            }}
          />
        </h2>
      </div>
      
      <div className="space-y-16">
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
            className="flex flex-col md:flex-row gap-6 md:gap-12 relative"
          >
            {index < (data?.experiences || []).length - 1 && (
              <div 
                className="absolute left-6 md:left-[98px] top-[70px] bottom-0 w-px md:h-full"
                style={{ 
                  background: `linear-gradient(to bottom, ${colors.primary}, transparent)`,
                  zIndex: 0
                }}
              />
            )}
            
            <div className="flex md:flex-col items-center md:items-end md:w-48 shrink-0">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center relative z-10"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                  boxShadow: `0 0 15px ${colors.primary}50`
                }}
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ 
                    backgroundColor: colors.surface || colors.background,
                    boxShadow: `inset 0 0 8px ${colors.primary}50`
                  }}
                >
                  <span className="text-sm">{exp.startDate.substring(2)}</span>
                </div>
              </div>
              
              <div className="ml-4 md:ml-0 md:mt-4">
                <div className="text-lg font-medium">{exp.startDate} - {exp.endDate}</div>
                <div 
                  className="text-sm"
                  style={{ color: `${colors.text}99` }}
                >
                  {exp.company}
                </div>
              </div>
            </div>
            
            <div className="flex-grow">
              <div 
                className="p-6 rounded-lg relative"
                style={{ 
                  background: `linear-gradient(to bottom right, ${colors.surface || colors.background}90, ${colors.surface || colors.background}40)`,
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${colors.primary}20`,
                  boxShadow: `0 10px 30px ${colors.primary}10`
                }}
              >
                <div className="absolute -inset-px rounded-lg opacity-0 hover:opacity-10 transition-opacity"
                  style={{ 
                    background: `radial-gradient(circle at center, ${colors.primary}, transparent)`,
                    filter: 'blur(20px)'
                  }}
                />
                
                <h3 
                  className={`text-xl mb-3 ${typography.headingFont}`}
                  style={{ color: colors.text }}
                >
                  {exp.position}
                </h3>
                
                <p className="mb-6 leading-relaxed">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {(exp.technologies || []).map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 rounded-full text-sm"
                      style={{ 
                        background: `linear-gradient(45deg, ${colors.primary}20, ${colors.secondary}20)`,
                        border: `1px solid ${colors.primary}20`,
                        color: colors.text
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const ProjectsSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  return (
    <section className="py-16 relative">
      <div className="absolute -top-10 -left-10 w-64 h-64 opacity-10"
        style={{ 
          background: `radial-gradient(circle, ${colors.accent}, transparent)`,
          filter: 'blur(50px)',
          animation: 'pulse 15s infinite ease-in-out alternate-reverse'
        }}
      />
      
      <div className="text-center mb-16">
        <h2 
          className={`text-3xl md:text-4xl ${typography.headingFont} inline-block relative`}
          style={{ color: colors.secondary }}
        >
          Projetos
          <div className="h-1 w-full mt-2 rounded-full"
            style={{ 
              background: `linear-gradient(to right, transparent, ${colors.primary}, ${colors.accent}, transparent)`,
              boxShadow: `0 0 6px ${colors.primary}50`
            }}
          />
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {(data?.projects || [
          {
            title: "Projeto Nebula",
            description: "Aplicação web que utiliza efeitos visuais modernos e transições fluidas para melhorar a experiência do usuário.",
            technologies: ["React", "Framer Motion", "TailwindCSS"]
          },
          {
            title: "Fluid Interface",
            description: "Dashboard interativo com visualizações de dados e transições suaves entre diferentes visões.",
            technologies: ["Next.js", "D3.js", "ChartJS"]
          },
          {
            title: "Cosmos Gallery",
            description: "Galeria de imagens com efeitos de parallax e transições inspiradas em névoas espaciais.",
            technologies: ["React", "ThreeJS", "GSAP"]
          }
        ]).map((project, index) => (
          <div 
            key={index} 
            className="group relative h-full"
          >
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-xl"
              style={{ 
                background: `radial-gradient(circle, ${colors.primary}, transparent 70%)`,
                filter: 'blur(25px)',
                transform: 'scale(0.8)',
                animation: 'pulse 3s infinite alternate'
              }}
            />
            
            <div 
              className="p-6 rounded-xl h-full relative transition-all duration-300 group-hover:translate-y-[-5px]"
              style={{ 
                background: `linear-gradient(to bottom right, ${colors.surface || colors.background}90, ${colors.surface || colors.background}40)`,
                backdropFilter: 'blur(10px)',
                border: `1px solid ${colors.primary}20`,
                boxShadow: `0 10px 30px ${colors.primary}10`,
                overflow: 'hidden'
              }}
            >
              <div className="absolute -top-10 -right-10 w-20 h-20 opacity-30"
                style={{ 
                  background: `radial-gradient(circle, ${colors.accent}, transparent)`,
                  filter: 'blur(20px)'
                }}
              />
              
              <h3 
                className={`text-xl mb-4 ${typography.headingFont} relative inline-block`}
                style={{ color: colors.text }}
              >
                {project.title}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ 
                    background: `linear-gradient(to right, ${colors.primary}, ${colors.accent}, transparent)`,
                  }}
                />
              </h3>
              
              <p className="mb-6 leading-relaxed" style={{ color: `${colors.text}DD` }}>
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {(project.technologies || []).map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 rounded-full text-xs"
                    style={{ 
                      background: `linear-gradient(45deg, ${colors.primary}20, ${colors.secondary}20)`,
                      border: `1px solid ${colors.primary}20`,
                      color: colors.text
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <a 
                  href="#" 
                  className="text-sm flex items-center gap-2 relative overflow-hidden group-hover:gap-3 transition-all"
                  style={{ color: colors.secondary }}
                >
                  <span>Ver projeto</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
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
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "CSS/SASS", level: 90 },
        { name: "Animations", level: 95 }
      ]
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 85 },
        { name: "MongoDB", level: 75 },
        { name: "GraphQL", level: 70 }
      ]
    },
    {
      name: "Outros",
      skills: [
        { name: "UI/UX Design", level: 85 },
        { name: "Figma", level: 80 },
        { name: "Git", level: 90 },
        { name: "ThreeJS", level: 70 }
      ]
    }
  ];
  
  return (
    <section className="py-16 relative">
      <div className="absolute top-1/2 left-1/2 w-96 h-96 opacity-10 transform -translate-x-1/2 -translate-y-1/2"
        style={{ 
          background: `radial-gradient(circle, ${colors.primary}, transparent)`,
          filter: 'blur(80px)',
          animation: 'pulse 10s infinite ease-in-out'
        }}
      />
      
      <div className="text-center mb-16">
        <h2 
          className={`text-3xl md:text-4xl ${typography.headingFont} inline-block relative`}
          style={{ color: colors.secondary }}
        >
          Habilidades
          <div className="h-1 w-full mt-2 rounded-full"
            style={{ 
              background: `linear-gradient(to right, transparent, ${colors.primary}, ${colors.accent}, transparent)`,
              boxShadow: `0 0 6px ${colors.primary}50`
            }}
          />
        </h2>
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
              className="p-6 rounded-xl h-full relative"
              style={{ 
                background: `linear-gradient(to bottom right, ${colors.surface || colors.background}90, ${colors.surface || colors.background}40)`,
                backdropFilter: 'blur(10px)',
                border: `1px solid ${colors.primary}20`,
                boxShadow: `0 10px 30px ${colors.primary}10`
              }}
            >
              <div className="absolute -inset-px rounded-xl opacity-0 hover:opacity-10 transition-opacity"
                style={{ 
                  background: `radial-gradient(circle at center, ${colors.primary}, transparent)`,
                  filter: 'blur(20px)'
                }}
              />
              
              <h3 
                className={`text-xl mb-6 text-center ${typography.headingFont}`}
                style={{ color: colors.secondary }}
              >
                {category.name}
              </h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => {
                  const skillName = typeof skill === 'object' ? skill.name : skill;
                  const skillLevel = typeof skill === 'object' ? skill.level : Math.floor(Math.random() * 30) + 70;
                  
                  return (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1.5">
                        <span>{skillName}</span>
                        <span className="text-sm" style={{ color: colors.secondary }}>{skillLevel}%</span>
                      </div>
                      <div 
                        className="h-2 w-full rounded-full relative overflow-hidden"
                        style={{ 
                          backgroundColor: `${colors.primary}20`,
                          boxShadow: `inset 0 0 5px ${colors.primary}20`
                        }}
                      >
                        <div 
                          className="absolute top-0 left-0 h-full rounded-full transition-all duration-1000"
                          style={{ 
                            width: `${skillLevel}%`,
                            background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})`,
                            boxShadow: `0 0 10px ${colors.primary}50`
                          }}
                        />
                        
                        <div 
                          className="absolute top-0 left-0 h-full w-20 opacity-30"
                          style={{ 
                            background: `linear-gradient(90deg, transparent, ${colors.text}, transparent)`,
                            animation: 'shimmer 2s infinite', 
                            transform: 'skewX(-15deg)'
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


const EducationSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  return (
    <section className="py-16 relative">
      <div className="absolute -bottom-20 -left-20 w-72 h-72 opacity-10"
        style={{ 
          background: `radial-gradient(circle, ${colors.secondary}, transparent)`,
          filter: 'blur(70px)',
          animation: 'pulse 12s infinite ease-in-out'
        }}
      />
      
      <div className="text-center mb-16">
        <h2 
          className={`text-3xl md:text-4xl ${typography.headingFont} inline-block relative`}
          style={{ color: colors.secondary }}
        >
          Educação
          <div className="h-1 w-full mt-2 rounded-full"
            style={{ 
              background: `linear-gradient(to right, transparent, ${colors.primary}, ${colors.accent}, transparent)`,
              boxShadow: `0 0 6px ${colors.primary}50`
            }}
          />
        </h2>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <div className="space-y-10">
          {(data?.education || [
            {
              institution: "Universidade Federal",
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
              className="relative group"
            >
              <div 
                className="absolute -inset-4 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity"
                style={{ 
                  background: `radial-gradient(circle at center, ${colors.primary}, transparent)`,
                  filter: 'blur(20px)'
                }}
              />
              
              <div className="flex flex-col md:flex-row gap-6 relative">
                <div
                  className="shrink-0 py-2 px-4 md:py-0 md:w-24 text-center rounded-full md:self-start"
                  style={{ 
                    background: `linear-gradient(45deg, ${colors.primary}70, ${colors.secondary}70)`,
                    backdropFilter: 'blur(5px)',
                    color: colors.text
                  }}
                >
                  {edu.period.split(' - ')[0]}
                </div>
                
                <div
                  className="flex-grow p-6 rounded-xl"
                  style={{ 
                    background: `linear-gradient(to bottom right, ${colors.surface || colors.background}90, ${colors.surface || colors.background}40)`,
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${colors.primary}20`,
                    boxShadow: `0 10px 30px ${colors.primary}10`
                  }}
                >
                  <h3 
                    className={`text-xl mb-2 ${typography.headingFont}`}
                    style={{ color: colors.text }}
                  >
                    {edu.degree}
                  </h3>
                  
                  <h4 
                    className="mb-4"
                    style={{ color: colors.secondary }}
                  >
                    {edu.institution}
                  </h4>
                  
                  <p className="leading-relaxed" style={{ color: `${colors.text}DD` }}>
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>  
  );
};

const ContactSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-1/2 h-1/2"
          style={{ 
            background: `radial-gradient(circle at 25% 25%, ${colors.primary}50, transparent 70%)`,
            filter: 'blur(80px)',
            animation: 'pulse 15s infinite alternate ease-in-out'
          }}
        />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2"
          style={{ 
            background: `radial-gradient(circle at 75% 75%, ${colors.accent}50, transparent 70%)`,
            filter: 'blur(80px)',
            animation: 'pulse 15s infinite alternate-reverse ease-in-out'
          }}
        />
      </div>
      
      <div className="text-center mb-16">
        <h2 
          className={`text-3xl md:text-4xl ${typography.headingFont} inline-block relative`}
          style={{ color: colors.secondary }}
        >
          Contato
          <div className="h-1 w-full mt-2 rounded-full"
            style={{ 
              background: `linear-gradient(to right, transparent, ${colors.primary}, ${colors.accent}, transparent)`,
              boxShadow: `0 0 6px ${colors.primary}50`
            }}
          />
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div
          className="p-6 rounded-xl"
          style={{ 
            background: `linear-gradient(to bottom right, ${colors.surface || colors.background}90, ${colors.surface || colors.background}40)`,
            backdropFilter: 'blur(10px)',
            border: `1px solid ${colors.primary}20`,
            boxShadow: `0 10px 30px ${colors.primary}10`
          }}
        >
          <h3 
            className={`text-xl mb-6 ${typography.headingFont}`}
            style={{ color: colors.text }}
          >
            Informações de Contato
          </h3>
          
          <div className="space-y-6">
            {[
              { icon: "📧", label: "Email", value: data?.email || "contato@exemplo.com" },
              { icon: "📱", label: "Telefone", value: data?.phone || "(11) 98765-4321" },
              { icon: "📍", label: "Localização", value: data?.location || "São Paulo, Brasil" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.primary}30, ${colors.secondary}30)`,
                    backdropFilter: 'blur(4px)',
                    border: `1px solid ${colors.primary}30`,
                    boxShadow: `0 0 15px ${colors.primary}20`
                  }}
                >
                  <span className="text-xl">{item.icon}</span>
                </div>
                
                <div>
                  <div className="text-sm" style={{ color: colors.secondary }}>{item.label}</div>
                  <div>{item.value}</div>
                </div>
              </div>
            ))}
          </div>
          
          <h3 
            className={`text-xl mt-10 mb-6 ${typography.headingFont}`}
            style={{ color: colors.text }}
          >
            Redes Sociais
          </h3>
          
          <div className="flex flex-wrap gap-3">
            {data?.socialLinks && data.socialLinks.length > 0 ? (
              data.socialLinks.map((social, idx) => (
                <a 
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110 group"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.primary}30, ${colors.secondary}30)`,
                    backdropFilter: 'blur(4px)',
                    border: `1px solid ${colors.primary}30`,
                    boxShadow: `0 0 15px ${colors.primary}20`
                  }}
                >
                  <div 
                    className="text-white w-5 h-5"
                    dangerouslySetInnerHTML={{ __html: social.icon || '' }} 
                  />
                  <span className="absolute opacity-0 group-hover:opacity-100 -bottom-8 text-xs px-2 py-1 rounded whitespace-nowrap"
                    style={{
                      background: `${colors.background}90`,
                      backdropFilter: 'blur(5px)',
                      border: `1px solid ${colors.primary}50`,
                      color: colors.text,
                      transition: 'opacity 0.2s ease-in-out'
                    }}
                  >
                    {social.platform}
                  </span>
                </a>
              ))
            ) : (
              ["LinkedIn", "GitHub", "Twitter", "Instagram"].map((social, idx) => (
                <div 
                  key={idx}
                  className="w-12 h-12 rounded-full flex items-center justify-center opacity-50"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.primary}30, ${colors.secondary}30)`,
                    backdropFilter: 'blur(4px)',
                    border: `1px solid ${colors.primary}30`,
                  }}
                >
                  <span className="text-sm">{social.substring(0, 1)}</span>
                </div>
              ))
            )}
          </div>
        </div>
        
        <div
          className="p-6 rounded-xl"
          style={{ 
            background: `linear-gradient(to bottom right, ${colors.surface || colors.background}90, ${colors.surface || colors.background}40)`,
            backdropFilter: 'blur(10px)',
            border: `1px solid ${colors.primary}20`,
            boxShadow: `0 10px 30px ${colors.primary}10`
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
                <label className="block mb-2 text-sm" style={{ color: colors.secondary }}>Nome</label>
                <input 
                  type="text" 
                  className="w-full p-3 rounded-lg"
                  style={{ 
                    backgroundColor: `${colors.background}90`,
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${colors.primary}30`,
                    color: colors.text
                  }}
                />
              </div>
              
              <div>
                <label className="block mb-2 text-sm" style={{ color: colors.secondary }}>Email</label>
                <input 
                  type="email" 
                  className="w-full p-3 rounded-lg"
                  style={{ 
                    backgroundColor: `${colors.background}90`,
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${colors.primary}30`,
                    color: colors.text
                  }}
                />
              </div>
            </div>
            
            <div>
              <label className="block mb-2 text-sm" style={{ color: colors.secondary }}>Assunto</label>
              <input 
                type="text" 
                className="w-full p-3 rounded-lg"
                style={{ 
                  backgroundColor: `${colors.background}90`,
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${colors.primary}30`,
                  color: colors.text
                }}
              />
            </div>
            
            <div>
              <label className="block mb-2 text-sm" style={{ color: colors.secondary }}>Mensagem</label>
              <textarea 
                rows={5}
                className="w-full p-3 rounded-lg"
                style={{ 
                  backgroundColor: `${colors.background}90`,
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${colors.primary}30`,
                  color: colors.text
                }}
              />
            </div>
            
            <button 
              type="submit"
              className="px-8 py-3 rounded-full w-full transition-all transform hover:scale-[1.02] hover:shadow-lg focus:outline-none"
              style={{ 
                background: `linear-gradient(45deg, ${colors.primary}, ${colors.secondary})`,
                color: colors.text,
                boxShadow: `0 4px 15px ${colors.primary}40`
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