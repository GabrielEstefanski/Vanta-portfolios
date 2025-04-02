'use client';

import { TemplateProps } from './types';

export default function Modern({ data, colors, sections, layout, typography }: TemplateProps) {
  const { basicInfo, experiences, projects, certificates } = data;

  // Função auxiliar para renderizar seções
  const renderSection = (sectionId: string) => {
    const section = sections.find(s => s.id === sectionId);
    if (!section?.enabled) return null;

    switch (sectionId) {
      case 'header':
        return (
          <header className={`relative py-32 ${layout.padding} overflow-hidden`}>
            {section.customFields?.showGradient && (
              <div 
                className="absolute inset-0 opacity-10"
                style={{ 
                  background: `linear-gradient(45deg, ${colors.primary}, ${colors.secondary}, ${colors.accent})`
                }}
              />
            )}
            <div className="relative max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div className="flex-1">
                  <h1 
                    className={`text-6xl md:text-7xl ${typography.headingFont} mb-6 leading-tight`}
                    style={{ color: colors.text }}
                  >
                    {basicInfo.name}
                  </h1>
                  <h2 
                    className={`text-2xl md:text-3xl mb-6`}
                    style={{ color: colors.textSecondary }}
                  >
                    {basicInfo.title}
                  </h2>
                  <p 
                    className={`text-lg max-w-2xl mb-8 ${typography.bodyFont}`}
                    style={{ color: colors.textSecondary }}
                  >
                    {basicInfo.bio}
                  </p>
                  <div className={`flex flex-wrap gap-4 ${layout.spacing}`}>
                    <a 
                      href={`mailto:${basicInfo.email}`}
                      className="group px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                      style={{ 
                        backgroundColor: colors.primary,
                        color: colors.background
                      }}
                    >
                      <span className="relative">
                        {basicInfo.email}
                        <span 
                          className="absolute -bottom-1 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                          style={{ backgroundColor: colors.background }}
                        />
                      </span>
                    </a>
                    <a 
                      href={`tel:${basicInfo.phone}`}
                      className="group px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                      style={{ 
                        backgroundColor: colors.secondary,
                        color: colors.background
                      }}
                    >
                      <span className="relative">
                        {basicInfo.phone}
                        <span 
                          className="absolute -bottom-1 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                          style={{ backgroundColor: colors.background }}
                        />
                      </span>
                    </a>
                    <span 
                      className="px-6 py-3 rounded-lg text-sm font-medium"
                      style={{ 
                        backgroundColor: colors.accent,
                        color: colors.background
                      }}
                    >
                      {basicInfo.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </header>
        );

      case 'experiences':
        return (
          <section className={`py-20 ${layout.padding}`}>
            <div className={`max-w-${layout.maxWidth} mx-auto`}>
              <h2 
                className={`text-4xl ${typography.headingFont} mb-16 text-center`}
                style={{ color: colors.text }}
              >
                {section.title || 'Experiência Profissional'}
              </h2>
              <div className={layout.spacing}>
                {experiences.map((exp, index) => (
                  <div 
                    key={exp.id}
                    className={`flex flex-col md:flex-row gap-8 ${
                      section.customFields?.showTimeline && index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    <div className="flex-1">
                      <div 
                        className="p-8 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
                        style={{ 
                          backgroundColor: colors.background,
                          border: `2px solid ${colors.primary}`,
                          boxShadow: `0 4px 20px ${colors.primary}20`
                        }}
                      >
                        <h3 
                          className={`text-2xl ${typography.headingFont} mb-3`}
                          style={{ color: colors.text }}
                        >
                          {exp.position}
                        </h3>
                        <h4 
                          className={`text-xl mb-3 ${typography.bodyFont}`}
                          style={{ color: colors.textSecondary }}
                        >
                          {exp.company}
                        </h4>
                        <p 
                          className={`text-sm mb-6 ${typography.bodyFont}`}
                          style={{ color: colors.textSecondary }}
                        >
                          {exp.period}
                        </p>
                        <p 
                          className={`${typography.baseSize} leading-relaxed ${typography.bodyFont}`}
                          style={{ color: colors.text }}
                        >
                          {exp.description}
                        </p>
                      </div>
                    </div>
                    {section.customFields?.showTimeline && (
                      <div className="hidden md:block w-1" style={{ backgroundColor: colors.primary }} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'projects':
        return (
          <section className={`py-20 ${layout.padding}`}>
            <div className={`max-w-${layout.maxWidth} mx-auto`}>
              <h2 
                className={`text-4xl ${typography.headingFont} mb-16 text-center`}
                style={{ color: colors.text }}
              >
                {section.title || 'Projetos'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project) => (
                  <div 
                    key={project.id}
                    className="group p-8 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
                    style={{ 
                      backgroundColor: colors.background,
                      border: `2px solid ${colors.secondary}`,
                      boxShadow: `0 4px 20px ${colors.secondary}20`
                    }}
                  >
                    <h3 
                      className={`text-2xl ${typography.headingFont} mb-4`}
                      style={{ color: colors.text }}
                    >
                      {project.name}
                    </h3>
                    <p 
                      className={`${typography.baseSize} mb-6 ${typography.bodyFont}`}
                      style={{ color: colors.text }}
                    >
                      {project.description}
                    </p>
                    {section.customFields?.showTechnologies && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group-hover:scale-105"
                            style={{ 
                              backgroundColor: colors.accent,
                              color: colors.background
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                      style={{ 
                        backgroundColor: colors.primary,
                        color: colors.background
                      }}
                    >
                      Ver Projeto
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'certificates':
        return (
          <section className={`py-20 ${layout.padding}`}>
            <div className={`max-w-${layout.maxWidth} mx-auto`}>
              <h2 
                className={`text-4xl ${typography.headingFont} mb-16 text-center`}
                style={{ color: colors.text }}
              >
                {section.title || 'Certificados'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {certificates.map((cert) => (
                  <div 
                    key={cert.id}
                    className="group p-8 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
                    style={{ 
                      backgroundColor: colors.background,
                      border: `2px solid ${colors.accent}`,
                      boxShadow: `0 4px 20px ${colors.accent}20`
                    }}
                  >
                    <h3 
                      className={`text-2xl ${typography.headingFont} mb-3`}
                      style={{ color: colors.text }}
                    >
                      {cert.name}
                    </h3>
                    <p 
                      className={`text-xl mb-3 ${typography.bodyFont}`}
                      style={{ color: colors.textSecondary }}
                    >
                      {cert.issuer}
                    </p>
                    <p 
                      className={`text-sm mb-6 ${typography.bodyFont}`}
                      style={{ color: colors.textSecondary }}
                    >
                      {cert.date}
                    </p>
                    <a 
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                      style={{ 
                        backgroundColor: colors.secondary,
                        color: colors.background
                      }}
                    >
                      Ver Certificado
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div 
      className="min-h-screen w-full"
      style={{ backgroundColor: colors.background }}
    >
      {sections.map(section => renderSection(section.id))}
    </div>
  );
} 