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
        color: colors.text,
        // Adicionar gradiente sutil ao fundo
        backgroundImage: `
          radial-gradient(circle at 20% 30%, ${colors.primary}05, transparent 20%),
          radial-gradient(circle at 80% 70%, ${colors.accent}05, transparent 20%)
        `
      }}
    >
      {/* Sol no Zenith (ponto mais alto do céu) */}
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] opacity-10 pointer-events-none">
        <div 
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-3/4 w-[600px] h-[600px] rounded-full"
          style={{ 
            background: `radial-gradient(circle, ${colors.primary}40, transparent 70%)`,
            boxShadow: `0 0 100px ${colors.primary}30`
          }}
        />
        
        {/* Raios solares */}
        {[...Array(24)].map((_, i) => (
          <div 
            key={i}
            className="absolute top-0 left-1/2 h-1 origin-bottom"
            style={{ 
              width: '300px',
              backgroundColor: `${colors.primary}20`,
              transform: `translateX(-50%) rotate(${i * 15}deg)`,
              opacity: Math.random() * 0.3 + 0.1
            }}
          />
        ))}
      </div>
      
      {/* Elementos decorativos celestiais aprimorados */}
      <div className="fixed right-0 top-0 w-full h-64 opacity-10 pointer-events-none">
        <svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg">
          <path 
            fill={colors.primary} 
            d="M0,64 C100,42 200,0 300,0 C400,0 500,42 600,64 C700,85 800,64 800,64 L800,0 L0,0 Z" 
          />
        </svg>
      </div>
      
      <div className="fixed left-0 top-40 w-full h-32 opacity-5 pointer-events-none">
        <svg viewBox="0 0 800 100" xmlns="http://www.w3.org/2000/svg">
          <path 
            fill={colors.accent} 
            d="M0,32 C50,16 150,48 200,32 C250,16 300,0 400,0 C500,0 550,16 600,32 C650,48 750,16 800,32 L800,100 L0,100 Z" 
          />
        </svg>
      </div>
      
      {/* Estrelas fixas no fundo */}
      {[...Array(50)].map((_, i) => (
        <div 
          key={i}
          className="fixed rounded-full animate-pulse pointer-events-none"
          style={{ 
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            backgroundColor: i % 3 === 0 ? colors.primary : i % 3 === 1 ? colors.accent : colors.secondary,
            opacity: Math.random() * 0.4 + 0.1,
            animationDuration: `${Math.random() * 5 + 2}s`
          }}
        />
      ))}
      
      {/* Nuvens celestiais estilizadas */}
      <div className="fixed -right-20 top-1/4 w-80 h-32 opacity-5 pointer-events-none"
           style={{ background: `radial-gradient(ellipse, ${colors.primary}30, transparent 70%)` }}></div>
      <div className="fixed -left-40 top-2/3 w-96 h-24 opacity-5 pointer-events-none"
           style={{ background: `radial-gradient(ellipse, ${colors.accent}30, transparent 70%)` }}></div>
      
      {/* Container para o conteúdo */}
      <div 
        className={`container mx-auto ${layout.maxWidth} ${layout.padding} relative z-10`}
      >
        {/* Linha celestial horizontal superior */}
        <div 
          className="w-full h-px mb-12 opacity-20"
          style={{ 
            background: `linear-gradient(90deg, transparent, ${colors.primary}, transparent)`,
            boxShadow: `0 0 10px ${colors.primary}50`
          }}
        />
        
        <div className={layout.spacing}>
          {orderedSections.map(sectionId => renderSection(sectionId))}
        </div>
        
        {/* Linha celestial horizontal inferior */}
        <div 
          className="w-full h-px mt-12 opacity-20"
          style={{ 
            background: `linear-gradient(90deg, transparent, ${colors.primary}, transparent)`,
            boxShadow: `0 0 10px ${colors.primary}50`
          }}
        />
        
        {/* Footer celestial simples */}
        <div className="text-center py-8 opacity-70 text-sm">
          <p>© {new Date().getFullYear()} - Tocando o céu com seu portfólio</p>
          <div 
            className="w-12 h-12 mx-auto mt-4 opacity-30 relative"
            style={{ 
              border: `1px solid ${colors.primary}`,
              borderRadius: '50%',
              boxShadow: `0 0 10px ${colors.primary}30`
            }}
          >
            <div 
              className="absolute inset-3 rounded-full"
              style={{ 
                background: `radial-gradient(circle, ${colors.primary}, transparent 80%)` 
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Seções do Template Zenith
const HeaderSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  // Usar socialLinks da estrutura correta de dados
  const socialLinks = data?.socialLinks || [];
  const hasSocialLinks = socialLinks.length > 0;
  
  // Função para obter o ícone baseado na plataforma
  const getSocialIcon = (platform: string) => {
    const icons: {[key: string]: string} = {
      github: '🌟',
      linkedin: '💼',
      twitter: '📢',
      instagram: '📸',
      facebook: '👥',
      youtube: '🎬',
      dribbble: '🎨',
      behance: '🖼️',
      medium: '📝',
      website: '🌐'
    };
    return icons[platform.toLowerCase()] || '🔗';
  };
  
  return (
    <section className="py-16 md:py-28 flex flex-col items-center text-center relative">
      {/* Elementos decorativos celestiais aprimorados */}
      <div 
        className="absolute top-0 right-0 left-0 h-full opacity-5 overflow-hidden"
        style={{ background: `linear-gradient(180deg, ${colors.primary}20 0%, transparent 100%)` }}
      >
        {/* Sol no zênite (ponto mais alto do céu) */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 rounded-full opacity-30"
             style={{ background: `radial-gradient(circle, ${colors.primary}60, transparent 70%)` }}></div>
        
        {/* Estrelas e pequenos pontos luminosos */}
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{ 
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              backgroundColor: i % 2 === 0 ? colors.primary : colors.accent,
              opacity: Math.random() * 0.5 + 0.2,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
        
        {/* Nuvens estilizadas */}
        <div className="absolute -top-20 left-1/4 w-72 h-24 opacity-20"
             style={{ background: `radial-gradient(ellipse, ${colors.primary}40, transparent 70%)` }}></div>
        <div className="absolute top-40 right-1/3 w-48 h-16 opacity-15"
             style={{ background: `radial-gradient(ellipse, ${colors.accent}40, transparent 70%)` }}></div>
      </div>
      
      {/* Foto do perfil (se existir) com melhor integração */}
      {data?.profilePictureUrl && (
        <div className="mb-10 relative">
          {/* Aura em volta da foto */}
          <div className="absolute inset-0 rounded-full opacity-50 animate-pulse"
               style={{ 
                 background: `radial-gradient(circle, ${colors.primary}40, transparent 70%)`,
                 transform: 'scale(1.3)'
               }}></div>
          
          {/* Raios solares decorativos */}
          {[...Array(12)].map((_, i) => (
            <div 
              key={i}
              className="absolute top-1/2 left-1/2 h-1 opacity-30"
              style={{ 
                width: '60px',
                backgroundColor: i % 2 === 0 ? colors.primary : colors.accent,
                transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateX(40px)`,
              }}
            />
          ))}
          
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden ring-4 relative z-10"
               style={{ 
                 ringColor: colors.primary,
                 boxShadow: `0 0 20px ${colors.primary}50`
               }}>
            <img 
              src={data.profilePictureUrl} 
              alt={data?.name || 'Perfil'} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
      
      <div className="w-20 h-1 mb-10 rounded-full" style={{ backgroundColor: colors.primary }}></div>
      
      <h1 
        className={`text-4xl md:text-5xl lg:text-6xl mb-6 ${typography.headingFont} relative`}
        style={{ color: colors.primary }}
      >
        {/* Efeito de brilho no nome */}
        <span className="relative">
          {data?.name || 'João da Silva'}
          <div 
            className="absolute -bottom-2 left-0 right-0 h-1 opacity-50 rounded-full"
            style={{ 
              background: `linear-gradient(90deg, transparent, ${colors.primary}, transparent)`,
              boxShadow: `0 0 10px ${colors.primary}` 
            }}
          />
        </span>
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
          className="px-8 py-3 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 shadow-lg relative overflow-hidden group"
          style={{ 
            backgroundColor: colors.primary, 
            color: colors.background
          }}
        >
          <span className="relative z-10">Meu Trabalho</span>
          {/* Efeito de brilho no hover */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity"
            style={{ 
              background: `radial-gradient(circle at center, white, transparent 70%)` 
            }}
          />
        </button>
        <button 
          className="px-8 py-3 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 border-2 relative overflow-hidden group"
          style={{ 
            borderColor: colors.primary,
            color: colors.primary
          }}
        >
          <span className="relative z-10">Contato</span>
          {/* Efeito de brilho no hover */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
            style={{ 
              background: colors.primary
            }}
          />
        </button>
      </div>
      
      {/* Redes sociais */}
      {hasSocialLinks && (
        <div className="mt-12 flex items-center justify-center space-x-4">
          {socialLinks.map((social, index) => (
            <a 
              key={social.platform}
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg relative overflow-hidden group"
              style={{ 
                backgroundColor: `${colors.primary}15`,
                color: colors.primary
              }}
              aria-label={social.platform}
            >
              <span className="relative z-10">{getSocialIcon(social.platform)}</span>
              {/* Efeito de brilho no hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity"
                style={{ 
                  background: `radial-gradient(circle at center, ${colors.primary}, transparent 70%)` 
                }}
              />
            </a>
          ))}
        </div>
      )}
      
      {/* Elemento decorativo inferior - horizonte */}
      <div className="absolute bottom-0 left-0 right-0 h-12 opacity-10"
           style={{ background: `linear-gradient(to top, ${colors.primary}30, transparent)` }}></div>
    </section>
  );
};

const AboutSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  // Verificar se existe foto de perfil
  const hasProfilePicture = !!data?.profilePictureUrl;
  
  return (
    <section className="py-20 relative">
      {/* Elementos celestiais decorativos */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-5"
           style={{ background: `radial-gradient(circle, ${colors.primary}50, transparent 70%)` }}></div>
           
      <div className="absolute bottom-10 left-20 w-40 h-40 rounded-full opacity-5"
           style={{ background: `radial-gradient(circle, ${colors.accent}50, transparent 70%)` }}></div>
      
      {/* Estrelas espalhadas */}
      {[...Array(10)].map((_, i) => (
        <div 
          key={i}
          className="absolute rounded-full animate-pulse"
          style={{ 
            top: `${20 + Math.random() * 60}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 5 + 2}px`,
            height: `${Math.random() * 5 + 2}px`,
            backgroundColor: i % 2 === 0 ? colors.primary : colors.accent,
            opacity: Math.random() * 0.3 + 0.1,
            animationDuration: `${Math.random() * 4 + 3}s`
          }}
        />
      ))}
      
      <div className="flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2 order-2 md:order-1">
          <div className="w-20 h-1 mb-8 rounded-full" style={{ backgroundColor: colors.primary }}></div>
          <h2 
            className={`text-3xl mb-8 ${typography.headingFont} relative inline-block`} 
            style={{ color: colors.primary }}
          >
            Sobre Mim
            {/* Decoração estilo Zenith */}
            <div 
              className="absolute -bottom-2 left-0 right-0 h-0.5 opacity-50"
              style={{ 
                background: `linear-gradient(to right, ${colors.primary}, transparent)` 
              }}
            />
          </h2>
          
          <div className="space-y-4">
            <p className="relative">
              {data?.about || 'Com mais de 5 anos de experiência em desenvolvimento web, tenho trabalhado com as mais variadas tecnologias para criar produtos digitais de alto impacto.'}
            </p>
            <p>
              Sou especializado em React, Next.js, Node.js e bancos de dados SQL/NoSQL, sempre buscando as melhores práticas e arquiteturas escaláveis para cada projeto.
            </p>
          </div>
          
          {/* Skills tags com efeitos celestiais */}
          <div className="mt-10 flex flex-wrap gap-3">
            {(['Inovador', 'Criativo', 'Analítico', 'Proativo', 'Adaptável']).map((trait, index) => (
              <span 
                key={trait} 
                className="px-4 py-2 rounded-md inline-block text-sm transition-all hover:transform hover:scale-105 relative overflow-hidden group"
                style={{ 
                  background: `${colors.primary}10`, 
                  border: `1px solid ${colors.border}`,
                  color: colors.primary
                }}
              >
                {trait}
                {/* Efeito de brilho no hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity"
                  style={{ 
                    background: `radial-gradient(circle at center, ${colors.primary}, transparent 70%)` 
                  }}
                />
              </span>
            ))}
          </div>
        </div>
        
        <div className="md:w-1/2 order-1 md:order-2 relative">
          {hasProfilePicture ? (
            <div className="relative">
              {/* Raios solares emanando da foto */}
              {[...Array(12)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute top-1/2 left-1/2 h-1 opacity-10"
                  style={{ 
                    width: '100px',
                    backgroundColor: i % 2 === 0 ? colors.primary : colors.accent,
                    transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateX(70%)`,
                  }}
                />
              ))}
              
              {/* Elemento decorativo atrás da foto - aura */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-20"
                style={{ 
                  background: `radial-gradient(circle, ${colors.primary}50, ${colors.accent}20)`,
                  transform: 'scale(1.1)'
                }}
              ></div>
              
              <div 
                className="relative aspect-square max-w-sm mx-auto overflow-hidden rounded-2xl border shadow-lg"
                style={{ 
                  borderColor: colors.border,
                  boxShadow: `0 5px 20px ${colors.primary}30`
                }}
              >
                <img 
                  src={data.profilePictureUrl} 
                  alt={data?.name || 'Perfil'} 
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay de brilho suave */}
                <div 
                  className="absolute inset-0 opacity-10"
                  style={{ 
                    background: `linear-gradient(45deg, ${colors.primary}50, transparent, ${colors.accent}30)` 
                  }}
                />
              </div>
            </div>
          ) : (
            <div 
              className="relative aspect-square max-w-sm mx-auto overflow-hidden rounded-2xl border"
              style={{ borderColor: colors.border }}
            >
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Foto</span>
              </div>
              
              {/* Overlay gradiente mesmo sem foto */}
              <div 
                className="absolute inset-0 opacity-10"
                style={{ 
                  background: `linear-gradient(45deg, ${colors.primary}50, transparent, ${colors.accent}30)` 
                }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const ExperienceSection = ({ config }: { config: TemplateConfig }) => {
  const { colors, typography, data } = config.props;
  
  return (
    <section className="py-20 relative">
      {/* Elementos decorativos de céu */}
      <div className="absolute top-0 left-1/4 w-64 h-40 opacity-5">
        <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
          <path 
            fill={colors.primary}
            d="M0,25 Q25,0 50,25 T100,25 L100,50 L0,50 Z" 
          />
        </svg>
      </div>
      
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
                    backgroundColor: `${colors.primary}10`, 
                    color: colors.primary
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
            
            {/* Linha decorativa entre itens com gradiente - aparência de horizonte */}
            {index < (data?.experiences?.length || 1) - 1 && (
              <div 
                className="absolute bottom-0 left-0 right-0 h-px mt-8 opacity-20 translate-y-8"
                style={{ 
                  background: `linear-gradient(to right, transparent, ${colors.primary}, transparent)` 
                }}
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
                    backgroundColor: `${colors.primary}10`, 
                    color: colors.primary
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
    <section className="py-20 relative">
      {/* Elementos decorativos de céu - nuvens estilizadas */}
      <div className="absolute -right-10 top-10 w-40 h-20 opacity-5"
           style={{ background: `radial-gradient(ellipse, ${colors.primary}40, transparent 70%)` }}></div>
      <div className="absolute -right-20 top-20 w-60 h-20 opacity-5"
           style={{ background: `radial-gradient(ellipse, ${colors.primary}40, transparent 70%)` }}></div>
      
      <div className="absolute -left-10 bottom-40 w-32 h-16 opacity-5"
           style={{ background: `radial-gradient(ellipse, ${colors.accent}40, transparent 70%)` }}></div>
      <div className="absolute -left-20 bottom-60 w-48 h-16 opacity-5"
           style={{ background: `radial-gradient(ellipse, ${colors.accent}40, transparent 70%)` }}></div>
           
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
            <div className="overflow-hidden rounded-xl mb-6 aspect-video relative shadow-lg">
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
              
              {/* Overlay com gradiente celestial */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.primary}90, ${colors.accent}80)` 
                }}
              >
                <div className="flex space-x-4">
                  <a 
                    href={project.liveUrl || '#'} 
                    className="p-3 rounded-full transform transition-transform hover:scale-110 shadow-md"
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
                    className="p-3 rounded-full transform transition-transform hover:scale-110 shadow-md"
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
            <div className="overflow-hidden rounded-xl mb-6 aspect-video relative shadow-lg">
              <div 
                className="w-full h-full flex items-center justify-center"
                style={{ 
                  background: `linear-gradient(to bottom right, ${colors.primary}10, ${colors.accent}10)` 
                }}
              >
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
  }, {} as Record<string, any>);
  
  return (
    <section className="py-20 relative">
      {/* Elementos decorativos de céu */}
      <div className="absolute -right-20 top-1/4 w-64 h-64 rounded-full opacity-5"
           style={{ background: `radial-gradient(circle, ${colors.primary}40, transparent 70%)` }}></div>
      <div className="absolute -left-20 bottom-1/4 w-40 h-40 rounded-full opacity-5"
           style={{ background: `radial-gradient(circle, ${colors.accent}40, transparent 70%)` }}></div>
      
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
                {skills.map((skill: any, idx: number) => (
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
                      style={{ backgroundColor: `${colors.text}10` }}
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
              className="p-6 rounded-lg border-2 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
              style={{ 
                borderColor: colors.border,
                background: `linear-gradient(145deg, ${colors.background}, ${colors.primary}05)`
              }}
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
    <section className="py-20 relative">
      {/* Elemento decorativo de céu */}
      <div className="absolute left-0 right-0 top-0 h-24 opacity-5"
           style={{ background: `linear-gradient(180deg, ${colors.primary}20, transparent)` }}></div>
      
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
            {/* Elemento visual na timeline - estrela */}
            <div 
              className="absolute left-0 top-0 w-4 h-4 rotate-45 group-hover:scale-125 transition-transform"
              style={{ 
                backgroundColor: colors.primary,
                boxShadow: `0 0 10px ${colors.primary}50`
              }}
            ></div>
            
            {/* Linha vertical */}
            {index < (data?.education?.length || 1) - 1 && (
              <div 
                className="absolute left-2 top-4 bottom-0 w-px -mb-8"
                style={{ 
                  background: `linear-gradient(to bottom, ${colors.primary}, ${colors.accent}20)` 
                }}
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
                  backgroundColor: `${colors.primary}10`, 
                  color: colors.primary
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
              className="absolute left-0 top-0 w-4 h-4 rotate-45 group-hover:scale-125 transition-transform"
              style={{ 
                backgroundColor: colors.primary,
                boxShadow: `0 0 10px ${colors.primary}50`
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
                  backgroundColor: `${colors.primary}10`, 
                  color: colors.primary
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
  
  // Usar a estrutura correta de dados para redes sociais
  const socialLinks = data?.socialLinks || [];
  const hasSocialLinks = socialLinks.length > 0;
  
  // Função para obter o ícone baseado na plataforma
  const getSocialIcon = (platform: string) => {
    const icons: {[key: string]: string} = {
      github: '🌟',
      linkedin: '💼',
      twitter: '📢',
      instagram: '📸',
      facebook: '👥',
      youtube: '🎬',
      dribbble: '🎨',
      behance: '🖼️',
      medium: '📝',
      website: '🌐'
    };
    return icons[platform.toLowerCase()] || '🔗';
  };
  
  return (
    <section className="py-20 relative">
      {/* Elementos decorativos celestiais */}
      <div className="absolute top-0 right-0 w-full h-40 opacity-5">
        <svg viewBox="0 0 800 100" xmlns="http://www.w3.org/2000/svg">
          <path 
            fill={colors.primary} 
            d="M0,20 C150,60 350,0 500,30 C650,60 750,30 800,20 L800,0 L0,0 Z" 
          />
        </svg>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-32 opacity-5">
        <svg viewBox="0 0 800 100" xmlns="http://www.w3.org/2000/svg">
          <path 
            fill={colors.accent} 
            d="M0,80 C150,30 350,100 500,70 C650,40 750,80 800,90 L800,100 L0,100 Z" 
          />
        </svg>
      </div>
      
      {/* Estrelas decorativas */}
      {[...Array(15)].map((_, i) => (
        <div 
          key={i}
          className="absolute rounded-full animate-pulse"
          style={{ 
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            backgroundColor: i % 2 === 0 ? colors.primary : colors.accent,
            opacity: Math.random() * 0.3 + 0.1,
            animationDuration: `${Math.random() * 4 + 2}s`
          }}
        />
      ))}
      
      <div className="w-20 h-1 mb-8 rounded-full" style={{ backgroundColor: colors.primary }}></div>
      <h2 
        className={`text-3xl mb-12 ${typography.headingFont} relative inline-block`} 
        style={{ color: colors.primary }}
      >
        Contato
        {/* Sublinhado estilo celestial */}
        <div 
          className="absolute -bottom-2 left-0 right-0 h-0.5 opacity-50"
          style={{ 
            background: `linear-gradient(to right, ${colors.primary}, transparent)` 
          }}
        />
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
            <div className="flex items-center gap-4 group">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all group-hover:scale-110"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.primary}20, ${colors.primary}05)`,
                  color: colors.primary,
                  boxShadow: `0 0 10px ${colors.primary}20`
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
                  className="text-lg hover:underline transition-all"
                  style={{ color: colors.accent }}
                >
                  {data?.email || 'joao@exemplo.com'}
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 group">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all group-hover:scale-110"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.primary}20, ${colors.primary}05)`,
                  color: colors.primary,
                  boxShadow: `0 0 10px ${colors.primary}20`
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
                  className="text-lg hover:underline transition-all"
                  style={{ color: colors.accent }}
                >
                  {data?.phone || '(11) 98765-4321'}
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 group">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all group-hover:scale-110"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.primary}20, ${colors.primary}05)`,
                  color: colors.primary,
                  boxShadow: `0 0 10px ${colors.primary}20`
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
          
          {/* Redes sociais */}
          {hasSocialLinks ? (
            <div className="mt-10 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a 
                  key={social.platform}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 relative overflow-hidden group"
                  style={{ 
                    borderColor: colors.border,
                    color: colors.primary,
                    backgroundColor: `${colors.primary}10`,
                    boxShadow: `0 0 10px ${colors.primary}20`
                  }}
                  aria-label={social.platform}
                >
                  <span className="relative z-10">{getSocialIcon(social.platform)}</span>
                  {/* Efeito de brilho celestial no hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity"
                    style={{ 
                      background: `radial-gradient(circle at center, ${colors.primary}80, transparent 70%)` 
                    }}
                  />
                </a>
              ))}
            </div>
          ) : (
            <div className="mt-10 flex space-x-5">
              {['github', 'linkedin', 'twitter', 'instagram'].map(social => (
                <a 
                  href="#" 
                  key={social} 
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 relative overflow-hidden group"
                  style={{ 
                    borderColor: colors.border,
                    color: colors.primary,
                    backgroundColor: `${colors.primary}10`,
                    boxShadow: `0 0 10px ${colors.primary}20`
                  }}
                  aria-label={`Link para ${social}`}
                >
                  <span className="relative z-10">{social.charAt(0).toUpperCase()}</span>
                  {/* Efeito de brilho celestial no hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity"
                    style={{ 
                      background: `radial-gradient(circle at center, ${colors.primary}80, transparent 70%)` 
                    }}
                  />
                </a>
              ))}
            </div>
          )}
        </div>
        
        <div>
          <form className="space-y-6 relative">
            {/* Fundo com gradiente suave */}
            <div 
              className="absolute inset-0 rounded-xl opacity-5"
              style={{ 
                background: `linear-gradient(135deg, ${colors.primary}50, ${colors.accent}30)` 
              }}
            />
            
            <div className="relative">
              <label 
                className={`block text-sm mb-2 ${typography.bodyFont}`}
                style={{ color: colors.text }}
              >
                Nome
              </label>
              <input 
                type="text" 
                className="w-full p-3 rounded-lg bg-transparent border-2 transition-all focus:outline-none focus:shadow-md"
                style={{ 
                  borderColor: colors.border,
                  boxShadow: `0 0 0 transparent`,
                  transition: 'box-shadow 0.3s ease'
                }}
                placeholder="Seu nome"
                disabled
              />
            </div>
            <div className="relative">
              <label 
                className={`block text-sm mb-2 ${typography.bodyFont}`}
                style={{ color: colors.text }}
              >
                Email
              </label>
              <input 
                type="email" 
                className="w-full p-3 rounded-lg bg-transparent border-2 transition-all focus:outline-none focus:shadow-md"
                style={{ 
                  borderColor: colors.border,
                  boxShadow: `0 0 0 transparent`,
                  transition: 'box-shadow 0.3s ease'
                }}
                placeholder="Seu email"
                disabled
              />
            </div>
            <div className="relative">
              <label 
                className={`block text-sm mb-2 ${typography.bodyFont}`}
                style={{ color: colors.text }}
              >
                Mensagem
              </label>
              <textarea 
                className="w-full p-3 rounded-lg bg-transparent border-2 transition-all focus:outline-none focus:shadow-md resize-none"
                style={{ 
                  borderColor: colors.border,
                  boxShadow: `0 0 0 transparent`,
                  transition: 'box-shadow 0.3s ease'
                }}
                rows={5}
                placeholder="Sua mensagem"
                disabled
              ></textarea>
            </div>
            <button 
              type="button"
              className="px-6 py-3 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 relative overflow-hidden group"
              style={{ 
                backgroundColor: colors.primary, 
                color: colors.background
              }}
              disabled
            >
              <span className="relative z-10">Enviar Mensagem</span>
              {/* Efeito de brilho no hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity"
                style={{ 
                  background: `radial-gradient(circle at center, white, transparent 70%)` 
                }}
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}; 