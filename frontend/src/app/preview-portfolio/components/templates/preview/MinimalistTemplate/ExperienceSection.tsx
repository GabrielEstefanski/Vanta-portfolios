import { TemplateConfig } from "../../../../../types/TemplateConfig";

export function ExperienceSection({ config }: { config: TemplateConfig }) {
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