'use client';

import { TemplateProps } from './types';

export default function Professional({ data, colors, sections, layout, typography }: TemplateProps) {
  const { basicInfo, experiences, projects, certificates } = data;

  // Função auxiliar para renderizar seções
  const renderSection = (sectionId: string) => {
    const section = sections.find(s => s.id === sectionId);
    if (!section?.enabled) return null;

    switch (sectionId) {
      case 'header':
        return (
          <header className={`relative py-20 ${layout.padding}`}>
            <div className={`max-w-${layout.maxWidth} mx-auto`}>
              <h1 
                className={`text-5xl md:text-6xl ${typography.headingFont} mb-4`}
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
                className={`text-lg max-w-2xl ${typography.bodyFont}`}
                style={{ color: colors.textSecondary }}
              >
                {basicInfo.bio}
              </p>
              <div className={`flex flex-wrap gap-4 mt-8 ${layout.spacing}`}>
                <a 
                  href={`mailto:${basicInfo.email}`}
                  className="px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                  style={{ 
                    backgroundColor: colors.primary,
                    color: colors.background
                  }}
                >
                  {basicInfo.email}
                </a>
                <a 
                  href={`tel:${basicInfo.phone}`}
                  className="px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                  style={{ 
                    backgroundColor: colors.secondary,
                    color: colors.background
                  }}
                >
                  {basicInfo.phone}
                </a>
                <span 
                  className="px-6 py-2 rounded-full text-sm font-medium"
                  style={{ 
                    backgroundColor: colors.accent,
                    color: colors.background
                  }}
                >
                  {basicInfo.location}
                </span>
              </div>
            </div>
          </header>
        );

      case 'experiences':
        return (
          <section className={`py-20 ${layout.padding}`}>
            <div className={`max-w-${layout.maxWidth} mx-auto`}>
              <h2 
                className={`text-3xl ${typography.headingFont} mb-12`}
                style={{ color: colors.text }}
              >
                {section.title || 'Experiência Profissional'}
              </h2>
              <div className={layout.spacing}>
                {experiences.map((exp) => (
                  <div 
                    key={exp.id}
                    className="p-6 rounded-lg transition-all duration-300 hover:scale-[1.02]"
                    style={{ 
                      backgroundColor: colors.background,
                      border: `1px solid ${colors.primary}`
                    }}
                  >
                    <h3 
                      className={`text-xl ${typography.headingFont} mb-2`}
                      style={{ color: colors.text }}
                    >
                      {exp.position}
                    </h3>
                    <h4 
                      className={`text-lg mb-2 ${typography.bodyFont}`}
                      style={{ color: colors.textSecondary }}
                    >
                      {exp.company}
                    </h4>
                    <p 
                      className={`text-sm mb-4 ${typography.bodyFont}`}
                      style={{ color: colors.textSecondary }}
                    >
                      {exp.period}
                    </p>
                    <p 
                      className={`${typography.baseSize} ${typography.bodyFont}`}
                      style={{ color: colors.text }}
                    >
                      {exp.description}
                    </p>
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
                className={`text-3xl ${typography.headingFont} mb-12`}
                style={{ color: colors.text }}
              >
                {section.title || 'Projetos'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project) => (
                  <div 
                    key={project.id}
                    className="p-6 rounded-lg transition-all duration-300 hover:scale-[1.02]"
                    style={{ 
                      backgroundColor: colors.background,
                      border: `1px solid ${colors.secondary}`
                    }}
                  >
                    <h3 
                      className={`text-xl ${typography.headingFont} mb-2`}
                      style={{ color: colors.text }}
                    >
                      {project.name}
                    </h3>
                    <p 
                      className={`${typography.baseSize} mb-4 ${typography.bodyFont}`}
                      style={{ color: colors.text }}
                    >
                      {project.description}
                    </p>
                    {section.customFields?.showTechnologies && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 rounded-full text-sm"
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
                      className="inline-block px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                      style={{ 
                        backgroundColor: colors.primary,
                        color: colors.background
                      }}
                    >
                      Ver Projeto
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
                className={`text-3xl ${typography.headingFont} mb-12`}
                style={{ color: colors.text }}
              >
                {section.title || 'Certificados'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {certificates.map((cert) => (
                  <div 
                    key={cert.id}
                    className="p-6 rounded-lg transition-all duration-300 hover:scale-[1.02]"
                    style={{ 
                      backgroundColor: colors.background,
                      border: `1px solid ${colors.accent}`
                    }}
                  >
                    <h3 
                      className={`text-xl ${typography.headingFont} mb-2`}
                      style={{ color: colors.text }}
                    >
                      {cert.name}
                    </h3>
                    <p 
                      className={`${typography.baseSize} mb-2 ${typography.bodyFont}`}
                      style={{ color: colors.textSecondary }}
                    >
                      {cert.issuer}
                    </p>
                    <p 
                      className={`text-sm mb-4 ${typography.bodyFont}`}
                      style={{ color: colors.textSecondary }}
                    >
                      {cert.date}
                    </p>
                    <a 
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                      style={{ 
                        backgroundColor: colors.secondary,
                        color: colors.background
                      }}
                    >
                      Ver Certificado
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