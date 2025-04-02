'use client';

import { TemplateProps } from './types';

export default function Minimalist({ data, colors, sections, layout, typography }: TemplateProps) {
  const { basicInfo, experiences, projects, certificates } = data;

  // Função auxiliar para renderizar seções
  const renderSection = (sectionId: string) => {
    const section = sections.find(s => s.id === sectionId);
    if (!section?.enabled) return null;

    switch (sectionId) {
      case 'header':
        return (
          <header className={`py-24 ${layout.padding}`}>
            <div className={`max-w-${layout.maxWidth} mx-auto`}>
              <h1 
                className={`text-4xl md:text-5xl ${typography.headingFont} mb-6`}
                style={{ color: colors.text }}
              >
                {basicInfo.name}
              </h1>
              <h2 
                className={`text-xl md:text-2xl mb-8`}
                style={{ color: colors.textSecondary }}
              >
                {basicInfo.title}
              </h2>
              <p 
                className={`${typography.baseSize} leading-relaxed mb-12 ${typography.bodyFont}`}
                style={{ color: colors.text }}
              >
                {basicInfo.bio}
              </p>
              <div className={`flex flex-wrap gap-4 ${layout.spacing}`}>
                <a 
                  href={`mailto:${basicInfo.email}`}
                  className={`text-sm hover:underline transition-all duration-300 ${typography.bodyFont}`}
                  style={{ color: colors.primary }}
                >
                  {basicInfo.email}
                </a>
                <span className={`text-sm ${typography.bodyFont}`} style={{ color: colors.textSecondary }}>•</span>
                <a 
                  href={`tel:${basicInfo.phone}`}
                  className={`text-sm hover:underline transition-all duration-300 ${typography.bodyFont}`}
                  style={{ color: colors.primary }}
                >
                  {basicInfo.phone}
                </a>
                <span className={`text-sm ${typography.bodyFont}`} style={{ color: colors.textSecondary }}>•</span>
                <span 
                  className={`text-sm ${typography.bodyFont}`}
                  style={{ color: colors.textSecondary }}
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
                className={`text-2xl ${typography.headingFont} mb-12`}
                style={{ color: colors.text }}
              >
                {section.title || 'Experiência'}
              </h2>
              <div className={layout.spacing}>
                {experiences.map((exp) => (
                  <div 
                    key={exp.id}
                    className="group"
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                      <h3 
                        className={`text-lg ${typography.headingFont}`}
                        style={{ color: colors.text }}
                      >
                        {exp.position}
                      </h3>
                      <span 
                        className={`text-sm ${typography.bodyFont}`}
                        style={{ color: colors.textSecondary }}
                      >
                        {exp.company}
                      </span>
                      <span 
                        className={`text-sm ${typography.bodyFont}`}
                        style={{ color: colors.textSecondary }}
                      >
                        {exp.period}
                      </span>
                    </div>
                    <p 
                      className={`${typography.baseSize} leading-relaxed ${typography.bodyFont}`}
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
                className={`text-2xl ${typography.headingFont} mb-12`}
                style={{ color: colors.text }}
              >
                {section.title || 'Projetos'}
              </h2>
              <div className={layout.spacing}>
                {projects.map((project) => (
                  <div 
                    key={project.id}
                    className="group"
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                      <h3 
                        className={`text-lg ${typography.headingFont}`}
                        style={{ color: colors.text }}
                      >
                        {project.name}
                      </h3>
                      {section.customFields?.showTechnologies && (
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span 
                              key={tech}
                              className={`text-sm ${typography.bodyFont}`}
                              style={{ color: colors.textSecondary }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <p 
                      className={`${typography.baseSize} leading-relaxed mb-4 ${typography.bodyFont}`}
                      style={{ color: colors.text }}
                    >
                      {project.description}
                    </p>
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm hover:underline transition-all duration-300 inline-flex items-center gap-1 ${typography.bodyFont}`}
                      style={{ color: colors.primary }}
                    >
                      Ver projeto
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                className={`text-2xl ${typography.headingFont} mb-12`}
                style={{ color: colors.text }}
              >
                {section.title || 'Certificados'}
              </h2>
              <div className={layout.spacing}>
                {certificates.map((cert) => (
                  <div 
                    key={cert.id}
                    className="group"
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
                      <h3 
                        className={`text-lg ${typography.headingFont}`}
                        style={{ color: colors.text }}
                      >
                        {cert.name}
                      </h3>
                      <span 
                        className={`text-sm ${typography.bodyFont}`}
                        style={{ color: colors.textSecondary }}
                      >
                        {cert.issuer}
                      </span>
                      <span 
                        className={`text-sm ${typography.bodyFont}`}
                        style={{ color: colors.textSecondary }}
                      >
                        {cert.date}
                      </span>
                    </div>
                    <a 
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm hover:underline transition-all duration-300 inline-flex items-center gap-1 ${typography.bodyFont}`}
                      style={{ color: colors.primary }}
                    >
                      Ver certificado
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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